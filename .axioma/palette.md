## 2025-05-12 - [Navigation State Accessibility]
**Learning:** Using `aria-current="page"` in navigation links provides critical context for screen reader users, while visual highlighting (like background color and bold text) helps sighted users maintain orientation within the site's hierarchy. In Next.js, this can be efficiently implemented by converting the navigation component to a client component and using the `usePathname` hook.
**Action:** Always implement `aria-current="page"` on active navigation links to ensure accessibility and use clear visual indicators to match.

## 2025-05-13 - [Interactive Feedback for Clipboard Actions]
**Learning:** Providing immediate visual feedback (e.g., a "¡Copiado!" message) when a user interacts with a "Copy Link" button significantly reduces uncertainty and prevents multiple unnecessary clicks. This pattern, combined with descriptive ARIA labels for icon-only buttons, creates a much more accessible and delightful sharing experience.
**Action:** Include transient success feedback and explicit ARIA labels for all clipboard and social sharing interactions.

## 2025-05-14 - [Accessibility for Icon-Only Navigation Links]
**Learning:** While child `Image` components might have `alt` text, providing an explicit `aria-label` on the parent anchor (`<a>`) tag for icon-only links ensures that screen readers consistently announce the link's destination and purpose, especially when used in navigation or social link sections.
**Action:** Always include descriptive `aria-label` attributes on anchor tags that contain only icons or images to guarantee clear communication for assistive technologies.

## 2025-05-15 - [Skip to Content Link for Keyboard Accessibility]
**Learning:** For sites with persistent sidebar or top navigation, a "Skip to Content" link is essential for keyboard users to bypass repetitive navigation links. Implementing this requires a target anchor (e.g., `<main id="main-content">`) and CSS that hides the link visually while keeping it accessible on focus.
**Action:** Always include a "Skip to Content" link as the first element in the `<body>` for layouts with significant navigation blocks.

## 2025-05-16 - [Keyboard Focus Visibility for Pagination]
**Learning:** Pagination links are critical for navigation but often lack clear focus indicators. Using the `:focus-visible` pseudo-class with a high-contrast outline (`--color-accent`) and `outline-offset` ensures that keyboard users can easily track their position during navigation without affecting the experience for mouse users.
**Action:** Always provide explicit `:focus-visible` styles for interactive elements that facilitate site-wide navigation, especially when they use custom styling that might suppress default browser outlines.

## 2025-05-17 - Mejorando la Visibilidad del Enfoque del Teclado
**Learning:** El uso de `:focus-visible` permite proporcionar indicadores de enfoque claros para los usuarios de teclado sin afectar la estética para los usuarios de ratón. Es fundamental utilizar colores de alto contraste que respeten los tokens de diseño de la aplicación.
**Action:** Aplicar estilos de enfoque personalizados a todos los elementos interactivos que carezcan de indicadores nativos claros.

## 2025-05-17 - Autonomía en la Creación de PRs
**Learning:** En este flujo de trabajo, se prefiere la autonomía total. No es necesario esperar confirmación explícita para proceder con la creación del PR una vez completadas las verificaciones.
**Action:** Proceder directamente a la fase de entrega (submit) tras validar los cambios, documentando el proceso en español.

## 2025-05-18 - [Focus Visibility for Main Navigation and Content]
**Learning:** Main navigation elements like sidebar links and primary content links (e.g., blog post cards) are often overlooked during accessibility audits. Adding high-contrast `:focus-visible` styles using theme-consistent design tokens (`--color-accent`) significantly improves keyboard navigation clarity and follows the site's established design patterns.
**Action:** Ensure both navigation and content-heavy interactive components have explicit focus indicators that align with the site's accent colors and spacing tokens.

## 2025-05-19 - [Discoverability and Accessibility for Symbol Buttons]
**Learning:** Interactive elements that use abstract symbols (like a "×" for clearing input) benefit significantly from having a `title` attribute for native tooltips and a high-contrast `:focus-visible` outline. This combination ensures that the button's purpose is discoverable for mouse users through hover and remains accessible for keyboard users during navigation.
**Action:** Always include descriptive `title` attributes and explicit focus indicators for buttons using icons or symbols.

## 2025-05-20 - [Smooth Search-as-you-type and Live Updates]
**Learning:** For dynamic search filters, using `router.replace` with `scroll: false` prevents browser history pollution and page jumping, creating a much smoother interaction. Additionally, wrapping result summaries in `role="status"` and `aria-live="polite"` ensures these changes are perceptible to screen reader users as they type.
**Action:** Use `router.replace` with `scroll: false` for all live filtering components and always include ARIA live regions for the resulting status updates.

