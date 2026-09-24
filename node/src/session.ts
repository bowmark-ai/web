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
  type ConnectionLogout,
  type ConnectionSummary,
  callInSession,
  closeSession,
  deleteConnection,
  listConnections,
  logoutConnection,
  openSession,
  type ResolvedClient,
  resolveClient,
  updateConnection,
} from "./transport.js";

/** What a proxy node does when it is finally called. */
type Dispatch = (path: string[], args: unknown[]) => Promise<unknown>;

/** What actually reaches the wire: the generic dispatcher, plus a PER-CALL header
 * addition — multi-account connections' `login()` credential lift is the one
 * caller. `Dispatch` (above) stays the public shape every call site already
 * builds; this is the one extra parameter `dispatchThrough` threads through. */
type Send = (
  path: string[],
  args: unknown[],
  extraHeaders?: Record<string, string>,
) => Promise<unknown>;

// ── `login()`'s password channel ─────────────────────────────────────────────
//
// `bowmark.providers.<id>.login({ username, password, … })` declares its argument
// as `LoginInput` — plain strings, because that is what a caller of a TYPED client
// actually holds. The server's dispatch chokepoint (`packages/runtime/src/
// login-dispatch.ts`'s `resolveLoginCreds`) instead REQUIRES each credential field
// to be a `SecretRef` — the same fence a script's `bowmark.secret()` produces — so
// a literal string in the request body is refused outright rather than silently
// accepted. This is the client-side half of that contract: lift each credential
// field into a per-request `x-bowmark-credential-<name>` header, and replace it in
// the outgoing body with the identical `SecretRef` placeholder shape, so the
// plaintext never rides in the JSON a run row, a log or a trace could carry.

const CREDENTIAL_HEADER_PREFIX = "x-bowmark-credential-";

/** The `LoginInput` fields that are credentials, and the secret-name suffix each
 * is stored under — the SAME convention `loginSecretName` (`@bowmark/schema`)
 * uses server-side (`<provider>_<field>`), restated here for the same
 * zero-runtime-dependency reason `guard.ts` copies `wire.ts`. */
const CREDENTIAL_FIELD_SUFFIX = {
  username: "username",
  password: "password",
  totpCode: "totp_code",
  totpSeed: "totp_seed",
} as const;

/** `bowmark.providers.<id>.login(creds)` — the one call this client rewrites
 * before it reaches the wire. */
function isLoginCall(path: readonly string[]): boolean {
  return path.length === 3 && path[0] === "providers" && path[2] === "login";
}

/** The exact shape `bowmark.secret(name)` produces server-side (`SecretRef`,
 * `@bowmark/schema`) — reconstructed here rather than imported, for the same
 * reason every other wire shape in this package is a checked copy. */
function secretRefPlaceholder(name: string): { __secretRef: true; name: string } {
  return { __secretRef: true, name };
}

/** Lift `login()`'s plaintext credential fields into per-request headers, and
 * replace them in the outgoing body with `SecretRef` placeholders. `keepAlive`
 * and `expiresAt` are plain values on both sides and are left untouched. */
function liftLoginCredentials(
  providerId: string,
  args: readonly unknown[],
): { args: unknown[]; headers: Record<string, string> } {
  const creds = args[0];
  if (creds === null || typeof creds !== "object" || Array.isArray(creds)) {
    return { args: [...args], headers: {} };
  }
  const input = creds as Record<string, unknown>;
  const rewritten: Record<string, unknown> = { ...input };
  const headers: Record<string, string> = {};
  for (const field of Object.keys(
    CREDENTIAL_FIELD_SUFFIX,
  ) as (keyof typeof CREDENTIAL_FIELD_SUFFIX)[]) {
    const value = input[field];
    if (typeof value !== "string") continue;
    const name = `${providerId}_${CREDENTIAL_FIELD_SUFFIX[field]}`;
    headers[`${CREDENTIAL_HEADER_PREFIX}${name}`] = value;
    rewritten[field] = secretRefPlaceholder(name);
  }
  return { args: [rewritten, ...args.slice(1)], headers };
}

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
/** `bm.connections.*`'s shape. Hand-written rather than read off the ambient
 * `BowmarkConnections` ` .d.ts` declares (`scripts/gen-public-types.ts`'s
 * `AMBIENT_DECLARATIONS`) — `libraryProxy`'s return is asserted `as BowmarkLibrary`
 * as a whole, so nothing here is structurally checked against that ambient type at
 * runtime, and this file's own contract is what actually has to type-check. Keep
 * the two in step by hand, the same way `CallEnvelope` already tracks the api's
 * `SessionEnvelope`. */
export interface ConnectionsApi {
  list(filter?: { provider?: string }): Promise<ConnectionSummary[]>;
  delete(id: string): Promise<{ revoked: string; provider: string; scope: string }>;
  logout(id: string): Promise<ConnectionLogout>;
  update(
    id: string,
    patch: { keepAlive?: { everyHours: number } | false; expiresAt?: string | null },
  ): Promise<{ updated: true }>;
}

