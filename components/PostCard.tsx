import Link from 'next/link';
import { formatDate } from '@/utils/date'; // Crearemos esta utilidad después
import { PostMetadata } from '@/utils/markdown';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/dea/${post.slug}`} className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.meta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <div className={styles.tags}>
              {post.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
