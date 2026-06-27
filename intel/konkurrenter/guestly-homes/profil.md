# Guestly Homes — konkurrentprofil

> **TL;DR**
> - **Positionering:** "Built for business. Feels like yours." Norra Sveriges ledande corporate- & leisure-boende. Möblerade hem (lägenheter/villor) i **Boden, Piteå, Luleå, Nyköping** — kort/mellan/lång vistelse. Hybrid: OTA-driven short-term rental-operatör (Airbnb/Booking) som lägger ett B2B-corporate-lager ovanpå. (källa: startsida, /about)
> - **Affärsmodell:** Asset-light **rent-to-rent + förvaltning** (rent-to-rent garanterad hyra upp till 5 år, eller intäktsdelning). 150+ hem, ~85% beläggning, 4.9/5 guest-score (självrapporterat, /about). Familjeföretag grundat 2018 av Mia & Joakim Thörn. (källa: /about, /work-with-us)
> - **Prismodell:** Per natt (self-serve booking-motor, SEK-prisfilter), "Book Direct"-rabatt vs OTA. Long-term-villkor finns (Strict/Flexible Long term för 28+ nätter), men **inget publikt månadspris/offertpaket för team**. (källa: startsida booking-widget, /boden FAQ)
> - **Kanalmix:** **Google Ads bekräftat (35 ads, verifierad annonsör)**, **Meta Ads bekräftat (men supply-side — värvar hyresvärdar, ej B2B-bokare)**, mycket bred **programmatisk SEO** (200+ blogg-/stadssidor, 8 språk), äkta OTA-recensioner (Airbnb/Booking/Google) via Elfsight. (källa: Google Ads Transparency, Meta Ad Library, sitemap)
> - **Stack-essens:** **WordPress + Elementor Pro + Homey-tema + Boostly Connect-plugin + Hostfully booking-widget**, Boom PMS (app.guestlyhomes.com), Stripe, HubSpot, Callpage + Convolo callback-widgets, "Filippa AI" chatbot, GA4/GTM. (källa: rawHtml-grep, /about)
> - **Största styrka/svaghet:** Styrka = riktig drift med riktiga hem + äkta recensioner + lokal närvaro i exakt de industriorter (Boden/H2 Green Steel) där efterfrågan exploderar. Svaghet = **inte byggt för B2B-inköp** (ingen offert-/team-funnel, ingen central fakturering tydligt paketerad publikt) + **oredigerade engelska Boostly-templates** (`[INSERT BUSINESS NAME]`, US-telefon `409-555-0131`, `$50 VAT`, "London Service Accommodation") som skadar trovärdigheten.

**Käll-URL + confidence per påstående nedan.**
**Domän:** guestlyhomes.com · **Juridisk enhet:** Guestly Homes Sweden AB, org.nr 559359-3238 (hög, allabolag.se) · **Kontakt:** +46 770 222 999, Box 2514 116 74 Stockholm.
**Källor:** scrape 2026-06-27 (se `raw/`). Tech: `raw/tech.md` → `tech.md`. Funnel: `funnel.md`.

---

