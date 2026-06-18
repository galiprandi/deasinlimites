# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-18 - [Estimated Reading Time & Icon Accessibility]
**Learning:** Decorative icons (like calendar or clock icons) must use `alt=""` and `aria-hidden="true"` to prevent redundant announcements by screen readers when the associated data (date, reading time) is already present in text form. Standardizing the reading time format to "X min" provides quick, digestible context for the user.
**Action:** Integrated `readingTime` calculation in `utils/markdown.ts` and updated metadata display in `PostCard` and article pages.
