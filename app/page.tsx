import PostCard from "@/components/PostCard";
import SocialLinks from "@/components/SocialLinks";
import { getAllPostsMetadata } from "@/utils/markdown";
import Image from "next/image";
import logo from "@/public/logo.png";
import { siteConfig } from "@/config";

export default function Home() {
  const postsDea = getAllPostsMetadata("/content/dea");

  return (
    <div>
      <div className="logo only-mobile">
        <Image src={logo} alt="Logo" width={230} height={230} />
      </div>
      <h1>
        Bienvenido a <span className="t-accent">{siteConfig.title}</span>
      </h1>
      <p className="t-large">
        {siteConfig.description} es un blog dirigido a padres y docentes de
        niños con dificultades específicas de aprendizaje. Su objetivo es
        derribar barreras educativas, brindando estrategias prácticas para que
        los niños puedan progresar con libertad y superar obstáculos en su
        aprendizaje, fomentando así un entorno inclusivo y colaborativo.
      </p>
      <br />
      <hr />
      <br />
      <section>
        <h2>Dificultades específicas del aprendizaje</h2>
        <div className="grid">
          {postsDea.map((post) => (
            <PostCard key={post.slug} post={post} pathname={"/dea"} />
          ))}
        </div>
      </section>

      <section className="only-mobile">
        <SocialLinks />
      </section>
    </div>
  );
}
