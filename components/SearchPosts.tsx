"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import styles from "./SearchPosts.module.css";

export default function SearchPosts() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Sincronizar el estado local con el parámetro de búsqueda de la URL
  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  // Debounce para evitar muchas redirecciones mientras el usuario escribe
  useEffect(() => {
    if (searchQuery === initialQuery) return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (searchQuery) {
        params.set("q", searchQuery);
      } else {
        params.delete("q");
      }
      params.delete("page"); // Reset page when searching

      const query = params.toString();
      router.replace(`${pathname}${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, router, pathname, searchParams, initialQuery]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar en el blog..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Buscar en el blog"
      />
      <div className={styles.searchIcon}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      {searchQuery && (
        <button
          className={styles.clearButton}
          onClick={() => setSearchQuery("")}
          aria-label="Limpiar búsqueda"
          title="Limpiar búsqueda"
        >
          ×
        </button>
      )}
    </div>
  );
}
