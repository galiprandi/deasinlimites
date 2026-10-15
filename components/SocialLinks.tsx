import Image from "next/image";
import linkedin from "@/assets/icons/linkedin.svg";
import email from "@/assets/icons/email.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import styles from "./SocialLinks.module.css";
import { socialLinks } from "@/config";

const SocialLinks = () => {
  return (
    <nav className={styles.socialLinks} aria-label="Redes sociales">
        
        <a
          href={socialLinks.linkedin.src}
          title={socialLinks.linkedin.alt}
          aria-label={socialLinks.linkedin.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={linkedin}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
          />
        </a>
        <a
          href={socialLinks.email.src}
          title={socialLinks.email.alt}
          aria-label={socialLinks.email.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={email} alt="" aria-hidden="true" width={32} height={32} />
        </a>
        <a
          href={socialLinks.whatsapp.src}
          title={socialLinks.whatsapp.alt}
          aria-label={socialLinks.whatsapp.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={whatsapp}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
          />
        </a>
     
    </nav>
  );
};

export default SocialLinks;