import type { Metadata } from "next";
import { CategoryHub } from "@/components/category-hub";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "GRAIN ROT Community Resources",
  description: "Verified GRAIN ROT Discord, current modding status, and a source-checked guide to official and fan wiki resources.",
  path: "/community/",
});

export default function CommunityPage() {
  return <CategoryHub category="Community" title="Community Resources" eyebrow="Discord, mods and wiki links" description="Start with developer-linked destinations, then use community resources with clear source and version labels." />;
}
