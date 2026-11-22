"""The client, against a stubbed transport. No network anywhere in this file.

Run with the stdlib and nothing else::

    python3 -m unittest discover -s packages/bowmark-web/python -t packages/bowmark-web/python

That is deliberate: this suite is a step in `ci.yml`'s hermetic fast gate, and a gate
that needs `pip install` needs the network, which the gate does not have. It is also
the whole reason the client has no dependencies — a package that cannot be tested
without installing something is a package whose tests do not run.
"""

from __future__ import annotations

import asyncio
import json
import sys
import unittest
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import bowmark_web  # noqa: E402
from bowmark_web import BowmarkError, BowmarkNeedsUserError  # noqa: E402
from bowmark_web import _transport  # noqa: E402


class FakeApi:
    """Records every request and answers from a scripted queue.

    Substituted for `post_json`, which is the ONE place the package touches the
    network — so a double here is a double for the whole transport rather than for one
    method, and nothing in the call path is left unexercised.
    """

    def __init__(self, responses: list[tuple[int, Any]]) -> None:
        self.responses = list(responses)
        self.requests: list[tuple[str, Any]] = []
        self.headers: list[dict[str, str]] = []

    async def __call__(
        self,
        client: Any,
        path: str,
        body: Any,
        retry_transport: bool = False,
        extra_headers: Any = None,
    ) -> tuple[int, Any]:
        self.requests.append((path, body))
        self.headers.append(dict(extra_headers or {}))
        if not self.responses:
            raise AssertionError(f"no scripted response left for {path}")
        return self.responses.pop(0)


class TransportPatch:
    """Swap `post_json` in every module that imported it by value."""

    def __init__(self, fake: FakeApi) -> None:
        self.fake = fake
        self.saved: list[tuple[Any, str, Any]] = []

    def __enter__(self) -> FakeApi:
        for module in (_transport,):
            self.saved.append((module, "post_json", module.post_json))
            module.post_json = self.fake  # type: ignore[assignment]
        return self.fake

    def __exit__(self, *_: object) -> None:
        for module, name, original in self.saved:
            setattr(module, name, original)


OPENED = (200, {"sessionId": "sess_1", "expiresAt": "2026-08-06T05:00:00.000Z"})
CLOSED = (200, {"ok": True, "calls": 3, "ms": 12})


def ok(result: Any, logs: list[str] | None = None) -> tuple[int, Any]:
    return 200, {"ok": True, "status": "ok", "result": result, "logs": logs or []}


class SessionShape(unittest.TestCase):
    def test_one_session_block_is_one_open_n_calls_one_close(self) -> None:
        """The property the whole surface exists for: N calls share ONE instance.

        Asserted on the REQUESTS rather than on a return value, because a client that
        opened a session per call would return the same three answers and quietly cost
        three browsers and three cookie jars.
        """
        fake = FakeApi([OPENED, ok({"a": 1}), ok({"b": 2}), ok({"c": 3}), CLOSED])

        async def body() -> list[Any]:
            with TransportPatch(fake):
                async with bowmark_web.session() as bm:
                    return [
                        await bm.music.search("aphex twin"),
                        await bm.music.search("boards of canada"),
                        await bm.music.search("burial"),
                    ]

        results = asyncio.run(body())
        self.assertEqual(results, [{"a": 1}, {"b": 2}, {"c": 3}])
        paths = [path for path, _ in fake.requests]
        self.assertEqual(
            paths,
            [
                "/v1/session",
                "/v1/session/sess_1/call",
                "/v1/session/sess_1/call",
                "/v1/session/sess_1/call",
                "/v1/session/sess_1/close",
            ],
        )

    def test_the_session_closes_even_when_the_body_raises(self) -> None:
        fake = FakeApi([OPENED, ok({"a": 1}), CLOSED])

        async def body() -> None:
            with TransportPatch(fake):
                async with bowmark_web.session() as bm:
                    await bm.music.search("x")
                    raise RuntimeError("caller blew up")

        with self.assertRaises(RuntimeError):
            asyncio.run(body())
        self.assertEqual(fake.requests[-1][0], "/v1/session/sess_1/close")

    def test_the_call_body_is_a_path_array_and_a_positional_args_array(self) -> None:
        fake = FakeApi([OPENED, ok(None), CLOSED])

        async def body() -> None:
            with TransportPatch(fake):
                async with bowmark_web.session() as bm:
                    await bm.providers.gymshark.search({"query": "hoodie"})

        asyncio.run(body())
        _, payload = fake.requests[1]
        self.assertEqual(payload["path"], ["providers", "gymshark", "search"])
        self.assertEqual(payload["args"], [{"query": "hoodie"}])

    def test_client_opens_and_closes_a_session_per_call(self) -> None:
        """The documented cost of the one-shot form, asserted rather than described."""
        fake = FakeApi([OPENED, ok(1), CLOSED, OPENED, ok(2), CLOSED])

        async def body() -> list[Any]:
            with TransportPatch(fake):
                bm = bowmark_web.client()
                return [await bm.music.search("a"), await bm.music.search("b")]

        self.assertEqual(asyncio.run(body()), [1, 2])
        self.assertEqual([p for p, _ in fake.requests].count("/v1/session"), 2)


