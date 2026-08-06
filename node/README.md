# @bowmark/web

> **Status:** PUBLISHED · `@bowmark/web@1.0.0` on npm, 2026-08-06, alongside
> `bowmark-web` and `bowmark-web-stubs` on PyPI at the same version. The plan that built it
> is deleted; the reasoning is in the four
> [`docs/decisions/2026-08-06-*`](../../../docs/decisions/) records and the enforceable half
> is [`.claude/rules/public-types.md`](../../../.claude/rules/public-types.md).
> **What would make this doc wrong:** a build step appearing, the declarations moving out
> into a second package, or a runtime dependency landing in `package.json`.

```sh
npm i @bowmark/web
```

**There is a Python client too**, from this same directory tree and the same generated
surface: `pip install bowmark-web bowmark-web-stubs`
([`../python/README.md`](../python/README.md)). One `LibraryManifest` produces the
declarations below AND the `.pyi`, `gate:public-types` asserts the two languages type the
same functions, and all three packages ship at one version — so a caller in either
language is looking at the same library.

Real TypeScript for the whole `bowmark.*` surface, with no Bowmark source on the
caller's disk. Their code runs in their editor and their process; the capability calls
execute on our servers.

**One package, not two.** The generated declarations ship inside this one rather than
beside it in a `@bowmark/catalog-types`, because installing one thing and getting
autocomplete is the entire promise. What exists to call is listed, one row per
function, in
[`CAPABILITIES.md`](https://github.com/bowmark-ai/web/blob/main/CAPABILITIES.md) and
[`PROVIDERS.md`](https://github.com/bowmark-ai/web/blob/main/PROVIDERS.md) — absolute
URLs, because this README is read on npm where a relative link resolves to nothing.

**Zero runtime dependencies, permanently.** Not an aspiration — the argument guard is
plain JS rather than a validator library, and the envelope shapes are hand-restated
rather than imported from `@bowmark/schema`, for exactly this reason. A `@bowmark/*`
import here would compile and typecheck in this repo and fail to install for every
consumer outside it; `tests/unit/bowmark-web-envelopes.test.ts` refuses one.

## The session is the surface

```ts
import { session } from "@bowmark/web";

const itemCount = await session(async (bm) => {
  const found = await bm.providers.gymshark.search({ query: "hoodie" });
  await bm.providers.gymshark.addToCart({ variantId: found.products[0].variantId });
  return (await bm.providers.gymshark.getCart()).itemCount;   // 1
});
```

Your control flow stays on your machine. Real `if`, real `for`, real closures, real
autocomplete, and **no script string**. Each capability call is one round trip into one
live instance on ours — that is stated rather than hidden, because a surface that looks
like a local function call and is actually stateful is how a caller writes an N+1
without noticing. The session closes in a `finally`, so a throw inside the callback
still releases it.

**The callback is never stringified and never shipped.** `toString()` on your function
returns whatever your build tooling emitted — istanbul's `cov_…f[2]++`, esbuild's
`__name`, TypeScript downleveling's `tslib_1` — so a failure would live in a toolchain
we cannot see. Playwright was asked to fix that class of bug and formally declined.

### The three other entry points

```ts
import { bowmark, client, openManagedSession, run } from "@bowmark/web";

await bowmark.music.search("aphex twin", 25);        // one-shot: its OWN session, opened and closed
const bm = client({ apiKey: "bmk_…" });              // the same, configured
const held = await openManagedSession();             // a session with the `finally` moved to you
const envelope = await run("return await bowmark.music.search('x')");   // the agent path
```

**`bowmark` and `client()` are correct for ONE call and wrong for several.** Two calls
get two instances and two cookie jars, so a cart filled by the first does not exist for
the second — and the failure is silent: Shopify answers `POST /cart/add.js` with 200 and
the added line echoed back, then reports `item_count: 0`. Reach for `session()` the
moment a flow has a second step.

**`run(string)` is untyped by construction** and stays as the agent path. A template
literal gets no typechecking, so the generated types cover `session()` and `bowmark`
and never this. It returns the envelope rather than throwing, because a script is
composite: `status`, `logs` and `result` are read together.

### What it throws

| Class | When | What to do |
|---|---|---|
| `BowmarkNeedsUserError` | One call paused for a human login | Open `err.handoff.url`, then **call again — the session is still open** |
| `BowmarkError`, `code: "wire_refused"` | An argument the wire cannot carry | Fix the argument; the message names the exact path, `args[0].when.checkIn` |
| `BowmarkError`, `code: "bad_argument"` | An argument the declared signature does not accept | Same — the message names the path and what was expected |
| `BowmarkError`, `code: "unknown_function"` | A KNOWN unit, and no such function on it in this package's declarations | Check the name, or upgrade — the library may have grown it since this version |
| `BowmarkError`, any other `code` | The call failed, or the transport did | Branch on `code`; `error` is prose written for an agent, `code` is for your `catch` |

`needs_user` is a **status, not an error**, and it is a separate class for that reason:
an agent that reads a failure retries, and retrying a login halt buys the same halt.

### Configuration

`BOWMARK_API_KEY` and `BOWMARK_API_URL`, read at CALL time, or passed explicitly as
`{ apiKey, baseUrl, fetch, headers, signal, onLog }`. A caller header cannot displace
the key. Anonymous is legal — every browserless capability works without one, on a
smaller daily budget.

## The two halves, and why they are split

- **`src/{index,session,transport,guard,validate}.ts`** — hand-written, ~700 lines,
  changes almost never.
- **`src/generated/library.d.ts`** — every capability and provider, generated,
  committed, regenerated whenever a unit lands.
- **`src/generated/validators.ts`** — the same functions' argument shapes as DATA, for
  the runtime half of the same job.

The generated half is **ambient**: it declares globals and exports nothing, and
`index.ts` reaches it with a `/// <reference>`. An `import` would make it a module, every
declaration in it would stop being global, and the churn split would buy nothing — the
types would become a real dependency of the client. `@cloudflare/workers-types` and
`@types/node` are the precedent.

`index.ts` therefore **aliases** rather than re-exports (`export type Library =
BowmarkLibrary`). A global from an ambient file is not a local declaration, so
`export type { BowmarkLibrary }` is `TS2661`.

**The same declarations describe TWO implementations, deliberately.** `bowmark` exported
here is a real Proxy over HTTP in the caller's process; `bowmark` inside a `run()` script
is the sandbox's own global (`packages/runtime/src/namespace.ts`) in an isolate on ours.
The types are generated once and describe both, so the two must stay in sync.

**The Proxy accepts every name at runtime** — `bowmark.anything.at.all()` builds a path
and sends it. That is not a bug; it is why the generated types are load-bearing rather
than decorative. The Proxy makes a correct call work without enumerating half a million
names, and TypeScript makes a wrong one a compile error. Neither half is sufficient
alone. It does refuse two things locally: a path shorter than `<unit>.<fn>`, and an
argument the wire cannot carry.

**A proxy node answers `undefined` for `then`, `catch`, `finally` and `toJSON`.** Without
that, `await bowmark.music` would find a callable `then`, invoke it as a thenable, and
hang forever waiting for a resolve a path segment can never call.

## The wire guard is a checked COPY

`src/guard.ts` duplicates `wireProblem` from `packages/schema/src/wire.ts`, because
importing the workspace package would break the tarball for everyone outside this repo.
A copy drifts, so `tests/unit/bowmark-web-guard.test.ts` runs both over one fixture
table and asserts identical `{ path, reason }` for every entry. Add a refusal to
`wire.ts` and this fails by name.

It is a walk, not a `try { JSON.stringify(args) }`: stringify throws on exactly two
things (a circular structure and a `BigInt`) and silently mangles everything else —
`Date` → string, `Map`/`Set` → `{}`, class instance → plain object, function-valued key
→ dropped. Temporal shipped that exact bug, diagnosed it as a typing problem, and closed
it won't-fix.

## The argument guard is TWO guards, in this order

`assertWireSafeArgs` asks whether the value can cross at all — a `Date`, a `Map`, a
function, a circular structure. `assertArgShape` asks whether it matches what the
function declares. Wire first, always: shape-first would report a `Date` as "expected a
string" and send the caller after the wrong bug.

The shape half is `src/generated/validators.ts` (data, generated from the same manifest
as the declarations) read by `src/validate.ts` (one interpreter, ~250 lines). Not 192
emitted functions: 192 emitted functions are 192 pieces of code no test ever runs, and
one interpreter over a fixture table is testable. No validator library on either side —
zero runtime dependencies is the product.

**Every rule leans toward ACCEPTING, and that is the design.** A false refusal is a
caller whose correct argument their own client rejects, with no server to appeal to. A
false accept costs one round trip and lands them exactly where they were before this
existed. So:

- **An object is OPEN.** An unlisted property is accepted — TypeScript's
  excess-property check fires on literals only, and a caller who spread a wider object
  is doing something legal.
- **Anything the compiler could not model becomes `any`** and accepts everything. It
  never guesses a shape from a name, and `Required<T>` compiles to `T` rather than to
  T-with-everything-mandatory, because widening is free and narrowing is not.
- **Arity is checked DOWNWARD only.** A missing required argument is refused; a surplus
  one is not, because that is what a caller on a version older than a new parameter has.
- **A union reports the arm the value got FURTHEST into.** `string | { query: string }`
  given `{ query: 5 }` names `args[0].query`, not six arms and no location.

The one deliberate strictness is a string literal union (`sort?: "hot" | "new"`), because
a typo'd enum value is the commonest wrong argument and the accepted set is a legible
message.

**What it fails CLOSED on, and the two things it must not.** A known unit with an
unknown FUNCTION is refused — the table is authoritative about a unit it carries. An
unknown UNIT passes straight through, because a family MEMBER (`providers.gymshark`) is
absent from the RUNTIME validator table **by design** — `listProviders()` excludes
members and always will — so refusing an unknown unit would refuse the largest part of
the library. A function with no readable argument shape is an EXPLICIT `null` in the
table rather than an absence, and passes through; that distinction is what makes the
first rule safe at all.

Note the deliberate asymmetry with the TYPES: since 2026-08-06 a member IS declared in
`library.d.ts`, so `providers.gymshark.search(…)` completes and type-checks. The two
answer different questions. Types are a build-time artifact and can afford one line per
member; the validator table is loaded into every client process at runtime, where 51,711
entries would be a cost paid on every call to buy nothing — the family's arguments are
already checked by the shared interface the compiler saw.

**A parameter may not offer a type the wire cannot carry.** Every argument crosses as
JSON on every surface, so `requestedTime?: string | Date` has an arm refused 100% of the
time while the library says otherwise. `gate:public-types`' `wire-impossible-param`
refuses one, with no exception set — an exception would be a declaration that a
parameter is uncallable. Found once, on `pizzahut.priceOrder`, by generating validators
for all 253 typed parameters.

## Regenerating

```bash
pnpm run gen:public-types         # writes src/generated/{library.d.ts,validators.ts}
pnpm run gate:public-types        # fails on a leak, a new refusal, a wire-impossible type
pnpm run gate:public-types:drift  # …and on the committed copy being stale
```

**Only the middle one runs on your PR, and staleness is deliberately not fatal there.**
The committed copy goes stale every time any unit anywhere lands a function, which is not
something your branch can keep true — `regen-public-types.yml` repairs it on `main`. See
`.claude/rules/public-types.md` § The gate is SPLIT.

**`skipLibCheck: false` in this package's `tsconfig.json` is load-bearing**, and the base
config sets the opposite. That flag skips type checking of every `.d.ts`, and this
package's whole deliverable IS a `.d.ts` — with the inherited default, `pnpm typecheck`
reported green over a generated file carrying 40 unresolved type names. Do not "tidy" it
back to the inherited value.

The file is **committed**, for the reason the tier barrels are: this repo consumes
TypeScript with no build step, so a generate-at-build artifact leaves `tsc` and vitest
with nothing to read on a fresh clone. Committed plus a staleness gate is the only shape
that works. Never hand-edit it.

## Four things the generator does that look like bugs and are not

**One namespace per unit.** `music` and `flights` both declare `CallOptions`; `Track` and
`Store` are names any provider may take. Each unit's `types` block is emitted VERBATIM
inside `declare namespace BowmarkCapability_<id>` / `BowmarkProvider_<id>`, so a signature
reading `Promise<MusicSearchResult>` resolves against its own block with no rewriting.
Verbatim is the property that matters: what a caller compiles against is byte-for-byte
what an agent reads from `get_library`.

**The tier is in the namespace name.** `cars` is a capability AND a provider. A single
`Bowmark_cars` would have emitted one and silently dropped the other.

**20 provider functions are deliberately absent**, and none gets a
`(...args: unknown[])` stand-in — a stand-in compiles, ships, and tells a caller nothing,
which is the untyped surface this package exists to replace. They stay callable at
runtime; only the compile-time claim is withheld, because there is no claim to make.
Each one has a comment in its place saying which class it is and why.

- **20 · untyped argument.** The declared argument is a bare destructuring pattern with
  no field types — `findStores({ near, radiusMiles?, limit? })` tells a model everything
  and a compiler nothing.
- **0 · undeclared type.** The signature names a type the unit's own `types` block never
  declares. This was **11 functions across 7 providers** when the generator first
  compiled a provider's rendered types; all were fixed on 2026-08-05 by copying the real
  interface, and everything it transitively references, into the block. The class is now
  gated at source: `gate:capabilities`' `rendered-types-match-source` runs over the
  provider and family tiers, so it cannot come back silently.

`gate:public-types` holds the two lists as separate SETS — merged, a provider could "fix"
an undeclared type by making the argument untyped and stay green. Both can only shrink.

**Seven providers have NO typed surface at all** — `aa`, `dickssportinggoods`,
`flightradar24`, `ford`, `mailchimp`, `mcdonalds`, `namecheap`. Every function they
declare is refused, so their interface is empty. The generated file says so in words,
because an empty interface reads as "this unit does nothing", which is a different and
wronger claim than "we can make no typed claim about anything it does".

## Scale

Measured 2026-08-05 on synthetic units, one namespace each:

| Units | raw | gzipped | `tsc` | editor cold load | member completion |
|---|---|---|---|---|---|
| 10,000 | 6.3 MB | 0.13 MB | 0.7s | 0.4s | 0.2 ms |
| 500,000 | 321 MB | 6.5 MB | exit 0, 28.3s | 14.5s | **0.4 ms** |

Reproduce with `pnpm tsx scripts/bench-public-types.ts <units>`. Completion — the only
number a person feels — is flat. **The hard ceiling is ~849,000 units**, where the emitted
string passes V8's `String::kMaxLength`; the generator throws there by name rather than
letting `Array.prototype.join` produce a bare `RangeError`. Going past it needs the FAMILY
shape (one shared interface, one line per member), which needs the manifest to describe a
family and does not today.
