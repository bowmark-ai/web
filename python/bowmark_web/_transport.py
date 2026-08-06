"""The transport — ``urllib`` and nothing else.

Three session endpoints plus the string surface. No retries, no backoff, no
connection pool: every one of those is a policy a caller can hold better than we
can, and a client that silently retries an ``addToCart`` is the bug the idempotency
discussion in ``docs/reference/building-capabilities.md`` exists to prevent.

ZERO RUNTIME DEPENDENCIES, permanently — which is why this is ``urllib.request``
rather than ``httpx``. The envelope shapes are hand-restated rather than imported for
the same reason the TypeScript client restates them, and
``tests/test_envelopes.py`` compares the status vocabularies TEXTUALLY against
``node/src/transport.ts``. Adding a status on one side alone fails that test by name.

── Why the blocking call is wrapped rather than replaced ────────────────────

The public surface is ``async``, because a caller writing several calls wants them in
an event loop and because the generated stubs say so. ``urllib`` is blocking, so each
request runs in a worker thread via ``asyncio.to_thread``. The alternative —
hand-rolling HTTP over ``asyncio.open_connection`` — means writing TLS, chunked
transfer-encoding, redirects and proxy support ourselves, which is a worse trade than
one thread per in-flight request for a client whose calls take seconds.
``HTTP_PROXY``/``HTTPS_PROXY`` work for free, which a hand-rolled socket would have
had to reimplement.
"""

from __future__ import annotations

import asyncio
import json
import os
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from typing import Any, Callable, Mapping, Sequence

DEFAULT_BASE_URL = "https://api.bowmark.ai"
DEFAULT_TIMEOUT_SECONDS = 120.0

#: Sent on every request, and NOT optional.
#:
#: `urllib` identifies itself as `Python-urllib/3.x`, and Cloudflare in front of our own
#: API answers that with **Error 1010, "Access denied … based on your browser's
#: signature"** — a 403 before the request reaches us, on the very first call, for every
#: Python caller. Measured 2026-08-06 against `POST https://api.bowmark.ai/v1/session`:
#: default UA 403 (`error_code 1010`), this UA 200. `curl` and the Node client are both
#: unaffected, which is exactly why nothing had ever said so.
#:
#: A caller may override it through `headers`; the default exists so that nobody has to.
USER_AGENT = "bowmark-web-python"


class BowmarkError(Exception):
    """Anything this package raises.

    ``code`` is the field to branch on. The API sends prose in ``error`` written for
    an agent to read, which is the wrong shape for an ``except`` block — both are
    present and neither replaces the other.
    """

    def __init__(
        self,
        message: str,
        *,
        code: str,
        http_status: int = 0,
        logs: Sequence[str] | None = None,
        path: str | None = None,
    ) -> None:
        super().__init__(message)
        self.code = code
        #: HTTP status, or 0 when the request never reached us.
        self.http_status = http_status
        self.logs = list(logs or ())
        #: The path that failed, as a caller writes it: ``bowmark.music.search``.
        self.path = path


class BowmarkNeedsUserError(BowmarkError):
    """One call paused for a human login. **The session is still open** and the same
    call can be retried once the person has signed in at ``handoff["url"]``.

    A subclass rather than a ``code``, because the recovery is completely different: a
    ``BowmarkError`` means stop or fix the call, and this means show a URL and wait. An
    agent that reads a failure retries, and retrying a login halt buys the same halt.
    """

    def __init__(
        self,
        message: str,
        *,
        code: str,
        http_status: int = 0,
        logs: Sequence[str] | None = None,
        path: str | None = None,
        handoff: Mapping[str, Any] | None = None,
        needs: Sequence[Mapping[str, Any]] | None = None,
    ) -> None:
        super().__init__(message, code=code, http_status=http_status, logs=logs, path=path)
        self.handoff = dict(handoff) if handoff is not None else None
        self.needs = [dict(n) for n in (needs or ())]


@dataclass(frozen=True)
class ResolvedClient:
    """A caller's options with every default already applied, so nothing downstream
    has to remember which of them were optional."""

    api_key: str | None
    base_url: str
    headers: dict[str, str] = field(default_factory=dict)
    timeout: float = DEFAULT_TIMEOUT_SECONDS
    on_log: Callable[[str], None] | None = None


def resolve_client(
    *,
    api_key: str | None = None,
    base_url: str | None = None,
    headers: Mapping[str, str] | None = None,
    timeout: float | None = None,
    on_log: Callable[[str], None] | None = None,
) -> ResolvedClient:
    """Read the environment at CALL time, not at import time.

    A consumer whose ``BOWMARK_API_KEY`` is set by a ``.env`` loader that runs after
    their first import would otherwise be frozen against the environment as it stood
    at the top of their file.
    """
    return ResolvedClient(
        api_key=api_key if api_key is not None else (os.environ.get("BOWMARK_API_KEY") or None),
        base_url=(
            base_url or os.environ.get("BOWMARK_API_URL") or DEFAULT_BASE_URL
        ).rstrip("/"),
        headers=dict(headers or {}),
        timeout=DEFAULT_TIMEOUT_SECONDS if timeout is None else timeout,
        on_log=on_log,
    )


def _version() -> str:
    """The installed distribution's version, or a source-checkout marker.

    Read from metadata rather than restated, so the User-Agent cannot drift from what
    was actually published — the whole point of putting a version in one is telling a
    server which client is calling."""
    try:
        from importlib import metadata

        return metadata.version("bowmark-web")
    except Exception:  # noqa: BLE001 — a missing distribution is not a reason to fail a call
        return "0.0.0+local"


