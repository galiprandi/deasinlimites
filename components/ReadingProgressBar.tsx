"use client";
import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const scrollHeight = h.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) setProgress((window.scrollY / scrollHeight) * 100);
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", height: "4px",
        backgroundColor: "rgba(var(--color-accent-rgb), 0.1)", zIndex: 1000, pointerEvents: "none",
      }}
      role="progressbar" aria-label="Progreso de lectura"
      aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}
    >
      <div
        id="reading-progress-fill"
        style={{
          height: "100%", width: `${progress}%`,
          backgroundColor: "var(--color-accent)", transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}
