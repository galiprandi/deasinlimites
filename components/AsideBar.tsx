import React from "react";
import styles from "./AsideBar.module.css";
import Image from "next/image";
import logo from "@/public/logo_no-bg.png";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const AsideBar = () => {
  return (
    <aside className={styles.aside}>
      <header className="only-desktop">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/dea">DEA</Link>
          </li>
          <li>
            <Link href="/familias">Familias</Link>
          </li>
          <li>
            <Link href="/docentes">Docentes</Link>
          </li>
          <li className="only-desktop">
            <Link href="/acerca-de">Acerca de</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <SocialLinks />
      </footer>
    </aside>
  );
};

export default AsideBar;
