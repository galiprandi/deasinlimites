import { BlogConfig } from "./types/blog";

const title = "DEA sin límites";

export const siteConfig = {
  title,
  description: `${title} es un blog dirigido a padres y docentes de niños con dificultades específicas de aprendizaje (DEA).`,
  url: "https://deasinlimites.com",
};

export const socialLinks = {
  linkedin: {
    src: "https://www.linkedin.com/in/mar%C3%ADa-de-los-angeles-celiz-a00451276/",
    alt: "LinkedIn",
  },
  email: {
    src: "mailto:mariadelosangelesceliz@gmail.com",
    alt: "Email",
  },
  whatsapp: {
    src: "https://wa.me/5493582000000",
    alt: "Whatsapp",
  },
};

export const blogsConfig: Record<string, BlogConfig> = {
  dea: {
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
    path: "/dea",
    contentFolder: "/content/dea",
    url: `${siteConfig.url}/dea`,
    pageSize: 10,
  },
  familias: {
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
  },
  docentes: {
    title: "Estrategias prácticas para docentes",
    description:
      "Estrategias prácticas para docentes sobre dislexia, discalculia, disgrafía y disortografía. Métodos multisensoriales, adaptaciones en el aula y recursos digitales para educación inclusiva.",
    keywords: [
      // Dificultades de aprendizaje
      "dislexia estrategias aula",
      "discalculia actividades matemáticas",
      "disgrafía ejercicios motricidad",
      "disortografía técnicas ortografía",

      // Enfoques pedagógicos
      "enseñanza multisensorial",
      "adaptaciones curriculares",
      "educación inclusiva",
      "evaluación diferenciada",

      // Recursos prácticos
      "material concreto aprendizaje",
      "apps para necesidades educativas",
      "organizadores visuales",
      "juegos educativos",

      // Apoyo emocional
      "reducir ansiedad escolar",
      "refuerzo positivo",
      "autoestima estudiantes",
      "motivación aprendizaje",

      // Niveles educativos
      "estrategias primaria",
      "adaptaciones preescolar",
      "secundaria inclusiva",

      // Recursos recomendados
      "Dytective dislexia",
      "MathTappers matemáticas",
      "Writing Wizard escritura",
    ],
    path: "/docentes",
    contentFolder: "/content/docentes",
    url: `${siteConfig.url}/docentes`,
    pageSize: 10,
  },
};

export const getBlogConfig = (blogSlug: string): BlogConfig | undefined => {
  return blogsConfig[blogSlug];
};
