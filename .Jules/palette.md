# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Accessible Live Regions for Transient Feedback]
**Learning:** Transient feedback elements (like copy-to-clipboard status) must remain persistently mounted in the DOM with `role="status"` and `aria-live="polite"` so screen readers reliably announce text changes when content appears. CSS keyframe animations can be re-triggered cleanly by targetting the `:not(:empty)` pseudo-class selector.
**Action:** Always keep live region container elements mounted in DOM and use `:not(:empty)` styling for triggering transient visual feedback animations.
