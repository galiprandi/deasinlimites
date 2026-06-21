# Diseño UI/UX - DEA sin límites

## Componentes Refinados

### PostCard
- **Elevación y Profundidad**: Implementación de `transform: translateY(-5px)` y `box-shadow` en estado `:hover` para proporcionar feedback visual claro de interactividad.
- **Transiciones**: Uso de `cubic-bezier(0.4, 0, 0.2, 1)` para animaciones fluidas y naturales.
- **Color Predictivo**: El título cambia a `var(--color-secondary)` en hover, alineando el componente con la identidad visual de la sección.
- **Layout**: Ajuste de padding y espaciado interno para mejorar la legibilidad del resumen y los metadatos.

### AsideBar
- **Interactividad Elevada**: Los enlaces de navegación ahora utilizan `padding` interno para maximizar el área de clic, mejorando la usabilidad.
- **Feedback Visual**: Implementación de un estado `:hover` con desplazamiento sutil (`padding-left`) para guiar el ojo del usuario.
- **Estado Activo**: Uso de `var(--color-secondary)` con una sombra suave para destacar la sección actual con elegancia y consistencia.
- **Micro-interacciones en SocialLinks**: Los iconos sociales ahora incluyen un fondo circular reactivo y un efecto de escala al pasar el cursor, alineándose con las tendencias modernas de micro-UX.

### SharePost
- **Consistencia de Micro-interacciones**: Los botones de compartir ahora comparten el mismo lenguaje visual que `SocialLinks`, con escalado suave (`scale(1.1)`) y fondos reactivos.
- **Feedback Dinámico**: El mensaje "¡Copiado!" ahora presenta una animación de entrada (`fadeIn`) para reducir la carga cognitiva y mejorar la percepción de respuesta del sistema.

### Pagination
- **Unificación de Tokens**: Uso de `var(--border-radius)` y eliminación de colores hexadecimales en favor de tokens de diseño y opacidad sobre `var(--text-primary)`.
- **Feedback de Navegación**: Los enlaces de paginación ahora reaccionan con elevación dinámica (`translateY(-2px)`) y sombras temáticas basadas en `var(--color-secondary-rgb)`, alineándose con el lenguaje de las `PostCard`.

### Search UI
- **Contexto Visual**: El icono de búsqueda ahora utiliza una opacidad adaptativa y transiciones fluidas para reaccionar al enfoque del campo de entrada.
- **Feedback de Resultados**: Refinamiento de la caja de información de búsqueda con sombras temáticas (`var(--color-secondary-rgb)`) para una profundidad visual consistente.
- **Micro-interacciones**: El botón de limpieza y el borde del input han sido migrados a `var(--bd-grey2)`, eliminando dependencias de colores estáticos y mejorando la integración con el fondo.
- **Enfoque de Alta Visibilidad**: El anillo de enfoque utiliza ahora `var(--color-accent-rgb)` para una definición superior y consistencia cromática total.

## Estabilidad Técnica
- **Arquitectura de Búsqueda**: Implementación de límites de `<Suspense>` en `app/[blog]/page.tsx` para el componente `SearchPosts`. Esta medida previene errores de hidratación vinculados a `useSearchParams` y permite una carga progresiva del cliente sin bloquear el renderizado estático del servidor.

## Tokens de Diseño Utilizados
- `--color-accent`: `#fdb344` (Enfoque y acentos)
- `--color-secondary`: `#62a964` (Estados activos y hover)
- `--bd-grey2`: `#1f29371a` (Fondos de tarjetas)
- `--border-radius`: `0.6em`

### Acerca de
- **Estructura Semántica**: Transición a un layout basado en `header`, `section` y `article` para mejorar el SEO y la accesibilidad.
- **Visualización de Trayectoria**: Implementación de una rejilla de tarjetas (`grid`) para Educación, Experiencia y Capacitaciones, optimizando el uso del espacio.
- **Micro-interacciones**: Las tarjetas presentan una elevación sutil y un cambio de color de acento (`var(--color-secondary)`) en hover, manteniendo la coherencia con las `PostCard`.
- **Diseño de Etiquetas**: Uso de `dateTag` para resaltar periodos temporales de forma visualmente limpia y distinguible.
- **Consistencia de Marca**: Sincronización de metadatos y títulos con `siteConfig` para garantizar una identidad uniforme.

