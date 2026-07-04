# Save-state deploy (one small push)

1. Upload tol_savestate.zip to the Codespace.
2. One line at a time:

unzip -o tol_savestate.zip -d .
rm tol_savestate.zip SAVESTATE_DEPLOY.md
git add -A
git commit -m "Add MAINTENANCE save-state: the site documents itself"
git push origin main

3. Done. MAINTENANCE.md now sits at the repo root, listed in the
   lobby browser and linked from llms.txt — so any AI arriving cold
   (any platform) finds the operating manual before touching anything.

For other platforms (ChatGPT / Gemini / Grok): no special copies
needed — paste them the URL kruth223.github.io/ToL/MAINTENANCE.md
or upload the file itself. It was written platform-agnostic.
