# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Persistent Live Regions for Status Feedback]
**Learning:** Conditionally mounting live region elements (`role="status"`, `aria-live="polite"`) when state changes can cause assistive technologies to miss status updates. Persistently mounting the live region container and using CSS `:not(:empty)` to control animations ensures screen readers reliably announce status feedback (like "¡Copiado!") while preserving keyframe entry effects.
**Action:** Always persistently mount live regions in the DOM and use `:not(:empty)` selectors to trigger keyframe animations when text content appears.
