import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, Home } from "lucide-react";
import { LocaleLink as Link } from "@/components/locale-context";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested GRAIN ROT Wiki page could not be found.",
};

export default function NotFound() {
  return (
    <section className="not-found-page">
      <Image src="/images/enemies.webp" alt="" fill priority sizes="100vw" />
      <div className="not-found-page__shade" />
      <div className="shell not-found-page__content">
        <span className="kicker"><span />Route unavailable</span>
        <strong className="not-found-page__code">404</strong>
        <h1>Page not found</h1>
        <p>The address may be outdated or mistyped. Return home or use the complete guide directory to find the current page.</p>
        <div className="not-found-page__actions">
          <Link className="button button--primary" href="/"><Home size={18} />Return home</Link>
          <Link className="button button--ghost" href="/wiki/"><BookOpen size={18} />Browse all guides <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
