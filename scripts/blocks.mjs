import { site, categories } from "./config.mjs";
import { esc, ico, btn, lnk } from "./layout.mjs";

/* ---------------- founder trust block ---------------- */
export const founderBlock = ({ light = false, compact = false } = {}) => `
<section class="sec founder ${light ? "sec--light" : "sec--raise"}">
  <div class="wrap founder__grid">
    <div class="rv">
      <div class="shell">
        <div class="shell__core">
          <img src="${site.founder.portrait}" width="824" height="1100"
               alt="${esc(site.founder.first)}, ${esc(site.name)} asutaja, halli tõmblukuga kampsunis" loading="lazy" decoding="async">
          <div class="founder__tag">
            <span><b>${esc(site.founder.fullName)}</b><span>${esc(site.founder.role)}</span></span>
            <span class="sig"><i></i>Vastab ise</span>
          </div>
        </div>
      </div>
    </div>
    <div class="rv">
      <span class="kicker ${light ? "kicker--light" : ""}">Kes su autot ostab</span>
      <h2 class="d1" style="margin-top:1rem">Tead täpselt,<br>kes sinu eest<br><span class="mark">oksjonil pakub</span></h2>
      <div class="prose" style="margin-top:1.4rem">
        <p>${esc(site.founder.first)} teeb oksjonil pakkumised ise. Mitte vahendaja, mitte partner teisel pool ookeani, mitte automaat. Ta vaatab auto fotod läbi, loeb CARFAX-i raporti, otsustab koos sinuga maksimaalse pakkumise ja vajutab ise nuppu.</p>
        ${compact ? "" : "<p>Seepärast on vastus küsimusele „kellega ma suhtlen?“ alati sama. Inimene, kes auto valis, saadab sulle ka konteineri numbri, tolliarve ja registreerimistunnistuse.</p>"}
      </div>
      <blockquote class="quote">
        <p>Ma ei osta kliendile autot, mida ma ei ostaks endale. Kui auto ajalugu mulle ei meeldi, jätan pakkumata.</p>
        <cite>${esc(site.founder.fullName)} · ${esc(site.founder.role)}</cite>
      </blockquote>
      <div class="cred">
        <div><b>2000</b><span>ettevõtte asutamisaasta</span></div>
        <div><b>1</b><span>kontaktisik algusest lõpuni</span></div>
        <div><b>0 &euro;</b><span>maksab esmane hinnang</span></div>
      </div>
      <div style="margin-top:1.9rem">${btn("Loe Reinu lugu", "/meist/", light ? "outline-light" : "ghost")}</div>
    </div>
  </div>
</section>`;

/* ---------------- founder at work (desk photo) ---------------- */
export const deskBlock = () => `
<section class="sec sec--sheet">
  <div class="wrap split split--flip">
    <div class="rv">
      <span class="kicker">Läbipaistvus</span>
      <h2 class="d2" style="margin-top:1rem">Sa näed sama ekraani, mida näen mina</h2>
      <div class="prose" style="margin-top:1.2rem">
        <p>Enne iga pakkumist saadame sulle oksjonikuulutuse: VIN-koodi, läbisõidu, kahjustuste kirjelduse, fotod, info selle kohta, kas mootor käivitub, ja meie hinnangu. Sina otsustad, kas pakume.</p>
      </div>
      <ul class="checks">
        <li>${ico.check}<span>Oksjonilink ja VIN-kood enne ühegi makse tegemist</span></li>
        <li>${ico.check}<span>CARFAX-i ajalugu ja NMVTIS-i omandiõiguse kontroll</span></li>
        <li>${ico.check}<span>Maksimaalne pakkumine lepitakse kokku kirjalikult</span></li>
        <li>${ico.check}<span>Kõik kulud kirjalikus eelarves juba enne oksjonit</span></li>
      </ul>
      ${lnk("Vaata, millest hind koosneb", "/hinnakiri/")}
    </div>
    <div class="rv">
      <div class="frame">
        <img src="${site.founder.desk}" width="1600" height="1200"
             alt="${esc(site.founder.first)} arvuti taga, ekraanil Coparti oksjonikuulutus Mercedes-Benz CLA 250 andmetega" loading="lazy" decoding="async">
        <span class="frame__chip">Coparti oksjon · päris ekraanipilt</span>
      </div>
    </div>
  </div>
</section>`;

/* ---------------- 6-step process ---------------- */
export const steps = [
  ["Räägime läbi, mida sa otsid", "Mudel, aastakäik, varustus, läbisõit ja eelarve ülempiir. Kui sa veel täpselt ei tea, aitame valida."],
  ["Otsime ja kontrollime auto", "Jälgime USA ja Kanada oksjoneid ning edasimüüjate pakkumisi. Iga sobiva auto kohta tellime CARFAX-i ja NMVTIS-i raporti ning vajadusel kohapealse ülevaatuse."],
  ["Pakume kokkulepitud summani", "Sina kinnitad maksimaalse summa, meie teeme pakkumise. Ilma sinu nõusolekuta me seda summat ei ületa."],
  ["Merevedu üle Atlandi ookeani", "Auto viiakse sadamasse, laaditakse konteinerisse või RoRo-laevale ja kindlustatakse kogu teekonnaks."],
  ["Tollivormistus ja maksud", "Vormistame tollideklaratsiooni ning tasume tollimaksu ja käibemaksu. Saad ühe arve, kus iga kulu on eraldi real."],
  ["Registreerimine ja üleandmine", "Taotleme üksiksõiduki tüübikinnituse, teeme tehnoülevaatuse, registreerime auto Transpordiametis ja toome selle sulle kohale."],
];

