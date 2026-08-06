"""The three places this package restates something it cannot import.

Each one is a deliberate copy with a stated reason, and a copy that nothing checks is
the defect an unchecked one is. These are the checks.
"""

from __future__ import annotations

import ast
import re
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import bowmark_web  # noqa: E402

PACKAGE = Path(__file__).resolve().parents[2]
NODE_SRC = PACKAGE / "node" / "src"
STUB = PACKAGE / "python-stubs" / "bowmark_web-stubs" / "__init__.pyi"


def status_union(text: str, declaration: str) -> set[str]:
    """The `status` union out of one TypeScript interface, as a set of strings."""
    start = text.index(declaration)
    end = text.index("}", start)
    match = re.search(r"status\??:\s*([^;]+);", text[start:end])
    assert match is not None, f"no `status` field in {declaration}"
    return set(re.findall(r'"([^"]+)"', match.group(1)))


def stub_status_union(class_name: str) -> set[str]:
    """The same union out of the generated `.pyi`, read as Python rather than grepped."""
    tree = ast.parse(STUB.read_text("utf-8"))
    for node in tree.body:
        if isinstance(node, ast.ClassDef) and node.name == class_name:
            for statement in node.body:
                if (
                    isinstance(statement, ast.AnnAssign)
                    and isinstance(statement.target, ast.Name)
                    and statement.target.id == "status"
                ):
                    return {
                        literal.value
                        for literal in ast.walk(statement.annotation)
                        if isinstance(literal, ast.Constant) and isinstance(literal.value, str)
                    }
    raise AssertionError(f"no `status` field on {class_name} in the generated stub")


class Envelopes(unittest.TestCase):
    """The envelope shapes are hand-restated in three languages' worth of files, for
    one reason: ZERO runtime dependencies. Importing `@bowmark/schema` would make the
    npm tarball uninstallable outside the monorepo, and there is no Python equivalent
    to import at all.

    So the vocabularies are compared TEXTUALLY. Adding a status on one side alone fails
    here by name."""

    def test_the_run_envelope_statuses_match_the_typescript_client(self) -> None:
        ts = (NODE_SRC / "transport.ts").read_text("utf-8")
        self.assertEqual(
            status_union(ts, "export interface RunEnvelope"),
            stub_status_union("RunEnvelope"),
        )

    def test_the_run_envelope_carries_partial_and_the_call_envelope_does_not(self) -> None:
        """A session call IS one leg of a fan-out, so it cannot be partial. The two
        surfaces are deliberately different and a future session status must not be
        copied across by reflex."""
        ts = (NODE_SRC / "transport.ts").read_text("utf-8")
        run = status_union(ts, "export interface RunEnvelope")
        call = status_union(ts, "export interface CallEnvelope")
        self.assertIn("partial", run)
        self.assertNotIn("partial", call)
        self.assertEqual(call, {"ok", "error", "needs_user"})


