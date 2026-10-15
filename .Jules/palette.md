# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Social Links Navigation Landmark and Redundant Speech Prevention]
**Learning:** Containers grouping social media or external navigation links without headings should use `<nav aria-label="...">` instead of unheaded `<section>` elements to establish a proper navigation landmark for screen reader users. Additionally, when a link `<a>` already provides a descriptive `aria-label`, setting `alt=""` on nested icon images prevents screen readers from redundantly announcing link text twice.
**Action:** Wrap header and footer social link groups in `<nav aria-label="...">` and mark nested icon images as decorative (`alt=""`) when the enclosing `<a>` already has an `aria-label`.
