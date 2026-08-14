"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createContext, Suspense, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import {
  getLocaleFromContext,
  getLocaleFromPathname,
  type ArticleLocale,
  withLocaleContext,
} from "@/lib/i18n";

type LocaleState = {
  locale: ArticleLocale;
  pathname: string;
};

type TranslationLink = {
  href: string;
  locale: ArticleLocale;
  translationKey?: string;
};

type LocaleContextValue = {
  locale: ArticleLocale;
  translations: TranslationLink[];
};

const LocaleContext = createContext<LocaleContextValue>({ locale: "en", translations: [] });

export function LocaleContextProvider({
  children,
  translations,
}: {
  children: React.ReactNode;
  translations: TranslationLink[];
}) {
  const pathname = usePathname();
  const pathnameLocale = getLocaleFromPathname(pathname);
  const [queryState, setQueryState] = useState<LocaleState>({ locale: "en", pathname });
  const syncQueryLocale = useCallback((nextLocale: ArticleLocale) => {
    setQueryState({ locale: nextLocale, pathname });
  }, [pathname]);
  const locale = pathnameLocale !== "en" ? pathnameLocale : queryState.locale;
  const value = useMemo(() => ({ locale, translations }), [locale, translations]);

  return (
    <LocaleContext.Provider value={value}>
      <Suspense fallback={null}>
        <LocaleSearchParamSync onChange={syncQueryLocale} />
      </Suspense>
      {children}
    </LocaleContext.Provider>
  );
}

function LocaleSearchParamSync({ onChange }: { onChange: (locale: ArticleLocale) => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = getLocaleFromContext(pathname, searchParams);

  useEffect(() => {
    onChange(locale);
  }, [locale, onChange]);

  return null;
}

export function useCurrentLocale() {
  return useContext(LocaleContext).locale;
}

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  localeOverride?: ArticleLocale;
};

export function LocaleLink({ href, localeOverride, ...props }: LocaleLinkProps) {
  const { locale: currentLocale, translations } = useContext(LocaleContext);
  const locale = localeOverride ?? currentLocale;
  const localizedHref = useMemo(() => {
    const url = new URL(href, "https://locale-link.invalid");
    const source = translations.find((article) => article.locale === "en" && article.href === url.pathname);
    const translation = source?.translationKey
      ? translations.find((article) => article.locale === locale && article.translationKey === source.translationKey)
      : undefined;
    const targetHref = translation ? `${translation.href}${url.search}${url.hash}` : href;
    return withLocaleContext(targetHref, locale);
  }, [href, locale, translations]);
  return <Link href={localizedHref} {...props} />;
}
