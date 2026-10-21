# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Accessible Social Links Navigation Landmark]
**Learning:** Containers grouping social media links without headings should use `<nav aria-label="...">` instead of unheaded `<section>` elements to establish a properly labeled navigation landmark for screen reader users. Furthermore, when parent `<a>` tags already carry a descriptive `aria-label`, setting `alt=""` on nested images prevents duplicate audio announcements.
**Action:** Use `<nav aria-label="...">` for social navigation groups and `alt=""` on nested images inside links with explicit `aria-label` attributes.
