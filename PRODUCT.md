# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Modular static web app, installable offline PWA (confirmed by owner, 2026-11-11): `index.html` + plain CSS + ES-module JS, a single `version.js` exporting `APP_VERSION` (YYYY-MM-DD.N) and derived `CACHE_NAME`, service worker + web manifest. No Tailwind CDN at runtime. Fonts self-hosted so the app works without signal.

## Users

- **Primary:** the owner, a clinician in IGD / ICU (Indonesia), using a phone at the bedside, often one-handed and under time pressure.
- **Also:** nurses, residents and colleagues the owner shares the link with, who set up syringe pumps and infusions. They must understand every screen without explanation.

## Product Purpose

A fast, trustworthy bedside calculator for three infusion jobs:

1. **Pompa Infus** – syringe/infusion pump rate (mL/jam) and drip rate (tpm, makro 20 gtt/mL and mikro 60 gtt/mL) from dilution + target dose, with 12 ICU/emergency drug presets.
2. **Holliday-Segar** – paediatric maintenance fluid (100-50-20 per day and 4-2-1 per hour).
3. **Target Waktu** – rate needed to finish a volume in a target time.

Success = the right number is read correctly on the first glance, and the inputs that produced it are visible for double-checking.

## Positioning

A personal, Indonesia-specific tool: presets carry local dilution habits, Indonesian product forms, and FORNAS / Non-FORNAS formulary status – something a generic international drip calculator does not carry.

## Operating Context

- Phones at the bedside, in IGD, ICU and wards, any lighting from bright fluorescent wards to a dim ICU at night.
- Light and dark appearance must both be available and chosen by the user (manual toggle), not dark-only.
- Hospital connectivity is unreliable: the app must keep working offline once installed.
- Results are cross-checked manually against protocol; the disclaimer is part of the product.

## Capabilities and Constraints

- Language: Indonesian UI (`lang="id"`), clinical terms as used locally (tpm, mL/jam, mcg/kg/menit, BB, FORNAS).
- Calculation logic and preset data (doses, sediaan, notes) are product truth: preserve exactly unless the owner changes them.
- Dose units supported: mcg/kg/menit, mcg/kg/jam, mcg/menit, mcg/jam, mg/jam, mg/kg/jam.
- Validation limits: Holliday-Segar BB ≤ 120 kg; target time ≤ 720 jam.
- Not for public use, not indexed (`robots.txt` disallow, README).
- Version shown visibly in-app.

## Brand Commitments

- Name: **InfuCalc**. Credit line "Avicenna" kept.
- Disclaimer copy kept: "Alat bantu hitung digital. Verifikasi manual sesuai protokol klinis tetap menjadi tanggung jawab klinisi."

## Evidence on Hand

- Preset drug table in `js/` (moved from the original `index.html`). No testimonials, usage data or clinical validation studies exist; never invent them.

## Product Principles

1. **The number first.** The result is the largest, clearest thing on screen; nothing decorative competes with it.
2. **Show the working.** Every result shows the inputs and formula behind it so a second person can verify it.
3. **Errors are explicit.** Missing or out-of-range input says what is missing, never a silent wrong number.
4. **Works anywhere in the hospital.** Offline, one-handed, legible in any light.
5. **Readable by someone new.** A nurse opening a shared link understands it without training.

## Accessibility & Inclusion

- WCAG AA contrast in both themes; minimum 16px input text (prevents iOS zoom) and readable body sizes; pinch-zoom allowed.
- Touch targets ≥ 44px; works with one thumb.
- Respect `prefers-reduced-motion`.
