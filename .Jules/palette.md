# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Live Region Persistence for Transient Feedback]
**Learning:** For screen reader engines to reliably announce state changes in transient feedback elements (like "¡Copiado!"), the container element (`role="status"`, `aria-live="polite"`) must remain persistently mounted in the DOM, conditionally rendering only its text content. Unmounting the live region container entirely often causes assistive tech to miss the dynamic text update.
**Action:** Always keep status containers persistently in the DOM and conditionally render text inside them, pairing with CSS `:not(:empty)` for keyframe animation triggers.