function libraryProxy(dispatch: Dispatch, connections: ConnectionsApi): BowmarkLibrary {
  const node = (path: string[]): unknown => {
    // The target is a FUNCTION so the proxy is callable at any depth. A plain
    // object target makes `apply` an illegal trap and every call a TypeError.
    const target = () => undefined;
    return new Proxy(target, {
      get(_target, property) {
        if (typeof property !== "string") return undefined;
        if (NOT_A_PATH_SEGMENT.has(property)) return undefined;
        // `bm.connections.*` bypasses the generic dispatch entirely — REST over
        // `/v1/connections`, never `/v1/session/:id/call`. Special-cased at the
        // ROOT only: `connections` is not a real unit namespace, so nothing here
        // would otherwise stop a caller building `bowmark.connections.anything`
        // and sending it as an ordinary (and meaningless) capability call.
        if (path.length === 0 && property === "connections") return connections;
        return node([...path, property]);
      },
      apply(_target, _thisArg, args: unknown[]) {
        return dispatch(path, args);
      },
    });
  };
  return node([]) as BowmarkLibrary;
}

/** `bm.connections.list/delete/logout/update`, bound to one resolved client. */
function connectionsApi(client: ResolvedClient): ConnectionsApi {
  return {
    list: (filter?: { provider?: string }) => listConnections(client, filter),
    delete: (id: string) => deleteConnection(client, id),
    logout: (id: string) => logoutConnection(client, id),
    update: (
      id: string,
      patch: { keepAlive?: { everyHours: number } | false; expiresAt?: string | null },
    ) => updateConnection(client, id, patch),
  };
}

/** `get_library` is real, and it is not here.
 *
 * It is an MCP tool and `GET /v1/library?query=`, never an export of this
 * package — so `bowmark.get_library({ query })` raises the bad-path error above
 * and, until 2026-09-19, said nothing about where the thing actually lives. A
 * newcomer who hit it read an 88,000-line generated `.d.ts` by hand instead.
 *
 * A LOCAL COPY on purpose: this package has zero runtime dependencies,
 * deliberately and permanently, so it cannot import `OTHER_CHANNEL` from
 * `@bowmark/runtime`. `tests/unit/other-channel-hint.test.ts` holds the three
 * copies (here, the Python client, the runtime) to the same names.
 * `agents/richard/problems/newcomer-get-library-shown-as-callable-in-own-code.md`. */
const OTHER_CHANNEL = new Set(["get_library", "getLibrary"]);

function otherChannelSuffix(first: string | undefined): string {
  if (first === undefined || !OTHER_CHANNEL.has(first)) return "";
  return (
    " — `get_library` is a DISCOVERY channel, not something this package exports: it is an MCP " +
    "tool your agent calls directly, and `GET /v1/library?query=…` over HTTP with your " +
    "`BOWMARK_API_KEY`. Read the library BEFORE you write the call, then call what you came for."
  );
}

/** One dispatch: validate the path, refuse a non-wire argument, then send it. */
function dispatchThrough(send: Send): Dispatch {
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
        `${label} is not a callable path. Call a function on a unit — bowmark.music.search(…) or bowmark.providers.gymshark.search(…).` +
          otherChannelSuffix(path[0]),
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
    //
    // Both run against the CALLER's original args — `LoginInput`'s declared shape
    // is plain strings, and that is the promise being checked here. The rewrite
    // into `SecretRef` placeholders happens AFTER, and only for the one call it
    // applies to, so a caller's mistake is still reported against what they wrote.
    assertWireSafeArgs(label, args);
    assertArgShape(label, path, args);
    if (isLoginCall(path)) {
      const providerId = path[1] as string;
      const { args: wireArgs, headers } = liftLoginCredentials(providerId, args);
      return send(path, wireArgs, headers);
    }
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
    dispatchThrough((path, args, extraHeaders) =>
      callInSession(client, opened.sessionId, path, args, extraHeaders),
    ),
    connectionsApi(client),
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
      dispatchThrough((path, args, extraHeaders) =>
        callInSession(client, opened.sessionId, path, args, extraHeaders),
      ),
      connectionsApi(client),
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
    dispatchThrough(async (path, args, extraHeaders) => {
      // Resolved per CALL, not once at construction. The exported `bowmark` is
      // built at module load, and a consumer whose `fetch` or `BOWMARK_API_KEY`
      // arrives after the import would otherwise be frozen against the environment
      // as it stood at the top of their file.
      const resolved = resolveClient(opts);
      const opened = await openSession(resolved);
      try {
        return await callInSession(resolved, opened.sessionId, path, args, extraHeaders);
      } finally {
        await closeSession(resolved, opened.sessionId).catch((err: unknown) => {
          resolved.onLog?.(`[bowmark] could not close session ${opened.sessionId}: ${String(err)}`);
          return null;
        });
      }
    }),
    // Resolved per call too, for the identical reason.
    {
      list: (filter) => listConnections(resolveClient(opts), filter),
      delete: (id) => deleteConnection(resolveClient(opts), id),
      logout: (id) => logoutConnection(resolveClient(opts), id),
      update: (id, patch) => updateConnection(resolveClient(opts), id, patch),
    },
  );
}
