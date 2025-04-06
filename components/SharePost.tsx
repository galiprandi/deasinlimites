import styles from "./SharePost.module.css";
import Image from "next/image";
import linkedin from "@/assets/icons/linkedin.svg";
import x from "@/assets/icons/x.svg";
import facebook from "@/assets/icons/facebook.svg";

export default function SharePost({ url }: { url: string }) {
  return (
    <div className={styles.share}>
      <p className={styles.shareText}>
        Si te resultó interesante, comparte este artículo:
      </p>
      <div className={styles.shareButtons}>
        {/* Share on LinkedIn */}
        <a
          href={`https://www.linkedin.com/share/link?mini=true&url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
        </a>
        {/* Share on X */}
        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          <Image src={x} alt="X" width={32} height={32} />
        </a>
        {/* Share on Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          <Image src={facebook} alt="Facebook" width={32} height={32} />
        </a>
      </div>
    </div>
  );
}
