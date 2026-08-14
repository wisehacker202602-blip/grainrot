"use client";

import { useCurrentLocale } from "@/components/locale-context";
import { getChromeLabel } from "@/lib/chrome";

export function LocalizedSkipLink() {
  const locale = useCurrentLocale();
  return <a className="skip-link" href="#main-content">{getChromeLabel(locale, "Skip to content")}</a>;
}
