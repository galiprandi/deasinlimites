# Sentinel's Journal - DEA sin límites

## 2025-05-14 - Initial Security Audit
**Vulnerability:** Missing security headers (CSP, X-Frame-Options, etc.) and potential path traversal in markdown loading.
**Learning:** Next.js projects should explicitly define security headers in `next.config.ts` to provide defense-in-depth against XSS, clickjacking, and other common web vulnerabilities.
**Prevention:** Always implement a robust set of security headers and validate dynamic route parameters used in file system operations.
