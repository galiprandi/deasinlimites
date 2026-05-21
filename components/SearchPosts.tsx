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
