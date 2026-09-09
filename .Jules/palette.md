# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-09-09 - [Accessible Dynamic Status Feedback]
**Learning:** Dynamic status feedback elements (like "¡Copiado!") must be rendered inside a persistently mounted `role="status"` with `aria-live="polite"` container so screen reader engines reliably detect and announce transient state changes without speech interruption.
**Action:** Wrap transient feedback text in persistent live regions and hide nested decorative images with `aria-hidden="true"` when parent elements have explicit `aria-label`s.
