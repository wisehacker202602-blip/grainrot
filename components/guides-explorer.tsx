"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import type { ArticleMeta } from "@/lib/content";
import { categories } from "@/lib/site";

export function GuidesExplorer({ articles }: { articles: ArticleMeta[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All topics");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All topics" || article.category === activeCategory;
      const matchesQuery = !needle || [article.title, article.description, article.answer, article.intent].join(" ").toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, articles, query]);

  return (
    <>
      <div className="guide-controls">
        <label className="guide-search"><Search size={18} aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search all wiki pages" /></label>
        <div className="category-tabs" role="tablist" aria-label="Filter guides by category">
          {["All topics", ...categories].map((category) => <button type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}
        </div>
      </div>
      <div className="guide-results-meta"><strong>{filtered.length}</strong><span>{filtered.length === 1 ? "wiki page" : "wiki pages"}</span></div>
      <div className="article-grid article-grid--catalog">{filtered.map((article) => <ArticleCard article={article} key={article.slug} />)}</div>
      {filtered.length === 0 && <div className="no-results"><strong>No matching wiki pages</strong><p>Try a broader term or select another category.</p></div>}
    </>
  );
}
