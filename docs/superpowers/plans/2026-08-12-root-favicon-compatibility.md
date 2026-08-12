# Root Favicon Compatibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve the existing favicon artwork from conventional root URLs while retaining the current `/favicon/*` URLs.

**Architecture:** Keep `public/favicon/` as the canonical compatibility set and add root-level copies for conventional consumers. Next.js metadata and the web manifest will advertise root URLs, and the existing post-build verifier will enforce both exported assets and HTML declarations.

**Tech Stack:** Next.js 16 metadata, static export, Node.js assertions, PNG/ICO/JSON assets

---

### Task 1: Add failing root-favicon export checks

**Files:**
- Modify: `scripts/verify-home-seo.mjs`
- Test: `scripts/verify-home-seo.mjs`

- [ ] **Step 1: Write the failing verification**

Import `existsSync`, define the required root asset paths, assert each exists in `out/`, assert `out/index.html` declares `/favicon.ico`, `/favicon-48x48.png`, `/apple-touch-icon.png`, and `/site.webmanifest`, then parse the exported manifest and assert its two root icon paths.

- [ ] **Step 2: Run the verifier to confirm RED**

Run: `node scripts/verify-home-seo.mjs`

Expected: FAIL because `out/favicon.ico` does not exist.

### Task 2: Add root favicon resources and metadata

**Files:**
- Create: `public/favicon.ico`
- Create: `public/favicon-48x48.png`
- Create: `public/icon-192.png`
- Create: `public/icon-512.png`
- Create: `public/apple-touch-icon.png`
- Create: `public/site.webmanifest`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add root-level asset copies**

Copy the existing files without removing their `/favicon/*` sources:

```text
public/favicon/favicon.ico -> public/favicon.ico
public/favicon/favicon-48x48.png -> public/favicon-48x48.png
public/favicon/favicon-192x192.png -> public/icon-192.png
public/favicon/favicon-512x512.png -> public/icon-512.png
public/favicon/apple-touch-icon.png -> public/apple-touch-icon.png
```

- [ ] **Step 2: Add the root manifest**

Create `public/site.webmanifest` with the existing name, colors, and display mode, but use absolute `/icon-192.png` and `/icon-512.png` icon paths.

- [ ] **Step 3: Advertise root URLs in metadata**

Update `app/layout.tsx` so `metadata.icons` advertises `/favicon.ico`, `/favicon-48x48.png` with `48x48`, and `/apple-touch-icon.png`; set `manifest: "/site.webmanifest"`.

- [ ] **Step 4: Build and confirm GREEN**

Run: `npm run build`

Expected: PASS, including `Verified localized home SEO for 9 pages.`

### Task 3: Final verification

**Files:**
- Verify all modified and created files

- [ ] **Step 1: Run type checking**

Run: `npm run typecheck`

Expected: PASS with no TypeScript errors.

- [ ] **Step 2: Verify copied assets are identical**

Run `cmp` for each root raster/ICO file against its source under `public/favicon/`.

Expected: every comparison exits successfully.

- [ ] **Step 3: Inspect the final diff**

Run: `git diff --check` and `git status --short`

Expected: no whitespace errors; only the planned favicon, metadata, verifier, and plan files are changed.
