import { site } from "./config.mjs";
import { esc, ico, btn, lnk, crumbs, faqBlock } from "./layout.mjs";
import { founderBlock, deskBlock, processBlock, ctaBand, pageHero } from "./blocks.mjs";

/* ============================ TEENUSED ============================ */
const SERVICES = [
  ["Auto otsing ja ost", "Jälgime Coparti ja IAAI oksjoneid, edasimüüjate pakkumisi ja eraisikute kuulutusi. Saadame sulle sobivad autod koos fotode, ajalooraporti ja meie hinnanguga.", "/img/cars/rivian-white.webp", "Valge pikap parklas"],
  ["Ajaloo ja seisukorra kontroll", "CARFAX-i raport, NMVTIS-i omandiõiguse kontroll ja vajadusel sõltumatu ülevaatus kohapeal. Ühtegi autot ei osta me enne, kui selle ajalugu on kontrollitud.", "/img/cars/inspect-lift.webp", "Auto tõstukil töökojas"],
  ["Merevedu", "Transport oksjoniplatsilt sadamasse, laadimine konteinerisse või RoRo-laevale ja kindlustus kogu teekonnaks. Saad konteineri numbri, et saaksid saadetist ise jälgida.", "/img/cars/port-ship.webp", "Kaubalaev merel"],
  ["Tollivormistus ja maksud", "Tollideklaratsioon, tollimaks ja käibemaks. Saad ühe arve, kus iga kulu on eraldi real. Ettevõtte puhul vormistame kõik nii, et sisendkäibemaksu saab maha arvata.", "/img/cars/ship-cars.webp", "Sõidukid laeva tekil enne mahalaadimist"],
  ["Tüübikinnitus ja kohandused", "Üksiksõiduki tüübikinnitus, tulede ja näidikute kohandamine Euroopa nõuetele, tehnoülevaatus ja registreerimine Transpordiametis.", "/img/cars/carrier-truck.webp", "Autovedu poolhaagisel"],
  ["Kohaletoimetamine ja järelteenindus", "Toome auto sulle kohale üle kogu Eesti. Ka pärast üleandmist aitame varuosade ja hooldusega.", "/img/cars/suv-escalade.webp", "Must maastur parklas"],
];

export const services = () => {
  const trail = [{ href: "/", label: "Avaleht" }, { href: "/teenused/", label: "Teenused" }];
  return {
    path: "/teenused/",
    title: "Teenused · auto import Ameerikast algusest lõpuni",
    description:
      "Auto ost USA oksjonitelt, ajaloo ja seisukorra kontroll, merevedu, toll, tüübikinnitus, registreerimine ja kohaletoimetamine. Kuus teenust, üks arve.",
    ogImage: "/img/cars/inspect-lift.webp",
    trail,
    extraLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Teenused",
        itemListElement: SERVICES.map(([n, d], i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Service", name: n, description: d, provider: { "@id": `${site.origin}/#org` } },
        })),
      },
    ],
    body: `
${pageHero({
  kicker: "Täisteenus",
  h1: 'Kuus teenust,<br>üks leping,<br><span class="mark">üks arve</span>',
  lede: "Import ei jää kuskil toppama, sest vastutaja on algusest lõpuni üks. Kõigis etappides suhtled sama inimesega ja hind on ette kokku lepitud.",
  img: "/img/cars/inspect-lift.webp",
  alt: "",
  trailHtml: crumbs(trail),
})}

<section class="sec sec--raise">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div><span class="kicker">Mida me teeme</span><h2 class="d1" style="margin-top:1rem">Kogu ahel,<br>mitte üks lüli</h2></div>
      <p>Paljude vahendajate töö lõpeb sadamas. Meie töö lõpeb siis, kui sul on käes võtmed, numbrimärgid ja kehtiv tehnoülevaatus.</p>
    </div>
    <div class="bento">
      ${SERVICES.map(
        ([n, d, img, alt], i) => `<div class="tile ${i === 0 ? "tile--wide" : i === 1 ? "tile--tall" : "tile--third"}">
        <img src="${img}" width="1200" height="900" alt="${esc(alt)}" loading="lazy" decoding="async">
        <span class="tile__idx">0${i + 1}</span>
        <span class="tile__body"><h3>${esc(n)}</h3><p>${esc(d)}</p></span>
      </div>`
      ).join("")}
    </div>
  </div>
</section>

${processBlock({ light: true, title: "Mis mille järel toimub", kicker: "Ajakava" })}
${deskBlock()}
${founderBlock({ light: false })}
${ctaBand({ title: "Vajad ainult osa teenustest? Ka see sobib.", text: "Mõni klient ostab auto ise ja vajab meilt ainult tollivormistust ja tüübikinnitust. Kirjuta, mis etapis sa praegu oled." })}`,
  };
};

