// The argument guard — refuse a value the wire cannot carry BEFORE the request.
//
// ── This is a deliberate COPY of `wireProblem` in `packages/schema/src/wire.ts` ──
//
// Not an import, and not an oversight. `@bowmark/schema` is a workspace package;
// importing it would put `"@bowmark/schema": "workspace:*"` in the published
// `package.json` and the tarball would not install for anyone outside this repo.
// The package's zero-dependency promise is the reason this file exists at all.
//
// A copy drifts, so the copy is CHECKED: `tests/unit/bowmark-web-guard.test.ts`
// runs both implementations over one fixture table and asserts identical
// `{ path, reason }` for every entry. A new refusal in `wire.ts` that is not
// mirrored here fails that test by name.
//
// Why a walk and not a `try { JSON.stringify(args) }`: stringify throws on exactly
// two things, a circular structure and a `BigInt`. Everything else it "handles"
// lossily — `Date` → string, `Map`/`Set` → `{}`, class instance → plain object,
// function-valued key → dropped — so a try/catch catches almost nothing. Temporal
// shipped that exact bug, diagnosed it as a typing problem, and closed it won't-fix.

import { VALIDATORS } from "./generated/validators.js";
import { BowmarkError } from "./transport.js";
import { argsProblem, lookupParams } from "./validate.js";

/** What is wrong with a value, and WHERE. The path is Playwright's format —
 * `a.inner[1].property` — because naming the offending path is the difference
 * between a caller fixing the bug in a minute and bisecting their own arguments. */
export interface WireProblem {
  /** Dotted/bracketed path from the root. Empty string at the root. */
  path: string;
  /** What was found and why the wire refuses it, in one clause. */
  reason: string;
}

const PLAIN_PROTOTYPES: ReadonlyArray<object | null> = [Object.prototype, null];

/** Walk `value` and return the FIRST thing the wire refuses, or `null` when it is
 * clean.
 *
 * `undefined` is allowed, at the root and at a key — it is what an absent optional
 * property is, and refusing it would refuse every legal partial object. It is
 * DROPPED on the way across, which `Wire<T>` states in the type. */
export function wireProblem(value: unknown): WireProblem | null {
  return walk(value, "", new Set<object>());
}

function walk(value: unknown, path: string, seen: Set<object>): WireProblem | null {
  const bad = (reason: string): WireProblem => ({ path, reason });

  if (value === null || value === undefined) return null;

  switch (typeof value) {
    case "string":
    case "boolean":
      return null;
    case "number":
      // JSON.stringify turns these into `null` without complaint, which is the
      // silent-lossy class this guard exists to catch.
      return Number.isFinite(value) ? null : bad(`the number ${String(value)} has no JSON form`);
    case "bigint":
      return bad("a bigint has no JSON form (JSON.stringify throws on one)");
    case "function":
      return bad("a function cannot cross the wire — code never crosses, only data");
    case "symbol":
      return bad("a symbol has no JSON form");
  }

  const object = value as object;
  if (seen.has(object)) return bad("a circular reference");
  seen.add(object);
  try {
    if (Array.isArray(object)) {
      for (let i = 0; i < object.length; i++) {
        const problem = walk(object[i], `${path}[${i}]`, seen);
        if (problem) return problem;
      }
      return null;
    }

    // A NOMINAL refusal, and the only one available at runtime. `Wire<T>` cannot
    // express it — TypeScript has no nominal typing — so a Date, a Map, a class
    // instance and anything else carrying its own prototype is refused here rather
    // than being quietly flattened into a plain object or a string.
    const prototype = Object.getPrototypeOf(object) as object | null;
    if (!PLAIN_PROTOTYPES.includes(prototype)) {
      return bad(`a ${constructorName(object)} instance — only plain objects and arrays cross`);
    }

    for (const key of Object.keys(object)) {
      const child = (object as Record<string, unknown>)[key];
      const childPath = path ? `${path}.${key}` : key;
      // A function- or symbol-valued key is DROPPED rather than refused: that is
      // what JSON.stringify does, and `Wire<T>` removes the key from its key set to
      // say so. Refusing here would make a legal object with a method unusable.
      if (typeof child === "function" || typeof child === "symbol") continue;
      const problem = walk(child, childPath, seen);
      if (problem) return problem;
    }
    return null;
  } finally {
    seen.delete(object);
  }
}

