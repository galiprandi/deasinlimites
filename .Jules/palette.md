# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Keyboard Affordance Parity on Card Components]
**Learning:** Interactive cards with hover-revealed sub-elements (like "Read more" links or animated arrows) hide essential visual cues from keyboard-only users if driven solely by `:hover`. Pairing `:hover` with `:focus-within` on card containers ensures keyboard users receive identical visual affordances when tabbing through content.
**Action:** Always pair `:hover` with `:focus-within` on card containers whenever child affordance elements or hover states are defined.
