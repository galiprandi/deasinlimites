"use client";
import { useEffect, useState } from "react";
import styles from "./ReadingProgressBar.module.css";
export default function ReadingProgressBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let t = false;
    const u = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setP((window.scrollY / h) * 100);
      t = false;
    };
    const s = () => { if (!t) { window.requestAnimationFrame(u); t = true; } };
    window.addEventListener("scroll", s, { passive: true });
    u();
    return () => window.removeEventListener("scroll", s);
  }, []);
  return <div className={styles.container} role="progressbar" aria-valuenow={Math.round(p)} aria-label="Progreso de lectura"><div className={styles.bar} style={{ width: `${p}%` }} /></div>;
}
