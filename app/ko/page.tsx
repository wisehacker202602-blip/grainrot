import { createLocaleHubMetadata, LocaleHub } from "@/components/locale-hub";
export const metadata = createLocaleHubMetadata("ko");
export default function KoreanIndexPage() { return <LocaleHub locale="ko" />; }
