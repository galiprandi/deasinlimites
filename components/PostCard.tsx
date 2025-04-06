import Link from "next/link";
import { formatDate } from "@/utils/date"; // Crearemos esta utilidad después
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
            <span>
              <Image
                src={calendarIcon}
                alt={formatDate(post.date)}
                width={15}
                height={15}
              />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className={styles.excerpt}>{post.excerpt}</p>
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
