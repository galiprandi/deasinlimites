# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Decorative Metadata Icons Accessibility]
**Learning:** Icons paired directly with textual metadata labels (e.g. calendar icon next to date text, clock icon next to reading time) are purely decorative. Leaving non-empty `alt` text on them causes screen readers to read redundant announcements (e.g., "15 de mayo 15 de mayo" or "Tiempo de lectura 3 min de lectura").
**Action:** Always set `alt=""` and `aria-hidden="true"` on decorative icons adjacent to visible descriptive text.
