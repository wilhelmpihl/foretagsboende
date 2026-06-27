# Sweden Casa Solutions — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Tailored accommodation services for international workforce teams over whole Europe." Pan-europeisk *workforce/arbetar-boende* med lyx-/hospitality-ton ("Scandinavian standards"), managed service — uttryckligen *"a managed accommodation service, not a booking platform"*. (källa: startsida, /countries/sweden — hög)
> - **Juridik/bas:** **SwedenCasaSolutions S.L.**, spanskt bolag (CIF ESB06951248) med HQ i **Huelva, Spanien** — INTE ett svenskt bolag trots namnet. Svenskt mobilnummer (+46 79). (källa: footer + ld+json — hög)
> - **ICP-överlapp med AWP: mycket högt.** Data center-crews, byggnation/EPC, industriell tillverkning, contractors. Sverige-sidan namnger **Göteborg + Volvo-kluster**, Luleå/Boden/Skellefteå (datacenter/grönt stål) — exakt AWP:s blue-collar long-stay-segment. (källa: /countries/sweden — hög)
> - **Prismodell:** Nuvarande sajt = **offert/proposal-lett, ingen publik prislista**. Historiskt (gammal sida, nu 404 men i Google-index) hade de öppen **"från 20 €/person/dygn"** per-person/per-dygn-prissättning + **"single or shared occupancy"** (delat rum). (källa: Google-index /price-menu + /services — per-person medel, shared hög)
> - **Stack:** **Lovable** (AI-site-builder; React/Vite), Google Fonts, egen "flock"-analytics. Inga Google/Meta-pixlar i råmarkup (laddas ev. efter cookie-consent). Domänen är väldigt ung (rebuild via Lovable, © 2026).
> - **Största styrka/svaghet:** Styrka = vass nisch-copy mot datacenter/EPC + svensk industrigeografi (Volvo/Luleå) + 24/7/WhatsApp. Svaghet = **trovärdighet & substans**: AI-byggd sajt, anonyma testimonials, overifierade "2,400+ residences / 98% retention", spansk skalbolagsstruktur, försvunnen prislista, ingen verifierbar svensk närvaro/inventory.

**Källor:** Firecrawl-scrape 2026-06-27 av /, /countries/sweden, /services, /about, /contact, /faq (se `raw/`). Tech: `raw/tech-signals.txt`. Historisk prismodell: Google-index av nedlagd /price-menu (`raw/sources-summary.md`).
**Domän:** swedencasasolutions.com · **Juridisk enhet:** SwedenCasaSolutions S.L. (CIF ESB06951248, Huelva, ES) · **Kontakt:** info@swedencasasolutions.com, +46 (0)79 336 01 42, WhatsApp wa.me/46793360142.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** Managed workforce-boende med "Scandinavian standard" + hospitality, levererat pan-europeiskt från ETT konto-team i Huelva. Kärnlöften: 48h mobilisering, fullt möblerat, ett kontrakt/en kontakt, 24/7-support. Tydlig avgränsning mot OTA/bokningsplattform: *"a managed accommodation service, not a booking platform"*. (källa: startsida, /countries/sweden)
- **ICP (hög):** B2B — mobility managers, HR, EPC/projektledning. Branscher explicit: **Data Center Projects, Construction & Infrastructure, Industrial Manufacturing, Multi-Country Programs**. Skala "from a single executive to several hundred workers". (källa: startsida, /about)
- **Segment (hög):** Övervägande **blue-collar/contractor + crew** (rotating crews, swap-in/swap-out, 10–100+ beds), MEN med uppåt-positionering ("executive relocation", "premium", "€€€"). Sverige-sidan blandar tech/finance (Stockholm) med tung industri (Luleå grönt stål, Sandvik, Gävle stål). (källa: /countries/sweden, /services)
- **Geografi (hög):** Påstår "30+ European Countries" / "whole of Europe". Country-sidor finns för ES, PT, DE, SE, FI, IT, DK, CH, AT, BE, NL. **Sverige-täckning (sid-namngiven):** Stockholm, Göteborg (Mölndal, Lindholmen), Malmö (Hyllie, Öresund), Gävle, Sandviken, Luleå/Boden, samt "Northern Sweden Data Center belt" (Skellefteå, Piteå). Operativ bas dock i Spanien. (källa: /countries/sweden, footer)
- **Pris/paketering — VIKTIGT FÖR ICP:**
  - **Nuvarande (hög):** Ingen publik prislista. Modell = offert ("curated proposal within one business day"). FAQ-frågan "How is pricing structured" är dold/JS-collapsad. priceRange i schema = "€€€" (signalerar premium-positionering). (källa: /contact, /faq, ld+json)
  - **Historisk per-person/per-dygn (medel — Google-index, sidan nu 404):** Gamla /price-menu: *"Accommodation in facility Europe **from 20 € person / per day**. Our service is available 365 days a year, 24 hours!"* → per-person/per-dygn-modell, "facility"-boende. (källa: Google-index-snippet i firecrawl_map)
  - **Delat boende (hög):** /services anger uttryckligen **"Single or shared occupancy options"** → delat dubbel-/flerbäddsrum erbjuds (klassisk arbetar-boende-modell, nära AWP:s per-bädd-ICP).
  - **Allt-inkl (hög):** Wi-Fi, utilities, TV, möbler; "upon request bi-weekly cleaning". Konsoliderad faktura **per stad/projekt**, EUR eller SEK, "Moms-compliant". (källa: /services, /countries/sweden)