def _post_json_blocking(
    client: ResolvedClient, path: str, body: Any
) -> tuple[int, Any]:
    url = f"{client.base_url}{path}"
    # The caller's headers go on FIRST so `authorization` and `content-type` win — a
    # header that silently replaced the API key would make an unauthenticated call
    # look like a permissions problem on our side.
    headers = dict(client.headers)
    headers.setdefault("user-agent", f"{USER_AGENT}/{_version()}")
    headers["content-type"] = "application/json"
    headers["accept"] = "application/json"
    if client.api_key:
        headers["authorization"] = f"Bearer {client.api_key}"

    request = urllib.request.Request(
        url, data=json.dumps(body).encode("utf-8"), headers=headers, method="POST"
    )
    try:
        with urllib.request.urlopen(request, timeout=client.timeout) as response:
            status = response.status
            text = response.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as err:
        # A 4xx/5xx still carries our envelope, and the envelope is the useful part.
        status = err.code
        text = err.read().decode("utf-8", errors="replace")
    except Exception as err:  # noqa: BLE001 — a transport failure is not a capability failure
        # Conflating the two is how a caller comes to retry a DNS problem against a
        # site.
        raise BowmarkError(
            f"could not reach {url}: {err}", code="network_error"
        ) from err

    if not text:
        return status, None
    try:
        return status, json.loads(text)
    except json.JSONDecodeError as err:
        # A non-JSON body at this point is a proxy, a captive portal or an outage —
        # never us. Quote a bounded slice of it, because a bare parse error with no
        # body is the least actionable message in software.
        raise BowmarkError(
            f"{url} answered {status} with a non-JSON body: {text[:200]}",
            code="bad_response",
            http_status=status,
        ) from err


async def post_json(client: ResolvedClient, path: str, body: Any) -> tuple[int, Any]:
    return await asyncio.to_thread(_post_json_blocking, client, path, body)


def _drain_logs(client: ResolvedClient, payload: Any) -> None:
    if client.on_log is None or not isinstance(payload, dict):
        return
    for line in payload.get("logs") or ():
        client.on_log(str(line))


async def open_session(client: ResolvedClient) -> dict[str, Any]:
    status, payload = await post_json(client, "/v1/session", {})
    envelope = payload if isinstance(payload, dict) else {}
    if status != 200 or not envelope.get("sessionId"):
        raise BowmarkError(
            envelope.get("error") or f"could not open a session (HTTP {status})",
            code=envelope.get("code") or f"http_{status}",
            http_status=status,
        )
    return {"sessionId": envelope["sessionId"], "expiresAt": envelope.get("expiresAt")}


async def call_in_session(
    client: ResolvedClient,
    session_id: str,
    path: Sequence[str],
    args: Sequence[Any],
) -> Any:
    """Dispatch ONE call inside an open session, and unwrap it.

    Returns the capability's own return value, because that is what the generated
    stubs promise. The envelope's other fields are not dropped: ``logs`` go to
    ``on_log``, and anything that is not ``status == "ok"`` becomes a raise carrying
    ``code``.
    """
    label = ".".join(("bowmark", *path))
    status, payload = await post_json(
        client,
        f"/v1/session/{urllib.parse.quote(session_id, safe='')}/call",
        {"path": list(path), "args": list(args)},
    )
    _drain_logs(client, payload)
    envelope = payload if isinstance(payload, dict) else {}

    if envelope.get("status") == "needs_user":
        raise BowmarkNeedsUserError(
            envelope.get("error")
            or (
                f"{label} paused for a login. Open the handoff URL, sign in, then call "
                "it again — the session is still open."
            ),
            code=envelope.get("code") or "needs_user",
            http_status=status,
            logs=envelope.get("logs"),
            path=label,
            handoff=(envelope.get("meta") or {}).get("handoff"),
            needs=envelope.get("needs"),
        )

    if status != 200 or envelope.get("ok") is not True:
        raise BowmarkError(
            envelope.get("error") or f"{label} failed (HTTP {status})",
            code=envelope.get("code") or f"http_{status}",
            http_status=status,
            logs=envelope.get("logs"),
            path=label,
        )
    return envelope.get("result")


async def close_session(client: ResolvedClient, session_id: str) -> dict[str, Any] | None:
    """Close a session. Idempotent server-side, so a ``finally`` that runs twice is
    fine."""
    status, payload = await post_json(
        client, f"/v1/session/{urllib.parse.quote(session_id, safe='')}/close", {}
    )
    if status != 200 or not isinstance(payload, dict) or payload.get("ok") is not True:
        return None
    return {"ok": True, "calls": payload.get("calls"), "ms": payload.get("ms")}


async def post_run(client: ResolvedClient, script: str) -> dict[str, Any]:
    """The string surface. Returns the ENVELOPE rather than raising, because a script
    is composite: a ``needs_user`` or an ``error`` is a fact about the run that a
    caller reads alongside ``logs`` and ``result``, not an exception in their control
    flow."""
    status, payload = await post_json(client, "/v1/run", {"script": script})
    _drain_logs(client, payload)
    if not isinstance(payload, dict):
        raise BowmarkError(
            f"/v1/run answered {status} with an empty body",
            code=f"http_{status}",
            http_status=status,
        )
    return payload
