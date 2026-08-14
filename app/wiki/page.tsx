import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import { LocaleLink as Link } from "@/components/locale-context";
import { getAllArticles } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { categories, categoryDescriptions } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "All GRAIN ROT Guides: Complete Topic Directory",
  description: "Browse every GRAIN ROT guide by platform, game information, walkthrough, fix, enemy, and community topic.",
  path: "/wiki/",
  absoluteTitle: true,
});

export default function WikiPage() {
  const articles = getAllArticles();
  return (
    <>
      <header className="page-hero page-hero--wiki"><div className="shell"><span className="kicker"><span />Complete topic directory</span><h1>All GRAIN ROT Guides</h1><p>Every English guide in one scan-first directory, ordered by measured search demand.</p></div></header>
      <section className="section-band section-band--paper evidence-guide"><div className="shell"><div><span className="section-index">READING THE WIKI</span><h2>Evidence before certainty</h2></div><div className="evidence-guide__items"><span><ShieldCheck />Official<strong>Steam, developer, or publisher</strong></span><span><BadgeCheck />Official + community<strong>Confirmed core with observed steps</strong></span><span><Eye />Community observed<strong>Useful, version-sensitive reports</strong></span></div></div></section>
      <section className="section-band"><div className="shell wiki-groups">
        {categories.map((category, index) => {
          const entries = articles.filter((article) => article.category === category);
          return <section className={`wiki-group${entries.length >= 4 ? " wiki-group--wide" : ""}`} key={category}><header><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{category}</h2><p>{categoryDescriptions[category]}</p></div><strong>{entries.length} pages</strong></header><div>{entries.map((article) => <Link href={article.href} key={article.slug}><span><small>{article.intent}</small><strong>{article.title}</strong></span><ArrowRight size={18} /></Link>)}</div></section>;
        })}
      </div></section>
    </>
  );
}
