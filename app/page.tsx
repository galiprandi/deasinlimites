import PostCard from "@/components/PostCard";
import SocialLinks from "@/components/SocialLinks";
import { getAllPostsMetadata } from "@/utils/markdown";
import Image from "next/image";
import logo from "@/public/logo.png";
import { siteConfig } from "@/config";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";

export default function Home() {
  const postsDea = getAllPostsMetadata("/content/dea").slice(0, 3);
  const postsFamilias = getAllPostsMetadata("/content/familias").slice(0, 3);
  const postsDocentes = getAllPostsMetadata("/content/docentes").slice(0, 3);

  const renderTitleWithAccent = (title: string) => {
    const words = title.trim().split(" ");
    if (words.length <= 1) return <span>{title}</span>;
    const lastWord = words.pop();
    const firstPart = words.join(" ");
    return (
      <>
        {firstPart} <span>{lastWord}</span>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <header className={sharedStyles.hero}>
        <div className="logo only-mobile">
          <Image src={logo} alt={siteConfig.title} width={230} height={230} />
        </div>
        <h1>
          Bienvenido a <span>{siteConfig.title}</span>
        </h1>
        <p>
          {siteConfig.description ||
            `${siteConfig.title} es un blog dirigido a padres y docentes de niños con dificultades específicas de aprendizaje. Su objetivo es derribar barreras educativas, brindando estrategias prácticas para que los niños puedan progresar con libertad y superar obstáculos en su aprendizaje, fomentando así un entorno inclusivo y colaborativo.`}
        </p>
      </header>

      <main>
        <section>
          <h2 className={styles.sectionTitle}>
            {renderTitleWithAccent("Dificultades específicas del aprendizaje")}
          </h2>
          <div className={styles.contentGrid}>
            {postsDea.map((post) => (
              <PostCard key={post.slug} post={post} pathname={"/dea"} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>
            {renderTitleWithAccent("Estrategias para familias")}
          </h2>
          <div className={styles.contentGrid}>
            {postsFamilias.map((post) => (
              <PostCard key={post.slug} post={post} pathname={"/familias"} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>
            {renderTitleWithAccent("Estrategias para docentes")}
          </h2>
          <div className={styles.contentGrid}>
            {postsDocentes.map((post) => (
              <PostCard key={post.slug} post={post} pathname={"/docentes"} />
            ))}
          </div>
        </section>
      </main>

      <section className="only-mobile">
        <SocialLinks />
      </section>
    </div>
  );
}
