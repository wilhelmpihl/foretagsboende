# Forenom — konkurrentprofil

> **TL;DR**
> - **Positionering:** "No. 1 long-stay serviced apartment provider in Europe" / "Your trusted accommodation partner for project needs". Nordens största serviced-apartment- & corporate-housing-aktör; 20+ års historik. *9000 inflyttningsklara enheter, 400 lokala experter i 150 städer, offert inom 48h.*
> - **Prismodell:** **Transparent per natt/månad i online-webshop** (instant book) + offert för projekt/volym. Observerat (Helsingfors, 30 nätter): hostel från ~649 €/mån, aparthotell från ~1 023 €/mån, serviced apartment ~1 600–3 500 €/mån. Rabatter ("Now 8% off") + B2B-prislogik (customer-type-gate).
> - **Kanalmix:** Stark programmatisk SEO (stadssidor `/accommodation`, `/furnished-apartments`, `/aparthotels` × 100+ städer × 7 språk), **Meta Pixel** (id 446799886155202) retargeting, first-party server-side GTM, branschtunga referenser (Metsä/YIT/Caverion/ABB/Siemens).
> - **Stack-essens:** WordPress 6.9.4 (eget tema `fcom`) + **React-driven bokningsmotor**, imgix-CDN, Gravity Forms, Crisp-chat, Trustmary, Sentry, AWS WAF. Mogen, skalbar plattform med **äkta instant-book**.
> - **Sales motion:** **Hybrid** — self-serve webshop (instant book) FÖR enskilda/korta + sälj-lett offert (48h) för projekt/volym/relocation. 3-tabs sökmodul (Boka online / Företagsförsäljning / Hyr ut till oss).
> - **Största styrka/svaghet:** Styrka = skala + äkta bokningsmotor + verifierbara industri-referenser + egna Göteborgskluster nära Volvo/Torslanda. Svaghet = **låg recensionsstandard (Trustpilot 2.6/5, 124 omdömen)**, opersonlig storskalighet, projektvolym faller ändå tillbaka på 48h-offert.

**Källor:** scrape 2026-06-27 av /sv, /accommodation/goteborg, /accommodation-partner-for-companies, /long-stay-relocation-accommodation, /location-search, listningsdetalj (se `raw/scrapes-2026-06-27.md`). Tech: `raw/homepage-rawhtml.txt` + `tech.md`. Funnel: `funnel.md`.
**Domän:** forenom.com (www) · **Hjälp/support:** help.forenom.com · **Juridisk enhet/org.nr:** EJ VERIFIERAT (ej hämtat — Forenom Group, finskt ursprung, hög konfidens på koncern men exakt svensk enhet ej bekräftad).

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** Tar bort boendeadministrationen för företag — "We make accommodation easy for you, so you can concentrate on your own business." Allt-i-ett-leverantör: möblerat, inflyttningsklart, 24/7-support, en partner för alla volymer. (källa: /accommodation-partner-for-companies, /sv)
- **ICP (hög):** Brett B2B + B2C. B2B-fokus: **projekt-/arbetarboende, relocation, affärsresenärer**. Explicit adresserade case: bioproduktfabrik (40+ arbetare), vindkrafts-/underhållsingenjörer, sjuksköterskor, kraftverksarbetare, konstruktion. Direkt relevant för AWP:s ICP. (källa: /accommodation-partner-for-companies)
- **Segment (hög):** Tre produktlinjer: **Serviced apartments** (hemlikt, kärnan), **Aparthotels** (hotellnära), **Hostels** (billigast, privata rum). Plus dedikerade lösningar: corporate housing, project/worker housing, long-stay & relocation, för studenter, för fastighetsägare.
- **Geografi (hög):** Norden (FI/SE/NO/DK) + Centraleuropa (Tyskland: Frankfurt, Offenbach). "9000 boendealternativ", "150 städer". Sverige brett; **Göteborg har egna kluster** (Säve, Geijersgatan, A-R Lorents gata, Adolf Edelsvärds gata/Majorna-Waterfront). Göteborgslistning marknadsför närhet till **Volvo/Torslanda, Mölndal, GoCO, hamnen**. (källa: /accommodation/goteborg, listningsdetalj)
- **Pris/paketering (hög):** **Transparent online** per natt/månad (instant book) + offert för volym. "Ju längre du stannar, desto lägre pris/natt." Tilläggstjänster à la carte via /about/services ("you only pay for what you need"). Customer-type-gate (Business vs Private) → sannolikt differentierade B2B-priser.
- **Differentiering/"moat" (hög):** Skala (9000 enheter, eget index), 20+ års track record, **verifierbara industri-referenser** (Metsä Group 2000 personer/Kemi, YIT outsourcat allt projektboende, Caverion, ABB, Siemens, Zauner), EURA-medlemskap (relocation), 400 lokala experter, både egen + sourcad supply ("Rent to us"-kanal matar portföljen, +1600 lägenheter/år).

