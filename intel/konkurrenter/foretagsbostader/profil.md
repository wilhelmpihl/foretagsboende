# Företagsbostäder — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Sweden's largest housing agency for serviced apartments." Etablerad incumbent sedan **1993**, ägd av hotellkoncernen **Strawberry** (Petter Stordalen / f.d. Nordic Choice Hotels). Medlem i **EuRA** (European Relocation Association), miljöcertifierad enligt **Svensk Miljöbas**. (källa: /en startsida-FAQ, hög)
> - **Skala/inventory:** Marknadsför **2 000–3 000+ lägenheter**; live-katalog visar **261 lediga** just nu över 5 städer. **Göteborg = 113 lediga** (deras största stad jämte Stockholm 104) → direkt överlapp med AWP:s hemmamarknad. (källa: /en, /en/serviced-apartments/goteborg, hög)
> - **Prismodell:** **Transparent, instant-browse** — pris/månad visas per enhet (Göteborg ~11 600–75 000 kr/mån), priskalkylator per datumintervall, "billed monthly, excl. VAT", inkl. el/värme/vatten/internet. Tre kategorier **Basic/Standard/Premium**. Min-stay **typ. 5 dygn**; längre = lägre dygnspris; ramavtal för återkommande behov. (källa: enhetssida + /en FAQ, hög)
> - **Kanalmix:** Stark **programmatisk SEO** (city-guides per stadsdel + serviced-apartments/apartment-hotels per stad + ~261 enhetssidor + ~30 news-artiklar) + **OTA-distribution** (Expedia, Hotels.com — Mölndal 8.0/Very Good) + koncern-cross-sell via strawberryhotels.com. **Weply live-chat** (mänskliga agenter). Ingen Meta/GA4/Ads-pixel direkt i sidkoden — endast GTM (kan ladda pixlar). (källa: rawHtml, hög)
> - **Största styrka/svaghet:** Styrka = trovärdig, kapitalstark incumbent med **äkta egen volym + transparent pris + instant browse + hotellkoncern-rygg**. Svaghet = generell B2B/relocation-positionering utan vass industri/arbetare-nisch; "5 dygn min"-fokus signalerar bredd snarare än long-stay 30–90 nätter-spetsen AWP siktar på; ICP-bredd (även privatpersoner/gäster) späder skärpan mot inköp.

