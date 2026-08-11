"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { getChromeLabel, getFooterCopy } from "@/lib/chrome";
import { getLocaleFromPathname, localeConfig } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const config = localeConfig[locale];
  const copy = getFooterCopy(locale);
  const label = (value: string) => getChromeLabel(locale, value);
  const displayDate = new Intl.DateTimeFormat(config.dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${siteConfig.updatedIso}T00:00:00Z`));

  return (
    <footer className="site-footer" lang={config.htmlLang}>
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true"><span /></span>
            <span className="brand__text"><strong>GRAIN ROT</strong><small>WIKI</small></span>
          </div>
          <p>{copy.description}</p>
        </div>
        <div className="site-footer__links">
          <div><strong>{label("Explore")}</strong><Link href="/platforms/">{label("Platforms")}</Link><Link href={locale === "en" ? "/guides/" : config.href}>{label("Guides")}</Link><Link href="/wiki/">{label("Wiki index")}</Link></div>
          <div><strong>{label("Help")}</strong><Link href={locale === "en" ? "/help/" : config.href}>{label("Fixes & settings")}</Link><Link href="/community/">{label("Community")}</Link><Link href={locale === "en" ? "/de/" : config.href}>{label("Languages")} (9)</Link></div>
          <div><strong>{label("Site")}</strong><Link href="/about/">{label("About")}</Link><Link href="/contact/">{label("Contact")}</Link><Link href="/privacy/">{label("Privacy")}</Link><Link href="/disclaimer/">{label("Disclaimer")}</Link></div>
          <div><strong>{label("Official")}</strong><a href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Steam <ExternalLink size={12} /></a><a href={siteConfig.discordUrl} target="_blank" rel="noreferrer">Discord <ExternalLink size={12} /></a></div>
        </div>
      </div>
      <div className="site-footer__bottom"><span>{copy.lastResearchPass}: {displayDate}</span><span>{copy.artwork}</span></div>
    </footer>
  );
}
