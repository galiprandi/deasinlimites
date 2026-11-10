# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Nav Landmark and Non-Redundant Icon Accompanying Labels]
**Learning:** Groups of external navigation or social links lacking headings should be wrapped in `<nav aria-label="...">` rather than generic `<section>` tags to provide an accessible navigation landmark. Furthermore, when the containing `<a>` tag has an explicit, descriptive `aria-label`, nested icon images should use `alt=""` to avoid duplicate or verbose announcements by screen readers.
**Action:** Always wrap social link collections in labeled `<nav>` landmarks and silence nested icon `alt` attributes when the parent link provides full accessible descriptions.
