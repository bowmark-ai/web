/// <reference path="./generated/library.d.ts" />

// @bowmark/web — real TypeScript for the whole `bowmark.*` surface, plus the client
// that executes it on our servers.
//
// The declarations under `generated/` are AMBIENT and are referenced, never
// imported. An `import` of them would make them a module and every global below
// would stop resolving. They ship INSIDE this package rather than beside it —
// `npm i @bowmark/web` and nothing else is the promise, and it is what the
// acceptance criteria are written against (`docs/plans/public-types-package.md`
// → One package, not two).
//
// ── The same declarations describe TWO implementations, deliberately ──
//
// `bowmark` exported here is a real Proxy over HTTP, running in the caller's
// process. `bowmark` inside a `run()` script string is the sandbox's own global,
// running in an isolate on ours. The types are generated once and describe both, so
// the two must stay in sync — see `packages/runtime/src/namespace.ts`.

import { client } from "./session.js";
import { type ClientOptions, type RunEnvelope, postRun, resolveClient } from "./transport.js";

export {
  BowmarkError,
  BowmarkNeedsUserError,
  type AuthNeed,
  type CallEnvelope,
  type ClientOptions,
  type ClosedSession,
  type FetchLike,
  type Handoff,
  type OpenedSession,
  type RunEnvelope,
} from "./transport.js";
export { type WireProblem, wireProblem } from "./guard.js";
export { type SessionHandle, client, openManagedSession, session } from "./session.js";

/** The whole callable library, typed. `await bowmark.music.search("aphex twin")`.
 *
 * Each call opens its own one-shot session, which is right for ONE call and wrong
 * for several: two calls get two instances and two cookie jars, so a cart filled by
 * the first does not exist for the second. Reach for `session()` the moment a flow
 * has a second step.
 *
 * Configuration comes from `BOWMARK_API_KEY` and `BOWMARK_API_URL`, read at CALL
 * time. `client({ apiKey })` is the explicit form. */
export const bowmark: BowmarkLibrary = client();

/** Run a SCRIPT, as a string, in our sandbox — the agent path, and the
 * zero-dependency `curl` path given a client.
 *
 * Not deprecated and not hidden: an LLM emits text natively, so a tool call carrying
 * a script is the right shape for one. It is also **untyped by construction** — a
 * template literal gets no typechecking, so the generated types cover `session()`
 * and `bowmark`, never this. A person writing TypeScript wants `session()`.
 *
 * Returns the envelope rather than throwing: a script is composite, so `status`,
 * `logs` and `result` are read together. `needs_user` carries a handoff URL in
 * `meta.handoff`. */
export function run<T = unknown>(
  script: string,
  opts: ClientOptions = {},
): Promise<RunEnvelope<T>> {
  return postRun<T>(resolveClient(opts), script);
}

// ALIASES, not re-exports. A global from an ambient file is not a local declaration,
// so `export type { BowmarkLibrary }` is `TS2661`. Aliasing is what lets a consumer
// name the type without the ambient file being on their `types` path — which is the
// whole point of the client half being importable and the catalog half being ambient.
export type Library = BowmarkLibrary;
export type Providers = BowmarkProviders;