- **Min-stay (hög):** **30 dagar / 30 nights** minimum; band **"30 nights to 24 months"** resp. "30-day to 24-month terms". (källa: /countries/sweden, /services) → matchar AWP:s 30–90-natt-fönster.
- **Differentiering/"moat" (låg–medel):** Påstådd nisch mot datacenter/EPC + "Scandinavian standard" + 24/7/365 + WhatsApp. Reell moat svag: ingen ägd inventory bevisad, asset-light sourcing/head-leasing (/services "acquisition and head-leasing"), AI-byggd sajt. (källa: /services, /about)

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (okänt):** Ingen gtag/GTM/AW-conversion i råmarkup. *EJ VERIFIERAT — orsak: pixlar kan injiceras efter cookie-consent; Google Ads Transparency ej hämtad.* Riktning: oklart om aktiv. (källa: tech-signals)
- **Betalt — Meta (okänt):** Ingen fbq i råmarkup. Facebook-sida finns (FB-video "business apartments in 9 cities"). *Meta Ad Library EJ VERIFIERAT.* (källa: tech-signals, firecrawl_search)
- **Organiskt / programmatisk SEO (hög):** **Ja, programmatisk SEO bedrivs** — 11 country-sidor + 5 blogginlägg (data-center-workforce-accommodation, corporate-housing-portugal, worker-accommodation-spain, managing-large-workforce-relocations, temporary-housing-international-contractors). Sverige-sidan har stads-/branschkluster (7 marknader). Komplett OG/Twitter/Schema.org, robots index/follow, Search Console-verifierad. (källa: firecrawl_map, startsida ld+json)
- **Distribution (medel):** Ingen OTA-partnerlogo-strategi (till skillnad från Rentaborg). WhatsApp + e-post + formulär. Tidigare (gammal sajt) "Want to list Accommodation"-nav → tvåsidig marknadsplats-ansats som verkar övergiven. (källa: firecrawl_search /inquiries-index)
- **Socialt (låg):** Facebook + Twitter/X (@swedencasa i meta). Frekvens/engagemang *EJ VERIFIERAT*. (källa: meta twitter:site)
- **Kanalmix-bedömning:** Primär hävstång = programmatisk SEO (country/stad/bransch) + direkt outbound/WhatsApp. Betald annonsering oklar.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Stark. Komplett OG/Twitter-meta, tre Schema.org-block (Organization/WebSite/LocalBusiness), canonical, robots "index, follow, max-image-preview:large", Search Console-verifierad, hreflang-ansats (en/es i WebSite-schema, EN/lang-switch i nav). (källa: startsidans head)
- **Keyword-portfölj (medel):** "corporate housing [land]", "workforce accommodation [land]", "contractor housing [land]", "data center housing", "worker accommodation". Stark long-tail mot datacenter/EPC-nisch. (källa: country-sid-titlar, blogg-slugs)
- **Content-strategi (medel):** Country-sidor (programmatiskt) + Sverige-sidan med stads-/branschsektioner + tunn blogg (5 inlägg). Mindre djup än Rentaborg (färre städer, ingen duration-/jämförelse-blogg). (källa: firecrawl_map)
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — ingen backlink-källa.* Riktning: mycket låg auktoritet (AI-rebuild, © 2026, ingen Wayback-historik för price-menu).
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* Lovable/React+Vite med externa Google Fonts + ej self-hosted = något svagare än Rentaborgs next/font-setup.

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning:
- **Sidarkitektur (hög):** Hero (slogan + "Request a Proposal"/"Explore Services" + stats 30+/2,400+/48h/98%) → premium-manifest → countries-lista → 4 industrier → "Why SwedenCasa" (4 USP) → anonyma testimonials → inquiry-formulär. Stadssidor (Sverige) = egen landningssida per marknad.
- **CTA-arkitektur (hög):** Genomgående primär **"Request a Proposal" / "Submit Inquiry"** (→ /contact). Floating **WhatsApp**-knapp på alla sidor = lågfriktions sekundär CTA.
- **Lead capture (hög):** /contact-formulär, **7 fält** (Full Name, Company, Work Email, Phone, Country/Project Location, Number of Workers [optional], Project Details*) + GDPR-checkbox. **Låg–medel friktion** — färre & mjukare fält än Rentaborgs ~10 (headcount valfritt, ingen duration/bransch/budget-dropdown). Kvalificerar svagare.
- **Konverteringselement (medel):** Stat-block (overifierat), anonyma testimonials (roll+bransch, inga företagsnamn), "Moms-compliant", 48h, 24/7. Inga kundlogotyper, inga externa recensioner. (källa: startsida)
- **Mobil/5-sek-intryck (medel):** Tydligt erbjudande <5 sek. Responsiv. WhatsApp-knapp bra för mobil-blue-collar. *Faktisk mobil-UX ej skärmdumpad (egress blockerar bildnedladdning).*

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Lovable** AI-site-builder (canonical → casa-embrace-europe.lovable.app), React/Vite, Tailwind-utility-CSS, Lucide-ikoner, **externa Google Fonts** (Cormorant Garamond + Inter), egen "flock"-analytics via /~api/analytics. Inga Google/Meta-pixlar i råmarkup (cookie-consent-gated). Ingen self-serve booking (offertformulär).

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** Brief via /contact eller WhatsApp → "curated proposal within one business day" → managed leverans (sourcing, head-leasing, furnishing, fit-out, inspection, utility-coordination) → konsoliderad faktura per stad/projekt. (källa: /services, /contact)
- **Vad ingår (hög):** Fullt möblerat, Wi-Fi, utilities, TV; städning **bi-weekly på begäran** (ej standard varje vecka — svagare än vissa konkurrenter). 24/7/365 support. Single ELLER shared occupancy. Relocation/arrival-support i Sverige. (källa: /services, /countries/sweden)
- **Pris/per-person (hög ICP-signal):** Shared occupancy + historisk "från 20 €/person/dygn" = per-bädd/per-dygn-tänk, exakt blue-collar-modellen. Nuvarande sajt döljer dock siffror bakom offert. (källa: /services + Google-index price-menu)
- **Villkor (hög):** Min 30 nätter; 30 nights–24 months; kontrakt i kundens bolagsnamn; EUR/SEK; Moms-compliant; "Swedish lease frameworks". Uppsägning/early-exit *EJ VERIFIERAT*. (källa: /countries/sweden)
- **Self-serve vs sälj-lett (hög):** **Helt sälj-/offert-lett.** Ingen online-bokning, inga priser, ingen instant quote. Människa/coordinator tar över. (källa: /contact, /faq)

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Offert/proposal-baserad, "response within one business day". Outbound-vänlig via WhatsApp + svenskt mobilnummer + 24/7/365-löfte. Account-team-modell ("single account team"). (källa: /contact, /about)
- **Supportkanaler (hög):** E-post (info@), telefon/+46 79-mobil, **WhatsApp** (floating + footer), webformulär. **Ingen live-chat/chatbot** i koden (WhatsApp ersätter). (källa: tech-signals, footer)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Öppna luckor / att verifiera senare
- **Affärsmodell-substans:** Äger/head-leasar de faktisk inventory i Sverige, eller ren spansk lead-broker som sub-kontrakterar? (Spansk S.L. + AI-sajt + 404:ad "Want to list / Apply / WE PROVIDE WORKERS" = stark asset-light/förmedlar-misstanke, medel.)
- **Nuvarande exakt prissättning** (per person/dygn, shared vs single) — dold bakom offert; historiskt 20 €/person/dygn.
- **FAQ-svar** (minimum stay, pricing-struktur, cleaning) — JS-collapsade, ej i statisk HTML.
- **Google Ads Transparency + Meta Ad Library** (faktiska creatives/aktiv betald trafik).
- **Backlink-profil / organisk trafik / PSI.**
- **Verklighet bakom "2,400+ residences / 98% retention / 30+ countries"** — overifierbara claims.
- **Sverige-juridik:** ingen svensk juridisk enhet/F-skatt hittad — relevant för svenska B2B-kunder (Moms/fakturering trots spansk CIF).
