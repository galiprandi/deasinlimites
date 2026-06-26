"use client";

import { useEffect, useState } from "react";
import styles from "./ReadingProgressBar.module.css";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let requestRunning = false;

    const updateProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
      requestRunning = false;
    };

    const handleScroll = () => {
      if (!requestRunning) {
        requestRunning = true;
        requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.progressContainer}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Progreso de lectura"
    >
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
