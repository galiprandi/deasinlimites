import Link from "next/link";
import styles from "@/styles/shared.module.css";
import layoutStyles from "./layout.module.css";

export default function NotFound() {
  return (
    <div className={layoutStyles.container}>
      <header className={styles.hero}>
        <h1>
          404: Página <span>no encontrada</span>
        </h1>
        <p>
          Lo sentimos, pero parece que el contenido que buscas no existe o ha sido movido a una nueva ubicación.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className="pill-link">
            Volver al inicio
          </Link>
        </div>
      </header>
    </div>
  );
}
