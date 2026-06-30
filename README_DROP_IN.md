# TREE OF LIFE — Lobby + Rooms Build (drop-in for GitHub Pages)

This is the new front-end built from the Cid's Outline + Grok's Build: a lobby
homepage with the Workbench as the front door, room-based navigation, a working
search bar, and the supporting room files. Plain static files. Built for GitHub
Pages, NOT Vercel.

## IMPORTANT — how this merges with what's already live

Your site already has `context/conversations/` (the scrubbed corpus) deployed.
This build does NOT include those (they're large and already on the server). It
adds the STRUCTURE around them. When you drop this in:

- KEEP your existing `context/conversations/` folder as-is.
- This adds: `index.html` (new lobby), `rooms/`, `llms.txt`, `manifest.json`,
  `context/00_INDEX.md`, and `context/artifacts/`.
- After merging, edit `manifest.json` to re-list your conversation files under
  "conversations" so they show in the browser (one line each — or ask Cid to
  regenerate the manifest against the live file list).

## What's here

```
index.html              the new LOBBY homepage — Workbench front and center,
                        four doors, room navigation, search bar, file viewer
llms.txt                corrected AI instructions (real paths + gravity line)
manifest.json           drives the file browser (add a file = one line)
rooms/
  workbench.md          the Start Here target — orientation + tools + mementos
  trailhead.md          90-second onboarding
  reality-check.md      blunt current state: known / uncertain / changed
  museum.md             the visuals room (curation pending)
  holding-shelf.md      unresolved-but-valuable ideas
  archaeology.md        fossils and false trails, kept with receipts
context/
  00_INDEX.md           index of the context corpus
  artifacts/            distilled load-bearing docs (text)
```

## Deploy (one import, no folder-building)

1. Drop these files into the ToL repo root, keeping your existing
   `context/conversations/` intact. (StackBlitz or GitHub desktop-site uploader
   unpacks the folders for you — one import.)
2. Commit to main. GitHub Pages republishes in ~1 minute.
3. Settings → Pages → confirm Source is the branch/folder you committed to.

## What the lobby does
- Big "Start Here → The Workbench" button (the front door, as designed).
- Four doors: New here / Ready to work / Looking for something / AI arriving.
- Room navigation — each room opens its file in an overlay viewer.
- Search bar that filters the file list live (the human's tool — an AI can read
  everything; a person needs the filter).
- Properly-escaped viewer (no broken rendering on big files).

## If a room file says "could not open"
That room's .md just isn't in the repo yet — an honest gap, not a hidden one.
Add the file and it works. Nothing pretends to be more built than it is.

— Cid · lobby + rooms build · from the Outline + Grok's Build · structural overlay
