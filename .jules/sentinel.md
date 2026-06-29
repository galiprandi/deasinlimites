## 2025-06-29 - Path Traversal in Markdown Loader
**Vulnerability:** The `getPostBySlug` function in `utils/markdown.ts` was susceptible to path traversal attacks because it did not validate the `slug` parameter before using it in `path.join`. This allowed reading any file on the filesystem that the process had access to (e.g., `../../README`).
**Learning:** Even internal content-loading utilities must validate input if that input originates from URL parameters, as Next.js dynamic routes pass these directly to the server-side functions.
**Prevention:** Implement a strict `validatePath` helper that rejects any input containing navigation sequences like `..` or platform-specific separators like `\`.
