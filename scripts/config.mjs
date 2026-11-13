/* =====================================================================
   SITE CONFIG
   ---------------------------------------------------------------------
   TODO — asenda enne avaldamist päris andmetega (otsi "TODO"):
     site.phone, site.phoneHref, site.email, site.regNo, site.vatNo,
     site.address, site.founder.fullName, site.social
   ===================================================================== */
/* =====================================================================
   SITE CONFIG
   ---------------------------------------------------------------------
   Puudu on veel ainult:
     site.address.street / zip  — äriregistri aadress
     site.founder.fullName      — Reinu perekonnanimi
     site.social                — Facebook / Instagram
   Numbrid hinnakirjas ja näidisarvutustes vajavad kliendi kinnitust.
   ===================================================================== */
export const site = {
  name: "Autod Ameerikast",             // kaubamärk logol
  legalName: "Motokeskus-MC OÜ",        // äriregistri ärinimi
  origin: "https://ameerikaautod.ee",
  locale: "et_EE",
  lang: "et",

  /* true  = eelvaade (netlify.app): otsimootorid blokeeritud, et kohatäidetega
             ja kinnitamata numbritega versioon Google'isse ei satuks.
     false = päris domeen, päris andmed, indekseerimine lubatud. */
  staging: false,

  phone: "+372 501 3902",
  phoneHref: "+3725013902",
  email: "info@ameerikaautod.ee",
  regNo: "10643414",
  vatNo: "EE100602175",
  founded: "2000-02-17",                // äriregistrisse kantud
  address: { street: "", city: "Tallinn", zip: "", country: "EE" },
  social: [],

  founder: {
    first: "Rein",
    fullName: "Rein",                   // perekonnanimi puudu
    role: "Asutaja ja ostujuht",
    portrait: "/img/founder/rein-portrait.webp",
    desk: "/img/founder/rein-desk.webp",
  },
};

export const nav = [
  { href: "/ameerika-autod/", label: "Ameerika autod", note: "Maasturid, pikapid, muskelautod" },
  { href: "/telli-auto-ameerikast/", label: "Telli auto", note: "Kuidas tellimine käib" },
  { href: "/teenused/", label: "Teenused", note: "Ost, transport, toll, registreerimine" },
  { href: "/hinnakiri/", label: "Hinnad", note: "Kui palju auto kokku maksab" },
  { href: "/meist/", label: "Meist", note: "Kes sinu auto ostab" },
  { href: "/kontakt/", label: "Kontakt", note: "Küsi pakkumist" },
];

export const footerNav = [
  {
    title: "Sõidukid",
    links: [
      { href: "/ameerika-autod/maasturid/", label: "Ameerika maasturid" },
      { href: "/ameerika-autod/pikapid/", label: "Ameerika pikapid" },
      { href: "/ameerika-autod/muskelautod/", label: "Muskelautod" },
      { href: "/ameerika-autod/elektriautod/", label: "Elektriautod" },
    ],
  },
  {
    title: "Teenus",
    links: [
      { href: "/telli-auto-ameerikast/", label: "Telli auto Ameerikast" },
      { href: "/teenused/", label: "Kõik teenused" },
      { href: "/hinnakiri/", label: "Hinnad ja kulud" },
      { href: "/kkk/", label: "Korduma kippuvad küsimused" },
    ],
  },
  {
    title: "Ettevõte",
    links: [
      { href: "/meist/", label: "Meist" },
      { href: "/kontakt/", label: "Kontakt" },
      { href: "/ameerika-autod/", label: "Ameerika autod" },
      { href: "/", label: "Avaleht" },
    ],
  },
];