/* ============================ HINNAKIRI ============================ */
export const pricing = () => {
  const trail = [{ href: "/", label: "Avaleht" }, { href: "/hinnakiri/", label: "Hinnad" }];
  const faq = [
    {
      q: "Kui suur on tollimaks ja käibemaks Ameerikast toodud autole?",
      a: "Sõiduautole kehtib Euroopa Liidus 10% tollimaks, mis arvutatakse ostuhinna ja veokulu summalt. Seejärel lisandub 24% käibemaks kogu summale koos tollimaksuga. Üle 30 aasta vanale kollektsiooniväärtusega sõidukile võib kehtida soodsam tollikord. Pikapid liigitatakse tollis sageli kaubaveokiks, millele kehtib kõrgem tollimaks. Kontrollime seda iga auto puhul eraldi enne pakkumist.",
    },
    {
      q: "Kas teie teenustasu on fikseeritud?",
      a: "Jah. Teenustasu lepitakse kokku enne otsingu alustamist ja see ei muutu sõltuvalt sellest, kui kalli auto me lõpuks ostame. Nii ei ole meil mingit huvi müüa sulle kallimat autot.",
    },
    {
      q: "Kuidas ma tean, kui palju auto kokku maksma läheb?",
      a: "Enne oksjonit saad kirjaliku eelarve, kus on iga kulu eraldi välja toodud: oksjonihind, oksjonitasu, transport USA-s, merevedu, kindlustus, sadamatasud, tollimaks, käibemaks, tüübikinnitus, registreerimine ja meie teenustasu. Lõpparvel näed iga kulu tegelikku summat ja saad seda eelarvega võrrelda.",
    },
    {
      q: "Kuidas maksmine käib?",
      a: "Deposiit enne oksjonit, auto hind pärast oksjoni võitmist ja ülejäänud kulud enne auto üleandmist Eestis. Kõik maksed tehakse Eesti ettevõtte kontole ja iga makse kohta saad arve.",
    },
  ];
  return {
    path: "/hinnakiri/",
    title: "Hinnad · mis auto Ameerikast tegelikult maksab",
    description:
      "Läbipaistev hinnakujundus: oksjonihind, transport, tollimaks, käibemaks, tüübikinnitus ja teenustasu. Kolm näidisarvutust: maastur, pikap ja muskelauto.",
    ogImage: "/img/cars/port-ship.webp",
    trail,
    faq,
    body: `
${pageHero({
  kicker: "Läbipaistev hind",
  h1: 'Mis auto<br>Ameerikast<br><span class="mark">tegelikult maksab</span>',
  lede: "Oksjonihind ei ole lõpphind. Siin näed kõiki kulusid, millest kogusumma koosneb, ja kolme näidisarvutust.",
  img: "/img/cars/port-ship.webp",
  alt: "",
  trailHtml: crumbs(trail),
})}

<section class="sec sec--raise">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div><span class="kicker">Kulud</span><h2 class="d1" style="margin-top:1rem">Millest<br>hind koosneb</h2></div>
      <p>Iga meie pakkumine koosneb täpselt nendest kuludest. Uusi kulusid hiljem juurde ei tule.</p>
    </div>
    <div class="split" style="align-items:start">
      <dl class="ptable rv">
        <div class="prow prow--head"><dt>Kulu</dt><dd>Ligikaudne summa</dd></div>
        <div class="prow"><dt>Sõiduki ostuhind</dt><dd>sinu eelarve</dd><small>Hind, millega oksjon võidetakse. Sina määrad ülempiiri, millest kõrgemalt me ei paku.</small></div>
        <div class="prow"><dt>Oksjonitasud</dt><dd>400–900 €</dd><small>Oksjonimaja ja vahendaja tasud, sõltuvad auto hinnast.</small></div>
        <div class="prow"><dt>Maismaavedu USA-s</dt><dd>250–800 €</dd><small>Oksjoniplatsilt sadamasse. Sõltub vahemaast ja osariigist.</small></div>
        <div class="prow"><dt>Merevedu ja kindlustus</dt><dd>1 400–2 600 €</dd><small>Konteiner või RoRo-laev, kindlustus auto täisväärtuses kogu teekonnaks.</small></div>
        <div class="prow"><dt>Tollimaks</dt><dd>10%</dd><small>Sõiduautol arvutatakse ostuhinnalt koos veokuluga. Pikapil võib määr olla teine.</small></div>
        <div class="prow"><dt>Käibemaks</dt><dd>24%</dd><small>Arvestatakse summalt, mis sisaldab juba tollimaksu.</small></div>
        <div class="prow"><dt>Tüübikinnitus ja registreerimine</dt><dd>600–1 200 €</dd><small>Üksiksõiduki tüübikinnitus, tulede kohandamine, tehnoülevaatus ja Transpordiameti tasud.</small></div>
        <div class="prow"><dt>Meie teenustasu</dt><dd>fikseeritud</dd><small>Lepime kokku enne otsingu algust. Ei sõltu auto hinnast.</small></div>
      </dl>
      <div class="rv">
        <h3 class="d3">Kolm näidisarvutust</h3>
        <p class="prose" style="margin-top:.9rem;font-size:.95rem">Summad on ümardatud lähima saja euroni. Valuutakursi ja oksjonitasude muutus võib lõppsummat mõne protsendi võrra muuta.</p>

        <dl class="ptable" style="margin-top:1.5rem">
          <div class="prow prow--head"><dt>GMC Yukon Denali 2021</dt><dd>6.2 V8</dd></div>
          <div class="prow"><dt>Oksjonihind</dt><dd>32 400 €</dd></div>
          <div class="prow"><dt>Vedu ja kindlustus</dt><dd>2 950 €</dd></div>
          <div class="prow"><dt>Toll, käibemaks, vormistus</dt><dd>9 180 €</dd></div>
          <div class="prow prow--total prow--head"><dt>Kokku Eestis</dt><dd>44 530 €</dd></div>
        </dl>

        <dl class="ptable" style="margin-top:1rem">
          <div class="prow prow--head"><dt>Ford F-150 Lariat 2020</dt><dd>3.5 EcoBoost</dd></div>
          <div class="prow"><dt>Oksjonihind</dt><dd>24 700 €</dd></div>
          <div class="prow"><dt>Vedu ja kindlustus</dt><dd>2 780 €</dd></div>
          <div class="prow"><dt>Toll, käibemaks, vormistus</dt><dd>7 240 €</dd></div>
          <div class="prow prow--total prow--head"><dt>Kokku Eestis</dt><dd>34 720 €</dd></div>
        </dl>

        <dl class="ptable" style="margin-top:1rem">
          <div class="prow prow--head"><dt>Dodge Challenger R/T 2019</dt><dd>5.7 HEMI</dd></div>
          <div class="prow"><dt>Oksjonihind</dt><dd>21 300 €</dd></div>
          <div class="prow"><dt>Vedu ja kindlustus</dt><dd>2 640 €</dd></div>
          <div class="prow"><dt>Toll, käibemaks, vormistus</dt><dd>6 410 €</dd></div>
          <div class="prow prow--total prow--head"><dt>Kokku Eestis</dt><dd>30 350 €</dd></div>
        </dl>

        <p class="form__note" style="margin-top:1.1rem">Näidisarvutused ei ole pakkumine. Sinu auto täpse kalkulatsiooni saad kirjalikult enne oksjonit.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--light">
  <div class="wrap split">
    <div class="rv"><div class="frame"><img src="/img/cars/muscle-mustang.webp" width="1200" height="900" alt="Punane Ford Mustang Mach 1 maanteel" loading="lazy" decoding="async"></div></div>
    <div class="rv">
      <span class="kicker kicker--light">Läbipaistev hind</span>
      <h2 class="d1" style="margin-top:1rem">Summa on teada<br><span class="mark">enne oksjonit</span></h2>
      <p class="lede" style="margin-top:1.2rem">Enne pakkumist saad kirjaliku eelarve, kus on kogusumma ja iga kulu eraldi. Kui mõni summa hiljem muutub, anname sellest kohe teada, mitte alles lõpparvel.</p>
      <ul class="checks">
        <li>${ico.check}<span>Kirjalik eelarve enne iga pakkumist</span></li>
        <li>${ico.check}<span>Fikseeritud teenustasu, mis ei sõltu auto hinnast</span></li>
        <li>${ico.check}<span>Iga makse kohta Eesti ettevõtte arve</span></li>
        <li>${ico.check}<span>Lõpparvel on näha iga kulu tegelik summa</span></li>
      </ul>
      <div style="margin-top:1.9rem">${btn("Küsi kalkulatsiooni", "/kontakt/", "outline-light")}</div>
    </div>
  </div>
</section>

${founderBlock()}

<section class="sec sec--sheet">
  <div class="wrap">
    <div class="sec__head"><span class="kicker">Küsimused hinna kohta</span><h2 class="d1" style="margin-top:1rem">Maksud ja maksmine</h2></div>
    ${faqBlock(faq)}
  </div>
</section>

${ctaBand({ title: "Kirjuta mudel ja eelarve, saadame sulle täpse kalkulatsiooni." })}`,
  };
};

