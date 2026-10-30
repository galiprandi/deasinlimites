# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-21 - [Keyboard Focus Parity for Interactive Cards]
**Learning:** Interactive card components that rely on `:hover` animations to reveal secondary actions or visual cues (e.g., 'Read more' link reveal, title color shift, card elevation) create an unequal experience for keyboard users if those animations don't trigger on focus. Using `:focus-within` on the card container ensures keyboard focus provides identical visual affordances as mouse hovering.
**Action:** Always pair `:hover` selectors with `:focus-within` when animating sub-elements inside interactive card components.
