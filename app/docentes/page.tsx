import {
  getAllPostsMetadata,
  searchPosts,
  paginatePosts,
} from "@/utils/markdown";
import PostCard from "@/components/PostCard";
import SearchPosts from "@/components/SearchPosts";
import Pagination from "@/components/Pagination";
import styles from "@/styles/blog-home.module.css";
import { siteConfig } from "@/config";
import { Metadata } from "next";

// Config
import { blog } from "./config";

export const metadata: Metadata = {
  title: `${siteConfig.title}: ${blog.title}`,
  description: blog.description,
  keywords: blog.keywords,
  openGraph: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
    url: blog.url,
    type: "website",
  },
  twitter: {
    title: `${siteConfig.title}: ${blog.title}`,
    description: blog.description,
  },
};

export default function BlogHomePage({ searchParams = {} }: HomeProps) {
  // Get search params
  const searchQuery = searchParams.q || "";
  const currentPage = parseInt(searchParams.page || "1", blog.pageSize);

  // Get all posts and filter by search if needed
  const filteredPosts = searchQuery
    ? searchPosts(blog.contentFolder, searchQuery)
    : getAllPostsMetadata(blog.contentFolder);

  // Paginate results
  const { posts, totalPages } = paginatePosts(
    filteredPosts,
    currentPage,
    blog.pageSize
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.description}>{blog.description}</p>
        <SearchPosts />
      </header>

      <main className={styles.main}>
        {searchQuery && (
          <div className={styles.searchInfo}>
            <p>
              {filteredPosts.length === 0
                ? `No se encontraron resultados para "${searchQuery}"`
                : `${filteredPosts.length} resultado${
                    filteredPosts.length !== 1 ? "s" : ""
                  } para "${searchQuery}"`}
            </p>
          </div>
        )}

        {posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} pathname={blog.path} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No hay entradas disponibles.</p>
          </div>
        )}

        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </main>
    </div>
  );
}

// Interfaces
interface SearchParams {
  q?: string;
  page?: string;
}

interface HomeProps {
  searchParams?: SearchParams;
}
