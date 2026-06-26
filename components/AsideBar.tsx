"use client";

import React from "react";
import styles from "./AsideBar.module.css";
import Image from "next/image";
import logo from "@/public/logo_no-bg.png";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { usePathname } from "next/navigation";

const AsideBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio", exact: true },
    { href: "/dea", label: "DEA" },
    { href: "/familias", label: "Familias" },
    { href: "/docentes", label: "Docentes" },
    { href: "/papers", label: "Publicaciones" },
    { href: "/acerca-de", label: "Acerca de", desktopOnly: true },
  ];

  return (
    <div className={styles.sidebar}>
      <header className={`${styles.header} only-desktop`}>
        <Link href="/" aria-label="DEA sin límites - Ir al inicio">
          <Image src={logo} alt="" width={200} height={200} priority />
        </Link>
      </header>
      <nav className={styles.nav}>
        {navLinks.map((link) => {
          const isActive = link.exact
            ? pathname === link.href
            : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ""} ${
                link.desktopOnly ? "only-desktop" : ""
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <footer className={`${styles.footer} only-desktop`}>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default AsideBar;
