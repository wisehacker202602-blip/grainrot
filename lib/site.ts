export const siteConfig = {
  name: "GRAIN ROT Wiki",
  shortName: "GRAIN ROT Wiki",
  description:
    "GRAIN ROT game wiki with verified Steam and price details, Neem publisher information, player count, release status, guides, fixes, enemies, and settings.",
  url: "https://grain-rot.online",
  steamUrl: "https://store.steampowered.com/app/4450620/GRAIN_ROT/",
  discordUrl: "https://discord.gg/xxHrFJTt3J",
  feedbackUrl: "https://github.com/wisehacker202602-blip/grainrot/issues/new",
  updated: "August 11, 2026",
  updatedIso: "2026-08-11",
};

export const categories = [
  "Platforms",
  "Game Info",
  "Guides",
  "Help",
  "Enemies",
  "Community",
] as const;

export type Category = (typeof categories)[number];

export const categoryDescriptions: Record<Category, string> = {
  Platforms: "Price, Steam, release status, PC requirements, and console availability.",
  "Game Info": "The game, developer, publisher, player count, and AI disclosure.",
  Guides: "High-demand answers for first runs, controls, and Outpost progression.",
  Help: "Version-aware troubleshooting and settings for common blockers.",
  Enemies: "Confirmed Corrupted behavior, monsters, elites, and community names.",
  Community: "Official Discord, modding status, and trustworthy wiki resources.",
};

export const categoryHrefs: Record<Category, string> = {
  Platforms: "/platforms/",
  "Game Info": "/game-info/",
  Guides: "/guides/",
  Help: "/help/",
  Enemies: "/enemies/",
  Community: "/community/",
};

const localizedCategoryLabels: Partial<Record<import("@/lib/i18n").ArticleLocale, Record<Category, string>>> = {
  de: { Platforms: "Plattformen", "Game Info": "Spielinfo", Guides: "Guides", Help: "Hilfe", Enemies: "Gegner", Community: "Community" },
  fr: { Platforms: "Plateformes", "Game Info": "Infos du jeu", Guides: "Guides", Help: "Aide", Enemies: "Ennemis", Community: "Communauté" },
  es: { Platforms: "Plataformas", "Game Info": "Información del juego", Guides: "Guías", Help: "Ayuda", Enemies: "Enemigos", Community: "Comunidad" },
  "pt-br": { Platforms: "Plataformas", "Game Info": "Informações do jogo", Guides: "Guias", Help: "Ajuda", Enemies: "Inimigos", Community: "Comunidade" },
  ru: { Platforms: "Платформы", "Game Info": "Об игре", Guides: "Гайды", Help: "Помощь", Enemies: "Враги", Community: "Сообщество" },
  ja: { Platforms: "プラットフォーム", "Game Info": "ゲーム情報", Guides: "ガイド", Help: "トラブル対処", Enemies: "敵", Community: "コミュニティ" },
  ko: { Platforms: "플랫폼", "Game Info": "게임 정보", Guides: "공략", Help: "문제 해결", Enemies: "적", Community: "커뮤니티" },
  uk: { Platforms: "Платформи", "Game Info": "Про гру", Guides: "Гайди", Help: "Допомога", Enemies: "Вороги", Community: "Спільнота" },
};

export function getCategoryLabel(category: Category, locale: import("@/lib/i18n").ArticleLocale = "en") {
  return localizedCategoryLabels[locale]?.[category] ?? category;
}

export const articlePaths: Record<string, string> = {
  "grain-rot-price": "/platforms/price/",
  "grain-rot-steam": "/platforms/steam/",
  "grain-rot-console": "/platforms/console/",
  "grain-rot-psn": "/platforms/psn/",
  "grain-rot-freetp": "/platforms/free-to-play/",
  "grain-rot-release-date": "/platforms/release-date/",
  "grain-rot-demo": "/platforms/demo/",
  "grain-rot-ps5": "/platforms/ps5/",
  "grain-rot-xbox": "/platforms/xbox/",
  "grain-rot-system-requirements": "/platforms/system-requirements/",
  "grain-rot-how-many-players": "/game-info/how-many-players/",
  "grain-rot-ai": "/game-info/ai-disclosure/",
  "grain-rot-turn-off-flashlight": "/guides/turn-off-flashlight/",
  "grain-rot-upgrade-the-shop": "/guides/upgrade-the-shop/",
  "grain-rot-how-to-play": "/guides/how-to-play/",
  "grain-rot-spark-cannot-move": "/help/spark-cannot-move/",
  "grain-rot-demo-not-working": "/help/demo-not-working/",
  "grain-rot-options": "/help/options/",
  "grain-rot-enemies": "/enemies/",
  "grain-rot-discord": "/community/discord/",
  "grain-rot-mods": "/community/mods/",
  "grain-rot-wiki": "/community/wiki-resources/",
  "grain-rot-no-puedo-mover": "/es/grain-rot-no-puedo-mover/",
  "grain-rot-apagar-linterna": "/es/grain-rot-apagar-linterna/",
  "de-turn-off-flashlight": "/de/taschenlampe-ausschalten/",
  "de-spark-cannot-move": "/de/spark-kann-sich-nicht-bewegen/",
  "fr-turn-off-flashlight": "/fr/eteindre-la-lampe-torche/",
  "fr-spark-cannot-move": "/fr/spark-ne-bouge-plus/",
  "pt-br-turn-off-flashlight": "/pt-br/desligar-lanterna/",
  "pt-br-spark-cannot-move": "/pt-br/spark-nao-se-move/",
  "ru-turn-off-flashlight": "/ru/vyklyuchit-fonar/",
  "ru-spark-cannot-move": "/ru/spark-ne-dvigaetsya/",
  "ja-turn-off-flashlight": "/ja/flashlight-off/",
  "ja-spark-cannot-move": "/ja/spark-cannot-move/",
  "ko-turn-off-flashlight": "/ko/flashlight-off/",
  "ko-spark-cannot-move": "/ko/spark-cannot-move/",
  "uk-turn-off-flashlight": "/uk/vymknuty-likhtar/",
  "uk-spark-cannot-move": "/uk/spark-ne-rukhayetsya/",
};

