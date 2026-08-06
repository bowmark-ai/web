# bowmark-web-stubs

[PEP 561](https://peps.python.org/pep-0561/) type stubs for
[`bowmark-web`](https://pypi.org/project/bowmark-web/) — the whole
[Bowmark](https://bowmark.ai) capability surface, typed.

```sh
pip install bowmark-web bowmark-web-stubs
```

```python
async with session() as bm:
    found = await bm.providers.gymshark.search({"query": "hoodie"})
    #                                  ^ your editor knows every provider, every
    #                                    function, every argument and every field
```

## Why it is a separate distribution

PEP 561 is explicit: *"The name of the stub package MUST follow the scheme
`foopkg-stubs`."* So this is mandated rather than chosen, and PyPI has no rename, alias
or redirect mechanism to undo it with.

`bowmark-web` still ships `py.typed`, so installing only the client keeps the client's
own types and loses only the catalog.

This distribution is marked **partial**, which matters: without that marker a checker
resolving `bowmark_web-stubs` stops looking at `bowmark_web` altogether, and every
private submodule becomes unresolvable to anyone who imports one.

## What is in it, and where it comes from

`bowmark_web-stubs/__init__.pyi` is **generated** — from the same `LibraryManifest` that
produces the TypeScript declarations in
[`@bowmark/web`](https://www.npmjs.com/package/@bowmark/web). One manifest, one refusal
rule, two languages, so the two clients cannot come to disagree about what the library
offers. A gate in the source repo asserts the parity on every change.

Everything the library can do is in
[CAPABILITIES.md](https://github.com/bowmark-ai/web/blob/main/CAPABILITIES.md) and
[PROVIDERS.md](https://github.com/bowmark-ai/web/blob/main/PROVIDERS.md), regenerated
daily.

## What it deliberately does NOT type

**Some functions are absent, on purpose.** A function whose declared argument is a bare
destructuring pattern with no field types, or whose signature names a type its own
documentation never defines, gets a comment in place of a signature naming it and saying
why. Those functions are real and callable at runtime — the stub withholds only the
compile-time claim, because we have none to make. A `(*args: Any) -> Any` stand-in would
pass every check and tell you nothing.

**Family members are not enumerated.** `bowmark.providers.gymshark.search(…)` works and is
not in these stubs: there are half a million Shopify storefronts and no manifest carries
one. Type checkers will not complete them; the client sends them happily.

**Everything leans toward accepting.** An argument-position list is `Sequence[T]`, a
number is `float` (so an `int` is fine), and anything the schema could not model is `Any`.
A stub that refuses a correct argument is a red squiggle you cannot turn off, and that is
a worse failure than one round trip.

## Versioning

`bowmark-web`, `bowmark-web-stubs` and `@bowmark/web` on npm are released together and
always carry the same version. A skew would mean one ecosystem is on an older contract.
