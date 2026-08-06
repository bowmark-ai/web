"""bowmark-web — the Python client for the Bowmark capability library.

``pip install bowmark-web bowmark-web-stubs`` and the whole ``bowmark.*`` surface is
typed in your editor, with no Bowmark source on your disk. **ZERO runtime
dependencies**, deliberately and permanently.

    import asyncio
    from bowmark_web import bowmark, session

    async def main() -> None:
        tracks = await bowmark.music.search("aphex twin")

        async with session() as bm:
            found = await bm.providers.gymshark.search({"query": "hoodie"})
            await bm.providers.gymshark.addToCart(
                {"variantId": found["products"][0]["variantId"]}
            )
            cart = await bm.providers.gymshark.getCart()

    asyncio.run(main())

── The types live in a SEPARATE distribution, and that is PEP 561's rule ────

``bowmark-web-stubs`` carries ``bowmark_web-stubs/__init__.pyi``, generated from the
same library manifest as the TypeScript ``.d.ts``. PEP 561: *"The name of the stub
package MUST follow the scheme ``foopkg-stubs``"* — mandated, not chosen. A checker
resolves the stub package AHEAD of this module's inline types, which is why the stub
declares this module's whole public surface rather than only the catalog: a partial
one would hide ``session`` and the error classes from every checker.

This package still ships ``py.typed``, so a caller who installs only the runtime keeps
the client's own types and loses only the catalog.

── The proxy accepts every name at runtime, and that is the point ───────────

``bowmark.anything.at.all()`` builds a path and sends it. The generated stubs are
therefore load-bearing rather than decorative: the proxy makes a correct call work
without enumerating half a million names, and the checker makes a wrong one an error.
Neither half is sufficient alone — the same split ``packages/runtime`` already ships
inside the sandbox.
"""

from __future__ import annotations

from importlib import metadata
from types import TracebackType
from typing import Any, Callable, Mapping, Sequence

from ._guard import WireProblem, assert_wire_safe_args, wire_problem
from ._transport import (
    BowmarkError,
    BowmarkNeedsUserError,
    ResolvedClient,
    call_in_session,
    close_session,
    open_session,
    post_run,
    resolve_client,
)
from ._validate import assert_arg_shape

__all__ = [
    "BowmarkError",
    "BowmarkNeedsUserError",
    "ManagedSession",
    "WireProblem",
    "bowmark",
    "client",
    "run",
    "session",
    "wire_problem",
]

try:
    #: Read from the INSTALLED distribution rather than restated here, so it cannot
    #: drift from `pyproject.toml`. `gate:facts-agree` holds the npm and PyPI versions
    #: to each other; a hardcoded string here would be a third place to forget.
    __version__ = metadata.version("bowmark-web")
except metadata.PackageNotFoundError:  # running from a source checkout
    __version__ = "0.0.0+local"

#: Names the proxy must NOT answer with another path segment.
#:
#: Python looks most special methods up on the TYPE rather than the instance, so this
#: is a much shorter list than the JavaScript proxy needs. What still reaches
#: ``__getattr__`` is the probing that libraries do by hand: ``copy``, ``pickle``,
#: ``unittest.mock`` and every ``hasattr`` in a REPL's completer. Answering one of
#: those with a callable path node makes this object silently un-copyable, un-picklable
#: and impossible to introspect.
_NOT_A_PATH_SEGMENT = frozenset(
    {
        "_ipython_canary_method_should_not_exist_",
        "_ipython_display_",
        "_repr_html_",
        "_repr_mimebundle_",
    }
)


class _Node:
    """One segment of a call path, callable at any depth."""

    __slots__ = ("_path", "_dispatch")

    def __init__(self, path: tuple[str, ...], dispatch: Any) -> None:
        object.__setattr__(self, "_path", path)
        object.__setattr__(self, "_dispatch", dispatch)

    def __getattr__(self, name: str) -> "_Node":
        # A dunder reaching here is always machinery, never a capability: the library
        # has no function whose name begins and ends with `__`, and answering one with
        # a path node breaks `copy`, `pickle` and `inspect` in ways that surface far
        # from here.
        if name.startswith("__") and name.endswith("__"):
            raise AttributeError(name)
        if name in _NOT_A_PATH_SEGMENT:
            raise AttributeError(name)
        return _Node((*self._path, name), self._dispatch)

    def __call__(self, *args: Any) -> Any:
        return self._dispatch(self._path, args)

    def __repr__(self) -> str:
        return f"<bowmark.{'.'.join(self._path)}>"