export const articleOrder = [
  "grain-rot-price",
  "grain-rot-steam",
  "grain-rot-console",
  "grain-rot-psn",
  "grain-rot-freetp",
  "grain-rot-release-date",
  "grain-rot-demo",
  "grain-rot-ps5",
  "grain-rot-xbox",
  "grain-rot-system-requirements",
  "grain-rot-how-many-players",
  "grain-rot-ai",
  "grain-rot-turn-off-flashlight",
  "grain-rot-upgrade-the-shop",
  "grain-rot-how-to-play",
  "grain-rot-spark-cannot-move",
  "grain-rot-demo-not-working",
  "grain-rot-options",
  "grain-rot-enemies",
  "grain-rot-discord",
  "grain-rot-mods",
  "grain-rot-wiki",
] as const;

export function getArticleHref(slug: string) {
  return articlePaths[slug] ?? `/${slug}/`;
}

type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationItem = NavigationLink & {
  groups?: Array<{
    label?: string;
    links: NavigationLink[];
  }>;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Platforms",
    href: "/platforms/",
    groups: [
      {
        label: "Purchase & PC",
        links: [
          { label: "Price", href: articlePaths["grain-rot-price"] },
          { label: "Steam", href: articlePaths["grain-rot-steam"] },
          { label: "Free to Play", href: articlePaths["grain-rot-freetp"] },
          { label: "Release Date", href: articlePaths["grain-rot-release-date"] },
          { label: "Demo", href: articlePaths["grain-rot-demo"] },
          { label: "System Requirements", href: articlePaths["grain-rot-system-requirements"] },
        ],
      },
      {
        label: "Consoles",
        links: [
          { label: "Console Guide", href: articlePaths["grain-rot-console"] },
          { label: "PSN", href: articlePaths["grain-rot-psn"] },
          { label: "PS5", href: articlePaths["grain-rot-ps5"] },
          { label: "Xbox & Game Pass", href: articlePaths["grain-rot-xbox"] },
        ],
      },
    ],
  },
  {
    label: "Game Info",
    href: "/game-info/",
    groups: [
      {
        links: [
          { label: "Game, Developer & Neem", href: "/game-info/" },
          { label: "How Many Players", href: articlePaths["grain-rot-how-many-players"] },
          { label: "AI Disclosure", href: articlePaths["grain-rot-ai"] },
        ],
      },
    ],
  },
  {
    label: "Guides",
    href: "/guides/",
    groups: [
      {
        links: [
          { label: "Turn Off Flashlight", href: articlePaths["grain-rot-turn-off-flashlight"] },
          { label: "Upgrade the Shop", href: articlePaths["grain-rot-upgrade-the-shop"] },
          { label: "How to Play", href: articlePaths["grain-rot-how-to-play"] },
        ],
      },
    ],
  },
  {
    label: "Help",
    href: "/help/",
    groups: [
      {
        links: [
          { label: "Spark Cannot Move", href: articlePaths["grain-rot-spark-cannot-move"] },
          { label: "Demo Not Working", href: articlePaths["grain-rot-demo-not-working"] },
          { label: "Options & Settings", href: articlePaths["grain-rot-options"] },
        ],
      },
    ],
  },
  { label: "Enemies", href: articlePaths["grain-rot-enemies"] },
  {
    label: "Community",
    href: "/community/",
    groups: [
      {
        links: [
          { label: "Discord", href: articlePaths["grain-rot-discord"] },
          { label: "Mods", href: articlePaths["grain-rot-mods"] },
          { label: "Wiki Resources", href: articlePaths["grain-rot-wiki"] },
          { label: "All Wiki Pages", href: "/wiki/" },
        ],
      },
    ],
  },
  { label: "Wiki", href: "/wiki/" },
];
