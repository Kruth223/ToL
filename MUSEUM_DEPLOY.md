# THE MUSEUM — deploy + fill (two phases)

## Phase 1 — hang the walls (5 minutes, do now)
1. Upload this zip to the Codespace (file explorer -> Upload).
2. One line at a time:

unzip -o tol_museum_build.zip -d .
rm tol_museum_build.zip MUSEUM_DEPLOY.md
git add -A
git commit -m "Museum: gallery infrastructure"
git push origin main

3. Visit kruth223.github.io/ToL/ -> The Museum -> open.
   You should see the museum page with "No exhibits yet."
   Walls up. Honest gap showing.

## Phase 2 — the crates arrive (whenever, but soon)
This is the part only you can do: the 139 images live on your phone.

1. In the Codespace file explorer, open the images/museum folder.
2. Upload photos into it (long-press -> Upload; batches of 20-30
   are kinder to mobile than all at once).
3. After uploading, run the one-liner from images/museum/README.txt
   to regenerate the manifest, then:

git add -A
git commit -m "Museum exhibits: the collection arrives"
git push origin main

4. Reload the museum page. The wall fills itself.

Push size note: 139 phone images may be 200-400 MB. GitHub allows it
(soft limit 1 GB/repo, 25 MB max per single file via web UI). If any
single image exceeds 25 MB, upload it through the Codespace explorer
(no per-file cap that low) rather than github.com.

## What's in this zip
museum.html            the gallery: lazy-loading grid, tap-to-view,
                       campfire aesthetic matching the lobby
images/manifest.json   starts empty [] — the generator fills it
images/museum/README.txt  the one-line manifest generator
rooms/museum.md        updated room page (was "curation pending")
index.html             patched: Museum room now opens the gallery;
                       .html targets navigate instead of text-viewing

Titles/notes for exhibits are optional and can be added later by
editing images/manifest.json. Filename until it earns a name.
