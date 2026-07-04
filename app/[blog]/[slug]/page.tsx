import { Metadata } from "next";
import styles from "@/styles/markdown.module.css";
import sharedStyles from "@/styles/shared.module.css";
import TitleAccent from "@/components/TitleAccent";
import Link from "next/link";
import { getPostBySlug } from "@/utils/markdown";
import { formatDate } from "@/utils/date";
import SharePost from "@/components/SharePost";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import calendarIcon from "@/assets/icons/calendar.svg";
import clockIcon from "@/assets/icons/clock.svg";
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
  const { title, summary, date } = await getPostBySlug(contentFolder, slug);

  return {
    title,
    description: summary,
    alternates: {
      canonical: `${url}/${slug}`,
    },
    openGraph: {
      title,
      description: summary,
      url: `${url}/${slug}`,
      type: "article",
      publishedTime: date,
    },
    twitter: {
      title,
      description: summary,
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { blog, slug } = await params;

  const config = blogsConfig[blog];
  if (!config) notFound();
  const { contentFolder } = config;

  const post = await getPostBySlug(contentFolder, slug);
  const { title, summary, date, content, tags, readingTime } = post;

  return (
    <div className={styles.container}>
      <ReadingProgressBar />
      <article className={styles.article}>
        <header className={sharedStyles.hero}>
          <nav className={styles.backNav}>
            <Link href={`/${blog}`} className="pill-link">
              <span aria-hidden="true" className="arrow-back">←</span> Volver a {config.title}
            </Link>
          </nav>

          <h1>
            <TitleAccent text={title} />
          </h1>

          {summary && (
            <div className={sharedStyles.summary}>
              <p>{summary}</p>
            </div>
          )}

          <div className={sharedStyles.meta}>
            <span className={sharedStyles.date}>
              <Image
                src={calendarIcon}
                alt={formatDate(date)}
                width={16}
                height={16}
              />
              <time dateTime={date}>{formatDate(date)}</time>
            </span>

            {readingTime && (
              <span className={sharedStyles.readingTime}>
                <Image
                  src={clockIcon}
                  alt="Tiempo de lectura"
                  width={16}
                  height={16}
                />
                {readingTime} min de lectura
              </span>
            )}

            {tags && tags.length > 0 && (
              <div className={sharedStyles.tags}>
                {tags.map((tag: string) => (
                  <Link key={tag} href={`./?q=${tag}`} className="tag">
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className={styles.bodyContent}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>

      <SharePost url={`${config.url}/${slug}`} />
    </div>
  );
}

// Interfaces

type PageParams = Promise<{ blog: string; slug: string }>;
