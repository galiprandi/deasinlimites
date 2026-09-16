# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2025-05-16 - [Decorative Metadata Icons Accessibility]
**Learning:** Decorative icons placed directly alongside text that conveys the same information (like calendar or clock icons next to dates and reading times) must use `alt=""` and `aria-hidden="true"`. Having non-empty `alt` attributes causes screen readers to redundantly repeat the text or announce unnecessary labels.
**Action:** Ensure all icons adjacent to descriptive text in cards and headers are marked as decorative with `alt=""` and `aria-hidden="true"`.
