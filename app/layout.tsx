import "./globals.css";
import type { Metadata } from "next";
import AsideBar from "@/components/AsideBar";
import styles from "./layout.module.css";
import { siteConfig } from "@/config";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${styles.layout}`}>
        <AsideBar />
        <main className={styles.main}>
          <div className="logo only-mobile">
            <Image src={logo} alt="Logo" width={200} height={200} />
          </div>
          {children}
          <footer>
            <div className="t-center">
              <small>
                Copyright © 2025 - Todos los derechos reservados por{" "}
                {siteConfig.title}
              </small>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
