# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Accessible Live Region Feedback & Icon Alt Cleanup]
**Learning:** Transient status indicators (like "¡Copiado!") must be rendered inside a persistently mounted live region (`role="status"`, `aria-live="polite"`) rather than conditionally mounted DOM nodes, so screen readers reliably announce state updates. Additionally, nested icon images inside elements with descriptive `aria-label` attributes should specify `alt=""` and `aria-hidden="true"` to prevent redundant screen reader speech.
**Action:** Keep status feedback containers persistently mounted in the DOM, drive animations using `:not(:empty)`, and mark nested icons inside labeled triggers as decorative.
