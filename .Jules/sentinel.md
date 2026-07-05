## 2026-07-05 - [CRITICAL] Path Traversal in Markdown Utilities

**Vulnerability:** Path traversal in `utils/markdown.ts`.
**Learning:** Functions like `getPostBySlug` were using raw `slug` parameters directly in `path.join`, allowing attackers to read any file on the system that the application has access to by using `..` sequences.
**Prevention:** Always validate and sanitize user-provided path segments. Implement a strict check for directory traversal sequences (like `..`) before using them in file system operations.
