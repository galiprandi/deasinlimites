import { Metadata } from "next";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";
import { getPostBySlug, PostMetadata } from "@/utils/markdown";
import { formatDate } from "@/utils/date";
import { blog, contentForlder } from "../config";
import SharePost from "@/components/SharePost";
import calendarIcon from "@/assets/icons/calendar.svg";
import Image from "next/image";

// Define dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(contentForlder, params.slug);

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
  // Await the post data
  const post = await getPostBySlug(contentForlder, params.slug);

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

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <div className={styles.related}>
          <h2 className={styles.relatedTitle}>Artículos relacionados</h2>
          <div className={styles.relatedGrid}>
            {post.relatedPosts.map((related: PostMetadata) => (
              <Link
                key={related.slug}
                href={`${blog.url}/${related.slug}`}
                className={styles.relatedLink}
              >
                {related.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <SharePost url={`${blog.url}/${params.slug}`} />

      <div className={styles.backToHome}>
        <Link href={blog.url} className={styles.backLink}>
          ← Volver al blog
        </Link>
      </div>
    </div>
  );
}
