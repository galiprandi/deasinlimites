"use client";
import { useEffect, useState } from "react";
import styles from "./ReadingProgressBar.module.css";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement, s = h.scrollHeight - h.clientHeight;
      setProgress(s > 0 ? Math.min((window.scrollY / s) * 100, 100) : 100);
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={styles.container} role="progressbar" aria-valuenow={Math.round(progress)} aria-label="Progreso de lectura">
      <div id="reading-progress-fill" className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