### Publicaciones (Papers)
- **Galería de Recursos**: Implementación de una rejilla de tarjetas basada en `var(--bd-grey2)` y `var(--border-radius)` para una integración total con el sistema.
- **Jerarquía Semántica**: Estructura mejorada con `header` y `footer` internos para separar categorías, títulos y metadatos de forma clara.
- **Interactividad Evolutiva**: Las tarjetas reaccionan con elevación y cambio de color de borde a `var(--color-secondary)`, mientras que los botones de acción incluyen una micro-animación de desplazamiento lateral.
- **Accesibilidad**: Inclusión de `aria-label` descriptivos y estados `:focus-visible` de alta visibilidad para garantizar una navegación inclusiva.

### Markdown & Artículos
- **Optimización de Lectura**: Ajuste del `line-height` a 1.8 y aumento del tamaño de fuente base para reducir la fatiga visual en artículos largos.
- **Citas Sofisticadas**: Refinamiento de `blockquote` con bordes de acento (`var(--color-secondary)`) y fondos neutros, elevando el valor de las menciones y extractos.
- **Interactividad de Enlaces**: Implementación de `text-underline-offset` y transiciones de color de acento para una experiencia de navegación interna más fluida y estéticamente agradable.

### Blog Home & Consistencia
- **Feedback de Continuidad**: Inclusión de indicadores dinámicos "Leer más" en `PostCard` que se revelan con animaciones de opacidad y desplazamiento al interactuar, mejorando la affordance de lectura.
- **Navegación Contextual**: Implementación de enlaces de retorno en artículos individuales que facilitan la exploración por categorías, manteniendo al usuario dentro del flujo de contenido.
- **Modernización de Elementos Globales**: Refinamiento de la regla horizontal (`hr`) alineada con los tokens de diseño neutros (`var(--bd-grey2)`), eliminando gradientes innecesarios para un look más contemporáneo y limpio.
- **Estandarización de Layout Global**: Unificación del ancho máximo del contenido a `1000px` en `layout.module.css`, eliminando discrepancias entre páginas y asegurando una alineación vertical perfecta en todo el sitio.
- **Cinética de Entrada**: Implementación de animaciones `fadeInUp` en todas las secciones Hero y cabeceras de página, proporcionando una transición de carga fluida y profesional.
- **Evolución de Títulos de Sección**: Los títulos de sección en la Home ahora utilizan el lenguaje visual de `searchInfo`, con bordes de acento izquierdo y fondos neutros para una jerarquía clara.
- **Refinamiento de Lectura**: Estandarización de `line-height: 1.8` y `opacity: 0.8` para todas las descripciones de cabecera, optimizando la legibilidad y el confort visual.
- **Micro-UX de Búsqueda**: Mejora del feedback visual en el campo de búsqueda con sombras multi-capa y un diseño de estado vacío ("No results") más estructurado y elegante.
- **Estandarización de Tokens**: Eliminación de colores hex hardcodeados en favor de variantes basadas en opacidad de `var(--text-primary)`, asegurando que metadatos (0.6), resúmenes (0.8) y descripciones secundarias mantengan un contraste jerárquico consistente y adaptativo.
- **Unificación de Identidad Visual**: Las páginas de Publicaciones (Papers) y Acerca de ahora comparten el sistema de acentos en títulos (`h1 span`) y la jerarquía tipográfica de la Home, consolidando una marca cohesiva.
- **Refinamiento de Interactividad en Galerías**: Implementación del patrón de "Tarjeta como Enlace" en Publicaciones para optimizar el área de interacción y sincronización de micro-interacciones de revelado dinámico ("Leer más") con el resto del sitio.
- **Sombras Tematizadas**: Migración de sombras hardcodeadas en `PostCard` y `Pagination` hacia el token RGBA dinámico `var(--color-secondary-rgb)`, permitiendo una profundidad visual que respeta el esquema de color de la aplicación.
- **Unificación de Cajas de Información**: Creación del componente `infoBox` en `styles/shared.module.css` para estandarizar los encabezados de sección y estados de búsqueda, utilizando bordes de acento (`var(--color-secondary)`), fondos neutros y sombras suaves.

### Blog Home & Archivos
- **Estados Vacíos Elevados**: Refinamiento de los contenedores `.empty` con mayor padding vertical (`6rem`) y bordes punteados (`dashed var(--bd-grey2)`), transformando la ausencia de contenido en un estado visual intencional y elegante.
- **Sincronización de Búsqueda**: Aplicación de la clase `.infoBox` estandarizada para los resultados de búsqueda en todas las categorías, garantizando una respuesta visual coherente independientemente de la sección.

