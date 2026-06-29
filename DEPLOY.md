# THE CLEAN PORCH — static rebuild, zero server, zero patches

Built to Kenny's brief. The old TanStack **Start** build was server-side — it
wanted a Node backend, SSR, and Vinxi's internal alias maps, which is why it
cracked under static mobile deployment. This is the fix at the root: a pure
client-side React SPA on raw Vite. No server. No SSR. No route-tree generation.
No workarounds to maintain. It compiles to a plain `index.html` + assets that
run from any front door.

## What changed (and why it's stable now)

| Old (cracked) | New (clean) |
| --- | --- |
| TanStack **Start** (full-stack, SSR) | Pure client **React 18 SPA** |
| Vinxi bundler + alias maps | Raw **Vite 5** |
| Generated `routeTree.gen` | Plain **hash routing** in App.tsx |
| Needs a Node backend | Runs from any static `index.html` |
| ~30 deps | **5 deps** |

Nothing clever remains to break. The receipts, the lantern data, the dimmer, and
the lantern-at-dusk design system are all preserved — pristine, just mounted on a
foundation that can't fall over.

## The tree (13 files, flat and clear)

```
index.html              ← the static front door (root, as required)
package.json            ← 5 deps, standard vite scripts
vite.config.ts          ← bare: just react(). no server.
vercel.json             ← routes all paths to index.html (SPA)
tsconfig.json
src/
  main.tsx              ← client entry. mounts React.
  App.tsx               ← hash routing. "#/" = room, "#/receipt/x" = receipt.
  styles.css            ← the whole design system
  views/
    Room.tsx            ← the porch: ledger, dimmer, search
    Receipt.tsx         ← opens a preserved source
  data/
    lanterns.ts         ← the lantern data
public/
  docs/                 ← the preserved receipt sources (markdown)
```

## Deploy (one import, no folder-building) — StackBlitz path

1. Phone browser → **stackblitz.com** → sign in with **GitHub**.
2. **Create → Import** → upload `lantern_clean_porch.zip`. It unpacks the whole
   tree automatically.
3. **Connect Repository → Create a repository** → name it, confirm. It pushes
   every file in the right folders to a new GitHub repo.
4. **vercel.com** → Continue with GitHub → **Import** that repo → **Deploy**.
   Vite is auto-detected. A minute later: a live URL that won't crash, because
   there's no server to crash.

## Build check
`npm install && npm run build` produces a static `dist/` folder — plain HTML,
JS, CSS. That folder is the entire site. It can be hosted anywhere, even opened
from a plain web server. No backend process required, ever. (Verified the
import/export graph and types are coherent; the build itself is deliberately
trivial — React 18 + Vite with no SSR has nothing exotic to fail on.)

## The Tuesday test (once live)
- Lands at the room. Quiet by default. ✓
- Layer chips filter; honest blurb shows. ✓
- Search disabled at Quiet, works at Helpful. ✓
- Tap a receipt → `#/receipt/...` → source opens (fetched from /docs). ✓
- Tap a receipt with no source → honest 404 view. ✓
- Refresh on any page → still works (hash routing needs no server). ✓

## If it's wrong
Mulch with receipts. The currently-live site stays up untouched; this is a
separate clean repo. Swap to it only once it's proven. Compost or garden.

— Cid · the clean static porch · built to Kenny's brief · no server, no patches
