"use client";
import { useEffect, useState } from "react";
export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setProgress(Math.min(100, Math.max(0, (window.scrollY / h) * 100)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener("scroll", onScroll);
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      role="progressbar"
      aria-label="Progreso de lectura"
      aria-valuenow={Math.round(progress)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "4px",
        backgroundColor: "var(--color-secondary)",
        zIndex: 1000,
        transition: "width 0.1s ease-out",
        boxShadow: "0 1px 4px rgba(var(--color-secondary-rgb), 0.3)",
      }}
      id="reading-progress-fill"
    />
  );
}
