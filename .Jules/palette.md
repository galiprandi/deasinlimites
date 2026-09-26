# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-09-26 - [Focus-Within Parity for Interactive Cards]
**Learning:** When interactive card containers wrap inner elements that animate or reveal on hover (like "read more" arrow translations), relying solely on `:hover` deprives keyboard users of visual feedback when tabbing into the card. Pairing `:focus-within` with `:hover` ensures visual and affordance parity for keyboard navigation.
**Action:** Always pair `:hover` with `:focus-within` on card containers containing interactive links to ensure hover micro-animations triggered on nested children execute for keyboard users as well.
