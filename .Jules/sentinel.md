## 2025-06-29 - Path Traversal in Markdown Loader
**Vulnerability:** The `getPostBySlug` function in `utils/markdown.ts` was susceptible to path traversal attacks because it directly concatenated the user-provided `slug` parameter with the base content directory.
**Learning:** Even in static sites or simple content loaders, user input that interacts with the file system must be strictly validated. Relying on `path.join` is insufficient if the segments themselves contain `..`.
**Prevention:** Implement a strict `validatePath` helper that rejects any path segment containing `..` or backslashes before performing file system operations.
