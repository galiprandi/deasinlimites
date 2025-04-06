import { siteConfig } from "@/config";
import { Metadata } from "next";

// Content folder
export const contentForlder = "/content/dea";

// Blog Config
export const blog = {
  title: "Guías integrales sobre DEA",
  url: `${siteConfig.url}/dea`,
  pageSize: 10,
};

// Metadata for SEO
export const metadata: Metadata = {
  title: `${siteConfig.title}: Recursos y Artículos sobre Dificultades Específicas de Aprendizaje`,
  description:
    "Guías integrales sobre discalculia, dislexia, disgrafía y disortografía. Estrategias prácticas para docentes y familias.",
  keywords: [
    "discalculia",
    "dislexia",
    "disgrafía",
    "disortografía",
    "educación",
    "estrategias de aprendizaje",
    "apoyo escolar",
  ],
  openGraph: {
    title: `${siteConfig.title}: Recursos y Artículos sobre Dificultades Específicas de Aprendizaje`,
    description:
      "Explora guías detalladas sobre discalculia, dislexia, disgrafía y disortografía, con estrategias prácticas para el aula y el hogar.",
    url: "/dea",
    type: "website",
  },
  twitter: {
    title:
      "Blog DEA - Recursos y Artículos sobre Dificultades Específicas de Aprendizaje",
    description:
      "Guías prácticas para entender y apoyar a niños con discalculia, dislexia, disgrafía y disortografía.",
  },
};
