import { createLocaleHubMetadata, LocaleHub } from "@/components/locale-hub";
export const metadata = createLocaleHubMetadata("de");
export default function GermanIndexPage() { return <LocaleHub locale="de" />; }
