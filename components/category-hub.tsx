import Link from "next/link";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { getArticlesByCategory } from "@/lib/content";
import { categoryDescriptions, type Category } from "@/lib/site";

export function CategoryHub({
  category,
  title,
  eyebrow,
  description,
  children,
}: {
  category: Category;
  title: string;
  eyebrow: string;
  description?: string;
  children?: React.ReactNode;
}) {
  const articles = getArticlesByCategory(category);

  return (
    <>
      <header className="page-hero page-hero--hub">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>{category}</span>
          </nav>
          <span className="kicker"><span />{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description ?? categoryDescriptions[category]}</p>
          <div className="page-hero__stats">
            <span><strong>{articles.length}</strong> focused pages</span>
            <span><strong>Official-first</strong> evidence</span>
          </div>
        </div>
      </header>

      {children}

      <section className="section-band category-directory">
        <div className="shell">
          <div className="section-heading">
            <span className="section-index">BROWSE {category.toUpperCase()}</span>
            <div><h2>Find the direct answer</h2><p>Pages are ordered by measured search demand, then by the next decision a player needs to make.</p></div>
            <Link className="text-link" href="/wiki/">Full wiki index <ArrowRight size={16} /></Link>
          </div>
          <div className="category-directory__list">
            {articles.map((article, index) => (
              <Link href={article.href} key={article.slug}>
                <span className="category-directory__rank">{String(index + 1).padStart(2, "0")}</span>
                <span className="category-directory__copy"><small>{article.intent}</small><strong>{article.title}</strong><em>{article.answer}</em></span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="category-directory__actions">
            <span className="directory-count"><Search size={17} />{articles.length} indexed pages</span>
            <Link className="button button--primary" href={articles[0]?.href ?? "/wiki/"}><BookOpen size={17} />Open the first guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