## Modul 2 — Trafik & annonsering
- **Betalt — Meta (hög):** **Meta Pixel id 446799886155202** aktiv (fbq/fbevents.js i kod) → aktiv Meta-annonsering/retargeting. *Exakta creatives EJ VERIFIERAT — Meta Ad Library ej hämtad.*
- **Betalt — Google Ads (medel):** Google-ekosystem via **first-party server-side GTM** (`gtm.forenom.com`, GTM-T55GXF) döljer conversion-ID:n; Google Ads högst sannolikt men **ej direkt bevisat** i frontend. *Google Ads Transparency ej hämtat → ja/sannolikt, ej bekräftat.*
- **Organiskt (hög):** Stark **programmatisk SEO** — mallbaserade stadssidor i tre mönster (`/accommodation/{stad}`, `/furnished-apartments/{stad}`, `/aparthotels/{stad}`) × 100+ städer × 7 språk (en/sv/no/da/fi/de/ru) med hreflang. Blogg + news + reference + post-tag sitemaps. Mycket bred long-tail-yta.
- **Distribution (medel):** Egen webshop som primär kanal; även synlig på TripAdvisor (enskilda aparthotell). OTA-närvaro ej framträdande i scrape.
- **Socialt (låg):** AddToAny-delning i kod. Sociala konton ej djupgranskade. *Frekvens/engagemang EJ VERIFIERAT.*
- **Kanalmix-bedömning:** Största hävstången = **bred programmatisk SEO + egen bokningsmotor + Meta-retargeting + first-party-mätning**. Mogen, datadriven förvärvsmotor.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, hreflang/og:locale:alternate för 7 språk, `robots: index, follow, max-image-preview:large`, flera sitemaps (page/post/category/post_tag/reference) + `sitemap_index.xml`, canonical via WP/Yoast-liknande. Stark i18n-arkitektur. (Vissa landningssidor noindex:as selektivt — t.ex. /location-search.)
- **Keyword-portfölj (medel):** Kommersiell tyngd: "serviced apartments {stad}", "corporate housing {stad}", "aparthotels {stad}", "furnished apartments {stad}", "accommodation {stad}", "project/worker accommodation". Informativt: blogg (49 sidor), nyheter, kundreferenser.
- **Content-strategi (hög):** Landningssida per stad × produkttyp (programmatisk) + tematiska B2B-sidor (corporate partner, long-stay/relocation, students, property owners) + reference-cases som topical authority + djup blogg. Klar topical authority kring "corporate housing / serviced apartments Nordics".
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — orsak: ingen backlink-källa hämtad.* Riktning: gammal, etablerad domän (20+ år, koncern) → sannolikt hög auktoritet (kontrast mot Rentaborgs unga domän).
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* WordPress + tung React-app + imgix → blandat (imgix bra för bild, men WP+React kan tynga TTI).

