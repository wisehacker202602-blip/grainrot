import type { Metadata } from "next";
import { Building2, Users } from "lucide-react";
import { CategoryHub } from "@/components/category-hub";
import { LocaleLink as Link } from "@/components/locale-context";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "GRAIN ROT Game, Developer & Neem Publisher",
  description: "What GRAIN ROT is, who developed it, Neem Interactive's publisher role, player count, and AI disclosure.",
  path: "/game-info/",
});

export default function GameInfoPage() {
  return (
    <CategoryHub category="Game Info" title="GRAIN ROT Game Info" eyebrow="Game, developer and player facts" description="GRAIN ROT is a horror co-op extraction builder developed by Beck & Branch Games and published by Neem Interactive.">
      <section className="section-band section-band--paper hub-facts">
        <div className="shell hub-facts__grid">
          <div><Building2 /><small>Studio & publisher</small><strong>Beck & Branch Games / Neem Interactive</strong><p>A two-person Swedish developer with Neem Interactive handling publishing.</p></div>
          <div><Users /><small>Official crew size</small><strong>Solo + 1-4 online co-op</strong><Link href="/game-info/how-many-players/">Check the player limit</Link></div>
        </div>
      </section>
    </CategoryHub>
  );
}
