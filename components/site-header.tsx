"use client";

import Link from "next/link";
import { ChevronDown, ExternalLink, Globe2, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ArticleMeta } from "@/lib/content";
import { primaryNavigation, siteConfig } from "@/lib/site";
import { SearchDialog } from "@/components/search-dialog";

export function SiteHeader({ articles }: { articles: ArticleMeta[] }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeNavigation = () => {
    setMenuOpen(false);
    setOpenGroup(null);
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

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const spanish = pathname.startsWith("/es/") || pathname === "/es";

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand" href="/" aria-label="GRAIN ROT Wiki home" onClick={closeNavigation}>
            <span className="brand__mark" aria-hidden="true"><span /></span>
            <span className="brand__text"><strong>GRAIN ROT</strong><small>WIKI</small></span>
          </Link>

          <nav ref={navRef} className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} aria-label="Primary navigation">
            {primaryNavigation.map((item) => {
              const active = isActive(item.href);
              if (!item.groups) {
                return <Link className={active ? "is-active" : undefined} href={item.href} aria-current={active ? "page" : undefined} onClick={closeNavigation} key={item.label}>{item.label}</Link>;
              }

              const expanded = openGroup === item.label;
              return (
                <div className={`nav-item${active ? " is-active" : ""}${expanded ? " is-open" : ""}`} key={item.label}>
                  <button className="nav-trigger" type="button" aria-haspopup="true" aria-expanded={expanded} onClick={() => setOpenGroup(expanded ? null : item.label)}>
                    {item.label}<ChevronDown size={14} aria-hidden="true" />
                  </button>
                  <div className={`nav-menu${item.groups.length > 1 ? " nav-menu--wide" : ""}`}>
                    <Link className="nav-menu__overview" href={item.href} onClick={closeNavigation}><span>{item.label} Overview</span><ArrowLabel /></Link>
                    <div className="nav-menu__groups">
                      {item.groups.map((group, index) => (
                        <div key={group.label ?? `${item.label}-${index}`}>
                          {group.label && <small>{group.label}</small>}
                          {group.links.map((link) => <Link href={link.href} onClick={closeNavigation} key={`${link.href}-${link.label}`}>{link.label}</Link>)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <button className="icon-button search-trigger" type="button" title={spanish ? "Buscar" : "Search"} onClick={() => setSearchOpen(true)} aria-label={spanish ? "Buscar en la wiki" : "Search the wiki"}>
              <Search size={18} aria-hidden="true" />
            </button>
            <Link className="language-link" href={spanish ? "/" : "/es/"} title={spanish ? "English" : "Español"} aria-label={spanish ? "Switch to English" : "Cambiar a español"}>
              <Globe2 size={16} aria-hidden="true" /><span>{spanish ? "EN" : "ES"}</span>
            </Link>
            <a className="header-steam" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">Steam <ExternalLink size={14} aria-hidden="true" /></a>
            <button className="icon-button menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <SearchDialog articles={articles} locale={spanish ? "es" : "en"} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function ArrowLabel() {
  return <span aria-hidden="true">View all</span>;
}
