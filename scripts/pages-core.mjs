import { site, categories } from "./config.mjs";
import { esc, ico, btn, lnk, crumbs, faqBlock } from "./layout.mjs";
import { founderBlock, deskBlock, processBlock, bentoBlock, ctaBand, pageHero, steps } from "./blocks.mjs";

const MARQUEE = [
  "GMC Yukon Denali", "Ford F-150", "Dodge Challenger", "Chevrolet Silverado",
  "Cadillac Escalade", "RAM 1500", "Ford Mustang GT", "Chevrolet Tahoe",
  "Jeep Grand Cherokee", "Toyota Tundra", "Chevrolet Camaro SS", "Rivian R1T",
];

/* ============================ AVALEHT ============================ */
export const home = () => ({
  path: "/",
  title: "Ameerika autod Eestisse · Telli autod Ameerikast",
  description:
    "Telli autod Ameerikast: ost USA oksjonitelt, merevedu, toll, tüübikinnitus ja registreerimine Eestis. Maasturid, pikapid, muskelautod. Küsi pakkumist.",
  trail: [{ href: "/", label: "Avaleht" }],
  faq: HOME_FAQ,
  body: `
<section class="hero">
  <div class="hero__amb" aria-hidden="true">
    <img src="/img/cars/hero-raptor.webp" width="1400" height="1050" alt="" fetchpriority="high" decoding="async">
  </div>
  <div class="hero__veil" aria-hidden="true"></div>
  <div class="wrap hero__in">
    <div class="hero__grid">

      <div>
        <h1 class="d-hero">Ameerika<br>autod otse<br><span class="mark">Eestisse</span></h1>
        <p class="hero__sub">Toome sinu valitud auto Ameerikast Eestisse. Ostame, transpordime, vormistame tollis ja registreerime, sina suhtled kogu aeg ühe inimesega.</p>
      </div>

      <div class="hero__acts">
        ${btn(site.phone, `tel:${site.phoneHref}`, "ghost", ico.phone)}
      </div>

      <aside class="heroform">
        <div class="heroform__core">
          <h2>Küsi pakkumist</h2>
          <form class="form" action="/aitah/" method="post" name="kiirparing" data-netlify="true" netlify-honeypot="company">
            <input type="hidden" name="form-name" value="kiirparing">
            <p hidden><label>Jäta tühjaks <input name="company"></label></p>
            <div class="field">
              <label for="h-nimi">Nimi</label>
              <input id="h-nimi" name="nimi" type="text" autocomplete="name" required>
            </div>
            <div class="field">
              <label for="h-tel">Telefon</label>
              <input id="h-tel" name="telefon" type="tel" autocomplete="tel" required>
            </div>
            <div class="field">
              <label for="h-auto">Soovitud auto</label>
              <input id="h-auto" name="soov" type="text" required>
            </div>
            <div class="field">
              <label for="h-eelarve">Eelarve</label>
              <input id="h-eelarve" name="eelarve" type="text">
            </div>
            <button class="btn btn--primary btn--wide" type="submit">Saada päring<span class="btn__ic">${ico.arrow}</span></button>
            <p class="heroform__note">Andmeid ei jagata kolmandate osapooltega.</p>
          </form>
        </div>
      </aside>

    </div>
    <div class="hero__facts">
      <div class="fact"><b>2000</b><span>ettevõtte asutamisaasta</span></div>
      <div class="fact"><b>8&ndash;12</b><span>nädalat on tavaline tarneaeg</span></div>
      <div class="fact"><b>1</b><span>kontaktisik algusest lõpuni</span></div>
      <div class="fact"><b>0 &euro;</b><span>maksab esmane hinnang</span></div>
    </div>
  </div>
</section>

<section class="sec sec--tight sec--raise">
  <div class="wrap trust rv">
    <div class="trust__face">
      <img src="${site.founder.portrait}" width="824" height="1100"
           alt="${esc(site.founder.first)}, ${esc(site.name)} asutaja" loading="lazy" decoding="async">
    </div>
    <div>
      <span class="trust__who">${esc(site.founder.fullName)}</span>
      <span class="trust__role">${esc(site.founder.role)} &middot; ${esc(site.legalName)}</span>
      <p class="trust__quote">Oksjonil pakun ma ise. Kui auto ajalugu mulle ei meeldi, jätan pakkumata.</p>
      <div class="trust__meta">
        <span>${ico.check}Vastab ise igale päringule</span>
        <span>${ico.check}CARFAX-i ja NMVTIS-i kontroll enne iga ostu</span>
        <span>${ico.check}Ettevõte asutatud 2000. aastal</span>
      </div>
    </div>
    <div style="align-self:stretch;display:flex;align-items:center">
      ${btn("Loe Reinu lugu", "/meist/", "ghost")}
    </div>
  </div>
</section>

${bentoBlock()}

<section class="sec sec--light notch">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div>
        <span class="kicker kicker--light">Kuidas see käib</span>
        <h2 class="d1" style="margin-top:1rem">Kolm sammu</h2>
      </div>
      <p>Auto jõuab sinuni tavaliselt 8&ndash;12 nädalaga. Kõik paberid ja asjaajamise võtame enda peale.</p>
    </div>
    <ol class="mini">
      <li><b aria-hidden="true">01</b><h3>Ütle, mida otsid</h3><p>Mudel, aastakäik ja eelarve ülempiir. Saadame sulle sobivad autod koos ajalooraporti ja kuluarvestusega.</p></li>
      <li><b aria-hidden="true">02</b><h3>Meie toome auto Eestisse</h3><p>Pakume oksjonil, korraldame mereveo ja tollivormistuse. Sina ei pea ise kellegagi suhtlema.</p></li>
      <li><b aria-hidden="true">03</b><h3>Võtad võtmed vastu</h3><p>Auto on registreeritud, läbinud tehnoülevaatuse ja kannab Eesti numbrimärke. Toome selle sulle kohale.</p></li>
    </ol>
    <div style="margin-top:2.2rem">${lnk("Vaata kõiki kuut sammu", "/telli-auto-ameerikast/")}</div>
  </div>
</section>

<section class="sec sec--sheet">
  <div class="wrap split">
    <div class="rv">
      <span class="kicker">Mis see maksab</span>
      <h2 class="d2" style="margin-top:1rem">Hind on kirjas<br>enne oksjonit</h2>
      <p class="prose" style="margin-top:1.1rem">Oksjonihind ei ole lõpphind. Saad kirjaliku eelarve, kus transport, toll, käibemaks ja vormistus on eraldi ridadel.</p>
      <div style="margin-top:1.6rem">${btn("Vaata hinnakirja", "/hinnakiri/", "ghost")}</div>
    </div>
    <div class="rv">
      <dl class="ptable">
        <div class="prow prow--head"><dt>GMC Yukon Denali 2021</dt><dd>6.2 V8</dd></div>
        <div class="prow"><dt>Oksjonihind</dt><dd>32 400 &euro;</dd></div>
        <div class="prow"><dt>Vedu ja kindlustus</dt><dd>2 950 &euro;</dd></div>
        <div class="prow"><dt>Toll, KM, vormistus</dt><dd>9 180 &euro;</dd></div>
        <div class="prow prow--total prow--head"><dt>Kokku Eestis</dt><dd>44 530 &euro;</dd></div>
      </dl>
      <p class="form__note" style="margin-top:.9rem">Näidisarvutus, mitte pakkumine.</p>
    </div>
  </div>
</section>

<section class="sec sec--tight sec--raise">
  <div class="wrap-narrow">
    <div class="sec__head"><span class="kicker">Küsimused</span><h2 class="d2" style="margin-top:1rem">Enne kui küsid</h2></div>
    ${faqBlock(HOME_FAQ)}
    <div style="margin-top:2rem">${lnk("Kõik küsimused ja vastused", "/kkk/")}</div>
  </div>
</section>

${ctaBand()}`,
});

