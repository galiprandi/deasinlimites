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
            <div className={styles.metaLeft}>
              <span>
                <Image
                  src={calendarIcon}
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={15}
                />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {post.readingTime} min
              </span>
            </div>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
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
