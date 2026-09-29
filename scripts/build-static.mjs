/**
 * Statischer Export für STRATO (Apache) – technisch wie Sandhoff Digital.
 * Aufruf:  npm run build
 * Ergebnis: Ordner "dist" = vollständiger FTP-Upload (HTML je Seite, Assets,
 *           Bilder unter /media, sitemap.xml, robots.txt, .htaccess, api/*.php).
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const buildDir = resolve(root, "dist");
const out = resolve(root, ".static-export-tmp");
const assetMetadataDir = resolve(root, "src/assets");
const assetOrigin = "https://id-preview--35728ebb-002e-47ee-bcfd-e9f771c139a4.lovable.app";

rmSync(out, { recursive: true, force: true });

const viteEntry = resolve(root, "node_modules/vite/bin/vite.js");
const build = spawnSync(process.execPath, [viteEntry, "build"], { cwd: root, stdio: "inherit", env: process.env });
if (build.status !== 0) process.exit(build.status ?? 1);

function countHtmlPages(directory) {
  if (!existsSync(directory) || !statSync(directory).isDirectory()) return 0;
  return readdirSync(directory, { withFileTypes: true }).reduce((count, entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return count + countHtmlPages(path);
    return count + (entry.name === "index.html" ? 1 : 0);
  }, 0);
}

const client = [
  resolve(buildDir, "client"),
  resolve(root, ".output/public"),
  resolve(buildDir, "public"),
  resolve(root, ".output/client"),
  resolve(root, "build/client"),
  resolve(root, "build/public"),
  buildDir,
]
  .map((directory) => ({ directory, pages: countHtmlPages(directory) }))
  .filter(({ directory, pages }) => pages > 0 && existsSync(resolve(directory, "index.html")))
  .sort((a, b) => b.pages - a.pages)[0]?.directory;

if (!client) {
  console.error("[static] Kein statischer Webordner mit index.html gefunden.");
  process.exit(1);
}
console.log(`[static] Browser-Ausgabe: ${client.replace(`${root}/`, "")} (${countHtmlPages(client)} Seiten)`);
mkdirSync(out, { recursive: true });
cpSync(client, out, { recursive: true });

/* Lovable-Medien lokal unter /media übernehmen */
const replacements = new Map();
const mediaDir = resolve(out, "media");
mkdirSync(mediaDir, { recursive: true });
for (const name of readdirSync(assetMetadataDir).filter((n) => n.endsWith(".asset.json"))) {
  const metadata = JSON.parse(readFileSync(resolve(assetMetadataDir, name), "utf8"));
  if (typeof metadata.url !== "string" || !metadata.url.startsWith("/__l5e/")) continue;
  const originalName = basename(new URL(metadata.url, assetOrigin).pathname);
  const localName = `${String(metadata.asset_id).slice(0, 8)}-${originalName}`;
  const response = await fetch(new URL(metadata.url, assetOrigin));
  if (!response.ok) {
    console.error(`[static] Medium konnte nicht geladen werden: ${metadata.url}`);
    process.exit(1);
  }
  writeFileSync(resolve(mediaDir, localName), Buffer.from(await response.arrayBuffer()));
  replacements.set(metadata.url, `/media/${localName}`);
}

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}
for (const file of walk(out)) {
  if (![".html", ".js", ".css", ".json", ".xml", ".txt"].includes(extname(file))) continue;
  let content = readFileSync(file, "utf8");
  let changed = false;
  for (const [remoteUrl, localUrl] of replacements) {
    if (!content.includes(remoteUrl)) continue;
    content = content.replaceAll(remoteUrl, localUrl);
    changed = true;
  }
  if (changed) writeFileSync(file, content, "utf8");
}

/* Fertigen Webauftritt direkt in "dist" ablegen (wie SLT / Sandhoff) */
rmSync(buildDir, { recursive: true, force: true });
renameSync(out, buildDir);
console.log(`\n[static] Fertig. "dist" ist der vollständige FTP-Upload.\n`);