## Modul 4 — Funnel & landningssida
Se `funnel.md` för steg-för-steg och full sökmodul-dokumentation. Sammanfattning:
- **3-tabs sökmodul (hög):** **Boka online / Företagsförsäljning / Hyr ut till oss** (Book online / Corporate Sales / Rent to us). Boka-online-tab: Resmål (Google Places) · Incheckning · Utcheckning · Gäster · Sök.
- **Sökresultat (hög):** Filter (Category/Price-night/Distance/Amenities/Parking), sortering (Best match/Distance/Lowest Price), karta, per-objekt-score, rabatter, **pris/månad synligt**, instant book.
- **Sales motion (hög):** **Hybrid** — instant self-serve webshop FÖR enskilda/korta + Gravity Forms-offertmodaler (corporate=id174, relocation=id83, svar inom 48h) för projekt/volym.
- **Lead capture (medel):** Offertmodaler via Gravity Forms; exakta fält EJ VERIFIERAT (JS-renderat). Self-serve-konto: /login, /reservation, /payment.
- **Konverteringselement (hög):** Verifierbara referens-logos, kund-scores (Trustmary), "89% would recommend", rabatter, "find within 24h om webshop saknar", Crisp-chat, customer-type-personalisering.

## Modul 5 — Tech stack
Se `tech.md`. Essens: **WordPress 6.9.4 (eget tema `fcom`) + React-bokningsmotor**, imgix-CDN, Gravity Forms, **first-party server-side GTM (GTM-T55GXF)**, **Meta Pixel 446799886155202**, Crisp-chat, Trustmary, Sentry 7.60.0, AWS WAF, AddToAny. Mogen, skalbar, mätbar plattform med äkta instant-book — teknik-/skalmässigt långt över både Rentaborg och AWP.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** Self-serve: sök → boka online → flytta in. Sälj-lett (relocation/projekt): 1) Kontakta experter → 2) Experter föreslår alternativ (även sourcat utanför portföljen) → 3) Avtal & inflyttning. Löfte: förslag inom 48h; "find within 24h" om webshop saknar.
- **Vad ingår (hög):** Möblerat, inflyttningsklart, kök, WiFi, tvätt (i lägenhet eller tvättstuga), 24/7 kundtjänst. Tilläggstjänster (städning m.m.) à la carte mot avgift; husdjur i de flesta orter mot dagavgift. "Quality control" innan inflyttning.
- **Villkor (medel):** Flexibla hyresvillkor ("free from long leases"), kort + långtid, månadspris med rabatt ju längre stay. Min-stay: **ingen hård spärr** (bokningsbart från korta vistelser, ex. 7 nätter-case) men prissatt/marknadsfört mot long-stay. *Exakt min-stay-policy per produkt EJ VERIFIERAT.*
- **Self-serve vs sälj-lett (hög):** **Båda** — webshop instant book för standard; account manager/lokal expert för volym/projekt/relocation.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Hybrid (se ovan). Self-serve instant + B2B-offert inom 48h.
- **Supportkanaler (hög):** **Crisp live-chat** ("Chatta med oss / Open Chat"), 24/7 kundtjänst (telefon), help.forenom.com (kunskapsbas/självservice), Gravity Forms-kontaktformulär, kundkonto. Mer kanaler än Rentaborg (som saknar chatt).
- **Recensioner/rykte (hög):** **Trustpilot forenom.com 2.6/5 (124 omdömen)** — lågt; enskilda låga Overall scores i webshoppen (hostels 4.9–7.1). Internt claim "89% would recommend" (ej oberoende verifierbart). **Glapp mellan internt claim och externt betyg = exploaterbar svaghet.**
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Öppna luckor / att verifiera senare
- Meta Ad Library + Google Ads Transparency (faktiska creatives/sökord).
- Gravity Forms-modalernas exakta fält (JS-renderat, ej i statisk scrape).
- Exakt svensk juridisk enhet/org.nr + Göteborgsspecifik enhetsräkning.
- Min-stay-policy per produkt + exakt allt-inkl vs tillägg.
- Backlink-profil & PSI/Core Web Vitals.
- Google Ads ja/nej-bekräftelse (döljs av server-side GTM).
