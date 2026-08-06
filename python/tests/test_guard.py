"""The wire guard, over a table mirroring the TypeScript one case for case.

── What is shared with `node/src/guard.ts` is the RULE, not the wording ─────

The TypeScript guard is a checked, byte-for-byte copy of `wireProblem` in
`packages/schema/src/wire.ts`, and its test asserts identical `{path, reason}` strings
for every fixture. That contract cannot cross to Python, and the reason is a fact about
the languages rather than a gap:

  * The two runtimes refuse different THINGS. JavaScript has `bigint`, `Symbol`, `Map`
    and a `function`; Python has `set`, `tuple`, `bytes`, `datetime` and `Decimal`.
    Neither list is a subset of the other.
  * A refusal MESSAGE names the offending Python type, because that is what the caller
    is looking at. Telling a Python programmer their value "is a Map instance" would be
    worse than saying nothing at all.

So what is asserted here is the property: **only JSON crosses**, the first refusal is
returned with its PATH, and every case the TypeScript table covers has an analogue
here or a comment saying why it cannot.
"""

from __future__ import annotations

import datetime
import decimal
import math
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from bowmark_web._guard import assert_wire_safe_args, wire_problem  # noqa: E402
from bowmark_web._transport import BowmarkError  # noqa: E402


class Accepts(unittest.TestCase):
    def test_every_json_shape_passes(self) -> None:
        for value in (
            None,
            True,
            False,
            0,
            -1,
            1.5,
            2**53 - 1,
            "",
            "hello",
            [],
            [1, "two", None, {"a": [1]}],
            {},
            {"a": 1, "b": {"c": [True, None]}},
        ):
            self.assertIsNone(wire_problem(value), repr(value))


class Refuses(unittest.TestCase):
    def check(self, value: object, path: str, needle: str) -> None:
        problem = wire_problem(value)
        self.assertIsNotNone(problem, f"{value!r} should have been refused")
        assert problem is not None
        self.assertEqual(problem.path, path)
        self.assertIn(needle, problem.reason)

    def test_a_non_finite_float(self) -> None:
        # `json.dumps` emits bare `NaN`/`Infinity` by default. Those are not JSON, and
        # this is the silent-lossy class the guard exists to catch — the same case the
        # TypeScript guard catches on `Number.isFinite`.
        self.check(float("nan"), "", "no JSON form")
        self.check(math.inf, "", "no JSON form")
        self.check({"a": [1, -math.inf]}, "a[1]", "no JSON form")

    def test_an_integer_past_the_exact_range(self) -> None:
        # Python's int is arbitrary-precision, so this is the closest analogue to the
        # TypeScript guard's `bigint` case: a value that serializes without complaint
        # and loses digits at whatever parses it.
        self.check(2**53, "", "2**53-1")
        self.check({"id": 10**30}, "id", "2**53-1")

    def test_a_class_instance(self) -> None:
        class Thing:
            pass

        self.check(Thing(), "", "a Thing")
        self.check(datetime.datetime(2026, 1, 1), "", "a datetime")
        self.check(decimal.Decimal("1.5"), "", "a Decimal")

    def test_a_set_and_a_tuple(self) -> None:
        # A tuple has no JavaScript analogue in the TypeScript table — there, an array
        # IS the tuple. Here `json.dumps` would turn one into an array silently, which
        # is the lossiness the guard refuses everywhere else.
        self.check({1, 2}, "", "a set")
        self.check((1, 2), "", "a tuple")

    def test_bytes(self) -> None:
        self.check(b"raw", "", "a bytes")

    def test_a_dict_SUBCLASS(self) -> None:
        # A `defaultdict` serializes as its base and loses whatever made it a subclass.
        from collections import defaultdict

        self.check(defaultdict(list), "", "a defaultdict")

    def test_a_non_string_key(self) -> None:
        # `json.dumps({1: "a"})` succeeds and produces `{"1": "a"}` — the key type
        # silently changes on the way across. JavaScript has no equivalent case,
        # because every JS object key already is a string.
        self.check({1: "a"}, "", "JSON keys are strings")

    def test_a_circular_reference(self) -> None:
        loop: list[object] = [1]
        loop.append(loop)
        self.check(loop, "[1]", "circular")

    def test_the_FIRST_problem_is_the_one_reported(self) -> None:
        self.check({"a": {"b": {1: "x"}}, "z": float("nan")}, "a.b", "JSON keys are strings")


class ArgumentPositions(unittest.TestCase):
    def test_the_message_names_the_argument_index_and_the_path_inside_it(self) -> None:
        with self.assertRaises(BowmarkError) as caught:
            assert_wire_safe_args(
                "bowmark.hotels.search", [{"ok": 1}, {"checkIn": datetime.date(2026, 1, 1)}]
            )
        self.assertEqual(caught.exception.code, "wire_refused")
        self.assertIn("args[1].checkIn", str(caught.exception))

    def test_a_bracketed_path_is_appended_without_a_dot(self) -> None:
        with self.assertRaises(BowmarkError) as caught:
            assert_wire_safe_args("bowmark.x.y", [[1, {2, 3}]])
        self.assertIn("args[0][1]", str(caught.exception))

    def test_a_clean_argument_list_raises_nothing(self) -> None:
        assert_wire_safe_args("bowmark.x.y", [{"a": 1}, ["b"], None, 3.5, True])


class SharedWithTypeScript(unittest.TestCase):
    """Cases the TypeScript table covers that have NO Python analogue, listed so the
    absence is a recorded decision rather than a gap somebody rediscovers.

    * `bigint` — Python's `int` is already arbitrary-precision, so the analogue is the
      2**53 case above rather than a distinct type.
    * `Symbol` — no equivalent exists.
    * `Map` / `Set` — `set` is covered above; a `Map` is a `dict` here and passes,
      correctly.
    * a function-VALUED key, which JavaScript drops silently — a Python callable is a
      class instance to this guard and is REFUSED, which is stricter and honest: `dumps`
      would have raised on it anyway rather than dropping it.
    """

    def test_a_callable_value_is_refused_rather_than_dropped(self) -> None:
        problem = wire_problem({"cb": lambda: None})
        self.assertIsNotNone(problem)
        assert problem is not None
        self.assertEqual(problem.path, "cb")


if __name__ == "__main__":
    unittest.main()
