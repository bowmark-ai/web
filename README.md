# Bowmark for the web

Call live websites as typed functions from your own code. `bm.music.search("aphex twin")`
returns a typed list, not a page of HTML for you to parse. The same library is available in
TypeScript and Python.

New accounts start with a free $10. Sign up at https://bowmark.ai/sign-up.

## Install

TypeScript / JavaScript ([full guide](node/README.md)):

```sh
npm i @bowmark/web
```

Python 3.11 or newer ([full guide](python/README.md)):

```sh
pip install bowmark-web bowmark-web-stubs
```

## First call

Create a key at https://bowmark.ai/dashboard/keys, then:

```ts
import { session } from "@bowmark/web";

const tracks = await session(async (bm) => bm.music.search("aphex twin"), {
  apiKey: "bmk_…", // or set BOWMARK_API_KEY and omit this
});
```

```python
from bowmark_web import session

async with session(api_key="bmk_…") as bm:  # or set BOWMARK_API_KEY and omit it
    tracks = await bm.music.search("aphex twin")
```

## What you can call

- [PROVIDERS.md](https://github.com/bowmark-ai/web/blob/main/PROVIDERS.md): every site Bowmark covers, with each function's status.
- [CAPABILITIES.md](https://github.com/bowmark-ai/web/blob/main/CAPABILITIES.md): the same functions grouped by what they do.
- [recipes/](https://github.com/bowmark-ai/web/tree/main/recipes): short scripts that combine them.

## Using an AI agent instead?

Point it at the hosted MCP server, `https://api.bowmark.ai/mcp`, or install the
[Bowmark plugin](https://github.com/bowmark-ai/plugin). Docs: https://bowmark.ai/docs

## In this repository

| Folder | Package |
|---|---|
| [`node/`](node/) | `@bowmark/web` on npm |
| [`python/`](python/) | `bowmark-web` on PyPI |
| [`python-stubs/`](python-stubs/) | `bowmark-web-stubs`, the typed `.pyi` declarations |

MIT licensed.