## 2026-05-21 - [Visual Feedback and Card Interactivity]
**Learning:** Adding subtle elevation (`translateY`) and shadow transitions to content cards provides immediate, tactile feedback that enhances the user's sense of control and discovery. Aligning hover states with brand colors (`--color-secondary`) reinforces site identity while maintaining a professional and polished feel.
**Action:** Always implement smooth transitions and elevation feedback for primary interactive containers like PostCards to improve the perceived quality of the UI.

## 2026-05-23 - [Pattern Reusability and Motion Consistency]
**Learning:** Establishing a shared vocabulary for micro-interactions (e.g., `0.3s cubic-bezier`, `scale(1.1)`) across different components like `SocialLinks` and `SharePost` creates a more cohesive and professional user experience. Furthermore, using semantic tokens like `var(--border-radius)` and `var(--bd-grey2)` across navigation elements like `Pagination` ensures visual harmony and eases future theme updates.
**Action:** Replicate proven interactive patterns across similar components and strictly adhere to design tokens for geometry and state backgrounds.

## 2026-05-24 - [Search UI Affordance and Focus Clarity]
**Learning:** Adding a search icon that changes color upon focus provides a dual benefit: it strengthens the visual identity of the search input and serves as an additional non-textual indicator of the active state. Combining this with a subtle `box-shadow` focus ring creates a high-visibility indicator that feels modern and accessible, moving beyond simple border changes.
**Action:** Enhance search inputs with reactive icons and shadow-based focus rings to improve both discoverability and accessibility.

## 2026-05-26 - [Semantic Layout and Card-based CV]
**Learning:** Re-structuring CV-like pages (e.g., "About Me") using semantic HTML sections and a grid of cards improves information density without sacrificing readability. Consistent hover effects (elevation and accent colors) across different page types reinforce the application's interactive vocabulary and perceived quality.
**Action:** Use CSS Grid and modular cards for structured information lists, ensuring they share the same interactive behavior as other site components for a cohesive UX.

## 2026-05-27 - [Typography for Long-form Content]
**Learning:** For articles and technical publications, a generous `line-height` (1.8) and clear hierarchy of headings significantly reduce cognitive load. Sophisticated treatments for `blockquote` elements (accents and subtle backgrounds) help highlight key information and provide visual rhythm to text-heavy pages.
**Action:** Standardize Markdown styling with optimized line heights and distinct blockquote patterns to ensure high readability across all articles and papers.

## 2026-05-28 - [Hero Unification and Token-based Opacity]
**Learning:** Unifying the Hero treatment across informational and content pages ensures a cohesive brand identity. Furthermore, replacing hardcoded hex values with design tokens and opacity (e.g., `var(--text-primary)` with 0.6 or 0.8) ensures text hierarchy remains consistent, accessible, and theme-aware across different background contexts.
**Action:** Standardize informational page headers (Acerca de, Papers) to match the landing page's Hero design and use design tokens for secondary text color consistency.

## 2026-05-31 - [Token-based Shadows and Opacity Hierarchy]
**Learning:** Hardcoded hex or RGB values in shadows and borders create maintenance debt and visual drift. By introducing RGB design tokens (e.g., `--color-secondary-rgb`), we can implement theme-aware shadows that maintain brand consistency. Furthermore, using opacity on a single primary text token (`var(--text-primary)`) for secondary elements, instead of multiple grey hex values, ensures a more robust and predictable visual hierarchy.
**Action:** Use RGB tokens for themed box-shadows and favor opacity-driven variants of primary tokens over hardcoded neutral colors to maintain design system integrity.

## 2026-06-05 - [Hydration Stability and Visual Consistency]
**Learning:** Components using `useSearchParams` in Next.js require an explicit `Suspense` boundary to prevent hydration mismatches during dynamic navigation. Additionally, synchronizing card interactivity (elevation and themed shadows) across informational pages like "About" and "Papers" using brand-aware RGB tokens ensures a "perfectly unified" feel throughout the application.
**Action:** Always wrap search-dependent client components in `Suspense` and maintain a shared vocabulary of hover effects across all card-based layouts.

