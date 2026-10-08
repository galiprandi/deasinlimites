# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Social Links Navigation Landmark & Icon Accessibility]
**Learning:** Using an unheaded `<section>` tag creates an unlabeled landmark for screen reader users, while child `<img>` tags inside links that already have `aria-label` attributes cause double audio announcements. Converting to `<nav aria-label="...">` and setting `alt=""` and `aria-hidden="true"` on inner decorative icons provides a clean, single-announcement navigation landmark.
**Action:** Always wrap social link lists in a labeled `<nav>` element and mark child icons as decorative when parent links have explicit `aria-label`s.
