# @bowmark/web

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=bowmark&config=eyJ1cmwiOiJodHRwczovL2FwaS5ib3dtYXJrLmFpL21jcC9iYWRnZS1jdXJzb3IifQ==)
[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Bowmark-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=bowmark&config=%7B%22name%22%3A%22bowmark%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapi.bowmark.ai%2Fmcp%2Fbadge-vscode%22%7D)

[![MCP](https://img.shields.io/badge/MCP-server-000000?style=flat-square)](https://api.bowmark.ai/mcp)
[![npm](https://img.shields.io/npm/v/%40bowmark%2Fmcp?style=flat-square&label=%40bowmark%2Fmcp)](https://www.npmjs.com/package/@bowmark/mcp)
[![PyPI](https://img.shields.io/pypi/v/bowmark-mcp?style=flat-square)](https://pypi.org/project/bowmark-mcp/)
[![License](https://img.shields.io/badge/license-MIT-A3E635?style=flat-square)](https://opensource.org/licenses/MIT)

<sub>**LM Studio** — GitHub strips a raw `lmstudio:` link, so this one is a paste, not a button. Copy it into your browser's address bar:</sub>

```
lmstudio://add_mcp?name=bowmark&config=eyJ1cmwiOiJodHRwczovL2FwaS5ib3dtYXJrLmFpL21jcC9iYWRnZS1sbXN0dWRpbyJ9
```

```sh
npm i @bowmark/web
```

**You need an API key.** Sign up at https://bowmark.ai/sign-up, create a key at
https://bowmark.ai/dashboard/keys, and pass it in:

```ts
import { session } from "@bowmark/web";

const total = await session(async (bm) => (await bm.music.search("aphex twin")).length, {
  apiKey: "bmk_…",   // or set BOWMARK_API_KEY and omit this
});
```

A client with no key throws `BowmarkError` with `code: "no_api_key"` on its first call,
before anything is sent.

**There is a Python client too**, from this same directory tree and the same generated
surface: `pip install bowmark-web bowmark-web-stubs`
([`../python/README.md`](../python/README.md)). One `LibraryManifest` produces the
declarations below AND the `.pyi`, `gate:public-types` asserts the two languages type the
same functions, and all three packages ship at one version — so a caller in either
language is looking at the same library.

---

## Using this package — start here

This is everything you need to write code that calls Bowmark:

- **[The session is the surface](#the-session-is-the-surface)** — How to use `session()` to keep your control flow on your machine
- **[The three other entry points](#the-three-other-entry-points)** — `bowmark`, `client()`, `openManagedSession()`, `run()` and when to use each
- **[Signing in](#signing-in--login-connection-and-bmconnections)** — How `login()` and `{ connection }` work
- **[Error handling](#what-it-throws)** — What exceptions to expect and how to handle them
- **[Configuration](#configuration)** — How to pass your API key and other options

Stop here if you just need to call the library. What exists to call is listed in
[`CAPABILITIES.md`](https://raw.githubusercontent.com/bowmark-ai/web/main/CAPABILITIES.md) and
[`PROVIDERS.md`](https://raw.githubusercontent.com/bowmark-ai/web/main/PROVIDERS.md) — absolute
URLs, because this README is read on npm where a relative link resolves to nothing.

---

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

**`run()` is designed for agents, not for you.** If you're writing code in your editor,
use `session()` instead. For **reading a page** — fetching and parsing HTML — use the
`read.page()` capability from within a `session()` callback:

```ts
import { session } from "@bowmark/web";

const parsed = await session(async (bm) => {
  return await bm.read.page(url);  // fetches and parses the page
}, { apiKey: "bmk_…" });
```

### Signing in — `login()`, `{ connection }`, and `bm.connections.*`

```ts
import { session } from "@bowmark/web";

await session(async (bm) => {
  const a = await bm.providers.reddit.login({ username: "u1", password: "p1" });
  const b = await bm.providers.reddit.login({ username: "u2", password: "p2" });

  await bm.providers.reddit.vote({ id: "t3_x", direction: "up" }, { connection: a.connection });
  await bm.providers.reddit.vote({ id: "t3_y", direction: "up" }, { connection: b.connection });

  await bm.connections.update(a.connection, { keepAlive: { everyHours: 6 } });
  await bm.connections.logout(a.connection); // ends the site session, keeps the entry
  await bm.connections.delete(b.connection); // forgets the entry, site session untouched
});
```

**`login()` exists on any provider with login adapters, and every login is a NEW,
separate connection** — calling it twice never replaces the first. Pass `connection: id`
in its argument to sign back in to an existing one instead (its id and settings are kept; a
`logged_out` one is revived). The returned `connection` works on the very next call, and
`warnings` names your other connections to that site. Its `username` /
`password` / `totpCode` / `totpSeed` are plain strings, unlike the `bowmark.secret()`
references a `run()` script must use: this client's transport lifts each one into a
per-request `x-bowmark-credential-<name>` header before the call leaves your process,
so the value never rides in the request body a run row, a log or a trace could carry.
`keepAlive`/`expiresAt` are ordinary values and travel in the body unchanged — absent
means a 12-hour keep-alive.

**Every signed-in function accepts a trailing `{ connection }`.** Omit it and the call
uses the provider's default connection; several live and none marked default throws a
caller-fixable `ConnectionAmbiguous` error listing them. `login()`'s own return value
is `{ connection, account, expiresAt }` — pass `connection` straight into a later call.

**`bm.connections.list/logout/delete/update`** are REST over `/v1/connections`, not part
of the generic capability dispatch. `logout` drops Bowmark's cookies, ends the session on
the site where the provider can (`siteSignedOut: true` is checked, not assumed;
`siteLogout: "unsupported"` says the site offers no way), and KEEPS the entry as
`logged_out` so `login({ connection: id })` can revive it. `delete` forgets Bowmark's own
row and cookies; it does **not** sign the account out on the site.

**Python note:** `bowmark_web-stubs` types `login()` and `{ connection }` for parity,
but the Python **runtime** does not yet lift credentials into a header the way this
client does — see `packages/bowmark-web/python/README.md` if you hit this from Python.

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

Pass `{ apiKey, baseUrl, fetch, headers, signal, onLog }` explicitly — every entry point
takes them — or set `BOWMARK_API_KEY` and `BOWMARK_API_URL`, read at CALL time. **The key
is required**: without one the first call throws `code: "no_api_key"` and sends nothing.
A caller header cannot displace the key.

---

## For maintainers of this package

How `@bowmark/web` is built, generated and published — the generator, the guards, the
publish pipeline — now lives in [`CONTRIBUTING.md`](./CONTRIBUTING.md), not here.
Nothing past this point is needed to call the library.
