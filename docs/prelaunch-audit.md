# GRAIN ROT Wiki Prelaunch Audit

Audit date: 2026-08-11  
Production preview: `http://127.0.0.1:3003/`  
Verdict: **Ready to launch (`可以上线`) after the normal deployed-origin smoke test.**

## 1. Scope and project map

- Stack: Next.js 16.3 App Router, React 19.2, TypeScript 5.9, MDX via `next-mdx-remote`, static export.
- Routes: 38 MDX article routes, 19 static index/legal or locale routes, and a generated 404.
- Content: `content/guides/*.mdx`; routing and ordering: `lib/site.ts`; article loader: `lib/content.ts`.
- Existing checks: `npm run typecheck` and `npm run build`. There is no lint, unit-test, Lighthouse, or automated accessibility command in `package.json`.
- Original audit coverage: all 37 original user-facing routes at desktop and 390px; seven key routes additionally at 360px and 768px. Localization regression coverage: all 24 localized hubs/articles at 390px, with key routes and the language menu additionally checked at 360px, 768px, and desktop.

Checked routes:

- Core: `/`, `/wiki/`, `/about/`, `/contact/`, `/privacy/`, `/disclaimer/`, `/404/`.
- Platforms: `/platforms/`, `/platforms/price/`, `/platforms/steam/`, `/platforms/console/`, `/platforms/psn/`, `/platforms/free-to-play/`, `/platforms/release-date/`, `/platforms/demo/`, `/platforms/ps5/`, `/platforms/xbox/`, `/platforms/system-requirements/`.
- Game info: `/game-info/`, `/game-info/how-many-players/`, `/game-info/ai-disclosure/`.
- Guides: `/guides/`, `/guides/turn-off-flashlight/`, `/guides/upgrade-the-shop/`, `/guides/how-to-play/`.
- Help and enemies: `/help/`, `/help/spark-cannot-move/`, `/help/demo-not-working/`, `/help/options/`, `/enemies/`.
- Community: `/community/`, `/community/discord/`, `/community/mods/`, `/community/wiki-resources/`.
- Localized hubs and guides: `/de/`, `/fr/`, `/es/`, `/pt-br/`, `/ru/`, `/ja/`, `/ko/`, and `/uk/`; each locale has translated flashlight and Spark-movement pages listed in `docs/localization.md`.

## 2. Findings by priority

### P0 - none

The production origin is now `https://grain-rot.online`. Canonical URLs, Open Graph assets, `robots.txt`, `sitemap.xml`, and Article/WebSite JSON-LD all use that origin.

### P1 - fixed

1. Ten static pages lacked canonical URLs and page-specific Open Graph metadata. All indexable static pages now have canonical, OG, and Twitter metadata.
2. `/platforms/steam/` overflowed horizontally at 390px and 360px because its visible Steam URL could not wrap. Article links now use `overflow-wrap: anywhere`.
3. `/platforms/console/` linked to a confirmed Xbox Store 404. It now links to the exact Microsoft Store search URL.
4. The site used the generic white Next.js 404. A branded, responsive, noindex 404 now ships as `out/404.html`.
5. There was no Disclaimer page. `/disclaimer/` now exists and is linked from the footer and sitemap.
6. Privacy copy did not disclose the homepage YouTube embed. `/privacy/` now explains the third-party request and storage implications.
7. Article Twitter cards inherited homepage copy. They now use each article's title, description, and image.
8. The original contact email had no MX-backed delivery path. `/contact/` now uses the repository's verified GitHub Issues URL instead.
9. Non-English production pages initially inherited root `lang="en"`. The build now rewrites all 24 localized HTML outputs to their exact locale, including `pt-BR`, while a route-aware client sync keeps the language correct during in-app navigation.
10. The site only exposed English and Spanish. It now has 9 selected audience locales, a complete language menu, locale-aware search, translated article chrome, 8 localized hubs, 16 translated guides, and reciprocal `hreflang` links. Chinese locales are intentionally excluded.
11. The first 360px language-menu implementation was clipped on the left. The menu is now fixed to the mobile viewport with 14px side clearance.
12. Localized pages originally left the primary navigation, dropdown labels, evidence badges, and footer in English. All shared chrome now follows the active locale, including mobile navigation labels and footer policy links.

