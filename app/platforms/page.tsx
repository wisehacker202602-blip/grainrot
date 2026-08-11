import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, ShoppingCart } from "lucide-react";
import { CategoryHub } from "@/components/category-hub";

export const metadata: Metadata = {
  title: "GRAIN ROT Platforms, Price & Release",
  description: "GRAIN ROT price, Steam release, Demo, PC requirements, PS5, PSN, Xbox, Game Pass, and console status.",
};

export default function PlatformsPage() {
  return (
    <CategoryHub category="Platforms" title="Platforms, Price & Release" eyebrow="Purchase and platform directory">
      <section className="section-band section-band--paper hub-facts">
        <div className="shell hub-facts__grid">
          <div><ShoppingCart /><small>Available now</small><strong>$9.99 base price on Steam</strong><Link href="/platforms/price/">Check price details</Link></div>
          <div><Monitor /><small>Confirmed platform</small><strong>Windows PC</strong><Link href="/platforms/console/">Check console status</Link></div>
        </div>
      </section>
    </CategoryHub>
  );
}
