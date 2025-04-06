"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./SearchPosts.module.css";

export default function SearchPosts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Debounce para evitar muchas redirecciones mientras el usuario escribe
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        router.push(`/dea?q=${encodeURIComponent(searchQuery)}`);
      } else if (initialQuery) {
        router.push("/dea");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, router, initialQuery]);

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
        >
          ×
        </button>
      )}
    </div>
  );
}
