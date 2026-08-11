import { BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import type { EvidenceLevel } from "@/lib/content";

export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const Icon = level === "Official" ? ShieldCheck : level === "Community observed" ? Eye : BadgeCheck;
  const variant = level === "Official" ? "official" : level === "Community observed" ? "observed" : "mixed";

  return (
    <span className={`evidence-badge evidence-badge--${variant}`}>
      <Icon aria-hidden="true" size={14} strokeWidth={2} />
      {level}
    </span>
  );
}
