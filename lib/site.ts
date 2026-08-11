export const siteConfig = {
  name: "GRAIN ROT Wiki",
  shortName: "GRAIN ROT Wiki",
  description:
    "An independent GRAIN ROT wiki covering platforms, guides, player counts, enemies, fixes, settings, and community resources.",
  url: "https://grainrot.example.com",
  steamUrl: "https://store.steampowered.com/app/4450620/GRAIN_ROT/",
  discordUrl: "https://discord.gg/xxHrFJTt3J",
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

const spanishCategoryLabels: Record<Category, string> = {
  Platforms: "Plataformas",
  "Game Info": "Información del juego",
  Guides: "Guías",
  Help: "Ayuda",
  Enemies: "Enemigos",
  Community: "Comunidad",
};

export function getCategoryLabel(category: Category, locale: "en" | "es" = "en") {
  return locale === "es" ? spanishCategoryLabels[category] : category;
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
