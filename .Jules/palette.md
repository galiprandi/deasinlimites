# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-25 - [Focus Management on Search Clear]
**Learning:** When an interactive element (like a clear button) unmounts upon activation, browser focus reverts to `document.body`, causing keyboard and screen reader users to lose their position. Explicitly restoring focus to the search input via `inputRef.current?.focus()` ensures a seamless, uninterrupted workflow.
**Action:** Always restore focus to the input element when triggering clear buttons or state-dependent unmounting controls in forms and search bars.
