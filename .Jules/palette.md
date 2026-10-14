# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Landmark Navigation and Link Icon Alt Text]
**Learning:** Grouping icon links in unheaded `<section>` tags creates non-landmark wrappers that screen readers cannot identify as navigation areas. Converting them to `<nav aria-label="...">` establishes a clear landmark, and marking nested icons with `alt=""` / `aria-hidden="true"` prevents screen readers from making redundant audio announcements when the parent link already has an `aria-label`.
**Action:** Use `<nav aria-label="...">` for unheaded link containers and mark nested icon images with `alt=""` and `aria-hidden="true"` when parent `<a>` tags specify `aria-label`.
