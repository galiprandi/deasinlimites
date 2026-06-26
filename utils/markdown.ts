import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const CONTENT_PATH = path.join(process.cwd(), "content");

// Interfaces
export interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  slug: string;
  readingTime?: number;
}

export interface Post extends PostMetadata {
  content: string;
}

// Función para obtener todos los archivos MD en el directorio
export function getPostFiles(contentFolder: string): string[] {
  return fs
    .readdirSync(path.join(CONTENT_PATH, contentFolder))
    .filter((file) => file.endsWith(".md"));
}

// Función para obtener los metadatos de un post
export function getPostMetadata(
  contentFolder: string,
  filename: string
): PostMetadata {
  const filePath = path.join(CONTENT_PATH, contentFolder, filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    summary: data.summary || "",
    slug: filename.replace(".md", ""),
    readingTime: getReadingTime(content),
  };
}

// Función para obtener todos los metadatos de los posts
export function getAllPostsMetadata(contentFolder: string): PostMetadata[] {
  const postFiles = getPostFiles(contentFolder);
  const postsMetadata = postFiles.map((filename) =>
    getPostMetadata(contentFolder, filename)
  );

  // Ordenar posts por fecha (más reciente primero)
  return postsMetadata.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Función para obtener un post completo por slug
export async function getPostBySlug(
  contentFolder: string,
  slug: string
): Promise<Post> {
  // Prevent path traversal
  if (slug.includes("..") || slug.includes("/") || slug.includes("\\")) {
    throw new Error("Invalid slug");
  }

  const filePath = path.join(CONTENT_PATH, contentFolder, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    summary: data.summary || "",
    slug,
    content: processedContent.toString(),
    readingTime: getReadingTime(content),
  };
}

export function searchPosts(
  posts: PostMetadata[],
  query: string
): PostMetadata[] {
  const lowerCaseQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(lowerCaseQuery) ||
      post.summary?.toLowerCase().includes(lowerCaseQuery) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))
  );
}

// Función para obtener todos los tags únicos
export function getAllTags(contentFolder: string): string[] {
  const allPosts = getAllPostsMetadata(contentFolder);
  const tagsSet = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet);
}

// Función para paginar posts
export function paginatePosts(
  posts: PostMetadata[],
  page: number = 1,
  postsPerPage: number = 10
): {
  posts: PostMetadata[];
  totalPages: number;
} {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return {
    posts: paginatedPosts,
    totalPages,
  };
}

/**
 * Calcula el tiempo estimado de lectura en minutos basado en el contenido.
 * Promedio estándar: 200 palabras por minuto.
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s+/).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
}
