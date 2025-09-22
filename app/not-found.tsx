"use client";

import Link from "next/link";
import { siteConfig } from "@/config";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2em 0" }}>
      <div style={{ marginBottom: "2em" }}>
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
        <p style={{
          fontSize: "1.2em",
          color: "var(--text-primary)",
          margin: "1em auto",
          maxWidth: "600px"
        }}>
          Parece que esta página se ha perdido en el camino del aprendizaje.
          No te preocupes, ¡todos nos equivocamos a veces! Te ayudamos a encontrar
          el contenido que buscas.
        </p>
      </div>

      <div style={{
        backgroundColor: "var(--bd-grey)",
        borderRadius: "var(--border-radius)",
        padding: "2em",
        margin: "2em auto",
        maxWidth: "600px",
        border: "1px solid var(--bd-grey2)"
      }}>
        <h3 style={{
          color: "var(--text-primary)",
          margin: "0 0 1.5em 0",
          fontSize: "1.3em"
        }}>
          ¿Buscabas algo en particular?
        </h3>

        <div style={{
          display: "grid",
          gap: "1em",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          marginBottom: "2em"
        }}>
          <Link
            href="/"
            className="nav-button"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-accent)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              transition: "transform 0.2s"
            }}
          >
            🏠 Inicio
          </Link>

          <Link
            href="/dea"
            className="nav-button"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              transition: "transform 0.2s"
            }}
          >
            📚 Guías DEA
          </Link>

          <Link
            href="/familias"
            className="nav-button"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-accent)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              transition: "transform 0.2s"
            }}
          >
            👨‍👩‍👧‍👦 Familias
          </Link>

          <Link
            href="/docentes"
            className="nav-button"
            style={{
              display: "block",
              padding: "1em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              textDecoration: "none",
              borderRadius: "var(--border-radius)",
              fontWeight: "bold",
              transition: "transform 0.2s"
            }}
          >
            👩‍🏫 Docentes
          </Link>
        </div>

        <div style={{ marginTop: "2em" }}>
          <Link
            href="/acerca-de"
            className="about-link"
            style={{
              color: "var(--color-secondary)",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "0.5em 1em",
              border: "2px solid var(--color-secondary)",
              borderRadius: "var(--border-radius)",
              display: "inline-block",
              transition: "all 0.3s"
            }}
          >
            ℹ️ Acerca de {siteConfig.title}
          </Link>
        </div>
      </div>

      <div style={{
        marginTop: "3em",
        padding: "2em",
        backgroundColor: "var(--bd-grey)",
        borderRadius: "var(--border-radius)",
        maxWidth: "500px",
        margin: "3em auto 0"
      }}>
        <h4 style={{
          color: "var(--text-primary)",
          margin: "0 0 1em 0"
        }}>
          ¿Necesitas ayuda adicional?
        </h4>
        <p style={{
          color: "var(--text-primary)",
          margin: "0 0 1em 0",
          fontSize: "0.9em"
        }}>
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
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .nav-button:hover {
          transform: translateY(-2px);
        }

        .about-link:hover {
          background-color: var(--color-secondary);
          color: white;
        }

        @media screen and (max-width: 960px) {
          div > div:first-child h1 {
            font-size: 3em !important;
          }
          div > div:first-child h2 {
            font-size: 1.5em !important;
          }
          div > div:first-child p {
            font-size: 1em !important;
          }
        }
      `}</style>
    </div>
  );
}