### Home (Inicio)
- **Expansión de Secciones**: La página de inicio ahora ofrece una visión integral del blog, incluyendo secciones dedicadas a DEA, Familias y Docentes.
- **Jerarquía de Contenido**: Se limita la visualización a las 3 publicaciones más recientes por categoría para mantener un layout limpio y fomentar la exploración de las secciones específicas.
- **Unificación de Títulos**: Todas las secciones de la Home ahora emplean el estilo `sectionTitle` estandarizado, garantizando una jerarquía visual coherente.

### Blog Category & Headers
- **Unificación de Héroe**: Aplicación del patrón de acento cromático (`h1 span`) en los encabezados de las categorías del blog, alineando estas páginas con la Home y "Acerca de".

### Detalle de Artículo (Post Detail)
- **Héroe Inmersivo**: Los artículos ahora cuentan con una sección de cabecera (Hero) centrada, con fondo `var(--bd-grey)` y bordes sutiles, unificando la experiencia visual con el resto del sitio.
- **Métricas de Lectura**: Integración del tiempo estimado de lectura en la cabecera del artículo para una mejor expectativa de consumo de contenido.
- **Jerarquía Tipográfica**: Implementación del acento cromático unificado en el título (`TitleAccent`) y optimización del espaciado para el resumen y metadatos.
- **Legibilidad Avanzada**: El contenido del artículo se envuelve en un contenedor `bodyContent` con un ancho máximo optimizado (`850px`), evitando líneas de texto excesivamente largas y mejorando el confort visual.
- **Navegación Contextual**: El enlace "Volver" se integra de forma limpia en el Hero, facilitando el retorno a la categoría principal con una affordance mejorada.

## Refactor UI Polish Micro-UX

### Micro-interacciones & Feedback
- **Sincronización de Flechas de Acción**: Introducción de la clase global `.arrowIcon` con una animación de entrada `translateX(4px)` coordinada para todos los enlaces de "Leer más". Esto crea un lenguaje de dirección de lectura consistente en `PostCard` y `Papers`.
- **SharePost Refined**: Evolución de la animación `fadeInPop` usando `cubic-bezier(0.4, 0, 0.2, 1)` y una micro-escala inicial (`0.95`), logrando un feedback de copiado mucho más elástico y profesional.
- **SocialLinks Kinetics**: Inclusión de una rotación sutil (`5deg`) combinada con escalado y una sombra temática profunda en el estado `:hover`, aportando una capa de "juego" y reactividad a los accesos sociales.

### Tipografía & Lectura (Markdown)
- **Vertical Rhythm Excellence**: Ajuste milimétrico de márgenes en `h2` (3rem/1.5rem) y `h3` (2.5rem/1.2rem) para optimizar la jerarquía y el descanso visual en artículos de largo formato.
- **Image Presentation**: Las imágenes ahora cuentan con sombras de mayor profundidad (`0 8px 24px`) y una transición suave de escala en hover, elevando el contenido visual al estándar de publicación premium.

### Navegación & Estructura
- **Sidebar High-Visibility**: El estado activo de `AsideBar` ahora incorpora un borde izquierdo de 3px con `var(--color-accent)` y una sombra de profundidad mejorada (`0 8px 16px -6px rgba(var(--color-secondary-rgb), 0.4)`), reforzando la indicación visual de ubicación sin comprometer la elegancia del componente.
- **Ritmo Vertical Global**: Estandarización de la separación entre secciones principales a `5rem` y refinamiento del footer con cursivas y opacidad reducida (`0.6`) para una jerarquía de cierre más ligera y profesional.
- **Unified Shadows**: Auditoría y confirmación de que todas las tarjetas en 'Acerca de' y 'Papers' operan bajo el sistema de sombras tematizadas `rgba(var(--color-secondary-rgb), 0.15)`, garantizando una homogeneidad total en la profundidad del sitio.

## 🐜 [CAROL]: Refactorización y Refinamiento Estético
- [x] Estandarización de footer global en `app/layout.tsx` (Año dinámico, bordes temáticos, tipografía refinada).
- [x] Implementación de acentos cromáticos en títulos de secciones del Home (`app/page.tsx`).
- [x] Creación de página 404 personalizada (`app/not-found.tsx`) con lenguaje de diseño "Hero".
- [x] Centralización de estilos compartidos de cabecera en `styles/shared.module.css`.

### Unificación de Cabeceras y Tarjetas (Papers & Acerca de)
- **Unificación de Héroe**: Migración de cabeceras locales en `Acerca de` y `Papers` hacia el componente centralizado `sharedStyles.hero`, garantizando paridad absoluta en animaciones y espaciado.
- **Estandarización de Micro-UX**: Sincronización de elevaciones (`translateY(-5px)`) y sombras tematizadas (`rgba(var(--color-secondary-rgb), 0.15)`) en todas las tarjetas informativas.
- **Limpieza de Deuda Técnica**: Eliminación de CSS redundante en los módulos de página, delegando la responsabilidad estructural a los estilos compartidos.

