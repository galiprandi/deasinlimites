"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export default function Pagination({
  totalPages,
  currentPage,
  basePath,
}: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${basePath}?${params.toString()}`;
  };

  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Paginación">
      <ul className={styles.paginationList}>
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