class Unwrapping(unittest.TestCase):
    def test_needs_user_is_its_own_error_carrying_the_handoff(self) -> None:
        """`needs_user` is a PAUSE, not a failure, and the session stays open — so it
        maps to a subclass rather than being folded into a generic error."""
        paused = (
            200,
            {
                "ok": False,
                "status": "needs_user",
                "error": "sign in first",
                "code": "needs_login",
                "meta": {"handoff": {"ref": "h1", "url": "https://x/y", "expiresAt": "z"}},
                "needs": [{"capability": "c", "provider": "p"}],
            },
        )
        fake = FakeApi([OPENED, paused, CLOSED])

        async def body() -> None:
            with TransportPatch(fake):
                async with bowmark_web.session() as bm:
                    await bm.music.search("x")

        with self.assertRaises(BowmarkNeedsUserError) as caught:
            asyncio.run(body())
        self.assertEqual(caught.exception.code, "needs_login")
        self.assertEqual(caught.exception.handoff["url"], "https://x/y")
        self.assertEqual(len(caught.exception.needs), 1)

    def test_an_error_envelope_becomes_a_raise_carrying_code_and_path(self) -> None:
        failed = (200, {"ok": False, "status": "error", "error": "site down", "code": "reach_failed"})
        fake = FakeApi([OPENED, failed, CLOSED])

        async def body() -> None:
            with TransportPatch(fake):
                async with bowmark_web.session() as bm:
                    await bm.music.search("x")

        with self.assertRaises(BowmarkError) as caught:
            asyncio.run(body())
        self.assertEqual(caught.exception.code, "reach_failed")
        self.assertEqual(caught.exception.path, "bowmark.music.search")

    def test_logs_reach_on_log_and_are_not_in_the_return_value(self) -> None:
        seen: list[str] = []
        fake = FakeApi([OPENED, ok({"r": 1}, logs=["one", "two"]), CLOSED])

        async def body() -> Any:
            with TransportPatch(fake):
                async with bowmark_web.session(on_log=seen.append) as bm:
                    return await bm.music.search("x")

        self.assertEqual(asyncio.run(body()), {"r": 1})
        self.assertEqual(seen, ["one", "two"])


