# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-21 - [Persistent Live Regions for Status Feedback]
**Learning:** Transient status elements rendered conditionally (e.g., `{copied && <span>}`) often fail to be announced by screen readers because the live region was not present in the DOM when activated. Persistently mounting the element with `role="status"` and `aria-live="polite"` and updating its text content ensures reliable audio feedback across screen readers.
**Action:** Keep live region containers persistently mounted in the DOM, update text content conditionally, and use `:not(:empty)` in CSS to trigger keyframe animations when content is present.
