import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { getArticleBySegments, getEveryArticle } from "@/lib/content";

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

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: article.href,
      languages: article.locale === "es" ? { es: article.href, en: "/" } : undefined,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: "article",
      locale: article.locale === "es" ? "es_ES" : "en_US",
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