## Modul 1 — Marknad & positionering
- **Value prop (hög):** "Built for business. Feels like yours. Furnished apartments across Sweden with centralized billing, flexible terms, and support that actually responds." (källa: startsida hero). /about delar budskapet i tre: *guests* (smidig digital incheckning), *bookers* ("one dashboard… invoices land on time, itemised", ändra datum/byta enhet/lägga till 5 bäddar), *property owners* (stabil intäkt).
- **ICP (hög, men annorlunda än AWP:s Göteborg):** Korttids-/mellantids-gäster + corporate-travelers/projektteam i **norra Sverige**. Riktar sig explicit mot **industri-/byggprojekt**: listningar marknadsförda "Perfect for H2 Workers" och "H2green Business & Comfort" (källa: Booking.com-listningar via search) — dvs **H2 Green Steel/Stegra-stålverket i Boden** (driftstart 2026) är en central efterfrågedrivare. Bloggar om "accommodation planning for project teams in Sweden", "best corporate rentals in Boden for H2greensteel project". (källa: sitemap/blog)
- **Geografi (hög):** **Boden, Piteå, Luleå, Nyköping** (booking-widget location-dropdown). /about + /work-with-us nämner även **Skellefteå**. Reviews nämner enheter i **Västerås**. Viss närvaro i **Italien** (källa: Trustpilot-beskrivning). **Betjänar INTE Göteborg** — ingen Göteborg-sida, ingen västsvensk geografi i någon scrape (hög). → Geografisk overlap med AWP/Volvo-ICP = i princip noll; konkurrensen är indirekt (mönster/best practice), ej head-to-head.
- **Segment (hög):** Blandat **leisure + corporate**. Tydligt SMB/operatörs-DNA (Airbnb-rötter) snarare än enterprise-relocation. "short, mid, and long stays" (Instagram-bio, search).
- **Pris/paketering (medel):** Self-serve **per natt** via booking-motor (book.guestlyhomes.com); prisfilter i SEK. "Book Direct" = bästa pris + late checkout + deluxe service (källa: /boden). Husdjur 85 SEK/natt, sen utcheckning 285 SEK (källa: /boden FAQ). **Ingen security deposit** — istället obligatorisk försäkring som täcker skador (källa: /boden FAQ, /work-with-us "insured up to 5 000 000 €"). Min-/max-stay sätts per enhet; long-term cancellation-policies för 28+ nätter (källa: /boden FAQ).
- **Differentiering/"moat" (medel):** Riktig operatör med fysisk lokal drift (städ-team, housekeeping, concierge, gym för gäster, mat-partnerskap Råvara), digital incheckning, AI-support dygnet runt ("Filippa AI"). Vertikalt integrerad (egen Boom-PMS, egen owner-app). Äkta recensioner = trovärdighet. (källa: /about, /boden)

## Modul 2 — Trafik & annonsering
- **Betalt — Google Ads (hög):** **Bekräftat aktiv.** Google Ads Transparency (region SE, domain guestlyhomes.com): **35 ads**, annonsör "Guestly Homes Sweden AB" (Verified), advertiser-ID `AR11350597561070125057`. (källa: adstransparency.google.com 2026-06-27). Exakta sökord EJ VERIFIERAT.
- **Betalt — Meta (hög):** **Bekräftat aktiv** men **utbuds-/hyresvärds-inriktat**. Meta Ad Library (SE, "Guestly Homes"): 2 aktiva ads (Library ID 966073349767157, 1269503681704542), startade 2026-06-22, svensk copy ("Korttidsuthyrning svänger. Företagsuthyrning gör inte det."), CTA → app.guestlyhomes.se (värva hyresvärdar). Ingen Meta-pixel/`fbq` inline i startsidans markup, men `connect.facebook.net` dns-prefetch finns (källa: rawHtml-grep). → Meta används f.n. för **supply acquisition**, inte B2B-bokare-leads.
- **Organiskt (hög):** **Mycket stark programmatisk SEO.** Sitemap visar 200+ URL: blogg-kluster (corporate housing, leases, property management, "best rental sites", stad-guider), stadssidor (apartments-in-lulea/boden/pitea, nearby-places), allt översatt till **8+ språk** (sv/en/de/fi/no/nl/fr/es/it/zh/ro). Färsk blogg (2026-06) om "what companies expect from employee accommodation", "why housing quality impacts project success in Sweden". (källa: firecrawl_map). Exakt organisk trafik EJ VERIFIERAT.
- **Distribution (hög):** Tung **OTA-närvaro** — Airbnb, Booking.com, Vrbo, bedandbreakfast.eu, cabinns; partner-logos Airbnb/Booking/Vrbo/Google på /about. Egen direktboknings-subdomän book.guestlyhomes.com. (källa: search, /about)
- **Socialt (medel):** Instagram (@guestlyhomes), YouTube-kanal, Facebook-sida. Frekvens/engagemang EJ VERIFIERAT.
- **Kanalmix-bedömning:** Största hävstången = programmatisk SEO (massiv) + OTA-distribution + Google Ads på efterfrågesidan; Meta på utbudssidan. Funnel optimerad för **bokningar/per-natt**, inte för B2B-offerter.

