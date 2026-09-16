# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-21 - [Accessible Copy Feedback Live Region]
**Learning:** Transient status elements (like "¡Copiado!") conditionally unmounted from the DOM are often missed by screen readers because the live region isn't present long enough to register. Persistently mounting the container element with `role="status"` and `aria-live="polite"`, while conditionally populating text content and targeting CSS animation with `:not(:empty)`, guarantees screen reader announcement while maintaining smooth visual keyframe re-triggering.
**Action:** Always keep status feedback containers persistently mounted with standard ARIA live attributes, using `:not(:empty)` to trigger visual entrance animations on content changes.
