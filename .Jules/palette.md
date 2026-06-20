# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2025-05-16 - [Estimated Reading Time]
**Learning:** Providing an estimated reading time helps users manage their expectations and reduces the cognitive load when deciding whether to engage with a piece of content. Using a standard baseline (e.g., 200 wpm) and a clear visual icon (clock) makes this metadata easily scannable and intuitive.
**Action:** Include estimated reading time in metadata for long-form content to improve user engagement and transparency.
