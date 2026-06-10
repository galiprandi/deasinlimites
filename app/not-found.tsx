import Link from "next/link";
import styles from "./not-found.module.css";
import { siteConfig } from "@/config";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.hero}>
          <div className={styles.icon} aria-hidden="true">
            🔍
          </div>
          <h1>
            404 - Página <span>no encontrada</span>
          </h1>
          <p>
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>
        </header>

        <section className={styles.actions}>
          <Link href="/" className={styles.button}>
            Volver al inicio <span aria-hidden="true">→</span>
          </Link>
        </section>

        <footer className={styles.footer}>
          <p>
            Si crees que esto es un error, por favor contacta con{" "}
            <a href={`mailto:${siteConfig.author.email}`}>
              {siteConfig.author.name}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
