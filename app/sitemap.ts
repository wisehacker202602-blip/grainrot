import type { MetadataRoute } from "next";
import { getEveryArticle } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/platforms/", "/game-info/", "/guides/", "/help/", "/community/", "/wiki/", "/es/", "/about/", "/contact/", "/privacy/"];
  return [...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: siteConfig.updatedIso })), ...getEveryArticle().map((article) => ({ url: `${siteConfig.url}${article.href}`, lastModified: article.updated }))];
}
