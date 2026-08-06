// The ARGUMENT SHAPE guard — refuse a value the declared signature does not accept,
// before the request.
//
// `guard.ts` asks a structural question about JSON: can this value cross the wire at
// all. It is the same question for every function and it says nothing about SHAPE, so
// `bowmark.music.search({ quesry: "x" })` sails through it and comes back as a
// capability failure, metered, after a round trip. This file asks the other question:
// does this value match what `bowmark.music.search` declares.
//
// ── A SCHEMA plus one interpreter, not 192 generated functions ───────────────
//
// The generator emits DATA (`generated/validators.ts`) and this file is the only
// thing that reads it. 192 bespoke emitted functions would be 192 pieces of code no
// test ever runs; one interpreter over a fixture table is testable in an afternoon,
// and the generator's job shrinks to "TypeScript type text in, tree out". Zero
// runtime dependencies is the product, so there is no validator library on either
// side of that line.
//
// ── EVERY rule here leans toward ACCEPTING ──────────────────────────────────
//
// This is the whole design, and it is not timidity. A false REFUSAL is a caller
// whose correct argument is rejected by their own client, with no way around it and
// no server to appeal to. A false ACCEPT costs one round trip and lands them in
// exactly the error they would have got before this file existed. The two failure
// directions are not comparable, so:
//
//   - An object is OPEN. An unknown property is accepted, because TypeScript's
//     excess-property check is a compile-time nicety that fires on literals only,
//     and a caller who spread a wider object is doing something legal.
//   - Anything the type compiler could not fully model becomes `any`, which accepts
//     everything. It never guesses a shape from a name.
//   - Arity is checked DOWNWARD only — a missing required argument is refused, a
//     surplus one is not. A surplus argument is what a caller on an older published
//     version has when the library grew a parameter, and JavaScript ignores it.
//
// The one place this file is deliberately strict is a string LITERAL union
// (`sort?: "hot" | "new"`), because a typo'd enum value is the single most common
// wrong argument and the accepted set makes a legible error message.

/** One node of a declared argument's shape.
 *
 * A closed union, and `any` is the escape hatch that makes the whole thing safe:
 * every construct the compiler does not model lands there and accepts everything. */
export type Schema =
  /** Accepts anything. What an unmodelled construct compiles to. */
  | { k: "any" }
  | { k: "string" }
  | { k: "number" }
  | { k: "boolean" }
  | { k: "null" }
  | { k: "undefined" }
  /** `"hot"`, `3`, `true` — a literal type, compared with `===`. */
  | { k: "literal"; v: string | number | boolean }
  | { k: "array"; of: Schema }
  /** A fixed-length positional list. Extra entries are accepted, for the same
   * reason a surplus argument is: they cost nothing and refusing them can only
   * hurt a caller the compiler already had its chance at. */
  | { k: "tuple"; of: Schema[] }
  /** OPEN — an unlisted property is accepted. `index` covers a declared index
   * signature and applies to unlisted keys only. */
  | { k: "object"; props: PropSchema[]; index?: Schema }
  /** `Record<string, T>` — every value must match, keys are strings on the wire. */
  | { k: "record"; value: Schema }
  /** Accepts if ANY arm accepts. */
  | { k: "union"; of: Schema[] }
  /** A named type declared in the same unit's `types` block. Resolved through the
   * unit's `defs`, which is what makes a self-referential type expressible at all. */
  | { k: "ref"; name: string };

export interface PropSchema {
  name: string;
  schema: Schema;
  optional: boolean;
}

/** One declared parameter. `rest` consumes every remaining argument and validates
 * each against `schema` — which is the ELEMENT type, not the array. */
export interface ParamSchema {
  /** As declared, or `arg0` when the signature destructured and never named it. */
  name: string;
  schema: Schema;
  optional: boolean;
  rest?: boolean;
}

/** One unit's validators, plus the type declarations its parameters reference.
 *
 * `defs` is per UNIT rather than per function because a unit's `types` block is
 * shared by every one of its signatures — `music.search` and `music.getTrack` both
 * resolve `Track` against the same block, and the two tiers deliberately do not
 * share an id space, let alone a type namespace. */
export interface UnitValidators {
  defs: Record<string, Schema>;
  /** By function name. `null` is EXPLICIT and means "this function is real and
   * callable and we hold no shape for it" — the 20 whose declared argument is a
   * bare destructuring pattern. It is not the same as an absent key, and the
   * difference is what makes failing closed on an absent one safe. */
  functions: Record<string, ParamSchema[] | null>;
}

export interface ValidatorTable {
  /** The manifest version these were generated from. Reported in the refusal for an
   * unknown path, because "your package predates that function" is the answer
   * roughly every time. */
  version: string;
  /** Keyed by the unit's NAMESPACE — `music`, `providers.soundcloud` — which is the
   * call path with `bowmark.` and the function name removed. */
  units: Record<string, UnitValidators>;
}

