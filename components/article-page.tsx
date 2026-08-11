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

export function ArticlePage({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  const isSpanish = article.locale === "es";
  const categoryHref = isSpanish ? "/es/" : categoryHrefs[article.category];
  const categoryLabel = getCategoryLabel(article.category, article.locale);
  const displayDate = new Intl.DateTimeFormat(isSpanish ? "es-ES" : "en-US", {
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
    inLanguage: article.locale,
    author: { "@type": "Organization", name: "GRAIN ROT Wiki" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="article-hero" lang={article.locale}>
        <Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" />
        <div className="article-hero__shade" />
        <div className="shell article-hero__inner">
          <nav className="breadcrumb breadcrumb--article" aria-label="Breadcrumb">
            <Link href="/">{isSpanish ? "Inicio" : "Home"}</Link><span>/</span><Link href={categoryHref}>{isSpanish ? "Español" : article.category}</Link><span>/</span><span>{article.title}</span>
          </nav>
          <Link className="article-hero__back" href={categoryHref}><ArrowLeft size={16} />{isSpanish ? "Todas las guías" : `${article.category} overview`}</Link>
          <div className="article-hero__meta"><span>{categoryLabel}</span><EvidenceBadge level={article.evidence} /></div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="article-hero__details"><span><CalendarDays size={15} />{isSpanish ? "Actualizado" : "Updated"} {displayDate}</span><span><Clock3 size={15} />{article.readingTime}{isSpanish ? " de lectura" : " read"}</span></div>
        </div>
      </header>

      <div className="shell article-shell" lang={article.locale}>
        <article className="article-body">
          <section className="direct-answer" aria-label={isSpanish ? "Respuesta directa" : "Direct answer"}><span>{isSpanish ? "RESPUESTA DIRECTA" : "DIRECT ANSWER"}</span><p>{article.answer}</p></section>
          <MDXRemote source={article.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          <div className="article-review-note"><RefreshCw size={18} /><div><strong>{isSpanish ? "Comprobación de versión" : "Version check"}</strong><p>{isSpanish ? `Esta página se revisó el ${displayDate}. Los detalles de los parches pueden cambiar; las fuentes oficiales enlazadas tienen prioridad.` : `This page was reviewed on ${displayDate}. Patch details and live storefront values can change; the linked official sources take priority.`}</p></div></div>
        </article>
        <aside className="article-sidebar">
          <nav aria-label={isSpanish ? "En esta página" : "On this page"}><strong><List size={15} />{isSpanish ? "En esta página" : "On this page"}</strong>{article.toc.map((item) => <a className={item.level === 3 ? "is-sub" : undefined} href={`#${item.id}`} key={`${item.level}-${item.id}`}>{item.text}</a>)}</nav>
          <div className="article-sidebar__source"><small>{isSpanish ? "Política de fuentes" : "Source policy"}</small><p>{isSpanish ? "Separamos los datos oficiales, las observaciones de la comunidad y los detalles desconocidos." : "We separate official facts, community observations, and unknown details."}</p><Link href="/about/">{isSpanish ? "Cómo verificamos" : "How we verify"} <ExternalLink size={13} /></Link></div>
        </aside>
      </div>

      {related.length > 0 && <section className="section-band related-section"><div className="shell"><div className="section-heading"><span className="section-index">{isSpanish ? "SIGUE LEYENDO" : "KEEP READING"}</span><div><h2>{isSpanish ? "Guías relacionadas" : "Related guides"}</h2><p>{isSpanish ? "Más respuestas verificadas para tu próxima partida." : "Next answers from the same part of the game."}</p></div></div><div className="article-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></div></section>}
    </>
  );
}
