# Sentinel's Journal - DEA sin límites

## 2025-05-15 - [Path Traversal in Markdown Utilities]
**Vulnerability:** The `getPostBySlug` and related functions in `utils/markdown.ts` were vulnerable to path traversal because they concatenated user-provided slugs directly into file paths without validation. This could allow an attacker to read arbitrary `.md` files on the server by using `..` in the slug.
**Learning:** Even in static-site-like setups, dynamic route parameters used for file system access must be sanitized. Path joining with `process.cwd()` doesn't inherently prevent traversal if the input contains `..`.
**Prevention:** Always use a validation helper to reject any input containing path traversal sequences (`..`, `\`) before using it in file system operations.