const HOME_FAQ = [
  {
    q: "Kui palju maksab auto tellimine Ameerikast?",
    a: "Ostuhinnale lisandub tavaliselt 35–40%: transport, tollimaks, käibemaks, tüübikinnitus ja teenustasu. Täpse kalkulatsiooni saad enne oksjonit. Kõik kulud on lahti kirjutatud <a href=\"/hinnakiri/\" style=\"color:var(--brand-text)\">hinnakirja lehel</a>.",
  },
  {
    q: "Kui kaua see aega võtab?",
    a: "Tavaliselt 8–12 nädalat oksjoni võitmisest kuni Eesti numbrimärkideni. Selle aja sisse jäävad transport sadamasse, merevedu, toll, tüübikinnitus ja registreerimine.",
  },
  {
    q: "Kas Ameerikast toodud auto saab Eestis registreerida?",
    a: "Jah. Taotleme üksiksõiduki tüübikinnituse, teeme tehnoülevaatuse ja registreerime auto Transpordiametis. Saad auto kätte Eesti numbrimärkide ja kehtiva tehnoülevaatusega.",
  },
  {
    q: "Kas ma pean ise oksjonikonto avama?",
    a: "Ei. Meil on litsents Coparti ja IAAI oksjonitel osalemiseks. Sina ei pea oksjonimajas registreeruma, sinna deposiiti maksma ega inglise keeles suhtlema.",
  },
];

