# Autod Ameerikast

Staatiline SEO-sait Ameerika autode impordile Eestisse. 14 lehte, ilma raamistiku ja
ilma väliste sõltuvusteta. HTML genereeritakse Node skriptidega, väljund on puhas
staatiline sait, mille saab panna ükskõik millisesse hostingusse.

**Peamised märksõnad:** `telli autod ameerikast`, `ameerika autod`

---

## ENNE AVALDAMIST — mis on veel puudu

Päris andmed on sees: telefon, e-post, ärinimi, registrikood, KMKR, domeen.
Allesjäänud lüngad on `scripts/config.mjs` failis:

| Väli | Seis |
|---|---|
| `site.address.street` / `zip` | puudub, schema'sse läheb praegu ainult Tallinn + EE |
| `site.founder.fullName` | ainult „Rein", perekonnanimi puudu |
| `site.social` | tühi, Facebook / Instagram lisamata |

**Ärinime täpsustus:** klient kirjutas „Motokeskus OÜ", äriregistris on
**Motokeskus-MC OÜ** (kood 10643414, KMKR EE100602175, registreeritud 17.02.2000).
Saidil ja struktureeritud andmetes on registrijärgne nimi. Kui kasutuses on
mõni muu nimi, muuda `site.legalName`.

**Domeen:** `ameerikaautod.ee` on registreeritud ja praegu pargitud.
`www` ja apex vastavad mõlemad 200-ga ilma suunamiseta, nii et Netlifys tuleks
seada `www` → apex suunamine. Canonical on seatud apexile.

**Numbrid, mis vajavad endiselt kliendi kinnitust:**

- Hinnakirja kuluvahemikud ja kolm näidisarvutust (`scripts/pages-more.mjs`)
- Käibemaksumäär **24%** — kontrolli kehtivat määra
- Tarneaeg „8–12 nädalat" ja „1–2 tööpäeva esimeste kandidaatideni"

## Avaldamine

Sait on Netlifys, projekt `autod-ameerikast` (tiim Effi), site id salvestatud
`.netlify/state.json`. Uus versioon läheb üles kahe käsuga:

```bash
node scripts/build.mjs && netlify deploy --prod --dir=.
```

Live: https://ameerikaautod.ee (www ja http suunavad apexile, Let's Encrypt sert aktiivne)

Vormid: `kiirparing` (avalehe hero) ja `paring` (kontaktileht) on mõlemad
Netlifys registreeritud ja teavitus läheb aadressile info@scalingad.com.
Kui teade peab minema kliendile, muuda see Netlify paneelist (Forms → Notifications).

## Eelvaade vs. live

`scripts/config.mjs` sisaldab lippu `site.staging`.

- `staging: true` — `robots.txt` blokeerib kõik ja iga vastus kannab
  `X-Robots-Tag: noindex, nofollow`. Nii ei satu kohatäidetega ja kinnitamata
  numbritega versioon Google'isse ega konkureeri hiljem päris domeeniga.
- `staging: false` (**praegune**) — päris `robots.txt` koos sitemapiga, indekseerimine lubatud.

Lülita `false` peale alles siis, kui kõik `TODO` väljad on täidetud ja numbrid
kliendi poolt kinnitatud. Seejärel `node scripts/build.mjs`.

## Käivitamine

```bash
node scripts/serve.mjs 8771
```

Avaneb `http://localhost:8771`.

## Ehitamine

```bash
node scripts/build.mjs
```

Genereerib kõik HTML-lehed, `sitemap.xml`, `robots.txt`, `netlify.toml` ja `_redirects`.
Build katkeb, kui mõni `<title>` on üle 62 tähemärgi, meta description väljaspool
110–158 tähemärki, või kui mõni sisemine link või pildifail ei lahene.

## Kontroll

```bash
node scripts/audit.mjs
```

Kontrollib igal lehel: üks `<h1>`, pealkirjade järjekord, `lang`, canonical,
meta description, og:image, kõigil piltidel `alt` + `width`/`height`,
JSON-LD süntaks, renderdamata mallid, tühjad lingid.

---

## Struktuur

```
scripts/
  config.mjs       kogu päris-sisu: kontaktid, menüü, sõidukikategooriad
  layout.mjs       HTML-skelett, <head>, SEO, schema.org, päis, jalus
  blocks.mjs       korduvad sektsioonid (asutaja, protsess, bento, CTA)
  pages-core.mjs   avaleht, telli-auto, ameerika-autod + 4 kategooriat
  pages-more.mjs   teenused, hinnakiri, meist, kkk, kontakt, aitäh, 404
  build.mjs        genereerib lehed + sitemap + robots + redirects
  audit.mjs        SEO ja ligipääsetavuse kontroll
  serve.mjs        arenduse staatiline server

css/site.css       kogu disainisüsteem (OKLCH tokenid, komponendid, motion)
js/site.js         päise kleepumine, menüü-dropdown, mobiilimenüü, scroll-reveal
fonts/             Oxanium 15 kB + Google Sans Flex 46 kB, woff2, self-hosted
img/brand/         logo + favicon
img/founder/       Reinu portree ja tööfoto
img/cars/          sõidukifotod (Unsplash, webp)
```

Lehed genereeritakse kaustadesse (`/kkk/index.html`), nii et URL-id on ilma `.html`-ita.

---

## Leheküljed

| URL | Sihtmärksõna |
|---|---|
| `/` | ameerika autod, telli autod ameerikast |
| `/telli-auto-ameerikast/` | **telli autod ameerikast** |
| `/ameerika-autod/` | **ameerika autod** |
| `/ameerika-autod/maasturid/` | ameerika maasturid |
| `/ameerika-autod/pikapid/` | ameerika pikapid |
| `/ameerika-autod/muskelautod/` | ameerika muskelautod |
| `/ameerika-autod/elektriautod/` | ameerika elektriautod |
| `/teenused/` | auto import ameerikast |
| `/hinnakiri/` | ameerikast auto toomine hind |
| `/meist/` | usaldus, asutaja |
| `/kkk/` | pikk saba, FAQPage |
| `/kontakt/` | konversioon |
| `/aitah/` | vormi tänuleht (noindex) |
| `/404.html` | veateade (noindex) |

## SEO, mis on paigas

- Eestikeelne `lang="et"`, `og:locale=et_EE`, canonical igal lehel
- JSON-LD: `AutoDealer`, `WebSite`, `BreadcrumbList`, `FAQPage`, `ItemList`,
  `AboutPage`, `ContactPage`, `Service`
- `sitemap.xml` (12 indekseeritavat URL-i), `robots.txt`, `_redirects` levinud
  valekirjapiltidele
- Kõik fondid ja pildid on lokaalsed, väliseid päringuid ei tehta
- Pildid webp, `width`/`height` küljes (pole layout shifti), `loading="lazy"`
  kõigil peale esimese ekraanitäie
- Kogu sait 3,1 MB, ükski leht ei ületa 30 kB HTML-i

## Vormi ühendamine

`/kontakt/` vorm on Netlify Formsi jaoks valmis (`data-netlify="true"`,
honeypot `company`, suunab `/aitah/`). Muu hostingu korral muuda `<form action>`
ja `method` `scripts/pages-more.mjs` failis.

## Fotod

Sõidukifotod on Unsplashist (vaba litsents, atributsioon ei ole kohustuslik).
Asenda need kliendi päris autodega niipea, kui need olemas on — päris fotod
toovad sellel turul oluliselt rohkem päringuid kui stokifotod.
Reinu kaks fotot on kliendi omad.
