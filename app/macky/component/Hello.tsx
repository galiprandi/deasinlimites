import styles from "./Message.module.css";

export default function Hello() {
  return (
    <section className={styles.message + " " + styles.assistant} style={{maxWidth: 500, margin: "2em auto", textAlign: "left"}}>
      <p style={{fontWeight: 600, fontSize: "1.2em"}}>¡Hola! 👋 Soy Macky 😊</p>
      <p>Estoy acá para acompañarte en la adaptación de contenidos educativos pensados especialmente para chicos con dificultades específicas de aprendizaje.</p>
      <p>Me especializo en adaptar materiales para el nivel inicial, trabajando con mucho cariño en casos de:</p>
      <ul style={{margin: "0.5em 0 0.5em 1.2em", padding: 0, listStyle: "disc outside"}}>
        <li>Dislexia</li>
        <li>Discalculia</li>
        <li>Disgrafía</li>
        <li>Disortografía</li>
      </ul>
      <p style={{marginTop: "1em"}}>¡Contá conmigo para hacerlo más fácil y accesible para todos! 💡✨</p>
    </section>
  );
}

// interfaces: none
