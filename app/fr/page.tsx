import { createLocaleHubMetadata, LocaleHub } from "@/components/locale-hub";
export const metadata = createLocaleHubMetadata("fr");
export default function FrenchIndexPage() { return <LocaleHub locale="fr" />; }
