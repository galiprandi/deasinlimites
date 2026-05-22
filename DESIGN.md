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

## Tokens de Diseño Utilizados
- `--color-accent`: `#fdb344` (Enfoque y acentos)
- `--color-secondary`: `#62a964` (Estados activos y hover)
- `--bd-grey2`: `#1f29371a` (Fondos de tarjetas)
- `--border-radius`: `0.6em`