/* ============================ TELLI AUTO (money page) ============================ */
export const order = () => ({
  path: "/telli-auto-ameerikast/",
  title: "Telli autod Ameerikast · hinnad ja tarneaeg",
  description:
    "Telli autod Ameerikast ilma oksjonikonto ja tolliprobleemideta. Kuus sammu oksjonist Eesti numbrimärkideni, läbipaistev hind, üks kontaktisik.",
  ogImage: "/img/cars/carrier-truck.webp",
  trail: [{ href: "/", label: "Avaleht" }, { href: "/telli-auto-ameerikast/", label: "Telli auto Ameerikast" }],
  faq: ORDER_FAQ,
  body: `
${pageHero({
  kicker: "Täisteenus",
  h1: 'Telli auto<br>Ameerikast <span class="mark">ühe partneriga</span>',
  lede: "Sina ütled, millist autot soovid ja kui palju oled valmis maksma. Meie ostame, toome, vormistame ja registreerime selle. Saad auto kätte Eesti numbrimärkide ja kehtiva tehnoülevaatusega.",
  img: "/img/cars/carrier-truck.webp",
  alt: "",
  trailHtml: crumbs([{ href: "/", label: "Avaleht" }, { href: "/telli-auto-ameerikast/", label: "Telli auto Ameerikast" }]),
})}

<section class="sec sec--tight sec--raise">
  <div class="wrap split">
    <div class="rv">
      <span class="kicker">Miks üldse Ameerikast</span>
      <h2 class="d2" style="margin-top:1rem">USA on maailma suurim kasutatud autode turg</h2>
    </div>
    <div class="rv prose">
      <p>See annab sulle kolm eelist. Valik on suurem: oksjonitel on korraga müügil tuhandeid täisvarustuses maastureid ja pikapeid. Hind on madalam, sest müüjaid on palju. Lisaks ei müüda mitut mudelit (Yukon Denali, F-150 Lightning, Tahoe) Euroopas ametlikult üldse.</p>
      <p>Hinnavahe jääb alles ka pärast kõiki kulusid. Isegi kui liita juurde transport, toll ja käibemaks, tuleb auto sageli soodsam kui Eestist ostes.</p>
    </div>
  </div>
</section>

${processBlock({ light: true, title: "Nii see käib", kicker: "Kuus sammu" })}

<section class="sec sec--sheet">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div>
        <span class="kicker">Sinu osa</span>
        <h2 class="d1" style="margin-top:1rem">Sinult on vaja kolme asja</h2>
      </div>
      <p>Kõik muu teeme meie. Sa ei pea avama oksjonikontot, suhtlema vahendajatega ega käima Transpordiametis.</p>
    </div>
    <ol class="rail" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))">
      <li class="step"><span class="step__n" aria-hidden="true">01</span><h3>Ütle, mida otsid</h3><p>Mudel või paar sobivat mudelit, aastakäikude vahemik, suurim lubatud läbisõit ja eelarve koos kõigi kuludega.</p><span class="step__bar" aria-hidden="true"></span></li>
      <li class="step"><span class="step__n" aria-hidden="true">02</span><h3>Kinnita maksimaalne summa</h3><p>Saadame sulle konkreetse auto andmed ja oma hinnangu. Sina otsustad, kas pakume, ja määrad summa, millest kõrgemale me ei lähe.</p><span class="step__bar" aria-hidden="true"></span></li>
      <li class="step"><span class="step__n" aria-hidden="true">03</span><h3>Võta võtmed vastu</h3><p>Allkirjastad üleandmis-vastuvõtuakti. Auto on registreeritud ja tehnoülevaatuse läbinud, liikluskindlustuse saad sõlmida samal päeval.</p><span class="step__bar" aria-hidden="true"></span></li>
    </ol>
  </div>
</section>

${deskBlock()}
${founderBlock({ light: true })}

<section class="sec sec--raise">
  <div class="wrap">
    <div class="sec__head"><span class="kicker">Küsimused tellimise kohta</span><h2 class="d1" style="margin-top:1rem">Mida inimesed enne tellimist küsivad</h2></div>
    ${faqBlock(ORDER_FAQ)}
  </div>
</section>

${ctaBand({ title: "Kirjuta, millist autot otsid. Esimesed sobivad variandid saadame paari tööpäevaga.", img: "/img/cars/port-ship.webp", alt: "" })}`,
});

