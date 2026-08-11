"use client";

import { usePathname } from "next/navigation";
import { getChromeLabel } from "@/lib/chrome";
import { getLocaleFromPathname } from "@/lib/i18n";

export function LocalizedSkipLink() {
  const locale = getLocaleFromPathname(usePathname());
  return <a className="skip-link" href="#main-content">{getChromeLabel(locale, "Skip to content")}</a>;
}
