// Compiles src/*.ts to dist/*.js + *.d.ts for the PUBLISHED package. Never run in
// the monorepo (workspace tests and `pnpm typecheck` read `src/` directly) and
// never run by a consumer — this is `npm run build`, invoked once, in the public
// mirror's own `publish.yml`, after `npm install` has fetched `typescript`.
//
// tsc's declaration emit does not carry the ambient reference forward, and that
// needs a manual fix rather than a compiler flag. `src/generated/library.d.ts`
// declares only globals — no imports, no exports — and `index.ts` reaches it with
// `/// <reference path="./generated/library.d.ts" />`. tsc consumes that directive
// for THIS compile (every file under `src/` is one program) but does not re-emit it
// into `dist/index.d.ts`. Left alone, a downstream consumer's own `tsc` never loads
// `library.d.ts` at all, and `BowmarkLibrary` — the type the whole package exists to
// ship — reads as `Cannot find name`. Verified 2026-09-01 against a real installed
// tarball: without this step, `bowmark.flights.search({ from: "SFO" })` typechecks
// clean (wrong); with it, it reports the missing `to`/`depart` fields (right, and
// the same error the source-shipped version has always produced).
//
// `library.d.ts` itself is copied verbatim rather than compiled — it has nothing to
// compile, and tsc does not treat an ambient `.d.ts` as emittable output.

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const DIST = resolve(ROOT, "dist");
const REFERENCE = '/// <reference path="./generated/library.d.ts" />\n';

rmSync(DIST, { recursive: true, force: true });

execFileSync(resolve(ROOT, "node_modules/.bin/tsc"), ["-p", "tsconfig.build.json"], {
  cwd: ROOT,
  stdio: "inherit",
});

mkdirSync(resolve(DIST, "generated"), { recursive: true });
cpSync(resolve(ROOT, "src/generated/library.d.ts"), resolve(DIST, "generated/library.d.ts"));

const indexDts = resolve(DIST, "index.d.ts");
const emitted = readFileSync(indexDts, "utf8");
if (!emitted.startsWith(REFERENCE)) {
  writeFileSync(indexDts, REFERENCE + emitted);
}
