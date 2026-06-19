# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2026-06-19 - [Reading Time Visualization]
**Learning:** Providing an estimated reading time helps users manage their expectations and decide when to engage with long-form content. Using inline SVGs for metadata icons (like a clock) ensures they scale correctly and reduces dependency on external assets.
**Action:** Standardized reading time format to 'X min' and integrated it across `PostCard` and post detail headers using inline SVGs for better scalability.
