"""The ARGUMENT SHAPE guard — refuse a value the declared signature does not accept.

``_guard.py`` asks a structural question about JSON: can this value cross the wire at
all. It is the same question for every function and it says nothing about SHAPE, so
``bowmark.music.search({"quesry": "x"})`` sails through it and comes back as a
capability failure, metered, after a round trip. This file asks the other question:
does this value match what ``bowmark.music.search`` declares.

── One interpreter over generated DATA ──────────────────────────────────────

``_validators.json`` is emitted by ``pnpm run gen:public-types`` from the same
``LibraryManifest`` the stubs come from, and it is byte-for-byte the same table the
TypeScript client reads out of ``node/src/generated/validators.ts``. So this file is a
second interpreter over ONE table rather than a second source of truth, and
``tests/test_validate.py`` runs it over the same fixture cases the TypeScript suite
uses.

── EVERY rule here leans toward ACCEPTING ───────────────────────────────────

A false REFUSAL is a caller whose correct argument is rejected by their own client,
with no way around it and no server to appeal to. A false ACCEPT costs one round trip
and lands them in exactly the error they would have got before this file existed. So
an object is OPEN, an unmodelled construct is ``any``, and arity is checked DOWNWARD
only. The one deliberate strictness is a string LITERAL union, because a typo'd enum
value is the single most common wrong argument and the accepted set makes a legible
message.
"""

from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Any, Mapping, NamedTuple, Sequence

_TABLE: dict[str, Any] | None = None

MAX_DEPTH = 64


def validators() -> dict[str, Any]:
    """The generated table, loaded once on first use.

    Lazy rather than at import, because a caller who never makes a call should not pay
    ~250 KB of JSON parsing for importing the package.
    """
    global _TABLE
    if _TABLE is None:
        _TABLE = json.loads(Path(__file__).with_name("_validators.json").read_text("utf-8"))
    return _TABLE


class ShapeProblem(NamedTuple):
    path: str
    reason: str


class Lookup(NamedTuple):
    """What the table says about one call path.

    The two negative answers are SEPARATE because they are different facts, and
    collapsing them would make this package refuse the largest part of the library —
    see ``assert_arg_shape``.
    """

    #: ``checked`` | ``unchecked`` | ``unknown-function`` | ``unknown-unit``
    kind: str
    params: list[dict[str, Any]] | None = None
    defs: dict[str, Any] | None = None


def lookup_params(table: Mapping[str, Any], path: Sequence[str]) -> Lookup:
    """Split ``["music", "search"]`` / ``["providers", "aa", "getFlightStatus"]`` into
    the unit namespace and the function name.

    The last segment is always the function and everything before it is the namespace,
    which is true of both tiers by construction: a capability is ``<id>.<fn>`` and a
    provider is ``providers.<id>.<fn>``. Nothing deeper exists — the runtime's own
    dispatcher refuses one.
    """
    if len(path) < 2:
        return Lookup("unknown-unit")
    namespace = ".".join(path[:-1])
    name = path[-1]
    unit = table.get("units", {}).get(namespace)
    if unit is None:
        return Lookup("unknown-unit")
    functions = unit.get("functions", {})
    if name not in functions:
        return Lookup("unknown-function")
    params = functions[name]
    # An EXPLICIT null means "this function is real and callable and we hold no shape
    # for it". It is not the same as an absent key, and the difference is what makes
    # failing closed on an absent one safe.
    if params is None:
        return Lookup("unchecked")
    return Lookup("checked", params, unit.get("defs", {}))


def args_problem(
    params: Sequence[Mapping[str, Any]],
    args: Sequence[Any],
    defs: Mapping[str, Any],
) -> ShapeProblem | None:
    """Check an argument list against a function's declared parameters.

    Returns the FIRST problem, or ``None``. A trailing ``None`` for an OPTIONAL
    parameter is treated as absent, because that is what a caller passing an optional
    through means — and it is what the Python client sends nothing for.
    """
    for index, param in enumerate(params):
        if param.get("rest"):
            for j in range(index, len(args)):
                problem = _check(args[j], param["schema"], defs, f"args[{j}]")
                if problem is not None:
                    return problem
            return None
        supplied = args[index] if index < len(args) else None
        if index >= len(args) or (supplied is None and param.get("optional")):
            # Checked DOWNWARD only. A required parameter nobody passed is a refusal
            # the caller can act on; a surplus one is not, and refusing it would break
            # a caller on a published version older than the parameter.
            if not param.get("optional"):
                return ShapeProblem(
                    f"args[{index}]", f"missing — `{param['name']}` is required"
                )
            continue
        problem = _check(supplied, param["schema"], defs, f"args[{index}]")
        if problem is not None:
            return problem
    return None


