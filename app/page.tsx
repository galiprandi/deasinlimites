import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>
        Bienvenido a <span className="t-accent">Puentes en el Aprendizaje</span>
      </h1>
      <p className="t-large">
        Creando Puentes es un blog dirigido a padres y docentes de niños con
        dificultades específicas de aprendizaje (DEA). Su objetivo es derribar
        barreras educativas, fomentando la conexión y el apoyo a estos
        estudiantes, y promoviendo un entorno inclusivo y colaborativo.
      </p>
    </div>
  );
}
