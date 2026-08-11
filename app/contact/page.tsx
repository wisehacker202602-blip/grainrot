import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Report an outdated GRAIN ROT guide, missing source, or correction." };

export default function ContactPage() {
  return <><header className="page-hero page-hero--simple"><div className="shell"><span className="kicker"><span />Corrections welcome</span><h1>Contact the wiki</h1><p>Found a patch change, broken link, or claim that needs a stronger source? Send the exact page and evidence.</p></div></header><section className="section-band"><div className="shell legal-page"><h2>What to include</h2><ul><li>The URL or page title that needs attention.</li><li>Your current game version and platform.</li><li>A link to the official patch note, screenshot, or reproducible steps.</li><li>Whether the behavior comes from the Demo or the full release.</li></ul><a className="contact-box" href="mailto:editor@grainrot.guide"><span>EDITORIAL CORRECTIONS</span><strong>editor@grainrot.guide</strong><p>Use a subject line that includes the article title and current game version.</p></a><h2>Official game support</h2><p>For crashes, account issues, bans, or bug reports that require developer action, use the official GRAIN ROT Discord linked from our <Link href="/community/discord/">Discord guide</Link>. This fan site cannot access game accounts or support logs.</p></div></section></>;
}
