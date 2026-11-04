# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2026-06-21 - [Navigation Landmark and Icon Redundancy]
**Learning:** Groups of external navigation links (like social links) without headings should be wrapped in `<nav aria-label="...">` rather than generic `<section>` tags. When parent links have descriptive `aria-label` attributes, nested icons must be silenced (`alt="" aria-hidden="true"`) to avoid repetitive announcements on screen readers.
**Action:** Always wrap navigation clusters in labeled `<nav>` landmarks and silence decorative child icons when the link tag already provides an accessible name.
