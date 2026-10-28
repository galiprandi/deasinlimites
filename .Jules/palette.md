# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]

**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.

## 2025-05-15 - [Search Keyboard Shortcut Discoverability]

**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Persistent Live Regions for Action Feedback]

**Learning:** Dynamic action feedback (like '¡Copiado!') needs a persistently mounted live region (`role="status"`, `aria-live="polite"`) whose text content updates rather than conditionally mounting/unmounting the element. Combining this with CSS `:not(:empty)` for animations and `:empty { display: none; }` provides screen reader accessibility while maintaining clean flexbox layout spacing.
**Action:** Use persistent live regions with `:not(:empty)` keyframe animations for transient UI feedback across interactive components.