export const processBlock = ({ light = true, title = "Kuus sammu oksjonist sinu õueni", kicker = "Protsess" } = {}) => `
<section class="sec ${light ? "sec--light" : "sec--raise"}">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div>
        <span class="kicker ${light ? "kicker--light" : ""}">${esc(kicker)}</span>
        <h2 class="d1" style="margin-top:1rem">${esc(title)}</h2>
      </div>
      <p>Kogu teekond kestab tavaliselt 8–12 nädalat. Anname sulle teada iga etapi algusest ja lõpust.</p>
    </div>
    <ol class="rail">
      ${steps
        .map(
          ([h, p], i) => `<li class="step">
        <span class="step__n" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <h3>${esc(h)}</h3>
        <p>${esc(p)}</p>
        <span class="step__bar" aria-hidden="true"></span>
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>`;

/* ---------------- category bento ---------------- */
export const bentoBlock = ({ heading = true } = {}) => {
  const spans = ["tile--wide", "tile--tall", "tile--third", "tile--third", "tile--third"];
  const tiles = categories
    .map(
      (c, i) => `<a class="tile ${spans[i] || "tile--third"}" href="/ameerika-autod/${c.slug}/">
      <img src="${c.img}" width="1200" height="900" alt="${esc(c.alt)}" loading="lazy" decoding="async">
      <span class="tile__idx">0${i + 1}</span>
      <span class="tile__body">
        <h3>${esc(c.label)}</h3>
        <p>${esc(c.short)}</p>
        <span class="tile__go">Vaata mudeleid${ico.right}</span>
      </span>
    </a>`
    )
    .join("");

  const promo = `<a class="tile tile--third" href="/telli-auto-ameerikast/">
      <img src="/img/cars/ship-cars.webp" width="1200" height="900" alt="Autod laeva tekil ookeanil" loading="lazy" decoding="async">
      <span class="tile__idx">05</span>
      <span class="tile__body">
        <h3>Midagi muud?</h3>
        <p>Kirjuta mudel ja eelarve. Kui seda autot USA-s müüakse, saame selle sulle tuua.</p>
        <span class="tile__go">Telli auto Ameerikast${ico.right}</span>
      </span>
    </a>`;

  return `<section class="sec sec--raise">
  <div class="wrap">
    ${
      heading
        ? `<div class="sec__head sec__head--split">
      <div>
        <span class="kicker">Mida me toome</span>
        <h2 class="d1" style="margin-top:1rem">Ameerika autod,<br>mida Eesti turul<br><span class="mark">lihtsalt ei ole</span></h2>
      </div>
      <p>Maasturid, pikapid, muskelautod ja elektriautod. Kui mudelit Euroopas ametlikult ei müüda, on import ainus võimalus sellega Eestis sõita.</p>
    </div>`
        : `<h2 class="vh">Ameerika autode kategooriad</h2>`
    }
    <div class="bento">${tiles}${promo}</div>
  </div>
</section>`;
};

/* ---------------- CTA band ---------------- */
export const ctaBand = ({
  title = "Kirjuta, millist autot soovid. Kõige muuga tegeleme meie.",
  text = "Vastame tööpäeviti, tavaliselt samal või järgmisel päeval. Esmane hinnang on tasuta ega kohusta sind millekski.",
  img = "/img/cars/carrier-truck.webp",
  alt = "Autovedu poolhaagisel maanteel",
} = {}) => `
<section class="band">
  <div class="band__bg" aria-hidden="true"><img src="${img}" width="1400" height="700" alt="" loading="lazy" decoding="async"></div>
  <div class="wrap band__in">
    <div class="rv">
      <span class="kicker">Alusta siit</span>
      <h2 class="d2" style="margin-top:1rem">${esc(title)}</h2>
      <p class="lede" style="margin-top:1rem;max-width:52ch">${esc(text)}</p>
    </div>
    <div class="band__acts rv">
      ${btn("Küsi pakkumist", "/kontakt/", "primary")}
      ${btn(site.phone, `tel:${site.phoneHref}`, "ghost", ico.phone)}
    </div>
  </div>
</section>`;

/* ---------------- page hero for inner pages ---------------- */
export const pageHero = ({ kicker, h1, lede, img, alt, trailHtml }) => `
<section class="phero">
  <div class="phero__media" aria-hidden="true"><img src="${img}" width="1600" height="900" alt="" fetchpriority="high" decoding="async"></div>
  <div class="phero__veil" aria-hidden="true"></div>
  <div class="wrap phero__in">
    ${trailHtml}
    <span class="kicker" style="margin-top:.6rem">${esc(kicker)}</span>
    <h1 class="d1">${h1}</h1>
    <p class="lede">${esc(lede)}</p>
  </div>
</section>`;
