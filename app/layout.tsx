import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DocumentLanguage } from "@/components/document-language";
import { LocalizedSkipLink } from "@/components/localized-skip-link";
import { getEveryArticle } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GRAIN ROT Wiki, Guides & Platform Status",
    template: "%s | GRAIN ROT Wiki",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "GRAIN ROT Wiki, Guides & Platform Status",
    description: siteConfig.description,
    images: [{ url: "/images/og-cover.webp", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRAIN ROT Wiki, Guides & Platform Status",
    description: siteConfig.description,
    images: ["/images/og-cover.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const articles = getEveryArticle().map(({ content, toc, ...meta }) => meta);

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <DocumentLanguage />
        <LocalizedSkipLink />
        <SiteHeader articles={articles} />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
