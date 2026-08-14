"use client";

import { useEffect } from "react";
import { useCurrentLocale } from "@/components/locale-context";
import { localeConfig } from "@/lib/i18n";

export function DocumentLanguage() {
  const locale = useCurrentLocale();

  useEffect(() => {
    document.documentElement.lang = localeConfig[locale].htmlLang;
  }, [locale]);

  return null;
}
