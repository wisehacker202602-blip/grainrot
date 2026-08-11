import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true"><span /></span>
            <span className="brand__text"><strong>GRAIN ROT</strong><small>WIKI</small></span>
          </div>
          <p>An independent, evidence-led GRAIN ROT wiki. Not affiliated with Beck & Branch Games or Neem Interactive.</p>
        </div>
        <div className="site-footer__links">
          <div><strong>Explore</strong><Link href="/platforms/">Platforms</Link><Link href="/guides/">Guides</Link><Link href="/wiki/">Wiki index</Link></div>
          <div><strong>Help</strong><Link href="/help/">Fixes & settings</Link><Link href="/community/">Community</Link><Link href="/es/">Español</Link></div>
          <div><strong>Site</strong><Link href="/about/">About</Link><Link href="/contact/">Contact</Link><Link href="/privacy/">Privacy</Link></div>
          <div><strong>Official</strong><a href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Steam <ExternalLink size={12} /></a><a href={siteConfig.discordUrl} target="_blank" rel="noreferrer">Discord <ExternalLink size={12} /></a></div>
        </div>
      </div>
      <div className="site-footer__bottom"><span>Last research pass: {siteConfig.updated}</span><span>Game artwork © its respective owners.</span></div>
    </footer>
  );
}
