# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Persistent Live Region for Transient Feedback]
**Learning:** Conditionally mounting/unmounting live regions when dynamic feedback appears (e.g. `{copied && <span>...</span>}`) can cause assistive technologies to miss status announcements if the DOM node isn't registered early enough. Persistently mounting the container element with `role="status"` and `aria-live="polite"` while toggling text content ensures screen readers reliably announce updates.
**Action:** Keep ARIA live regions persistently mounted and conditionally render their text content, using CSS `:not(:empty)` for keyframe animations if necessary.