/* Vehicle categories — single source of truth for the bento + child pages */
export const categories = [
  {
    slug: "maasturid",
    metaDesc:
      "Ameerika maasturid Eestisse: Yukon Denali, Tahoe, Suburban, Escalade. Ost USA oksjonitelt, transport, toll ja registreerimine Eestis.",
    label: "Maasturid",
    forms: { gen: "maasturi", plGen: "maasturite", part: "maasturit" },
    h1: "Ameerika maasturid Eestisse",
    short: "Yukon Denali, Tahoe, Suburban, Escalade, Expedition, Grand Cherokee.",
    img: "/img/cars/suv-escalade.webp",
    alt: "Must Cadillac Escalade parklas lehtedeta puude taustal",
    blurb:
      "Suur Ameerika maastur on Eestis haruldane ja kallis. USA-s on see tavaline pereauto: valik on sadu kordi suurem ja hind jääb madalamaks ka pärast transporti ja tolli.",
    models: ["GMC Yukon / Yukon Denali", "Chevrolet Tahoe", "Chevrolet Suburban", "Cadillac Escalade", "Ford Expedition", "Jeep Grand Cherokee", "Dodge Durango", "Toyota Sequoia"],
    why: [
      ["Valik", "USA oksjonitel on korraga müügil tuhandeid täisvarustuses maastureid, Eesti turul vaid mõnikümmend."],
      ["Varustus", "Ameerika autode varustus on üldjuhul rikkalikum: suurem mootor, õhkvedrustus, nahksisu ja kolmas istmerida."],
      ["Hind", "Isegi koos transpordi, tolli ja käibemaksuga jääb lõpphind tavaliselt Eesti turuhinnast madalamaks."],
    ],
  },
  {
    slug: "pikapid",
    metaDesc:
      "Ameerika pikapid Eestisse: F-150, Silverado, RAM 1500, Sierra, Tundra. Ost USA oksjonitelt, transport, toll ja registreerimine Eestis N1-kategoorias.",
    label: "Pikapid",
    forms: { gen: "pikapi", plGen: "pikapite", part: "pikapit" },
    h1: "Ameerika pikapid Eestisse",
    short: "F-150, Silverado, RAM 1500, Sierra, Tundra, Ranger.",
    img: "/img/cars/pickup-orange.webp",
    alt: "Oranž pikap sõidab maanteel",
    blurb:
      "Pikap on USA-s enim müüdud autotüüp. Seetõttu on seal valik suurim ja tihe konkurents hoiab hinnad all.",
    models: ["Ford F-150 / F-250", "Chevrolet Silverado", "RAM 1500 / 2500", "GMC Sierra", "Toyota Tundra", "Ford Ranger", "Jeep Gladiator", "Nissan Titan"],
    why: [
      ["N1-kategooria", "Paljud pikapid registreeritakse Eestis N1-kategooria veokina. Ettevõttel on siis võimalik sisendkäibemaks maha arvata."],
      ["Haakemass", "Üle 3000 kg haakemass on Ameerika pikapi puhul tavaline, mitte erand."],
      ["Varuosad", "Levinumate mudelite varuosi saab Euroopast hõlpsasti ja aitame neid tellida ka pärast auto üleandmist."],
    ],
  },
  {
    slug: "muskelautod",
    metaDesc:
      "Ameerika muskelautod ja klassika: Mustang, Camaro, Challenger, Corvette. CARFAX-i kontroll, transport, toll ja tüübikinnitus Eestis.",
    label: "Muskelautod",
    forms: { gen: "muskelauto", plGen: "muskelautode", part: "muskelautot" },
    h1: "Ameerika muskelautod ja klassika",
    short: "Mustang, Camaro, Challenger, Charger, Corvette.",
    img: "/img/cars/muscle-mustang.webp",
    alt: "Punane Ford Mustang Mach 1 kurvis maanteel",
    blurb:
      "Muskelauto ostetakse südamega. Meie hoolitseme selle eest, et pärast ostu ei tuleks üllatusi: kontrollime auto ajaloo, seisukorra ja dokumendid enne, kui sa maksad.",
    models: ["Ford Mustang GT", "Chevrolet Camaro SS", "Dodge Challenger R/T", "Dodge Charger", "Chevrolet Corvette", "Pontiac Firebird", "Plymouth Barracuda", "Shelby mudelid"],
    why: [
      ["Ajalugu", "Iga auto kohta tellime CARFAX-i raporti ja kontrollime NMVTIS-i andmebaasist, et omandiõigusega oleks kõik korras."],
      ["Klassika", "Üle 30 aasta vanale kollektsiooniväärtusega autole võib kehtida soodsam tollikord, mistõttu on klassika import sageli odavam kui uuema auto oma."],
      ["Seisukord", "Enne oksjonit tellime kohapealse ülevaatuse ja saadame sulle lisapildid ning videod, mida kuulutuses ei ole."],
    ],
  },
  {
    slug: "elektriautod",
    metaDesc:
      "Ameerika elektriautod Eestisse: F-150 Lightning, Rivian R1T, Silverado EV, Hummer EV. Aku raport, transport, toll ja registreerimine.",
    label: "Elektriautod",
    forms: { gen: "elektriauto", plGen: "elektriautode", part: "elektriautot" },
    h1: "Ameerika elektriautod Eestisse",
    short: "F-150 Lightning, Rivian R1T, Silverado EV, Hummer EV.",
    img: "/img/cars/ev-truck.webp",
    alt: "Rohekassinise elektripikapi esivõre ja valgusriba lähivaates",
    blurb:
      "Ameerika elektripikapeid ja -maastureid Euroopa turule ametlikult ei müüda. Import on ainus võimalus nendega Eestis seaduslikult sõita.",
    models: ["Ford F-150 Lightning", "Rivian R1T / R1S", "Chevrolet Silverado EV", "GMC Hummer EV", "Tesla Cybertruck", "Tesla Model X / S", "Cadillac Lyriq", "Lucid Air"],
    why: [
      ["Laadimine", "Kontrollime, kas auto laadimispesa sobib Eesti laadijatega, ja lisame vajaliku adapteri juba komplekti."],
      ["Aku", "Enne ostu tellime aku tervise raporti (SoH), et teaksid aku tegelikku mahtuvust enne maksmist."],
      ["Tarkvara", "Kontrollime, kas tootja tarkvarauuendused ja kaugteenused töötavad ka väljaspool USA-d."],
    ],
  },
];
