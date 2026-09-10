# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-09-10 - [Accessible Live Regions for Transient Feedback]
**Learning:** Conditionally unmounting live regions (`{copied && <span />}`) prevents screen readers from detecting DOM updates. Keeping the container persistently mounted with `role="status"` and `aria-live="polite"` while toggling text content ensures reliable announcements. Pairing this with the `:not(:empty)` CSS selector allows keyframe animations to re-trigger cleanly whenever text is rendered.
**Action:** Persistently mount `role="status"` containers for transient feedback and control animations via `:not(:empty)`.
