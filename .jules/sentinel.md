## 2025-05-15 - Security Headers Implementation
**Vulnerability:** Lack of defense-in-depth security headers exposing the site to clickjacking and potential XSS.
**Learning:** Next.js `async headers()` in `next.config.ts` is the most efficient way to apply site-wide security policies.
**Prevention:** Always include CSP, X-Frame-Options, and X-Content-Type-Options in production-ready web applications.