**Källor:** scrape 2026-06-27 av /en (startsida), /en/larger-projects, /en/serviced-apartments/goteborg, enhetssida Bagerigatan 3, samt firecrawl_search (ägare/recensioner). Tech: `raw/homepage-rawhtml.txt`, listings: `raw/goteborg-listing.txt`, URL-karta: `raw/sitemap-map.txt`.
**Domän:** foretagsbostader.se (sv default + /en) · **Asset-CMS:** directus.foretagsbostader.se (Directus headless) · **PMS:** Elina (bilder "imported from Elina") · **Kontakt:** reservations@foretagsbostader.se, +46 (0)10 707 55 00.
**Ägarstruktur (hög):** Majoritetsägd av **Strawberry Living AB** (Stordalen/Strawberry-koncernen, f.d. Nordic Choice Hotels). Dotterbolag "Företagsbostäder Accommodation Stockholm AB" omsättning ~69,8 MSEK (källa: merinfo via firecrawl_search). Förvärvskälla: Mynewsdesk/Strawberry-pressrelease.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "We handle housing, you handle business." Tar bort admin för HR/inköp: konsoliderad fakturering, en kontakt/account manager, digital dashboard för översikt av boenden+kostnader, nyckelhantering, 24/7 gästservice. Hotell-alternativ för långa uppdrag. (källa: /en, /en/larger-projects)
- **ICP (hög):** Brett B2B — **HR, inköp/procurement, relocation-bolag, bemanningsföretag, konsultfirmor**, samt företag med parallella projekt i flera städer. Adresserar även **privatpersoner & "guest"** (formuläret har flikar Company/Private/Guest) → bredare än ren B2B. Industri/projektnära boende nämns ("near industrial zones and specific project sites") men ingen uttalad Volvo/bygg/arbetare-nisch. (källa: /en FAQ, request-quote-formulär)
- **Segment (hög):** Tre produkter: **Serviced apartments** (kärnan), **Apartment hotels** (Stockholm/Göteborg/Malmö/Lund), **Larger projects** (10–hundratals lägenheter, eget dashboard-verktyg). Tre priskategorier Basic/Standard/Premium. Delning/rotation av lägenhet (upp till 5 rum) stöds. (källa: /en, /en/larger-projects)
- **Geografi (hög):** Sverige-fokuserat. Live-inventory i **Stockholm, Göteborg, Malmö, Helsingborg, Lund** (+ "several other cities" / bespoke utanför kärnstäder). Göteborg och Stockholm är klart störst. Stadsguider ner på **stadsdelsnivå** (t.ex. Göteborg: Centrala/Hisingen/Öst/Väst; Stockholm: Kista, Arenastaden, Solna/Råsunda, Södermalm m.fl.). (källa: sitemap-map.txt, /en)
- **Pris/paketering (hög):** Per enhet/månad, **publikt visat** (ej dolt bakom offert). Göteborg-spann ~**11 588–75 000 kr/mån**. Inkluderar el, värme, vatten, internet, möblering, fullt utrustat kök, WiFi, 24/7-service. **Departure cleaning** tillkommer (~1 540 kr exempel). Tillval: städning, flexibel avbokning, skadeskydd, tidig incheckning/sen utcheckning, extra säng/sänglinne/barnsäng. Faktureras månadsvis, **exkl. moms**. (källa: enhetssida Bagerigatan 3, /en)
- **Differentiering/"moat" (hög):** (1) **Äkta egen/kontrakterad volym** (2 000–3 000+ enheter, kvalitetssäkrade, inspekterade före inflytt) — ej tunn broker. (2) **Strawberry-koncernens** kapital + hotelldistribution + varumärkesförtroende. (3) **Pristransparens + instant browse + priskalkylator** (få B2B-konkurrenter visar pris öppet). (4) 30+ års track record + EuRA + Svensk Miljöbas (ESG-dokumentation för upphandling). Ramavtal med preferred rates + dedikerad account manager.

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (okänt / EJ VERIFIERAT):** Ingen direkt `AW-` conversion-ID i sidkoden; **GTM (GTM-TWPGJ5)** finns och kan ladda Ads/GA4 dynamiskt. *Faktisk Google Ads-aktivitet EJ VERIFIERAT — orsak: Google Ads Transparency Center ej hämtat (egress-policy).* (källa: raw/homepage-rawhtml.txt)
- **Betalt — Meta (okänt / EJ VERIFIERAT):** Ingen `fbq`/connect.facebook.net i sidkoden (träffarna i grep var base64-/CSS-brus). Kan ev. firas via GTM. *Meta Ad Library EJ VERIFIERAT.* (källa: rawHtml, medel)
- **Organiskt (hög):** Stark **programmatisk SEO**. ~900 URL:er i kartan: stadssidor + **stadsdels-city-guides** + serviced-apartments + apartment-hotels per stad + **~261 enhetssidor** (varje adress/lägenhetstyp egen indexerbar sida) + ~30 news/blogg-artiklar (corporate-housing-vs-hotels, long-stay-tips, relocation-guider). Lång svans + lokal djup. (källa: sitemap-map.txt)
- **Distribution (hög):** **OTA-listad** — Expedia (Lund/Skarpskyttevägen), Hotels.com (Mölndal, 8.0 "Very Good", 15 omdömen). **Koncern-cross-sell:** strawberryhotels.com/corporate-apartments länkar in. Detta ger extern auktoritet + bokningsflöde utöver egen sajt. (källa: firecrawl_search)
- **Socialt (medel):** *Specifika sociala konton/frekvens EJ VERIFIERAT — orsak: footer-länkar ej djupgranskade i denna scrape.*
- **Kanalmix-bedömning:** Största hävstången = **programmatisk lokal SEO + OTA-distribution + koncern-varumärke**, inte aggressiv betald annonsering (ingen tydlig pixel-signal). Skiljer sig från Rentaborg (som har tydlig Google Ads-conversion).

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, `canonical`, **hreflang sv/en**, `robots: index, follow`, Next.js server-renderad meta. OG-bilder via Directus med on-the-fly format/width. Sidtitlar mallade per enhet ("Studio Queen Large Standard | Företagsbostäder"). (källa: rawHtml)
- **Keyword-portfölj (hög):** Kommersiellt: "serviced apartments [stad]", "corporate housing [stad]", "möblerad lägenhet företag", "apartment hotel [stad]", "larger projects/team housing". Lokalt: stadsdelsnamn (Kista, Arenastaden, Hisingen, Södermalm…). Informativt: news-kluster (corporate-housing-vs-hotels, long-stay, relocation, "best corporate housing providers"). (källa: sitemap-map.txt, /en news-FAQ)
- **Content-strategi (hög):** Tre lager — (a) **enhetssidor** (programmatiskt, 261 st, med pris+tillgänglighet), (b) **stad/stadsdels-guider** (lokal SEO-djup), (c) **redaktionell news/blogg** (topical authority kring corporate housing/relocation). Stark long-stay-FAQ på startsidan (segmenterad "för dig som flyttar dit jobbet är" / "för dig som bokar åt andra" / "för dig som vill veta mer").
- **Backlink/domänstyrka (medel):** *Exakt backlink-profil EJ VERIFIERAT.* Riktning: **sannolikt hög auktoritet** — etablerad domän (sedan 1993-bolag), OTA-länkar (Expedia/Hotels.com), koncern-länk (strawberryhotels.com), Wikipedia-kopplad ägare. Klart starkare domänprofil än Rentaborg och AWP.
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* Next.js + self-hosted fonts + Directus-bildoptimering (webp, width-params) indikerar god grundprestanda.

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning: Hero ("Serviced apartments made easy" + destination-väljare) → "Trusted by" + **261 Available Apartments** (klickbar per stad med antal) → live enhets-grid (foto/yta/tillgänglighetsdatum/pris) → fyra USP-scrollblock (move-in-ready / 5 städer / stay longer save more / consolidated billing) → testimonials → "Always included" + tillval → **Request quote-formulär** (Company/Private/Guest) → omfattande long-stay-FAQ → Weply chat. Dubbelt funnel-läge: **self-serve browse** (se pris/tillgänglighet direkt) **+ offertformulär** för skräddarsydd lösning. Mindre offert-tvång än Rentaborg.

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Next.js** frontend + **Directus** headless CMS (asset/innehåll) + **Elina PMS** (inventory/bokning) + **GTM** (taggning) + **Weply** live-chat. Self-hosted fonts (Cera Pro / Roboto fallback). Modern, snabb, instant-browse-arkitektur med riktig bokningsbackend — tekniskt mer komplett än både Rentaborg (offert-formulär utan booking) och AWP.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** Self-serve browse + priskalkylator → "Send request" / Request quote → account manager återkommer med förslag (foto, pris, alternativ) **ofta samma arbetsdag** → bokning → nyckelhämtning + welcome-info + 24/7 gästservice → konsoliderad månadsfaktura. För större projekt: digital dashboard för översikt boenden+kostnader. (källa: /en FAQ, /en/larger-projects)
- **Vad ingår (hög):** Möblering, fullt utrustat kök (kokkärl/porslin/kaffebryggare/mikro), sänglinne+handdukar, **el+värme+vatten+internet/WiFi**, TV, strykjärn, 24/7-service. Tvätt i lägenhet eller delad tvättstuga. Departure cleaning + tillval prissätts separat. (källa: enhetssida, /en)
- **Villkor (hög):** **Min booking typ. 5 dygn**; pris beror på stad/storlek/kategori/längd; **>3 mån ger bästa dygnspris**; tidig avslutning med **1 månads uppsägning**; ramavtal för återkommande kunder (preferred rates + account manager). Faktura direkt till företag, exkl. moms, pris avtalat före bekräftelse. Engelsk gästkommunikation för internationella. (källa: /en FAQ)
- **Self-serve vs sälj-lett (hög):** **Hybrid** — unik bland de granskade konkurrenterna. Kund kan browsa, se exakt pris och tillgänglighet och räkna ut totalkostnad själv, MEN bekräftelse/bokning går via "Send request"/account manager (ej helt automatisk instant-book i kassan). Mer transparent och självbetjäningsbart än Rentaborg/AWP.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Hybrid offert/self-serve. Löfte: förslag "usually within the same business day". Dedikerad account manager genom flödet; framework-avtal för återkommande. Tre formulär-personas (Company/Private/Guest) ruttar leadet rätt.
- **Supportkanaler (hög):** **Weply live-chat** (mänskliga agenter, widget visar "We are online") + e-post (reservations@foretagsbostader.se) + telefon (+46 (0)10 707 55 00) + 24/7 gästservice/jourlinje för boende. Bredare supportstack än Rentaborg (som saknar chatt). (källa: rawHtml weply.chat, /en FAQ)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** **EJ VERIFIERAT — orsak: ingen kontakt tagen (mystery shopping ej tillåtet).**

---
### Öppna luckor / att verifiera senare
- Google Ads Transparency + Meta Ad Library (faktiska creatives/sökord — pixlar göms ev. i GTM).
- Backlink-profil (extern källa) — sannolikt stark via OTA + koncern.
- Sociala kanaler/frekvens (footer ej djupgranskad).
- Exakt total inventory (marknadsför "2 000"/"3 000+"/"more than 3000" på olika sidor — siffran inkonsekvent; live-katalog visar 261 *lediga* nu).
- PSI/Core Web Vitals.
