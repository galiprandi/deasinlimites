# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2026-07-05 - [Visual Reading Feedback]
**Learning:** For long-form content, providing immediate visual feedback of scroll progress reduces the perceived complexity of the article and helps users manage their time. Using `requestAnimationFrame` ensures this UI update doesn't interfere with scroll performance.
**Action:** Implement scroll-depth indicators (like the `ReadingProgressBar`) on detailed article pages to enhance the reading experience.
