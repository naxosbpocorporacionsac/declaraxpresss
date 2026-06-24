# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server (localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview built dist locally
```

After every change: build, then regenerate the deploy zip:
```bash
npm run build && rm -f declaraxpress-deploy.zip && zip -rq declaraxpress-deploy.zip dist/
```

Then push:
```bash
git add <files> && git commit -m "..." && git push origin main
```

## Deployment

- **Production**: cPanel at `new.declaraxpress.com` — upload `declaraxpress-deploy.zip` via File Manager, extract into `public_html/`, move contents up one level.
- **Legacy**: Railway (`declaraxpresss-production.up.railway.app`) — still live but no longer the primary target.
- `public/.htaccess` handles SPA routing on cPanel (serves `index.html` for all non-file requests).
- `public/contact.php` handles form submissions via PHP `mail()` — no Express server needed.
- After uploading to cPanel, set permissions `644` on all files in `assets/` or images will 403.

## Architecture

**Routing** — no React Router. `App.jsx` reads `window.location.pathname` and renders the matching page component. New pages go in `src/pages/`, register the path check in `App.jsx`.

**Environment variables** — all `VITE_*` vars are baked into the JS bundle at build time. There is no `.env` on the server. Edit `.env` locally, then rebuild and re-upload.

Key vars: `VITE_WA_NUMBER`, `VITE_GA_MEASUREMENT_ID`, `VITE_GADS_ID`, `VITE_GADS_CONVERSION_LABEL`.

**Tracking** — `Analytics.jsx` injects GA4, GTM, Meta Pixel, TikTok, LinkedIn, and Google Ads scripts. `window.gtagConversion()` fires on contact form submit (wired in `CtaBand.jsx`).

**Hero** — `HeroB.jsx` is the only hero. It uses a `background-image` div with a ken-burns CSS animation (`@keyframes hero-zoom`, 25s). The overlay gradient is defined under `.hero--b .hero-overlay` in `styles.css`.

**Contact form** — `CtaBand.jsx` POSTs JSON to `/contact.php`. Fields: `nombre` (required), `whatsapp` (required), `email`, `ruc`, `mensaje`.

**Styles** — single `src/styles.css`. No CSS modules or Tailwind.

## Critical rule

**Do not change text content (headings, subtitles, button labels, checklist items) unless the user explicitly provides the exact new text.** The owner reviews every word carefully and reverts unauthorized changes. When in doubt, ask before editing copy.
