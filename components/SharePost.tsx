"use client";

import { useState } from "react";
import styles from "./SharePost.module.css";
import Image from "next/image";
import linkedin from "@/assets/icons/linkedin.svg";
import x from "@/assets/icons/x.svg";
import facebook from "@/assets/icons/facebook.svg";
import clipboard from "@/assets/icons/clipboard.svg";

export default function SharePost({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el enlace: ", err);
    }
  };

  return (
    <div className={styles.share}>
      <p className={styles.shareText}>
        Si te resultó interesante, comparte este artículo:
      </p>
      <div className={styles.shareButtons}>
        <div className={styles.copyContainer}>
          <button
            onClick={handleCopy}
            className={styles.shareButton}
            aria-label="Copiar enlace al portapapeles"
            title="Copiar enlace"
          >
            <Image src={clipboard} alt="Copiar" width={32} height={32} />
          </button>
          {copied && <span className={styles.copyFeedback}>¡Copiado!</span>}
        </div>

        <a
          href={`https://www.linkedin.com/share/link?mini=true&url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="Compartir en LinkedIn"
          title="Compartir en LinkedIn"
        >
          <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
        </a>

        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="Compartir en X"
          title="Compartir en X"
        >
          <Image src={x} alt="X" width={32} height={32} />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="Compartir en Facebook"
          title="Compartir en Facebook"
        >
          <Image src={facebook} alt="Facebook" width={32} height={32} />
        </a>
      </div>
    </div>
  );
}