/** What is wrong and WHERE. Same shape as `guard.ts`'s, so the two guards produce
 * one error format and a caller never has to tell them apart. */
export interface ShapeProblem {
  /** Dotted/bracketed path from the argument root. Empty at the root. */
  path: string;
  reason: string;
}

/** What the table says about one call path.
 *
 * The two negative answers are SEPARATE because they are different facts, and
 * collapsing them would have made this package refuse the largest part of the
 * library. See `assertArgShape` in `guard.ts`. */
export type Lookup =
  | { kind: "checked"; params: ParamSchema[] }
  /** The function exists and declares no readable argument shape. */
  | { kind: "unchecked" }
  /** The unit is here and declares no such function. The table IS authoritative
   * about a unit it carries, so this is a typo or a stale install. */
  | { kind: "unknown-function" }
  /** No such unit. The table is NOT authoritative about this — a family MEMBER
   * (`providers.gymshark`) is deliberately absent from every manifest, so an
   * unknown unit is the normal case for most of the library rather than an error. */
  | { kind: "unknown-unit" };

/** Split `["music", "search"]` / `["providers", "aa", "getFlightStatus"]` into the
 * unit namespace and the function name.
 *
 * The last segment is always the function and everything before it is the
 * namespace, which is true of both tiers by construction: a capability is
 * `<id>.<fn>` and a provider is `providers.<id>.<fn>`. Nothing deeper exists — the
 * runtime's own dispatcher refuses one. */
function splitPath(path: readonly string[]): { namespace: string; fn: string } | null {
  if (path.length < 2) return null;
  return { namespace: path.slice(0, -1).join("."), fn: path[path.length - 1] as string };
}

export function lookupParams(table: ValidatorTable, path: readonly string[]): Lookup {
  const split = splitPath(path);
  if (!split) return { kind: "unknown-unit" };
  const unit = table.units[split.namespace];
  if (!unit) return { kind: "unknown-unit" };
  if (!Object.hasOwn(unit.functions, split.fn)) return { kind: "unknown-function" };
  // `hasOwn` above is what distinguishes an EXPLICIT null from an absent key, and
  // `noUncheckedIndexedAccess` cannot see that it did — hence the widened read.
  const params = unit.functions[split.fn] as ParamSchema[] | null;
  return params === null ? { kind: "unchecked" } : { kind: "checked", params };
}

/** Check an argument list against a function's declared parameters.
 *
 * Returns the FIRST problem, or null. `args` is the caller's array verbatim; a
 * trailing `undefined` is treated as absent, because that is what
 * `f(a, undefined)` means to a caller passing an optional through. */
export function argsProblem(
  params: readonly ParamSchema[],
  args: readonly unknown[],
  defs: Record<string, Schema>,
): ShapeProblem | null {
  for (let i = 0; i < params.length; i++) {
    const param = params[i] as ParamSchema;
    if (param.rest) {
      for (let j = i; j < args.length; j++) {
        const problem = check(args[j], param.schema, defs, `args[${j}]`);
        if (problem) return problem;
      }
      return null;
    }
    const supplied = i < args.length ? args[i] : undefined;
    if (supplied === undefined) {
      // Checked DOWNWARD only. A required parameter nobody passed is a refusal the
      // caller can act on; a surplus one is not, and refusing it would break a
      // caller on a published version older than the parameter.
      if (!param.optional) {
        return {
          path: `args[${i}]`,
          reason: `missing — \`${param.name}\` is required`,
        };
      }
      continue;
    }
    const problem = check(supplied, param.schema, defs, `args[${i}]`);
    if (problem) return problem;
  }
  return null;
}

const MAX_DEPTH = 64;

