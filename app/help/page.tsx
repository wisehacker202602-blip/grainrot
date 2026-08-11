import type { Metadata } from "next";
import { CategoryHub } from "@/components/category-hub";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "GRAIN ROT Help, Fixes & Settings",
  description: "Fix Spark movement, understand Demo availability problems, and configure GRAIN ROT controls, video, audio, and lobby options.",
  path: "/help/",
});

export default function HelpPage() {
  return <CategoryHub category="Help" title="Help, Fixes & Settings" eyebrow="Troubleshooting directory" description="Version-aware answers for the blockers that stop a run, followed by the settings that prevent them from returning." />;
}