def _trim_trailing_none(args: Sequence[Any]) -> list[Any]:
    """Drop trailing ``None``s before the request.

    An omitted optional parameter has a ``None`` default in the generated stubs — that
    is the only spelling Python has — and sending it would put a literal ``null`` on
    the wire where the capability expects the argument to be ABSENT. Those are
    different facts to a capability that distinguishes "no filter" from "filter by
    null", and the JavaScript client has the same rule for ``undefined``.

    Only TRAILING ones. A ``None`` between two supplied arguments is positional and
    means the caller really did pass it.
    """
    trimmed = list(args)
    while trimmed and trimmed[-1] is None:
        trimmed.pop()
    return trimmed


def _dispatch_through(send: Any) -> Any:
    """One dispatch: validate the path, refuse a non-wire argument, then send it."""

    async def dispatch(path: tuple[str, ...], raw_args: Sequence[Any]) -> Any:
        label = ".".join(("bowmark", *path))
        # The API refuses a path shorter than two segments, and it is right to: every
        # real call is `<unit>.<fn>` or `providers.<id>.<fn>`. Saying so here costs a
        # round trip nothing and names the shape.
        if len(path) < 2:
            raise BowmarkError(
                f"{label} is not a callable path. Call a function on a unit — "
                "bowmark.music.search(…) or bowmark.providers.gymshark.search(…).",
                code="bad_path",
                path=label,
            )
        args = _trim_trailing_none(raw_args)
        # BEFORE the request, deliberately. A guard that ran server-side would report
        # a mangled value as a capability failure, after it had been metered.
        #
        # Two guards, in this order and not the other. `assert_wire_safe_args` answers
        # "can this value cross at all" — a `datetime`, a `set`, a class instance — and
        # its message is about JSON. `assert_arg_shape` answers "does it match what
        # this function declares". Shape-first would report a `datetime` as "expected a
        # string" and point the caller at the wrong bug.
        assert_wire_safe_args(label, args)
        assert_arg_shape(label, path, args)
        return await send(path, args)

    return dispatch


def _library(dispatch: Any) -> Any:
    return _Node((), dispatch)


class ManagedSession:
    """A block of calls against ONE live instance.

    Used as an async context manager, which is Python's own spelling of the
    ``finally``::

        async with session() as bm:
            ...

    **Each call is a round trip.** Stated rather than hidden, because a surface that
    looks like a local function call and is actually stateful is the leaky abstraction
    Cap'n Web is most criticised for, and it is how a caller writes an N+1 without
    noticing.

    Metering is per CALL, so opening and closing cost nothing.
    """

    def __init__(self, client: ResolvedClient) -> None:
        self._client = client
        self._session_id: str | None = None
        self._expires_at: str | None = None
        self._bowmark: Any | None = None

    @property
    def session_id(self) -> str:
        if self._session_id is None:
            raise BowmarkError(
                "the session is not open yet — use `async with session() as bm:` or await "
                "`open()` first.",
                code="session_not_open",
            )
        return self._session_id

    @property
    def expires_at(self) -> str:
        _ = self.session_id  # raises with the better message when unopened
        return self._expires_at or ""

    @property
    def bowmark(self) -> Any:
        _ = self.session_id
        return self._bowmark

    async def open(self) -> Any:
        opened = await open_session(self._client)
        self._session_id = opened["sessionId"]
        self._expires_at = opened.get("expiresAt")
        session_id = self._session_id

        async def send(path: tuple[str, ...], args: Sequence[Any]) -> Any:
            return await call_in_session(self._client, session_id, path, args)

        self._bowmark = _library(_dispatch_through(send))
        return self._bowmark

    async def close(self) -> dict[str, Any] | None:
        if self._session_id is None:
            return None
        session_id, self._session_id = self._session_id, None
        try:
            return await close_session(self._client, session_id)
        except Exception as err:  # noqa: BLE001
            # Swallowed, and reported through `on_log` rather than raised. A close that
            # failed on top of a body that raised would replace the caller's real error
            # with a cleanup detail; the session's TTL reaps what this could not reach.
            if self._client.on_log is not None:
                self._client.on_log(f"[bowmark] could not close session {session_id}: {err}")
            return None

    async def __aenter__(self) -> Any:
        return await self.open()

    async def __aexit__(
        self,
        exc_type: type[BaseException] | None,
        exc: BaseException | None,
        tb: TracebackType | None,
    ) -> None:
        await self.close()


