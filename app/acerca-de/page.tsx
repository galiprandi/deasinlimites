import { Metadata } from "next";

export const metadata: Metadata = {
  title: "María de los Ángeles Céliz",
  description:
    "Educación y experiencia profesional de María de los Ángeles Céliz",
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
    location: "San Miguel de Tucuman, Argentina",
    dates: "2002",
  },
  {
    degree: "Profesorado Nivel Inicial",
    institution: "Escuela y Liceo vocacional Sarmiento U.N.T",
    location: "San Miguel de Tucuman, Argentina",
    dates: "1999 - 2001",
  },
];

const experience: Experience[] = [
  {
    title: "Maestra de apoyo",
    location: "San Miguel de Tucuman, Argentina",
    dates: "2012 - Present",
    description:
      "Maestra de apoyo especializada en niños con dificultades específicas de aprendizaje (DEA).",
  },
  {
    title: "Maestra EGB I y II",
    location: "Colegio Suizo, San Miguel de Tucuman, Argentina",
    dates: "2011 - 2012",
  },
  {
    title: "Maestra EGB I y II",
    location: "Colegio Santa Catalina, San Miguel de Tucuman, Argentina",
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
    <main>
      <div>
        <h1>María de los Ángeles Céliz</h1>
        <p>Educadora y Especialista en Dificultades de Aprendizaje</p>
      </div>
      <br />
      <hr />
      <br />
      <section>
        <h2>Educación</h2>
        <div>
          {education.map((edu, index) => (
            <div key={index}>
              <h3>
                {edu.degree} <small>({edu.dates})</small>
              </h3>
              <p>{edu.institution}</p>
              <p>{edu.location}</p>
            </div>
          ))}
        </div>
      </section>
      <br />
      <section>
        <h2>Experiencia</h2>
        <div>
          {experience.map((exp, index) => (
            <div key={index}>
              <h3>
                {exp.title} <small>({exp.dates})</small>
              </h3>
              <p>{exp.location}</p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </div>
      </section>
      <br />
      <section>
        <h2>Capacitaciones</h2>
        <div>
          {training.map((train, index) => (
            <div key={index}>
              <h3>
                {train.title} <small>({train.dates})</small>
              </h3>
              <p>{train.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
