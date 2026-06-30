## 2025-05-14 - Path Traversal in Markdown Utilities
**Vulnerability:** Path traversal in `utils/markdown.ts` allowed reading files outside the `content/` directory by crafting malicious `slug` or `contentFolder` parameters (e.g., `../../README`).
**Learning:** Utilities that join path segments to read from the filesystem are vulnerable if they don't validate that the input stays within the intended directory. Next.js dynamic routes alone do not always prevent this if the utility is used with unsanitized parameters.
**Prevention:** Always validate path segments against directory traversal characters (`..`, `/`, `\`) or use `path.resolve` to ensure the final path is contained within the expected base directory.
