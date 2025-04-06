import PostCard from "@/components/PostCard";
import SocialLinks from "@/components/SocialLinks";
import { getAllPostsMetadata } from "@/utils/markdown";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Home() {
  const postsDea = getAllPostsMetadata("/content/dea");

  return (
    <div>
      <div className="logo only-mobile">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </div>
      <h1>
        Bienvenido a <span className="t-accent">Puentes en el Aprendizaje</span>
      </h1>
      <p className="t-large">
        Creando Puentes es un blog dirigido a padres y docentes de niños con
        dificultades específicas de aprendizaje (DEA). Su objetivo es derribar
        barreras educativas, fomentando la conexión y el apoyo a estos
        estudiantes, y promoviendo un entorno inclusivo y colaborativo.
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
