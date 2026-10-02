# Contributing to @bowmark/web

This is for someone changing how the SDK itself works — the generator, the guards, the
publish pipeline. If you only want to *call* the library, read
[`README.md`](./README.md) instead; nothing here is needed for that.

## Internals — how this package is built, generated and published

### The two halves, and why they are split

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

### The wire guard is a checked COPY

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

### The argument guard is TWO guards, in this order

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

### What ships is compiled, not `src/` verbatim

`main`/`types` point at `dist/index.{js,d.ts}`. `dist/` is never committed — it does not
exist in this workspace and does not exist in the public mirror's git history either — it
is produced once, in the mirror's own `publish.yml`, by `npm run build`
(`scripts/build.mjs`, `tsconfig.build.json`), immediately before `npm publish`. Nobody
runs it but that one CI job:

- **This workspace never does.** `pnpm typecheck` is `tsc -p tsconfig.json --noEmit` —
  reads `src/` directly, emits nothing, unaffected.
- **A consumer never does.** `npm i @bowmark/web` installs the already-compiled `dist/`;
  there is still no build step on their side, which is the property this package has
  always promised.

Why compiled at all: Node refuses to strip types out of a `.ts` file found inside
`node_modules`, so shipping `main: src/index.ts` made plain `node app.mjs` fail with
`ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING` for every consumer who was not already on
`tsx`, Bun, or a bundler.
`docs/decisions/2026-09-01-the-published-npm-client-ships-compiled-js.md` in Bowmark's
internal engineering repo (not public).

**One thing `tsc`'s declaration emit does not do on its own, and `build.mjs` does by
hand:** `src/generated/library.d.ts` is ambient (no imports, no exports — see below) and
`index.ts` reaches it only with `/// <reference path="./generated/library.d.ts" />`. tsc
consumes that directive for this package's own compile but does not carry it into the
emitted `dist/index.d.ts`. Left alone, a downstream `tsc` never loads `library.d.ts` at
all and `BowmarkLibrary` — the type this package exists to ship — reads as `Cannot find
name`. `build.mjs` re-inserts the reference line and copies `library.d.ts` into
`dist/generated/` verbatim (it has nothing to compile).

### Regenerating

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

**`incremental: false` in the same file is load-bearing too, for the identical class of
bug reaching a different config.** `tsconfig.build.json` already disables it, with its own
comment explaining a stale `.tsbuildinfo` silently skipping a publish-time compile;
`tsconfig.json` — the one CI's `Typecheck` step and `pnpm typecheck` actually use — needs
the same override because `library.d.ts` regenerates every 20-60 minutes on `main` while
`index.ts`/`session.ts` rarely change, and CI persists a `.tsbuildinfo` PER RUNNER AGENT
across unrelated commits (`ci.yml`'s incremental-cache restore/save steps). tsc's weaker
tracking of a triple-slash ambient reference (vs. a real import) let a stale buildinfo
report `Cannot find name 'BowmarkLibrary'` on unchanged code, sticky to whichever runner
happened to cache it — measured 4 times in 4 days on one agent, once costing a full day of
client releases. `agents/richard/problems/runner-5-bowmarklibrary-typecheck-flake.md`. Do
not re-enable it to chase the incremental typecheck speedup other packages get; this
package is two files and the savings do not apply.

The file is **committed**, for the reason the tier barrels are: this repo consumes
TypeScript with no build step, so a generate-at-build artifact leaves `tsc` and vitest
with nothing to read on a fresh clone. Committed plus a staleness gate is the only shape
that works. Never hand-edit it.

### Four things the generator does that look like bugs and are not

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

### Scale

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
