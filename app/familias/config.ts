import { siteConfig } from "@/config";
import { BlogConfig } from "@/types/blog";

// Blog Config
export const blog: BlogConfig = {
  title: "Estrategias prácticas para familias",
  description:
    "Estrategias prácticas para familias con niños con discalculia, dislexia, disgrafía y disortografía. Actividades cotidianas, juegos educativos y apoyo emocional para el hogar.",
  keywords: [
    // Dificultades específicas
    "discalculia actividades en casa",
    "dislexia estrategias familiares",
    "disgrafía ejercicios motricidad",
    "disortografía juegos ortográficos",

    // Áreas de desarrollo
    "matemáticas cotidianas",
    "lectura compartida",
    "escritura creativa",
    "ortografía divertida",

    // Métodos de apoyo
    "aprendizaje multisensorial",
    "juegos educativos caseros",
    "adaptaciones para tareas",
    "refuerzo positivo",

    // Recursos prácticos
    "apps para dislexia",
    "material concreto matemáticas",
    "ejercicios motricidad fina",
    "correctores ortográficos",

    // Apoyo emocional
    "autoestima niños",
    "reducir frustración aprendizaje",
    "celebrar progresos",
    "comunicación familia-escuela",

    // Edades específicas
    "apoyo primaria",
    "actividades preescolar",
    "estrategias adolescentes",
  ],
  path: "/familias",
  contentFolder: "/content/familias",
  url: `${siteConfig.url}/familias`,
  pageSize: 10,
};
