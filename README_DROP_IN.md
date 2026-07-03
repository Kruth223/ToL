# TREE OF LIFE — Complete Site (one-shot full deploy)

This is the WHOLE site in one package: Cid's lobby + rooms structure MERGED
with the full scrubbed conversation corpus from the portal build. No more
version soup — this replaces everything at the repo root.

Built by Fable, July 1 2026, from the two half-builds (lobby June 30 +
portal June 29). Structure from one, content from the other, plus fixes.

## What changed from the two previous builds
- MERGED: all 12 scrubbed conversation logs + all 5 artifacts now in one tree
- manifest.json regenerated against the real file list with real sizes —
  every file shows in the browser and search
- llms.txt upgraded to the proper llms.txt convention (H1 + blockquote
  summary + sectioned links) while keeping the gravity line and core habits
- NEW room: rooms/living-forest.md (the old link pointed at a bare
  directory, which GitHub Pages 404s)
- Viewer now loads big files in 250 KB slices with a "load more" button —
  opening the 4.4 MB Lumen log no longer freezes a phone
- 00_INDEX.md updated to cover all five artifacts

## Deploy (full replacement)
1. In the ToL repo, delete the old index.html, llms.txt, manifest.json,
   rooms/ and context/ (or just replace on upload — same result).
2. Upload the contents of this zip to the repo ROOT (GitHub web uploader
   unpacks folders; StackBlitz also works). ~13 MB total.
3. Commit to main. Pages republishes in about a minute.
4. Test on your phone: lobby loads → Start Here opens Workbench → search
   "luna" → open the Luna log → "load more" appears. If all four work,
   the front door is real.

## Still honest gaps (on purpose)
- Museum room says curation pending — the ~139 images are still phone-only.
  That is the next single point of failure to close.
- The Vercel porch (Lantern Ledger) is separate and untouched by this.

Reality gets a vote. The site is the proof, not the bait.
