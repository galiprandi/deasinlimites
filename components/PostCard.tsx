import Link from "next/link";
import { formatDate } from "@/utils/date";
import { PostMetadata } from "@/utils/markdown";
import styles from "./PostCard.module.css";
import Image from "next/image";
import calendarIcon from "@/assets/icons/calendar.svg";

export default function PostCard({ post, pathname }: PostCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`${pathname}/${post.slug}`} className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Image
                src={calendarIcon}
                alt=""
                width={15}
                height={15}
                aria-hidden="true"
              />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className={styles.metaItem}>
              <span className={styles.readingTime} aria-label={`Tiempo de lectura estimado: ${post.readingTime} minutos`}>
                {post.readingTime} min de lectura
              </span>
            </span>
            <div className={styles.tags}>
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className={styles.summary}>{post.summary}</p>
          <div className={styles.readMore}>
            Leer más <span className={styles.arrowIcon} aria-hidden="true">→</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Interfaces
interface PostCardProps {
  post: PostMetadata;
  pathname: string;
}
