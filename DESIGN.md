[Previous content truncated for brevity...]

### Micro-UX Refinements
- **Pagination Depth**: Enhanced pagination hover states with deeper, theme-aware shadows (`rgba(var(--color-secondary-rgb), 0.2)`) and brand-aligned borders.
- **Empty State Professionalism**: Standardized all empty search and category states with `6rem` vertical padding and dashed borders for an intentional, polished look.

## 🎨 Palette: Micro-UX Excellence

### Reading Progress Indicator
- **Visual Feedback**: Implementation of a throttled `ReadingProgressBar` at the top of the viewport for article pages, providing subtle but clear feedback on content consumption progress.
- **Responsive & Performance-Minded**: Uses `requestAnimationFrame` for smooth 60fps updates and automatically initializes state on mount for reloads.
- **Accessibility**: Included `aria-label="Progreso de lectura"`, `role="progressbar"`, and dynamic `aria-valuenow` attributes to ensure compatibility with screen readers.
