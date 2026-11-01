# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-23 - [Accessible Live Region Feedback in Share Actions]
**Learning:** Transient copy feedback requires a persistent live region container (`role="status"`, `aria-live="polite"`) with conditionally rendered text and empty CSS hiding (`:empty { display: none; }`) to ensure screen readers announce status changes without introducing layout jitter. Furthermore, marking nested icons as decorative (`alt=""`) prevents redundant screen reader announcements when parent controls already declare descriptive `aria-label`s.
**Action:** Persistently mount live regions for transient notifications and keep nested icons decorative when parent controls supply explicit ARIA labels.
