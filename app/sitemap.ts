import type { MetadataRoute } from "next";
import { getEveryArticle } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { localizedLocales, localeConfig } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/platforms/", "/game-info/", "/guides/", "/help/", "/community/", "/wiki/", ...localizedLocales.map((locale) => localeConfig[locale].href), "/about/", "/contact/", "/privacy/", "/disclaimer/"];
  return [...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: siteConfig.updatedIso })), ...getEveryArticle().map((article) => ({ url: `${siteConfig.url}${article.href}`, lastModified: article.updated }))];
}
