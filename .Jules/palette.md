# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-16 - [Live Status Regions and Icon Deduplication]
**Learning:** Transient copy feedback requires a persistent `role="status"` and `aria-live="polite"` element paired with CSS `:empty` styling to ensure assistive technologies announce state transitions without adding layout gaps. Concurrently, nested icons within interactive elements with existing `aria-label`s must use empty `alt=""` to prevent redundant announcements.
**Action:** Always persistently mount live region containers with `:empty { display: none; }` and use decorative alt tags (`alt=""`) on nested icons in explicitly labeled controls.
