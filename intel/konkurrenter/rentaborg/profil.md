# Rentaborg — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Hotels are for tourists. Your team deserves a proper home." Pan-europeisk corporate/staff housing, möblerat, från 30 dagar. *En kontakt, ett kontrakt, en faktura.*
> - **Prismodell:** Per enhet/månad, allt-inkl. Från €45/natt all-in; Göteborg SEK 12 000–22 000/mån för 1:a. Offert-ledd ("options within 24h").
> - **Kanalmix:** Stark programmatisk SEO (50+ stadssidor + bransch/duration-blogg), **Google Ads** (conversion-ID bekräftat), OTA-partnerlogos (Airbnb/Booking/Expedia), FB/IG/LinkedIn/Pinterest.
> - **Stack-essens:** Next.js, self-hosted fonts, Tailwind-liknande, gtag/GTM. Snabb, modern SPA-känsla.
> - **Största styrka/svaghet:** Styrka = vass B2B-copy + bred geografisk programmatisk SEO + tydligt "one invoice"-värde mot HR/inköp. Svaghet = trovärdighet: AI-genererade bilder, generiska testimonials, ej verifierbara "500+/100+"-claims → kan vara ung/liten operatör som ser stor ut.

**Källor:** scrape 2026-06-27 av startsida, /get-quote, /gothenburg (se `raw/`). Tech: `raw/tech-signals.txt`.
**Domän:** rentaborg.com · **Juridisk enhet:** Rentaborg Properties AB (VAT SE559475356701) · **Kontakt:** hello@rentaborg.com, +46 31 765 00 15.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** Tar bort admin-bördan för HR/inköp vid team-relocation: sourcing, lease, deposition, incheckning, support → "one call, one contract, one invoice". Tagline: *"Hotels are for tourists. Your team deserves a proper home."* (källa: startsida)
- **ICP (hög):** B2B — HR, inköp/procurement, projektledare. Branscher som explicit adresseras: Energy & Offshore, **Construction & Infrastructure**, Pharma & Life Sciences, **Automotive/Manufacturing**, IT & Consulting. (källa: startsida "Who We Work With", footer "Industries")
- **Segment (hög):** Worker/projekt-team **och** white-collar relocation. "Teams of 1 to 500+". Tre produkter: Corporate Housing (enskild relocation), **Staff & Project Housing (5–500+, "our speciality")**, Serviced Apartments (kortare, högre service).
- **Geografi (hög):** 50+ städer/8 länder (Norden, NL, DE, BE, ES). Sverige brett inkl. **Göteborg, Trollhättan, Boden, Luleå, Skellefteå** (industriorter). Göteborg-sida marknadsför närhet till **Volvo/SKF** och hamnkorridoren. (källa: /gothenburg)
- **Pris/paketering (hög):** Per enhet/månad, all-in (möbler, el, vatten, värme, WiFi, försäkring). "From €45/night all-in". Göteborg: **SEK 12 000–22 000/mån** för 1:a. Min. 30 dagar; rullande månadsvis med 30 dagars uppsägning. Konsoliderad **en faktura/månad**, PO-vänlig, itemiserad per anställd vid behov, multivaluta. (källa: /gothenburg FAQ)
- **Differentiering/"moat" (medel):** "One contract / one invoice / 48h move-in / 24/7 mänsklig support". Bulk i samma byggnad/område. Master-avtal (ramavtal-signal tydlig). Ingen exklusivitet/Superhost-claim.

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (hög):** Google Ads conversion-ID **AW-17443560069** + gtag/googletagmanager i koden → aktiv Google Ads. Sökord-tema sannolikt "corporate housing [stad]", "staff accommodation", "furnished apartments [stad]" (matchar deras `keywords`-meta och stadssidor). *Exakt sökordsbud EJ VERIFIERAT — Google Ads Transparency ej hämtat.*
- **Betalt — Meta (medel):** Ingen Meta-pixel (fbq) i koden vid scrape → trolig låg/ingen Meta-annonsering. FB-sida finns ("Rentaborg Properties & Stays"). *Meta Ad Library EJ VERIFIERAT.*
- **Organiskt (medel):** Stark **programmatisk SEO** — 50+ stadssidor + bransch-/duration-kluster (1/3/6/12-mån, pharma/energy/construction/IT/manufacturing). Riktning: byggd för long-tail "corporate housing [stad]". *Exakt organisk trafik EJ VERIFIERAT.*
- **Distribution (hög):** Visar OTA-partnerlogos (Airbnb, Booking.com, Expedia, VRBO, TripAdvisor, Google Reviews) som "official booking & listing partners".
- **Socialt (medel):** Facebook, Instagram, Pinterest, LinkedIn länkade. Frekvens/engagemang *EJ VERIFIERAT*.
- **Kanalmix-bedömning:** Största hävstången = programmatisk SEO + Google Ads mot kommersiella stads-/branschsökord.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, `keywords`-meta, canonical via Next, hreflang via språkväxlare (en/sv/no/dk/de/es), sitemap.xml länkad i footer, `robots: index, follow`. Stark i18n-arkitektur.
- **Keyword-portfölj (medel):** Kommersiell tyngdpunkt: "corporate housing Europe/[stad]", "furnished apartments", "staff accommodation", "project housing", "serviced apartments". Informativt: blogg-/guidekluster (hotel-vs-airbnb, hidden costs, duration-guider).
- **Content-strategi (hög):** Landningssida per stad (programmatisk) + per bransch + per duration + jämförelse-/kostnadsguider. Tydlig topical authority-ansats kring "corporate housing".
- **Backlink/domänstyrka (låg):** *EJ VERIFIERAT — orsak: ingen backlink-källa hämtad.* Riktning: ung domän (© 2026), troligen låg auktoritet trots bred sidvolym.
- **Core Web Vitals (låg):** *EJ VERIFIERAT — PSI ej körd.* Next.js + self-hosted fonts indikerar god grundprestanda.

