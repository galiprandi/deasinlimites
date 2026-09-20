# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Keyboard Focus Affordance Parity for Card Components]
**Learning:** Interactive card components that hide secondary actions or direction cues (like "Leer más →") on `:hover` leave keyboard users without key visual affordances when tabbing through content. Pairing `:hover` selectors with `:focus-within` on card containers ensures keyboard users see the title highlight, card elevation, and revealed action indicators without modifying component state or JS.
**Action:** Always pair `:hover` CSS selectors with `:focus-within` or `:focus-visible` when animating sub-elements inside card components.
