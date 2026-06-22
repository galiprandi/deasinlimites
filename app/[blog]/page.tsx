import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getAllPostsMetadata,
  paginatePosts,
  searchPosts,
} from "@/utils/markdown";
import { Suspense } from "react";
import PostCard from "@/components/PostCard";
import SearchPosts from "@/components/SearchPosts";
import Pagination from "@/components/Pagination";
import styles from "@/styles/blog-home.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { blogsConfig, getBlogConfig, siteConfig } from "@/config";
import TitleAccent from "@/components/TitleAccent";

// Generate static params for each blog/section
export async function generateStaticParams() {
  const blogSlugs = Object.keys(blogsConfig);
  return blogSlugs.map((slug) => ({
    blog: slug,
  }));
}

// Generate metadata dynamically for each blog/section
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { blog } = await params;
  const config = getBlogConfig(blog);

  if (!config) notFound();

  const pageTitle = `${siteConfig.title}: ${config.title}`;

  return {
    title: pageTitle,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: config.url,
    },
    openGraph: {
      title: pageTitle,
      description: config.description,
      url: config.url,
      type: "website",
      // Añade otras propiedades OG si las tienes (ej. images)
    },
    twitter: {
      // Añade propiedades de Twitter Cards si las usas
      title: pageTitle,
      description: config.description,
      // card: 'summary_large_image',
    },
  };
}

// Componente de Página Dinámica
export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const { blog: blogSlug } = await params;
  const { q, page } = (await searchParams) || {};
  const searchQuery = q || "";

  const config = blogsConfig[blogSlug];

  if (!config) notFound();

  const currentPage = parseInt(page || "1", 10);

  const allPosts = getAllPostsMetadata(config.contentFolder);

  // Filter posts by search query
  const filteredPosts = searchQuery
    ? searchPosts(allPosts, searchQuery)
    : allPosts;

  // Use config.pageSize for pagination
  const { posts, totalPages } = paginatePosts(
    filteredPosts,
    currentPage,
    config.pageSize
  );

  return (
    <div className={styles.container}>
      <header className={sharedStyles.hero}>
        <h1>
          <TitleAccent text={config.title} />
        </h1>
        <p>{config.description}</p>
        <Suspense fallback={<div style={{ height: "45px" }} />}>
          <SearchPosts />
        </Suspense>
      </header>

      <main className={styles.main}>
        {searchQuery && (
          <div
            className={`${sharedStyles.infoBox} ${styles.searchInfo}`}
            role="status"
            aria-live="polite"
          >
            {filteredPosts.length > 0
              ? `${filteredPosts.length} resultado${
                  filteredPosts.length !== 1 ? "s" : ""
                } para "${searchQuery}"`
              : `Búsqueda: ${searchQuery}`}
          </div>
        )}

        {posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} pathname={config.path} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>
              {searchQuery
                ? `No se encontraron resultados para "${searchQuery}". Prueba con otros términos.`
                : "No hay entradas disponibles en esta sección."}
            </p>
          </div>
        )}

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          basePath={config.path}
        />
      </main>
    </div>
  );
}

// Interfaces
interface BlogPageProps {
  params: PageParams;
  searchParams?: SearchParams;
}

type SearchParams = Promise<{
  q?: string;
  page?: string;
}>;

type PageParams = Promise<{ blog: string; slug: string }>;
