import React from "react";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";
import TitleAccent from "@/components/TitleAccent";
import { Metadata } from "next";
import TitleAccent from "@/components/TitleAccent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publicaciones | DEA sin límites",
  description: "Recursos, guías y publicaciones sobre Dificultades Específicas del Aprendizaje.",
};

interface Publication {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
}

const publications: Publication[] = [
  {
    id: "1",
    title: "Guía para Padres: Entendiendo la Dislexia",
    description: "Una guía completa con estrategias prácticas para apoyar el desarrollo lector en casa.",
    date: "15 de Abril, 2024",
    category: "Guía",
    link: "#",
  },
  {
    id: "2",
    title: "Adaptaciones Curriculares en el Aula",
    description: "Documento técnico sobre cómo implementar ajustes razonables para alumnos con DEA.",
    date: "10 de Mayo, 2024",
    category: "Recurso Docente",
    link: "#",
  },
  {
    id: "3",
    title: "El Impacto Emocional de las DEA",
    description: "Artículo de investigación sobre el bienestar socioafectivo en niños con dificultades de aprendizaje.",
    date: "22 de Mayo, 2024",
    category: "Investigación",
    link: "#",
  },
];

export default function PapersPage() {
  return (
    <div className={styles.container}>
      <header className={sharedStyles.hero}>
        <h1><TitleAccent text="Publicaciones especializadas" /></h1>
        <p>
          Recursos y materiales descargables para familias y profesionales.
        </p>
      </header>

      <section className={styles.grid}>
        {publications.map((pub) => (
          <article key={pub.id} className={styles.card}>
            <Link href={pub.link} className={styles.cardLink}>
              <div className={styles.cardContent}>
                <header>
                  <span className={styles.category}>{pub.category}</span>
                  <h2 className={styles.cardTitle}>{pub.title}</h2>
                </header>
                <p className={styles.description}>{pub.description}</p>
                <footer className={styles.footer}>
                  <span className={styles.date}>{pub.date}</span>
                  <div className={styles.button}>
                    Leer más <span className={styles.arrowIcon} aria-hidden="true">→</span>
                  </div>
                </footer>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
