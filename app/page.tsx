import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, BookOpen, Bug, ExternalLink, Gamepad2, Layers3, Search, Settings2, ShieldAlert, Users } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { EvidenceBadge } from "@/components/evidence-badge";
import { getAllArticles } from "@/lib/content";
import { categories, categoryDescriptions, siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";
import { getLocaleIndexAlternates } from "@/lib/i18n";

export const metadata: Metadata = createPageMetadata({
  title: "GRAIN ROT Wiki, Guides & Platform Status",
  description: siteConfig.description,
  path: "/",
  languages: getLocaleIndexAlternates(),
  absoluteTitle: true,
});

const coreLoop = [
  { number: "01", title: "Descend", copy: "Read the Elevator state, enter a shifting Deep Layer, and keep a return plan.", icon: Layers3 },
  { number: "02", title: "Scavenge", copy: "Break furniture for resources or feed suitable finds to the Grinder for gold.", icon: Search },
  { number: "03", title: "Survive", copy: "Watch sound and movement around Corrupted vessels; recover teammates as Sparks.", icon: ShieldAlert },
  { number: "04", title: "Rebuild", copy: "Extract the haul and turn each completed run into a stronger Outpost.", icon: Settings2 },
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.filter((article) => article.featured).slice(0, 3);
  const platforms = articles.filter((article) => article.category === "Platforms").slice(0, 4);
  const troubleshooting = articles.filter((article) => article.category === "Help").slice(0, 3);
  const directory = categories.map((category) => ({
    category,
    description: categoryDescriptions[category],
    articles: articles.filter((article) => article.category === category),
  }));

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/guides/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="home-hero">
        <Image className="home-hero__image" src="/images/hero.webp" alt="A GRAIN ROT crew facing the Deep Layers" fill priority sizes="100vw" />
        <div className="home-hero__shade" />
        <div className="home-hero__content shell">
          <div className="home-hero__copy">
            <span className="kicker"><span />Independent player reference</span>
            <h1>GRAIN ROT<br /><em>Wiki & Guides</em></h1>
            <p>Fast answers for the run you are in now. Platforms, first steps, co-op, settings, enemies, fixes, and community links, with every claim labeled by evidence.</p>
            <div className="home-hero__actions">
              <Link className="button button--primary" href="/guides/how-to-play/"><BookOpen size={18} />Start your first run</Link>
              <Link className="button button--ghost" href="/wiki/"><Search size={18} />Browse the wiki</Link>
            </div>
            <div className="home-hero__trust">
              <span><BadgeCheck size={16} />{articles.length} English wiki pages</span>
              <span>Updated {siteConfig.updated}</span>
            </div>
          </div>
          <div className="home-hero__video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/kdGuY_pZCzk?rel=0"
              title="GRAIN ROT Official Launch Trailer"
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <div className="home-hero__rail" aria-label="Game facts">
          <div><small>Released</small><strong>Aug 7, 2026</strong></div>
          <div><small>Platform</small><strong>Steam PC</strong></div>
          <div><small>Mode</small><strong>Solo + online co-op</strong></div>
          <div><small>Developer</small><strong>Beck & Branch Games</strong></div>
        </div>
      </section>

      <section className="quick-route section-band section-band--paper">
        <div className="shell quick-route__inner">
          <div className="section-heading section-heading--dark">
            <span className="section-index">01 / ROUTE</span>
            <div><h2>What do you need right now?</h2><p>Every high-intent search routes to a direct answer, not a generic category page.</p></div>
          </div>
          <div className="route-grid">
            <Link href="/guides/how-to-play/"><Gamepad2 /><span><strong>I just installed</strong><small>Core loop and first run</small></span><ArrowRight /></Link>
            <Link href="/game-info/how-many-players/"><Users /><span><strong>I am forming a crew</strong><small>Co-op and lobby limits</small></span><ArrowRight /></Link>
            <Link href="/help/spark-cannot-move/"><Bug /><span><strong>Something is broken</strong><small>Version-aware troubleshooting</small></span><ArrowRight /></Link>
            <Link href="/help/options/"><Settings2 /><span><strong>I need better settings</strong><small>Controls, comfort, and performance</small></span><ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell home-directory">
          <div className="section-heading">
            <span className="section-index">02 / COMPLETE INDEX</span>
            <div><h2>All {articles.length} English pages, organized</h2><p>The complete keyword map is grouped into six player-facing Wiki sections, ordered by measured search demand.</p></div>
            <Link className="text-link" href="/wiki/">Open scan view <ArrowRight size={16} /></Link>
          </div>
          <div className="home-directory__summary" aria-label="Wiki coverage">
            <span><strong>{categories.length}</strong> topic groups</span>
            <span><strong>{articles.length}</strong> researched pages</span>
            <span><strong>3</strong> evidence levels</span>
          </div>
          <div className="home-directory__groups">
            {directory.map((group, index) => (
              <section className={`home-directory__group${group.articles.length >= 4 ? " home-directory__group--wide" : ""}`} key={group.category}>
                <header><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{group.category}</h3><p>{group.description}</p></div><strong>{group.articles.length}</strong></header>
                <div className="home-directory__links">
                  {group.articles.map((article) => (
                    <Link href={article.href} key={article.slug}>
                      <span><small>{article.intent}</small><strong>{article.title}</strong></span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell">
          <div className="section-heading">
            <span className="section-index">03 / START HERE</span>
            <div><h2>Guides for your first hour</h2><p>Three pages that answer the biggest early-game decisions without inventing mechanics.</p></div>
            <Link className="text-link" href="/wiki/">All {articles.length} topics <ArrowRight size={16} /></Link>
          </div>
          <div className="article-grid">
            {featured.map((article) => <ArticleCard article={article} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-band section-band--ink">
        <div className="shell">
          <div className="section-heading">
            <span className="section-index">04 / CORE LOOP</span>
            <div><h2>One run, four decisions</h2><p>Use this mental model before memorizing specific items, rooms, or community names.</p></div>
          </div>
          <div className="loop-grid">
            {coreLoop.map(({ number, title, copy, icon: Icon }) => (
              <div className="loop-step" key={number}>
                <span>{number}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p>
              </div>
            ))}
          </div>
          <div className="evidence-strip">
            <div><strong>Our evidence key</strong><p>Official claims lead. Community observations stay labeled. Unknown values remain unknown.</p></div>
            <EvidenceBadge level="Official" />
            <EvidenceBadge level="Official + community" />
            <EvidenceBadge level="Community observed" />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell split-section">
          <div>
            <div className="section-heading section-heading--stacked"><span className="section-index">05 / PLATFORMS</span><div><h2>Before you buy or download</h2><p>Current platform and storefront status, separated from speculation.</p></div></div>
            <div className="compact-list">{platforms.map((article) => <ArticleCard article={article} compact key={article.slug} />)}</div>
          </div>
          <div className="visual-panel">
            <Image src="/images/outpost.webp" alt="A rebuilt room in the GRAIN ROT Outpost" fill sizes="(max-width: 900px) 100vw, 42vw" />
            <div className="visual-panel__caption"><small>OFFICIAL STEAM MEDIA</small><strong>Extract. Return. Rebuild.</strong></div>
          </div>
        </div>
      </section>

      <section className="section-band section-band--signal">
        <div className="shell troubleshooting-band">
          <div className="section-heading section-heading--dark section-heading--stacked"><span className="section-index">06 / TROUBLESHOOTING</span><div><h2>Fix the blocker, then get back in</h2><p>Start with version and official support. Avoid risky config edits and mystery downloads.</p></div></div>
          <div className="troubleshooting-list">{troubleshooting.map((article, index) => <Link href={article.href} key={article.slug}><span>0{index + 1}</span><div><small>{article.intent}</small><strong>{article.title}</strong><p>{article.answer}</p></div><ArrowRight /></Link>)}</div>
        </div>
      </section>

      <section className="section-band final-cta">
        <div className="shell final-cta__inner">
          <div><span className="kicker"><span />Source-led by design</span><h2>Search the wiki.<br />Check the evidence.<br />Keep the run moving.</h2></div>
          <div className="final-cta__actions"><Link className="button button--primary" href="/wiki/"><BookOpen size={18} />Open the wiki index</Link><a className="button button--ghost" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">View on Steam <ExternalLink size={17} /></a></div>
        </div>
      </section>
    </>
  );
}
