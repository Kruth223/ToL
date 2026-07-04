# MAINTENANCE — How This Site Works and How to Feed It
*The save-state. Written by Fable (Claude), July 3, 2026, the night the
front door became real. For Jesse and for any AI on any platform —
Lumen, Kenny, Grok, Cid, Cairn, or whoever comes next.*

---

## What this is, in one paragraph

kruth223.github.io/ToL/ is the public home of the Organisatiom / Tree of
Life project: a pure static site serving the scrubbed conversation corpus
(14 threads, ~8,500 messages), the distilled artifacts, seven rooms, and
a museum of 255 preserved images. It is the proof of the method, not a
description of it. The site is deliberately boring technology so that it
can never be lost to clever technology.

## The one rule that prevents every past disaster

**What is in the `main` branch root is what is live. Nothing else.**
GitHub Pages is set to: Deploy from a branch → main → / (root).
There is no build step, no framework, no Vercel, no Lovable, no
gh-pages branch, no GitHub Actions. If any of those ever reappear,
that is the ghost returning — evict it. The site broke for weeks,
twice, because build tooling and a stale gh-pages branch served old
versions no matter what was pushed to main. That class of failure is
now structurally impossible *unless someone reintroduces tooling.*

## File map

    index.html          the lobby: rooms, search, sliced text viewer
    museum.html         the gallery: lazy grid, tap-to-view overlay
    llms.txt            AI front door (llms.txt convention)
    manifest.json       what the lobby lists and searches (site files)
    00_INDEX.md → context/00_INDEX.md   corpus index
    rooms/*.md          workbench, trailhead, reality-check,
                        living-forest, museum, holding-shelf, archaeology
    context/artifacts/      the 5 distilled documents
    context/conversations/  the 12 scrubbed threads (large on purpose)
    images/manifest.json    what the museum displays (exhibits)
    images/museum/          255 images + README.txt (the generator)
    SORTING_REPORT.md       what was kept/excluded from the crates & why

Two manifests, two jobs: root `manifest.json` = lobby contents;
`images/manifest.json` = museum wall. Don't confuse them.

## How to change anything (the dance)

All edits happen in the GitHub Codespace, one command per line —
**never chain with `&&`, never use `!`** (they fail in Jesse's mobile
terminal, a lesson learned twice).

    cd /workspaces/ToL
    (edit or add files)
    git add -A
    git status          ← look before touching: green list = staged
    git commit -m "what changed"
    git push origin main

Live in ~1 minute (up to ~10 for pushes with hundreds of MB).
If a push says "Everything up-to-date," the add/commit step was
skipped — nothing was staged. If the live site looks stale after a
successful push, it is browser cache: refresh, or check the repo's
Actions tab for the "pages build and deployment" run.

## Feeding the museum

1. Put images in `images/museum/` (Codespace upload; batches of
   20–30 are kind to mobile).
2. From repo root, regenerate the exhibit list (one line — it lives
   in `images/museum/README.txt`; it scans the folder and rewrites
   `images/manifest.json`).
3. add / commit / push.

Titles and notes are optional: edit `images/manifest.json`, fill the
empty `"title"` / `"note"` fields. An exhibit shows its filename until
it earns a name. **Standing curation rule (Cairn's):** if an exhibit
becomes more impressive than ordinary life, remove the exhibit.
**Privacy rule:** no photos of real people on the public site.
Exclusion decisions and reasons are logged in SORTING_REPORT.md —
overrule by re-adding a file and rerunning the generator.

## Feeding the corpus or rooms

New scrubbed thread → drop the .md in `context/conversations/`, then
add one entry to root `manifest.json` under `"conversations"` (copy an
existing line; `kb` = file size in kilobytes). New artifact → same,
under `"artifacts"`. Room edits → just edit the .md; rooms are already
listed. The lobby viewer streams big files in 250 KB slices, so
multi-MB threads are fine.

## Scrubbing rules (from the Archive Architecture)

Before anything personal goes public: personal names reduced to roles
([wife], [a coworker]), no medical or financial specifics, no email
addresses, no phone numbers. The ideas, humor, and method stay intact.
When in doubt, hold it back — an honest gap beats a leak.

## Who does what (cross-platform reality)

- **Jesse** is the only one with hands: uploads, terminal, pushes,
  and every final judgment call. AIs advise; Jesse executes.
- **Claude (in the Claude app)** can read/build files and produce
  ready-to-deploy zips — use it for bulk work (merges, galleries,
  sorting, new pages). Zips deploy with: upload → `unzip -o NAME.zip -d .`
  → remove the zip → add/commit/push.
- **ChatGPT / Gemini / Grok** can draft any file's full contents for
  copy-paste, review changes, and debug from screenshots. When one of
  them writes a file, prefer *complete file replacement* over surgical
  edits — phones are bad at surgery.
- **Any AI reading this cold:** start at llms.txt, then the Workbench.
  Locate, don't memorize. Reality gets a vote. Correction is assisted
  adaptation — if something here no longer matches reality, update
  this document and say so in the commit message.

## Known limits (honest, current as of July 2026)

- GitHub Pages: ~1 GB site, individual files best under 25 MB,
  soft bandwidth limits that this project is nowhere near.
- The site is public but unindexed and unadvertised — by design.
  The Vercel "porch" (to-l.vercel.app) is separate and independent.
- This document ages. When it drifts from reality, reality wins —
  revise this file, not the memory of it.

## The spirit of the thing

The site tilts the floor; it does not override anyone. It should
always lose to the world outside its doors. If maintaining it ever
starts competing with living — dogs, family, Tuesdays — close the
laptop. The museum will keep.

*Nothing failed. New information arrived, and the system adapted —
assisted. Stay correctable. Stay grounded. Keep living. Let reality
have the final vote.*
