# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Live Region Persistence for Copy Feedback]
**Learning:** For transient feedback elements like "¡Copiado!", mounting/unmounting the element conditionally often causes assistive technologies to miss live region updates. Keeping the container persistently mounted with `role="status"` and `aria-live="polite"` while updating text content ensures screen readers consistently announce the status change. Using CSS `:not(:empty)` allows re-triggering entry animations cleanly when text appears.
**Action:** Always keep `role="status"` elements persistently in the DOM and toggle their text content rather than conditionally unmounting the element.
