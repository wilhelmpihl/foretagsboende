# Homelike — konkurrentprofil

> **TL;DR — VIKTIGAST FÖRST**
> - **STATUSVARNING (hög):** Det ursprungliga **Homelike GmbH (Köln) lade ned verksamheten 28 mars 2025** efter insolvens. Slutade ta nya bokningar; dashboard-åtkomst t.o.m. 30 april 2025. (källa: phocuswire.com, thehostreport.com)
> - **Varumärket/domänen lever vidare under ny ägare (hög):** **Spacest.com** (italiensk mid/long-term-uthyrningsplattform) köpte Homelikes **varumärke + domän** (homelike.com) ~juli 2025. thehomelike.com redirectar nu till spacest.com. (källa: thehostreport-update 2025-07-11, spacest.com/the-homelike-alternative-website)
> - **Vad Homelike VAR (2014–2025):** EU:s ledande **B2B online-marknadsplats** för möblerade long-stay-lägenheter. Asset-light (ägde inga bostäder; sålde proff-leverantörers utbud, t.ex. Blueground). 70 000+ bostäder, 450–500+ städer, 7 EU-länder + USA. Min-stay 28–30 nätter, snittvistelse ~90 dagar. $100M bokningsvolym 2023. (källor: guestready.com, newswire.com, BTN, thehostreport)
> - **Self-serve bokning online** (corporate logins, travel-policy, VAT-faktura, e-signering, AXA-försäkring) — "boka lägenhet lika lätt som hotellrum". Detta var deras kärn-moat: tech-plattform, inte fastighetsdrift.
> - **ICP-relevans för AWP idag: LÅG–OBEFINTLIG.** (1) Ursprungliga Homelike finns ej kvar. (2) Nuvarande homelike.com=Spacest har **ingen Sverige/Göteborg-supply** (spacest.com/rent-listings/sweden/gothenburg => HTTP 404; städlista täcker bara IT/DE/FR/ES/PT). (3) Spacest lutar B2C/expat/student, inte B2B industriarbetar-long-stay.
> - **Största lärdom för AWP:** En välfinansierad ($32M), tech-tung marknadsplats med 70k listings kan ändå dö av olönsamhet i mid-term-segmentet. Marknadsplatsmodellen (utan eget utbud) vann inte mot operatörer som äger sina enheter (Blueground). AWP:s ägda/kontrollerade utbud + lokala B2B-relationer är en strukturell styrka, inte en svaghet.

**Käll-läge:** www.homelike.com blockerade Firecrawl-scrape (ERR_TUNNEL, alla proxy-lägen); direkt curl/WebFetch blockeras av org-egress (403). Profil byggd på **publika 3:e-partskällor** + scrape av alias-domän thehomelike.com (=Spacest). Se `raw/sources-index.md`, `raw/homelike-model-historic.md`, `raw/spacest-current.md`.
**Domän:** homelike.com (idag drivs av Spacest.com) · **Ursprungligt bolag:** Homelike GmbH, Köln · **Grundare:** Dustin Figge, Christoph Kasper (2014/2015).

---

## Modul 1 — Marknad & positionering (marknadsplatsdynamik)
- **Värde-prop, historiskt (hög):** "Den största corporate-housing-leverantören av möblerade lägenheter" / "leading online marketplace for corporate apartments in EU". Boka long-stay-lägenhet lika enkelt som hotellrum, helt online, end-to-end. (källa: youtube/Homelike, wellfound.com, newswire.com)
- **Marknadsplatsmodell — tvåsidig (hög):**
  - **Supply-sida (landlords):** "Professional landlords only" (Tripping). Homelike ägde inga enheter; aggregerade **proff-leverantörers** utbud (inkl. supply-partner **Blueground**). Leverantörsverktyg: unit management system (bokningar, fakturor, hyresavtal, unit performance). (källa: newswire 2018, BTN 2021)
  - **Demand-sida (corporates):** 15 000+ corporate clients (Capgemini, Thoughtworks nämnda). Individuella corporate logins, user/rights-management, travel-policy-konfiguration, 3:e-parts-integrationer, konsoliderad månadsfaktura m. moms. (källa: newswire 2018)
- **ICP, historiskt (hög):** B2B — business travellers, expats, trainees, executives; HR/travel-arrangers. Stays 1–6 mån. Ej uttalat nischad mot industri/bygg/Volvo (bredare white-collar corporate-travel-fokus). (källa: guestready, newswire)
- **Geografi, historiskt (hög):** 450–500+ städer, 7 EU-länder + USA. Sverige/Göteborg-täckning **EJ VERIFIERAT** specifikt — orsak: live-site oåtkomlig och ingen Sverige-stadssida i källorna.
- **Pris/paketering (medel):** Marknadsplats — pris satt per listing av leverantör; Homelike la på service fee/marginal. Exakt provisionssats **EJ VERIFIERAT — orsak: ej publicerad i tillgängliga källor.**
- **Nuvarande positionering (Spacest) (hög):** Self-serve mid/long-term residential marketplace; "connects landlords with tenants"; algoritmisk prissättning. **Inriktning B2C/expat/student**, inte renodlat B2B corporate. **Ingen Norden-supply.** (källa: spacest.com)
- **Differentiering/"moat" (medel):** Historiskt = tech-plattform + corporate travel-management-features + bredd i utbud. Svaghet i moaten: ingen kontroll över utbud/kvalitet/pris (asset-light) → tunna marginaler, vilket bidrog till nedläggningen.

