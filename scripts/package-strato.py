#!/usr/bin/env python3
"""Packs the prerendered site (dist/client) into an FTP-ready ZIP for STRATO.

Photos are stored as Lovable Assets (/__l5e/...). This script downloads every
referenced asset into the package under the same path, so no URLs change, and
shrinks oversized images. Usage (after `vite build`):
  python3 scripts/package-strato.py [output.zip]
"""
import io, re, shutil, sys, urllib.request, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "dist" / "client"
STAGE = Path("/tmp/nahad-strato")
OUT = Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/nahad-energie-strato.zip")
ASSET_ORIGIN = "https://id-preview--35728ebb-002e-47ee-bcfd-e9f771c139a4.lovable.app"
MAX_EDGE = {"nahad-energie-logo.png": 256}  # logo is shown at max 64 px
DEFAULT_MAX_EDGE = 1600

if not (SRC / "index.html").exists():
    sys.exit("dist/client/index.html fehlt – bitte zuerst `vite build` ausführen.")

shutil.rmtree(STAGE, ignore_errors=True)
shutil.copytree(SRC, STAGE)

refs = set()
for f in STAGE.rglob("*"):
    if f.suffix in {".html", ".js", ".css"}:
        refs |= set(re.findall(r"/__l5e/assets-v1/[A-Za-z0-9\-]+/[A-Za-z0-9._\-]+", f.read_text(errors="ignore")))

try:
    from PIL import Image
except ImportError:
    Image = None

for ref in sorted(refs):
    req = urllib.request.Request(ASSET_ORIGIN + ref, headers={"User-Agent": "curl/8.0"})
    data = urllib.request.urlopen(req, timeout=60).read()
    name = ref.rsplit("/", 1)[1]
    if Image is not None and name.lower().endswith((".png", ".jpg", ".jpeg")):
        img = Image.open(io.BytesIO(data))
        edge = MAX_EDGE.get(name, DEFAULT_MAX_EDGE)
        if max(img.size) > edge:
            img.thumbnail((edge, edge))
            buf = io.BytesIO()
            if name.lower().endswith(".png"):
                img.save(buf, "PNG", optimize=True)
            else:
                img.convert("RGB").save(buf, "JPEG", quality=80, optimize=True, progressive=True)
            data = buf.getvalue()
    dest = STAGE / ref.lstrip("/")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    print(f"Bild übernommen: {ref} ({len(data) // 1024} KB)")

OUT.unlink(missing_ok=True)
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(STAGE.rglob("*")):
        if f.is_file():
            z.write(f, f.relative_to(STAGE).as_posix())
print(f"Fertig: {OUT}")
