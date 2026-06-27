# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-27 - [Social Sharing Accessibility & Tooltips]
**Learning:** Icon-only social links benefit from both `aria-label` (for screen readers) and `title` (for native desktop tooltips). To ensure a clean experience for screen readers, icons inside labeled links must be explicitly hidden using `aria-hidden="true"` and `alt=""` to avoid redundant or "empty" announcements.
**Action:** Always provide matching `aria-label` and `title` for icon-only interactive elements and silence their internal decorative icons.
