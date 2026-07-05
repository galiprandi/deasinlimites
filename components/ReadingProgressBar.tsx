"use client";
import { useEffect, useState } from "react";

/**
 * ReadingProgressBar - Visual feedback of reading progress based on scroll position.
 * Uses requestAnimationFrame for 60fps performance.
 */
export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      if (scrollHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100)));
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
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
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <div
        id="reading-progress-fill"
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "var(--color-accent)",
          boxShadow: "0 0 8px rgba(var(--color-accent-rgb), 0.5)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}
