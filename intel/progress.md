# progress.md — löpande logg

Analysdatum: 2026-06-27 · Branch: claude/housing-rental-app-KIBKO

## Faser
- [x] Fas 0 — Setup: mappstruktur, plan.md, progress.md
- [ ] Fas 1 — Recon (bredd) på alla 14 targets
- [ ] Fas 2 — Djupdyk Modul 1–7 per target
- [ ] Fas 3 — Jämförelsematris
- [ ] Fas 4 — Syntes + AWP-backlog
- [ ] Avslut — commit + draft-PR

## Profilstatus (KLAR-kriterier: Modul 1–7 + tech.md + funnel.md + TL;DR + matrisrad + källor/confidence)
| # | Konkurrent | Recon | Profil | Tech | Funnel | Matris | Status |
|---|---|---|---|---|---|---|---|
| 1 | Rentaborg | ✅ | ✅ | ✅ | ✅ | ☐ | KLAR (profil) |
| 2 | Kassoe Housing | ✅ | ✅ | ✅ | ✅ | ☐ | KLAR (profil) |
| 3 | Workers Stay | ✅ | ✅ | ✅ | ✅ | ☐ | KLAR (profil) |
| 4 | Forenom | ✅ | ✅ | ✅ | ✅ | ☐ | KLAR (profil) |
| 5 | Blueground | ✅ | ✅ | ✅ | ✅ | ☐ | KLAR (profil) |
| 6 | Företagsbostäder | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 7 | StayEasy | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 8 | Swedacco | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 9 | Strawberry | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 10 | Homelike | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 11 | Sweden Casa Solutions | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 12 | Corporate Apartments SE | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 13 | Guestly Homes | ☐ | ☐ | ☐ | ☐ | ☐ | — |
| 14 | National Corporate Housing | ☐ | ☐ | ☐ | ☐ | ☐ | — |

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
