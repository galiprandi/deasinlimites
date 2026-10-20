# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Social Navigation & Icon Accessibility]
**Learning:** Groups of social links without headings should be wrapped in `<nav aria-label="...">` to provide a clear navigation landmark for screen readers. Furthermore, when an `<a>` element already has a descriptive `aria-label`, inner icon images must use `alt=""` to avoid duplicate audio announcements (e.g. "LinkedIn LinkedIn link").
**Action:** Always wrap social link collections in `<nav aria-label="...">` and mark nested icon images with `alt=""` when the parent anchor tag provides the accessible label.
