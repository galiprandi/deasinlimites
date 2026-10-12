# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Focus Management on Dynamic Element Unmounting]
**Learning:** When a user action unmounts the currently focused interactive element (e.g. clicking a conditionally rendered "Clear" button), focus is lost to `document.body`, disrupting keyboard/screen reader navigation flow. Restoring focus to the parent text input (`inputRef.current?.focus()`) maintains context and allows seamless re-entry.
**Action:** Always restore focus to the input or parent control when unmounting transient interactive controls like clear or close buttons.
