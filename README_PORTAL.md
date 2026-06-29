# TREE OF LIFE — CONTEXT PORTAL (GitHub Pages)

A clean, transparent, fully-owned context portal for the project. Plain static
files. No build step, no framework, no server. Drop into a GitHub repo, turn on
Pages, done. Built for GitHub — NOT Vercel.

## What's here

```
index.html              the portal (search bar + file viewer, data-driven)
manifest.json           the file list — ADD A FILE HERE = it appears (one line)
llms.txt                AI front door — how an AI should use this site
context/
  00_INDEX.md           human-readable orientation
  artifacts/            the distilled load-bearing docs (Workbench, Archive
                        Architecture, Lantern Ledger, etc.)
  conversations/        the scrubbed archaeology — where ideas were built
                        (lumen, luna, morrow, veyra_soma, cairn, + smaller threads)
```

## What it does

- **Search bar** — filters the file list live as you type. This is the human's
  tool: an AI can read 50,000 files in seconds, a person can't. Search puts the
  human on equal footing.
- **Raw file viewer** — tap any file, it loads and displays the plain text,
  properly escaped (no broken rendering on big files). Transparent by design.
- **Data-driven** — the sidebar reads from `manifest.json`. To add a file later:
  drop the file in the right folder, add one line to manifest.json. No HTML edits.
- **Mobile-first** — sidebar collapses above the viewer on phones.
- **Workbench is in** — top of the artifacts, as the orientation tool.

## Deploy to GitHub Pages (phone-friendly)

1. Put these files in your repo (the ToL repo, or a fresh one). Easiest path:
   StackBlitz or the GitHub web uploader in desktop-site mode unpacks the zip
   with folders intact — you do ONE import, no folder-building.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → pick `main`
   and `/ (root)` (or `/docs` if you put it there) → Save.
3. Wait ~1 minute. Your portal is live at `kruth223.github.io/<repo>/`.

GitHub Pages serves these files exactly as-is. No build, nothing to break. All
paths are relative, so it works under the `/ToL/` subpath automatically.

## To add more context later

1. Drop the new `.md` or `.txt` into `context/artifacts/` or `context/conversations/`.
2. Add one line to `manifest.json` in the right section:
   `{ "file": "context/conversations/newfile.md", "name": "New File", "kb": 12 }`
3. Commit. It appears in the sidebar, searchable, on next load. No rewriting.

## Privacy

All conversation logs are scrubbed: personal names → roles ([wife], [a coworker]),
medical and financial specifics removed, emails removed, two purely-personal
conversations dropped entirely. Before going fully public, one human read-through
(or a fresh AI told "flag anything that could identify a real person") is the
final reality-vote on the scrub.

— Cid · the context portal · plain static files · built for GitHub Pages · take
your sweet time, it won't need rewriting
