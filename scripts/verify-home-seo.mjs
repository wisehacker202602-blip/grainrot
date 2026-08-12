import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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
    title: "GRAIN ROT Wiki: Spielguides, Koop, Gegner & Lösungen",
    description:
      "Entdecke im GRAIN ROT Wiki Spielguides, Koop- und Spielerzahlen, Gegner, Einstellungen, Fortschritt, Steam, Preis, Plattformen und Lösungen für häufige Probleme.",
    heading: "GRAIN ROT Wiki",
  },
  {
    path: "fr/index.html",
    lang: "fr",
    title: "Wiki GRAIN ROT : guides, coop, ennemis et solutions",
    description:
      "Explorez le wiki GRAIN ROT : guides de jeu, coop et nombre de joueurs, ennemis, réglages, progression, Steam, prix, plateformes et solutions courantes.",
    heading: "Wiki GRAIN ROT",
  },
  {
    path: "es/index.html",
    lang: "es",
    title: "Wiki de GRAIN ROT: guías, cooperativo, enemigos y soluciones",
    description:
      "Explora la wiki de GRAIN ROT con guías, cooperativo y número de jugadores, enemigos, ajustes, progreso, Steam, precio, plataformas y soluciones frecuentes.",
    heading: "Wiki de GRAIN ROT",
  },
  {
    path: "pt-br/index.html",
    lang: "pt-BR",
    title: "Wiki de GRAIN ROT: guias, co-op, inimigos e soluções",
    description:
      "Explore a wiki de GRAIN ROT com guias, co-op e número de jogadores, inimigos, configurações, progresso, Steam, preço, plataformas e soluções comuns.",
    heading: "Wiki de GRAIN ROT",
  },
  {
    path: "ru/index.html",
    lang: "ru",
    title: "Вики GRAIN ROT: гайды, кооператив, враги и решения",
    description:
      "Изучайте вики GRAIN ROT: гайды, кооператив и число игроков, враги, настройки, прогресс, Steam, цены, платформы и решения частых проблем.",
    heading: "Вики GRAIN ROT",
  },
  {
    path: "ja/index.html",
    lang: "ja",
    title: "GRAIN ROT Wiki：攻略・協力プレイ・敵・不具合対処",
    description:
      "GRAIN ROT Wikiで、遊び方、協力プレイと人数、敵、設定、進行、Steam、価格、対応機種、よくある不具合の対処法を確認できます。",
    heading: "GRAIN ROT Wiki",
  },
  {
    path: "ko/index.html",
    lang: "ko",
    title: "GRAIN ROT 위키: 공략, 협동, 적, 문제 해결",
    description:
      "GRAIN ROT 위키에서 플레이 공략, 협동과 인원수, 적, 설정, 진행, Steam, 가격, 플랫폼, 자주 발생하는 문제 해결법을 확인하세요.",
    heading: "GRAIN ROT 위키",
  },
  {
    path: "uk/index.html",
    lang: "uk",
    title: "Вікі GRAIN ROT: гайди, кооператив, вороги та рішення",
    description:
      "Досліджуйте вікі GRAIN ROT: гайди, кооператив і кількість гравців, вороги, налаштування, прогрес, Steam, ціни, платформи та вирішення частих проблем.",
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

console.log(`Verified localized home SEO for ${pages.length} pages.`);