### P2 - unresolved/manual

1. `/wiki/` and `/community/wiki-resources/` both contain the target phrase `grain rot wiki`. Their present titles and copy differentiate directory intent from official/fan-resource intent; keep this distinction in future edits to avoid cannibalization.
2. Homepage exact-phrase density is 7.74% because the complete directory repeats article titles. This is structural navigation, not prose stuffing. Do not add or remove phrases solely to hit a density target.
3. Several natural-language titles do not contain the exact keyword in contiguous order, producing a 0 exact-match count. The intent remains clear in TDH and opening copy; no mechanical rewrite was made.
4. Microsoft Store and SteamDB return 403 to automated HEAD checks. Microsoft Store opened in the browser with the correct search title. SteamDB displayed an explicit network/sign-in restriction, not a missing page.
5. The local WEBrick preview returns its own response for arbitrary missing URLs, although Next generated the correct `out/404.html`. Confirm that the production host maps unknown routes to this file.
6. Security headers such as CSP, HSTS, and Permissions-Policy are deployment concerns and should be checked once the public origin is serving traffic.

## 3. Content, links, SEO, accessibility, and security

- All 38 article pages have exactly one H1 and an opening Direct Answer.
- No duplicate Title, Description, or H1 was found across the 37 checked routes.
- No TODO, filler copy, empty module, broken image, missing `alt` attribute, invalid JSON-LD, empty link, unlabeled input, or browser console error was found.
- No confirmed stale game name, placeholder domain, TODO, or nonfunctional contact address remains in the production source/output.
- 202 unique internal destinations/anchors were checked with no broken route or anchor. No orphan page was found.
- 33 unique external URLs were checked: 31 returned below 400; the two automated 403 cases are documented above.
- All 57 indexable pages appear in `sitemap.xml`, and every sitemap route has an internal link.
- `robots.txt` allows crawling and points at the sitemap. The 404 contains `noindex`.
- Favicons, logo, responsive tables, long links, search, menu, Escape handling, and `Cmd/Ctrl+K` search were checked.
- Repository scan found no `.env` file, API key, token, private key, or obvious credential.
- Images are WebP, 40-224 KB each, with 1200-1920px source widths. Hero images are eager/priority; repeated article-card images are lazy. The above-fold YouTube embed is the largest likely third-party performance cost.

## 4. TDH and keyword table

Counts use exact contiguous, case-insensitive matches in visible `<main>` text. Density is `(exact matches x words in target phrase) / visible word count`; it is a diagnostic, not a target.

