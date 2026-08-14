"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArticleLocale, ArticleMeta } from "@/lib/content";
import { getCategoryLabel } from "@/lib/site";
import { formatSearchCount, localeConfig } from "@/lib/i18n";
import { LocaleLink as Link } from "@/components/locale-context";

export function SearchDialog({ articles, locale, open, onClose }: { articles: ArticleMeta[]; locale: ArticleLocale; open: boolean; onClose: () => void }) {
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
  const copy = localeConfig[locale].ui;

  return (
    <div className="search-dialog" role="dialog" aria-modal="true" aria-label={copy.searchWiki} lang={localeConfig[locale].htmlLang} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="search-dialog__panel">
        <div className="search-dialog__input-wrap">
          <Search aria-hidden="true" size={21} />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} aria-label={copy.searchArticles} />
          <button className="icon-button" type="button" onClick={onClose} aria-label={copy.closeSearch}><X size={20} /></button>
        </div>
        <div className="search-dialog__meta"><span>{query ? formatSearchCount(locale, results.length, "matches") : copy.suggested}</span><span>{formatSearchCount(locale, articles.length, "topics")}</span></div>
        <div className="search-dialog__results">
          {results.map((article) => (
            <Link href={article.href} key={article.slug} onClick={onClose}>
              <span><small>{getCategoryLabel(article.category, article.locale)}</small><strong>{article.title}</strong><em>{article.answer}</em></span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          {results.length === 0 && <p className="search-empty">{copy.noMatches}</p>}
        </div>
      </div>
    </div>
  );
}
