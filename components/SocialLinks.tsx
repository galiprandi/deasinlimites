import Image from "next/image";
import linkedin from "@/assets/icons/linkedin.svg";
import email from "@/assets/icons/email.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import styles from "./SocialLinks.module.css";
import { socialLinks } from "@/config";

const SocialLinks = () => {
  return (
    <section className={styles.socialLinks}>
        
        <a href={socialLinks.linkedin.src} title={socialLinks.linkedin.alt} target="_blank" rel="noopener noreferrer">
            <Image
                src={linkedin}
                alt={socialLinks.linkedin.alt}
                width={32}
                height={32}
            />
        </a>
        <a href={socialLinks.email.src} title={socialLinks.email.alt} target="_blank" rel="noopener noreferrer">
            <Image
                src={email}
                alt={socialLinks.email.alt}
                width={32}
                height={32}
            />
        </a>
        <a href={socialLinks.whatsapp.src} title={socialLinks.whatsapp.alt} target="_blank" rel="noopener noreferrer">
            <Image
                src={whatsapp}
                alt={socialLinks.whatsapp.alt}
                width={32}
                height={32}
            />
        </a>
     
    </section>
  );
};

export default SocialLinks;