# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2025-05-20 - [Logo Navigation Affordance]
**Learning:** Users instinctively expect the site logo to lead back to the homepage. Even if there is an "Inicio" link in the navigation, making the logo a link provides an additional, intuitive navigation path that is considered a web standard.
**Action:** Always wrap branding logos in a homepage link and provide a descriptive `aria-label` (e.g., "Ir al inicio") to ensure accessibility for screen reader users.
