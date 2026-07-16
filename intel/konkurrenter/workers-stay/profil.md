# Workers Stay — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Corporate Housing in Europe — Ready within 24 hours." Möblerat arbetar-/projektboende för team om **4 till 200+** personer, från 1 vecka till 12+ mån. *En kontaktperson, en faktura, svar inom 30 min.* Tydligt blue-collar/industri-fokus (bygg, montörer, svetsare, bemanning) — mest direkt överlappande konkurrent mot AWP av de granskade.
> - **Prismodell:** Per person/natt, allt-inkl. **Från €25/person/natt** ("40–60 % billigare än hotell"). Offert-ledd (svar inom 1h/30 min) men har även **self-serve bokningsmotor** (booking.workersstay.com) + listningar på Airbnb/Booking.com. Min-stay 30 nätter (kortare i Göteborg).
> - **Kanalmix:** Mycket aggressiv **programmatisk SEO** (371 URL:er: ~108 stadssidor, /projekt/[storprojekt], /foretag/[arbetsgivare], /industri/[yrke], /jamfor/[konkurrent], /pendling/, blogg). **Google Ads** (2 conversion-ID:n) + **Meta Pixel** (live) + flerspråkig (SV/EN/DE/PL/SK m.fl.).
> - **Stack-essens:** Vite/React-SPA (ej Next.js), Google Fonts (ej self-hosted), gtag/GTM + 2 Google Ads-taggar + Meta Pixel. Inventory via Hospitable + Airbnb. Bokningsmotor på subdomän.
> - **Största styrka/svaghet:** Styrka = extremt bred, hyper-nischad programmatisk SEO riktad exakt mot AWP:s ICP (Volvo Torslanda, Northvolt, bygglag, polsk/slovakisk arbetskraft) + lågpris-budskap + flerspråk. Svaghet = trovärdighet/substans: UK-skalbolag (inte svenskt AB), placeholder-pixlar i koden, overifierbara "10 000+ bäddar/500+ företag/4.9 av 5 (451 omdömen)"-claims, AI/stock-bilder, "Founded in Sweden" krockar med UK-entitet → ser större ut än det troligen är.

