# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Decorative Icons in Metadata]
**Learning:** Icons placed directly alongside descriptive text (such as a calendar icon next to a `<time>` tag or a clock icon next to a reading duration string) should always be marked as decorative using `alt=""` and `aria-hidden="true"`. Setting meaningful `alt` text on adjacent decorative icons causes screen readers to redundantly announce the same information twice.
**Action:** Always mark icons adjacent to self-describing text as decorative with `alt=""` and `aria-hidden="true"`.
