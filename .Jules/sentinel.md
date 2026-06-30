## 2025-05-22 - Path Traversal in Markdown Utils
**Vulnerability:** Unsanitized `slug` and `contentFolder` parameters in `utils/markdown.ts` allowed path traversal (e.g., using `../../README` as a slug), enabling unauthorized access to files outside the `content` directory.
**Learning:** Direct use of user-controlled strings in `path.join` without validation can lead to path traversal even if a base path is specified.
**Prevention:** Implement a strict validation helper to reject path components containing traversal sequences like `..` or directory separators.
