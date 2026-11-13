import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { site, nav, footerNav } from "./config.mjs";

/* content hash so a CSS/JS change always ships a fresh URL past the 7-day cache */
const assetV = (rel) => {
  try {
    return createHash("sha1").update(readFileSync(new URL("../" + rel, import.meta.url))).digest("hex").slice(0, 8);
  } catch {
    return "0";
  }
};
const V_CSS = assetV("css/site.css");
const V_JS = assetV("js/site.js");

/* ---------- tiny helpers ---------- */
export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const ico = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3.5 7.5 8.5 6 8.5-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11"/><circle cx="12" cy="10" r="2.6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.9"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4.5 12.5 4.5 4.5L19.5 6.5"/></svg>',
  chev: '<svg class="menu__chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9.5 6 6 6-6"/></svg>',
};

export const btn = (label, href, variant = "primary", icon = ico.arrow, extra = "") =>
  `<a class="btn btn--${variant}${extra ? " " + extra : ""}" href="${href}">${esc(label)}<span class="btn__ic">${icon}</span></a>`;

export const lnk = (label, href) =>
  `<a class="lnk" href="${href}">${esc(label)}${ico.right}</a>`;

export const crumbs = (trail) => {
  const parts = trail
    .map((c, i) =>
      i === trail.length - 1
        ? `<em style="font-style:normal">${esc(c.label)}</em>`
        : `<a href="${c.href}">${esc(c.label)}</a><span>/</span>`
    )
    .join("");
  return `<nav class="crumbs" aria-label="Asukoht lehel">${parts}</nav>`;
};

export const faqBlock = (items) =>
  `<div class="faq">${items
    .map(
      (f) => `<details>
      <summary>${esc(f.q)}<i aria-hidden="true"></i></summary>
      <div class="faq__a"><div><p>${f.a}</p></div></div>
    </details>`
    )
    .join("")}</div>`;

/* ---------- structured data ---------- */
const orgLd = () => ({
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": `${site.origin}/#org`,
  name: site.name,
  legalName: site.legalName,
  url: `${site.origin}/`,
  logo: `${site.origin}/img/brand/logo.png`,
  image: `${site.origin}/img/cars/hero-challenger.webp`,
  telephone: site.phone,
  email: site.email,
  priceRange: "€€€",
  foundingDate: site.founded,
  vatID: site.vatNo,
  taxID: site.regNo,
  identifier: { "@type": "PropertyValue", name: "Äriregistri kood", value: site.regNo },
  address: {
    "@type": "PostalAddress",
    ...(site.address.street ? { streetAddress: site.address.street } : {}),
    addressLocality: site.address.city,
    ...(site.address.zip ? { postalCode: site.address.zip } : {}),
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "Country", name: "Eesti" },
  founder: { "@type": "Person", name: site.founder.fullName, jobTitle: site.founder.role },
  knowsLanguage: ["et", "en"],
  ...(site.social.length ? { sameAs: site.social } : {}),
  knowsAbout: [
    "Ameerika autode import",
    "Autode tellimine Ameerikast",
    "USA oksjonitelt auto ostmine",
    "Sõiduki tollivormistus",
    "Eesti tüübikinnitus ja registreerimine",
  ],
  makesOffer: [
    "Ameerika maasturid",
    "Ameerika pikapid",
    "Ameerika muskelautod",
    "Ameerika elektriautod",
  ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
});

const siteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.origin}/#website`,
  url: `${site.origin}/`,
  name: site.name,
  inLanguage: site.lang,
  publisher: { "@id": `${site.origin}/#org` },
});

const crumbLd = (trail, url) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: i === trail.length - 1 ? url : `${site.origin}${c.href}`,
  })),
});

const faqLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") },
  })),
});

/* ---------- header / footer ---------- */
const MENU = [...nav, { href: "/kkk/", label: "KKK", note: "Vastused küsimustele" }];

