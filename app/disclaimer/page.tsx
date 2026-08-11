import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Disclaimer",
  description: "Disclaimer covering the independent status, accuracy limits, external links, and game assets used by the GRAIN ROT Wiki.",
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <>
      <header className="page-hero page-hero--simple">
        <div className="shell">
          <span className="kicker"><span />Independent fan resource</span>
          <h1>Disclaimer</h1>
          <p>What this wiki can help with, where its responsibility ends, and which sources take priority.</p>
        </div>
      </header>
      <section className="section-band">
        <div className="shell legal-page">
          <p><strong>Effective date:</strong> August 11, 2026</p>
          <h2>Independent status</h2>
          <p>This is a fan-made, independent reference site. It is not affiliated with, sponsored by, or endorsed by Beck & Branch Games, Neem Interactive, or any platform holder.</p>
          <h2>Information and updates</h2>
          <p>The guides are provided for general informational purposes. Game patches, storefront listings, regional prices, platform support, and community discoveries can change after a page is reviewed. Check the linked official source and the live game build before making a purchase or relying on version-sensitive instructions.</p>
          <h2>No warranty</h2>
          <p>We work to distinguish official facts, community observations, and unknown details, but we cannot guarantee that every page remains complete, current, or error-free. Use troubleshooting steps at your own discretion and keep backups before changing local files or settings.</p>
          <h2>External services</h2>
          <p>Links to storefronts, social platforms, videos, mod repositories, and community sites are provided for reference. Those services control their own content, availability, terms, and privacy practices.</p>
          <h2>Names and artwork</h2>
          <p>GRAIN ROT names, screenshots, artwork, and other game assets belong to their respective owners. Their use here is for identification, commentary, and guide context.</p>
        </div>
      </section>
    </>
  );
}
