# progress.md — löpande logg

Analysdatum: 2026-06-27 · Branch: claude/housing-rental-app-KIBKO

## Faser
- [x] Fas 0 — Setup: mappstruktur, plan.md, progress.md
- [ ] Fas 1 — Recon (bredd) på alla 14 targets
- [ ] Fas 2 — Djupdyk Modul 1–7 per target
- [x] Fas 3 — Jämförelsematris (csv + md)
- [x] Fas 4 — Syntes + AWP-backlog (SYNTES.md)
- [x] Avslut — commit + draft-PR (#1)

## Profilstatus (KLAR-kriterier: Modul 1–7 + tech.md + funnel.md + TL;DR + matrisrad + källor/confidence)
| # | Konkurrent | Recon | Profil | Tech | Funnel | Matris | Status |
|---|---|---|---|---|---|---|---|
| 1 | Rentaborg | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 2 | Kassoe Housing | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 3 | Workers Stay | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 4 | Forenom | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 5 | Blueground | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 6 | Företagsbostäder | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 7 | StayEasy | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 8 | Swedacco | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 9 | Strawberry | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 10 | Homelike | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 11 | Sweden Casa Solutions | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 12 | Corporate Apartments SE | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 13 | Guestly Homes | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |
| 14 | National Corporate Housing | ✅ | ✅ | ✅ | ✅ | ✅ | KLAR |

## Metodbegränsningar (gäller alla profiler)
- Direkt `curl -I`/WebFetch till konkurrentdomäner blockeras av org-egress-policy (403) → response-headers (server/CDN) = EJ VERIFIERAT. All web-data via firecrawl.
- Screenshots: firecrawl-hostade bilder kan ej laddas ner lokalt (egress) → `screens/` mestadels tomma; bevis = käll-URL + scrape-markdown i `raw/`.
- Meta Ad Library / Google Ads Transparency ej systematiskt hämtade → faktiska creatives EJ VERIFIERAT (men pixel/conversion-ID i kod bekräftar ads-kanal).
- firecrawl `json`-extraktion opålitlig för tech-stack (hallucinerar) → tech verifierad via rawHtml-grep.

## Logg
- 2026-06-27 — Fas 0 klar. Mappstruktur + plan.md skapade. Startar Fas 1+2.
- 2026-06-27 — Rentaborg klar (mall): Next.js, Google Ads (AW-17443560069), offert-ledd, programmatisk SEO. Trovärdighetsglapp (AI-bilder/overifierade claims).
- 2026-06-27 — Prio-1 klara via parallella agenter:
  - **Forenom** (HÖG ICP): WordPress+React instant-book webshop, server-side GTM, Meta Pixel, Crisp-chat, egna Göteborg/Volvo-kluster. Trustpilot 2.6/5. Mest skalad.
  - **Workers Stay** (MYCKET HÖG ICP, bekräftat OBEROENDE från AWP): UK-bolag, Vite/React, 2 Google Ads-konton + Meta Pixel, 371-URL hyper-nischad programmatisk SEO (Volvo/yrke/arbetsgivare), från €25/natt/person. Trovärdighetssvaghet.
  - **Kassoe Housing** (HÖG ICP): WordPress/Elementor, portal+app, ~18-fälts formulär, ingen pristransparens, ingen chatt, Apollo-outbound.
  - **Blueground** (LÅG ICP för AWP): global React-SPA, instant-book, transparent pris, men INGEN Göteborg/Sverige-närvaro + fel ICP (premium white-collar). Benchmark, ej direkt hot.
- 2026-06-27 — 9 prio-2-agenter startade (Företagsbostäder, StayEasy, Swedacco, Strawberry, Homelike, Sweden Casa Solutions, Corporate Apartments SE, Guestly Homes, National Corporate Housing).
- 2026-06-27 — Alla 14 profiler klara. Nyckelfynd prio-2:
  - **Företagsbostäder** (HÖG): störst i Göteborg (113 lediga), Strawberry/Stordalen-ägt, transparent pris + Weply-chatt, MEN ingen industri/Volvo-nisch, min-stay ~5 dygn. Namnkrock-risk vs företagsboende.se.
  - **Corporate Apartments/Swedrent** (MYCKET HÖG): uttalad bygg/entreprenad-nisch, etablerad operatör sedan 2009, bekräftad Google Ads + Meta-pixel; daterad UX, ingen pris/chatt, 404-buggar.
  - **Sweden Casa Solutions** (MYCKET HÖG): Göteborg/Volvo + datacenter, per-person/delat, MEN spansk S.L., AI-sajt, dold pris → trovärdighetsglapp.
  - **Swedacco** (HÖG bransch/LÅG geo): vind/bygg, äkta kundlogos (Peab/Ramboll), Norrlandstyngd, Google Ads aktiv.
  - **Strawberry**: "Corporate Apartments" lotsar till Företagsbostäder (samma koncern).
  - **StayEasy/Guestly/National**: ingen Göteborg-överlapp (mellan-/norra Sv / US-skal) → låg direkt relevans.
  - **Homelike: NEDLAGT (konkurs 2025-03-28)**, domän nu Spacest utan SE-supply → validerar AWP:s ägda-utbud-modell.
- 2026-06-27 — Fas 3+4 klara: jamforelsematris.csv/.md + SYNTES.md (14 lärdomar L1–L14 + 14-punkts prioriterad AWP-backlog mappad mot de tre varumärkena).

STATUS: KLAR — 14 profiler, 14 rankade lärdomar, 14-punkts AWP-backlog.