## 2026-06-06 - [Global Consistency and Themed Interactivity]
**Learning:** Themed box-shadows using `rgba(var(--color-secondary-rgb), 0.15)` provide a more integrated depth effect than generic black shadows. Consistently applying the "Card as Link" pattern and "Read More" reveal animations across all galleries (including Papers) reinforces the site's interactive vocabulary and improves usability by maximizing the hit area.
**Action:** Replaced hardcoded shadows with themed tokens, unified Hero treatments with accent spans, and standardized card interactivity across informational pages.

## 2026-06-08 - [Landing Page Information Density and Hierarchy]
**Learning:** A landing page serves as a map for the entire ecosystem. Expanding it to show recent content from all primary categories (DEA, Familias, Docentes) improves discoverability and provides an immediate value proposition. Limiting each section to 3 items prevents "infinite scrolling" fatigue and maintains a clean, professional layout that directs users toward specific section archives.
**Action:** Expand homepages to represent all content pillars using standardized section headers and limited, high-impact previews.

## 2026-06-10 - [Article Hero Unification and Readability]
**Learning:** Centering the primary information of an article (Title, Summary, Meta) within a themed Hero container (`var(--bd-grey)`) drastically improves the focus and perceived importance of the content. Furthermore, capping the body text width at `850px` ensures an optimal line length (70-80 characters), which is the gold standard for reading comprehension and visual comfort in long-form content.
**Action:** Unify article headers with the site-wide Hero pattern and implement a specific `bodyContent` width constraint to elevate the reading experience.

## 2026-06-12 - [Global UI Unification and Mobile Navigation Refinement]
**Learning:** Centralizing UI patterns like Hero sections and Action buttons into shared CSS modules or global classes reduces technical debt and ensures visual parity across the application. Encapsulating mobile-specific navigation logic within its relevant component (e.g., AsideBar) rather than the global layout improves maintainability and prevents CSS leakages or side effects.
**Action:** Standardized all page headers using `sharedStyles.hero`, implemented global `.pill-link` styles for contextual actions, and refactored mobile navigation to be self-contained in `AsideBar.module.css`, optimizing the active state for small screens.

## 2026-06-15 - [Search Usability and Loading Feedback]
**Learning:** Implementing keyboard shortcuts like '/' for focusing search bars enhances discoverability and speed for power users, but requires careful event handling to avoid conflicts with other text inputs. Additionally, using `useTransition` to track navigation-heavy state updates allows for immediate UI responsiveness and provides a hook for meaningful visual feedback (like a pulsing icon) during data fetching.
**Action:** Always wrap debounced navigation updates in `startTransition` and provide explicit focus shortcuts for primary search interfaces, ensuring they are gated by active element checks.
## 2026-06-15 - [Refined Navigation Depth and Unified Info Language]
**Learning:** Increasing the active state shadow depth in sidebars (using `0.4` opacity for brand-themed RGB tokens) creates a much stronger sense of location and depth. Furthermore, unifiying section headers and search status boxes into a single visual language (`.infoBox`)—characterized by a 4px accent border and neutral backgrounds—standardizes how the user interprets "contextual information" across the site.
**Action:** Elevated navigation active states with deeper shadows and created a unified `.infoBox` standard in `sharedStyles` for all informational headers and search feedback.

## 2026-06-16 - [Kinetic Micro-UX for Social Interactions]
**Learning:** Adding a subtle rotation (`5deg`) in combination with scaling and themed shadows on social icons transforms a static link into a "live" interactive element. This level of micro-UX detail signals a high quality of polish and makes the interface feel more responsive and high-end.
**Action:** Enhanced `SocialLinks` with rotation and deeper themed shadows on hover to elevate the site's kinetic feedback.

## 2026-06-18 - [Action Affordance and Vertical Rhythm]
**Learning:** Standardizing micro-interactions (like the `translateX` animation on arrows) via a shared global class (`.arrowIcon`) creates a cohesive "action language" that users learn once and apply everywhere. Additionally, increasing primary section spacing to `5rem` provides the necessary breathing room for high-density homepages, improving content scannability and professional feel.
**Action:** Implemented shared `.arrowIcon` kinetics and standardized global section vertical rhythm to `5rem`.

## 2026-06-20 - [Semantic Empty States]
**Learning:** Empty search or category states are often neglected UI moments. Using a `dashed` border and increased vertical padding (`6rem`) transforms these from "broken" states into intentional, clean placeholders that maintain the site's structural integrity while waiting for content.
**Action:** Refined blog and archive empty states with themed dashed borders and generous padding.
