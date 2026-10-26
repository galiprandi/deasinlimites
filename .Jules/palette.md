# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]

**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.

## 2025-05-15 - [Search Keyboard Shortcut Discoverability]

**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Persistent Live Region for Action Feedback]

**Learning:** Conditionally mounting live region elements (`{copied && <span>...</span>}`) causes some screen reader engines to miss text updates because the live region isn't present in the accessibility tree prior to the state change.
**Action:** Always persistently mount `role="status"` containers with `aria-live="polite"` and toggle text content inside, using `:not(:empty)` for CSS animations.
