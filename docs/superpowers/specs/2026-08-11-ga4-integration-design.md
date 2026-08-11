# GA4 Integration Design

## Goal

Add Google Analytics 4 measurement `G-1X7ES1XVD0` to every production page without sending analytics events from local development.

## Implementation

- Import Next.js `Script` in the root App Router layout.
- In production builds only, load `https://www.googletagmanager.com/gtag/js?id=G-1X7ES1XVD0` with the `afterInteractive` strategy.
- Add an identified inline `Script` that creates `window.dataLayer`, defines `gtag`, and configures the supplied measurement ID.
- Keep the integration in the root layout so it is emitted once and applies to all routes.
- Do not add a third-party package or change the site's rendering model.

## Verification

- Establish a failing baseline by confirming the current production export does not contain the measurement ID.
- Run the TypeScript check and production build.
- Confirm the generated `out/index.html` contains the external Google tag URL, inline initialization, and measurement ID.
- Confirm the development build path excludes the integration through the production-only condition in the root layout.

## Delivery

Commit the implementation and push the resulting commits to `origin/main`.
