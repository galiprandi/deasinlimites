## 2025-05-12 - [Navigation State Accessibility]
**Learning:** Using `aria-current="page"` in navigation links provides critical context for screen reader users, while visual highlighting (like background color and bold text) helps sighted users maintain orientation within the site's hierarchy. In Next.js, this can be efficiently implemented by converting the navigation component to a client component and using the `usePathname` hook.
**Action:** Always implement `aria-current="page"` on active navigation links to ensure accessibility and use clear visual indicators to match.
