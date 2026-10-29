# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-25 - [Distinct Navigation Landmarks and Icon Alt Text]
**Learning:** Having multiple `<nav>` landmark regions on a page without explicit `aria-label` attributes makes it difficult for screen reader users to distinguish between main navigation and social media links. Furthermore, nested icons inside `<a>` tags with `aria-label` should use `alt=""` and `aria-hidden="true"` to prevent redundant duplicate audio labels.
**Action:** Always provide descriptive `aria-label` attributes for `<nav>` elements and set `alt=""` with `aria-hidden="true"` on images contained within descriptive anchors.
