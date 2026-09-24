// The transport — `fetch` and nothing else.
//
// Three session endpoints plus the string surface. No retries, no backoff, no
// connection pool: every one of those is a policy a caller can hold better than we
// can, and a client that silently retries a `addToCart` is the bug the idempotency
// discussion in `docs/reference/building-capabilities.md` exists to prevent.
//
// ZERO RUNTIME DEPENDENCIES, permanently — including on `@bowmark/schema`. The
// envelope shapes below are hand-restated rather than imported, because importing a
// workspace package would make the published tarball uninstallable outside this repo.
// `tests/unit/bowmark-web-envelopes.test.ts` compares the two status vocabularies
// TEXTUALLY, because nothing typechecks `tests/unit/` — a `satisfies` there reads as
// a gate and is compiled away by esbuild. Adding a status on either side alone fails
// that test by name.

/** The subset of `fetch` this package uses. Declared structurally so a caller can
 * pass `undici`'s, a test double, or a proxying wrapper without a type assertion. */
export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

/** How a client reaches the api. Every field is optional; the defaults read the
 * environment the same way every other CLI-shaped client does. */
export interface ClientOptions {
  /** `bmk_…`, from https://bowmark.ai/dashboard/keys. **Required** — pass it here,
   * or set `BOWMARK_API_KEY`. Bowmark requires an account, so a client with neither
   * throws `BowmarkError` with `code: "no_api_key"` on its first call. */
  apiKey?: string;
  /** Defaults to `BOWMARK_API_URL`, else `https://api.bowmark.ai`. */
  baseUrl?: string;
  /** Defaults to `globalThis.fetch`. */
  fetch?: FetchLike;
  /** Merged into every request. Cannot override `authorization` or
   * `content-type` — a header that silently replaced the key would make a failed
   * call look like a permissions problem. */
  headers?: Record<string, string>;
  /** Aborts every request this client makes. */
  signal?: AbortSignal;
  /** Called with each call's server-side `logs`, and with anything the client
   * itself swallows (a failed close). Logs are otherwise dropped, because the
   * typed return value is the capability's return value and nothing else. */
  onLog?: (line: string) => void;
}

/** The wire shape one session call returns. Mirrors `SessionEnvelope` in
 * `apps/api/src/session-core.ts`.
 *
 * `needs_user` is a STATUS, not an error: the call paused for a human login and
 * **the session is still open**. That is the one thing this surface does that
 * `/v1/run` cannot, and it is why it maps to its own error subclass rather than
 * being folded into a generic failure. */
export interface CallEnvelope<T = unknown> {
  ok: boolean;
  status: "ok" | "error" | "needs_user";
  result?: T;
  logs?: string[];
  error?: string | null;
  /** Machine-branchable failure reason. Absent on success. */
  code?: string;
  ms?: number;
  needs?: AuthNeed[];
  meta?: { handoff?: Handoff };
}

/** The wire shape `POST /v1/run` returns. Mirrors `RunEnvelope` in
 * `apps/api/src/run-core.ts`. It carries a fourth status the session surface does
 * not have — `partial`, a fan-out one leg of which died — because a session call IS
 * one leg and cannot be partial. */
export interface RunEnvelope<T = unknown> {
  ok: boolean;
  status?: "ok" | "error" | "partial" | "needs_user";
  result?: T;
  logs?: string[];
  error?: string | null;
  ms?: number;
  needs?: AuthNeed[];
  incomplete?: { summary: string; [key: string]: unknown };
  meta?: { handoff?: Handoff; wwwAuthenticate?: string };
  /** Present when the account owner has not accepted Bowmark's current Terms or
   * Privacy Policy. The run is unaffected; `notice.message` is for your user. */
  notice?: {
    kind: "legal_update";
    message: string;
    acceptUrl: string;
    documents: { slug: string; title: string; version: string; url: string }[];
  };
}

/** Which (capability, provider) pair has no live grant. */
export interface AuthNeed {
  capability: string;
  provider: string;
  providerTitle: string;
  kind: string;
  discoveredBy: "preflight" | "halt";
}

/** The relay URL to hand a human. */
export interface Handoff {
  ref: string;
  url: string;
  expiresAt: string;
}

export interface OpenedSession {
  sessionId: string;
  expiresAt: string;
}

export interface ClosedSession {
  ok: true;
  calls: number;
  ms: number;
}

/** Anything this package throws.
 *
 * `code` is the field to branch on. The api sends prose in `error` written for an
 * agent to read, which is the wrong shape for a `catch` block — both are present and
 * neither replaces the other. */
export class BowmarkError extends Error {
  readonly code: string;
  /** HTTP status, or 0 when the request never reached us. */
  readonly httpStatus: number;
  readonly logs: readonly string[];
  /** The path that failed, as a caller writes it: `bowmark.music.search`. */
  readonly path?: string;

