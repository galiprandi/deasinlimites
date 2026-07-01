"use client";

import React, { useEffect, useState, useCallback } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) setProgress((window.scrollY / scrollHeight) * 100);
  }, []);

  useEffect(() => {
    let active = false;
    const handle = () => {
      if (!active) {
        active = true;
        requestAnimationFrame(() => { update(); active = false; });
      }
    };
    window.addEventListener("scroll", handle, { passive: true });
    update();
    return () => window.removeEventListener("scroll", handle);
  }, [update]);

  return (
    <div
      role="progressbar"
      aria-label="Progreso de lectura"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        backgroundColor: "rgba(31, 41, 55, 0.05)",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <div
        id="reading-progress-fill"
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "var(--color-secondary)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}