/* ============================ MEIST ============================ */
export const about = () => {
  const trail = [{ href: "/", label: "Avaleht" }, { href: "/meist/", label: "Meist" }];
  return {
    path: "/meist/",
    title: "Meist · kes su autot Ameerikas ostab",
    description:
      "Motokeskus-MC OÜ toob autosid USA-st ja Kanadast Eestisse. Asutaja Rein teeb oksjonil pakkumised ise ja vastab ise sinu kirjadele. Asutatud 2000.",
    ogImage: "/img/founder/rein-desk.webp",
    trail,
    extraLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Meist",
        url: `${site.origin}/meist/`,
        mainEntity: {
          "@type": "Person",
          name: site.founder.fullName,
          jobTitle: site.founder.role,
          worksFor: { "@id": `${site.origin}/#org` },
          image: `${site.origin}${site.founder.portrait}`,
        },
      },
    ],
    body: `
${pageHero({
  kicker: "Meist",
  h1: 'Üks inimene,<br>kes <span class="mark">vastutab</span>',
  lede: "Autod Ameerikast ei ole platvorm ega vahenduskontor. Sinu autot valib, ostab ja saadab teele sama inimene, kes sulle vastab.",
  img: "/img/founder/rein-desk.webp",
  alt: "",
  trailHtml: crumbs(trail),
})}

<section class="sec sec--raise">
  <div class="wrap founder__grid">
    <div class="rv">
      <div class="shell">
        <div class="shell__core">
          <img src="${site.founder.portrait}" width="824" height="1100" alt="${esc(site.founder.first)}, ${esc(site.name)} asutaja" loading="lazy" decoding="async">
          <div class="founder__tag">
            <span><b>${esc(site.founder.fullName)}</b><span>${esc(site.founder.role)}</span></span>
            <span class="sig"><i></i>Vastab ise</span>
          </div>
        </div>
      </div>
    </div>
    <div class="rv">
      <span class="kicker">Asutaja</span>
      <h2 class="d1" style="margin-top:1rem">Miks ma seda<br>üldse teen</h2>
      <div class="prose" style="margin-top:1.3rem">
        <p>Esimese auto tõin endale, teise sõbrale ja kolmanda tema naabrile. Siis sain aru, et probleem ei ole autode leidmises, sest neid on USA-s rohkem, kui keegi jõuab läbi vaadata. Probleem on usalduses: kuidas saata kümneid tuhandeid eurosid üle ookeani inimesele, keda sa pole kunagi näinud?</p>
        <p>Seepärast teen ma asju teisiti. Minu nägu on kodulehel ja minu telefoninumber on kõigile näha. Oksjonil pakun ma ise ja kui auto ajalugu mulle ei meeldi, jätan pakkumata, isegi kui see tähendab, et teenin sel kuul vähem.</p>
      </div>
      <blockquote class="quote">
        <p>Ainus näitaja, mis mulle päriselt korda läheb, on see, mitu klienti tuleb tagasi. Kõik muu on turundus.</p>
        <cite>${esc(site.founder.fullName)}</cite>
      </blockquote>
      <div class="cred">
        <div><b>2000</b><span>ettevõtte asutamisaasta</span></div>
        <div><b>1</b><span>kontaktisik algusest lõpuni</span></div>
        <div><b>0 &euro;</b><span>maksab esmane hinnang</span></div>
      </div>
    </div>
  </div>
</section>

${deskBlock()}

<section class="sec sec--light">
  <div class="wrap">
    <div class="sec__head sec__head--split">
      <div><span class="kicker kicker--light">Kuidas me töötame</span><h2 class="d1" style="margin-top:1rem">Neli põhimõtet,<br>millest peame kinni</h2></div>
      <p>Need ei ole tühjad sõnad. Just nende pärast tulevad kliendid meie juurde ka teist ja kolmandat korda.</p>
    </div>
    <ol class="rail" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))">
      <li class="step"><span class="step__n" aria-hidden="true">01</span><h3>Halba autot me ei osta</h3><p>Kui CARFAX näitab kahtlast ajalugu või omandiõigusega on probleeme, me sellele autole ei paku. Isegi siis, kui klient seda soovib.</p><span class="step__bar" aria-hidden="true"></span></li>
      <li class="step"><span class="step__n" aria-hidden="true">02</span><h3>Hind on teada enne oksjonit</h3><p>Kirjalik eelarve enne iga pakkumist. Kui midagi muutub, räägime sellest enne, mitte pärast.</p><span class="step__bar" aria-hidden="true"></span></li>
      <li class="step"><span class="step__n" aria-hidden="true">03</span><h3>Üks kontaktisik</h3><p>Sa ei pea oma soove kolmele erinevale inimesele uuesti selgitama. Algusest lõpuni suhtled sama inimesega.</p><span class="step__bar" aria-hidden="true"></span></li>
      <li class="step"><span class="step__n" aria-hidden="true">04</span><h3>Abi ka pärast ostu</h3><p>Aitame varuosade ja hooldusega. Koostöö ei lõpe võtmete üleandmisega.</p><span class="step__bar" aria-hidden="true"></span></li>
    </ol>
  </div>
</section>

${ctaBand({ title: "Helista ja küsi. Vastan ise.", text: "Tööpäeviti vastan tavaliselt samal või järgmisel päeval. Kui olen parasjagu oksjonil, helistan õhtul tagasi." })}`,
  };
};

