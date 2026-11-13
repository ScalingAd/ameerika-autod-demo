import { readFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

async function htmlFiles(dir = root, acc = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules" || e.name === "scripts") continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) await htmlFiles(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const files = (await htmlFiles()).sort();
let fail = 0;
const note = (f, msg) => { console.log(`  ! ${f.replace(root + "/", "")}: ${msg}`); fail++; };

for (const f of files) {
  const h = await readFile(f, "utf8");
  const rel = f.replace(root + "/", "");

  const h1 = [...h.matchAll(/<h1[\s>]/g)].length;
  if (h1 !== 1) note(f, `${h1} <h1> tags (expected 1)`);

  if (!/<html lang="et">/.test(h)) note(f, "missing lang=et");
  if (!/<link rel="canonical"/.test(h)) note(f, "missing canonical");
  if (!/<meta name="description"/.test(h)) note(f, "missing meta description");
  if (!/og:image/.test(h)) note(f, "missing og:image");

  // every <img> needs alt (empty alt allowed for decorative)
  for (const m of h.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt=/.test(m[0])) note(f, `img without alt: ${m[0].slice(0, 90)}`);
    if (!/\bwidth=/.test(m[0]) || !/\bheight=/.test(m[0])) note(f, `img without width/height: ${m[0].slice(0, 70)}`);
  }

  // heading order: no jump from h2 to h4 etc.
  const levels = [...h.matchAll(/<h([1-4])[\s>]/g)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) { note(f, `heading jump h${levels[i - 1]} -> h${levels[i]}`); break; }
  }

  // JSON-LD must parse
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { note(f, `invalid JSON-LD: ${e.message}`); }
  }

  // unresolved template leftovers / placeholders that must not ship as copy
  if (/\$\{/.test(h)) note(f, "unrendered ${...} template literal in output");
  if (/undefined|\[object Object\]|NaN/.test(h)) note(f, "literal undefined/NaN in output");

  // em dash ban
  if (h.includes("—")) note(f, "em dash in copy");

  // a11y: links must have text or aria-label
  for (const m of h.matchAll(/<a\b[^>]*>([\s\S]{0,400}?)<\/a>/g)) {
    const inner = m[1].replace(/<[^>]+>/g, "").trim();
    if (!inner && !/aria-label=/.test(m[0])) note(f, `empty link: ${m[0].slice(0, 80)}`);
  }
  console.log(`  ok  ${rel}`);
}

console.log(fail ? `\n  ${fail} issue(s)\n` : `\n  ${files.length} pages clean\n`);
process.exitCode = fail ? 1 : 0;