const ORDER_FAQ = [
  {
    q: "Kas ma pean ise oksjonikonto avama?",
    a: "Ei. Meil on litsents Coparti ja IAAI oksjonitel osalemiseks ning kontaktid edasimüüjatega. Sina ei pea oksjonimajas registreeruma, sinna deposiiti maksma ega inglise keeles suhtlema.",
  },
  {
    q: "Kui suur ettemaks tuleb teha?",
    a: "Enne oksjonit maksad deposiidi (tagatisraha), mis arvestatakse täies ulatuses auto hinna sisse. Ülejäänud summa tasud pärast oksjoni võitmist. Kui me oksjonit ei võida, ei lähe sinu raha kaotsi.",
  },
  {
    q: "Mis saab siis, kui me oksjonit ei võida?",
    a: "Siis pakume järgmisele sobivale autole. Deposiit jääb alles järgmise oksjoni jaoks. Kui otsustad loobuda, maksame deposiidi tagasi lepingus kokku lepitud tingimustel. Kaotatud oksjoni eest me tavaliselt eraldi tasu ei võta.",
  },
  {
    q: "Kas auto on teel kindlustatud?",
    a: "Jah, transpordi ajaks kindlustame auto meie. Liikluskindlustuse saad sõlmida kohe pärast seda, kui auto on Transpordiametis registreeritud. Registreerimistunnistuse andmed saadame sulle samal päeval.",
  },
  {
    q: "Kas toote ka ettevõtte nimele?",
    a: "Jah. Ettevõtte puhul vormistame impordi nii, et sisendkäibemaksu saab korrektselt maha arvata. Pikapid registreeritakse sageli N1-kategooria veokina, mis muudab maksuarvestuse soodsamaks. Täpsustame selle enne tellimust koos sinu raamatupidajaga.",
  },
];

