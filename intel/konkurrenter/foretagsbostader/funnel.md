# Företagsbostäder — funnel.md (steg-för-steg)

**Metod:** scrape av /en (startsida), /en/larger-projects, /en/serviced-apartments/goteborg, enhetssida Bagerigatan 3 (2026-06-27). Skärmdumpar ej sparade som PNG (egress blockerar nedladdning av firecrawl-hostade bilder); bevis = käll-URL + scrape-markdown i `raw/`. Confidence hög där ej annat anges.

## Steg 0 — Ingång (SEO / OTA / koncern)
Trafik via (a) organisk lokal SEO — stad/stadsdels-guide eller enhetssida med pris i SERP, (b) **OTA** (Expedia/Hotels.com-listningar, t.ex. Mölndal 8.0), (c) koncern-cross-sell (strawberryhotels.com/corporate-apartments), (d) ev. betald (GTM finns men pixel ej bekräftad). Bred ingångsyta.

## Steg 1 — Hero (startsida /en)
- Rubrik: **"Serviced apartments made easy"** + "Select destination"-väljare direkt i hero.
- Subtext: *"Företagsbostäder is Sweden's largest housing agency for serviced apartments. We ensure that companies can grow and recruit within the Nordic region."*
- "Trusted by"-logoband (testimonials längre ner).
- Låg friktion: ingen gate — användaren ser inventory direkt.

## Steg 2 — Inventory upfront (self-serve browse)
- **"261 Available Apartments"** med klickbara stadschips m. antal: **Stockholm (104), Göteborg (113), Malmö (18), Helsingborg (17), Lund (9)**.
- Grid av enheter: foto, kategori-badge (Basic/Standard/Premium), adress+stad, typ (Studio/1–4 Room), m², **tillgänglighet** ("Available today" / "Free from YYYY-MM-DD"), **pris/månad** (t.ex. 15 994 kr). 
- Detta är funnelns stora differentiator: **pris + tillgänglighet öppet, ingen offert krävs för att se värdet.**

## Steg 3 — Värde & social proof
- Fyra scroll-USP-block: **"Move in and Get to Work"** (inflyttningsklart) · **"Five Cities, Endless Possibilities"** (2 000+ enheter) · **"Stay Longer – Save More"** (degressivt pris) · **"We handle housing, you handle business"** (konsoliderad fakturering, account manager, för HR & småföretag).
- Testimonials (anonymiserade men corporate-tonade: "compliant, customer focused and responsive").
- "Always included": Fully furnished · Fully equipped kitchen · WiFi · 24/7-service. Tillval-lista (städning, flexibel avbokning, skadeskydd, tidig/sen check, extra säng/linne/barnsäng).

## Steg 4 — Enhetssida (pris-kalkylator)
- Bildgalleri (riktiga foton, "imported from Elina"), specs (m², typ, antal personer, amenities: diskmaskin, säng-typer, husdjur tillåtna…).
- **"Calculate your price"** — välj move-in/move-out → visar Pris/månad + Departure cleaning + **Total**, "Price including electricity, heating, water, Internet. Billed monthly, excluding VAT."
- CTA: **"Send request"**. Plus "Apartments in the same building" + "More apartments in [stad]" (intern länkning, håller kvar besökaren).

## Steg 5 — Lead capture (Request quote-formulär)
**Rubrik:** "Request quote — Do you want us to create a housing solution for you?"
**Persona-flikar:** **Company / Private / Guest / Get contacted** (ruttar leadet).
**Fält (observerade):** Destination (select) · Number of guests · "Wants separate / separate beds" · Arrival · Departure · Message · Your contact details.
- **Friktion: låg–medel** — färre kvalificerande fält än Rentaborg (ingen tvingad bransch/headcount/duration-dropdown synlig); fokus på datum+stad+antal.
- För **stora projekt** (/en/larger-projects): "Call 010-707 55 00" + samma formulär + löfte om digital dashboard, 3 000+ lägenheter, en account manager.

## Steg 6 — FAQ-vägg (long-stay SEO + invändningshantering)
Omfattande FAQ segmenterad i tre personas ("för dig som flyttar dit jobbet är" / "bokar åt andra" / "vill veta mer"). Täcker min-stay (5 dygn), pris/kategori, ramavtal, konsoliderad faktura, rotation/delning, ESG/miljöcert, internationella gäster, 1993-historik + Strawberry-ägande. Bygger förtroende + fångar long-tail-sök.

## Steg 7 — Support / chat
**Weply live-chat** ("We are online", mänskliga agenter) + e-post (reservations@) + telefon + 24/7 gästservice. Account manager återkommer "usually within the same business day".

---
### Funnel-bedömning vs AWP
- **Styrkor att (delvis) kopiera:**
  1. **Pris + tillgänglighet öppet** per enhet → bygger förtroende och självkvalificerar leads (AWP visar redan listings men kan addera tydlig pris/månad + lediga-datum).
  2. **Priskalkylator** (move-in/out → total incl. städning) → minskar offert-friktion.
  3. **Stadsdels-djup SEO** + long-stay-FAQ-vägg.
  4. **Live-chat med människa** (snabb respons-signal).
- **Svagheter att exploatera (AWP:s öppning):**
  1. **Ingen nischspets mot industri/bygg/Volvo-arbetare** — positioneringen är generell relocation/serviced apartments för "companies" + privat/gäst. AWP kan äga "boende för industri-/projektarbetare i Göteborgsregionen, 30–90 nätter" med Volvo/SKF-nära case.
  2. **Min-stay 5 dygn** signalerar korttids-bredd; AWP:s long-stay-spets (30–90) kan kommunicera bättre dygnspris och stabilitet för just den längden.
  3. **Volym ≠ relation** — stor incumbent, anonyma testimonials, koncern-bolag. AWP kan vinna på **personlig, verifierad, lokal Superhost-relation** och äkta referenser.
  4. **Bred ICP (även privat/gäst)** späder B2B-inköpsbudskapet; AWP kan vara skarpare "ren B2B för arbetsgivare".
- **Realistisk hotbild:** Detta är den **starkaste** av de granskade konkurrenterna (kapitalstark, äkta volym, transparent, hotellkoncern-rygg) — AWP konkurrerar inte på bredd/feature-paritet utan på **nisch, snabbhet och förtroende i en avgränsad geografi/segment.**
