import { Metadata } from "next";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";
import { getPostBySlug } from "@/utils/markdown";
import { formatDate } from "@/utils/date";
import SharePost from "@/components/SharePost";
import calendarIcon from "@/assets/icons/calendar.svg";
import Image from "next/image";

// Config - Import from the root level to ensure consistency
import { blog } from "@/app/docentes/config"; // Update this path based on your actual folder structure

// Define dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Add a check to ensure blog.contentFolder is defined before using it
  if (!blog.contentFolder) {
    console.error("contentFolder is undefined!");
    return {
      title: "Error loading post",
      description: "Unable to load post data",
    };
  }

  const post = await getPostBySlug(blog.contentFolder, params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${blog.url}/${params.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Add error handling to prevent runtime errors if contentFolder is undefined
  if (!blog.contentFolder) {
    return (
      <div className={styles.container}>
        <div className={styles.article}>
          <h1>Error loading post</h1>
          <p>
            The blog configuration is invalid. Content folder path is missing.
          </p>
          <div className={styles.backToHome}>
            <Link href="/docentes" className={styles.backLink}>
              ← Volver al blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Await the post data
  const post = await getPostBySlug(blog.contentFolder, params.slug);

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header>
          <h1>{post.title}</h1>
          {post.excerpt && (
            <div className={styles.excerpt}>
              <p>{post.excerpt}</p>
            </div>
          )}
          <div className={styles.meta}>
            <span>
              <Image
                src={calendarIcon}
                alt={formatDate(post.date)}
                width={15}
                height={15}
              />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>

            {post.tags && post.tags.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map((tag: string) => (
                  <Link key={tag} href={`./?q=${tag}`} className="tag">
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        <hr />
        <br />

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <SharePost url={`${blog.url}/${params.slug}`} />

      <div className={styles.backToHome}>
        <Link href={blog.path} className={styles.backLink}>
          ← Volver al blog
        </Link>
      </div>
    </div>
  );
}
