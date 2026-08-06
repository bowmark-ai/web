/// <reference path="./generated/library.d.ts" />

// The session client — the surface a person actually uses.
//
// The caller's callback runs on the CALLER'S MACHINE, in ordinary JavaScript, and
// each capability call is one typed round trip into one live instance on ours. Real
// `if`, real `for`, real closures, real autocomplete, and no script string.
//
// The callback is never stringified and never shipped. `toString()` on a user
// function returns whatever the CALLER'S build tooling emitted — istanbul's
// `cov_npcpcae6x.f[2]++`, esbuild's `__name`, TypeScript downleveling's `tslib_1` —
// so accepting a function would be shipping a footgun whose trigger is in somebody
// else's toolchain. Playwright was asked to fix that class of bug and formally
// declined. See `docs/decisions/2026-08-03-the-session-surface-and-why-run-string-stays.md`.

import { assertArgShape, assertWireSafeArgs } from "./guard.js";
import {
  BowmarkError,
  type ClientOptions,
  type ClosedSession,
  callInSession,
  closeSession,
  openSession,
  resolveClient,
} from "./transport.js";

/** What a proxy node does when it is finally called. */
type Dispatch = (path: string[], args: unknown[]) => Promise<unknown>;

/** Property names a proxy must NOT answer with another node.
 *
 * `then` is the load-bearing one: `await bowmark.music` would otherwise find a
 * callable `then`, invoke it as a thenable, and hang forever on a path that was
 * never a call. The other two round out the Promise protocol, and `toJSON` stops a
 * node being silently serialized into somebody's log. */
const NOT_A_PATH_SEGMENT = new Set(["then", "catch", "finally", "toJSON"]);

/** Build the `bowmark`-shaped Proxy over a dispatcher.
 *
 * **The Proxy accepts every name at runtime** — `bowmark.anything.at.all()` builds a
 * path and sends it. That is not a bug, it is why the generated types are
 * load-bearing rather than decorative: the Proxy makes a correct call work without
 * enumerating half a million names, and TypeScript makes a wrong one a compile
 * error. Neither half is sufficient alone, and it is the same split
 * `packages/runtime/src/namespace.ts` already ships inside the sandbox. */
function libraryProxy(dispatch: Dispatch): BowmarkLibrary {
  const node = (path: string[]): unknown => {
    // The target is a FUNCTION so the proxy is callable at any depth. A plain
    // object target makes `apply` an illegal trap and every call a TypeError.
    const target = () => undefined;
    return new Proxy(target, {
      get(_target, property) {
        if (typeof property !== "string") return undefined;
        if (NOT_A_PATH_SEGMENT.has(property)) return undefined;
        return node([...path, property]);
      },
      apply(_target, _thisArg, args: unknown[]) {
        return dispatch(path, args);
      },
    });
  };
  return node([]) as BowmarkLibrary;
}

/** One dispatch: validate the path, refuse a non-wire argument, then send it. */
function dispatchThrough(send: (path: string[], args: unknown[]) => Promise<unknown>): Dispatch {
  // `async`, so EVERY refusal is a rejected promise rather than a synchronous
  // throw. A generated signature says the call returns a `Promise`, and a function
  // that sometimes throws before returning one breaks `.catch()` — the caller's
  // handler is never attached. Playwright's argument guard has the same shape for
  // the same reason.
  return async (path, args) => {
    const label = ["bowmark", ...path].join(".");
    // The api refuses a path shorter than two segments, and it is right to: every
    // real call is `<unit>.<fn>` or `providers.<id>.<fn>`. Saying so here costs a
    // round trip nothing and names the shape.
    if (path.length < 2) {
      throw new BowmarkError(
        `${label} is not a callable path. Call a function on a unit — bowmark.music.search(…) or bowmark.providers.gymshark.search(…).`,
        { code: "bad_path", path: label },
      );
    }
    // BEFORE the request, deliberately. A guard that ran server-side would report
    // a mangled value as a capability failure, after it had been metered.
    //
    // Two guards, in this order and not the other. `assertWireSafeArgs` answers
    // "can this value cross at all" — a `Date`, a `Map`, a function — and its
    // message is about JSON. `assertArgShape` answers "does it match what this
    // function declares". Shape-first would report a `Date` as "expected a string"
    // and point the caller at the wrong bug.
    assertWireSafeArgs(label, args);
    assertArgShape(label, path, args);
    return send(path, args);
  };
}

