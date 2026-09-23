# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Decorative Icon Accessibility]
**Learning:** Decorative icons placed adjacent to descriptive text (such as a calendar icon next to a date string) cause screen readers to announce the information twice if given descriptive `alt` text. Setting `alt=""` and `aria-hidden="true"` on decorative icons ensures assistive technology reads the content cleanly without duplication.
**Action:** Always mark icons adjacent to self-explanatory text as decorative with `alt=""` and `aria-hidden="true"`.
