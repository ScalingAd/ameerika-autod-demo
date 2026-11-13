import { mkdir, writeFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "./config.mjs";
import { page } from "./layout.mjs";
import { home, order, hub, categoryPages } from "./pages-core.mjs";
import { services, pricing, about, faqPage, contact, thanks, notFound } from "./pages-more.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const defs = [
  home(), order(), hub(), ...categoryPages(),
  services(), pricing(), about(), faqPage(), contact(), thanks(), notFound(),
];

/* ---- guard: titles and descriptions stay inside SERP limits ---- */
for (const d of defs) {
  if (d.title.length > 62) throw new Error(`Title too long (${d.title.length}): ${d.path}`);
  if (!d.noindex && (d.description.length < 110 || d.description.length > 158))
    throw new Error(`Description out of range (${d.description.length}): ${d.path}`);
}

/* ---- write pages ---- */
const written = [];
for (const d of defs) {
  const html = page(d);
  const rel = d.path === "/" ? "index.html" : d.path.endsWith(".html") ? d.path.slice(1) : `${d.path.slice(1)}index.html`;
  const out = join(root, rel);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html, "utf8");
  written.push({ path: d.path, rel, bytes: Buffer.byteLength(html), noindex: !!d.noindex, title: d.title, desc: d.description });
}

/* ---- sitemap ---- */
const today = new Date().toISOString().slice(0, 10);
const prio = (p) => (p === "/" ? "1.0" : p === "/telli-auto-ameerikast/" || p === "/ameerika-autod/" ? "0.9" : p.split("/").length > 3 ? "0.7" : "0.8");
const indexable = written.filter((w) => !w.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (w) => `  <url>
    <loc>${site.origin}${w.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${w.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${prio(w.path)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(join(root, "sitemap.xml"), sitemap, "utf8");

/* ---- robots ---- */
await writeFile(
  join(root, "robots.txt"),
  site.staging
    ? `# EELVAADE. Indekseerimine blokeeritud, kuni sait on päris domeenil
# ja kohatäited on asendatud. Lülita välja: site.staging = false.
User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /
Disallow: /aitah/

Sitemap: ${site.origin}/sitemap.xml
`,
  "utf8"
);

/* ---- netlify ---- */
await writeFile(
  join(root, "netlify.toml"),
  `# Autod Ameerikast: static site, no build step at deploy time.
[build]
  publish = "."
  command = ""

[[headers]]
  for = "/img/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    Access-Control-Allow-Origin = "*"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=604800"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=604800"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Frame-Options = "SAMEORIGIN"
${
  site.staging
    ? `    X-Robots-Tag = "noindex, nofollow"
`
    : ""
}`,
  "utf8"
);

/* ---- redirects: common misspellings / alternates -> canonical ---- */
await writeFile(
  join(root, "_redirects"),
  `/index.html            /                              301!
/telli-auto/           /telli-auto-ameerikast/        301
/telli-autod-ameerikast/ /telli-auto-ameerikast/      301
/autod-ameerikast/     /ameerika-autod/               301
/ameerika-auto/        /ameerika-autod/               301
/maasturid/            /ameerika-autod/maasturid/     301
/pikapid/              /ameerika-autod/pikapid/       301
/lihasautod/           /ameerika-autod/muskelautod/   301
/muskelautod/          /ameerika-autod/muskelautod/   301
/ameerika-autod/lihasautod/ /ameerika-autod/muskelautod/ 301
/elektriautod/         /ameerika-autod/elektriautod/  301
/hinnad/               /hinnakiri/                    301
/faq/                  /kkk/                          301
/about/                /meist/                        301
/contact/              /kontakt/                      301
/*                     /404.html                      404
`,
  "utf8"
);

/* ---- link integrity check ---- */
const valid = new Set(written.map((w) => w.path));
valid.add("/404.html");
const problems = [];
for (const w of written) {
  const html = await (await import("node:fs/promises")).readFile(join(root, w.rel), "utf8");
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const h of new Set(hrefs)) {
    if (h.startsWith("/css/") || h.startsWith("/js/") || h.startsWith("/img/") || h.startsWith("/fonts/")) continue;
    if (!valid.has(h)) problems.push(`${w.path} -> ${h}`);
  }
  const srcs = [...html.matchAll(/src="(\/[^"?]*)"/g)].map((m) => m[1]);
  for (const s of new Set(srcs)) {
    try {
      await (await import("node:fs/promises")).access(join(root, s.slice(1)));
    } catch {
      problems.push(`${w.path} -> MISSING ASSET ${s}`);
    }
  }
}

console.log(`\n  ${written.length} pages written\n`);
for (const w of written) {
  const flag = w.noindex ? "  [noindex]" : "";
  console.log(`  ${w.path.padEnd(30)} ${String(w.bytes).padStart(6)} B   t:${String(w.title.length).padStart(2)} d:${String(w.desc.length).padStart(3)}${flag}`);
}
console.log(`\n  sitemap: ${indexable.length} urls`);
if (problems.length) {
  console.log(`\n  BROKEN LINKS / ASSETS (${problems.length}):`);
  problems.forEach((p) => console.log("   ! " + p));
  process.exitCode = 1;
} else {
  console.log("  link + asset check: all internal links and assets resolve\n");
}
