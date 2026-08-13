import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const pages = [
  {
    path: "index.html",
    lang: "en",
    title: "GRAIN ROT Wiki: Game Guides, Co-op, Enemies & Fixes",
    description:
      "Explore the GRAIN ROT Wiki for how-to-play guides, co-op and player-count details, enemies, settings, progression, Steam, price, platforms, and common fixes.",
    heading: "GRAIN ROT Wiki",
  },
  {
    path: "de/index.html",
    lang: "de",
    title: "GRAIN ROT Wiki: Guides, Koop, Gegner & Lösungen",
    description:
      "Im GRAIN ROT Wiki findest du Guides und Informationen zu Koop und Spielerzahl, Gegnern, Einstellungen, Fortschritt, Steam, Preis und Plattformen sowie Lösungen für häufige Probleme.",
    heading: "GRAIN ROT Wiki",
  },
  {
    path: "fr/index.html",
    lang: "fr",
    title: "Wiki GRAIN ROT : guides, coop, ennemis et solutions",
    description:
      "Consultez le wiki GRAIN ROT pour trouver des guides de jeu et des informations sur la coop, le nombre de joueurs, les ennemis, les réglages, la progression, Steam, le prix et les plateformes, ainsi que des solutions aux problèmes courants.",
    heading: "Wiki GRAIN ROT",
  },
  {
    path: "es/index.html",
    lang: "es",
    title: "Wiki de GRAIN ROT: guías, modo cooperativo, enemigos y soluciones",
    description:
      "Encuentra en la wiki de GRAIN ROT guías de juego, información sobre el modo cooperativo y el número de jugadores, enemigos, configuración, progreso, Steam, precio, plataformas y soluciones a problemas comunes.",
    heading: "Wiki de GRAIN ROT",
  },
  {
    path: "pt-br/index.html",
    lang: "pt-BR",
    title: "Wiki de GRAIN ROT: guias, coop, inimigos e soluções",
    description:
      "Consulte a wiki de GRAIN ROT para encontrar guias de jogo e informações sobre modo cooperativo, número de jogadores, inimigos, configurações, progressão, Steam, preço e plataformas, além de soluções para problemas comuns.",
    heading: "Wiki de GRAIN ROT",
  },
  {
    path: "ru/index.html",
    lang: "ru",
    title: "Вики по GRAIN ROT: гайды, кооператив, враги и решение проблем",
    description:
      "Вики по GRAIN ROT с гайдами по игровым механикам, кооперативу, врагам, настройкам и прогрессу, а также сведениями о Steam, цене, платформах и решениях частых проблем.",
    heading: "Вики по GRAIN ROT",
  },
  {
    path: "ja/index.html",
    lang: "ja",
    title: "GRAIN ROT 攻略Wiki：遊び方・協力プレイ・敵・不具合対処",
    description:
      "GRAIN ROTの攻略Wiki。遊び方、協力プレイの人数、敵、設定、進行、Steam版の価格・対応プラットフォーム、よくある不具合の対処法を出典付きでまとめています。",
    heading: "GRAIN ROT 攻略Wiki",
  },
  {
    path: "ko/index.html",
    lang: "ko",
    title: "GRAIN ROT 위키: 공략, 협동, 적, 문제 해결",
    description:
      "GRAIN ROT 공략 위키에서 게임 공략, 협동 플레이와 플레이 인원, 적, 설정, 진행, Steam 가격, 지원 플랫폼, 자주 발생하는 문제의 해결 방법을 확인하세요.",
    heading: "GRAIN ROT 위키",
  },
  {
    path: "uk/index.html",
    lang: "uk",
    title: "Вікі GRAIN ROT: гайди, кооператив, вороги та розв’язання проблем",
    description:
      "У вікі GRAIN ROT зібрано гайди, відомості про кооператив і кількість гравців, ворогів, налаштування, прогрес, ціну в Steam, платформи та розв’язання поширених проблем.",
    heading: "Вікі GRAIN ROT",
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function visibleText(value) {
  return value
    .replaceAll(/<[^>]+>/g, " ")
    .replaceAll("&amp;", "&")
    .replaceAll(/\s+/g, " ")
    .trim();
}

for (const page of pages) {
  const html = readFileSync(join("out", page.path), "utf8");
  const pageHref = page.path === "index.html" ? "/" : `/${page.path.replace("index.html", "")}`;
  const canonicalUrl = `https://grain-rot.online${pageHref}`;
  const encodedTitle = escapeHtml(page.title);
  const encodedDescription = escapeHtml(page.description);

  assert.match(html, new RegExp(`<html[^>]+lang="${escapeRegExp(page.lang)}"`), `${page.path}: lang`);
  assert.match(html, new RegExp(`<title>${escapeRegExp(encodedTitle)}</title>`), `${page.path}: title`);
  assert.match(
    html,
    new RegExp(`<meta name="description" content="${escapeRegExp(encodedDescription)}"`),
    `${page.path}: description`,
  );
  assert.match(html, new RegExp(`<link rel="canonical" href="${escapeRegExp(canonicalUrl)}"`), `${page.path}: canonical`);
  assert.match(html, new RegExp(`<meta property="og:title" content="${escapeRegExp(encodedTitle)}"`), `${page.path}: og title`);
  assert.match(html, new RegExp(`<meta property="og:description" content="${escapeRegExp(encodedDescription)}"`), `${page.path}: og description`);
  assert.match(html, new RegExp(`<meta name="twitter:title" content="${escapeRegExp(encodedTitle)}"`), `${page.path}: twitter title`);
  assert.match(html, new RegExp(`<meta name="twitter:description" content="${escapeRegExp(encodedDescription)}"`), `${page.path}: twitter description`);

  for (const alternate of pages) {
    const alternateHref = alternate.path === "index.html" ? "/" : `/${alternate.path.replace("index.html", "")}`;
    assert.match(
      html,
      new RegExp(`<link rel="alternate" hrefLang="${escapeRegExp(alternate.lang)}" href="https://grain-rot.online${escapeRegExp(alternateHref)}"`),
      `${page.path}: ${alternate.lang} hreflang`,
    );
  }

  const headings = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gs)].map((match) => visibleText(match[1]));
  assert.deepEqual(headings, [page.heading], `${page.path}: unique h1`);
}

