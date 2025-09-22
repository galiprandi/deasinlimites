import Link from "next/link";
import { siteConfig } from "@/config";

export default function NotFound() {
  return (
    <main>
      <div className="t-center" style={{ marginBottom: "2em" }}>
        <h1 style={{
          fontSize: "4em",
          color: "var(--color-accent)",
          margin: "0.5em 0",
          fontWeight: "bold"
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: "2em",
          color: "var(--text-primary)",
          margin: "0.5em 0"
        }}>
          ¡Oops! Página no encontrada
        </h2>
        <p className="t-large" style={{ maxWidth: "600px", margin: "1em auto" }}>
          Parece que esta página se ha perdido en el camino del aprendizaje.
          No te preocupes, ¡todos nos equivocamos a veces! Te ayudamos a encontrar
          el contenido que buscas.
        </p>
      </div>

      <hr />

      <section style={{
        backgroundColor: "var(--bd-grey)",
        borderRadius: "var(--border-radius)",
        padding: "2em",
        margin: "2em auto",
        maxWidth: "600px",
        border: "1px solid var(--bd-grey2)"
      }}>
        <h2 style={{
          color: "var(--text-primary)",
          margin: "0 0 1.5em 0",
          textAlign: "center"
        }}>
          ¿Buscabas algo en particular?
        </h2>

        <div style={{
          display: "grid",
          gap: "1em",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          marginBottom: "2em"
        }}>
          <Link
            href="/"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-accent)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            🏠 Inicio
          </Link>

          <Link
            href="/dea"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            📚 Guías DEA
          </Link>

          <Link
            href="/familias"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-accent)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            👨‍👩‍👧‍👦 Familias
          </Link>

          <Link
            href="/docentes"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            👩‍🏫 Docentes
          </Link>
        </div>

        <div className="t-center" style={{ marginTop: "2em" }}>
          <Link
            href="/acerca-de"
            className="tag"
          >
            ℹ️ Acerca de {siteConfig.title}
          </Link>
        </div>
      </section>

      <hr />

      <section style={{
        padding: "2em 0",
        backgroundColor: "var(--bd-grey)",
        borderRadius: "var(--border-radius)",
        margin: "2em 0",
        textAlign: "center"
      }}>
        <h3 style={{ color: "var(--text-primary)", margin: "0 0 1em 0" }}>
          ¿Necesitas ayuda adicional?
        </h3>
        <p style={{ color: "var(--text-primary)", margin: "0 0 1em 0" }}>
          Si no encuentras lo que buscas, puedes contactar con nosotros.
          Estamos aquí para ayudarte en tu camino educativo.
        </p>
        <a
          href="mailto:mariadelosangelesceliz@gmail.com"
          style={{
            display: "inline-block",
            padding: "0.8em 1.5em",
            backgroundColor: "var(--color-accent)",
            color: "white",
            textDecoration: "none",
            borderRadius: "var(--border-radius)",
            fontWeight: "bold"
          }}
        >
          📧 Contactar
        </a>
      </section>
    </main>
  );
}
