## 2025-05-18 - [Path Traversal in Markdown Utility]
**Vulnerability:** Path traversal in `getPostBySlug` and other markdown utilities allowed reading files outside the `content/` directory.
**Learning:** Using `path.join` with user-provided strings (like slugs or folder names) without validation allows attackers to use `..` to escape the intended directory.
**Prevention:** Implement a `validatePath` helper to reject any input containing `..` or `\` before using it in filesystem operations.