function constructorName(object: object): string {
  const name = (Object.getPrototypeOf(object) as { constructor?: { name?: string } } | null)
    ?.constructor?.name;
  return name && name.length > 0 ? name : "non-plain-object";
}

/** Refuse the whole argument list before a byte leaves the process.
 *
 * Throws `BowmarkError` with code `wire_refused`, naming the exact position:
 * `bowmark.hotels.search(args[0].checkIn)`. Failure is loud here for the reason EF
 * Core made silent client-side fallback an error: a boundary that quietly accepts
 * something it will mangle produces behaviour that only breaks in production, and
 * getting better at serialization later must not silently change a caller's
 * results. */
export function assertWireSafeArgs(label: string, args: readonly unknown[]): void {
  for (let i = 0; i < args.length; i++) {
    const problem = wireProblem(args[i]);
    if (!problem) continue;
    const where = problem.path
      ? problem.path.startsWith("[")
        ? `args[${i}]${problem.path}`
        : `args[${i}].${problem.path}`
      : `args[${i}]`;
    throw new BowmarkError(
      `${label} was not called: ${where} is ${problem.reason}. ` +
        "Only JSON — plain objects, arrays, strings, finite numbers, booleans and null — crosses to a capability.",
      { code: "wire_refused", path: label },
    );
  }
}

/** Refuse an argument list the declared signature does not accept, and refuse a path
 * this package has never heard of.
 *
 * Runs AFTER `assertWireSafeArgs`, deliberately. A `Date` and a `Map` are refused by
 * the wire guard with a message about JSON, which is the right explanation; reaching
 * the shape check first would report the same value as "expected a string" and send
 * the caller looking for the wrong bug.
 *
 * ── FAILING CLOSED, and the two things it must NOT close on ─────────────────
 *
 * The rule is "refuse what the table knows is wrong; pass anything it cannot know",
 * and both halves cost something real, so both are stated.
 *
 * **A known unit with an unknown FUNCTION is refused.** The table is authoritative
 * about a unit it carries, so `bowmark.music.searchHarder(…)` is a typo or an
 * install older than the function. The compile-time surface already refuses that
 * call — it is a `Property does not exist` error against the same generated data —
 * so anybody reaching this line came through `as any`, plain JavaScript or a stale
 * package, and a refusal naming the manifest version is a better answer for all
 * three than a request that succeeds against declarations they do not have. The
 * cost, named rather than hidden: this package is published on its own cadence, so
 * a caller on version N cannot reach a function the library gained in N+1 even
 * though the api would serve it. `run(script)` reaches anything and is untyped by
 * construction, so nothing is unreachable.
 *
 * **An unknown UNIT passes straight through, and that is not a hedge.** A Shopify
 * family MEMBER — `bowmark.providers.gymshark.search(…)` — is deliberately absent
 * from every manifest: `listProviders()` excludes members by design and always
 * will, because there are half a million of them. So an unknown unit is the NORMAL
 * case for most of the library, not a stale one, and refusing it would have this
 * package refuse the largest part of what it is a client for. Found by running the
 * Phase 5 session suite, whose worked example is gymshark.
 *
 * **An `unchecked` function passes through too** — one whose declared argument is a
 * bare destructuring pattern. It is an EXPLICIT null in the table rather than an
 * absence, and that distinction is what makes the first rule safe at all: 20 real
 * functions have no readable argument shape, and refusing them would delete them
 * from the runtime as well as from the types. */
export function assertArgShape(
  label: string,
  path: readonly string[],
  args: readonly unknown[],
): void {
  const found = lookupParams(VALIDATORS, path);
  if (found.kind === "unknown-function") {
    throw new BowmarkError(
      `${label} was not called: this package's declarations were generated from library ` +
        `manifest ${VALIDATORS.version.slice(0, 12)}, which has no such function on that unit. ` +
        `If it is newer than this package, upgrade @bowmark/web; if you meant a different name, ` +
        `the typed surface will offer it. \`run(script)\` reaches anything, typed or not.`,
      { code: "unknown_function", path: label },
    );
  }
  if (found.kind === "unknown-unit" || found.kind === "unchecked") return;

  const unit = VALIDATORS.units[path.slice(0, -1).join(".")];
  const problem = argsProblem(found.params, args, unit?.defs ?? {});
  if (!problem) return;
  throw new BowmarkError(`${label} was not called: ${problem.path} is ${problem.reason}.`, {
    code: "bad_argument",
    path: label,
  });
}
