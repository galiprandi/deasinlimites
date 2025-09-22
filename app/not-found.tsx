import Link from "next/link";
import { siteConfig } from "@/config";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          404
        </h1>
        <h2 className={styles.subtitle}>
          ¡Oops! Página no encontrada
        </h2>
        <p className={`t-large t-center ${styles.description}`}>
          Parece que esta página se ha perdido en el camino del aprendizaje.
          No te preocupes, ¡todos nos equivocamos a veces! Te ayudamos a encontrar
          el contenido que buscas.
        </p>
      </div>

      <hr />

      <section className={styles.navigation}>
        <h2 className={styles.navTitle}>
          ¿Buscabas algo en particular?
        </h2>

        <div className={styles.navGrid}>
          <Link
            href="/"
            className={styles.navButton}
          >
            🏠 Inicio
          </Link>

          <Link
            href="/dea"
            className={`${styles.navButton} ${styles.secondary}`}
          >
            📚 Guías DEA
          </Link>

          <Link
            href="/familias"
            className={styles.navButton}
          >
            👨‍👩‍👧‍👦 Familias
          </Link>

          <Link
            href="/docentes"
            className={`${styles.navButton} ${styles.secondary}`}
          >
            👩‍🏫 Docentes
          </Link>
        </div>

        <div className={styles.aboutLink}>
          <Link
            href="/acerca-de"
            className="tag"
          >
            ℹ️ Acerca de {siteConfig.title}
          </Link>
        </div>
      </section>

      <hr />

      <section className={styles.contactSection}>
        <h3 className={styles.contactTitle}>
          ¿Necesitas ayuda adicional?
        </h3>
        <p className={styles.contactText}>
          Si no encuentras lo que buscas, puedes contactar con nosotros.
          Estamos aquí para ayudarte en tu camino educativo.
        </p>
        <a
          href="mailto:mariadelosangelesceliz@gmail.com"
          className={styles.contactButton}
        >
          📧 Contactar
        </a>
      </section>
    </main>
  );
}
