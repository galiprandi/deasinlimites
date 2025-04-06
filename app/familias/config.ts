import { siteConfig } from "@/config";
import { Metadata } from "next";

// Content folder
export const contentForlder = "/content/familias";

// Blog Config
export const blog = {
  title: "Guías prácticas para familias",
  description:
    "Guías prácticas para entender y apoyar a niños con discalculia, dislexia, disgrafía y disortografía.",
  keywords: [
    "discalculia",
    "dislexia",
    "disgrafía",
    "disortografía",
    "educación",
    "estrategias de aprendizaje",
    "apoyo escolar",
  ],
  url: `${siteConfig.url}/familias`,
  pageSize: 10,
};

// Metadata for SEO
export const metadata: Metadata = {
  title: `${siteConfig.title}: ${blog.title}`,
  description: blog.description,
  keywords: blog.keywords,
  openGraph: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
    url: "/familias",
    type: "website",
  },
  twitter: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
  },
};
