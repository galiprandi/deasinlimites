'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Mantenemos los parámetros de búsqueda actuales al cambiar de página
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  // No mostrar paginación si solo hay una página
  if (totalPages <= 1) return null;
  
  return (
    <nav className={styles.pagination} aria-label="Paginación">
      <ul className={styles.paginationList}>
        {/* Botón Anterior */}
        <li>
          {currentPage > 1 ? (
            <Link
              href={createPageURL(currentPage - 1)}
              className={styles.paginationLink}
              aria-label="Ir a la página anterior"
            >
              &laquo; Anterior
            </Link>
          ) : (
            <span className={`${styles.paginationLink} ${styles.disabled}`}>
              &laquo; Anterior
            </span>
          )}
        </li>
        
        {/* Números de página */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span className={`${styles.paginationLink} ${styles.active}`}>
                {page}
              </span>
            ) : (
              <Link
                href={createPageURL(page)}
                className={styles.paginationLink}
                aria-label={`Ir a la página ${page}`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
        
        {/* Botón Siguiente */}
        <li>
          {currentPage < totalPages ? (
            <Link
              href={createPageURL(currentPage + 1)}
              className={styles.paginationLink}
              aria-label="Ir a la página siguiente"
            >
              Siguiente &raquo;
            </Link>
          ) : (
            <span className={`${styles.paginationLink} ${styles.disabled}`}>
              Siguiente &raquo;
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
