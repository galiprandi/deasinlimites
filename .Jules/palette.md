# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2026-06-23 - [Accessible Live Region Feedback & Non-redundant Icons in SharePost]
**Learning:** Unmounting transient feedback elements (e.g., `{copied && <span>¡Copiado!</span>}`) can cause screen readers to miss announcements because assistive technologies need an already-mounted live region (`role="status"`, `aria-live="polite"`). Pairing persistent mounting with `.element:empty { display: none; }` prevents unwanted layout spacing. Additionally, nested icon images inside elements with descriptive `aria-label`s must use `alt=""` to prevent redundant vocalizations.
**Action:** Keep live regions permanently mounted while toggling text content, and mark nested icons as decorative when parent buttons/links define explicit labels.
