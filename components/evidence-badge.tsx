import { BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import type { ArticleLocale, EvidenceLevel } from "@/lib/content";
import { getEvidenceLabel } from "@/lib/chrome";

export function EvidenceBadge({ level, locale = "en" }: { level: EvidenceLevel; locale?: ArticleLocale }) {
  const Icon = level === "Official" ? ShieldCheck : level === "Community observed" ? Eye : BadgeCheck;
  const variant = level === "Official" ? "official" : level === "Community observed" ? "observed" : "mixed";

  return (
    <span className={`evidence-badge evidence-badge--${variant}`}>
      <Icon aria-hidden="true" size={14} strokeWidth={2} />
      {getEvidenceLabel(locale, level)}
    </span>
  );
}