class Guards(unittest.TestCase):
    """Every refusal below happens BEFORE a request, which is what the empty
    `fake.requests` asserts. A guard that ran server-side would report a mangled value
    as a capability failure, after it had been metered."""

    def test_run_refuses_a_function_and_names_session(self) -> None:
        """A callable has no wire form. Refused here, not returned as an envelope."""
        fake = FakeApi([])

        async def body() -> None:
            with TransportPatch(fake):
                await bowmark_web.run(lambda: None)  # type: ignore[arg-type]

        with self.assertRaises(BowmarkError) as caught:
            asyncio.run(body())
        self.assertEqual(caught.exception.code, "run_not_a_string")
        self.assertIn("STRING", str(caught.exception))
        self.assertIn("a function", str(caught.exception))
        self.assertIn("session()", str(caught.exception))
        self.assertEqual(fake.requests, [], "the request was sent anyway")

    def _refuse(self, call: Any) -> BowmarkError:
        fake = FakeApi([])

        async def body() -> None:
            with TransportPatch(fake):
                await call(bowmark_web.client())

        with self.assertRaises(BowmarkError) as caught:
            asyncio.run(body())
        self.assertEqual(fake.requests, [], "the request was sent anyway")
        return caught.exception

    def test_a_non_json_value_is_refused_with_its_path(self) -> None:
        import datetime

        err = self._refuse(
            lambda bm: bm.music.search({"when": datetime.datetime(2026, 1, 1)})
        )
        self.assertEqual(err.code, "wire_refused")
        self.assertIn("args[0].when", str(err))
        self.assertIn("datetime", str(err))

    def test_a_wrong_shape_is_refused_naming_the_field(self) -> None:
        err = self._refuse(lambda bm: bm.music.search(5))
        self.assertEqual(err.code, "bad_argument")
        self.assertIn("args[0]", str(err))

    def test_a_short_path_is_refused(self) -> None:
        err = self._refuse(lambda bm: bm.music())
        self.assertEqual(err.code, "bad_path")

    def test_an_unknown_function_on_a_KNOWN_unit_is_refused(self) -> None:
        err = self._refuse(lambda bm: bm.music.searchHarder("x"))
        self.assertEqual(err.code, "unknown_function")

    def test_an_unknown_UNIT_passes_through(self) -> None:
        """A Shopify family MEMBER is deliberately absent from every manifest, so an
        unknown unit is the NORMAL case for most of the library. Refusing it would have
        this package refuse the largest part of what it is a client for."""
        fake = FakeApi([OPENED, ok({"products": []}), CLOSED])

        async def body() -> Any:
            with TransportPatch(fake):
                bm = bowmark_web.client()
                return await bm.providers.gymshark.search({"query": "hoodie"})

        self.assertEqual(asyncio.run(body()), {"products": []})


class Headers(unittest.TestCase):
    def test_every_request_carries_an_explicit_user_agent(self) -> None:
        """`urllib` identifies itself as `Python-urllib/3.x`, and Cloudflare in front of
        our own API answers that with Error 1010 — a 403 before the request reaches us,
        on the very first call, for every Python caller.

        Measured 2026-08-06 against `POST https://api.bowmark.ai/v1/session`: default UA
        403 `error_code 1010`, this UA 200. `curl` and the Node client are unaffected,
        which is exactly why nothing had ever said so — and why this is asserted rather
        than left to the header dict looking obviously right."""
        from bowmark_web._transport import USER_AGENT, _post_json_blocking

        seen: dict[str, str] = {}

        class FakeResponse:
            status = 200

            def read(self) -> bytes:
                return b"{}"

            def __enter__(self) -> "FakeResponse":
                return self

            def __exit__(self, *_: object) -> None:
                return None

        def fake_urlopen(request: Any, timeout: float = 0) -> FakeResponse:
            seen.update({k.lower(): v for k, v in request.header_items()})
            return FakeResponse()

        original = _transport.urllib.request.urlopen
        _transport.urllib.request.urlopen = fake_urlopen  # type: ignore[assignment]
        try:
            _post_json_blocking(_transport.resolve_client(api_key="bmk_test"), "/v1/session", {})
        finally:
            _transport.urllib.request.urlopen = original  # type: ignore[assignment]

        self.assertIn("user-agent", seen)
        self.assertTrue(seen["user-agent"].startswith(USER_AGENT), seen["user-agent"])
        self.assertNotIn("python-urllib", seen["user-agent"].lower())

    def test_no_key_raises_before_any_request(self) -> None:
        import os

        from bowmark_web._transport import _post_json_blocking

        sent: list[Any] = []
        original = _transport.urllib.request.urlopen
        _transport.urllib.request.urlopen = lambda *a, **k: sent.append(a)  # type: ignore[assignment]
        ambient = os.environ.pop("BOWMARK_API_KEY", None)
        try:
            with self.assertRaises(BowmarkError) as raised:
                _post_json_blocking(_transport.resolve_client(), "/v1/session", {})
        finally:
            _transport.urllib.request.urlopen = original  # type: ignore[assignment]
            if ambient is not None:
                os.environ["BOWMARK_API_KEY"] = ambient
        self.assertEqual(raised.exception.code, "no_api_key")
        self.assertIn("https://bowmark.ai/dashboard/keys", str(raised.exception))
        self.assertEqual(sent, [])

    def test_a_caller_may_override_it(self) -> None:
        from bowmark_web._transport import resolve_client

        client = resolve_client(headers={"user-agent": "mine/1"})
        self.assertEqual(client.headers["user-agent"], "mine/1")


