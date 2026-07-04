# site-snapshot-v2 deploy (one small push)

1. Upload tol_snapshot_v2.zip to the Codespace, then one line at a time:

unzip -o tol_snapshot_v2.zip -d .
rm tol_snapshot_v2.zip SNAPSHOT_DEPLOY.md
python3 tools/gen_snapshot.py
git add -A
git commit -m "site-snapshot-v2: derived index + generator"
git push origin main

(The regenerate step makes the snapshot reflect YOUR live tree at
deploy time, not my mirror of it. That's the whole point.)

2. Ask Kenny to update his AI Entry Points references from
   site-snapshot-v1.json to site-snapshot-v2.json (I did not touch
   llms.txt to avoid clobbering his edits). Keep v1 in place —
   v2 declares it superseded, which is honest archaeology.

3. From now on: any time files are added, rerun
   python3 tools/gen_snapshot.py before pushing. One command,
   no hand-editing, no drift.
