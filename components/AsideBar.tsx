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
    <aside className={styles.aside}>
      <header className="only-desktop">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </header>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);

            return (
              <li
                key={link.href}
                className={`${link.desktopOnly ? "only-desktop" : ""} ${
                  isActive ? styles.active : ""
                }`}
              >
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <footer>
        <SocialLinks />
      </footer>
    </aside>
  );
};

export default AsideBar;
