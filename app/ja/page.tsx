import { createLocaleHubMetadata, LocaleHub } from "@/components/locale-hub";
export const metadata = createLocaleHubMetadata("ja");
export default function JapaneseIndexPage() { return <LocaleHub locale="ja" />; }
