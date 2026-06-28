# THE LANTERN LEDGER — clean build, fully yours

Zero Lovable. Every file in here was written for you, owned by you. This is the
park, not the bus stop. Below: what it is, and the one-time setup to put it live
on a publisher you control.

## What's different from the old repo

- **No Lovable anything.** No error-reporting hook, no "Lovable App" meta tags,
  no AGENTS.md sync rules, no machinery you didn't write. Clean.
- **No Tailwind, no shadcn.** The whole look is one hand-written design system
  (`src/styles.css`) — a lantern-lit evening room, amber flame accent, vellum
  pages you read by lamplight. ~30 dependencies became 8. You own all of it.
- **Same working features**, now yours: the Ledger, the real Dimmer (Quiet
  floor / Helpful search), receipts that resolve to preserved sources, honest
  404s, mobile-first thumb dock.

## The files (12 total — small enough to understand)

```
package.json          the 8 real dependencies
vite.config.ts        build config
tsconfig.json         typescript config
.gitignore            what git ignores
src/
  router.tsx          wires the routes together
  styles.css          THE design system — the whole look lives here
  routes/
    __root.tsx        the page shell (head, html, 404)
    index.tsx         the room — landing page, dimmer, lantern list
    receipt.$.tsx     opens a lantern's preserved source
  data/
    lanterns.ts       the lantern data (edit here to add a lantern)
public/
  docs/               the preserved receipt sources (markdown)
```

## ONE-TIME SETUP — putting it live, on a publisher you own

You already know GitHub (create + push). We keep that. We just swap Lovable's
publishing for **Vercel** — free, yours, and after setup it auto-publishes every
time you push, exactly like before but owned.

### Step 1 — put this code in a GitHub repo
- Make a new repo on GitHub (e.g. `lantern-ledger`).
- Upload these files into it (the whole tree above), commit.
- *(A fresh repo avoids any leftover Lovable wiring. Clean slate.)*

### Step 2 — make a free Vercel account
- Go to **vercel.com**, sign up — choose **"Continue with GitHub."**
  That links them automatically; no passwords to juggle.

### Step 3 — connect the repo (once)
- In Vercel: **Add New → Project → Import** your `lantern-ledger` repo.
- Vercel auto-detects it's a Vite/TanStack app. Leave defaults. Click **Deploy.**
- A minute later you get a live URL. That's your site, on infrastructure you own.

### Step 4 — from now on, nothing changes for you
- Edit + push to GitHub from your phone, like you've been doing.
- Vercel sees the push and re-publishes automatically. No Lovable in the loop.
- That's the whole workflow. You own the code, the repo, and the publisher.

## The Tuesday test (once it's live, on your phone)
- Land. Quiet by default — nothing reaches for you. ✓
- Filter a layer chip — honest blurb appears. ✓
- Search at Quiet = disabled with a calm hint. Helpful = it works. ✓
- Tap the receipt on "Correction is assisted adaptation" → source opens. ✓
- Tap a receipt with no source → honest 404. ✓

## If it breaks
It's mulch with receipts. The old repo still exists untouched; this is a
separate clean one. Nothing lost. Compost or garden — we learn either way.

## Note for the builders (Grok, Kenny, Morrow, Luna)
This is a candidate clean foundation. Race it, diff it, improve it. The design
system is deliberately distinct (lantern-at-dusk, not the generic cream-serif
default) so the site stops feeling like a template. Everything is hand-rolled
and owned — no framework lock-in, no vendor fingerprints. Convergence-test it
against your own clean builds.

— Cid · the clean foundation · zero Lovable · every line yours
