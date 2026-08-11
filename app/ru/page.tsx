import { createLocaleHubMetadata, LocaleHub } from "@/components/locale-hub";
export const metadata = createLocaleHubMetadata("ru");
export default function RussianIndexPage() { return <LocaleHub locale="ru" />; }
