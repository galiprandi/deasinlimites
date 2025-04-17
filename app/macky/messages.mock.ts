export const fakeMessages = [
  {
    role: "user",
    content: "hola",
    parts: [
      {
        type: "text",
        text: "hola",
      },
    ],
  },
  {
    role: "assistant",
    content:
      "¡Hola! Soy **Macky**.  \n\nPara ayudarte, necesito algunos datos:  \n1. **Edad del niño/a** (entre 5 y 10 años):  \n2. **Dificultad específica** (indicá el número):  \n   - 1. Dislexia  \n   - 2. Discalculia  \n   - 3. Disortografía  \n   - 4. Disgrafía  \n   - 5. Varias  \n\nLuego, compartime el **material educativo** (texto, evaluación o actividad) que necesitás adaptar. Podés copiarlo o adjuntarlo.  \n\n¡Espero tu respuesta! 📚✨",
    parts: [
      {
        type: "step-start",
      },
      {
        type: "text",
        text: "¡Hola! Soy **Macky**.  \n\nPara ayudarte, necesito algunos datos:  \n1. **Edad del niño/a** (entre 5 y 10 años):  \n2. **Dificultad específica** (indicá el número):  \n   - 1. Dislexia  \n   - 2. Discalculia  \n   - 3. Disortografía  \n   - 4. Disgrafía  \n   - 5. Varias  \n\nLuego, compartime el **material educativo** (texto, evaluación o actividad) que necesitás adaptar. Podés copiarlo o adjuntarlo.  \n\n¡Espero tu respuesta! 📚✨",
      },
    ],
  },
  {
    role: "user",
    content: "tiene 6 años y dislalia",
    parts: [
      {
        type: "text",
        text: "tiene 6 años y dislalia",
      },
    ],
  },
  {
    role: "assistant",
    content:
      "¡Gracias por los datos!  \n\nAntes de continuar, necesito aclarar que **Macky está especializada en adaptaciones para Dislexia, Discalculia, Disortografía y Disgrafía**. La **Dislalia** (dificultad en la articulación de sonidos del habla) requiere estrategias diferentes, como apoyo fonoaudiológico o ejercicios de praxias.  \n\nSi tenés material educativo relacionado con **lenguaje oral o escritura** que quieras adaptar para otras necesidades (ej: dislexia o disortografía), decime y lo ajustaré.  \n\nOpciones:  \n1. **Revisar si el material es adaptable** (enviámelo).  \n2. **Cambiar la dificultad** a alguna de las que trabajo (indicá el número).  \n\n¿Cómo seguimos? 🎯",
    parts: [
      {
        type: "step-start",
      },
      {
        type: "text",
        text: "¡Gracias por los datos!  \n\nAntes de continuar, necesito aclarar que **Macky está especializada en adaptaciones para Dislexia, Discalculia, Disortografía y Disgrafía**. La **Dislalia** (dificultad en la articulación de sonidos del habla) requiere estrategias diferentes, como apoyo fonoaudiológico o ejercicios de praxias.  \n\nSi tenés material educativo relacionado con **lenguaje oral o escritura** que quieras adaptar para otras necesidades (ej: dislexia o disortografía), decime y lo ajustaré.  \n\nOpciones:  \n1. **Revisar si el material es adaptable** (enviámelo).  \n2. **Cambiar la dificultad** a alguna de las que trabajo (indicá el número).  \n\n¿Cómo seguimos? 🎯",
      },
    ],
  },
  {
    role: "user",
    content: "perdón, tiene dislexia, mala mía",
    parts: [
      {
        type: "text",
        text: "perdón, tiene dislexia, mala mía",
      },
    ],
  },
  {
    role: "assistant",
    content:
      '¡No hay problema! 😊  \n\n**Datos confirmados:**  \n- **Edad:** 6 años  \n- **Dificultad:** Dislexia  \n\nAhora **necesito el material educativo** que querés adaptar (texto, actividad, evaluación, etc.). Podés:  \n✍️ **Copiarlo aquí**  \n📎 **Adjuntarlo**  \n\nEjemplo de lo que podés enviar:  \n*"El gato corre en el parque. Le gusta saltar alto."*  \n\n**Recordá:**  \n- Usaré **tipografía clara**, **espaciado amplio** y **palabras clave resaltadas**.  \n- Incluiré una **explicación técnica** de los cambios.  \n\n¡Mandame el contenido cuando estés listo! 🐱📖',
    parts: [
      {
        type: "step-start",
      },
      {
        type: "text",
        text: '¡No hay problema! 😊  \n\n**Datos confirmados:**  \n- **Edad:** 6 años  \n- **Dificultad:** Dislexia  \n\nAhora **necesito el material educativo** que querés adaptar (texto, actividad, evaluación, etc.). Podés:  \n✍️ **Copiarlo aquí**  \n📎 **Adjuntarlo**  \n\nEjemplo de lo que podés enviar:  \n*"El gato corre en el parque. Le gusta saltar alto."*  \n\n**Recordá:**  \n- Usaré **tipografía clara**, **espaciado amplio** y **palabras clave resaltadas**.  \n- Incluiré una **explicación técnica** de los cambios.  \n\n¡Mandame el contenido cuando estés listo! 🐱📖',
      },
    ],
  },
  {
    role: "user",
    content:
      "Evaluación de Geografía – Nivel Inicial (6 años) Nombre y Apellido: ____________________________ Fecha: _____________________  1. Marcar con una X la respuesta correcta: ¿En qué país vivimos? ☐ Brasil ☐ Argentina ☐ Chile  2. Unir con flechas:  Dibujo\tNombre 🏞️\tRío 🌄\tMontaña 🌊\tMar 3. Dibujá una bandera de Argentina. (Podés usar lápices de colores celeste y blanco)  4. Completá la frase con las palabras correctas: _Argentina está en el continente ____________________ y su capital es ___________________.  Opciones: Buenos Aires, América  5. Coloreá el mapa de Argentina. (Podés usar el color que más te guste, pero marcá la capital con una estrella ⭐)",
    parts: [
      {
        type: "text",
        text: "Evaluación de Geografía – Nivel Inicial (6 años) Nombre y Apellido: ____________________________ Fecha: _____________________  1. Marcar con una X la respuesta correcta: ¿En qué país vivimos? ☐ Brasil ☐ Argentina ☐ Chile  2. Unir con flechas:  Dibujo\tNombre 🏞️\tRío 🌄\tMontaña 🌊\tMar 3. Dibujá una bandera de Argentina. (Podés usar lápices de colores celeste y blanco)  4. Completá la frase con las palabras correctas: _Argentina está en el continente ____________________ y su capital es ___________________.  Opciones: Buenos Aires, América  5. Coloreá el mapa de Argentina. (Podés usar el color que más te guste, pero marcá la capital con una estrella ⭐)",
      },
    ],
  },
];