  constructor(
    message: string,
    init: { code: string; httpStatus?: number; logs?: readonly string[]; path?: string },
  ) {
    super(message);
    this.name = "BowmarkError";
    this.code = init.code;
    this.httpStatus = init.httpStatus ?? 0;
    this.logs = init.logs ?? [];
    this.path = init.path;
  }
}

/** One call paused for a human login. **The session is still open** and the same
 * call can be retried once the person has signed in at `handoff.url`.
 *
 * A subclass rather than a `code`, because the recovery is completely different: a
 * `BowmarkError` means stop or fix the call, and this means show a URL and wait. An
 * agent that reads a failure retries, and retrying a login halt buys the same halt. */
export class BowmarkNeedsUserError extends BowmarkError {
  readonly handoff?: Handoff;
  readonly needs: readonly AuthNeed[];

  constructor(
    message: string,
    init: {
      code: string;
      httpStatus?: number;
      logs?: readonly string[];
      path?: string;
      handoff?: Handoff;
      needs?: readonly AuthNeed[];
    },
  ) {
    super(message, init);
    this.name = "BowmarkNeedsUserError";
    this.handoff = init.handoff;
    this.needs = init.needs ?? [];
  }
}

/** A `ClientOptions` with every default already applied, so nothing downstream has
 * to remember which fields were optional. */
export interface ResolvedClient {
  apiKey: string | null;
  baseUrl: string;
  fetch: FetchLike;
  headers: Record<string, string>;
  signal?: AbortSignal;
  onLog?: (line: string) => void;
}

const DEFAULT_BASE_URL = "https://api.bowmark.ai";

/** What a client with no key is told, before it sends anything. Worded like the
 * api's own refusal (`apps/api/src/account-required.ts`), minus the parts about
 * other clients. */
const NO_API_KEY_MESSAGE =
  "Bowmark needs an API key, and this client has none, so nothing was sent.\n" +
  "1. Sign up at https://bowmark.ai/sign-up (free).\n" +
  "2. Create an API key at https://bowmark.ai/dashboard/keys.\n" +
  '3. Pass it as `client({ apiKey: "<key>" })`, or set the `BOWMARK_API_KEY` environment variable.';

/** Read one environment variable without depending on `@types/node`.
 *
 * This package compiles with `"types": []` and must run in a browser, a worker and
 * Node alike, so `process` is reached through `globalThis` and its absence is a
 * normal answer rather than a crash. */
function envVar(name: string): string | undefined {
  const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
  return proc?.env?.[name];
}

export function resolveClient(opts: ClientOptions = {}): ResolvedClient {
  const fetchImpl = opts.fetch ?? (globalThis as { fetch?: FetchLike }).fetch;
  if (!fetchImpl) {
    throw new BowmarkError(
      "no `fetch` available. Pass one as `{ fetch }` — Node 18+ and every browser have a global one.",
      { code: "no_fetch" },
    );
  }
  const baseUrl = (opts.baseUrl ?? envVar("BOWMARK_API_URL") ?? DEFAULT_BASE_URL).replace(
    /\/+$/,
    "",
  );
  return {
    apiKey: opts.apiKey ?? envVar("BOWMARK_API_KEY") ?? null,
    baseUrl,
    fetch: fetchImpl,
    headers: { ...(opts.headers ?? {}) },
    signal: opts.signal,
    onLog: opts.onLog,
  };
}

/** Send one request and parse JSON back. `postJson` and the `bm.connections.*` REST
 * calls both go through this — the only difference between them is the method and
 * whether there is a body.
 *
 * The caller's headers are merged FIRST, then `extraHeaders` — a PER-CALL addition
 * (multi-account connections' `login()` credential lift is the one caller today) —
 * so `authorization` and `content-type`, set last, always win. A header that
 * silently replaced the api key would make an unauthenticated call look like a
 * permissions problem on our side. */
async function sendRequest<T>(
  client: ResolvedClient,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  path: string,
  body?: unknown,
  extraHeaders?: Record<string, string>,
): Promise<{ status: number; payload: T }> {
  const headers: Record<string, string> = {
    ...client.headers,
    ...extraHeaders,
    accept: "application/json",
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  // Refused HERE rather than sent: the api would answer 401 with the same steps,
  // and a round trip that can only fail is a slower way to say it.
  if (!client.apiKey) throw new BowmarkError(NO_API_KEY_MESSAGE, { code: "no_api_key" });
  headers.authorization = `Bearer ${client.apiKey}`;

  let response: Response;
  try {
    response = await client.fetch(`${client.baseUrl}${path}`, {
      method,
      headers,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      signal: client.signal,
    });
  } catch (err) {
    // A transport failure is not a capability failure, and conflating the two is
    // how a caller comes to retry a DNS problem against a site.
    throw new BowmarkError(`could not reach ${client.baseUrl}${path}: ${String(err)}`, {
      code: "network_error",
    });
  }

  const text = await response.text();
  let payload: unknown;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    // A non-JSON body at this point is a proxy, a captive portal or an outage —
    // never us. Quote a bounded slice of it, because "unexpected token <" with no
    // body is the least actionable error in software.
    throw new BowmarkError(
      `${client.baseUrl}${path} answered ${response.status} with a non-JSON body: ${text.slice(0, 200)}`,
      { code: "bad_response", httpStatus: response.status },
    );
  }
  return { status: response.status, payload: payload as T };
}

