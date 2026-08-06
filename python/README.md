# bowmark-web

The Python client for the [Bowmark](https://bowmark.ai) capability library — the whole
`bowmark.*` surface, running on our servers, with no Bowmark source on your disk.

**Zero runtime dependencies**, deliberately and permanently. `urllib` and `json` are the
whole transport.

```sh
pip install bowmark-web bowmark-web-stubs
```

The second package is where the types live. [PEP 561](https://peps.python.org/pep-0561/)
requires a stub distribution to be named `<pkg>-stubs`, so the split is mandated rather
than chosen. Skip it and the client still works; you just lose autocomplete for the
catalog.

## Two shapes, and the second one is the one you want

```python
import asyncio
from bowmark_web import bowmark, session


async def main() -> None:
    # ONE call. Opens a one-shot session, runs it, closes it.
    tracks = await bowmark.music.search("aphex twin")

    # SEVERAL calls against ONE live instance — one browser, one cookie jar.
    async with session() as bm:
        found = await bm.music.search("burial", 5)
        detail = await bm.music.getTrack(found["tracks"][0]["url"])
        print(detail["track"]["description"])


asyncio.run(main())
```

A store flow is the same shape, and is where a shared instance actually earns its keep:

```python
async with session() as bm:
    found = await bm.providers.gymshark.search({"query": "hoodie"})
    await bm.providers.gymshark.addToCart(
        {"variantId": found["products"][0]["variantId"]}
    )
    cart = await bm.providers.gymshark.getCart()   # itemCount is 1
```

**A type checker will not know `gymshark`, and that is not a bug.** It is a Shopify family
member; there are half a million storefronts and no manifest carries one, so neither
client's generated types enumerate them. The call works. Silence the checker with
`getattr(bm.providers, "gymshark")` if you want a clean run.

**`bowmark.<unit>.<fn>()` is wrong for a multi-step flow, and it fails quietly.** Two
calls get two instances and two cookie jars, so a cart the first filled does not exist
for the second — Shopify answers `POST /cart/add.js` with a 200 and the line echoed
back, then reports `item_count: 0`. Reach for `session()` the moment a flow has a second
step.

**Each call inside a session is a round trip.** Said out loud rather than hidden: a
surface that looks like a local function call and is actually stateful is how an N+1 gets
written without anyone noticing.

## Configuration

Read at CALL time, not at import — so a `.env` loader that runs after your first import
still works.

| | |
|---|---|
| `BOWMARK_API_KEY` | `bmk_…`. Optional: an anonymous caller keeps every browserless capability on a smaller daily budget. |
| `BOWMARK_API_URL` | Defaults to `https://api.bowmark.ai`. |

Every entry point takes the same keyword overrides — `api_key`, `base_url`, `headers`,
`timeout`, `on_log`.

## Errors

```python
from bowmark_web import BowmarkError, BowmarkNeedsUserError

try:
    await bm.providers.linkedin.searchPeople({"query": "cto"})
except BowmarkNeedsUserError as paused:
    # NOT a failure. The call paused for a human login and the session is still open.
    print("sign in here:", paused.handoff["url"])
except BowmarkError as err:
    print(err.code, err.path)     # branch on `code`; `str(err)` is prose for a person
```

`code` is the field to branch on. `str(err)` is written for an agent to read, which is
the wrong shape for an `except` block — both are present and neither replaces the other.

## Two guards run before the request, not after

A bad argument is refused in your process, so it never costs a round trip and is never
metered.

- **The wire guard** refuses anything JSON cannot carry — a `datetime`, a `set`, a
  `tuple`, a class instance, a non-string dict key, an `int` past 2⁵³−1, a circular
  structure — and names the exact position: `args[0].checkIn`.
- **The shape guard** refuses an argument the declared signature does not accept, from
  the same generated table the TypeScript client reads.

Both lean toward **accepting**. An object is open, an unmodelled type accepts anything,
and a surplus argument is ignored — because a false refusal is a correct call rejected by
your own client with no flag to turn it off, and a false accept costs one round trip.

Two consequences worth knowing:

- **An unknown FUNCTION on a known unit is refused**, naming the manifest version. Upgrade
  the package, or use `run(script)`, which is untyped by construction and reaches anything.
- **An unknown UNIT passes straight through.** Most of the library is Shopify family
  members (`bowmark.providers.gymshark.…`) which are deliberately in no manifest — there
  are half a million of them.

## `run(script)` — the string surface

```python
from bowmark_web import run

envelope = await run('return await bowmark.music.search("burial")')
envelope["status"]   # "ok" | "error" | "partial" | "needs_user"
```

Returns the envelope rather than raising, because a script is composite: `status`, `logs`
and `result` are read together. Untyped by construction — a string gets no checking, so
the generated stubs cover `session()` and `bowmark` and never this.

## Development

```sh
python3 -m unittest discover -s tests -t .
```

Stdlib only — no pip, no venv, no network — which is what lets this suite run inside the
monorepo's hermetic CI gate. It is also the point of the package having no dependencies: a
package that cannot be tested without installing something is one whose tests do not run.

`bowmark_web/_validators.json` and `python-stubs/bowmark_web-stubs/__init__.pyi` are
**GENERATED** by `pnpm run gen:public-types` in the monorepo, from the same library
manifest as the TypeScript `.d.ts`. Never edit them by hand; `gate:public-types` fails a
PR whose copies are stale, and asserts the two languages type the same functions.
