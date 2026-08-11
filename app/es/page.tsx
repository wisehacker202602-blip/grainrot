import { createLocaleHubMetadata, LocaleHub } from "@/components/locale-hub";

export const metadata = createLocaleHubMetadata("es");

export default function SpanishIndexPage() {
  return <LocaleHub locale="es" />;
}