def _check(
    value: Any,
    schema: Mapping[str, Any],
    defs: Mapping[str, Any],
    path: str,
    depth: int = 0,
) -> ShapeProblem | None:
    # A self-referential type plus a value deep enough to exhaust the stack. The wire
    # guard already refused a CIRCULAR value, so anything reaching here is finite and
    # 64 levels is far past any real argument — but a bound that fails OPEN is the
    # rule of this file, so past it we accept rather than refuse.
    if depth > MAX_DEPTH:
        return None

    kind = schema["k"]
    if kind == "any":
        return None
    if kind == "ref":
        target = defs.get(schema["name"])
        # An unresolvable name accepts. The generator already refuses a signature
        # naming a type its unit never declares, so this is unreachable today and must
        # not be the thing that invents a refusal if it ever is.
        if target is None:
            return None
        return _check(value, target, defs, path, depth + 1)
    if kind == "string":
        return None if isinstance(value, str) else _mismatch(path, value, "a string")
    if kind == "number":
        ok = isinstance(value, (int, float)) and not isinstance(value, bool)
        if ok and isinstance(value, float) and not math.isfinite(value):
            ok = False
        return None if ok else _mismatch(path, value, "a number")
    if kind == "boolean":
        return None if isinstance(value, bool) else _mismatch(path, value, "a boolean")
    if kind == "null":
        return None if value is None else _mismatch(path, value, "null")
    if kind == "undefined":
        # `undefined` has no Python spelling; an absent optional arrives as `None` and
        # is handled by the caller before it reaches here.
        return None if value is None else _mismatch(path, value, "null")
    if kind == "literal":
        expected = schema["v"]
        # `1 == True` in Python, so a literal comparison has to check the type too or
        # `True` would satisfy a `1` literal and vice versa.
        same = type(value) is type(expected) and value == expected
        return None if same else _mismatch(path, value, json.dumps(expected))
    if kind == "array":
        if not isinstance(value, (list, tuple)):
            return _mismatch(path, value, "an array")
        for index, item in enumerate(value):
            problem = _check(item, schema["of"], defs, f"{path}[{index}]", depth + 1)
            if problem is not None:
                return problem
        return None
    if kind == "tuple":
        if not isinstance(value, (list, tuple)):
            return _mismatch(path, value, "an array")
        for index, arm in enumerate(schema["of"]):
            item = value[index] if index < len(value) else None
            problem = _check(item, arm, defs, f"{path}[{index}]", depth + 1)
            if problem is not None:
                return problem
        return None
    if kind == "record":
        if not _is_plain_object(value):
            return _mismatch(path, value, "an object")
        for key, child in value.items():
            problem = _check(child, schema["value"], defs, f"{path}.{key}", depth + 1)
            if problem is not None:
                return problem
        return None
    if kind == "object":
        if not _is_plain_object(value):
            return _mismatch(path, value, "an object")
        declared = set()
        for prop in schema["props"]:
            declared.add(prop["name"])
            if prop["name"] not in value:
                if not prop["optional"]:
                    return ShapeProblem(f"{path}.{prop['name']}", "missing — it is required")
                continue
            child = value[prop["name"]]
            if child is None and prop["optional"]:
                continue
            problem = _check(child, prop["schema"], defs, f"{path}.{prop['name']}", depth + 1)
            if problem is not None:
                return problem
        # OPEN on unlisted keys unless the type declared an index signature, which is
        # the only case where the author said something about them.
        index_schema = schema.get("index")
        if index_schema is not None:
            for key, child in value.items():
                if key in declared:
                    continue
                problem = _check(child, index_schema, defs, f"{path}.{key}", depth + 1)
                if problem is not None:
                    return problem
        return None
    if kind == "union":
        deepest: ShapeProblem | None = None
        for arm in schema["of"]:
            problem = _check(value, arm, defs, path, depth + 1)
            if problem is None:
                return None
            # The arm the caller MEANT is almost always the one the value got furthest
            # into: `str | {"query": str}` given `{"query": 5}` fails the string arm at
            # the root and the object arm at `.query`, and only the second says
            # anything useful.
            if deepest is None or len(problem.path) > len(deepest.path):
                deepest = problem
        if deepest is not None and deepest.path != path:
            return deepest
        return ShapeProblem(
            path, f"{_describe(value)} — expected {_describe_schema(schema, defs)}"
        )
    # An unrecognised kind accepts, which is the rule of this file arriving one more
    # time: a table written by a newer generator must not refuse a caller's argument.
    return None


