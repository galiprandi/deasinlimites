import { Metadata } from 'next';
import { getAllPostsMetadata, searchPosts, paginatePosts } from '@/utils/markdown';
import PostCard from '@/components/PostCard';
import SearchPosts from '@/components/SearchPosts';
import Pagination from '@/components/Pagination';
import styles from './page.module.css';

// Metadatos para SEO
export const metadata: Metadata = {
  title: 'Blog DEA - Recursos y Artículos',
  description: 'Explora nuestro blog con recursos, artículos y estrategias sobre dificultades específicas de aprendizaje.',
  openGraph: {
    title: 'Blog DEA - Recursos y Artículos',
    description: 'Explora nuestro blog con recursos, artículos y estrategias sobre dificultades específicas de aprendizaje.',
    url: '/dea',
    type: 'website',
  },
};

// Definir los tipos para los parámetros de búsqueda
interface SearchParams {
  q?: string;
  page?: string;
}

// Props para la página
interface HomeProps {
  searchParams?: SearchParams;
}

export default function BlogHomePage({ searchParams = {} }: HomeProps) {
  // Extraer parámetros de consulta
  const searchQuery = searchParams.q || '';
  const currentPage = parseInt(searchParams.page || '1', 10);
  
  // Obtener todos los posts y filtrar por búsqueda si es necesario
  const filteredPosts = searchQuery 
    ? searchPosts(searchQuery)
    : getAllPostsMetadata();
  
  // Paginar los resultados
  const { posts, totalPages } = paginatePosts(filteredPosts, currentPage, 10);
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog DEA</h1>
        <p className={styles.description}>
          Recursos, artículos y estrategias sobre dificultades específicas de aprendizaje
        </p>
        <SearchPosts />
      </header>
      
      <main className={styles.main}>
        {searchQuery && (
          <div className={styles.searchInfo}>
            <p>
              {filteredPosts.length === 0
                ? `No se encontraron resultados para "${searchQuery}"`
                : `${filteredPosts.length} resultado${filteredPosts.length !== 1 ? 's' : ''} para "${searchQuery}"`}
            </p>
          </div>
        )}
        
        {posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No hay entradas disponibles.</p>
          </div>
        )}
        
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </main>
    </div>
  );
}