/* ============================ KKK ============================ */
const ALL_FAQ = [
  ["Kui palju maksab auto tellimine Ameerikast?", "Lõpphind koosneb oksjonihinnast, transpordist, tollimaksust, käibemaksust, tüübikinnitusest ja teenustasust. Tavaliselt lisandub ostuhinnale kokku 35–40%. Kõik kulud on lahti kirjutatud <a href=\"/hinnakiri/\" style=\"color:var(--brand-text)\">hinnakirja lehel</a>."],
  ["Kui kaua võtab auto toomine Ameerikast Eestisse aega?", "Tavaliselt 8–12 nädalat oksjoni võitmisest kuni Eesti numbrimärkideni: 2–4 nädalat kulub transpordile sadamasse, 3–5 nädalat mereveole ja 2–3 nädalat tollile, tüübikinnitusele ning registreerimisele."],
  ["Kas ma pean ise oksjonikonto avama?", "Ei. Meil on litsents Coparti ja IAAI oksjonitel osalemiseks. Sina ei pea oksjonimajas registreeruma, sinna deposiiti maksma ega inglise keeles suhtlema."],
  ["Kas Ameerikast toodud auto saab Eestis registreerida?", "Jah. Taotleme üksiksõiduki tüübikinnituse, teeme tehnoülevaatuse ja registreerime auto Transpordiametis. Saad auto kätte Eesti numbrimärkide ja kehtiva tehnoülevaatusega."],
  ["Kui suur on tollimaks ja käibemaks?", "Sõiduautole kehtib 10% tollimaks ostuhinnalt koos veokuluga, seejärel 24% käibemaks kogu summalt koos tollimaksuga. Pikapid võivad tollis liigituda kaubaveokiks, millele kehtib teine määr, seega kontrollime seda iga auto puhul eraldi."],
  ["Kas ostate ka kahjustatud autosid?", "Jah, kui sa seda ise soovid ja oled riskidest teadlik. Enamasti toome autosid, mille oksjoni staatus on „Run and Drive“, ehk auto käivitub ja sõidab. Kahjustatud auto puhul saadame sulle enne pakkumist remondi hinnangu."],
  ["Mis saab, kui auto saab transpordi ajal kahjustada?", "Auto on transpordi ajaks kindlustatud ja kindlustuskaitse ulatuse lepime kirjalikult kokku enne teeleasumist. Kahju korral aitame nõude vormistada ja suhtleme kindlustusseltsiga sinu eest."],
  ["Kas spidomeeter näitab miile?", "Enamasti jah. Tüübikinnituse käigus kontrollime, kas näidik kuvab ka kilomeetreid. Kui mitte, seadistame näidiku ümber või paigaldame vastava mooduli. See on teenuse hinna sees."],
  ["Kas Ameerika autol on Euroopa tuled?", "Mitte alati. USA-s on lubatud punased tagumised suunatuled ja tagumine udutuli ei ole kohustuslik. Tüübikinnituse käigus kohandame tuled Euroopa nõuetele. Tavaliselt maksab see 150–400 € ja on eelarves juba arvestatud."],
  ["Kas varuosi saab Eestis?", "Levinumate mudelite varuosad on Euroopa ladudes olemas ja jõuavad kohale 2–5 päevaga. Haruldasemad osad tellime USA-st oma transpordikanali kaudu. Aitame ka aastaid pärast auto üleandmist."],
  ["Mis saab siis, kui me oksjonit ei võida?", "Siis pakume järgmisele sobivale autole. Deposiit jääb alles järgmise oksjoni jaoks. Kui otsustad loobuda, maksame deposiidi tagasi lepingus kokku lepitud tingimustel. Kaotatud oksjoni eest me tavaliselt eraldi tasu ei võta."],
  ["Kas toote autosid ka ettevõtte nimele?", "Jah. Vormistame impordi nii, et sisendkäibemaksu saab korrektselt maha arvata. Pikapid registreeritakse sageli N1-kategooria veokina. Täpsustame selle enne tellimust koos sinu raamatupidajaga."],
  ["Kas saan auto enne ostu üle vaadata lasta?", "Jah. Tellime kohapealse ülevaatuse koos lisafotode ja videoga, ka mootoriruumist ja auto põhja alt. See maksab 60–120 € ja ostu korral arvestame selle summa lõpparvest maha."],
  ["Kas tasub tuua üle 30 aasta vanust klassikat?", "Sageli jah. Kollektsiooniväärtusega autole võib kehtida soodsam tollikord, mistõttu on vanema auto import odavam kui uuema oma. Kontrollime nõuetele vastavust iga auto puhul eraldi."],
];