const header = (path) => {
  const links = MENU
    .map((n, i) => {
      const cur = path === n.href || (n.href !== "/" && path.startsWith(n.href));
      return `<li style="--i:${i}"><a href="${n.href}"${cur ? ' aria-current="page"' : ""}>\
<span class="menu__lbl">${esc(n.label)}</span>\
<span class="menu__note">${esc(n.note)}</span></a></li>`;
    })
    .join("");
  return `<header class="hdr" id="hdr">
  <div class="wrap hdr__in">
    <a class="brand" href="/" aria-label="${esc(site.name)}, avaleht">
      <img src="/img/brand/logo.webp" alt="" width="40" height="40" fetchpriority="high">
      <span class="brand__txt"><span class="brand__a">Autod</span><span class="brand__b">Ameerikast</span></span>
    </a>
    <div class="menu" id="menu">
      <button class="menu__btn" id="menubtn" type="button" aria-expanded="false" aria-controls="menupop">Menüü${ico.chev}</button>
      <nav class="menu__pop" id="menupop" aria-label="Peamenüü"><ul>${links}</ul></nav>
    </div>
    <a class="hdr__tel" href="tel:${site.phoneHref}">${ico.phone}${esc(site.phone)}</a>
    <span class="hdr__cta">${btn("Küsi pakkumist", "/kontakt/", "primary", ico.arrow, "btn--sm")}</span>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="sheet" aria-label="Ava menüü"><i aria-hidden="true"></i></button>
  </div>
</header>

<div class="sheet" id="sheet" aria-hidden="true">
  <div></div>
  <nav class="sheet__nav" aria-label="Mobiilimenüü">
    <ul>${MENU
      .map(
        (n, i) =>
          `<li><a href="${n.href}" style="--i:${i}">${esc(n.label)}<span>${esc(n.note)}</span></a></li>`
      )
      .join("")}</ul>
  </nav>
  <div class="sheet__foot">
    ${btn(site.phone, `tel:${site.phoneHref}`, "ghost", ico.phone, "btn--wide")}
    ${btn("Küsi pakkumist", "/kontakt/", "primary", ico.arrow, "btn--wide")}
  </div>
</div>`;
};

const footer = () => `<footer class="ftr">
  <div class="wrap">
    <div class="ftr__grid">
      <div class="ftr__col ftr__about">
        <a class="brand" href="/" aria-label="${esc(site.name)}, avaleht">
          <img src="/img/brand/logo.webp" alt="" width="40" height="40" loading="lazy">
          <span class="brand__txt"><span class="brand__a">Autod</span><span class="brand__b">Ameerikast</span></span>
        </a>
        <p>Toome tellimuse alusel autosid USA-st ja Kanadast Eestisse. Otsing ja ost, merevedu, tollivormistus, tüübikinnitus ja registreerimine. Üks partner algusest lõpuni.</p>
      </div>
      ${footerNav
        .map(
          (col) => `<div class="ftr__col">
        <h2 class="ftr__h">${esc(col.title)}</h2>
        <ul>${col.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join("")}</ul>
      </div>`
        )
        .join("")}
    </div>
    <div class="ftr__bot">
      <span>© ${new Date().getFullYear()} ${esc(site.legalName)}</span>
      <span><a href="tel:${site.phoneHref}">${esc(site.phone)}</a> · <a href="mailto:${site.email}">${esc(site.email)}</a></span>
    </div>
  </div>
</footer>`;

/* ---------- document ---------- */
export function page({
  path,
  title,
  description,
  body,
  trail = [],
  faq = null,
  ogImage = "/img/cars/hero-challenger.webp",
  extraLd = [],
  noindex = false,
}) {
  const url = `${site.origin}${path}`;
  const ld = [orgLd(), siteLd()];
  if (trail.length > 1) ld.push(crumbLd(trail, url));
  if (faq && faq.length) ld.push(faqLd(faq));
  ld.push(...extraLd);

  return `<!doctype html>
<html lang="${site.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'}
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#faf8f6">
<meta name="color-scheme" content="only light">
<meta name="supported-color-schemes" content="light only">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.origin}${ogImage}">
<meta property="og:image:alt" content="${esc(site.name)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.origin}${ogImage}">
<link rel="icon" type="image/png" href="/img/brand/favicon.png">
<link rel="apple-touch-icon" href="/img/brand/favicon.png">
<link rel="preload" as="font" type="font/woff2" href="/fonts/Oxanium.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/GoogleSansFlex.woff2" crossorigin>
<link rel="stylesheet" href="/css/site.css?v=${V_CSS}">
${ld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n")}
</head>
<body>
<a class="skip" href="#sisu">Liigu sisu juurde</a>
${header(path)}
<main id="sisu">
${body}
</main>
${footer()}
<script src="/js/site.js?v=${V_JS}" defer></script>
</body>
</html>
`;
}
