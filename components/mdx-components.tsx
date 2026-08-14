import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { AlertTriangle, BadgeCheck, Info } from "lucide-react";
import { slugifyHeading } from "@/lib/content";
import { LocaleLink } from "@/components/locale-context";

function H2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  return <h2 id={slugifyHeading(String(children))} {...props}>{children}</h2>;
}

function H3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h3 id={slugifyHeading(String(children))} {...props}>{children}</h3>;
}

function A({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = href.startsWith("http");
  if (!external) return <LocaleLink href={href} {...props}>{children}</LocaleLink>;
  return <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
}

export function FieldNote({ children, type = "info", title }: { children: ReactNode; type?: "info" | "warning" | "verified"; title?: string }) {
  const Icon = type === "warning" ? AlertTriangle : type === "verified" ? BadgeCheck : Info;
  return <aside className={`field-note field-note--${type}`}><Icon aria-hidden="true" /><div>{title && <strong>{title}</strong>}{children}</div></aside>;
}

export const mdxComponents = {
  h2: H2,
  h3: H3,
  a: A,
  FieldNote,
};
