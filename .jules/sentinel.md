## 2025-05-15 - [Path Traversal in Markdown Utils]
**Vulnerability:** Path traversal in `getPostBySlug` and `getPostMetadata` functions allowed reading arbitrary files on the server by manipulating the `slug` or `filename` parameters.
**Learning:** Functions that join user-provided input with base directories to access the filesystem are inherently vulnerable to path traversal if the input is not strictly validated.
**Prevention:** Always sanitize and validate file-related inputs. At a minimum, block characters like `..`, `/`, and `\` that allow directory traversal.
