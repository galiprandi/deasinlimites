# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-25 - [Accessible Transient Status Feedback]
**Learning:** Dynamically mounting/unmounting transient status feedback elements (like "¡Copiado!") prevents screen readers from announcing state changes. Keeping the status element persistently mounted with `role="status"` and `aria-live="polite"` while conditionally rendering its text content guarantees that assistive technologies announce the state change immediately without interrupting speech. Using CSS `:not(:empty)` allows re-triggering keyframe animations cleanly whenever text is rendered.
**Action:** Always persistently mount `role="status"` live region containers and toggle text content, using CSS `:not(:empty)` for transient entrance animations.