class TrailingNone(unittest.TestCase):
    def test_an_omitted_optional_is_ABSENT_on_the_wire_not_null(self) -> None:
        """The stubs give every optional parameter a `None` default — the only spelling
        Python has — and a literal `null` is a different fact to a capability that
        distinguishes "no filter" from "filter by null"."""
        fake = FakeApi([OPENED, ok([]), CLOSED])

        async def body() -> None:
            with TransportPatch(fake):
                bm = bowmark_web.client()
                await bm.music.search("aphex twin", None, None)

        asyncio.run(body())
        self.assertEqual(fake.requests[1][1]["args"], ["aphex twin"])

    def test_only_TRAILING_nones_are_dropped(self) -> None:
        from bowmark_web import _trim_trailing_none

        self.assertEqual(_trim_trailing_none(["a", None, "b", None, None]), ["a", None, "b"])


class ProxyHygiene(unittest.TestCase):
    def test_a_dunder_raises_AttributeError_rather_than_becoming_a_path(self) -> None:
        """`copy`, `pickle`, `inspect` and every REPL completer probe by hand. A path
        node that answered `__deepcopy__` with a callable makes this object silently
        un-copyable in a way that surfaces far from here."""
        bm = bowmark_web.client()
        # `__getstate__` is deliberately absent from this list: `object` grew a real
        # one in 3.11, so it never reaches `__getattr__` and asserting on it would be
        # asserting on CPython rather than on this class.
        for name in ("__deepcopy__", "__iter__", "__len__", "__copy__"):
            with self.assertRaises(AttributeError, msg=name):
                getattr(bm, name)
        # BOTH ends, not either. A capability could legitimately be called `__x` or
        # `y__`, and refusing those would delete a real function from the surface.
        #
        # Reached with `getattr` rather than written as `bm.unit.__x`: inside a class
        # body Python MANGLES a leading-double-underscore attribute to
        # `_ProxyHygiene__x` before this object ever sees it. That is a real trap for a
        # caller too, and the answer is the same — `getattr`.
        self.assertEqual(repr(getattr(bm.unit, "__x")), "<bowmark.unit.__x>")
        self.assertEqual(repr(bm.unit.y__), "<bowmark.unit.y__>")

    def test_a_path_node_reprs_as_the_path_a_caller_wrote(self) -> None:
        self.assertEqual(repr(bowmark_web.client().music.search), "<bowmark.music.search>")