def _is_plain_object(value: Any) -> bool:
    """A plain dict, by the same test the wire guard uses: a class instance, a set and
    a datetime are all refused THERE, with a better message, before this runs."""
    return type(value) is dict


def _mismatch(path: str, value: Any, expected: str) -> ShapeProblem:
    return ShapeProblem(path, f"{_describe(value)} — expected {expected}")


def _describe(value: Any) -> str:
    if value is None:
        return "None"
    if isinstance(value, bool):
        return f"the boolean {value}"
    if isinstance(value, str):
        shown = value if len(value) <= 24 else f"{value[:24]}…"
        return f"the string {json.dumps(shown)}"
    if isinstance(value, (int, float)):
        return f"the number {value}"
    if isinstance(value, (list, tuple)):
        return "an array"
    if isinstance(value, dict):
        return "an object"
    return f"a {type(value).__name__}"


def _describe_schema(
    schema: Mapping[str, Any], defs: Mapping[str, Any], depth: int = 0
) -> str:
    """One clause naming what a schema accepts. Only ever reached on a union no arm
    matched, which is where a caller most needs the accepted set spelled out — a wrong
    string literal is the common case and ``"hot" | "new" | "top"`` is the whole
    answer."""
    if depth > 4:
        return "…"
    kind = schema["k"]
    if kind == "any":
        return "anything"
    if kind == "ref":
        return schema["name"]
    if kind == "literal":
        return json.dumps(schema["v"])
    if kind == "array":
        return f"an array of {_describe_schema(schema['of'], defs, depth + 1)}"
    if kind == "tuple":
        return "an array"
    if kind == "record":
        return "an object"
    if kind == "object":
        required = [p["name"] for p in schema["props"] if not p["optional"]]
        if not schema["props"]:
            return "an object"
        return f"an object with {', '.join(required) or 'optional properties only'}"
    if kind == "union":
        return " | ".join(_describe_schema(arm, defs, depth + 1) for arm in schema["of"])
    return str(kind)


def assert_arg_shape(label: str, path: Sequence[str], args: Sequence[Any]) -> None:
    """Refuse an argument list the declared signature does not accept, and refuse a
    path this package has never heard of.

    Runs AFTER ``assert_wire_safe_args``, deliberately. A ``datetime`` and a ``set``
    are refused by the wire guard with a message about JSON, which is the right
    explanation; reaching the shape check first would report the same value as
    "expected a string" and send the caller looking for the wrong bug.

    ── FAILING CLOSED, and the two things it must NOT close on ──────────────

    **A known unit with an unknown FUNCTION is refused.** The table is authoritative
    about a unit it carries, so ``bowmark.music.searchHarder(…)`` is a typo or an
    install older than the function. The cost, named rather than hidden: this package
    is published on its own cadence, so a caller on version N cannot reach a function
    the library gained in N+1. ``run(script)`` reaches anything and is untyped by
    construction, so nothing is unreachable.

    **An unknown UNIT passes straight through, and that is not a hedge.** A Shopify
    family MEMBER — ``bowmark.providers.gymshark.search(…)`` — is deliberately absent
    from every manifest, because there are half a million of them. So an unknown unit
    is the NORMAL case for most of the library, and refusing it would have this
    package refuse the largest part of what it is a client for.

    **An ``unchecked`` function passes through too** — one whose declared argument is a
    bare destructuring pattern. It is an EXPLICIT null in the table rather than an
    absence, and that distinction is what makes the first rule safe at all.
    """
    from ._transport import BowmarkError

    table = validators()
    found = lookup_params(table, path)
    if found.kind == "unknown-function":
        version = str(table.get("version", ""))[:12]
        raise BowmarkError(
            f"{label} was not called: this package's declarations were generated from "
            f"library manifest {version}, which has no such function on that unit. If it "
            "is newer than this package, upgrade bowmark-web; if you meant a different "
            "name, the typed surface will offer it. `run(script)` reaches anything, "
            "typed or not.",
            code="unknown_function",
            path=label,
        )
    if found.kind in ("unknown-unit", "unchecked"):
        return

    problem = args_problem(found.params or [], args, found.defs or {})
    if problem is None:
        return
    raise BowmarkError(
        f"{label} was not called: {problem.path} is {problem.reason}.",
        code="bad_argument",
        path=label,
    )
