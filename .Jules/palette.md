# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Decorative Metadata Icons Accessibility]
**Learning:** Decorative icons placed adjacent to informative text (such as calendar or clock icons alongside dates or reading times) should be explicitly hidden from screen readers using `alt=""` and `aria-hidden="true"`. Otherwise, screen readers announce both the image alt description and the text, causing redundant audio output for users.
**Action:** Always mark decorative metadata icons as hidden with `alt=""` and `aria-hidden="true"` when accompanying explicit text labels.