/** POST JSON and parse JSON back. `extraHeaders` rides THIS call only — never
 * captured, never applied to a later call on the same client. */
async function postJson<T>(
  client: ResolvedClient,
  path: string,
  body: unknown,
  extraHeaders?: Record<string, string>,
): Promise<{ status: number; payload: T }> {
  return sendRequest<T>(client, "POST", path, body, extraHeaders);
}

export async function openSession(client: ResolvedClient): Promise<OpenedSession> {
  const { status, payload } = await postJson<OpenedSession & Partial<CallEnvelope>>(
    client,
    "/v1/session",
    {},
  );
  if (status !== 200 || !payload?.sessionId) {
    throw new BowmarkError(payload?.error ?? `could not open a session (HTTP ${status})`, {
      code: payload?.code ?? `http_${status}`,
      httpStatus: status,
    });
  }
  return { sessionId: payload.sessionId, expiresAt: payload.expiresAt };
}

/** Dispatch ONE call inside an open session, and unwrap it.
 *
 * Returns the capability's own return value, because that is what the generated
 * types promise. The envelope's other fields are not dropped: `logs` go to `onLog`,
 * and everything that is not `status: "ok"` becomes a throw carrying `code`. */
export async function callInSession(
  client: ResolvedClient,
  sessionId: string,
  path: readonly string[],
  args: readonly unknown[],
  extraHeaders?: Record<string, string>,
): Promise<unknown> {
  const label = ["bowmark", ...path].join(".");
  const { status, payload } = await postJson<CallEnvelope>(
    client,
    `/v1/session/${encodeURIComponent(sessionId)}/call`,
    { path, args },
    extraHeaders,
  );

  if (client.onLog) for (const line of payload?.logs ?? []) client.onLog(line);

  if (payload?.status === "needs_user") {
    throw new BowmarkNeedsUserError(
      payload.error ??
        `${label} paused for a login. Open the handoff URL, sign in, then call it again — the session is still open.`,
      {
        code: payload.code ?? "needs_user",
        httpStatus: status,
        logs: payload.logs,
        path: label,
        handoff: payload.meta?.handoff,
        needs: payload.needs,
      },
    );
  }

  if (status !== 200 || !payload || payload.ok !== true) {
    throw new BowmarkError(payload?.error ?? `${label} failed (HTTP ${status})`, {
      code: payload?.code ?? `http_${status}`,
      httpStatus: status,
      logs: payload?.logs,
      path: label,
    });
  }

  return payload.result;
}

/** Close a session. Idempotent server-side, so a `finally` that runs twice is fine. */
export async function closeSession(
  client: ResolvedClient,
  sessionId: string,
): Promise<ClosedSession | null> {
  const { status, payload } = await postJson<ClosedSession & Partial<CallEnvelope>>(
    client,
    `/v1/session/${encodeURIComponent(sessionId)}/close`,
    {},
  );
  if (status !== 200 || payload?.ok !== true) return null;
  return { ok: true, calls: payload.calls, ms: payload.ms };
}

// ── `bm.connections.*` — REST over `/v1/connections`, multi-account connections
// Phase 7 ─────────────────────────────────────────────────────────────────────
//
// Not part of the generic `bowmark.<unit>.<fn>` dispatch: these bypass
// `/v1/session/:id/call` entirely and hit the plain REST routes
// `apps/api/src/routes/connections.ts` already serves. A saved login is account
// state, not a capability call — there is no site to talk to and no session to
// hold open for it.

/** One saved login, as `GET /v1/connections` reports it. Mirrors the `.d.ts`'s
 * ambient `ConnectionSummary` — see `scripts/gen-public-types.ts`'s
 * `AMBIENT_DECLARATIONS`, which must stay in step with this by hand, the same way
 * `CallEnvelope` above already does. */
export interface ConnectionSummary {
  id: string;
  provider: string;
  scope: string;
  subject: string | null;
  status: string;
  method: string;
  replayLevel: string;
  expiresAt: string;
  validatedAt: string | null;
  lastUsedAt: string | null;
  createdAt: string;
  keepAlive: { everyHours: number } | false;
  forcedExpiresAt: string | null;
}

