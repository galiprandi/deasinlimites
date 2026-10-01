# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Keyboard Focus Affordance Parity & Decorative Image Cleanup]
**Learning:** Pairing `:hover` pseudo-classes with `:focus-within` on card containers ensures keyboard users receive the same micro-interaction affordances (elevation, text color transition, and reveal animations) as pointer users. Additionally, decorative icons placed next to descriptive text should use `alt=""` and `aria-hidden="true"` to avoid redundant screen reader announcements.
**Action:** Always pair `:hover` sub-element triggers with `:focus-within` on card components, and mark decorative metadata icons as hidden from assistive technology.
