# synklok.app

Marketing site for [Synklok](https://github.com/blaisjohn/synklok) — a Mac
menu bar and Windows tray app that auto-syncs the RME M-1620 Pro D sample rate to its MADI input.

## Stack

Plain HTML in `index.html`, styled with Tailwind compiled to a committed
`styles.css`. After changing classes in `index.html`, rebuild it:

```bash
npx tailwindcss@3.4.19 -i src/input.css -o styles.css --minify
```

`downloads/` (DMGs + Sparkle `appcast.xml`, and the Windows update feed
`appcast-windows.xml`) and `_redirects` (the `/download` and `/download-windows`
links) are written by Synklok's `scripts/release.sh` and
`scripts/release-windows.sh` — don't edit them by hand. Windows installers are
too big for Cloudflare Pages (25 MiB per file), so they're GitHub release
assets on blaisjohn/synklok and `/download-windows` redirects there.
The LED display face (Share Tech Mono, SIL OFL — `fonts/share-tech-mono-OFL.txt`) is
self-hosted in `fonts/` so the page makes no third-party requests.
`og.png` and `apple-touch-icon.png` come from Synklok's `scripts/make-og-image.swift`
and `scripts/make-icon.swift --full-bleed`.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Connected to **Cloudflare Pages**. Pushes to `main` auto-deploy to
[synklok.app](https://synklok.app).

## License

Site copy © 2026. Not affiliated with RME Audio / Synthax.
