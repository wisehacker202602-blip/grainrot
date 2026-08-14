"use client";

import { ChevronDown, ExternalLink, Globe2, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ArticleMeta } from "@/lib/content";
import { primaryNavigation, siteConfig } from "@/lib/site";
import { getLocaleFromPathname, localeCodes, localeConfig, withLocaleContext } from "@/lib/i18n";
import { getChromeLabel } from "@/lib/chrome";
import { SearchDialog } from "@/components/search-dialog";
import { LocaleLink as Link, useCurrentLocale } from "@/components/locale-context";

export function SiteHeader({ articles }: { articles: ArticleMeta[] }) {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeNavigation = () => {
    setMenuOpen(false);
    setOpenGroup(null);
    setLanguageOpen(false);
  };

  useEffect(() => {
    closeNavigation();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", menuOpen);
    return () => document.body.classList.remove("is-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        closeNavigation();
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const config = localeConfig[locale];
  const copy = config.ui;
  const chromeLabel = (label: string) => getChromeLabel(locale, label);
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const currentArticle = articles.find((article) => article.href === normalizedPath);
  const languageHref = (targetLocale: (typeof localeCodes)[number]) => {
    if (currentArticle?.translationKey) {
      const translation = articles.find((article) => article.locale === targetLocale && article.translationKey === currentArticle.translationKey);
      if (translation) return translation.href;
      if (currentArticle.locale === "en") return withLocaleContext(currentArticle.href, targetLocale);
      return localeConfig[targetLocale].href;
    }
    if (getLocaleFromPathname(pathname) !== "en" || normalizedPath === "/") return localeConfig[targetLocale].href;
    return withLocaleContext(normalizedPath, targetLocale);
  };
  const localizedHref = (href: string) => {
    if (href === "/") return config.href;
    const sourceArticle = articles.find((article) => article.locale === "en" && article.href === href);
    if (sourceArticle?.translationKey) {
      const translation = articles.find((article) => article.locale === locale && article.translationKey === sourceArticle.translationKey);
      if (translation) return translation.href;
    }
    return withLocaleContext(href, locale);
  };
  const isActive = (href: string) => {
    if (locale !== "en") {
      if (href === "/") return normalizedPath === config.href;
      if (href === "/guides/") return currentArticle?.category === "Guides";
      if (href === "/help/") return currentArticle?.category === "Help";
    }
    const target = localizedHref(href);
    const targetPathname = new URL(target, "https://navigation.invalid").pathname;
    return targetPathname === "/" ? pathname === "/" : pathname.startsWith(targetPathname);
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand" href={config.href} aria-label={`GRAIN ROT Wiki ${chromeLabel("Home")}`} onClick={closeNavigation}>
            <span className="brand__mark" aria-hidden="true"><span /></span>
            <span className="brand__text"><strong>GRAIN ROT</strong><small>WIKI</small></span>
          </Link>

          <nav ref={navRef} className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} aria-label={chromeLabel("Primary navigation")}>
            {primaryNavigation.map((item) => {
              const active = isActive(item.href);
              if (!item.groups) {
                return <Link className={active ? "is-active" : undefined} href={localizedHref(item.href)} aria-current={active ? "page" : undefined} onClick={closeNavigation} key={item.label}>{chromeLabel(item.label)}</Link>;
              }

              const expanded = openGroup === item.label;
              return (
                <div className={`nav-item${active ? " is-active" : ""}${expanded ? " is-open" : ""}`} key={item.label}>
                  <button className="nav-trigger" type="button" aria-haspopup="true" aria-expanded={expanded} onClick={() => setOpenGroup(expanded ? null : item.label)}>
                    {chromeLabel(item.label)}<ChevronDown size={14} aria-hidden="true" />
                  </button>
                  <div className={`nav-menu${item.groups.length > 1 ? " nav-menu--wide" : ""}`}>
                    <Link className="nav-menu__overview" href={localizedHref(item.href)} onClick={closeNavigation}><span>{chromeLabel(item.label)} {chromeLabel("Overview")}</span><ArrowLabel label={chromeLabel("View all")} /></Link>
                    <div className="nav-menu__groups">
                      {item.groups.map((group, index) => (
                        <div key={group.label ?? `${item.label}-${index}`}>
                          {group.label && <small>{chromeLabel(group.label)}</small>}
                          {group.links.map((link) => <Link href={localizedHref(link.href)} onClick={closeNavigation} key={`${link.href}-${link.label}`}>{chromeLabel(link.label)}</Link>)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <button className="icon-button search-trigger" type="button" title={copy.searchWiki} onClick={() => setSearchOpen(true)} aria-label={copy.searchWiki}>
              <Search size={18} aria-hidden="true" />
            </button>
            <div className={`language-picker${languageOpen ? " is-open" : ""}`}>
              <button className="language-link language-trigger" type="button" title={copy.languages} aria-label={copy.languages} aria-haspopup="true" aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)}>
                <Globe2 size={16} aria-hidden="true" /><span>{localeConfig[locale].shortLabel}</span><ChevronDown size={13} aria-hidden="true" />
              </button>
              <div className="language-menu" aria-label={copy.languages}>
                {localeCodes.map((targetLocale) => (
                  <Link href={languageHref(targetLocale)} localeOverride={targetLocale} lang={localeConfig[targetLocale].htmlLang} aria-current={targetLocale === locale ? "page" : undefined} onClick={closeNavigation} key={targetLocale}>
                    <span>{localeConfig[targetLocale].nativeName}</span><small>{localeConfig[targetLocale].shortLabel}</small>
                  </Link>
                ))}
              </div>
            </div>
            <a className="header-steam" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Steam <ExternalLink size={14} aria-hidden="true" /></a>
            <button className="icon-button menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? chromeLabel("Close navigation") : chromeLabel("Open navigation")} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <SearchDialog articles={articles.filter((article) => article.locale === locale)} locale={locale} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function ArrowLabel({ label }: { label: string }) {
  return <span aria-hidden="true">{label}</span>;
}
