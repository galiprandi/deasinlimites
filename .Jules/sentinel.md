## 2025-05-14 - Path Traversal in Markdown Utilities
**Vulnerability:** A path traversal vulnerability was discovered in `utils/markdown.ts` where the `slug` parameter in `getPostBySlug` was used directly to construct a file path using `path.join`. This allowed reading any `.md` file on the filesystem outside the intended `content/` directory.
**Learning:** Even in static-site-like applications, user-controlled input used in filesystem operations must be strictly validated. Standard `path.join` does not prevent escaping the base directory if `..` segments are present in the input.
**Prevention:** Implement a strict validation helper that rejects any input containing directory traversal sequences (`..`) before using it in filesystem calls.
