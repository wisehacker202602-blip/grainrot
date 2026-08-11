import type { Metadata } from "next";
import { CategoryHub } from "@/components/category-hub";

export const metadata: Metadata = {
  title: "GRAIN ROT Guides",
  description: "GRAIN ROT guides for flashlight controls, upgrading the Shop, and learning the first-run extraction loop.",
};

export default function GuidesPage() {
  return <CategoryHub category="Guides" title="GRAIN ROT Guides" eyebrow="High-demand how-to guides" description="Controls and progression answers for the tasks players search most: flashlight, Shop upgrades, and the first extraction run." />;
}
