# THE CRATES — deploy in two pushes

Prereq: Phase 1 (museum walls) is already live. This fills them.

1. Upload museum_images_1.zip to the Codespace, then:

unzip -o museum_images_1.zip -d .
rm museum_images_1.zip
git add -A
git commit -m "Museum: exhibits arrive, part 1"
git push origin main

2. Same dance with museum_images_2.zip:

unzip -o museum_images_2.zip -d .
rm museum_images_2.zip
git add -A
git commit -m "Museum: exhibits arrive, part 2"
git push origin main

Two pushes keep each under ~300 MB, which is kinder to mobile git.
The manifest ships in zip 1, so the wall starts filling after push 1
and completes after push 2 (missing images just don't render until
their zip lands).

3. Reload kruth223.github.io/ToL/museum.html — 255 exhibits, lazy-
   loaded, tap to view. Read SORTING_REPORT.md (in zip 1) to audit
   my keep/exclude calls and rescue anything I got wrong.
