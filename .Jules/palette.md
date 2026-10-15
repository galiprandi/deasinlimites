# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.

## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Social Links Landmark & Decorative Icons]
**Learning:** Groups of external social links without visible headings should be contained within `<nav aria-label="...">` rather than generic `<section>` tags to establish a proper screen reader navigation landmark. Additionally, decorative icons inside links that already have `aria-label` text must set `alt=""` and `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Use `<nav aria-label="Redes sociales">` for social link groupings and mark inner SVG/PNG images as decorative when explicit `aria-label`s are on the outer anchor tag.
