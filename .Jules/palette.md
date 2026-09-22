# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Silencing Decorative Metadata Icons]
**Learning:** Decorative icons placed next to descriptive text (such as a calendar icon beside a formatted date or a clock icon beside reading time) cause screen readers to announce information twice when assigned descriptive `alt` text. Setting `alt=""` and `aria-hidden="true"` ensures a clean audio experience for screen reader users.
**Action:** Always mark decorative icons with `alt=""` and `aria-hidden="true"` when adjacent text already provides the complete context.
