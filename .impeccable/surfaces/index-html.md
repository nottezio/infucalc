---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: InfuCalc app shell (index.html)

## Scope and mode
Whole app: three calculator tabs (Pompa Infus, Holliday-Segar, Target Waktu). Mode: Operate.

## Task
Clinician or nurse at the bedside, phone, one hand: enter dilution/dose or weight or volume+time, read the pump rate (mL/jam) and drip rate (tpm) correctly the first time, double-check the inputs that produced it. States: waiting for input, missing weight, out-of-range, result.

## Constraints
Keep the 3-tab structure and order (owner, 2026-11-11). Preserve calculation logic and preset content. Light/dark selectable by user. Offline PWA.

## Direction contract
THESIS: The result is a printed syringe label, not a dashboard tile. Refuses the category default of dark glass cards with neon per-tab accents and glowing metric heroes.
OWN-WORLD: User-applied syringe label system (ISO 26825 colour classes). White label stock on a cool tray-grey ground, near-black print, an ink-black app bar. Class colours are physical and identical in both themes: vasopressor violet, hypotensive violet with white diagonal stripes, "lain-lain" white; fluids carry a plain ink band. Archivo, condensed bold caps for drug names and labels, normal width for UI, expanded tabular numerals for the result. 6px label corners, 1px rules, no gradients, no glow.
STORY: The user sees the drug identified by colour, sees the number to dial in, and sees the working beneath it, so a second person can verify the same label.
FIRST VIEWPORT: Ink app bar (name, version, theme toggle, reset) over standard three-segment tabs. Pompa Infus: preset select with class colour band, dilution inputs, dose inputs; the result label below, with a class band carrying drug name + concentration, then the mL/jam figure at about 56px, then makro/mikro tpm.
FORM: Syringe drug-label colour coding, position 1 of 7 on the ordered list (owner picked IMPECCABLE'S PICK over assigned #7). seed:5b1e2ac4ce4256bc
SIGNATURE: the result label, band in class colour (striped for hypotensives) with drug name in condensed caps; it reprints with a short slide-in when values change.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
Drug-class assignments for presets need owner confirmation.
