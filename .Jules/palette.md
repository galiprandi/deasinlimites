# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2026-06-22 - [Search Input Dismissal]
**Learning:** Providing an 'Escape' key shortcut to clear or dismiss a search input is a standard accessibility expectation that reduces friction for power users. Pairing it with automatic focus restoration ensures the user can immediately refine their search.
**Action:** Implement 'Escape' key listeners in search inputs to clear state or blur the field, and ensure focus is maintained after programmatic clears.
