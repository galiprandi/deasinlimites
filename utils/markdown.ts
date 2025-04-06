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

// Interfaces
export interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
}

export interface Post extends PostMetadata {
  content: string;
}

// Función para obtener todos los archivos MD en el directorio
export function getPostFiles(contentFolder: string): string[] {
  return fs
    .readdirSync(path.join(process.cwd(), contentFolder))
    .filter((file) => file.endsWith(".md"));
}

// Función para obtener los metadatos de un post
export function getPostMetadata(
  contentFolder: string,
  filename: string
): PostMetadata {
  const filePath = path.join(process.cwd(), contentFolder, filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    excerpt: data.excerpt || "",
    slug: filename.replace(".md", ""),
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
  const filePath = path.join(process.cwd(), contentFolder, `${slug}.md`);
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
    excerpt: data.excerpt || "",
    slug,
    content: processedContent.toString(),
  };
}

// Función para buscar posts por término
export function searchPosts(
  contentFolder: string,
  term: string
): PostMetadata[] {
  const allPosts = getAllPostsMetadata(contentFolder);

  if (!term) {
    return allPosts;
  }

  const normalizedTerm = term.toLowerCase();
  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(normalizedTerm) ||
      post.excerpt.toLowerCase().includes(normalizedTerm) ||
      post.tags.some((tag) => tag.toLowerCase().includes(normalizedTerm))
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
