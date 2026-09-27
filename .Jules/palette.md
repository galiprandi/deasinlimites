# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Persistent Live Regions for Status Feedback]
**Learning:** In React applications, conditionally mounting elements containing `aria-live="polite"` can cause screen readers to miss state announcements because the live region element is inserted simultaneously with its text content. Keeping the live region element persistently mounted in the DOM (`role="status"`, `aria-live="polite"`) and conditionally toggling text content ensures assistive technologies reliably announce feedback. Using `:not(:empty)` pseudo-class in CSS allows keyframe animations to re-trigger seamlessly on text update without unmounting.
**Action:** Persistently mount `aria-live` containers and use CSS `:not(:empty)` for status popups and toast notifications.