## Modul 2 — Trafik & annonsering
- **Status (hög):** Ursprungliga Homelikes kanaler är inte längre aktiva i ursprunglig form. Nuvarande trafik går till Spacest-infra.
- **Betalt — Google/Meta Ads (okänt):** **EJ VERIFIERAT** — live-site oåtkomlig; pixel-grep ej möjlig. Spacest-metadata visar Facebook-domain-verification + Bing (msvalidate) = sannolik närvaro på Meta/Bing, men aktiva annonskampanjer ej bekräftade.
- **Organiskt/SEO (medel):** Spacest driver programmatiska stadssidor (`/rent-listings/<land>/<stad>`) — men **endast** för IT/DE/FR/ES/PT-städer; svenska sidor returnerar 404. Historiskt hade Homelike stark SEO för "corporate housing/furnished apartment [stad]" (bred stadsportfölj). Exakt trafik **EJ VERIFIERAT**.
- **Socialt (medel):** LinkedIn-sida "Homelike" finns kvar (8 329 följare; "Move-in-ready apartments across 500+ cities") — varumärket hålls vid liv. (källa: linkedin.com/company/the-homelike)

## Modul 3 — SEO & content
- **Teknisk SEO (medel):** Spacest = Next.js, `robots: index, follow`, OG/Twitter-meta, sitemaps-länk, multispråk. Programmatiska stads-/listings-sidor. (källa: spacest.com-metadata)
- **Keyword-portfölj (låg):** Historiskt kommersiellt fokus "corporate housing/furnished apartments [stad]". Spacest riktar bredare "rent apartment/room medium-long term". Detaljerad portfölj **EJ VERIFIERAT**.
- **Backlink/domänstyrka (låg):** homelike.com är en **gammal, auktoritativ domän** (10 år, mycket press/backlinks) — ett värdefullt SEO-tillgång som Spacest köpte. Exakt DR/backlinks **EJ VERIFIERAT — orsak: ingen backlink-källa hämtad.**

## Modul 4 — Funnel & landningssida (self-serve search/booking)
Se `funnel.md`. Sammanfattning:
- **Historiska Homelike (hög):** Renodlad **self-serve sök-och-boka online** — sök → välj enhet → boka digitalt → e-signera hyresavtal → corporate-faktura. Ingen offert/account-manager-tvång (skillnad mot Rentaborg/AWP:s sälj-ledda modell). Detta var hela poängen: "as easy as booking hotel rooms".
- **Nuvarande Spacest (hög):** Sök verifierad bostad → "Rent now" (datum) → förauktorisering (1:a mån hyra + service fee) → landlord svarar inom 12–48h → bekräftelse/charge → landlord-kontakt delas → hyresavtal mellan tenant & landlord (Spacest ej avtalspart). Lead/booking via plattform; "Need help"-formulär (namn, efternamn, e-post, WhatsApp, tenant/landlord). (källa: spacest.com/how-works)

## Modul 5 — Tech stack
Se `tech.md`. Essens: Spacest.com = **Next.js/React**, self-serve booking-engine med betalning (kort/PayPal/Klarna/bankgiro), förauktorisering. Historiska Homelike var en custom B2B booking-plattform med corporate dashboards, VAT-fakturering, e-signering, AXA-integration. Live homelike.com rawHtml **EJ VERIFIERAT** (blockerad).

## Modul 6 — Erbjudande & leverans (supply-side landlords vs demand-side corporates)
- **Historiskt tjänsteflöde (hög):** Demand: corporate söker/bokar online → digital hyresavtal → check-in hos leverantör → månadsfaktura m. moms + AXA-försäkring. Supply: leverantör listar enheter, får bokningar/betalning/avtal via Homelikes unit management system.
- **Vad ingick (medel):** Möblerat, business-ready (höghastighetswifi, arbetsyta, fullt kök) per kvalitetskrav. Premiumförsäkring via AXA. Giltig momsfaktura. (källa: newswire 2018)
- **Villkor (hög):** Min 28–30 nätter. Snitt ~90 dagar.
- **Self-serve vs sälj-lett (hög):** Starkt **self-serve** (digital end-to-end) — motsatsen till AWP/Rentaborgs offert-/account-manager-modell.
- **Nuvarande (Spacest) leverans (hög):** Self-serve; Spacest medlar bara till bokning bekräftas, sedan tar tenant↔landlord över; deposition/admin/städ betalas direkt till landlord; Spacest ej part i hyresavtalet. Lägre service-/garantinivå än en operatör.

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion, historiskt (hög):** Produkt-/self-serve-ledd + corporate sales för stora konton (account management för enterprise). Plattform > säljare.
- **Supportkanaler, nuvarande (hög):** Spacest: WhatsApp-nummer, e-post (postbooking@spacest.com), help-sida, kontaktformulär. (källa: spacest.com)
- **Mystery shopping:** EJ UTFÖRT (per uppdragsgivarens beslut).
- **Faktisk svarstid/ton:** EJ VERIFIERAT.

---
### Öppna luckor / att verifiera senare
- **Sverige/Göteborg historisk supply hos Homelike:** EJ VERIFIERAT (live-site oåtkomlig). Riktning: troligen begränsad — Göteborg fanns ev. i 500+-stadslistan men volym okänd.
- **Live homelike.com idag:** om det är full Spacest-plattform eller mellansida — endast indirekt verifierat (redirect + 404 på SE-sidor).
- **Provision/service fee-% (historiskt och Spacest exakt nivå):** EJ VERIFIERAT.
- **Tech-pixlar/ads på live-domänen:** EJ VERIFIERAT (Firecrawl-block + egress-403).
- **Status för LinkedIn/varumärke under Spacest:** aktivt men oklart om B2B-corporate-erbjudandet återupplivas.
