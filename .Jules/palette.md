# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-09-09 - [Persistent Live Regions for Dynamic Feedback]
**Learning:** Conditionally mounting live region elements (`{show && <span role="status">...</span>}`) often prevents screen reader engines from announcing dynamic updates, because the ARIA live region listener must be registered in the DOM prior to content insertion. Keeping the live region container persistently mounted with `role="status"` and `aria-live="polite"` and toggling its text content ensures reliable announcements across all assistive technologies.
**Action:** Always maintain persistent live region containers in the DOM for transient feedback like link copying, using CSS `:not(:empty)` for visual keyframe animations.
