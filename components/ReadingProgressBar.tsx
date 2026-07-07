"use client";

import { useEffect, useState } from "react";
import styles from "./ReadingProgressBar.module.css";

export default function ReadingProgressBar() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h <= 0 ? 100 : (window.scrollY / h) * 100);
    };
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className={styles.container} role="progressbar" aria-label="Progreso">
      <div className={styles.bar} style={{ width: `${w}%` }} id="reading-progress-fill" />
    </div>
  );
}
