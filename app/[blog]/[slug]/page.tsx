import { Metadata } from "next";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";
import { getPostBySlug } from "@/utils/markdown";
import { formatDate } from "@/utils/date";
import SharePost from "@/components/SharePost";
import calendarIcon from "@/assets/icons/calendar.svg";
import Image from "next/image";
import { blogsConfig } from "@/config";
import { notFound } from "next/navigation";

// Define dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { blog, slug } = await params;

  const config = blogsConfig[blog];
  if (!config) notFound();
  const { contentFolder, url } = config;
  const { title, excerpt, date } = await getPostBySlug(contentFolder, slug);

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      url: `${url}/${slug}`,
      type: "article",
      publishedTime: date,
    },
    twitter: {
      title,
      description: excerpt,
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { blog, slug } = await params;

  const config = blogsConfig[blog];
  if (!config) notFound();
  const { contentFolder } = config;

  const post = await getPostBySlug(contentFolder, slug);
  const { title, excerpt, date, content, tags } = post;

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header>
          <h1>{title}</h1>
          {excerpt && (
            <div className={styles.excerpt}>
              <p>{excerpt}</p>
            </div>
          )}
          <div className={styles.meta}>
            <span>
              <Image
                src={calendarIcon}
                alt={formatDate(date)}
                width={15}
                height={15}
              />
              <time dateTime={date}>{formatDate(date)}</time>
            </span>

            {tags && tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map((tag: string) => (
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
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      <SharePost url={`${config.url}/${slug}`} />
    </div>
  );
}

// Interfaces
interface PageParams {
  blog: string;
  slug: string;
}
