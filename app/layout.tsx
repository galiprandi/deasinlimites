import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsideBar from "@/components/AsideBar";
import styles from "./layout.module.css";
import { siteConfig } from "@/config";

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
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
