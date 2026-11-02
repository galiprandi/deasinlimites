# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-23 - [Accessible Live Region for Transient Feedback]
**Learning:** Transient status feedback (like "¡Copiado!") is missed by screen reader users if dynamically mounted or lacking ARIA live attributes. Keeping the container element (`role="status"`, `aria-live="polite"`) persistently in the DOM and toggling its text, paired with `:not(:empty)` for animations and `:empty` with `display: none`, guarantees announcements across assistive tech without layout shifts.
**Action:** Always keep live region status containers persistently mounted and conditionally render only the inner text content.
