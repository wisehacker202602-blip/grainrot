# Root Favicon Compatibility Design

## Goal

Expose the existing favicon assets at conventional site-root URLs while preserving every current `/favicon/*` URL.

## Design

- Keep `public/favicon/` unchanged so cached and existing icon URLs remain valid.
- Add root-level copies for `/favicon.ico`, `/favicon-48x48.png`, `/icon-192.png`, `/icon-512.png`, `/apple-touch-icon.png`, and `/site.webmanifest`.
- Point Next.js metadata at the root-level favicon, 48px PNG, and Apple touch icon.
- Update the web manifest to reference `/icon-192.png` and `/icon-512.png` with absolute paths.
- Do not add an SVG because the project has no source SVG asset and raster support already covers Google and browser requirements.

## Verification

The post-build SEO verifier will assert that all root-level assets exist in `out/`, that the homepage declares the root favicon URLs, and that the manifest references the root icon URLs. A production build and typecheck must pass.
