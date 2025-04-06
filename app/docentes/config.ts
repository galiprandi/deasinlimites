import { siteConfig } from "@/config";
import { Metadata } from "next";

// Content folder
export const contentForlder = "/content/docentes";

// Blog Config
export const blog = {
  title: "Guías prácticas para docentes",
  description:
    "Guías prácticas para entender y apoyar a niños con discalculia, dislexia, disgrafía y disortografía.",
  url: `${siteConfig.url}/docentes`,
  pageSize: 10,
  keywords: [
    "discalculia",
    "dislexia",
    "disgrafía",
    "disortografía",
    "educación",
    "estrategias de aprendizaje",
    "apoyo escolar",
  ],
};

// Metadata for SEO
export const metadata: Metadata = {
  title: `${siteConfig.title}: ${blog.title}`,
  description: blog.description,
  keywords: blog.keywords,
  openGraph: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
    url: "/docentes",
    type: "website",
  },
  twitter: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
  },
};
