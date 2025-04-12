import "./globals.css";
import type { Metadata, Viewport } from "next";
import AsideBar from "@/components/AsideBar";
import styles from "./layout.module.css";
import { siteConfig } from "@/config";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "DEA sin límites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
          {children}
          <footer>
            <div className="t-center">
              <small>
                Copyright 2025 - Todos los derechos reservados por{" "}
                {siteConfig.title}
              </small>
            </div>
          </footer>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
