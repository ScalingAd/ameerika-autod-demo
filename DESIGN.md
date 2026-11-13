# Autod Ameerikast — disainisüsteem

## Register ja stseen
Brand. Stseen: 45-aastane mees köögilaua taga kell 21, telefon käes, sirvib
Yukon Denali pilte. Ruum on pime, ekraan on ainus valgusallikas.
→ Tume liides. Fotod helendavad. Punane on ainus signaal.

## Värv — strateegia: Committed
Üks küllastunud värv kannab brändi. Neutraalid on kõik kallutatud punase tooni
poole (hue 25–30), mitte kunagi puhas hall. Ei #000, ei #fff.

| Roll | OKLCH | Kasutus |
|---|---|---|
| `--ink-900` | oklch(14% 0.008 28) | lehe põhi |
| `--ink-800` | oklch(18% 0.009 28) | tõstetud pinnad |
| `--ink-700` | oklch(24% 0.010 28) | kaardi sisu |
| `--ink-600` | oklch(32% 0.009 28) | piirjooned, hairline |
| `--paper` | oklch(97% 0.004 60) | hele sektsioon |
| `--brand` | oklch(48% 0.192 26) | ainus aktsent, ≤12% pinnast |
| `--brand-hi` | oklch(58% 0.205 27) | hover |

Punane ei ole kunagi suurel pinnal taustaks. Ta on joon, number, nupp, 4px riba.

## Tüpograafia
Mõlemad self-hosted woff2, bränd omab neid.
- **Oxanium** (variable 300–800) — display, pealkirjad, numbrid, sildid. Versaal.
- **Google Sans Flex** (variable 300–800) — kogu jooksev tekst.

Skaala suhe ≥1.25. Display `clamp()`-iga. Tumedal taustal line-height +0.06.
Lõigu laius max 68ch.

## Ruum
Sektsioonid `clamp(88px, 11vw, 168px)`. Rütm muutub: tihe plokk kohe laia
tühja ala järel. Mitte kunagi ühtlane padding kõikjal.

## Materjal
Suured kaardid kasutavad kahekordset serva: väline kest `--ink-800` + 1px
`--ink-600` hairline + suur raadius; sisemine tuum oma taustaga ja
`inset 0 1px 0 rgb(255 255 255 / .06)` ülemise serva valgusega.

## Liikumine
- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-mv: cubic-bezier(.77,0,.175,1)`
- UI alla 260ms. Sektsioonide ilmumine 700ms, stagger 60ms.
- Ainult `transform` ja `opacity`. IntersectionObserver, mitte scroll-listener.
- `:active { transform: scale(.975) }` igal vajutataval elemendil.
- `prefers-reduced-motion` eemaldab liikumise, jätab opacity.

## Keelatud
Külgriba-äärised (border-left aktsent), gradienttekst, klaasefekt sisuplokkidel,
kolm ühesugust ikoonikaarti reas, pesastatud kaardid, mõttekriipsud tekstis,
emotikonid, puhas must, Inter.
