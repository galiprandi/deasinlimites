"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="reading-progress-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        backgroundColor: "transparent",
        zIndex: 1000,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <div
        id="reading-progress-fill"
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "var(--color-secondary)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}
