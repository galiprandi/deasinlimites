# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Persistent Live Region for Transient Feedback]
**Learning:** Transient status messages (e.g. "¡Copiado!") that dynamically mount/unmount are often missed by assistive technologies if announced too late or removed before screen reader engines register the DOM insertion. Persistently mounting the container with `role="status"` and `aria-live="polite"` while toggling text content ensures immediate announcement, and applying `:empty { display: none; }` prevents empty layout artifacts.
**Action:** Always keep status live regions persistently mounted in the DOM and use `:empty { display: none; }` with `:not(:empty)` animations.
