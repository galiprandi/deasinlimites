# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Decorative Metadata Icons Accessibility]
**Learning:** Icons placed adjacent to visible text (such as calendar or clock icons next to dates or reading times) are purely decorative. Leaving informative alt text on them causes screen readers to read the same information twice in sequence. Marking decorative adjacent icons with `alt=""` and `aria-hidden="true"` removes audio clutter for screen reader users.
**Action:** Always ensure decorative icons placed next to descriptive text carry `alt=""` and `aria-hidden="true"`.
