# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Decorative Icons in Meta Content]
**Learning:** Decorative icons placed next to descriptive text (such as a calendar icon next to a formatted date string) should be hidden from assistive technologies using `alt=""` and `aria-hidden="true"`. Otherwise, screen readers announce the text content twice (e.g., date value twice), degrading screen reader UX.
**Action:** Always set `alt=""` and `aria-hidden="true"` on icons when adjacent text conveys the exact same information.
