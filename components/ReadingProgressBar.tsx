"use client";
import React, { useEffect, useState, useCallback } from "react";

export default function ReadingProgressBar() {
  const [p, setP] = useState(0);
  const up = useCallback(() => {
    const t = document.documentElement.scrollHeight - window.innerHeight;
    if (t > 0) setP((window.scrollY / t) * 100);
  }, []);

  useEffect(() => {
    let tick = false;
    const scroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => { update(); tick = false; });
        tick = true;
      }
    };
    const update = () => up();
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", update);
    up();
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", update);
    };
  }, [up]);

  return (
    <div role="progressbar" aria-label="Progreso de lectura" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "4px", zIndex: 1000, pointerEvents: "none" }}>
      <div id="reading-progress-fill" style={{ height: "100%", width: `${p}%`, backgroundColor: "var(--color-accent)", transition: "width 0.1s ease-out", boxShadow: "0 0 8px rgba(var(--color-accent-rgb), 0.5)" }} />
    </div>
  );
}
