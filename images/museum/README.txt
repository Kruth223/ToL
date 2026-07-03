Drop museum images in this folder, then regenerate ../manifest.json
(one command, from the repo root):

python3 -c "import os,json;d='images/museum';json.dump([{'file':f,'title':'','note':''} for f in sorted(os.listdir(d)) if f.lower().endswith(('.png','.jpg','.jpeg','.gif','.webp'))],open('images/manifest.json','w'),indent=1)"

Then: git add -A ; git commit -m "Museum exhibits" ; git push origin main
Titles and notes can be added later by editing images/manifest.json —
an exhibit with no title shows its filename until it earns one.