/* ============================ AMEERIKA AUTOD (hub) ============================ */
export const hub = () => ({
  path: "/ameerika-autod/",
  title: "Ameerika autod · maasturid, pikapid, muskelautod",
  description:
    "Ameerika autod Eestisse: GMC Yukon, Ford F-150, Dodge Challenger, Rivian R1T ja sajad teised mudelid. Vaata kategooriaid ja tüüpilisi hindu.",
  ogImage: "/img/cars/suv-escalade.webp",
  trail: [{ href: "/", label: "Avaleht" }, { href: "/ameerika-autod/", label: "Ameerika autod" }],
  faq: HUB_FAQ,
  body: `
${pageHero({
  kicker: "Kategooriad",
  h1: 'Ameerika autod,<br>mida Eestis <span class="mark">ei müüda</span>',
  lede: "Siin on neli kõige populaarsemat kategooriat. Kui sinu soovitud mudelit nende hulgas ei ole, pole hullu: kui seda USA-s müüakse, saame selle tuua.",
  img: "/img/cars/suv-escalade.webp",
  alt: "",
  trailHtml: crumbs([{ href: "/", label: "Avaleht" }, { href: "/ameerika-autod/", label: "Ameerika autod" }]),
})}

${bentoBlock({ heading: false })}

<section class="sec sec--light">
  <div class="wrap split split--flip">
    <div class="rv">
      <span class="kicker kicker--light">Miks Ameerika auto</span>
      <h2 class="d1" style="margin-top:1rem">Suurem mootor,<br>rikkalikum varustus,<br><span class="mark">madalam hind</span></h2>
      <p class="lede" style="margin-top:1.2rem">Ameerika turule ehitatud auto on tavaliselt paremini varustatud kui sama mudeli Euroopa versioon. Nahksisu, õhkvedrustus, suurem mootor ja kolmas istmerida on seal sageli standardvarustuses, mitte lisatasu eest.</p>
      <ul class="checks">
        <li>${ico.check}<span>Tuhandeid sõidukeid korraga oksjonil, mitte kümneid kuulutusi</span></li>
        <li>${ico.check}<span>Auto ajalugu CARFAX-i raportis</span></li>
        <li>${ico.check}<span>Mudelid, mida Euroopa edasimüüjad ei paku</span></li>
        <li>${ico.check}<span>Lõpphind sageli madalam kui Eesti turul</span></li>
      </ul>
      <div style="margin-top:1.9rem">${btn("Vaata, millest hind koosneb", "/hinnakiri/", "outline-light")}</div>
    </div>
    <div class="rv"><div class="frame"><img src="/img/cars/camaro-blue.webp" width="1200" height="900" alt="Sinine Chevrolet Camaro maanteel" loading="lazy" decoding="async"></div></div>
  </div>
</section>

${founderBlock()}

<section class="sec sec--sheet">
  <div class="wrap">
    <div class="sec__head"><span class="kicker">Küsimused</span><h2 class="d1" style="margin-top:1rem">Ameerika autode kohta</h2></div>
    ${faqBlock(HUB_FAQ)}
  </div>
</section>

${ctaBand({ title: "Ei leidnud oma mudelit? Küsi, suure tõenäosusega saame selle tuua." })}`,
});

const HUB_FAQ = [
  {
    q: "Millised Ameerika autod on Eestis kõige populaarsemad?",
    a: "Kõige rohkem küsitakse suuri maastureid (GMC Yukon Denali, Chevrolet Tahoe, Cadillac Escalade) ja pikapeid (Ford F-150, RAM 1500). Muskelautodest on esikohal Dodge Challenger ja Ford Mustang. Elektriautodest kasvab kõige kiiremini huvi Ford F-150 Lightningu ja Rivian R1T vastu.",
  },
  {
    q: "Kas Ameerika autode varuosi saab Eestis?",
    a: "Levinumate mudelite varuosad on Euroopa ladudes olemas ja jõuavad kohale tavaliselt 2–5 päevaga. Haruldasemad osad tellime USA-st oma transpordikanali kaudu. Aitame varuosade tellimisega ka aastaid pärast auto üleandmist.",
  },
  {
    q: "Kas Ameerika auto spidomeeter on miilides?",
    a: "Enamasti jah. Tüübikinnituse käigus kontrollime, kas näidik kuvab ka kilomeetreid. Kui mitte, seadistame näidiku ümber või paigaldame vastava mooduli. See kuulub teenuse hinna sisse.",
  },
  {
    q: "Kas Ameerika autol on Euroopa tuled?",
    a: "Mitte alati. USA-s on lubatud punased tagumised suunatuled ja tagumine udutuli ei ole kohustuslik. Tüübikinnituse käigus kohandame tuled Euroopa nõuetele. Tavaliselt maksab see 150–400 € ja on eelarves juba arvestatud.",
  },
];

