# National Corporate Housing — konkurrentprofil

> **TL;DR**
> - **Vad de är:** Stor amerikansk corporate housing-aktör (grundad 1999, Tom Atchison), HQ Denver/Greenwood Village, CO. 28 kontor i Nordamerika + kontor i **London** och **Singapore**. Asset-light: hyr lägenheter av hyresvärdar och hyr ut i andra hand (master lease). [conf: hög — about-us, ZoomInfo/Crunchbase, WSJ]
> - **Positionering:** Global relocation-/corporate housing-partner, "Home, Wherever You Are®". Tre relevanta linjer: serviced apartments, **Group Housing (PCTT = project/crew/team travel)**, employee relocation/mobility. Tagline-tema: "Share the address. We'll do the rest." [conf: hög — about-us, group-housing]
> - **Sverige-närvaro = TUNN.** En enda programmatisk SEO-landningssida (`/emea/sweden`). **Inget svenskt bolag (AB), ingen lokal adress, inget svenskt telefonnummer, inga listningar, ingen prissättning, ingen Göteborgs-undersida.** Göteborg nämns endast som "Gothenburg Lindholmen" i en punktlista. EMEA-sidornas footer visar US-adressen (Greenwood Village). [conf: hög — sweden-sida, Dublin-sida footer, ingen AB hittad i sök]
> - **ICP-överlapp med AWP:** Delvis. Group Housing adresserar **construction crews + automotive** och Sweden-sidan lyfter **Gothenburg Lindholmen / automotive (Volvo-korridoren implicit)**. MEN deras faktiska tyngdpunkt är USA + white-collar relocation + sportlag/filmteam; svensk industriarbetar-long-stay är inte en bevisad leveransstyrka.
> - **Största styrka/svaghet:** Styrka = global skala, varumärke, kapital, äkta ramavtals-/relocation-maskineri (RMC-partner till Sirva m.fl.). Svaghet (mot AWP i Göteborg) = ingen verifierad lokal närvaro/inventory i Sverige; sidan är ett SEO-skal utan lokalt erbjudande, pris eller kontaktväg utöver ett US-centrerat formulär.

