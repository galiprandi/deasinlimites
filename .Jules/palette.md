# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Social Navigation Landmark & Icon A11y]
**Learning:** Wrapping link groups in an unheaded `<section>` fails to create an accessible landmark for screen readers. Using `<nav aria-label="...">` establishes a clear landmark, and setting `alt=""` on nested icons within already-labeled `<a>` tags avoids stuttered/duplicated screen reader announcements.
**Action:** Use `<nav aria-label="...">` for link clusters without headings and pair with decorative `alt=""` on nested icons inside labeled anchors.
