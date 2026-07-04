# Sentinel Security Journal

## 2025-05-15 - Path Traversal Protection in Markdown Utility
**Vulnerability:** A path traversal vulnerability was discovered in `utils/markdown.ts` where the `contentFolder` and `slug` parameters were used directly in `path.join` to access the filesystem without validation.
**Learning:** Even internal utilities that handle local filesystem access can be vulnerable if they accept parameters derived from URL segments or user input. In Next.js, dynamic route parameters (like `[blog]` and `[slug]`) are direct sources of untrusted input.
**Prevention:** Implement a strict `validatePath` helper for all filesystem-accessing utilities. Reject any input segments containing '..' to ensure access remains confined to the intended base directory, while allowing slashes to support legitimate nested content organization.
