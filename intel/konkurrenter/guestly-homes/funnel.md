# Guestly Homes — funnel.md (steg-för-steg)

**Metod:** scrape av startsida, /boden-accommodations-apartments-houses, /contact, /about, /work-with-us, /housing-request (2026-06-27). Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/`. Confidence hög där ej annat anges.

## Övergripande
Guestly kör **två parallella funnels**: (A) en **gäst-/boknings-funnel** (transaktionell, self-serve, OTA-driven) och (B) en **hyresvärds-/supply-funnel** (rent-to-rent acquisition). Det finns **ingen renodlad B2B-team-/inköps-funnel** motsvarande Rentaborgs `/get-quote`. B2B-bokare faller in i gäst-funneln eller den vaga /contact-selectorn.

## Steg 0 — Ingång
- **Organiskt:** Massiv programmatisk SEO (stadssidor /apartments-in-boden, /boden-accommodations-apartments-houses, nearby-places, 200+ bloggar på 8+ språk).
- **Google Ads:** Bekräftat aktiv (35 ads, "Guestly Homes Sweden AB" verifierad) — sannolikt mot "corporate housing/apartments Boden/Luleå" m.m.
- **OTA:** Airbnb/Booking/Vrbo listningar (många namngivna mot H2-workers) → driver direkttrafik + "book direct"-budskap.
- **Meta Ads:** Aktiv men supply-side (värvar hyresvärdar → app.guestlyhomes.se).

## Steg 1 — Hero (startsida / stadssida)
- Slogan: **"Built for business. Feels like yours."** Subtext: "Furnished apartments across Sweden with centralized billing, flexible terms, and support that actually responds."
- **Primär CTA = booking-search-widget direkt i hero:** Location (Boden/Luleå/Nyköping/Piteå) + Arrive/Depart-kalender + Guests (adults/children/pets) + Apply/**Search**. Transaktionell, ej offert.
- Stadssidan (/boden): lokal vinkel ("Welcome to your new home in Boden!", corporate housing, full kök, digital incheckning).

## Steg 2 — Social proof (äkta)
- Elfsight "All-in-One Reviews"-aggregator: **Airbnb 5.0 · Booking 8.9 · Google 4.9 · Trustpilot 5.0 · overall 4.7 (137 reviews)**.
- Individuella reviews med **deep-links till Airbnb/Booking/Google** + riktiga gästnamn/avatarer, flera språk (incl. recension från företag "Aerones Group"). → Verifierbar trovärdighet (kontrast mot Rentaborgs anonyma testimonials).

## Steg 3 — Värde & tjänster (stadssida)
- "Services we provide": amenity starter-pack, housekeeping, gratis hög-hastighets-WiFi, Svanen-el/eko-produkter, första hjälpen+brandsläckare, kontaktlös digital självincheckning, concierge (tidig in/late checkout, bagage, förfylld kyl, flygtransfer).
- Lokala krokar: gratis gym för gäster, mat-partner Råvara (kod GUESTLY 10%), aktiviteter (snöskoter, hundspann, isbrytare).
- "Book Direct"-sektion: bästa pris, inga dolda avgifter, mer flexibilitet, personlig service 24/7/365.
- **Template-läckor (svaghet):** "London Service Accommodation 'Insert Accommodation Name'… 'insert city name'", "Boden for Dummies"-YouTube-embed, "Best rates xx".

## Steg 4 — Konvertering (boka)
- **Primär:** self-serve booking via Hostfully/Boom-motor (book.guestlyhomes.com) — instant, betalning via Stripe vid bokning. Ingen deposition; obligatorisk försäkring.
- **FAQ/villkor (/boden):** incheckning 15:00 / utcheck 10:00; husdjur 85 SEK/natt; late checkout 285 SEK; avbokningsnivåer Flexible→Strict + **Long term (28+ nätter)**.
- **Sekundär CTA (B2B/övrigt):** /contact = "How can we help?"-selector → "🏠 Send a Booking Request" eller "❓ Send a General Question" (fält bakom JS, ej extraherbara). Telefon +46 770 222 999. **Ingen team-/headcount-/duration-/bransch-kvalificerande offertform.**
- **Support i varje steg:** Callpage "free callback in 28 seconds", Convolo callback, "Filippa AI" chatt 24/7.

## Steg 4b — Hyresvärds-funnel (parallell)
- /work-with-us + /housing-request: "We are urgently looking for properties in Boden/Piteå/Luleå/Skellefteå."
- Erbjudande: rent-to-rent (garanterad hyra upp till 5 år), förvaltning (intäktsdelning), eller köp. "Set and forget."
- CTA: "Apply today" → app.guestlyhomes.se; "book a meeting" → meetings.hubspot.com/benjamin-gaudet (HubSpot).
- **Svaghet:** /housing-request är oredigerad Boostly-template: `[INSERT BUSINESS NAME]`, `[INSERT TOWN/CITY NAME]`, US-telefon `409-555-0131`, `info@mybusiness.com`, `$50 including VAT`.

## Steg 5 — Efter bokning (utlovat)
- Digital boarding pass + kontaktlös incheckning; 24/7-support (AI + lokalt team); housekeeping mellan/under vistelser; concierge på begäran.

---
### Funnel-bedömning vs AWP
- **Styrkor att kopiera:** (1) **Äkta, deep-linkade OTA-recensioner** via Elfsight = hög trovärdighet. (2) Self-serve booking + book-direct-incitament för enkel konvertering. (3) Lokala industri-krokar (H2 Green Steel/Boden-listningar) — visar hur man taggar enheter mot ett specifikt projekt/arbetsgivare. (4) Robust support-stack (callback i 28 s + AI-chatt) — något både AWP och Rentaborg saknar. (5) Namngivet team med LinkedIn.
- **Svagheter att exploatera:** (1) **Ingen B2B-inköps-funnel** — ingen offert/team/headcount/duration/central-faktura-kvalificering. En HR/inköpare som vill boka 20 personer i 60 nätter med en faktura har ingen tydlig väg → AWP/Rentaborg-stilen vinner det. (2) **Oredigerade engelska Boostly-templates + US-telefon + `$50 VAT`** = trovärdighetsglapp för en seriös B2B-köpare. (3) Per-natt-OTA-känsla snarare än kontrakt/ramavtal. (4) Ej i Göteborg/Västsverige alls. (5) WP/Elementor + tunga widgets → trolig CWV/prestanda-nackdel.
