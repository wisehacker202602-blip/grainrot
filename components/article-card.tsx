import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { ArticleMeta } from "@/lib/content";
import { EvidenceBadge } from "@/components/evidence-badge";
import { getCategoryLabel } from "@/lib/site";

export function ArticleCard({ article, compact = false }: { article: ArticleMeta; compact?: boolean }) {
  return (
    <Link className={`article-card${compact ? " article-card--compact" : ""}`} href={article.href}>
      {!compact && (
        <div className="article-card__media">
          <Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
        </div>
      )}
      <div className="article-card__body">
        <div className="article-card__eyebrow">
          <span>{getCategoryLabel(article.category, article.locale)}</span>
          <span className="article-card__time"><Clock3 size={13} aria-hidden="true" />{article.readingTime}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className="article-card__footer">
          <EvidenceBadge level={article.evidence} />
          <ArrowUpRight aria-hidden="true" size={18} />
        </div>
      </div>
    </Link>
  );
}
