# Forenom — funnel.md (steg-för-steg)

**Metod:** scrape av startsida (en + /sv), /accommodation/goteborg, /accommodation-partner-for-companies, /long-stay-relocation-accommodation, /location-search, listningsdetalj (2026-06-27). Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/scrapes-2026-06-27.md`. Confidence hög där ej annat anges.

> **Viktigast:** Forenom är **hybrid self-serve + sälj-lett**. Till skillnad från Rentaborg (rent offert-lett) har Forenom en **äkta online-bokningsmotor (webshop)** med synliga priser och instant book — PLUS en parallell sälj-/offertkanal för projekt/volym. Sök-/boknings-modulen har **3 tabs**.

## SÖK-/BOKNINGSMODULEN (3 tabs) — kärnan i funneln
Placerad i hero på startsida (en + /sv) och på stads-/accommodation-sidor.

**Tab-rad (verifierad, hög):**
1. **Boka online / Book online** — self-serve webshop-sök
2. **Företagsförsäljning / Corporate Sales** — B2B-/offertspår (volym/projekt)
3. **Hyr ut till oss / Rent to us** — fastighetsägar-spår (supply-sidan)

**Fält i "Boka online"-tab (hög):**
- **Resmål / Location** (Google Places-autocomplete; URL-param `pid` = Google Place ID, `lat/lng`, `countryCode`)
- **Incheckning / Check-in** ("Add date")
- **Utcheckning / Check-out** ("Add date")
- **Gäster / Guests** ("Number of guests")
- **[Sök / search]** → går till `/location-search`

**Sökresultat (`/location-search`) (hög):**
- Vänster filter-panel: **Category** (Apartments / Aparthotels / Hostels) · **Price/night** (slider, max 300+ EUR) · **Distance** (max 40 km från sökpunkt) · **Amenities** (Breakfast, Code lock, Kitchen, Laundry, Pet-friendly, Sauna, Wheelchair accessible, WiFi) · **Parking** (Included / On request)
- **Sortering:** Best match / Distance / Lowest Price
- **Karta** ("Show map" / "Show on map" per objekt)
- Per kort: typ-badge, namn, avstånd från centrum, **Overall score** (ex. 8.3), ev. rabatt-flagga ("Now 8% off", "up to 20% off"), **pris/månad + / Total**, "View" (enskild) eller "View options" (flera rumstyper), foto via imgix
- **Instant book:** pris visas direkt efter datumval; flöde → listningsdetalj → /reservation → /payment (kundkonto). **Detta är äkta instant-bokning, ej enbart offert.** (hög)
- **Inbäddad sälj-fallback i resultatlistan:** "Need accommodation for an upcoming project? Let our experts assist you! → Contact us" och "Couldn't find what you were looking for? Let our experts arrange your ideal stay! → Let us help" (hög)

## Steg 0 — Annons/SEO-ingång
Trafik via Meta Pixel-retargeting (`446799886155202`), Google (first-party GTM), och stark organisk/programmatisk SEO (stadssidor: `/accommodation/{stad}`, `/furnished-apartments/{stad}`, `/aparthotels/{stad}` för 100+ städer). Stadssidan är egen landningssida med lokal vinkel.

## Steg 1 — Hero (startsida / stadssida)
- Rubrik (en): "Furnished apartments, hostels and aparthotels"; (/sv) "Vi löser dina boendebehov".
- Topbar-CTA genomgående: **"Book now"** (primär, self-serve) + **"Contact sales"** (sekundär, B2B).
- 3-tabs sökmodul direkt i hero.
- Social proof: referens-logos (Caverion, YIT, Metsä, ABB, Siemens, Zauner Group), "9000 boendealternativ", "400 lokala experter i 150 städer", "89% would recommend".

## Steg 2 — Stadssida (ex. /accommodation/goteborg)
- 3-tabs-modul överst → resultat redan listade nedanför (Hostels/Aparthotels/Serviced apartments i Göteborg, t.ex. Säve, Geijersgatan, A-R Lorents, Adolf Edelsvärds gata).
- SEO-copy "Corporate Housing and fully furnished corporate apartments in Göteborg" + "project housing" / "worker accommodation".
- "Load more" (paginering `?fcom_page_number=2`).
- FAQ (relocation av nyanställd, student, kort/billigt, "om jag inte hittar").
- Avslutande dubbel-CTA: **"Start searching"** (/location-search) + **"Contact us"** (Gravity Forms modal 174). Plus "om du inte hittar inom webshoppen hittar vi åt dig inom 24h".

## Steg 3 — Listningsdetalj
- **Customer-type-gate:** "Business customer" vs "Private customer" (personaliserad upplevelse / sannolikt B2B-prislogik). (medel — exakt prisdiff ej verifierad)
- Beskrivning (lokal kontext, ex. Göteborg: "easily reach Mölndal, GoCO, Gothenburg harbour, Volvo/Torslanda").
- Overview (rum/m2/gäster/bäddar), Amenities, Location (karta), Reviews (Trustmary).
- Crisp live-chat: "Open Chat / Start Chat".
- Datum + gäster → pris → boka (reservation/payment).

## Steg 4a — Self-serve lead/bokning (webshop)
Användaren bokar själv online (instant). Konto via `/login`, bekräftelse `/reservation`, betalning `/payment`.

## Steg 4b — Sälj-lett lead capture (offert) — Gravity Forms-modaler
- **Corporate / projekt:** "Contact sales" → Gravity Forms **modal id=174**. Löfte: "we'll get back to you within 48 hours."
- **Relocation / long-stay:** "Contact our relocation experts" → Gravity Forms **modal id=83**.
- **EJ VERIFIERAT — orsak: modalformulärens exakta fält** renderas via Gravity Forms JS och fångades inte i statisk scrape. Sannolikt: namn, företag, e-post, telefon, ort, datum/duration, antal personer, meddelande (per branschstandard). Confidence låg på fältlistan.

## Steg 5 — Efter inskick (utlovat)
- Self-serve: omedelbar bekräftelse.
- Sälj-lett: lokal expert återkommer inom 48h med förslag/offert (relocation: 3-stegs "Contact → Select → Move in").

---
### Funnel-bedömning vs AWP
- **Forenoms styrkor (svåra att kopiera):** (1) Äkta instant-book webshop med priser, filter, karta, score för 9000 enheter. (2) 3-tabs-modul som elegant separerar self-serve / B2B-offert / supply. (3) First-party-mätning + retargeting. (4) Branschtunga, verifierbara referenser (Metsä/YIT/Caverion/ABB/Siemens). (5) Egna anläggningar/kluster i Göteborg nära Volvo/Torslanda.
- **Svagheter AWP kan exploatera:**
  1. **Låg recensionsstandard:** Trustpilot 2.6/5 (124 omdömen) + flera låga Overall scores (hostels 4.9–7.1) → AWP kan vinna på **kvalitet + verifierade nöjda Volvo-case**.
  2. **Opersonligt/storskaligt:** 9000 enheter, 400 experter, callcenter-känsla → AWP kan vinna med **dedikerad lokal kontakt, snabbare svar än 48h, WhatsApp/chatt-SLA**.
  3. **Webshop är hostel/aparthotell-tung & generisk** för enskild bokning; för riktiga arbetar-/projektvolymer faller man ändå tillbaka på "Contact sales" (48h). AWP kan positionera sig som **snabbare och mer specialiserad på 30–90-nätters industriarbetare i Göteborg** utan callcenter-friktion.
  4. **Pris/månad visas men "all-inclusive"-tydlighet är svag** (rabatter, customer-type-gate, tillägg via /about/services) → AWP kan vinna med **transparent allt-i-ett-pris per bädd/månad**.
