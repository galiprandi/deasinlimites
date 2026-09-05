# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Decorative Icon Silence for Screen Readers]
**Learning:** Icons placed adjacent to descriptive text (such as calendar icons next to dates or clock icons next to reading times) duplicate announcements in screen readers if given non-empty `alt` text. Setting `alt=""` and `aria-hidden="true"` removes redundant auditory noise while preserving visual layout.
**Action:** Always mark inline metadata icons as decorative (`alt=""`, `aria-hidden="true"`) when accompanied by visible descriptive text.
