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

- The typed library, [node/src/generated/library.d.ts](https://raw.githubusercontent.com/bowmark-ai/web/main/node/src/generated/library.d.ts): every function with its arguments and what it does. Your editor completes it once the package is installed.
- [covered-functions.txt](https://raw.githubusercontent.com/bowmark-ai/web/main/covered-functions.txt): every covered website and the names of its functions. [CHANGELOG.md](https://github.com/bowmark-ai/web/blob/main/CHANGELOG.md) names what each release added.
- [`GET https://api.bowmark.ai/v1/library?query=<what you want to do>`](https://bowmark.ai/docs/scripting): the same library, searched by task.
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
