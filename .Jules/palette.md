# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Decorative Icon Accessibility]
**Learning:** Decorative icons adjacent to descriptive text (such as calendar or clock icons next to date and reading time) generate redundant audio announcements in screen readers if given non-empty `alt` text. Using `alt=""` and `aria-hidden="true"` silences the icon for screen readers while preserving the visual affordance.
**Action:** Always mark decorative icons next to readable text with `alt=""` and `aria-hidden="true"`.
