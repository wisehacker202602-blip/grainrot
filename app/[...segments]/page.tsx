import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { getArticleBySegments, getEveryArticle } from "@/lib/content";
import { localeConfig } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getEveryArticle().map((article) => ({
    segments: article.href.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}): Promise<Metadata> {
  const { segments } = await params;
  const article = getArticleBySegments(segments);
  if (!article) return {};
  const translations = article.translationKey
    ? getEveryArticle().filter((item) => item.translationKey === article.translationKey)
    : [];
  const languages = translations.length > 1
    ? {
        "x-default": translations.find((item) => item.locale === "en")?.href ?? "/",
        ...Object.fromEntries(translations.map((item) => [localeConfig[item.locale].hreflang, item.href])),
      }
    : undefined;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: article.href,
      languages,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: article.href,
      images: [article.image],
      type: "article",
      locale: localeConfig[article.locale].ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticleRoute({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}) {
  const { segments } = await params;
  const article = getArticleBySegments(segments);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
