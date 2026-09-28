# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-09-28 - [Decorative Metadata Icons Accessibility]
**Learning:** In metadata sections (like post cards and article headers), icons positioned directly adjacent to visible text nodes (e.g. calendar icon next to `<time>`, clock icon next to reading time string) must use `alt=""` and `aria-hidden="true"`. Setting descriptive `alt` text on adjacent icons causes screen readers to read the same date or duration twice sequentially.
**Action:** Always mark adjacent decorative icons in metadata layouts with `alt=""` and `aria-hidden="true"`.
