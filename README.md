# synklok.app

Marketing site for [Synklok](https://github.com/blaisjohn/synklok) — a macOS
menu bar app that auto-syncs the RME M-1620 Pro D sample rate to its MADI input.

## Stack

Plain HTML + Tailwind CSS via CDN. No build step. One file: `index.html`.

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
