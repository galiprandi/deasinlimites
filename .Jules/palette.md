# 2025-05-15 - [Accessible Pagination]
**Learning:** Disabled interactive elements like pagination arrows should explicitly communicate their state to assistive technologies using `aria-disabled="true"`. This prevents confusion for screen reader users who might encounter the element but not understand why it's not actionable.
**Action:** Added `aria-disabled="true"` to disabled pagination spans in `components/Pagination.tsx`.
## 2025-05-15 - [Search Keyboard Shortcut Discoverability]
**Learning:** Adding a visual shortcut hint (like '/') that disappears on focus or when the input is not empty improves discoverability without cluttering the UI permanently. Using `:not(:placeholder-shown)` is a clean CSS-only way to handle the visibility state based on input content.
**Action:** Always pair global keyboard shortcuts with subtle visual hints to ensure they are discoverable by users who don't read documentation.
## 2025-05-16 - [Kinetic Social Feedback]
**Learning:** Standardizing micro-interactions (like a 5-degree rotation and themed box-shadow) across all social links creates a cohesive "premium" feel. Using `aria-keyshortcuts` on inputs is more accessible than solely relying on visual hints or documentation for keyboard power users.
**Action:** Implement `rotate(5deg)` and themed `box-shadow` on social links and `aria-keyshortcuts` on inputs with global shortcuts.
