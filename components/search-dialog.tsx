"use client";

import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArticleMeta } from "@/lib/content";
import { getCategoryLabel } from "@/lib/site";

export function SearchDialog({ articles, locale, open, onClose }: { articles: ArticleMeta[]; locale: "en" | "es"; open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 40);
      document.body.classList.add("is-dialog-open");
    } else {
      document.body.classList.remove("is-dialog-open");
    }
    return () => document.body.classList.remove("is-dialog-open");
  }, [open]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return articles.slice(0, 6);
    return articles.filter((article) =>
      [article.title, article.description, article.intent, article.category, article.answer]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [articles, query]);

  if (!open) return null;

  return (
    <div className="search-dialog" role="dialog" aria-modal="true" aria-label={locale === "es" ? "Buscar en la wiki" : "Search wiki"} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="search-dialog__panel">
        <div className="search-dialog__input-wrap">
          <Search aria-hidden="true" size={21} />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "es" ? "Buscar guías y respuestas..." : "Search platforms, fixes, enemies..."} aria-label={locale === "es" ? "Buscar artículos" : "Search articles"} />
          <button className="icon-button" type="button" onClick={onClose} aria-label={locale === "es" ? "Cerrar búsqueda" : "Close search"}><X size={20} /></button>
        </div>
        <div className="search-dialog__meta"><span>{query ? `${results.length} ${locale === "es" ? "resultados" : "matches"}` : locale === "es" ? "Páginas sugeridas" : "Suggested wiki pages"}</span><span>{articles.length} {locale === "es" ? "temas indexados" : "indexed topics"}</span></div>
        <div className="search-dialog__results">
          {results.map((article) => (
            <Link href={article.href} key={article.slug} onClick={onClose}>
              <span><small>{getCategoryLabel(article.category, article.locale)}</small><strong>{article.title}</strong><em>{article.answer}</em></span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          {results.length === 0 && <p className="search-empty">{locale === "es" ? "Todavía no hay una página que coincida con esta búsqueda." : "No wiki page matches that search yet."}</p>}
        </div>
      </div>
    </div>
  );
}
