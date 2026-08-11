# GRAIN ROT Wiki

An evidence-led GRAIN ROT wiki built from the original 20 researched keyword briefs, expanded search-demand pages, and localized versions of two high-intent troubleshooting guides.

The canonical site map is `keywords.json`: 38 search-intent pages in English, German, French, Latin American Spanish, Brazilian Portuguese, Russian, Japanese, Korean, and Ukrainian. Each entry records its canonical URL; navigation and category lists follow measured search demand where available.

The complete unfiltered research archive is `docs/keyword-research-master.md`. It preserves every autocomplete, Google Trends, SimilarWeb, final-map, and early-draft keyword, including noise and spelling variants; original screenshots and the SimilarWeb workbook are stored in `docs/keyword-sources/`.

The official language basis, locale paths, and translation scope are recorded in `docs/localization.md`.

## Stack

- Next.js App Router with TypeScript
- Static export for low-cost hosting
- MDX articles with GFM tables
- Local Steam media assets
- Client-side article search and category filtering

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

The production-ready static output is written to `out/`.

## Content model

Every article lives in `content/guides/*.mdx` and includes frontmatter for:

- SEO title and description
- Search intent and direct answer
- Category and evidence level
- Review date and reading time
- Related articles and local cover media

The evidence levels are `Official`, `Official + community`, and `Community observed`.

## Production deployment

The canonical origin is `https://grain-rot.online`. Deploy the generated `out/` directory and configure the host to serve `out/404.html` for unknown routes. Editorial corrections use the repository's GitHub Issues page.