## Refactor UI Polish Unification

### Sistema de Acción "Pill"
- **Estandarización de Botones**: Introducción de las clases globales `.pill-link` y `.pill-button` en `globals.css` para acciones secundarias y navegación contextual.
- **Micro-interacción de Retorno**: El enlace de "Volver" en los artículos ahora utiliza un estilo de píldora con fondo blanco y bordes sutiles, incluyendo una animación de desplazamiento (`translateX(-4px)`) en la flecha para mejorar la affordance.

### Navegación Móvil & Layout
- **Encapsulación de Sidebar**: Migración de estilos de navegación móvil al módulo `AsideBar.module.css`, eliminando la contaminación de estilos globales en `layout.module.css`.
- **Feedback de Ubicación (Mobile)**: Sustitución del borde lateral por un borde inferior de acento (`var(--color-accent)`) en los enlaces activos para dispositivos móviles, optimizando la claridad visual en layouts verticales.
- **Centralización de Redes Sociales**: Reubicación de `SocialLinks` dentro del footer global para la vista móvil, eliminando duplicidad en la Home y manteniendo una interfaz más limpia y profesional.

### Consistencia de Contenido (Markdown)
- **Ritmo Vertical**: Estandarización de márgenes y espaciados en el cuerpo de los artículos para garantizar una lectura fluida.
- **Unificación de Hero en Artículos**: Los detalles de post ahora consumen `sharedStyles.hero`, asegurando que todos los elementos de cabecera (título, resumen, metadatos) compartan el mismo lenguaje visual que las páginas principales.

## Refined Search Usability
- **Keyboard Shortcut**: Implementation of the `/` key as a global shortcut to focus the search input, improving accessibility and navigation speed.

## UI Unification & Content Metrics
- **TitleAccent Component**: Centralized logic for chromatic accents in titles, ensuring consistent brand identity across all views.
- **Estimated Reading Time**: Implementation of a word-count based reading time metric (200 wpm) displayed in `PostCard` and article headers, improving user affordance and content scannability.
- **Shadow Depth Refinement**: Increased elevation feedback in `PostCard` (hover) and `AsideBar` (active) using themed RGB tokens for a more premium, depth-aware interface.
- **Visual Feedback**: Integration of React's `useTransition` to track the pending state of search navigation, with a corresponding pulsing animation on the search icon to reduce perceived latency.
- **Snappier Interactions**: The search "Clear" button now immediately resets both the local state and the URL query parameters, providing an instantaneous reset experience.
## 🎨 Palette: Micro-UX Improvements

### Search Keyboard Shortcut
- **Keyboard Shortcut**: Implementation of the `/` key shortcut to focus the search input globally.
- **Visual Discoverability**: Added a subtle shortcut hint ("/") in the search field that disappears on focus or when text is present (`:not(:placeholder-shown)`).
- **Responsive Design**: The shortcut hint is automatically hidden on mobile devices to save space.
- **Accessibility**: The visual hint is hidden from screen readers (`aria-hidden="true"`) to avoid redundant information, while the input remains fully accessible.

## Refactor UI Polish Excellence

### TitleAccent Component
- **Centralized Logic**: Created `TitleAccent.tsx` to automatically wrap the last word of any title in a chromatic accent (`<span>`).
- **Ubiquitous Application**: Migrated Home, Category, Post Detail, and Papers pages to use this component, ensuring 100% brand parity.

### Reading Time Integration
- **Contextual Awareness**: Implemented estimated reading time (200 ppm) in `PostCard` and Article Hero sections.
- **Visual Consistency**: Added a minimal `clock.svg` icon to accompany the metric, aligning with the existing `calendar.svg` pattern.

### Hero & Information Architecture
- **Home Page Unification**: Refactored the Landing Page Hero to consume `sharedStyles.hero`, achieving perfect vertical rhythm and animation sync.
- **CSS De-duplication**: Removed redundant hero styles from `page.module.css`, reducing technical debt.
- **Contextual UI**: Ensured all primary section headers on the Home page utilize the `infoBox` standard.

### Micro-UX Refinements
- **Pagination Depth**: Enhanced pagination hover states with deeper, theme-aware shadows (`rgba(var(--color-secondary-rgb), 0.2)`) and brand-aligned borders.
- **Empty State Professionalism**: Standardized all empty search and category states with `6rem` vertical padding and dashed borders for an intentional, polished look.