class StubSurface(unittest.TestCase):
    """A PEP 561 `-stubs` distribution SHADOWS the module it stubs, per module. So the
    generated stub declares this package's whole public surface, not only the catalog —
    and that hand-written half (`CLIENT_SURFACE` in `scripts/gen-python-stubs.ts`) is a
    second copy of the runtime's API.

    Checked in BOTH directions, because the two failures are different: a name in the
    stub and not the runtime is an `AttributeError` at a caller who followed their
    editor, and a name in the runtime and not the stub is a working function their
    checker calls an error."""

    def stub_top_level_names(self) -> set[str]:
        tree = ast.parse(STUB.read_text("utf-8"))
        names: set[str] = set()
        for node in tree.body:
            if isinstance(node, (ast.ClassDef, ast.FunctionDef, ast.AsyncFunctionDef)):
                names.add(node.name)
            elif isinstance(node, ast.AnnAssign) and isinstance(node.target, ast.Name):
                names.add(node.target.id)
            elif isinstance(node, ast.Assign):
                for target in node.targets:
                    if isinstance(target, ast.Name):
                        names.add(target.id)
        return names

    def test_every_exported_name_is_declared_in_the_stub(self) -> None:
        missing = sorted(set(bowmark_web.__all__) - self.stub_top_level_names())
        self.assertEqual(
            missing,
            [],
            "these are exported by bowmark_web and absent from the generated stub, so a "
            "type checker will call a working call an error",
        )

    def test_the_stub_declares_nothing_the_runtime_does_not_have(self) -> None:
        # Only the client half is compared: the catalog half is Protocols and TypedDicts
        # generated from the manifest, which have no runtime counterpart by design.
        client_half = {
            "bowmark",
            "client",
            "session",
            "run",
            "BowmarkError",
            "BowmarkNeedsUserError",
            "ManagedSession",
        }
        declared = self.stub_top_level_names()
        self.assertTrue(client_half <= declared, sorted(client_half - declared))
        for name in client_half:
            self.assertTrue(hasattr(bowmark_web, name), f"the stub declares {name}; the module does not")

    def test_the_stub_package_is_marked_PARTIAL(self) -> None:
        """Without `partial`, a checker that resolves `bowmark_web-stubs` stops looking
        for `bowmark_web`'s own inline types — so every private submodule
        (`_transport`, `_guard`, `_validate`) becomes unresolvable to anyone who
        imports one."""
        marker = STUB.parent / "py.typed"
        self.assertEqual(marker.read_text("utf-8").strip(), "partial")


class ZeroDependencies(unittest.TestCase):
    """`pip install bowmark-web` pulls in NOTHING, and that is the product rather than
    a preference — a transitive tree is what makes a consumer's dependency review a
    conversation about us.

    Read with `ast` rather than grepped: an `import` inside a docstring is prose, and a
    regex over the file text reports this module's own usage EXAMPLE as a violation.
    That is not hypothetical — it is what the first version of this check did."""

    SOURCE = Path(__file__).resolve().parents[1] / "bowmark_web"

    STDLIB = frozenset(
        {
            "asyncio",
            "collections",
            "dataclasses",
            "datetime",
            "decimal",
            "importlib",
            "json",
            "math",
            "os",
            "pathlib",
            "re",
            "types",
            "typing",
            "urllib",
        }
    )

    def modules(self) -> list[Path]:
        # Enumerated from DISK, never listed: a check whose subjects are written down
        # silently stops covering whatever lands next, and it is invisible because the
        # list is right on the day it is written.
        found = sorted(self.SOURCE.glob("*.py"))
        self.assertGreaterEqual(len(found), 4, "the source directory read as empty")
        return found

    def test_nothing_outside_the_standard_library_is_imported(self) -> None:
        for module in self.modules():
            tree = ast.parse(module.read_text("utf-8"))
            for node in ast.walk(tree):
                if isinstance(node, ast.Import):
                    for alias in node.names:
                        root = alias.name.split(".")[0]
                        self.assertIn(root, self.STDLIB, f"{module.name} imports {root}")
                elif isinstance(node, ast.ImportFrom):
                    if node.level > 0 or node.module is None:
                        continue  # a relative import, checked below
                    root = node.module.split(".")[0]
                    if root == "__future__":
                        continue
                    self.assertIn(root, self.STDLIB, f"{module.name} imports {root}")

    def test_every_intra_package_import_is_RELATIVE(self) -> None:
        """`from bowmark_web import x` inside the package works when the package is on
        `sys.path` and breaks when it is vendored, renamed, or imported as a submodule
        of something else."""
        for module in self.modules():
            tree = ast.parse(module.read_text("utf-8"))
            for node in ast.walk(tree):
                if isinstance(node, ast.ImportFrom) and node.module == "bowmark_web":
                    self.fail(f"{module.name} imports `bowmark_web` absolutely")
                if isinstance(node, ast.Import):
                    for alias in node.names:
                        self.assertNotEqual(alias.name.split(".")[0], "bowmark_web")


if __name__ == "__main__":
    unittest.main()
