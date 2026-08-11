import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale?: string;
  languages?: Record<string, string>;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  locale = "en_US",
  languages,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      locale,
      images: [{ url: "/images/og-cover.webp", width: 1200, height: 675 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-cover.webp"],
    },
  };
}
