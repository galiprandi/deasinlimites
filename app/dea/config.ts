import { siteConfig } from "@/config";

// Blog Config
export const blog = {
  title: "Guías integrales sobre DEA",
  description:
    "Guías prácticas para identificar y apoyar a niños con discalculia, dislexia, disgrafía y disortografía. Descubre estrategias multisensoriales, adaptaciones en el aula y recursos digitales para docentes y familias.",
  keywords: [
    // Términos generales
    "dificultades de aprendizaje",
    "educación inclusiva",
    "estrategias docentes",
    "neurodiversidad",
    "adaptaciones curriculares",

    // Por condición específica
    "discalculia tipos",
    "dislexia fonológica",
    "disgrafía motriz",
    "disortografía visual",
    "signos dislexia preescolar",
    "identificar discalculia",

    // Estrategias y recursos
    "enseñanza multisensorial",
    "material concreto matemáticas",
    "ejercicios motricidad fina",
    "apps para dislexia",
    "técnicas relajación disgrafía",
    "juegos ortográficos",

    // Público objetivo
    "guías para docentes",
    "apoyo familiar dificultades aprendizaje",
    "recursos educación especial",
  ],
  path: "/docentes",
  contentFolder: "/content/docentes",
  url: `${siteConfig.url}/docentes`,
  pageSize: 10,
};