export const faqPage = () => {
  const trail = [{ href: "/", label: "Avaleht" }, { href: "/kkk/", label: "KKK" }];
  const faq = ALL_FAQ.map(([q, a]) => ({ q, a }));
  return {
    path: "/kkk/",
    title: "KKK · Ameerikast auto tellimise küsimused",
    description:
      "14 vastust Ameerikast auto tellimise kohta: hind, tollimaks, käibemaks, tarneaeg, tüübikinnitus, registreerimine, kindlustus, varuosad ja oksjonid.",
    ogImage: "/img/cars/ev-truck.webp",
    trail,
    faq,
    body: `
${pageHero({
  kicker: "Korduma kippuvad küsimused",
  h1: 'Kõik, mida<br>enne tellimist<br><span class="mark">teada tasub</span>',
  lede: "Neliteist küsimust, mida meilt kõige sagedamini küsitakse. Kui sinu küsimust siin ei ole, kirjuta või helista.",
  img: "/img/cars/ev-truck.webp",
  alt: "",
  trailHtml: crumbs(trail),
})}

<section class="sec sec--raise">
  <div class="wrap-narrow">
    ${faqBlock(faq)}
  </div>
</section>

${founderBlock({ light: true, compact: true })}
${ctaBand({ title: "Ei leidnud vastust? Küsi otse." })}`,
  };
};

