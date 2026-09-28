# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-25 - [Persistent Live Regions for Clipboard Feedback]
**Learning:** Screen readers often miss dynamic DOM updates if the live region container (`role="status"`, `aria-live="polite"`) is dynamically mounted alongside the text content. Keeping the container persistently mounted and conditionally rendering its text ensures reliable speech synthesis across screen readers. In CSS, using `:not(:empty)` allows re-triggering entrance animations cleanly when text appears.
**Action:** Keep live region containers persistently in the DOM and target `:not(:empty)` for CSS animations.