## Modul 4 — Funnel & landningssida
Se `funnel.md` för steg-för-steg. Sammanfattning:
- **Sidarkitektur (hög):** Hero (slogan + dubbel CTA "Get a Quote"/"Talk to Us" + social proof "Trusted by 100+") → "What you get" (48h/one contract/one invoice/24-7) → problem/empati ("housing logistics nightmare") → "How it works" (4 steg) → with/without-jämförelse → 3 produkter → coverage (städer) → branscher → testimonials → slut-CTA.
- **CTA-arkitektur (hög):** Genomgående **primär CTA "Get a Quote"** (offert) + sekundär "Talk to Us". Hög CTA-densitet, upprepad i varje sektion.
- **Lead capture (hög):** Offertformulär `/get-quote` — fält: Företag, Namn, Work email, Telefon, Land, Stad(er), Startdatum, **Duration (1mån–12+mån/rolling)**, Antal personer, **Bransch** (Energy/Construction/Pharma/Automotive/IT/Finance/Renewables/Gov/Other), Övrigt. ~10 fält = medelhög friktion, men kvalificerar leads hårt (bransch + headcount + duration).
- **Konverteringselement (medel):** Social proof (testimonials m. roll/bransch), partnerlogos, stat-block (100+/500+/8/48h), FAQ per stad, "no obligation/no pushy sales". *Inga verifierbara kundlogotyper (riktiga företagsnamn) eller externa recensionsbetyg.*
- **Mobil/5-sek-intryck (medel):** Tydligt erbjudande på <5 sek (slogan + "Get a Quote"). Responsiv (viewport-meta). *Faktisk mobil-UX ej skärmdumpad.*

## Modul 5 — Tech stack
Se `tech.md`. Essens: **Next.js** (React, SSR/SSG), self-hosted fonts (next/font), Tailwind-liknande utility-CSS, gtag/GTM + Google Ads. Ingen synlig CMS/booking-engine i frontend (offert-formulär, ej instant book).

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde (hög):** 1) Brief (form/samtal) → 2) Options inom 24h (kurerad shortlist m. foto/planlösning/pris) → 3) Nycklar (de sköter lease/deposition/incheckning) → 4) En månadsfaktura. Utlovad move-in 48h (3–5 dgr för 20+ personer).
- **Vad ingår (hög):** Möbler, el, vatten, värme, hög-hastighets-WiFi, försäkring (innehåll+ansvar), 24/7-support. "Priset vi offererar = vad du betalar."
- **Villkor (hög):** Min. 30 dagar; rullande månadsvis; 30 dagars uppsägning; tidiga avhopp case-by-case; master-avtal istället för individuella leases; hanterar lokal registrering för internationella. (källa: /gothenburg FAQ)
- **Self-serve vs sälj-lett (hög):** **Sälj-/offert-lett** — ingen online-bokning/instant book. Människa (account manager) tar över direkt efter brief.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Offert-baserad. Löfte: svar inom 24h, "usually same day", "no pushy sales calls", en account manager genom hela flödet.
- **Supportkanaler (hög):** E-post (hello@rentaborg.com), telefon (+46 31 765 00 15), webformulär. **Ingen live-chat/chatbot** i koden. 24/7-support marknadsförs men kanal-SLA ej specificerat.
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut — endast publik info).
- **Faktisk svarstid/ton:** *EJ VERIFIERAT — ingen kontakt tagen.*

---
### Öppna luckor / att verifiera senare
- Meta Ad Library + Google Ads Transparency (faktiska creatives/sökord).
- Backlink-profil & organisk trafikriktning (extern källa).
- PSI/Core Web Vitals.
- Äkthet i "500+/100+"-claims och om operatören har egna enheter vs. mäklar/sourcar (affärsmodell: asset-light broker sannolik, hög).
