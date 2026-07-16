# StayEasy — funnel.md (steg-för-steg)

**Metod:** scrape av startsida, /service, /about-us, /contact, /faq, listing /rbg-46a-1201 + firecrawl_map (2026-06-27). Skärmdumpar ej sparade som PNG (egress-policy blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/`. Confidence hög där ej annat anges.

## Steg 0 — Annons/SEO-ingång
Användaren kommer främst **organiskt**: antingen via en stadssida (/business-apartments/{stad}/{typ}) eller direkt på en enskild lägenhetssida (/{fastighetskod}, t.ex. /rbg-46a-1201) som rankar på long-tail "business apartment [stad]". Flerspråkiga ingångar (sv/sk/it/es/pl) fångar utländsk arbetskraft (slovakiska, italienska, polska, spanska). Ingen bekräftad betald ingång (ingen AW-/fbq-pixel). (källa: firecrawl_map, rawHtml, medel)

## Steg 1 — Hero (startsida)
- Rubrik: *"Furnished business apartments across Sweden."*
- Subtext: "flexible corporate housing where you feel at home … 7 days, 7 weeks or 7 months."
- **Primär CTA:** "Make a request" → /accomodations/ (lägenhetskatalog). Ingen prisuppgift, ingen kalender. (källa: startsida)

## Steg 2 — Förtroende & FAQ (mycket testimonial-tungt)
- "**Trusted by over 547 companies**" + karusell av **namngivna** testimonials (Petra K, Chris, Joel H, Martin Carlsson, Siv Norberg, Teresia Leek, Lasma Seja, Niklas Hallberg) — flera nämner segment: "my medical workers", "our consultants". Varje kort har en "BOOK NOW/REQUEST"-knapp. (källa: startsida)
- Inbäddat FAQ-block svarar på bokning, vad ingår, min-stay, husdjur, hotell-vs-lägenhet. (källa: startsida = /faq-innehåll)

## Steg 3 — Katalog & lägenhetssida
- /accomodations/ + per-stad/per-typ-sidor → enskild lägenhetssida med adress, m², antal rum/bäddar, gångavstånd, parkering, **pris "from €XX/night"** (t.ex. €109/natt). (källa: listing /rbg-46a-1201)
- **CTA på listing:** "Request/Book now" → `mailto:info@stayeasy.se?subject=<lägenhetskod>`. **Ingen availability-kalender, ingen online-betalning.** (källa: listing, hög)

## Steg 4 — Lead capture (`/contact` eller mailto)
**Kontaktformulär (`/contact`):**
1. Name* 2. Email* 3. Message* (+ GDPR-samtycke). **Det är allt — 3 fält.**
- **Friktion:** mycket låg. **Kvalificering: obefintlig** — inget om duration, antal personer, stad, bransch, datum. Allt sker manuellt i efterföljande mailtråd.
- **Alternativ väg:** mailto-länk per lägenhet (subject förifyllt med kod).
- Synligt team med foton/namn/roller (Johanna Ahlin Owner/CEO, Stefan Ahlin Owner/CFO, Nathalie admin, Lina, servicelag) + kontorshundar → personlig/tillitsbyggande ton. (källa: /contact, hög)

## Steg 5 — Efter inskick (utlovat)
- Teamet (ofta ägaren Johanna) matchar förfrågan mot datum/arbetsplats/behov och bekräftar tillgänglighet manuellt. Nycklar samma dag om ledigt; annars hjälp via samarbeten med andra hyresvärdar. Avtal med uppsägningstid. (källa: /faq)

---
### Funnel-bedömning vs AWP
- **Styrkor att kopiera:** (1) **Äkta, namngivna testimonials med segment-kontext** (medical workers, consultants) — betydligt mer trovärdigt än Rentaborgs anonyma → AWP bör samla verifierbara kundröster (Volvo-leverantörer, bygg). (2) **Synligt team med namn/foton/roller** bygger tillit (familjeföretag-vinkeln). (3) **Massvolym lägenhetssidor + flerspråk** för organisk long-tail — låg kostnad, stor yta. (4) "Allt ingår inkl. städning varannan vecka + lakan" tydligt paketerat.
- **Svagheter att exploatera:** (1) **Bokning via mailto** — inget kvalificerande formulär, ingen availability, ingen instant-pris → AWP kan vinna med ett riktigt offert-/bokningsflöde (duration/headcount/bransch som Rentaborg). (2) **Ingen Göteborg/västkust** — StayEasy täcker bara Östergötland/Sörmland/Mälardalen → AWP äger sitt geo helt; ingen direkt kollision. (3) **Slarvig engelsk copy** (stavfel) → AWP kan framstå mer professionellt. (4) **Ingen chatt/snabb digital kanal** → chatt/WhatsApp = differentiator. (5) Liten skala (8 anställda, ~27 MSEK oms.) → begränsad kapacitet för stora team-volymer (5–500+) som AWP/Rentaborg adresserar.
- **Sammantaget:** StayEasy är en **lokalt stark, lågteknologisk SMB** — bra benchmark för trovärdighet/SEO-volym, men **inte ett geografiskt hot** mot AWP i Göteborg. Bevaka ev. expansion västerut.
