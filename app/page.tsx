import PostCard from "@/components/PostCard";
import SocialLinks from "@/components/SocialLinks";
import TitleAccent from "@/components/TitleAccent";
import { getAllPostsMetadata } from "@/utils/markdown";
import Image from "next/image";
import logo from "@/public/logo.png";
import { siteConfig } from "@/config";
import styles from "./page.module.css";
import sharedStyles from "@/styles/shared.module.css";

export default function Home() {
  const postsDea = getAllPostsMetadata("dea").slice(0, 3);
  const postsFamilias = getAllPostsMetadata("familias").slice(0, 3);
  const postsDocentes = getAllPostsMetadata("docentes").slice(0, 3);

  return (
    <div className={styles.container}>
      <header className={sharedStyles.hero}>
        <div className="logo only-mobile">
          <Image src={logo} alt={siteConfig.title} width={230} height={230} />
        </div>
        <h1>
          <TitleAccent text={`Bienvenido a ${siteConfig.title}`} />
        </h1>
        <p>
          {siteConfig.description ||
            `${siteConfig.title} es un blog dirigido a padres y docentes de niños con dificultades específicas de aprendizaje. Su objetivo es derribar barreras educativas, brindando estrategias prácticas para que los niños puedan progresar con libertad y superar obstáculos en su aprendizaje, fomentando así un entorno inclusivo y colaborativo.`}
        </p>
      </header>

      <main>
        <section>
          <h2 className={sharedStyles.infoBox}>
            <TitleAccent text="Dificultades específicas del aprendizaje" />
          </h2>
          <div className={styles.contentGrid}>
            {postsDea.map((post) => (
              <PostCard key={post.slug} post={post} pathname={"/dea"} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={sharedStyles.infoBox}>
            <TitleAccent text="Estrategias para familias" />
          </h2>
          <div className={styles.contentGrid}>
            {postsFamilias.map((post) => (
              <PostCard key={post.slug} post={post} pathname={"/familias"} />
            ))}
          </div>
        </section>

        <section>
          <h2 className={sharedStyles.infoBox}>
            <TitleAccent text="Estrategias para docentes" />
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
