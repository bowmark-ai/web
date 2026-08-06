"""The argument guard — refuse a value the wire cannot carry BEFORE the request.

── This is a RESTATEMENT of ``node/src/guard.ts``, not a translation ────────

The TypeScript guard is a checked, byte-for-byte copy of ``wireProblem`` in
``packages/schema/src/wire.ts``, and a test asserts identical ``{path, reason}``
strings for a 32-entry fixture table. **That is deliberately NOT the contract here**,
and the difference is a fact about the languages rather than a gap:

* The two runtimes refuse different THINGS. JavaScript has ``bigint``, ``Symbol``,
  ``Map`` and ``NaN``; Python has ``set``, ``bytes``, ``datetime``, ``Decimal`` and a
  ``float('nan')``. Neither list is a subset of the other, so a shared table of
  refusal reasons would have to describe values that cannot exist on one side.
* A refusal MESSAGE names the offending Python type, because that is what the caller
  is looking at. Telling a Python programmer their value "is a Map instance" would be
  worse than saying nothing.

What IS shared, and what ``tests/test_guard.py`` asserts against a table mirroring the
TypeScript one case for case, is the RULE: only JSON crosses — ``dict`` with string
keys, ``list``, ``str``, finite ``float``/``int``, ``bool``, ``None`` — everything
else is refused with its path, and a circular structure is refused rather than
overflowing the stack.

Why a walk and not ``json.dumps``: ``dumps`` accepts things that then arrive as
something else. A ``tuple`` becomes an array, an ``int`` key becomes a string key, a
subclass of ``dict`` serializes as its base, and ``allow_nan=True`` (the default)
emits bare ``NaN``, which is not JSON and which our API rejects at the parser. A
try/except around serialization therefore catches almost nothing, which is exactly the
class of silent lossiness Temporal shipped, diagnosed as a typing problem, and closed
won't-fix.
"""

from __future__ import annotations

import math
from typing import Any, NamedTuple, Sequence


class WireProblem(NamedTuple):
    """What is wrong with a value, and WHERE.

    The path is Playwright's format — ``a.inner[1].property`` — because naming the
    offending path is the difference between a caller fixing the bug in a minute and
    bisecting their own arguments.
    """

    path: str
    reason: str


def wire_problem(value: Any) -> WireProblem | None:
    """Walk ``value`` and return the FIRST thing the wire refuses, or ``None``."""
    return _walk(value, "", set())


def _walk(value: Any, path: str, seen: set[int]) -> WireProblem | None:
    if value is None:
        return None
    # `bool` before `int`, because `isinstance(True, int)` is True in Python and the
    # order is the only thing that stops a bool being reported as a number.
    if isinstance(value, bool) or isinstance(value, str):
        return None
    if isinstance(value, int):
        # Python's int is arbitrary-precision. JSON has no such thing, and a value
        # past IEEE-754's exact-integer range silently loses digits at whatever
        # parses it on the other side — which is the same silent-lossy class as
        # JavaScript's bigint, arriving without a distinct type to catch it on.
        if abs(value) > 2**53 - 1:
            return WireProblem(
                path,
                f"the integer {value} is past 2**53-1, so JSON cannot carry it exactly",
            )
        return None
    if isinstance(value, float):
        # `json.dumps` emits bare `NaN`/`Infinity` by default. Those are not JSON,
        # and this is the silent-lossy case the guard exists to catch.
        if not math.isfinite(value):
            return WireProblem(path, f"the number {value} has no JSON form")
        return None

    identity = id(value)
    if identity in seen:
        return WireProblem(path, "a circular reference")
    seen.add(identity)
    try:
        if isinstance(value, list):
            for index, item in enumerate(value):
                problem = _walk(item, f"{path}[{index}]", seen)
                if problem is not None:
                    return problem
            return None

        # A NOMINAL refusal, and the only one available at runtime. A `tuple`, a
        # `set`, a `datetime`, a `Decimal` and any class instance are all refused
        # here rather than being quietly flattened into an array, a string, or
        # whatever `default=` would have made of them.
        #
        # `type(value) is dict` rather than `isinstance`: a `dict` SUBCLASS
        # (`defaultdict`, `Counter`, a pydantic model's `__dict__`-alike) serializes
        # as its base and loses whatever made it a subclass, which is exactly the
        # lossiness this guard refuses elsewhere.
        if type(value) is not dict:
            return WireProblem(
                path,
                f"a {type(value).__name__} — only dicts, lists, strings, finite numbers, "
                "bools and None cross",
            )

        for key, child in value.items():
            if not isinstance(key, str):
                return WireProblem(
                    path,
                    f"an object with a {type(key).__name__} key ({key!r}) — JSON keys are strings, "
                    "and json.dumps would silently stringify it",
                )
            child_path = f"{path}.{key}" if path else key
            problem = _walk(child, child_path, seen)
            if problem is not None:
                return problem
        return None
    finally:
        seen.discard(identity)


def assert_wire_safe_args(label: str, args: Sequence[Any]) -> None:
    """Refuse the whole argument list before a byte leaves the process.

    Raises ``BowmarkError`` with code ``wire_refused``, naming the exact position:
    ``bowmark.hotels.search(args[0].checkIn)``. Failure is loud here for the reason EF
    Core made silent client-side fallback an error: a boundary that quietly accepts
    something it will mangle produces behaviour that only breaks in production.
    """
    from ._transport import BowmarkError

    for index, arg in enumerate(args):
        problem = wire_problem(arg)
        if problem is None:
            continue
        if not problem.path:
            where = f"args[{index}]"
        elif problem.path.startswith("["):
            where = f"args[{index}]{problem.path}"
        else:
            where = f"args[{index}].{problem.path}"
        raise BowmarkError(
            f"{label} was not called: {where} is {problem.reason}. "
            "Only JSON — dicts, lists, strings, finite numbers, bools and None — crosses "
            "to a capability.",
            code="wire_refused",
            path=label,
        )