## Modul 3 — SEO & content
- **Teknisk SEO (hög):** Komplett OG/Twitter-meta, Yoast-liknande robots-direktiv, hreflang/i18n för 8+ språk, flera sitemaps (post/page/listing). `robots: index, follow`. (källa: scrape-metadata, sitemap_index.xml)
- **Keyword-portfölj (hög):** Bred long-tail: "corporate housing Sweden/Boden/Luleå", "serviced apartments", "executive apartments", "corporate lease", "property management", "best rental sites 2025", "apartments in stockholm/sweden". Stark **topical authority** kring corporate housing + property management. (källa: sitemap titlar)
- **Content-strategi (hög):** Hög volym SEO-blogg (många generiska "Ultimate Guide"-artiklar, troligen AI-assisterade), stadssidor, nearby-places-guider, branschnära artiklar (project teams, employee accommodation). Översättningsmaskin för internationell long-tail. Författare bl.a. Joakim Thörn (CEO).
- **Backlink/domänstyrka (låg):** EJ VERIFIERAT — orsak: ingen backlink-källa hämtad. Domän aktiv sedan minst 2021 (wp-uploads 2021), äldre/mognare än Rentaborg.
- **Core Web Vitals (låg):** EJ VERIFIERAT — PSI ej körd. WP + Elementor + tunga tredjeparts-widgets (Elfsight, Callpage, Convolo, Hostfully, Stripe) + WP Rocket-cache → sannolikt tyngre/långsammare än en Next.js-sajt; risk för CWV-problem.

## Modul 4 — Funnel & landningssida
Se `funnel.md`. Sammanfattning:
- **Sidarkitektur (hög):** Hero med **booking-search-widget** (location/datum/gäster) → äkta OTA-reviews-aggregator (Elfsight: Airbnb 5.0 / Booking 8.9 / Google 4.9 / overall 4.7, 137 reviews) → stadssidor (Boden etc.) med services/gym/mat-partner/FAQ → "Book Direct"-fördelar. (källa: startsida, /boden)
- **CTA-arkitektur (hög):** Primär CTA = **"Search" / "Book now" / "Reserve now"** (transaktionell, self-serve), inte "Get a quote". B2B-bokare hänvisas vagt via /contact (selector: Booking Request vs General Question).
- **Lead capture (medel):** Primärt **booking-motorn** (instant). Contact-sidan = formulär-selector (fält bakom JS, ej extraherbara). Hyresvärds-funnel separat och starkare (HubSpot meeting-länkar, app.guestlyhomes.se). **Ingen dedikerad B2B-team-/headcount-/duration-kvalificerande offertform** som Rentaborg har. (källa: /contact, /work-with-us)
- **Konverteringselement (hög):** **Äkta, verifierbara recensioner** (deep-links till Airbnb/Booking/Google), namngivet team med LinkedIn, riktiga foton, OTA-partnerlogos, Trustpilot. → Trovärdighet klart starkare än Rentaborgs anonyma/AI-genererade social proof.
- **Trovärdighetsglapp (hög, exploaterbar):** Oredigerade Boostly-template-rester: `[INSERT BUSINESS NAME]`, `[INSERT TOWN/CITY NAME]`, US-telefon `409-555-0131`, `info@mybusiness.com`, `$50 including VAT`, "London Service Accommodation", "Boden for Dummies"-YouTube. Self-rapporterade stats utan källa (150+ homes, 85%, 4.9). (källa: /housing-request, /work-with-us, /boden)

## Modul 5 — Tech stack
Se `tech.md`. Essens: **WordPress + Elementor Pro + Homey-tema (connect-child-theme) + Boostly Connect-plugin + Hostfully booking-widget**, egen **Boom-PMS** (app.guestlyhomes.com / app.guestlyhomes.se), **Stripe**-betalning, **HubSpot** (CRM/meetings, portal 20202904), **Callpage + Convolo.ai** callback-widgets, **"Filippa AI"** guest-chatbot, **Elfsight** reviews/widgets, **Iubenda** consent, GA4 (G-WBQV0DW8Y7) + GTM (GTM-W382F98) + Microsoft **Clarity**, WP Rocket-cache. Tech-partners (/about): PriceLabs (revenue mgmt), Breezeway (ops/cleaning), Enco Connect.

