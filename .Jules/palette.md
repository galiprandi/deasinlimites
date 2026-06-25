# Palette's Journal - DEA sin límites

## 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.

## 2025-05-15 - [Intuitive Search Dismissal]
**Learning:** Providing an 'Escape' key shortcut to clear and blur search inputs offers a fast "exit" path for keyboard users. Differentiating between manual clear (requires focus return for re-entry) and keyboard dismissal (implies intent to leave the interaction) optimizes the workflow for different intent states.
**Action:** Implement 'Escape' key handling in search inputs to clear query and blur focus, while ensuring manual clear buttons return focus to the input.
