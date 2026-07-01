## 2025-05-15 - Path Traversal in Markdown Utilities
**Vulnerability:** Path Traversal
**Learning:** The `getPostBySlug` function directly concatenated user-provided slugs into filesystem paths without validation, allowing access to files outside the intended `content/` directory using `..` segments.
**Prevention:** Always validate and sanitize all user-provided path segments, including slugs and category names. Implement a `validatePath` helper that rejects common traversal patterns like `..`, `/`, and `\` to ensure the final path remains within the intended local directory structure.
