import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guías de GRAIN ROT en Español",
  description: "Respuestas en español para no puedo mover el Spark y cómo apagar la linterna en GRAIN ROT.",
  alternates: { canonical: "/es/", languages: { es: "/es/", en: "/" } },
};

export default function SpanishIndexPage() {
  const articles = getAllArticles("es");

  return (
    <>
      <header className="page-hero page-hero--hub" lang="es">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Migas de pan"><Link href="/">English</Link><span>/</span><span>Español</span></nav>
          <span className="kicker"><span />Respuestas verificadas</span>
          <h1>GRAIN ROT en Español</h1>
          <p>Guías independientes para las dos búsquedas en español con mayor demanda medida.</p>
        </div>
      </header>
      <section className="section-band" lang="es">
        <div className="shell category-directory__list">
          {articles.map((article, index) => (
            <Link href={article.href} key={article.slug}>
              <span className="category-directory__rank">0{index + 1}</span>
              <span className="category-directory__copy"><small>{article.intent}</small><strong>{article.title}</strong><em>{article.answer}</em></span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
