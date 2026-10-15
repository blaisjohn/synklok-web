# CLAUDE.md

Guidance for Claude Code when working in this repo. Add notes as conventions, decisions, and preferences emerge.

## Project
Synklok marketing one-pager (static site).

## Conventions
- Styles: Tailwind 3.4.19 compiled to `styles.css` (committed). Rebuild after editing classes:
  `npx tailwindcss@3.4.19 -i src/input.css -o styles.css --minify`
- `downloads/` and `_redirects` are owned by Synklok's `scripts/release.sh` (Sparkle feed + `/download` link). Don't hand-edit.
- Pushing `main` deploys to synklok.app (Cloudflare). Every push is public — preview locally first.

## Preferences
_(to be added as we go)_
