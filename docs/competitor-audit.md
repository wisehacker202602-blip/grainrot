# GRAIN ROT Competitor Audit

Review date: August 11, 2026

Sites reviewed:

- https://grainrot.online/
- https://grainrot.org/
- https://www.grain-rot.com/

The review covered each homepage, representative index and article pages, desktop layout, and a 390 x 844 mobile viewport.

## Positioning decision

The new site is an **industrial field manual**, not a news portal and not an exhaustive database pretending that every value is known. It targets players who need one answer before or during a run. Its product advantage is visible source quality: official facts, mixed evidence, and community observations are labeled separately.

The visual system uses neutral charcoal and paper tones, fire orange for actions, cyan for navigation and mixed evidence, and green for official verification. This stays connected to the game without repeating the single orange-brown palette shared by the competitors.

## grainrot.online

### Strong choices

- Clear Guides and Wiki split.
- Search is present in the persistent header.
- Article pages include breadcrumbs, read time, a table of contents, related pages, and an updated context.
- Unknown mechanics are sometimes marked TBA instead of completed with guesses.
- Mobile navigation collapses and the hero remains readable.

### Weak choices

- The homepage is extremely dense and repeats the same destinations in several directories.
- A bottom advertising popup covers useful first-viewport content.
- The desktop hero places a large information panel beside the main message, creating two competing entry points.
- Article sidebars repeat a very large site directory after the table of contents.
- Some pages spend too much text explaining that information is unverified instead of answering the player's immediate question.

### What we adopted

- Search, table of contents, evidence caution, related pages, and last-reviewed context.

### What we rejected

- Popup ads, duplicate navigation directories, oversized article sidebars, and a competing hero panel.

## grainrot.org

### Strong choices

- The clearest desktop visual hierarchy of the three sites.
- Concise top navigation organized by gameplay domain.
- Home content routes into a structured guide library.
- Article pages use strong headings, readable line length, breadcrumbs, and visible update dates.
- Mobile header collapses into a practical menu button.

### Weak choices

- The palette is almost entirely orange and brown, reducing visual differentiation between actions, facts, and warnings.
- Several detailed mechanics go beyond the official evidence, including named detection models, roster claims, and fixed strategy language.
- The homepage navigation suggests a mature, exhaustive database even where the released game still lacks verified public data.
- Articles have limited in-page navigation on desktop compared with their length.

### What we adopted

- Strong hierarchy, moderate content width, direct opening copy, domain-based grouping, and restrained card radius.

### What we rejected

- Unlabeled certainty, single-hue theming, and category depth unsupported by the research material.

## grain-rot.com

### Strong choices

- The homepage explicitly routes major search keywords to dedicated pages.
- Individual articles open with a direct answer and use question-based H2 headings.
- Legal and informational pages are present.
- The layout is simple and fast to understand.

### Weak choices

- The desktop and mobile header expose too many links at once; the mobile header consumes about 215 pixels before content.
- An embedded trailer occupies the first major homepage viewport, pushing the actual H1 and value proposition down.
- The homepage H1 combines several keywords into one long headline instead of establishing a clear product identity.
- The information architecture is shallow and does not provide a proper searchable Wiki index.
- Some article claims are more precise than the available official evidence.

### What we adopted

- One search intent per article, question-shaped sections, direct answers, and the required legal pages.

### What we rejected

- Expanded mobile navigation, video-first hero composition, keyword-stuffed H1 text, and unqualified precision.

## Final information architecture

```text
Home
├── Guides directory
│   ├── Availability
│   ├── Troubleshooting
│   ├── Guide
│   ├── Community Resources
│   ├── Player Count
│   ├── AI
│   ├── Enemies
│   └── Settings
├── Wiki index
├── 20 keyword-focused MDX articles
├── About and source policy
├── Contact
└── Privacy
```

## Content rules

1. One search intent gets one canonical article.
2. The first paragraph answers the query directly.
3. Demo history and full-release behavior are separated.
4. Dynamic prices, member counts, and catalog sizes show a review date.
5. No enemy name, hard player limit, control, upgrade cost, or graphics feature is invented to complete a table.
6. Official sources lead; community reports remain useful but visibly labeled.