const rootHtml = readFileSync(join("out", "index.html"), "utf8");
assert.match(rootHtml, /"alternateName":\["GRAINROT","Grain Rot Wiki"\]/, "index.html: WebSite aliases");

const rootFaviconAssets = [
  "favicon.ico",
  "favicon-48x48.png",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "site.webmanifest",
];
const legacyFaviconAssets = [
  "favicon/favicon.ico",
  "favicon/favicon-16x16.png",
  "favicon/favicon-32x32.png",
  "favicon/favicon-48x48.png",
  "favicon/favicon-96x96.png",
  "favicon/favicon-192x192.png",
  "favicon/favicon-512x512.png",
  "favicon/android-chrome-192x192.png",
  "favicon/android-chrome-512x512.png",
  "favicon/apple-touch-icon.png",
  "favicon/site.webmanifest",
];

for (const asset of [...rootFaviconAssets, ...legacyFaviconAssets]) {
  assert.ok(existsSync(join("out", asset)), `${asset}: exported favicon asset`);
}

assert.match(rootHtml, /<link rel="manifest" href="\/site\.webmanifest"\/>/, "index.html: root manifest");
assert.match(rootHtml, /<link rel="icon" href="\/favicon\.ico"\/>/, "index.html: root ico favicon");
assert.match(
  rootHtml,
  /<link rel="icon" href="\/favicon-48x48\.png" sizes="48x48" type="image\/png"\/>/,
  "index.html: root 48px favicon",
);
assert.match(
  rootHtml,
  /<link rel="apple-touch-icon" href="\/apple-touch-icon\.png"\/>/,
  "index.html: root Apple touch icon",
);

const manifest = JSON.parse(readFileSync(join("out", "site.webmanifest"), "utf8"));
assert.deepEqual(
  manifest.icons.map(({ src, sizes, type }) => ({ src, sizes, type })),
  [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
  "site.webmanifest: root icon URLs",
);

console.log(`Verified localized home SEO for ${pages.length} pages.`);
