import { Metadata } from 'next';
import Link from 'next/link';
import { getPostBySlug, PostMetadata } from '@/utils/markdown';
import { formatDate } from '@/utils/date';
import styles from './page.module.css';

// Define dynamic metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/dea/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // Await the post data
  const post = await getPostBySlug(params.slug);
  
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <time className={styles.date} dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          
          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag: string) => (
                <Link key={tag} href={`/dea?q=${tag}`} className={styles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>
        
        {post.excerpt && (
          <div className={styles.excerpt}>
            <p>{post.excerpt}</p>
          </div>
        )}
        
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
                href={`/dea/${related.slug}`}
                className={styles.relatedLink}
              >
                {related.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className={styles.backToHome}>
        <Link href="/dea" className={styles.backLink}>
          ← Volver al blog
        </Link>
      </div>
      
      <div className={styles.share}>
        <p className={styles.shareText}>¿Te resultó útil? Comparte este artículo:</p>
        <div className={styles.shareButtons}>
          <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourdomain.com/dea/${params.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
          >
            Twitter
          </a>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourdomain.com/dea/${params.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}