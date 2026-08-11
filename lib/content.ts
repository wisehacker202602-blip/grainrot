import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { articleOrder, getArticleHref, type Category } from "@/lib/site";
import type { ArticleLocale } from "@/lib/i18n";

export type { ArticleLocale } from "@/lib/i18n";

const contentDirectory = path.join(process.cwd(), "content", "guides");

export type EvidenceLevel = "Official" | "Official + community" | "Community observed";

export type ArticleMeta = {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: Category;
  intent: string;
  answer: string;
  evidence: EvidenceLevel;
  updated: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  locale: ArticleLocale;
  translationKey?: "flashlight" | "spark-movement";
  featured?: boolean;
  related?: string[];
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type Article = ArticleMeta & {
  content: string;
  toc: TocItem[];
};

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseToc(content: string): TocItem[] {
  return content
    .split("\n")
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/)!;
      const text = match[2].replace(/[*_`]/g, "").trim();
      return {
        id: slugifyHeading(text),
        text,
        level: match[1].length as 2 | 3,
      };
    });
}

function readArticleFile(fileName: string): Article {
  const filePath = path.join(contentDirectory, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const source = data as Omit<ArticleMeta, "href" | "locale"> & { locale?: ArticleLocale };

  return {
    ...source,
    href: getArticleHref(source.slug),
    locale: source.locale ?? "en",
    content,
    toc: parseToc(content),
  };
}

function priorityFor(slug: string) {
  const index = articleOrder.indexOf(slug as (typeof articleOrder)[number]);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

export function getEveryArticle(): Article[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readArticleFile)
    .sort((a, b) => priorityFor(a.slug) - priorityFor(b.slug) || a.title.localeCompare(b.title));
}

export function getAllArticles(locale: ArticleLocale = "en"): Article[] {
  const localizedOrder = ["flashlight", "spark-movement"];
  return getEveryArticle()
    .filter((article) => article.locale === locale)
    .sort((a, b) => {
      if (locale === "en") return 0;
      const aIndex = localizedOrder.indexOf(a.translationKey ?? "");
      const bIndex = localizedOrder.indexOf(b.translationKey ?? "");
      return (aIndex === -1 ? localizedOrder.length : aIndex) - (bIndex === -1 ? localizedOrder.length : bIndex);
    });
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getEveryArticle().find((article) => article.slug === slug);
}

export function getArticleBySegments(segments: string[]): Article | undefined {
  const href = `/${segments.join("/")}/`;
  return getEveryArticle().find((article) => article.href === href);
}

export function getArticlesByCategory(category: Category): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const all = getAllArticles(article.locale).filter((item) => item.slug !== article.slug);
  const explicit = (article.related ?? [])
    .map((slug) => all.find((item) => item.slug === slug))
    .filter((item): item is Article => Boolean(item));
  const sameCategory = all.filter(
    (item) => item.category === article.category && !explicit.some((entry) => entry.slug === item.slug),
  );

  return [...explicit, ...sameCategory].slice(0, limit);
}