/* ============================ KONTAKT ============================ */
export const contact = () => {
  const trail = [{ href: "/", label: "Avaleht" }, { href: "/kontakt/", label: "Kontakt" }];
  return {
    path: "/kontakt/",
    title: "Kontakt · küsi pakkumist Ameerika auto toomiseks",
    description:
      "Kirjuta mudel ja eelarve ning saadame paari tööpäevaga esimesed sobivad autod. Telefon, e-post ja päringuvorm. Esmane hinnang on tasuta.",
    ogImage: "/img/cars/rivian-white.webp",
    trail,
    extraLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Kontakt",
        url: `${site.origin}/kontakt/`,
        mainEntity: { "@id": `${site.origin}/#org` },
      },
    ],
    body: `
${pageHero({
  kicker: "Kontakt",
  h1: 'Kirjuta, millist<br>autot otsid',
  lede: "Tavaliselt saadame paari tööpäeva jooksul esimesed sobivad autod koos fotode, ajalooraporti ja kuluarvestusega. Tasuta ja ilma kohustusteta.",
  img: "/img/cars/rivian-white.webp",
  alt: "",
  trailHtml: crumbs(trail),
})}

<section class="sec sec--raise">
  <div class="wrap split" style="align-items:start">
    <div class="rv">
      <h2 class="d3">Päringuvorm</h2>
      <p class="prose" style="margin-top:.7rem;font-size:.93rem">Mida täpsem on soov, seda kiiremini leiame õige auto. Kui sa veel ei tea täpset mudelit, kirjuta lihtsalt eelarve ja kasutusotstarve.</p>
      <form class="form" style="margin-top:1.6rem" action="/aitah/" method="post" name="paring" data-netlify="true" netlify-honeypot="company">
        <input type="hidden" name="form-name" value="paring">
        <p hidden><label>Jäta tühjaks <input name="company"></label></p>
        <div class="form__row">
          <div class="field"><label for="nimi">Nimi</label><input id="nimi" name="nimi" type="text" autocomplete="name" required></div>
          <div class="field"><label for="tel">Telefon</label><input id="tel" name="telefon" type="tel" autocomplete="tel" required></div>
        </div>
        <div class="form__row">
          <div class="field"><label for="email">E-post</label><input id="email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="kat">Sõiduki tüüp</label>
            <select id="kat" name="kategooria">
              <option>Maastur</option><option>Pikap</option><option>Muskelauto või klassika</option>
              <option>Elektriauto</option><option>Muu / ei tea veel</option>
            </select>
          </div>
        </div>
        <div class="field"><label for="eelarve">Eelarve koos kõigi kuludega</label><input id="eelarve" name="eelarve" type="text"></div>
        <div class="field"><label for="soov">Mudel, aastakäik, soovid</label><textarea id="soov" name="soov"></textarea></div>
        <button class="btn btn--primary btn--wide" type="submit">Saada päring<span class="btn__ic">${ico.arrow}</span></button>
        <p class="form__note">Andmeid ei jagata kolmandate osapooltega.</p>
      </form>
    </div>

    <div class="rv">
      <h2 class="d3">Otsekontakt</h2>
      <div class="cstack" style="margin-top:1.4rem">
        <a href="tel:${site.phoneHref}">${ico.phone}<span><b>Telefon</b><span>${esc(site.phone)}</span></span></a>
        <a href="mailto:${site.email}">${ico.mail}<span><b>E-post</b><span>${esc(site.email)}</span></span></a>
        <div>${ico.clock}<span><b>Vastame</b><span>E–R 9–18, laupäeviti kokkuleppel</span></span></div>
        <div>${ico.pin}<span><b>Piirkond</b><span>Toome auto kohale üle kogu Eesti</span></span></div>
      </div>

      <div class="shell" style="margin-top:1.8rem">
        <div class="shell__core">
          <img src="${site.founder.portrait}" width="824" height="1100" alt="${esc(site.founder.first)}, ${esc(site.name)} asutaja" loading="lazy" decoding="async">
          <div class="founder__tag">
            <span><b>${esc(site.founder.fullName)}</b><span>${esc(site.founder.role)}</span></span>
            <span class="sig"><i></i>Vastab ise</span>
          </div>
        </div>
      </div>
      <p class="prose" style="margin-top:1.2rem;font-size:.92rem">Kirjale vastab ${esc(site.founder.first)} ise. Mitte müügiosakond, mitte automaat.</p>
    </div>
  </div>
</section>

${ctaBand({ title: "Eelistad helistada? Number on lehe ülaosas.", text: "Lühike telefonikõne säästab sageli terve nädala kirjavahetust." })}`,
  };
};