**Källor:** scrape 2026-06-27 av startsida (rawHtml), `/emea/sweden`, `/contact-us`, `/services-solutions/group-housing`, `/about-us`; firecrawl_search (företagsbakgrund, Sverige-entitet, affärsmodell). Se `raw/`.
**Domän:** nationalcorporatehousing.com · **Juridisk enhet (US):** National Corporate Housing, Inc., 8400 E Crescent Pkwy #300, Greenwood Village, CO 80111, +1 303-863-7002 (Yelp/Dublin-footer). **Svensk enhet:** `EJ VERIFIERAT — orsak: ingen AB/lokalkontor hittat i sök eller på sajt; trolig leverans via HQ/partnernätverk + BridgeStreet-förvärv (2020).`

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "One-stop partner for serviced apartments and short-term corporate housing around the world." Tar bort housing-admin för arbetsgivare via global räckvidd + lokal service + white-glove kundtjänst. Group Housing: en kontaktperson, master leases för "instant multi-unit confirmation", konsoliderad **en faktura** (lägenhet + hotellnätter + skatter + avgifter). (källa: about-us, group-housing)
- **ICP (hög):** B2B/enterprise — HR, global mobility/relocation managers, projektledare, RMC:er (relocation management companies; National är leverantör åt t.ex. Sirva). Branscher explicit: **Technology, Relocation & Mobility, Group Housing**. Group Housing-segment: **sportlag, construction crews, training/utvecklingsteam, filmteam**, samt "automotive, life sciences, financial sectors" (Sweden-sidan). (källa: sweden-sida, group-housing)
- **Segment (hög):** Brett — allt från enskild relocation till stora grupper ("house a group of any size"). PCTT (project/crew/team travel) = projektbaserad gruppinkvartering. Även intern-program, rotational program, insurance housing, government/military (startsido-meta). (källa: group-housing, contact-form-dropdown, homepage meta)
- **Geografi (hög/för Sverige: tunn):** Verklig fysisk närvaro = Nordamerika (28 kontor) + London + Singapore. EMEA-täckning marknadsförs via **programmatiska SEO-landningssidor** (Sweden, Ireland/Dublin m.fl.) utan lokala kontor. Sverige-sidan listar hubbar: Stockholm CBD, Kista, Solna/Arenastaden, **Gothenburg Lindholmen** (Lindholmen Science Park + automotive), Malmö Hyllie, Uppsala. **Ingen separat Göteborgs-URL.** (källa: sweden-sida, map, Dublin-footer = US-adress)
- **Pris/paketering (medel):** Group Housing utlovar "transparent pricing" och "cost-effective housing" + integrerad mix (long-stay apartments + flexibla hotellnätter på en faktura). **Inga faktiska priser eller min-stay publicerade** någonstans på publika sidor. Prismodell därför offert-/program-ledd. Min-stay: `EJ VERIFIERAT — orsak: ej angivet på sajten.` (källa: group-housing)
- **Differentiering/"moat" (hög):** Global skala + kapital + etablerat varumärke sedan 1999 + RMC-/enterprise-relationer + master-lease-inventory i många länder. "Home, Wherever You Are®" (registrerat). Datanyze (tredjepart) anger ~350 anställda / ~$358.6M intäkt — `tredjepartsestimat, ej bekräftat av bolaget`. (källa: about-us, datanyze)

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (okänt):** Ingen direkt Google Ads conversion-/remarketing-tag (`googleadservices`, `AW-`, `doubleclick`, `gclid`-linker) i startsidans rawHtml. **GTM-container `GTM-P6ZP2B`** finns dock → ads-taggar kan laddas via container utan att synas i statisk HTML. → **Google Ads = okänt (möjligt via GTM).** `EJ VERIFIERAT — orsak: Google Ads Transparency Center ej hämtat; egress-policy.` (källa: homepage-rawhtml grep)
- **Betalt — Meta (nej/okänt):** Ingen Meta-pixel (`fbq`/`connect.facebook`/`fbevents`) i startsidans markup → trolig ingen Meta-pixel på sajten. Instagram-konto finns (publicerar bl.a. "Gott nytt år"-hälsningar). **Meta-annonsering = okänt** (Ad Library ej hämtat). (källa: homepage-rawhtml grep, IG-sök)
- **Organiskt (hög):** Tydlig **programmatisk SEO** på geo-nivå — land/stad-landningssidor under `/furnished-housing/corporate-housing/{region}/{land}/{...}` (Sweden, Ireland/Dublin, US-delstater som Indiana, Kansas City). Sidorna är mall-genererade, stockfoto, generisk lokal-copy. Detta är deras huvudsakliga inbound-hävstång i marknader utan kontor (inkl. Sverige). (källa: map, sweden-sida, Dublin-sida)
- **Distribution/partners (hög):** RMC-/leverantörsekosystem — t.ex. Sirva Supplier Award 2024; medlem i branschorgan (ISAAP, CHPA). Förvärvade **BridgeStreet (dec 2020)** för utökad räckvidd; intresse i West London-lägenheter. (källa: search: sirva, isaap, pr.com, ubs-pdf)
- **Socialt (medel):** LinkedIn (etablerad företagssida, "since 1999"), Instagram aktiv. Frekvens/engagemang `EJ VERIFIERAT`.
- **Kanalmix-bedömning:** Inbound via varumärke + RMC-/enterprise-relationer + programmatisk geo-SEO. För Sverige specifikt: enbart SEO-skal, ingen lokal betald/organisk närvaro bevisad.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, canonical, ld+json (`application/ld+json` finns i HTML), sitemap.xml. Mall-driven URL-arkitektur per region/land/stad → skalbar programmatisk SEO. (källa: homepage-rawhtml, map)
- **Keyword-portfölj (medel):** "corporate housing [land/stad]", "serviced apartments [land]", "furnished housing", "group housing", "temporary housing", "employee relocation". Title-mönster: "Serviced Apartments in {Country} | National Corporate Housing". (källa: sidtitlar)
- **Content-strategi (hög):** Geo-landningssidor (programmatiska) + service-/lösningssidor (group-housing, employee-relocations, industry-expertise/technology) + about/ESG/careers. Industry-expertise-kluster finns (t.ex. /industry-expertise/technology). (källa: sweden-sida-länkar, map)
- **i18n (hög):** Sajten är **endast en-US** (`language: en-US` på alla sidor, inkl. Sverige-sidan). Ingen svensk översättning, ingen hreflang-sv observerad. → Sverige-sidan riktar sig till engelsktalande HR/mobility-köpare, inte svensk lokal sökare. (källa: sweden-sida metadata)
- **Backlink/domänstyrka (låg):** `EJ VERIFIERAT — orsak: ingen backlink-källa hämtad.` Riktning: etablerad domän (sedan 1999), branschomnämnanden (WSJ, AltoVita "10 best") → sannolikt hög auktoritet jämfört med nischaktörer.
- **Core Web Vitals (låg):** `EJ VERIFIERAT — PSI ej körd.`

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning:
- **Sidarkitektur (Sverige-sida, hög):** Hero (stockbild norrsken + "Sweden Serviced Apartments") → hubb-lista (Stockholm/Kista/Solna/Göteborg/Malmö/Uppsala) → transit/airport-copy (ARN/GOT/MMX, SL/Västtrafik) → "Our expertise" (Technology/Relocation/Group Housing) → amenities → enda CTA **"Contact us"**. Ingen prissättning, inga listningar, inget lokalt nummer.
- **CTA-arkitektur (hög):** Genomgående mjuk CTA: "Contact us" / "Chat with our experts" / "Let's talk" / "Get a Group Quote" → allt leder till `/contact-us`. Snabbväg för brådskande behov: `/housing-request`.
- **Lead capture (hög):** `/contact-us`-formulär, **US-centrerat**: First/Last name, Email, Phone, Company, Job title, Address, City, **State/Province (dropdown = alla US-delstater + "Non-US State")**, **Zip Code**, Country (full ISO-lista inkl. Sweden), **Furnished Housing Needs** (Intern Program / Rotational program / Travel or temporary assignments / Relocations / Not Sure). reCAPTCHA. ~12 fält = hög friktion; uppenbart byggt för US-marknad med Sverige påklistrat.
- **Konverteringselement (medel):** Awards/certifieringar (Great Place to Work, Denver Business Journal Most Admired CEO, USCA), klient-citat (sportlag-citat: 175 spelare/5 marknader), "By the numbers"-räknare (renderas 0K+/0% statiskt — JS-animerade, faktiska värden ej i scrape). Bilder = stockfoto (AdobeStock_*). (källa: about-us, group-housing)
- **Mobil/5-sek-intryck (medel):** Sweden-sidan kommunicerar "serviced apartments i Sverige" snabbt men ger ingen anledning att agera lokalt (inget pris/inventory/nummer). `Faktisk mobil-UX ej skärmdumpad.`

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Kentico Xperience DXP** (.NET; `_content/Kentico.*`, `getContentAsset`, Kentico FormWidget) — server-renderad. **GTM (GTM-P6ZP2B)**. **Google reCAPTCHA** (v2/v3) på formulär. **Kentico Xperience AI Agents** widget (`Kentico.Xperience.AiAgents/aiagents/main.js`) = inbyggd AI-/chatt-funktion. Roboto via Google Fonts (gstatic). Egen JS-bundle `/js/main.*.js`. Inga sociala pixlar (Meta/LinkedIn/Bing/TikTok) i startsidans markup.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** Konsultativt/program-lett. "Our housing specialists will work with you to create a flexible solution based on your locations, timelines, budget, and needs." En dedikerad kontaktperson, snabba svar, master leases för multi-unit. Ingen self-serve booking. (källa: contact-us, group-housing)
- **Vad ingår (hög):** Fullt möblerade serviced apartments — Wi-Fi, fullt utrustat kök, vardagsrum; parkering/garage i nyare hus. Bredare bolag: rental assistance, destination services, insurance housing, relocation/mobility. (källa: sweden-sida, about-us)
- **Villkor (låg):** Min-stay, uppsägning, leasevillkor `EJ VERIFIERAT — orsak: ej publicerat`. "Flexible terms", "master leases", "consolidated or separate invoices" utlovas men ospecificerat. (källa: group-housing)
- **Affärsmodell (hög):** Asset-light master-lease aggregator — "rent apartments from landlords and then sublease" (WSJ). Plus global mobility-tjänster. (källa: WSJ)
- **Self-serve vs sälj-lett (hög):** **Helt sälj-/program-lett.** Ingen online-bokning, inga priser, inget instant-book.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Enterprise/konsultativ B2B + RMC-kanal. Två formulärspår: (1) "custom housing program" (program-sälj), (2) `/housing-request` för "immediate needs". Account-manager-modell, white-glove. (källa: contact-us, group-housing)
- **Supportkanaler (hög):** Webformulär (`/contact-us`, `/housing-request`), telefon (US: +1 303-863-7002), **Kentico AI Agents-widget** (AI-chatt/assistent i koden) → trolig chatt/assistent-funktion på sajten. Ingen svensk telefon/e-post publik. (källa: homepage-rawhtml, Yelp)
- **Chatt (ja — sannolikt):** Kentico Xperience AI Agents-skript laddas på startsidan → AI-driven chatt/assistent. `Exakt UI/SLA ej verifierat (ej interagerat).` (källa: homepage-rawhtml grep)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton för Sverige:** `EJ VERIFIERAT — ingen kontakt tagen.`

---
### Öppna luckor / att verifiera senare
- Svensk juridisk enhet/lokalkontor: ingen funnen → bekräfta att Sverige levereras remote/via partner (BridgeStreet/EuHabitat-typ nätverk). [riktning: hög att ingen egen svensk drift finns]
- Google Ads Transparency Center + Meta Ad Library (faktiska creatives/sökord) — ej hämtat.
- Faktiska "By the numbers"-värden (properties/satisfaction/languages) — JS-renderade, ej i statisk scrape.
- Faktiska priser/min-stay/villkor — ej publika; kräver offert (ej tillåtet att mystery-shoppa).
- Om de har någon verklig inventory i Göteborg/Sverige eller endast sourcar on-demand vid förfrågan.
