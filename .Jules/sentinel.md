## 2026-07-06 - Path Traversal in Markdown Utility
**Vulnerability:** The `utils/markdown.ts` utility functions were directly joining user-provided `contentFolder` and `slug` parameters into filesystem paths using `path.join` without validation. This allowed an attacker to use `..` sequences to read arbitrary files on the server (e.g., `slug=../../package.json`).
**Learning:** Even in static-site generators or simple blogs, dynamic file loading based on URL parameters is a common vector for path traversal if inputs are not strictly validated against directory escape sequences.
**Prevention:** Always validate dynamic path segments to ensure they don't contain `..` or other malicious sequences. Implement a centralized path validation helper for all filesystem operations.
