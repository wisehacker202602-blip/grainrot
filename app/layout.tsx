import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DocumentLanguage } from "@/components/document-language";
import { LocalizedSkipLink } from "@/components/localized-skip-link";
import { LocaleContextProvider } from "@/components/locale-context";
import { getEveryArticle } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const googleAnalyticsId = "G-1X7ES1XVD0";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GRAIN ROT Wiki: Game Guides, Co-op, Enemies & Fixes",
    template: "%s | GRAIN ROT Wiki",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "GRAIN ROT Wiki: Game Guides, Co-op, Enemies & Fixes",
    description: siteConfig.description,
    images: [{ url: "/images/og-cover.webp", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRAIN ROT Wiki: Game Guides, Co-op, Enemies & Fixes",
    description: siteConfig.description,
    images: ["/images/og-cover.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const articles = getEveryArticle().map(({ content, toc, ...meta }) => meta);
  const translations = articles
    .filter((article) => article.translationKey)
    .map(({ href, locale, translationKey }) => ({ href, locale, translationKey }));

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <LocaleContextProvider translations={translations}>
          <DocumentLanguage />
          <LocalizedSkipLink />
          <SiteHeader articles={articles} />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </LocaleContextProvider>
      </body>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