**Källor:** firecrawl-scrape 2026-06-27 av startsida, /about, /projekt/volvo-torslanda-goteborg, /jamfor/forenom, /reservation/goteborg + firecrawl_map (371 URL:er) + firecrawl_search. Råfiler i `raw/`. Tech: `raw/tech-signals.txt`.
**Domän:** workersstay.com (bokning: booking.workersstay.com) · **Juridisk enhet (footer, hög):** Real Estate Ollopa11 LTD, UK Company no. 13697786, inkorporerad 22 okt 2021, 128 City Road, London EC1V 2NX · **Kontakt (hög):** contact@workersstay.com, WhatsApp/telefon **+46 73 694 29 93**. Org-nr i Sverige / svensk juridisk enhet: `EJ VERIFIERAT — orsak: ingen svensk legal entitet anges, enbart UK Ltd i footern`.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** Ta bort boende-logistiken för företag som flyttar arbetslag: "We handle everything – you focus on the project." 24h inflyttningsgaranti, svar inom 30 min, en dedikerad kontaktperson, en faktura med moms. Lågpris-vinkel central: "40–60 % billigare än hotell". (källa: startsida)
- **ICP (hög):** B2B blue-collar/industri i första hand. Explicit adresserade: **byggföretag** (snickare, elektriker, rörmokare, betongarbetare, kranförare), **industrimontörer/svetsare/CNC**, **bemanningsföretag** (utländsk arbetskraft från Polen/Slovakien/Slovenien/Litauen/Tyskland/Spanien), energi, fordon, vård (sjuksköterskor), IT-konsulter, infrastruktur, gruva/skog, batteri/grön teknik (Northvolt/H2 Green Steel/HYBRIT). (källa: startsida "Industries", /industri/*)
- **Segment (hög):** Team/projekt 4–200+ personer, lång vistelse (1 vecka–12+ mån, kärnfokus 30+ dagar). Self-described "direct operator" som **leasar och förvaltar själv** från ett nätverk av fastighetsägare (asset-light, ej marknadsplats). (källa: /about)
- **Geografi (hög):** 12–15+ länder (claim varierar 12+/15+ mellan sidor). ~108 stadssidor: hela Sverige + DK/NO/FI/DE/PL/NL/UK/SK/SI/LT. Svenska industriorter tungt täckta: **Göteborg, Trollhättan, Skellefteå, Luleå, Lysekil, Oxelösund, Vara** m.fl. Göteborg-djup: stadsdelssidor (Torslanda, Hisingen, Lindholmen, Mölndal, Save), arbetsgivarsidor (**Volvo Cars, SKF, AstraZeneca, Ericsson, Stena Line**), projektsidor (**Volvo Torslanda, Volvo EX90, Västlänken, Karlatornet**), pendlingssidor. (källa: firecrawl_map, /projekt/volvo-torslanda-goteborg)
- **Pris/paketering (hög):** Per person/natt, allt-inkl (WiFi, parkering, tvätt, sängkläder, fullt kök, el/vatten/värme). **Från €25/person/natt**; "€25–€60 SEK/person/natt" (notera inkonsekvent valuta-blandning i copy). Företagsfaktura med moms, inga bokningsavgifter, inga depositioner. Min 30 nätter (kortare i Göteborg). (källa: startsida FAQ, /jamfor/forenom)
- **Differentiering/"moat" (medel):** (1) Hyper-nischade landningssidor per arbetsgivare/projekt/yrke. (2) Flerspråk (10+ språk inkl. polsk/tysk/slovakisk obsługa) — riktat mot just utländsk arbetskraft. (3) Lågpris vs hotell. (4) Både offert OCH self-serve/OTA-distribution. Moat tunn: inventory mäklas/leasas, inga unika tillgångar bevisade.

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (hög):** **Två** Google Ads conversion-taggar i koden: **AW-18075940627** (laddad direkt "for verification") och **AW-17159979002** (`allow_enhanced_conversions: true`) + gtag/GTM → aktiv Google Ads med enhanced conversions. Sannolika sökord-teman: "företagsboende/personalboende/arbetarboende [stad]", "monteurzimmer/arbeiterunterkunft schweden", "zakwaterowanie pracowników szwecja", "corporate housing [stad]". *Exakta sökord/bud EJ VERIFIERAT — Google Ads Transparency ej hämtat.*
- **Betalt — Meta (hög):** **Meta Pixel live** — `fbq('init','32808262188787589')` + `track PageView`, connect.facebook.net/fbevents.js → trolig aktiv Meta-annonsering/retargeting. FB-profil id 61574257059539. *Meta Ad Library EJ VERIFIERAT.*
- **Organiskt (hög):** Mycket stark **programmatisk SEO** — 371 indexerbara URL:er. Mönster: `/reservation/[stad]` (~108), `/boka/[stad]`, `/projekt/[storprojekt]`, `/foretag/[arbetsgivare]`, `/industri/[yrke]`, `/corporate-housing/[stad]/[yrke]`, `/foretagsbostader/[stad]/[stadsdel]`, `/omrade/`, `/pendling/`, `/jamfor/[konkurrent]`, `/lagenhetshotell-[stad]`, dedikerade keyword-permutationssidor (foretagsboende-/tillfalligt-boende-/hyra-lagenhet-foretag-/corporate-housing-[stad]). Egen polsk sektion `/pl/*`. *Faktisk organisk trafik/ranking EJ VERIFIERAT.*
- **Distribution (hög):** Listat på/visar **Airbnb, Booking.com, Google Vacation Rentals, Vrbo, Trivago, Qasa, Expedia, Hotels.com**. Verifierade egna listningar på Airbnb ("Workers Stay – Team House Volvo Göteborg") och Booking.com ("Workers Stay – Housing for Workers Volvo Torslanda"). Inventory dras från Hospitable + Airbnb (muscache). Egen bokningsmotor: **booking.workersstay.com** (self-serve, /de /fr /es).
- **Socialt (medel):** LinkedIn (/company/workers-stay), Facebook, Airbnb-profil. Frekvens/engagemang *EJ VERIFIERAT*.
- **Kanalmix-bedömning:** Bredast av alla granskade konkurrenter — programmatisk SEO + Google Ads (2 taggar, enhanced conv) + Meta Pixel + OTA-distribution + flerspråk samtidigt. Maskin för billiga long-tail-leads i exakt AWP:s nisch.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, omfattande `keywords`-meta (per sida), `robots: index, follow, max-snippet:-1, max-image-preview:large`, hreflang via og:locale:alternate (sv/en/de/pl), google-site-verification, **8 JSON-LD-block** (FAQPage, AggregateRating, Organization) → byggt för rich results / AI-svar. Tydlig "AEO"-ambition (FAQ skriven för Google/Gemini/ChatGPT).
- **Keyword-portfölj (hög):** Extremt bred kommersiell + lokal: "företagsboende/personalboende/arbetarboende/byggboende/montörboende/projektboende [stad]", tyska "Monteurzimmer/Arbeiterunterkunft/Firmenunterkunft Schweden", polska "zakwaterowanie pracowników Szwecja", + arbetsgivar-/projekt-/yrkes-long-tail (t.ex. "volvo torslanda boende", "northvolt skellefteå boende", "boende polsk arbetskraft sverige").
- **Content-strategi (hög):** Programmatiska sidor i flera dimensioner (stad × yrke × arbetsgivare × projekt × pendling × konkurrent) + 11 blogginlägg riktade mot precisa segment (Volvo Torslanda, Northvolt Skellefteå, Scania Södertälje, Preemraff Lysekil, polska/litauiska/slovakiska arbetslag, tyska ingenjörer). Topical authority kring "arbetarboende Sverige".
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — ingen backlink-källa hämtad.* Riktning: ung domän (UK-bolag 2021, © 2026), troligen låg auktoritet trots mycket hög sidvolym; risk för tunt/duplicerat innehåll (samma template upprepas).
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* Vite-SPA + externa Google Fonts kan ge sämre LCP än Rentaborgs Next.js/self-hosted.

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning:
- **Sidarkitektur (hög):** Hero (slogan "Corporate Housing in Europe – Ready within 24 hours" + trust-rad "Excellent / GDPR compliant / Response within 30 min / +1000 happy customers") → **inline 2-stegs lead-form direkt i hero** ("We respond within 30 minutes") → SEO-textblock (provider-beskrivning, vs-hotell, branscher, vad ingår, FAQ) på flera språk → "3 simple steps" → benefits → industries → reviews (4.9/5, 451+) → "Trending homes" (Airbnb-listningar) → footer (UK-entitet).
- **CTA-arkitektur (hög):** Primär CTA är formuläret "Continue / Send request" + "Skicka förfrågan". WhatsApp som genväg. Hög densitet; formulär upprepas flera gånger per sida.
- **Lead capture (hög):** Två varianter. (a) **Inline 2-steg:** Country, City/workplace, Number of guests, Move-in, Move-out, Email → Continue (låg friktion). (b) **Fullt formulär:** Name*, Company, Email*, Phone*, Number of guests*, Country*, Work address* (Google-autocomplete), Arrival*, Departure*, Message, "How did you find us?" (Google/Gemini AI/Facebook/Instagram/ChatGPT/Recommendation). 9–10 fält men kvalificerar på antal/datum/ort.
- **Konverteringselement (medel):** Trust-badges, "4.9/5 · 451+ reviews verified across GAT", "500+ companies", "+1000 happy customers", FAQ, OTA-partnerlogos, levande Airbnb-listningar med betyg. *Inga verifierbara företagslogotyper/riktiga kundnamn; recensionssiffror ej externt verifierbara (Trustindex/"GAT" oklart).*
- **Mobil/5-sek-intryck (medel):** Tydligt erbjudande + pris (€25) + formulär på <5 sek. Egna mobil-hero-bilder finns. *Faktisk mobil-UX ej skärmdumpad (egress).* 

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Vite/React-SPA** (ej Next.js, ej WordPress/Webflow), externa **Google Fonts**, gtag/GTM + **2 Google Ads-taggar** + **Meta Pixel (live)**. GA4- och Clarity-taggar finns men som **placeholders** (`G-XXXXXXXXXX`, `CLARITY_PROJECT_ID`) = ofullständig/slarvig konfiguration. Self-serve **bokningsmotor på subdomän**, inventory via Hospitable + Airbnb. Consent default = allt "granted".

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** 1) Skicka förfrågan (team-storlek, ort, datum) → 2) Skräddarsydd offert inom 24h (2–3 matchande bostäder, foto, fast pris) → 3) Godkänn, signera digitalt, flytta in samma dag. Marknadsför 24h-inflyttningsgaranti, "usually same-day".
- **Vad ingår (hög):** Möbler, höghastighets-WiFi, fri parkering, tvättmaskin/torktumlare, sängkläder/handdukar, fullt kök, el/vatten/värme, smart-TV, valfri städning, 24/7-support via WhatsApp. "What you see is what you pay – no booking fees, no deposits."
- **Villkor (hög):** Min 30 nätter (kortare i Göteborg), flexibelt 1 vecka–12+ mån, företagsfaktura med moms för alla EU-bolag. Tidiga avhopp/uppsägningstid: `EJ VERIFIERAT — ej specificerat publikt`.
- **Self-serve vs sälj-lett (hög):** **Hybrid** — offert/förfrågan-lett (en kontaktperson) MEN även äkta self-serve bokning via booking.workersstay.com + Airbnb/Booking.com. Skiljer sig från Rentaborg/AWP som är rent offert-ledda.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Snabbhets-driven offert. Löften: svar inom 30 min (även "inom 1h" på vissa sidor), offert inom 24h, dedikerad kontaktperson, "no commitment". WhatsApp prominent (+46 73 694 29 93) — lägre tröskel än konkurrenter.
- **Supportkanaler (hög):** E-post (contact@workersstay.com), **WhatsApp/telefon +46 73 694 29 93**, webbformulär, 10+ språk. **Ingen live-chat-widget** (Intercom/Crisp/Tawk/Drift saknas i kod) — WhatsApp ersätter chatt.
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Oberoende vs. AWP-affilierat (källbelagt)
**Slutsats (hög): Workers Stay är en självständig, separat aktör — INTE affilierad med AWP:s workershomesgbg.com.** Bevis:
- Workers Stay footer-entitet = **Real Estate Ollopa11 LTD (UK, Company no. 13697786, London)**; AWP = **AWP Superhost AB (svenskt)**. Olika juridiska personer/länder.
- Kontakt skiljer: Workers Stay = contact@workersstay.com, WhatsApp +46 73 694 29 93. AWP/workershomesgbg = egen WhatsApp (wa.me/workershomesgbg) + Guesty-bokning (workerhomesgbg.guestybookings.com).
- Båda jagar **samma** nisch (Volvo Torslanda, bygglag i Göteborg) men oberoende: Workers Stay distribuerar via egna Airbnb/Booking.com-listningar och egen bokningsmotor, AWP via Guesty.
- Ingen korsreferens, delad pixel, delat org-nr eller delad adress hittad. (källa: `raw/independence-evidence.md`, firecrawl_search 2026-06-27)
- *Varning:* "Founded in Sweden" i copy står i kontrast till UK-entiteten i footern — sannolikt UK-holding som driver svensk verksamhet, men exakt svensk operativ entitet `EJ VERIFIERAT`.

### Öppna luckor / att verifiera senare
- Google Ads Transparency + Meta Ad Library (faktiska creatives/sökord/spend).
- Backlink-profil & faktisk organisk trafik (extern källa) — avgör om den breda SEO:n faktiskt rankar.
- Äkthet i "10 000+ bäddar / 500+ företag / 4.9 av 5 (451 omdömen) / +1000 happy customers" — alla overifierbara; "GAT"/Trustindex-källa oklar.
- Antal faktiska bostäder i Göteborg/Sverige (vs. Europa-claim) — affärsmodell asset-light broker/lease sannolik (hög).
- Svensk operativ juridisk entitet / F-skatt / moms-nr.