| Page | Rendered Title | Description | H1 | Target keyword | Exact / words / density |
|---|---|---|---|---|---:|
| `/` | GRAIN ROT Wiki, Guides & Platform Status | An independent GRAIN ROT wiki covering platforms, guides, player counts, enemies, fixes, settings, and community resources. | GRAIN ROT Wiki & Guides | grain rot | 37 / 956 / 7.74% |
| `/platforms/` | GRAIN ROT Platforms, Price & Release \| GRAIN ROT Wiki | GRAIN ROT price, Steam release, Demo, PC requirements, PS5, PSN, Xbox, Game Pass, and console status. | Platforms, Price & Release | grain rot platforms | 0 / 575 / 0% |
| `/platforms/price/` | GRAIN ROT Price: Base Cost and Launch Discount \| GRAIN ROT Wiki | GRAIN ROT launched at US$9.99 with a limited 10% Steam discount; check the live store for regional currency, tax, bundles, and future sales. | GRAIN ROT Price: Base Cost and Launch Discount | grain rot price | 2 / 579 / 1.04% |
| `/platforms/steam/` | GRAIN ROT on Steam: Official Store and PC Details \| GRAIN ROT Wiki | Find the official GRAIN ROT Steam page, App ID, Windows requirements, co-op features, developer, publisher, and current store status. | GRAIN ROT on Steam: Official Store and PC Details | grain rot steam | 1 / 590 / 0.51% |
| `/platforms/console/` | GRAIN ROT Console Guide: PS5, PSN, Xbox & Game Pass \| GRAIN ROT Wiki | Check the current GRAIN ROT console status across PS5, PSN, Xbox, and Game Pass from one verified platform guide. | GRAIN ROT Console Guide: PS5, PSN, Xbox & Game Pass | grain rot console | 3 / 545 / 1.65% |
| `/platforms/psn/` | GRAIN ROT PSN and PlayStation Store Status \| GRAIN ROT Wiki | There is no official GRAIN ROT PSN or PlayStation Store listing as of August 11, 2026; the released version is for Windows PC on Steam. | GRAIN ROT PSN and PlayStation Store Status | grain rot psn | 6 / 528 / 3.41% |
| `/platforms/free-to-play/` | Is GRAIN ROT Free to Play? \| GRAIN ROT Wiki | GRAIN ROT is a paid Steam game, not free-to-play; a pre-launch 24-hour Discord event and the retired Demo were separate promotions. | Is GRAIN ROT Free to Play? | grain rot free to play | 2 / 539 / 1.86% |
| `/platforms/release-date/` | GRAIN ROT Release Date: Out Now on Steam \| GRAIN ROT Wiki | GRAIN ROT released on August 7, 2026 for Windows PC through Steam, developed by Beck & Branch Games and published by Neem Interactive. | GRAIN ROT Release Date: Out Now on Steam | grain rot release date | 2 / 526 / 1.52% |
| `/platforms/demo/` | GRAIN ROT Demo: Is It Still Available? \| GRAIN ROT Wiki | The GRAIN ROT Demo was released before launch but is no longer publicly available on Steam as of August 11, 2026; use the full-game listing instead. | GRAIN ROT Demo: Is It Still Available? | grain rot demo | 7 / 565 / 3.72% |
| `/platforms/ps5/` | Is GRAIN ROT on PS5? Current Platform Status \| GRAIN ROT Wiki | GRAIN ROT is not currently listed for PS5; the confirmed release is Windows PC through Steam, with no official PlayStation date announced. | Is GRAIN ROT on PS5? Current Platform Status | grain rot ps5 | 0 / 571 / 0% |
| `/platforms/xbox/` | Is GRAIN ROT on Xbox or Game Pass? \| GRAIN ROT Wiki | GRAIN ROT is not currently available on Xbox or Game Pass; the confirmed release is Windows PC on Steam, with no console date announced. | Is GRAIN ROT on Xbox or Game Pass? | grain rot xbox | 0 / 527 / 0% |
| `/platforms/system-requirements/` | GRAIN ROT System Requirements: PC Specs \| GRAIN ROT Wiki | Check the verified minimum GRAIN ROT PC requirements shown on Steam, including Windows, memory, DirectX, and storage. | GRAIN ROT System Requirements: PC Specs | grain rot system requirements | 2 / 467 / 1.71% |
| `/game-info/` | GRAIN ROT Game, Developer & Neem Publisher \| GRAIN ROT Wiki | What GRAIN ROT is, who developed it, Neem Interactive's publisher role, player count, and AI disclosure. | GRAIN ROT Game Info | grain rot game | 1 / 206 / 1.46% |
| `/game-info/how-many-players/` | GRAIN ROT Player Count: Co-op and Lobby Limits \| GRAIN ROT Wiki | GRAIN ROT is officially a 1-4 player online co-op game, with solo support and configurable lobby size added in Patch 1.04. | GRAIN ROT Player Count: Co-op and Lobby Limits | grain rot how many players | 0 / 796 / 0% |
| `/game-info/ai-disclosure/` | Does GRAIN ROT Use AI? Disclosure Explained \| GRAIN ROT Wiki | A pre-release Steam disclosure said generative AI was used for some character voice-over, but it did not say the full game or all voices were AI-generated. | Does GRAIN ROT Use AI? Disclosure Explained | grain rot ai | 0 / 607 / 0% |
| `/guides/` | GRAIN ROT Guides \| GRAIN ROT Wiki | GRAIN ROT guides for flashlight controls, upgrading the Shop, and learning the first-run extraction loop. | GRAIN ROT Guides | grain rot guides | 1 / 223 / 1.35% |
| `/guides/turn-off-flashlight/` | How to Turn Off the Flashlight in GRAIN ROT \| GRAIN ROT Wiki | Press R to toggle the GRAIN ROT flashlight on keyboard; if it does not work, check the current Flashlight action in Controls for a remap. | How to Turn Off the Flashlight in GRAIN ROT | grain rot turn off flashlight | 0 / 574 / 0% |
| `/guides/upgrade-the-shop/` | How to Upgrade the Shop in GRAIN ROT \| GRAIN ROT Wiki | Upgrade the GRAIN ROT Shop by repairing and cleaning its Outpost room, then building and placing furniture to raise the room rating. | How to Upgrade the Shop in GRAIN ROT | grain rot upgrade the shop | 0 / 658 / 0% |
| `/guides/how-to-play/` | How to Play GRAIN ROT: First-Run Guide \| GRAIN ROT Wiki | Learn the GRAIN ROT core loop, Living Spark recovery, Deep Layer extraction, and Outpost progression before your first serious run. | How to Play GRAIN ROT: First-Run Guide | how to play grain rot | 2 / 1062 / 0.94% |
| `/help/` | GRAIN ROT Help, Fixes & Settings \| GRAIN ROT Wiki | Fix Spark movement, understand Demo availability problems, and configure GRAIN ROT controls, video, audio, and lobby options. | Help, Fixes & Settings | grain rot help | 0 / 234 / 0% |
| `/help/spark-cannot-move/` | GRAIN ROT Spark Cannot Move: Glow or Bug? \| GRAIN ROT Wiki | If your GRAIN ROT Spark cannot move, check fading Glow and nearby light or teammates first, then treat total input loss as a possible bug. | GRAIN ROT Spark Cannot Move: Glow or Bug? | grain rot spark cannot move | 3 / 636 / 2.36% |
| `/help/demo-not-working/` | GRAIN ROT Demo Not Working: Current Fix \| GRAIN ROT Wiki | The GRAIN ROT Demo is no longer publicly distributed, so a missing page or failed download is usually availability, not a PC configuration error. | GRAIN ROT Demo Not Working: Current Fix | grain rot demo not working | 2 / 622 / 1.61% |
| `/help/options/` | GRAIN ROT Options: Controls, Comfort, and Lobby Settings \| GRAIN ROT Wiki | Use current GRAIN ROT Game, Audio, Video, Accessibility, Controls, and Multiplayer options without relying on unverified graphics tweaks. | GRAIN ROT Options: Controls, Comfort, and Lobby Settings | grain rot options | 2 / 782 / 0.77% |
| `/enemies/` | GRAIN ROT Enemies & Monsters: Corrupted Guide \| GRAIN ROT Wiki | Learn what GRAIN ROT confirms about enemies, monsters, Corrupted vessels, bosses, elites, and the community names used for Demo encounters. | GRAIN ROT Enemies & Monsters: Corrupted Guide | grain rot enemies | 3 / 811 / 1.11% |
| `/community/` | GRAIN ROT Community Resources \| GRAIN ROT Wiki | Verified GRAIN ROT Discord, current modding status, and a source-checked guide to official and fan wiki resources. | Community Resources | grain rot community | 0 / 209 / 0% |
| `/community/discord/` | Official GRAIN ROT Discord: Verified Invite \| GRAIN ROT Wiki | Join the official GRAIN ROT Discord through the invite linked by Steam, and verify the destination before using community support or announcements. | Official GRAIN ROT Discord: Verified Invite | grain rot discord | 4 / 536 / 2.24% |
| `/community/mods/` | GRAIN ROT Mods: Current Thunderstore Status \| GRAIN ROT Wiki | GRAIN ROT modding is at an early loader stage on Thunderstore, with no mature content library, official SDK, Workshop support, or published mod policy. | GRAIN ROT Mods: Current Thunderstore Status | grain rot mods | 2 / 591 / 1.02% |
| `/community/wiki-resources/` | GRAIN ROT Wiki: Official and Fan Resource Guide \| GRAIN ROT Wiki | There is no developer-endorsed official GRAIN ROT wiki; use Steam, patch notes, Discord, and clearly labeled fan resources with source checks. | GRAIN ROT Wiki: Official and Fan Resource Guide | grain rot wiki | 7 / 643 / 3.27% |
| `/wiki/` | GRAIN ROT Wiki Index \| GRAIN ROT Wiki | Browse every GRAIN ROT wiki page by platform, game information, guide, fix, enemy, and community category. | GRAIN ROT Wiki Index | grain rot wiki | 2 / 349 / 1.72% |
| `/es/` | Guías de GRAIN ROT en Español \| GRAIN ROT Wiki | Respuestas en español para no puedo mover el Spark y cómo apagar la linterna en GRAIN ROT. | GRAIN ROT en Español | grain rot español | 0 / 131 / 0% |
| `/es/grain-rot-apagar-linterna/` | Cómo Apagar la Linterna en GRAIN ROT \| GRAIN ROT Wiki | Pulsa R para apagar o encender la linterna en GRAIN ROT; si no funciona, revisa la acción Flashlight en los controles. | Cómo Apagar la Linterna en GRAIN ROT | grain rot apagar linterna | 0 / 373 / 0% |
| `/es/grain-rot-no-puedo-mover/` | GRAIN ROT: No Puedo Mover el Spark \| GRAIN ROT Wiki | Qué hacer si no puedes mover el Spark en GRAIN ROT: revisa el Glow, busca luz o un compañero y separa la mecánica normal de un posible error. | GRAIN ROT: No Puedo Mover el Spark | grain rot no puedo mover | 0 / 450 / 0% |
| `/about/` | About \| GRAIN ROT Wiki | How the independent GRAIN ROT Wiki researches, labels, and updates player information. | About this wiki | N/A - utility page | - / 182 / - |
| `/contact/` | Contact \| GRAIN ROT Wiki | Report an outdated GRAIN ROT guide, missing source, or correction. | Contact the wiki | N/A - utility page | - / 119 / - |
| `/privacy/` | Privacy Policy \| GRAIN ROT Wiki | Privacy policy for the GRAIN ROT Wiki, including hosting data, external links, and the embedded YouTube player. | Privacy policy | N/A - utility page | - / 213 / - |
| `/disclaimer/` | Disclaimer \| GRAIN ROT Wiki | Disclaimer covering the independent status, accuracy limits, external links, and game assets used by the GRAIN ROT Wiki. | Disclaimer | N/A - utility page | - / 196 / - |
| `/404/` | Page Not Found \| GRAIN ROT Wiki | The requested GRAIN ROT Wiki page could not be found. | Page not found | N/A - noindex | - / 31 / - |

