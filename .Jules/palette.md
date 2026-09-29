# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-21 - [Persistent Live Regions for Accessible Dynamic Feedback]
**Learning:** Screen readers often fail to announce dynamically inserted status elements if the container itself is mounted at the moment the message appears. Keeping the container element persistently in the DOM with `role="status"` and `aria-live="polite"`, while conditionally rendering its text content and using `:not(:empty)` for CSS animations, guarantees reliable audio feedback for assistive technologies.
**Action:** Persistently mount feedback live regions in the DOM and use CSS `:not(:empty)` pseudo-class to trigger visual animations when text content changes.