def session(
    *,
    api_key: str | None = None,
    base_url: str | None = None,
    headers: Mapping[str, str] | None = None,
    timeout: float | None = None,
    on_log: Callable[[str], None] | None = None,
) -> ManagedSession:
    """Open a session whose lifetime is an ``async with`` block."""
    return ManagedSession(
        resolve_client(
            api_key=api_key,
            base_url=base_url,
            headers=headers,
            timeout=timeout,
            on_log=on_log,
        )
    )


def client(
    *,
    api_key: str | None = None,
    base_url: str | None = None,
    headers: Mapping[str, str] | None = None,
    timeout: float | None = None,
    on_log: Callable[[str], None] | None = None,
) -> Any:
    """The bare per-call form: every call opens its own one-shot session and closes it.

    Correct for a single call and WRONG for several — two calls get two instances and
    two cookie jars, so a cart filled by the first does not exist for the second, and
    the failure is silent (Shopify answers ``POST /cart/add.js`` with 200 and the line
    echoed back, then reports ``item_count: 0``). Use ``session()`` for anything
    multi-step.
    """
    options = {
        "api_key": api_key,
        "base_url": base_url,
        "headers": headers,
        "timeout": timeout,
        "on_log": on_log,
    }

    async def send(path: tuple[str, ...], args: Sequence[Any]) -> Any:
        # Resolved per CALL, not once at construction. The module-level `bowmark` is
        # built at import, and a consumer whose `BOWMARK_API_KEY` arrives after that
        # would otherwise be frozen against the environment as it stood at the top of
        # their file.
        resolved = resolve_client(**options)  # type: ignore[arg-type]
        opened = await open_session(resolved)
        try:
            return await call_in_session(resolved, opened["sessionId"], path, args)
        finally:
            try:
                await close_session(resolved, opened["sessionId"])
            except Exception as err:  # noqa: BLE001
                if resolved.on_log is not None:
                    resolved.on_log(
                        f"[bowmark] could not close session {opened['sessionId']}: {err}"
                    )

    return _library(_dispatch_through(send))


async def run(
    script: str,
    *,
    api_key: str | None = None,
    base_url: str | None = None,
    headers: Mapping[str, str] | None = None,
    timeout: float | None = None,
    on_log: Callable[[str], None] | None = None,
) -> dict[str, Any]:
    """Run a SCRIPT, as a string, in our sandbox — the agent path.

    Not deprecated and not hidden: an LLM emits text natively, so a tool call carrying
    a script is the right shape for one. It is also **untyped by construction** — a
    string gets no checking, so the generated stubs cover ``session()`` and
    ``bowmark``, never this. A person writing Python wants ``session()``.

    Returns the envelope rather than raising: a script is composite, so ``status``,
    ``logs`` and ``result`` are read together. ``needs_user`` carries a handoff URL in
    ``meta["handoff"]``.
    """
    return await post_run(
        resolve_client(
            api_key=api_key,
            base_url=base_url,
            headers=headers,
            timeout=timeout,
            on_log=on_log,
        ),
        script,
    )


#: The whole callable library, typed. ``await bowmark.music.search("aphex twin")``.
#:
#: Each call opens its own one-shot session, which is right for ONE call and wrong for
#: several. Reach for ``session()`` the moment a flow has a second step.
bowmark = client()