# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Accessible Navigation Landmarks & Icon Links]
**Learning:** Grouping icon links without a visible heading in an unheaded `<section>` tag triggers landmark navigation warnings in screen readers. Replacing it with `<nav aria-label="...">` creates an explicit navigation landmark. Additionally, when `<a>` tags have `aria-label`, setting `alt=""` and `aria-hidden="true"` on nested `<Image>` icons prevents redundant audio announcements.
**Action:** Wrap grouped link clusters in labeled `<nav>` elements and mark nested icon images as decorative when parent links already provide `aria-label`.
