## 2025-05-22 - [Path Traversal in Markdown Utils]
**Vulnerability:** The `getPostBySlug` and related functions in `utils/markdown.ts` were susceptible to path traversal attacks because they used unsanitized user input (from URL params) to construct file paths.
**Learning:** Even in a static-site generator or a simple blog, user-controlled input used for file system operations must be strictly validated. Standard path joining doesn't prevent traversal if `..` sequences are present.
**Prevention:** Implement a strict validation helper that rejects any input containing traversal characters (`..`, `/`, `\`) before it reaches file system functions.