function check(
  value: unknown,
  schema: Schema,
  defs: Record<string, Schema>,
  path: string,
  depth = 0,
): ShapeProblem | null {
  // A self-referential type plus a value deep enough to exhaust the stack. The wire
  // guard already refused a CIRCULAR value, so anything reaching here is finite and
  // 64 levels is far past any real argument — but a bound that fails OPEN is the
  // rule of this file, so past it we accept rather than refuse.
  if (depth > MAX_DEPTH) return null;

  switch (schema.k) {
    case "any":
      return null;
    case "ref": {
      const target = defs[schema.name];
      // An unresolvable name accepts. The generator already refuses a signature
      // naming a type its unit never declares (`gate:public-types`'s
      // KNOWN_UNDECLARED), so this is unreachable today and must not be the thing
      // that invents a refusal if it ever is.
      if (!target) return null;
      return check(value, target, defs, path, depth + 1);
    }
    case "string":
      return typeof value === "string" ? null : mismatch(path, value, "a string");
    case "number":
      return typeof value === "number" ? null : mismatch(path, value, "a number");
    case "boolean":
      return typeof value === "boolean" ? null : mismatch(path, value, "a boolean");
    case "null":
      return value === null ? null : mismatch(path, value, "null");
    case "undefined":
      return value === undefined ? null : mismatch(path, value, "undefined");
    case "literal":
      return value === schema.v ? null : mismatch(path, value, JSON.stringify(schema.v));
    case "array": {
      if (!Array.isArray(value)) return mismatch(path, value, "an array");
      for (let i = 0; i < value.length; i++) {
        const problem = check(value[i], schema.of, defs, `${path}[${i}]`, depth + 1);
        if (problem) return problem;
      }
      return null;
    }
    case "tuple": {
      if (!Array.isArray(value)) return mismatch(path, value, "an array");
      for (let i = 0; i < schema.of.length; i++) {
        const problem = check(value[i], schema.of[i] as Schema, defs, `${path}[${i}]`, depth + 1);
        if (problem) return problem;
      }
      return null;
    }
    case "record": {
      if (!isPlainObject(value)) return mismatch(path, value, "an object");
      for (const [key, child] of Object.entries(value)) {
        const problem = check(child, schema.value, defs, `${path}.${key}`, depth + 1);
        if (problem) return problem;
      }
      return null;
    }
    case "object": {
      if (!isPlainObject(value)) return mismatch(path, value, "an object");
      const declared = new Set<string>();
      for (const prop of schema.props) {
        declared.add(prop.name);
        const child = (value as Record<string, unknown>)[prop.name];
        if (child === undefined) {
          if (prop.optional || !Object.hasOwn(value, prop.name)) {
            if (!prop.optional) {
              return { path: `${path}.${prop.name}`, reason: "missing — it is required" };
            }
          }
          continue;
        }
        const problem = check(child, prop.schema, defs, `${path}.${prop.name}`, depth + 1);
        if (problem) return problem;
      }
      // OPEN on unlisted keys unless the type declared an index signature, which is
      // the only case where the author said something about them.
      if (schema.index) {
        for (const [key, child] of Object.entries(value)) {
          if (declared.has(key)) continue;
          const problem = check(child, schema.index, defs, `${path}.${key}`, depth + 1);
          if (problem) return problem;
        }
      }
      return null;
    }
    case "union": {
      let deepest: ShapeProblem | null = null;
      for (const arm of schema.of) {
        const problem = check(value, arm, defs, path, depth + 1);
        if (!problem) return null;
        // The arm the caller MEANT is almost always the one the value got furthest
        // into: `string | { query: string }` given `{ query: 5 }` fails the string
        // arm at the root and the object arm at `.query`, and only the second says
        // anything useful. Reporting the union itself would name six arms and point
        // at nothing.
        if (!deepest || problem.path.length > deepest.path.length) deepest = problem;
      }
      if (deepest && deepest.path !== path) return deepest;
      return { path, reason: `${describe(value)} — expected ${describeSchema(schema, defs)}` };
    }
  }
}

/** A plain object, by the same test the wire guard uses: a class instance, a `Map`
 * and a `Date` are all refused THERE, with a better message, before this runs. */
function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value) as object | null;
  return prototype === Object.prototype || prototype === null;
}

function mismatch(path: string, value: unknown, expected: string): ShapeProblem {
  return { path, reason: `${describe(value)} — expected ${expected}` };
}

function describe(value: unknown): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "an array";
  switch (typeof value) {
    case "string":
      return `the string ${JSON.stringify(value.length > 24 ? `${value.slice(0, 24)}…` : value)}`;
    case "number":
      return `the number ${String(value)}`;
    case "boolean":
      return `the boolean ${String(value)}`;
    case "undefined":
      return "undefined";
    case "object":
      return "an object";
    default:
      return `a ${typeof value}`;
  }
}

/** One clause naming what a schema accepts. Only ever reached on a union that no
 * arm matched, which is where a caller most needs the accepted set spelled out —
 * a wrong string literal is the common case and `"hot" | "new" | "top"` is the
 * whole answer. */
function describeSchema(schema: Schema, defs: Record<string, Schema>, depth = 0): string {
  if (depth > 4) return "…";
  switch (schema.k) {
    case "any":
      return "anything";
    case "ref":
      return schema.name;
    case "literal":
      return JSON.stringify(schema.v);
    case "array":
      return `an array of ${describeSchema(schema.of, defs, depth + 1)}`;
    case "tuple":
      return "an array";
    case "record":
      return "an object";
    case "object":
      return schema.props.length > 0
        ? `an object with ${
            schema.props
              .filter((p) => !p.optional)
              .map((p) => p.name)
              .join(", ") || "optional properties only"
          }`
        : "an object";
    case "union":
      return schema.of.map((arm) => describeSchema(arm, defs, depth + 1)).join(" | ");
    default:
      return schema.k;
  }
}
