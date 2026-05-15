## 2025-05-12 - [Navigation State Accessibility]
**Learning:** Using `aria-current="page"` in navigation links provides critical context for screen reader users, while visual highlighting (like background color and bold text) helps sighted users maintain orientation within the site's hierarchy. In Next.js, this can be efficiently implemented by converting the navigation component to a client component and using the `usePathname` hook.
**Action:** Always implement `aria-current="page"` on active navigation links to ensure accessibility and use clear visual indicators to match.

## 2025-05-13 - [Interactive Feedback for Clipboard Actions]
**Learning:** Providing immediate visual feedback (e.g., a "¡Copiado!" message) when a user interacts with a "Copy Link" button significantly reduces uncertainty and prevents multiple unnecessary clicks. This pattern, combined with descriptive ARIA labels for icon-only buttons, creates a much more accessible and delightful sharing experience.
**Action:** Include transient success feedback and explicit ARIA labels for all clipboard and social sharing interactions.

## 2025-05-14 - [Accessibility for Icon-Only Navigation Links]
**Learning:** While child `Image` components might have `alt` text, providing an explicit `aria-label` on the parent anchor (`<a>`) tag for icon-only links ensures that screen readers consistently announce the link's destination and purpose, especially when used in navigation or social link sections.
**Action:** Always include descriptive `aria-label` attributes on anchor tags that contain only icons or images to guarantee clear communication for assistive technologies.