class ValidatorTable(unittest.TestCase):
    def test_the_shipped_table_is_the_one_the_generator_wrote(self) -> None:
        """A wheel without `_validators.json` installs a client that cannot validate an
        argument, and nothing else would say so — `assert_arg_shape` would raise a
        `FileNotFoundError` from inside a capability call."""
        from bowmark_web._validate import validators

        table = validators()
        self.assertIn("version", table)
        self.assertGreater(len(table["units"]), 50)
        self.assertIn("music", table["units"])

    def test_it_is_byte_identical_to_the_table_the_typescript_client_embeds(self) -> None:
        """One table, two interpreters. A second serialization of the same manifest
        would drift the day one generator changed and the other did not."""
        embedded = (
            Path(__file__).resolve().parents[2]
            / "node"
            / "src"
            / "generated"
            / "validators.ts"
        ).read_text("utf-8")
        start = embedded.index("= ") + 2
        end = embedded.rindex(";")
        from bowmark_web._validate import validators

        self.assertEqual(json.loads(embedded[start:end]), validators())


class TransportResets(unittest.TestCase):
    """A reset is "no response came back". The retry is bounded, is taken only for a
    request the caller declared safe to repeat, and a response is never retried.

    ``urlopen`` is the one socket boundary, so it is stubbed here and every attempt is
    counted. ``time.sleep`` is stubbed too, so the waits cost nothing in a test."""

    def _urlopen(self, outcomes: list[Any]) -> tuple[Any, list[int]]:
        """Scripted answers: an exception is raised, a ``(status, body)`` is returned
        (4xx/5xx arrives as ``HTTPError``, the way urllib delivers it). The last outcome
        repeats once the script runs out."""
        import io
        import urllib.error
        from unittest import mock

        calls: list[int] = []
        script = list(outcomes)

        class Body:
            def __init__(self, data: bytes) -> None:
                self.data = data
                self.status = 200

            def read(self) -> bytes:
                return self.data

            def __enter__(self) -> "Body":
                return self

            def __exit__(self, *_: object) -> None:
                return None

        def fake(request: Any, timeout: float = 0) -> Body:
            calls.append(1)
            outcome = script.pop(0) if len(script) > 1 else script[0]
            if isinstance(outcome, BaseException):
                raise outcome
            status, body = outcome
            data = json.dumps(body).encode("utf-8")
            if status >= 400:
                raise urllib.error.HTTPError(
                    request.full_url, status, "x", {}, io.BytesIO(data)  # type: ignore[arg-type]
                )
            return Body(data)

        patcher = mock.patch.object(_transport.urllib.request, "urlopen", fake)
        sleeper = mock.patch.object(_transport.time, "sleep", lambda _s: None)
        patcher.start()
        sleeper.start()
        self.addCleanup(patcher.stop)
        self.addCleanup(sleeper.stop)
        return fake, calls

    def test_a_close_that_resets_once_is_retried(self) -> None:
        _, calls = self._urlopen([OSError("connection reset"), CLOSED])
        client = _transport.resolve_client(api_key="bmk_test")
        result = asyncio.run(_transport.close_session(client, "sess_1"))
        self.assertEqual(result, {"ok": True, "calls": 3, "ms": 12})
        self.assertEqual(len(calls), 2)

    def test_a_close_that_never_lands_raises_network_error_after_three_attempts(self) -> None:
        _, calls = self._urlopen([OSError("connection reset")])
        client = _transport.resolve_client(api_key="bmk_test")
        with self.assertRaises(BowmarkError) as raised:
            asyncio.run(_transport.close_session(client, "sess_1"))
        self.assertEqual(raised.exception.code, "network_error")
        self.assertEqual(len(calls), 3)

    def test_run_without_idempotent_does_not_retry_a_reset(self) -> None:
        _, calls = self._urlopen([OSError("connection reset")])
        with self.assertRaises(BowmarkError) as raised:
            asyncio.run(
                bowmark_web.run("await bowmark.browser_agent.stop('a')", api_key="bmk_test")
            )
        self.assertEqual(raised.exception.code, "network_error")
        self.assertEqual(len(calls), 1)

    def test_idempotent_run_retries_resets_and_returns_the_envelope(self) -> None:
        _, calls = self._urlopen(
            [OSError("reset"), OSError("reset"), (200, {"ok": True, "status": "ok", "result": "polled"})]
        )
        envelope = asyncio.run(
            bowmark_web.run(
                "return await bowmark.browser_agent.status('a')",
                api_key="bmk_test",
                idempotent=True,
            )
        )
        self.assertEqual(envelope["result"], "polled")
        self.assertEqual(len(calls), 3)

    def test_idempotent_run_still_raises_once_every_attempt_has_reset(self) -> None:
        _, calls = self._urlopen([OSError("reset")])
        with self.assertRaises(BowmarkError) as raised:
            asyncio.run(bowmark_web.run("return 1", api_key="bmk_test", idempotent=True))
        self.assertEqual(raised.exception.code, "network_error")
        self.assertEqual(len(calls), 3)

    def test_a_500_is_never_retried_even_when_idempotent(self) -> None:
        _, calls = self._urlopen([(500, {"ok": False, "status": "error", "error": "boom"})])
        envelope = asyncio.run(bowmark_web.run("return 1", api_key="bmk_test", idempotent=True))
        self.assertEqual(envelope["status"], "error")
        self.assertEqual(len(calls), 1)


