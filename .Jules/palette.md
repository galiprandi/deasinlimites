# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-21 - [Reading Time Integration]
**Learning:** Estimated reading time provides immediate value to readers by setting expectations for content length. Standardizing on 'X min' across all components (cards and headers) ensures UI consistency. Using inline SVGs for these metadata icons avoids adding new asset files and keeps the layout lightweight.
**Action:** Integrate reading time as a standard metadata field for content-heavy sites to improve the micro-UX of article discovery.
