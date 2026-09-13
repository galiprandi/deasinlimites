# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Persistent ARIA Live Region for Transient Feedback]
**Learning:** Conditionally mounting transient feedback elements (like copy status text) prevents screen readers from announcing state updates. Keeping the live region element (`role="status"`, `aria-live="polite"`) persistently mounted in the DOM and using CSS `:not(:empty)` for keyframe animations ensures screen reader compatibility across all engines without broken visuals.
**Action:** Always persistently mount live regions for status feedback and use `:not(:empty)` in CSS to control visual keyframe animations when content changes.
