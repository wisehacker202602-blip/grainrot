import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/content";
import { localeConfig, getLocaleIndexAlternates, type ArticleLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

export function createLocaleHubMetadata(locale: Exclude<ArticleLocale, "en">): Metadata {
  const config = localeConfig[locale];
  return createPageMetadata({
    title: config.hubTitle,
    description: config.hubDescription,
    path: config.href,
    locale: config.ogLocale,
    languages: getLocaleIndexAlternates(),
  });
}

export function LocaleHub({ locale }: { locale: Exclude<ArticleLocale, "en"> }) {
  const config = localeConfig[locale];
  const articles = getAllArticles(locale);

  return (
    <div lang={config.htmlLang}>
      <header className="page-hero page-hero--hub">
        <div className="shell">
          <nav className="breadcrumb" aria-label={config.ui.breadcrumb}><Link href="/">English</Link><span>/</span><span>{config.nativeName}</span></nav>
          <span className="kicker"><span />{config.hubKicker}</span>
          <h1>{config.hubHeading}</h1>
          <p>{config.hubIntro}</p>
        </div>
      </header>
      <section className="section-band">
        <div className="shell category-directory__list">
          {articles.map((article, index) => (
            <Link href={article.href} key={article.slug}>
              <span className="category-directory__rank">{String(index + 1).padStart(2, "0")}</span>
              <span className="category-directory__copy"><small>{article.intent}</small><strong>{article.title}</strong><em>{article.answer}</em></span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
