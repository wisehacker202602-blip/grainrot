import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the GRAIN ROT Wiki, including hosting data, external links, and the embedded YouTube player.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero page-hero--simple">
        <div className="shell">
          <span className="kicker"><span />Site policy</span>
          <h1>Privacy policy</h1>
          <p>A plain-language summary of what this static guide collects and what it does not.</p>
        </div>
      </header>
      <section className="section-band">
        <div className="shell legal-page">
          <p><strong>Effective date:</strong> August 11, 2026</p>
          <h2>Current site behavior</h2>
          <p>This version is a static reference website. It has no account system, comments, payments, or contact form, and it does not intentionally collect personal information.</p>
          <h2>Server and analytics data</h2>
          <p>The eventual hosting provider may process standard request data such as IP address, browser type, referring page, and timestamps for security and delivery. If privacy-friendly analytics or advertising is added later, this policy and the consent behavior must be updated before deployment.</p>
          <h2>Embedded YouTube video</h2>
          <p>The homepage loads a YouTube player from YouTube&apos;s privacy-enhanced <code>youtube-nocookie.com</code> domain. Loading or playing that embedded video can send request data such as your IP address, browser information, and referring page to YouTube or Google. Playback may also use cookies or browser storage under their policies.</p>
          <h2>External links</h2>
          <p>Links to Steam, Discord, YouTube, Microsoft, PlayStation, and community websites are governed by those services&apos; own privacy policies. Opening an external link leaves this site.</p>
          <h2>Cookies</h2>
          <p>The current site does not set first-party tracking cookies. Future advertising or analytics integrations may change that; any such change should be disclosed here.</p>
          <h2>Changes</h2>
          <p>Material policy changes will be reflected on this page with a new effective date.</p>
        </div>
      </section>
    </>
  );
}
