import { siteConfig } from "@/config";
import { Metadata } from "next";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";
import TitleAccent from "@/components/TitleAccent";

export const metadata: Metadata = {
  title: siteConfig.author.name,
  description: `Educación y experiencia profesional de ${siteConfig.author.name}`,
  alternates: {
    canonical: `${siteConfig.url}/acerca-de`,
  },
  openGraph: {
    title: siteConfig.author.name,
    description: `Educación y experiencia profesional de ${siteConfig.author.name}`,
    url: `${siteConfig.url}/acerca-de`,
  },
  twitter: {
    title: siteConfig.author.name,
    description: `Educación y experiencia profesional de ${siteConfig.author.name}`,
  },
};

interface Experience {
  title: string;
  location: string;
  dates: string;
  description?: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
}

interface Training {
  title: string;
  institution: string;
  dates: string;
  description?: string;
}

const education: Education[] = [
  {
    degree: "Profesorado EGB I y II",
    institution: "Escuela y Liceo vocacional Sarmiento U.N.T",
    location: "San Miguel de Tucumán, Argentina",
    dates: "2002",
  },
  {
    degree: "Profesorado Nivel Inicial",
    institution: "Escuela y Liceo vocacional Sarmiento U.N.T",
    location: "San Miguel de Tucumán, Argentina",
    dates: "1999 - 2001",
  },
];

const experience: Experience[] = [
  {
    title: "Maestra de apoyo",
    location: "San Miguel de Tucumán, Argentina",
    dates: "2012 - Actualidad",
    description:
      "Maestra de apoyo especializada en niños con dificultades específicas de aprendizaje (DEA).",
  },
  {
    title: "Maestra EGB I y II",
    location: "Colegio Suizo, San Miguel de Tucumán, Argentina",
    dates: "2011 - 2012",
  },
  {
    title: "Maestra EGB I y II",
    location: "Colegio Santa Catalina, San Miguel de Tucumán, Argentina",
    dates: "2010 - 2011",
  },
  {
    title: "Maestra EGB I y II",
    location: "Escuela Manuel Belgrano, Rafaela, Santa Fe, Argentina",
    dates: "2005",
  },
  {
    title: "Maestra EGB I y II",
    location: "Escuela Juán Bautista Alberdi, Rafaela, Santa Fe, Argentina",
    dates: "2004",
  },
  {
    title: "Maestra EGB I y II",
    location: "Escuela Bartolomé Mitre, Rafaela, Santa Fe, Argentina",
    dates: "2004",
  },
];

const training: Training[] = [
  {
    title: "Desarrollo de habilidades cognitivas en Autismo",
    institution: "Centro educativo Paulo Freire (México)",
    dates: "2025",
  },
  {
    title: "Charla-Taller La dislexia: desde una mirada integral",
    institution: "Psicopedagoga clínica Josefina García",
    dates: "2024",
  },
];

export default function AcercaDe() {
  return (
    <div className={styles.container}>
      <header className={sharedStyles.hero}>
        <h1>
          <TitleAccent text={siteConfig.author.name} />
        </h1>
        <p>Educadora y Especialista en Dificultades de Aprendizaje</p>
      </header>

      <section className={styles.section}>
        <h2 className={sharedStyles.infoBox}>Educación</h2>
        <div className={styles.grid}>
          {education.map((edu, index) => (
            <article key={index} className={styles.card}>
              <h3>
                {edu.degree}
                <span className={styles.dateTag}>{edu.dates}</span>
              </h3>
              <p className={styles.institution}>{edu.institution}</p>
              <p className={styles.location}>{edu.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={sharedStyles.infoBox}>Experiencia</h2>
        <div className={styles.grid}>
          {experience.map((exp, index) => (
            <article key={index} className={styles.card}>
              <h3>
                {exp.title}
                <span className={styles.dateTag}>{exp.dates}</span>
              </h3>
              <p className={styles.location}>{exp.location}</p>
              {exp.description && <p className={styles.description}>{exp.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={sharedStyles.infoBox}>Capacitaciones</h2>
        <div className={styles.grid}>
          {training.map((train, index) => (
            <article key={index} className={styles.card}>
              <h3>
                {train.title}
                <span className={styles.dateTag}>{train.dates}</span>
              </h3>
              <p className={styles.institution}>{train.institution}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
