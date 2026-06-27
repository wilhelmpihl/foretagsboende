# National Corporate Housing — funnel.md (steg-för-steg)

**Metod:** scrape av startsida, `/emea/sweden`, `/contact-us`, `/services-solutions/group-housing`, `/about-us` (2026-06-27). Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/`. Confidence hög där ej annat anges.

## Steg 0 — Ingång
Två huvudvägar:
1. **Programmatisk geo-SEO** — sökaren landar på en land/stad-sida (t.ex. `/furnished-housing/corporate-housing/emea/sweden`). Sidan är engelskspråkig (en-US), mall-genererad, stockfoto.
2. **Varumärke / RMC-kanal** — befintliga global mobility-/relocation-relationer (National är leverantör åt RMC:er som Sirva) och varumärkeskännedom sedan 1999.

## Steg 1 — Landningssida (Sverige-exempel)
- Hero: stockbild (norrsken) + "Sweden Serviced Apartments" + "Scandinavian charm and modern convenience".
- Hubb-lista: Stockholm CBD, Kista, Solna/Arenastaden, **Gothenburg Lindholmen** (Lindholmen Science Park + automotive), Malmö Hyllie, Uppsala.
- Transit-copy: ARN/GOT/MMX-flygplatser, E4/E6, SL/Västtrafik.
- "Our expertise": Technology / Relocation & Mobility / Group Housing.
- Amenities: Wi-Fi, fullt kök, vardagsrum, garage i nyare hus.
- **Enda CTA: "Contact us" / "Chat with our experts about your housing needs".**
- **Saknas helt:** pris, min-stay, listningar/inventory, lokalt svenskt telefonnummer, svensk text, Göteborgs-undersida.

## Steg 2 — Värde & social proof (service-/about-sidor)
- Group Housing: "PCTT (project, crew, team travel)", construction crews/sportlag/filmteam, "transparent pricing", master leases, en faktura (lägenhet + hotellnätter + skatter).
- Klient-citat (sportlag: 175 spelare/5 marknader/6-månaderssäsong, "white-glove", "bilingual support").
- About: 28 kontor i Nordamerika + London + Singapore; awards (Great Place to Work, Most Admired CEO); värdeord ("Deliver the impossible every day").
- "By the numbers"-räknare (properties / guest satisfaction / solutions / languages) — JS-animerade; faktiska siffror ej i statisk scrape.

## Steg 3 — CTA-arkitektur
- Mjuk, konsultativ CTA genomgående: "Contact us", "Let's talk", "Chat with our experts", "Get a Group Quote" → alla → `/contact-us`.
- Brådskande spår: `/housing-request` ("Need housing fast? ... Go here for immediate needs").
- Ingen "Get instant price"/online-bokning. Ingen prisindikation någonstans.

## Steg 4 — Lead capture (`/contact-us`)
**Rubrik:** "Building a custom housing program for your team?" (+ separat snabbväg `/housing-request` för akuta behov).
**Formulärfält:**
1. First name 2. Last name 3. Email 4. Phone 5. Company 6. Job title 7. Address 8. City 9. **State/Province** (dropdown = ALLA US-delstater + territorier + "Non-US State") 10. **Zip Code** 11. **Country** (full ISO-lista inkl. Sweden) 12. **Furnished Housing Needs** (Intern Program / Rotational program for project-based work / Travel or temporary assignments / Relocations / Not Sure)
- **Bot-skydd:** reCAPTCHA.
- **Friktion:** ~12 fält = hög. **US-centrerat** (State/Province = US-delstater, "Zip Code", US-fältordning) → Sverige är påklistrat via Country-listan, inte ett lokalt anpassat flöde.
- **Saknad kvalificering:** ingen duration-, headcount- eller startdatum-fält (till skillnad från Rentaborgs offertformulär) → lägre lead-kvalificering på själva formuläret; kvalificering sker i efterföljande säljsamtal.

## Steg 5 — Efter inskick (utlovat)
- "Our housing specialists will work with you to create a flexible solution." Account-manager/program-modell, white-glove, snabba svar på akuta behov. Ingen instant book; människa (ev. AI-chatt först via Kentico AI Agents) tar över.

---
### Funnel-bedömning vs AWP
- **Styrkor (deras):** (1) Global varumärkes-/RMC-trovärdighet (sedan 1999, awards, enterprise-referenser). (2) Skalbar geo-SEO-maskin. (3) "One invoice / one point of contact / master lease"-budskap mot global mobility. (4) Äkta gruppinkvarterings-erfarenhet (sportlag/crews).
- **Svagheter att exploatera (för AWP i Göteborg):**
  1. **Ingen verifierad lokal närvaro i Sverige** — sidan är ett engelskspråkigt SEO-skal utan pris, inventory, svensk kontaktväg eller Göteborgs-sida. AWP vinner med **äkta lokal Göteborg-närvaro + svenskt språk**.
  2. **Inget pris/transparens** → AWP kan vinna med tydlig prissättning för 30–90-nätters industriarbetar-stays.
  3. **US-centrerat formulär utan duration/headcount-kvalificering** → klumpigt för en svensk industri-köpare; AWP kan ha ett enklare, lokalt, snabbare flöde (chatt/WhatsApp/telefon på svenska).
  4. **Tyngdpunkt på white-collar relocation/sportlag/USA** → industriarbetar-long-stay i Göteborg är inte deras bevisade kärna; AWP:s ICP-fokus (Volvo/bygg/industri, 30–90 nätter) är en nisch där National är generalist på distans.
- **Styrkor att respektera/kopiera:** "one invoice + master lease + dedicated contact"-budskapet och den programmatiska geo-SEO-strukturen.
