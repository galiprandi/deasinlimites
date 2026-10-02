# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Persistent Live Regions for Transient Feedback]
**Learning:** Conditionally mounting live region elements (`{copied && <span role="status">...</span>}`) often fails to trigger announcements in screen readers because the live region was not present when the DOM observer attached. Keeping the live region persistently in the DOM and updating its text content ensures reliable announcements across screen readers, while CSS `:not(:empty)` can be used to cleanly trigger keyframe animations only when content is present.
**Action:** Always persistently mount live regions (`role="status"`, `aria-live="polite"`) and toggle text content, using CSS `:not(:empty)` for keyframe animations.
