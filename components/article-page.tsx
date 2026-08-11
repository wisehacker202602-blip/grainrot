import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, ExternalLink, List, RefreshCw } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArticleCard } from "@/components/article-card";
import { EvidenceBadge } from "@/components/evidence-badge";
import { mdxComponents } from "@/components/mdx-components";
import type { Article } from "@/lib/content";
import { getRelatedArticles } from "@/lib/content";
import { categoryHrefs, getCategoryLabel, siteConfig } from "@/lib/site";
import { localeConfig } from "@/lib/i18n";

export function ArticlePage({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  const config = localeConfig[article.locale];
  const copy = config.ui;
  const categoryHref = article.locale === "en" ? categoryHrefs[article.category] : config.href;
  const categoryLabel = getCategoryLabel(article.category, article.locale);
  const displayDate = new Intl.DateTimeFormat(config.dateLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${article.updated}T00:00:00Z`));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    dateModified: article.updated,
    image: article.image,
    mainEntityOfPage: `${siteConfig.url}${article.href}`,
    inLanguage: config.hreflang,
    author: { "@type": "Organization", name: "GRAIN ROT Wiki" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="article-hero" lang={config.htmlLang}>
        <Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" />
        <div className="article-hero__shade" />
        <div className="shell article-hero__inner">
          <nav className="breadcrumb breadcrumb--article" aria-label={copy.breadcrumb}>
            <Link href={config.href}>{copy.home}</Link><span>/</span><Link href={categoryHref}>{categoryLabel}</Link><span>/</span><span>{article.title}</span>
          </nav>
          <Link className="article-hero__back" href={categoryHref}><ArrowLeft size={16} />{copy.allGuides}</Link>
          <div className="article-hero__meta"><span>{categoryLabel}</span><EvidenceBadge level={article.evidence} locale={article.locale} /></div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="article-hero__details"><span><CalendarDays size={15} />{copy.updated} {displayDate}</span><span><Clock3 size={15} />{article.readingTime} {copy.readingSuffix}</span></div>
        </div>
      </header>

      <div className="shell article-shell" lang={config.htmlLang}>
        <article className="article-body">
          <section className="direct-answer" aria-label={copy.directAnswer}><span>{copy.directAnswer}</span><p>{article.answer}</p></section>
          <MDXRemote source={article.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          <div className="article-review-note"><RefreshCw size={18} /><div><strong>{copy.versionCheck}</strong><p>{copy.versionNote.replace("{date}", displayDate)}</p></div></div>
        </article>
        <aside className="article-sidebar">
          <nav aria-label={copy.onThisPage}><strong><List size={15} />{copy.onThisPage}</strong>{article.toc.map((item) => <a className={item.level === 3 ? "is-sub" : undefined} href={`#${item.id}`} key={`${item.level}-${item.id}`}>{item.text}</a>)}</nav>
          <div className="article-sidebar__source"><small>{copy.sourcePolicy}</small><p>{copy.sourceCopy}</p><Link href="/about/">{copy.howWeVerify} <ExternalLink size={13} /></Link></div>
        </aside>
      </div>

      {related.length > 0 && <section className="section-band related-section" lang={config.htmlLang}><div className="shell"><div className="section-heading"><span className="section-index">{copy.keepReading}</span><div><h2>{copy.relatedGuides}</h2><p>{copy.relatedCopy}</p></div></div><div className="article-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></div></section>}
    </>
  );
}
