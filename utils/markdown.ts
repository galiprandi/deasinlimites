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

// Validate path to prevent directory traversal attacks
function validatePath(targetPath: string): string {
  if (targetPath.includes("\0") || targetPath.split(path.sep).includes("..")) {
    throw new Error("Invalid path traversal attempt");
  }
  const res = path.resolve(targetPath);
  const root = path.resolve(CONTENT_PATH);
  if (res !== root && !res.startsWith(root + path.sep)) {
    throw new Error("Invalid path traversal attempt");
  }
  return res;
}

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

// Get all markdown files in a folder
export function getPostFiles(contentFolder: string): string[] {
  return fs
    .readdirSync(validatePath(path.join(CONTENT_PATH, contentFolder)))
    .filter((file) => file.endsWith(".md"));
}

// Get metadata for a single post
export function getPostMetadata(
  contentFolder: string,
  filename: string
): PostMetadata {
  const filePath = validatePath(path.join(CONTENT_PATH, contentFolder, filename));
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

// Get metadata for all posts in a folder
export function getAllPostsMetadata(contentFolder: string): PostMetadata[] {
  const postFiles = getPostFiles(contentFolder);
  const postsMetadata = postFiles.map((filename) =>
    getPostMetadata(contentFolder, filename)
  );

  // Sort posts by date (newest first)
  return postsMetadata.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get full post by slug
export async function getPostBySlug(
  contentFolder: string,
  slug: string
): Promise<Post> {
  const filePath = validatePath(path.join(CONTENT_PATH, contentFolder, `${slug}.md`));
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

// Get all unique tags
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

// Paginate posts
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
 * Calculates estimated reading time in minutes based on content.
 * Standard average: 200 words per minute.
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s+/).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
}
