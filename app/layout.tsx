import "./globals.css";
import type { Metadata, Viewport } from "next";
import AsideBar from "@/components/AsideBar";
import styles from "./layout.module.css";
import { blogsConfig, siteConfig } from "@/config";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: blogsConfig.dea.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.title,
  publisher: siteConfig.title,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: "/logo_social.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: {
      url: "/logo_social.png",
      width: 1200,
      height: 630,
      alt: siteConfig.title,
    },
    creator: siteConfig.author.name,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <AsideBar />
        <main className={styles.main} id="main-content">
          {children}
          <footer className={styles.footer}>
            <div className="t-center">
              <p>
                Copyright © {new Date().getFullYear()} —{" "}
                <strong>{siteConfig.title}</strong>
              </p>
              <small>Derribando barreras educativas con amor y compromiso.</small>
            </div>
          </footer>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
