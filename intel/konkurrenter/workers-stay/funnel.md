# Workers Stay — funnel.md (steg-för-steg)

**Metod:** firecrawl-scrape av startsida, /about, /projekt/volvo-torslanda-goteborg, /jamfor/forenom, /reservation/goteborg (2026-06-27). Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/`. Confidence hög där ej annat anges.

## Steg 0 — Annons/SEO-ingång
Tre huvudingångar: (a) **Google Ads** (2 conversion-taggar, enhanced conversions) på kommersiella/lokala sökord; (b) **Meta** (pixel live → retargeting/prospecting); (c) **programmatisk SEO/AEO** — hyper-nischad landningssida som matchar exakt sökintention (t.ex. /projekt/volvo-torslanda-goteborg, /industri/svetsare, /reservation/goteborg, /pl/* för polska arbetare, /jamfor/forenom för konkurrent-sök). Plus OTA-ingång (Airbnb/Booking.com-listningar) och organisk via blogg.

## Steg 1 — Hero (start- eller landningssida)
- Trust-rad överst: "Excellent · GDPR compliant · Response within 30 min · +1000 happy customers".
- Slogan: *"Corporate Housing in Europe — Ready within 24 hours."* Subtext: "Fully furnished accommodation for your team. From 4 to 200+ workers. We handle everything – you focus on the project."
- Stat-block: "12+ Countries · 30min response · 24h move-in guarantee · Trusted by 500+ companies."
- **Inline lead-form direkt i hero** ("We respond within 30 minutes", "Live now") — funnel börjar omedelbart, ingen separat /get-quote-sida krävs.

## Steg 2 — Inline lead-form (Steg 1/2)
- Rubrik: "We respond within 30 minutes — Free quote, no commitment."
- Fält: **Country** (Sweden/Norway/Denmark/Finland/Germany/Poland/Lithuania/Slovenia/Slovakia) · **City / workplace** · **Number of guests** · **Move-in** · **Move-out** · **Email** → **Continue**.
- Låg friktion (6 fält, e-post sist). "No commitment · Completely free".

## Steg 3 — SEO-/förtroendetext (lång, flerspråkig)
- Provider-beskrivning ("one of Europe's largest … 10 000+ beds … 100+ cities … 15 countries"), "Why choose Workers Stay over hotels" (40–60 % billigare, kök/tvätt/parkering vs hotell), "Industries we serve" (bygg/IT/industri/vård/bemanning/energi/fordon/infrastruktur/gruva/batteri), "What is included", **FAQ** (skriven för Google/Gemini/ChatGPT).
- Samma block upprepas på **svenska, engelska, tyska (Monteurzimmer/Arbeiterunterkunft), polska (zakwaterowanie), slovakiska** → flerspråkig avsiktsfångst på samma sida.

## Steg 4 — "3 simple steps" + benefits + branscher + reviews
- 3 steg: 1) Send inquiry (team-storlek/ort/datum) → 2) Tailored offer inom 24h (foto, pris, "no commitment") → 3) Approve, signera digitalt, flytta in samma dag.
- 6 benefits (24h move-in guarantee, no hidden fees, fully furnished, 4–200+ guests, personlig kontakt <30 min, 12+ länder).
- Reviews: "4.9/5 · 451+ reviews · Verified across GAT" *(källa/äkthet ej verifierbar)*.

## Steg 5 — "Trending homes" + OTA-distribution
- "Most viewed homes right now" — riktiga listningar (Stockholm 6 sov/12 gäster 4.92; Göteborg 3 sov/6 gäster 4.89; **Southampton UK** 4 sov/8 gäster 4.88) → länkar till **/app** (self-serve) och dras från Airbnb (muscache) + Hospitable.
- Footer: OTA-partnerlogos (Booking/Airbnb/Google VR/Vrbo/Trivago/Qasa/Expedia/Hotels.com) + UK-legal-entitet.

## Steg 6 — Fullt formulär (på /jamfor, /kontakt m.fl.) + WhatsApp
- "Send your request": Name*, Company, Email*, Phone*, Number of guests*, Country*, **Work address*** (Google-autocomplete), Arrival*, Departure*, Message, **"How did you find us?"** (Google/Gemini AI/Facebook/Instagram/ChatGPT/Recommendation — attributionsfråga i formuläret).
- Parallell genväg: **WhatsApp +46 73 694 29 93** (lägre tröskel än e-post/offert).

## Steg 7 — Efter inskick (utlovat)
- Svar inom 30 min/1h, dedikerad kontaktperson, offert inom 24h med 2–3 matchande bostäder + fast pris, digital signering, inflyttning samma dag. Alternativt direkt self-serve-bokning via booking.workersstay.com / Airbnb / Booking.com.

---
### Funnel-bedömning vs AWP
- **Styrkor att kopiera:**
  1. **Inline lead-form i hero** (6 fält, e-post sist) — börjar konvertera direkt, ingen extra klick till offertsida.
  2. **Hyper-nischade landningssidor per arbetsgivare/projekt/yrke** (Volvo Torslanda, Northvolt, svetsare, polsk arbetskraft) — exakt sökintention → låg friktion. Detta är direkt riktat mot AWP:s ICP.
  3. **Flerspråk på samma sida** (SV/EN/DE/PL/SK) — fångar utländska arbetslag/bemanning som AWP idag inte adresserar språkligt.
  4. **WhatsApp som primär lågtröskelskanal** + "svar inom 30 min" som konverteringslöfte.
  5. **Attributionsfråga ("How did you find us?")** i formuläret — billig kanal-mätning.
  6. **/jamfor/[konkurrent]-sidor** som fångar bottom-funnel jämförelsesök (Forenom, Westcoast Stay, GM Properties, Sweden Longstay, Företagsbostäder) — AWP saknar detta.
- **Svagheter att exploatera:**
  1. **Trovärdighetsglapp:** UK-skalbolag (inte svenskt AB), overifierbara megaclaims (10 000+ bäddar/500+ företag/451 omdömen), AI/stock-bilder, "Founded in Sweden" krockar med UK-footer. AWP kan vinna med **äkta lokal närvaro, riktiga Volvo-/SKF-case och verifierade omdömen**.
  2. **Slarvspår i copy/tech** ("€25 SEK", placeholder-pixlar, consent-default-granted trots GDPR-badge) → AWP kan framstå som mer seriös/proffsig motpart för HR/inköp.
  3. **Lågpris-positionering** (€25/natt, "billigast i segmentet") → AWP bör inte priskriga utan vinna på **kvalitet, Superhost-status och pålitlig leverans** (premium mot risk).
  4. **Tunt/duplicerat programmatiskt innehåll** → om sidorna inte rankar är det luft; AWP kan med färre men djupare, äkta lokala sidor (Göteborg/Volvo-korridoren) konkurrera om kvalitetsintention.