/** `GET /v1/connections`. The route itself takes no filter — `provider` is applied
 * CLIENT-SIDE, after the fetch, which is cheap at the scale one account's saved
 * logins reach. */
export async function listConnections(
  client: ResolvedClient,
  filter: { provider?: string } = {},
): Promise<ConnectionSummary[]> {
  const { status, payload } = await sendRequest<{
    connections?: ConnectionSummary[];
    error?: string;
  }>(client, "GET", "/v1/connections");
  if (status !== 200 || !payload?.connections) {
    throw new BowmarkError(payload?.error ?? `could not list connections (HTTP ${status})`, {
      code: `http_${status}`,
      httpStatus: status,
    });
  }
  return filter.provider
    ? payload.connections.filter((c) => c.provider === filter.provider)
    : payload.connections;
}

/** What `POST /v1/connections/:id/logout` answers. */
export interface ConnectionLogout {
  loggedOut: string;
  provider: string;
  /** True only when the provider ended the session on the site AND Bowmark checked
   * the site no longer accepts it. */
  siteSignedOut: boolean;
  /** Whether this provider can end a site session at all. */
  siteLogout: "supported" | "unsupported";
  /** Why the site session could not be ended, when it could not. */
  siteError?: string;
}

/** `POST /v1/connections/:id/logout`. Drops the cookies Bowmark held, ends the
 * session on the site where the provider can, and KEEPS the entry as `logged_out`
 * so a later `login({ connection: id })` revives it. The other half of grill
 * decision 4 is `deleteConnection` below. */
export async function logoutConnection(
  client: ResolvedClient,
  id: string,
): Promise<ConnectionLogout> {
  const { status, payload } = await sendRequest<Partial<ConnectionLogout> & { error?: string }>(
    client,
    "POST",
    `/v1/connections/${encodeURIComponent(id)}/logout`,
  );
  if (status !== 200 || !payload?.loggedOut) {
    throw new BowmarkError(
      payload?.error ?? `could not log out connection ${id} (HTTP ${status})`,
      {
        code: `http_${status}`,
        httpStatus: status,
      },
    );
  }
  return {
    loggedOut: payload.loggedOut,
    provider: payload.provider ?? "",
    siteSignedOut: payload.siteSignedOut === true,
    siteLogout: payload.siteLogout === "supported" ? "supported" : "unsupported",
    ...(payload.siteError ? { siteError: payload.siteError } : {}),
  };
}

/** `DELETE /v1/connections/:id`. Forgets the entry and its cookies — it does NOT
 * sign out on the site. `logoutConnection` above is the action that does. */
export async function deleteConnection(
  client: ResolvedClient,
  id: string,
): Promise<{ revoked: string; provider: string; scope: string }> {
  const { status, payload } = await sendRequest<{
    revoked?: string;
    provider?: string;
    scope?: string;
    error?: string;
  }>(client, "DELETE", `/v1/connections/${encodeURIComponent(id)}`);
  if (status !== 200 || !payload?.revoked) {
    throw new BowmarkError(payload?.error ?? `could not delete connection ${id} (HTTP ${status})`, {
      code: `http_${status}`,
      httpStatus: status,
    });
  }
  return { revoked: payload.revoked, provider: payload.provider ?? "", scope: payload.scope ?? "" };
}

/** `PATCH /v1/connections/:id` — the two knobs `login({ keepAlive, expiresAt })`
 * sets at acquisition, changeable later. `undefined` leaves a field alone;
 * `expiresAt: null` clears a forced ceiling, `keepAlive: false` turns it off. */
export async function updateConnection(
  client: ResolvedClient,
  id: string,
  patch: { keepAlive?: { everyHours: number } | false; expiresAt?: string | null },
): Promise<{ updated: true }> {
  const { status, payload } = await sendRequest<{ updated?: boolean; error?: string }>(
    client,
    "PATCH",
    `/v1/connections/${encodeURIComponent(id)}`,
    patch,
  );
  if (status !== 200 || !payload?.updated) {
    throw new BowmarkError(payload?.error ?? `could not update connection ${id} (HTTP ${status})`, {
      code: `http_${status}`,
      httpStatus: status,
    });
  }
  return { updated: true };
}

/** The string surface. Returns the ENVELOPE rather than throwing, because a script
 * is composite: a `needs_user` or an `error` is a fact about the run that a caller
 * reads alongside `logs` and `result`, not an exception in their control flow. */
export async function postRun<T>(client: ResolvedClient, script: string): Promise<RunEnvelope<T>> {
  const { status, payload } = await postJson<RunEnvelope<T>>(client, "/v1/run", { script });
  if (client.onLog) for (const line of payload?.logs ?? []) client.onLog(line);
  if (!payload) {
    throw new BowmarkError(`/v1/run answered ${status} with an empty body`, {
      code: `http_${status}`,
      httpStatus: status,
    });
  }
  return payload;
}