## 5. Build and responsive verification

- `npm run typecheck`: passed.
- `npm run build`: passed; Next generated 61 static outputs including 57 indexable pages, metadata routes, and 404 artifacts. The postbuild check localized all 24 non-English HTML files with the correct root language.
- Desktop: all 37 routes passed viewport-width, H1, TDH, canonical (except noindex 404), image, label, JSON-LD, and console checks.
- 390px: all 37 routes passed with no document-level overflow or out-of-bounds content. The former Steam long-link overflow is fixed.
- 360px and 768px: the original key-route set plus `/de/`, `/pt-br/spark-nao-se-move/`, `/ru/vyklyuchit-fonar/`, and `/ja/spark-cannot-move/` passed.
- Visual screenshots were inspected for homepage, Platforms, How to Play, Steam, Spanish help, Privacy, Disclaimer, and 404 at desktop/mobile sizes. No overlap, clipping, image distortion, or incoherent layout was found. The YouTube preview loaded after the third-party player initialized.
- Mobile menu, submenu, search results, keyboard shortcut, Escape close behavior, table scrolling, long-link wrapping, and 40px separated header controls were checked successfully.

## 6. Launch decision

**可以上线.** The production origin is configured as `https://grain-rot.online`, the invalid email dependency has been removed, the production build passes, and the responsive/browser checks pass. After deployment, run one smoke test against the public origin to confirm DNS/HTTPS, security headers, and unknown-route mapping to `404.html`.
