# GRAIN ROT Wiki

An evidence-led GRAIN ROT wiki built from the original 20 researched keyword briefs in `keyword-materials/` and four expanded search-demand pages.

The canonical site map is `keywords.json`: 24 search-intent pages grouped into Platforms, Game Info, Guides, Help, Enemies, Community, and Español. Each entry records its canonical URL; navigation and category lists follow measured search demand where available.

The complete unfiltered research archive is `docs/keyword-research-master.md`. It preserves every autocomplete, Google Trends, SimilarWeb, final-map, and early-draft keyword, including noise and spelling variants; original screenshots and the SimilarWeb workbook are stored in `docs/keyword-sources/`.

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

## Before production deployment

Update `siteConfig.url` in `lib/site.ts` to the final domain and provision the editorial email shown on the contact page.