if __name__ == "__main__":
    unittest.main()


class Drift(unittest.TestCase):
    """A typed call sends this package's digest of the function; the api's ``drift``
    notice is printed once per function per process (note 0014, 2026-11-21)."""

    PATH = ["music", "search"]

    def setUp(self) -> None:
        _transport.reset_drift_reports()
        table = _transport.validators()
        self.unit = table["units"]["music"]
        self.saved = self.unit.get("digests")
        self.unit["digests"] = {"search": "0123456789abcdef"}

    def tearDown(self) -> None:
        if self.saved is None:
            self.unit.pop("digests", None)
        else:
            self.unit["digests"] = self.saved
        _transport.reset_drift_reports()

    def _call_twice(self, reply: tuple[int, Any]) -> tuple[FakeApi, str]:
        import contextlib
        import io

        err = io.StringIO()
        with TransportPatch(FakeApi([OPENED, reply, reply, CLOSED])) as fake:
            with contextlib.redirect_stderr(err):

                async def body() -> None:
                    async with bowmark_web.session(api_key="bmk_test") as bm:
                        for _ in range(2):
                            try:
                                await bm.music.search("aphex twin")
                            except BowmarkError:
                                pass

                asyncio.run(body())
        return fake, err.getvalue()

    def test_the_call_carries_the_digest_header(self) -> None:
        fake, _ = self._call_twice(ok([]))
        call_headers = [h for (p, _), h in zip(fake.requests, fake.headers) if p.endswith("/call")]
        self.assertEqual(call_headers, [{"x-bowmark-fn-digest": "0123456789abcdef"}] * 2)

    def test_no_digest_no_header(self) -> None:
        self.unit["digests"] = {}
        fake, _ = self._call_twice(ok([]))
        self.assertTrue(all(h == {} for h in fake.headers))

    def test_changed_prints_once_and_the_call_returns(self) -> None:
        reply = (200, {"ok": True, "status": "ok", "result": [], "drift": {
            "level": "warn", "kind": "changed", "message": "bowmark.music.search: something changed"}})
        _, err = self._call_twice(reply)
        self.assertEqual(err.count("something changed"), 1)

    def test_removed_prints_once_and_the_call_still_raises(self) -> None:
        reply = (200, {"ok": False, "status": "error", "error": "no such function",
                       "code": "unknown_function", "drift": {
                           "level": "error", "kind": "removed", "message": "no longer available"}})
        _, err = self._call_twice(reply)
        self.assertEqual(err.count("no longer available"), 1)

    def test_a_malformed_drift_prints_nothing(self) -> None:
        reply = (200, {"ok": True, "status": "ok", "result": [], "drift": "stale"})
        _, err = self._call_twice(reply)
        self.assertEqual(err, "")

    def test_a_broken_stderr_never_fails_the_call(self) -> None:
        import io

        closed = io.StringIO()
        closed.close()
        saved, sys.stderr = sys.stderr, closed
        try:
            _transport.report_drift("bowmark.music.search", {"kind": "changed", "message": "m"})
        finally:
            sys.stderr = saved