## Modul 6 — Erbjudande & leverans
- **Tjänsteflöde gäst (hög):** Sök & boka online (instant) → kontaktlös digital självincheckning ("boarding pass", tap a code) → 24/7-support (AI "Filippa" + lokalt team) → utcheckning. Concierge: tidig incheckning, late checkout, bagageförvaring, förfylld kyl, flygtransfer. (källa: /about, /boden)
- **Vad ingår (hög):** Möblerat, fullt kök, hög-hastighets-WiFi gratis, sänglinne & handdukar, amenity starter-pack, städning (daglig/veckovis tillval), Svanen-märkt el, ekologiska hygienprodukter, första hjälpen + brandsläckare, gratis parkering (per enhet), gym gratis för gäster (vissa orter). (källa: /boden services)
- **Villkor (hög):** Incheckning 15:00 / utcheckning 10:00. Avbokning: flera nivåer (Flexible→Strict + **Strict/Flexible Long term för 28+ nätter**). Ingen deposition; obligatorisk försäkring. Full betalning vanligtvis vid bokning. (källa: /boden FAQ)
- **Self-serve vs sälj-lett (hög):** Primärt **self-serve/transaktionellt** (booking-motor). B2B/team hanteras reaktivt via contact/HubSpot, ej en strömlinjeformad offert-funnel. Head of Sales (Jacob Granberg) finns → viss outbound/B2B-säljkapacitet. (källa: /about-team)
- **Erbjudande till hyresvärdar (hög):** Rent-to-rent (garanterad marknadshyra upp till 5 år, inga vakanser), förvaltning med intäktsdelning, eller köp. "Set and forget". Snabb start (<2 v till första betalning). (källa: /work-with-us)

## Modul 7 — Försäljning & kundservice (endast publikt observerbart)
- **Sales motion (hög):** Övervägande **inbound/self-serve booking** + OTA. B2B & hyresvärd via HubSpot (meeting-bokning, t.ex. meetings.hubspot.com/benjamin-gaudet). Namngivet säljteam (Jacob Granberg Head of Sales; Benjamin Gaudet & Mattias Ringbjer Partner Relations). (källa: /about, /work-with-us)
- **Supportkanaler (hög):** Telefon **+46 770 222 999**, **Callpage** "free callback in 28 seconds"-widget, **Convolo** callback, **"Filippa AI"** 24/7-chatbot "in every channel", e-post/formulär, status-sida (status.guestlyhomes.com), gästportal (guest.guestlyhomes.com). → **Klart mer support-/chatt-infrastruktur än Rentaborg** (som saknar chatt helt).
- **Mystery shopping:** EJ UTFÖRT (per uppdrag — endast publik info).
- **Faktisk svarstid/ton:** EJ VERIFIERAT — ingen kontakt tagen.

---
### Öppna luckor / att verifiera senare
- Google Ads-creatives/sökord & Meta-demand-ads (om de kör B2B-bokare-kampanjer separat på subdomän/landningssida).
- Backlink-profil & faktisk organisk trafik (extern källa).
- PSI/Core Web Vitals (sannolik svaghet pga WP + tunga widgets).
- Exakta B2B-villkor: central fakturering/PO/ramavtal för team — antytt i /about men ej publikt paketerat.
- Verifiera 150+ homes / 85% / 4.9-claims och rent-to-rent-volym mot allabolag-bokslut.
- Italien-expansionens omfattning.

### Relevans för AWP (Göteborg, Volvo/industri, 30–90 nätter)
- **Ingen geografisk konkurrens** (Guestly = norra Sverige, ej Göteborg). Men **mycket relevant som spelbok**: de bevisar att industri-projektorter (Boden/H2 Green Steel) är en het long-stay-marknad och visar en vinnande operatörsmodell (äkta reviews + lokal drift + AI-support + rent-to-rent-supply). 
- **AWP:s kontringsläge:** Guestly är *inte* byggt för B2B-inköp (ingen offert/team-funnel, ingen tydlig central fakturering, slarviga templates). AWP kan i Göteborg vinna B2B med exakt det Rentaborg lovar men Guestly saknar — strukturerad team-offert, en faktura, ramavtal — kombinerat med Guestlys styrkor (äkta verifierade referenser + lokal drift).