/* ============================ CATEGORY PAGES ============================ */
export const categoryPages = () =>
  categories.map((c, i) => {
    const trail = [
      { href: "/", label: "Avaleht" },
      { href: "/ameerika-autod/", label: "Ameerika autod" },
      { href: `/ameerika-autod/${c.slug}/`, label: c.label },
    ];
    const others = categories.filter((x) => x.slug !== c.slug);
    const faq = [
      {
        q: `Kui kaua võtab ${c.forms.gen} toomine Ameerikast aega?`,
        a: "Tavaliselt 8–12 nädalat oksjoni võitmisest kuni Eesti numbrimärkideni. Kiirel hooajal, kui sadamad on ülekoormatud, võib merevedu võtta paar nädalat kauem.",
      },
      {
        q: `Mis on ${c.forms.plGen} ostmisel kõige sagedasem viga?`,
        a: "Vaadatakse ainult oksjonihinda. Tegelik hind on ostuhind pluss transport, toll, käibemaks ja vormistus. Meie ütleme sulle kogusumma enne pakkumist ja seda me ei ületa.",
      },
      {
        q: "Kas saan enne ostu autost rohkem pilte?",
        a: "Jah. Tellime kohapealse ülevaatuse koos lisafotode ja videoga, ka mootoriruumist ja auto põhja alt. See maksab 60–120 € ja ostu korral arvestame selle summa lõpparvest maha.",
      },
    ];
    return {
      path: `/ameerika-autod/${c.slug}/`,
      title: `${c.h1} · hinnad ja tarneaeg`,
      description: c.metaDesc,
      ogImage: c.img,
      trail,
      faq,
      extraLd: [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: c.h1,
          itemListElement: c.models.map((m, n) => ({ "@type": "ListItem", position: n + 1, name: m })),
        },
      ],
      body: `
${pageHero({
  kicker: `Kategooria 0${i + 1}`,
  h1: esc(c.h1),
  lede: c.blurb,
  img: c.img,
  alt: "",
  trailHtml: crumbs(trail),
})}

<section class="sec sec--tight sec--raise">
  <div class="wrap split">
    <div class="rv"><div class="frame"><img src="${c.img}" width="1200" height="900" alt="${esc(c.alt)}" loading="lazy" decoding="async"><span class="frame__chip">${esc(c.label)}</span></div></div>
    <div class="rv">
      <span class="kicker">Mudelid, mida toome</span>
      <h2 class="d2" style="margin-top:1rem">Enim küsitud mudelid</h2>
      <ul class="checks" style="margin-top:1.4rem">
        ${c.models.map((m) => `<li>${ico.check}<span>${esc(m)}</span></li>`).join("")}
      </ul>
      <p class="prose" style="font-size:.9rem">Toome ka teisi mudeleid. Kirjuta mudel ja aastakäik ning vaatame, mis oksjonitel parasjagu müügil on.</p>
      <div style="margin-top:1.6rem">${btn("Küsi pakkumist", "/kontakt/", "primary")}</div>
    </div>
  </div>
</section>

<section class="sec sec--light">
  <div class="wrap">
    <div class="sec__head"><span class="kicker kicker--light">Miks just see kategooria</span><h2 class="d1" style="margin-top:1rem">Kolm põhjust</h2></div>
    <ol class="rail" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))">
      ${c.why
        .map(
          ([h, p], n) => `<li class="step"><span class="step__n" aria-hidden="true">0${n + 1}</span><h3>${esc(h)}</h3><p>${esc(p)}</p><span class="step__bar" aria-hidden="true"></span></li>`
        )
        .join("")}
    </ol>
  </div>
</section>

${processBlock({ light: false, title: `Kuidas ${c.label.toLowerCase()} Eestisse jõuavad`, kicker: "Protsess" })}
${founderBlock({ light: true, compact: true })}

<section class="sec sec--sheet">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div><span class="kicker">Vaata ka</span><h2 class="d1" style="margin-top:1rem">Teised kategooriad</h2></div>
      <p>Kõigi kategooriate puhul on protsess ja hinnakujundus sama.</p>
    </div>
    <div class="bento">
      ${others
        .map(
          (o, n) => `<a class="tile tile--third" href="/ameerika-autod/${o.slug}/">
        <img src="${o.img}" width="1200" height="900" alt="${esc(o.alt)}" loading="lazy" decoding="async">
        <span class="tile__idx">0${n + 1}</span>
        <span class="tile__body"><h3>${esc(o.label)}</h3><p>${esc(o.short)}</p><span class="tile__go">Vaata${ico.right}</span></span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="sec sec--raise">
  <div class="wrap">
    <div class="sec__head"><span class="kicker">Küsimused</span><h2 class="d1" style="margin-top:1rem">${esc(c.label)} ja import</h2></div>
    ${faqBlock(faq)}
  </div>
</section>

${ctaBand({ title: `Millist ${c.forms.part} sa otsid?`, img: c.img, alt: "" })}`,
    };
  });