/* ============================ AITÄH ============================ */
export const thanks = () => ({
  path: "/aitah/",
  title: "Aitäh, päring saadetud",
  description: "Sinu päring on kätte saadud. Vastame tööpäeviti, tavaliselt ühe tööpäeva jooksul.",
  noindex: true,
  trail: [{ href: "/", label: "Avaleht" }, { href: "/aitah/", label: "Aitäh" }],
  body: `
<section class="sec" style="padding-block:clamp(9rem,16vw,13rem) var(--sec)">
  <div class="wrap-narrow" style="text-align:left">
    <span class="kicker">Päring saadetud</span>
    <h1 class="d1" style="margin-top:1rem">Aitäh. Võtame<br><span class="mark">peagi ühendust</span></h1>
    <p class="lede" style="margin-top:1.3rem">Saime sinu päringu kätte. ${esc(site.founder.first)} vaatab selle üle ja vastab tööpäeviti, tavaliselt ühe tööpäeva jooksul. Kui asi on kiire, helista julgelt.</p>
    <div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:2rem">
      ${btn(site.phone, `tel:${site.phoneHref}`, "primary", ico.phone)}
      ${btn("Tagasi avalehele", "/", "ghost")}
    </div>
    <div class="cred" style="margin-top:3rem">
      <div><b>1–2</b><span>tööpäeva esimeste sobivate autodeni</span></div>
      <div><b>8–12</b><span>nädalat on tavaline tarneaeg</span></div>
      <div><b>0 €</b><span>maksab esmane hinnang</span></div>
    </div>
  </div>
</section>`,
});

/* ============================ 404 ============================ */
export const notFound = () => ({
  path: "/404.html",
  title: "Lehte ei leitud",
  description: "Seda lehte ei ole olemas. Vaata Ameerika autode kategooriaid või võta ühendust.",
  noindex: true,
  trail: [],
  body: `
<section class="sec" style="padding-block:clamp(9rem,16vw,13rem) var(--sec)">
  <div class="wrap-narrow">
    <span class="kicker">Viga 404</span>
    <h1 class="d1" style="margin-top:1rem">Seda lehte<br><span class="mark">siin ei ole</span></h1>
    <p class="lede" style="margin-top:1.3rem">Link on vigane või leht on teisaldatud. Vali allpool, kuhu edasi minna.</p>
    <div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:2rem">
      ${btn("Ameerika autod", "/ameerika-autod/", "primary")}
      ${btn("Telli auto", "/telli-auto-ameerikast/", "ghost")}
      ${btn("Kontakt", "/kontakt/", "ghost")}
    </div>
  </div>
</section>`,
});