/** Everything a session block hands its callback. */
export interface SessionHandle {
  /** The server-side id. Present so a caller can quote it in a bug report or find
   * the run in a trace. */
  readonly sessionId: string;
  /** ISO instant after which the session is gone and its calls 410. */
  readonly expiresAt: string;
}

/** Run a block of calls against ONE live instance.
 *
 * ```ts
 * const total = await session(async (bm) => {
 *   const found = await bm.providers.gymshark.search({ query: "hoodie" });
 *   await bm.providers.gymshark.addToCart({ variantId: found.products[0].variantId });
 *   return (await bm.providers.gymshark.getCart()).itemCount;
 * });
 * ```
 *
 * **Each call is a round trip.** Stated rather than hidden, because a surface that
 * looks like a local function call and is actually stateful is the leaky abstraction
 * Cap'n Web is most criticised for, and it is how a caller writes an N+1 without
 * noticing.
 *
 * The session closes in a `finally`, so a throw inside the callback still releases
 * it. Metering is per CALL on both surfaces — opening and closing cost nothing. */
export async function session<T>(
  callback: (bowmark: BowmarkLibrary, handle: SessionHandle) => Promise<T>,
  opts: ClientOptions = {},
): Promise<T> {
  const client = resolveClient(opts);
  const opened = await openSession(client);
  const proxy = libraryProxy(
    dispatchThrough((path, args) => callInSession(client, opened.sessionId, path, args)),
  );
  try {
    return await callback(proxy, { sessionId: opened.sessionId, expiresAt: opened.expiresAt });
  } finally {
    // Swallowed, and reported through `onLog` rather than thrown. A close that
    // failed on top of a callback that threw would replace the caller's real error
    // with a cleanup detail; the session's TTL reaps what this could not reach.
    await closeSession(client, opened.sessionId).catch((err: unknown) => {
      client.onLog?.(`[bowmark] could not close session ${opened.sessionId}: ${String(err)}`);
      return null;
    });
  }
}

/** Open a session by hand, for a caller whose lifetime is not a block — a REPL, a
 * long-lived server object, a test fixture.
 *
 * `session()` is the form to reach for; this one moves the `finally` to the caller,
 * and a caller who forgets it holds a session until its TTL. */
export async function openManagedSession(opts: ClientOptions = {}): Promise<{
  bowmark: BowmarkLibrary;
  sessionId: string;
  expiresAt: string;
  close(): Promise<ClosedSession | null>;
}> {
  const client = resolveClient(opts);
  const opened = await openSession(client);
  return {
    bowmark: libraryProxy(
      dispatchThrough((path, args) => callInSession(client, opened.sessionId, path, args)),
    ),
    sessionId: opened.sessionId,
    expiresAt: opened.expiresAt,
    close: () => closeSession(client, opened.sessionId),
  };
}

/** The bare per-call form: every call opens its own one-shot session and closes it.
 *
 * Correct for a single call and WRONG for several — two calls get two instances and
 * two cookie jars, so a cart filled by the first does not exist for the second, and
 * the failure is silent (Shopify answers `POST /cart/add.js` with 200 and the line
 * echoed back, then reports `item_count: 0`). Use `session()` for anything
 * multi-step. */
export function client(opts: ClientOptions = {}): BowmarkLibrary {
  return libraryProxy(
    dispatchThrough(async (path, args) => {
      // Resolved per CALL, not once at construction. The exported `bowmark` is
      // built at module load, and a consumer whose `fetch` or `BOWMARK_API_KEY`
      // arrives after the import would otherwise be frozen against the environment
      // as it stood at the top of their file.
      const resolved = resolveClient(opts);
      const opened = await openSession(resolved);
      try {
        return await callInSession(resolved, opened.sessionId, path, args);
      } finally {
        await closeSession(resolved, opened.sessionId).catch((err: unknown) => {
          resolved.onLog?.(`[bowmark] could not close session ${opened.sessionId}: ${String(err)}`);
          return null;
        });
      }
    }),
  );
}
