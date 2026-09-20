# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Live Region Status for Transient Actions]
**Learning:** Dynamically mounting status elements on action (like copying link) without `role="status"` and `aria-live="polite"` leaves screen reader users with zero feedback. Keeping the status span persistently mounted in the DOM with live region semantics and targeting CSS keyframe animations with `:not(:empty)` ensures immediate vocal feedback across screen readers without visual regressions.
**Action:** Always persistently mount feedback elements with `role="status"` and `aria-live="polite"` and trigger CSS animations via `:not(:empty)` when updating transient action state.
