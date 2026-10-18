# CLAUDE.md

Guidance for Claude Code when working in this repo. Add notes as conventions, decisions, and preferences emerge.

## Project
Synklok marketing one-pager (static site).

## Conventions
- Styles: Tailwind 3.4.19 compiled to `styles.css` (committed). Rebuild after editing classes:
  `npx tailwindcss@3.4.19 -i src/input.css -o styles.css --minify`
- `downloads/` and `_redirects` are owned by Synklok's release scripts. Don't hand-edit. `scripts/release.sh` (Mac): DMGs, `appcast.xml`, `/download`. `scripts/release-windows.sh`: `appcast-windows.xml`, `/download-windows`. Windows installers (~34 MB) live on GitHub Releases (blaisjohn/synklok, tag `windows-<version>`) because Cloudflare Pages caps files at 25 MiB.
- Design: "studio hardware" direction (chosen 2026-10-15) — brushed panels, LED displays (`.panel`, `.window`, `.glow-green`, `.dot-*` in src/input.css). Keep the rack demo in the hero.
- No third-party requests: fonts are self-hosted in `fonts/`.
- Pushing `main` deploys to synklok.app (Cloudflare). Every push is public — preview locally first.

## Preferences
_(to be added as we go)_
