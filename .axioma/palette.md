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
