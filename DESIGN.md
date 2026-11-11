---
name: InfuCalc
description: Bedside infusion calculator whose results print as user-applied syringe labels.
colors:
  vaso-violet: "#b98fd6"
  label-white: "#ffffff"
  label-print: "#111317"
  ground: "#e6e9ed"
  ground-dark: "#0d0f12"
  label: "#ffffff"
  label-dark: "#191c21"
  label-2: "#f4f6f8"
  label-2-dark: "#20242a"
  ink: "#14171c"
  ink-dark: "#eceef1"
  ink-2: "#474e58"
  ink-2-dark: "#b6bdc6"
  ink-3: "#5f6772"
  ink-3-dark: "#959da8"
  rule: "#d6dbe1"
  rule-dark: "#2b3037"
  rule-2: "#b4bbc4"
  rule-2-dark: "#3d444d"
  bar: "#14171c"
  bar-dark: "#050608"
  bar-ink: "#f3f4f6"
  bar-ink-2: "#a9b0ba"
  bar-ink-2-dark: "#9aa2ad"
  fluid-band: "#14171c"
  fluid-band-dark: "#d9dde2"
  fluid-ink: "#f3f4f6"
  fluid-ink-dark: "#111317"
  field: "#ffffff"
  field-dark: "#111418"
  field-border: "#9aa2ad"
  field-border-dark: "#59616c"
  focus: "#2f5bd3"
  focus-dark: "#8fb0ff"
  error: "#a8201a"
  error-dark: "#ff9b92"
  error-bg: "#fdeceb"
  error-bg-dark: "#3a1714"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(3rem, 14vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 75"
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    letterSpacing: "-0.01em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 105"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 110"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  ui:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  input:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    fontFeature: "'tnum'"
  input-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    fontFeature: "'tnum'"
  field-label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 80"
  tag:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 85"
rounded:
  tag: "3px"
  dot: "4px"
  label: "6px"
spacing:
  xs: "6px"
  sm: "8px"
  cell: "10px"
  md: "12px"
  stack: "14px"
  lg: "16px"
  xl: "24px"
components:
  app-bar:
    backgroundColor: "{colors.bar}"
    textColor: "{colors.bar-ink}"
    padding: "10px 16px"
  tab:
    textColor: "{colors.ink-3}"
    typography: "{typography.ui}"
    height: "52px"
  tab-active:
    textColor: "{colors.ink}"
  sheet:
    backgroundColor: "{colors.label}"
    rounded: "{rounded.label}"
    padding: "16px"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.input}"
    rounded: "{rounded.label}"
    padding: "10px 12px"
    height: "48px"
  input-lg:
    typography: "{typography.input-lg}"
    height: "56px"
  chip:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.label}"
    padding: "0 14px"
    height: "44px"
  chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
  tag-fornas:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    typography: "{typography.tag}"
    rounded: "{rounded.tag}"
    padding: "2px 6px"
  tag-non-fornas:
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.tag}"
    padding: "2px 6px"
  result-label:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "16px"
  result-band-vaso:
    backgroundColor: "{colors.vaso-violet}"
    textColor: "{colors.label-print}"
    typography: "{typography.headline}"
    padding: "12px 16px"
    height: "52px"
  result-band-lain:
    backgroundColor: "{colors.label-white}"
    textColor: "{colors.label-print}"
    typography: "{typography.headline}"
    padding: "12px 16px"
    height: "52px"
  result-band-fluid:
    backgroundColor: "{colors.fluid-band}"
    textColor: "{colors.fluid-ink}"
    typography: "{typography.headline}"
    padding: "12px 16px"
    height: "52px"
  peek:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    padding: "10px 16px"
---

# Design System: InfuCalc

## Overview

**Creative North Star: "The Printed Syringe Label"**

Every result in InfuCalc is a user-applied syringe label: white label stock, near-black print, and a band across the top in the drug's ISO 26825 class colour. The interface around it is the tray the label sits on. Cool tray-grey ground, white input sheets with hairline rules, and an ink-black app bar that stays black in both themes. Nothing glows, nothing floats in glass, and no tab gets its own accent colour. The one chromatic voice is the class colour, and it means exactly what it means on a real syringe.

The system is dense but calm, built for a phone held in one hand at the bedside. Inputs are big (48px fields, 17px numerals) and every number is tabular so columns of figures line up for a second checker. The result is the largest thing on screen: an expanded, extra-bold figure about 48 to 60px tall, with its unit beside it and the working printed underneath in ruled rows, the way a label carries its own audit trail.

Light and dark are both first-class and chosen by the user. Dark theme swaps the stock and ground (dark label on near-black tray) but leaves the class colours untouched, because they are physical pigments, not theme colours.

**Key Characteristics:**
- One typeface, Archivo variable, used at three widths: condensed caps for names and labels, normal for UI, expanded for result figures.
- One chromatic family: ISO 26825 class colours, identical in both themes, always printed with black text.
- White label stock on tray-grey, 1px rules, 6px corners.
- Flat sheets; only the result label (and its phone peek strip) lifts.
- Ink-only marks for everything that is not a drug class: dose range boxes, FORNAS tags, pressed chips, the active tab.

## Colors

A grey-and-ink label shop with a single physical pigment family on top.

### Primary
- **Vasopressor Violet** (`vaso-violet`): the ISO 26825 band for vasopressors and inotropes. Fills the result-label band, the class dot in the preset select, the class chip swatch, and the brand mark's band. Also the text-selection colour.
- **Hypotensive Stripe** (violet with white diagonal stripes, `repeating-linear-gradient(-45deg, vaso-violet 0 7px, white 7px 11px)`): the ISO band for antihypertensives and vasodilators. On the result band the drug name and concentration sit on a small solid-violet backing (3px radius, 2px 8px padding) so the print never crosses a stripe.
- **Lain-lain White** (`label-white`): the "others" class and the manual-mix state. Because white disappears against white stock, its band is drawn with a thin print-black double rule inset (2px print, 3px white, 1px print).

### Neutral
- **Label Print** (`label-print`): text on every class band, in both themes.
- **Tray Grey** (`ground` / `ground-dark`): the page background, the tray the labels lie on.
- **Label Stock** (`label` / `label-dark`): sheets, tabs bar, result label, peek strip.
- **Recessed Stock** (`label-2`): the computed-concentration readout inside a sheet.
- **Ink, Ink 2, Ink 3** (`ink`, `ink-2`, `ink-3`, each with `-dark`): primary text and active marks; secondary text and dt labels; hints, placeholders, inactive tabs and the waiting-state figure.
- **Rule, Rule 2** (`rule`, `rule-2`): 1px hairlines inside and between sheets; the stronger rule edges the result label, class swatches and the peek strip.
- **App Bar Ink** (`bar`, `bar-ink`, `bar-ink-2`): the black bar and its print. The bar stays near-black in dark theme (`bar-dark`).
- **Fluid Band** (`fluid-band` / `fluid-band-dark`, with `fluid-ink`): fluids carry no ISO class, so their band is plain ink, dark on light theme and light grey on dark theme.
- **Field** (`field`, `field-border`): input wells and quick-pick chips.

### Functional
- **Focus Blue** (`focus` / `focus-dark`): focus outlines, input focus border and its 3px halo at 28% mix, and the text caret.
- **Error Red** (`error`, `error-bg`, with `-dark`): the explicit error message box inside the result label, with an alert icon.

### Named Rules
**The Physical Colour Rule.** Class colours are pigments on a sticker. They are identical in light and dark themes and always carry black print (`label-print`). Never tint, dim or re-theme them.

**The One Fill Rule.** The only chromatic fill near a drug is its class colour. Dose ranges, FORNAS / Non-FORNAS tags, notes and preparation warnings are drawn in ink only: solid ink, an ink outline, or ink text. The single exception is the error box inside the result label, which uses the error tint because it replaces the number.

**The Ink Accent Rule.** Selection states (active tab underline, pressed chip, FORNAS tag) are ink, never a hue. A colour on screen always means a drug class.

## Typography

**Display Font:** Archivo variable (width axis 62–125%, weight 100–900), self-hosted, falling back to system-ui.
**Body Font:** Archivo, same file.

**Character:** One grotesque stretched three ways. Condensed bold caps read like printed label text; normal width carries the UI; expanded heavy numerals make the dial-in figure unmistakable.

### Hierarchy
- **Display** (800, clamp 3rem to 3.75rem, line-height 1, wdth 112, tabular): the result figure (mL/jam or mL/hari). Its unit sits beside it at 1.25rem 700 in ink-2.
- **Headline** (800, 1.5rem, wdth 75, uppercase, 0.02em): drug or fluid name in the result band. The peek strip repeats it at 0.9375rem.
- **Figure** (800, 1.625rem, wdth 105, tabular): makro and mikro tpm values; the peek figure uses the same size at wdth 112.
- **Title** (800, 1.125rem, wdth 110): the InfuCalc wordmark in the app bar.
- **Body** (400, 1rem, line-height 1.45): running text; leads cap at 60ch, the disclaimer at 70ch.
- **UI** (600, 0.9375rem): tabs, chips, buttons, preparation names.
- **Input** (500, 1.0625rem, tabular): every field; the single-input Holliday-Segar weight uses Input Large (600, 1.375rem).
- **Field label** (600, 0.875rem): labels above inputs; requirement notes ride inline at 0.8125rem 500 in ink-3.
- **Label** (700, 0.8125rem, wdth 80, uppercase, 0.06em): sheet headings in ink-2. A 0.75rem variant in ink-3 heads sub-groups, table columns and the dose-range box.
- **Tag** (700, 0.6875rem, wdth 85, uppercase, 0.05em): FORNAS status tags.

### Named Rules
**The Three Widths Rule.** Condensed (75–90%) is for names and label headings, normal (100%) for interface text, expanded (105–112%) for result figures. Never use expanded width for words or condensed width for numbers.

**The Tabular Rule.** Every number a clinician might compare (inputs, results, concentrations, reference table, summary rows) is set with tabular, lining numerals.

## Layout

Single column on phones, a two-column workbench from 880px. The container caps at 1040px with a 16px gutter. Below 880px, inputs stack above the result label and the page reserves 96px of bottom padding (plus safe area) for the peek strip. At 880px and up, the panel becomes `minmax(0, 1fr) 420px` with a 24px gap, and the result column is sticky 76px from the top so the label stays beside the inputs while scrolling.

Rhythm is an 8-ish ladder tuned to label density: 6px between a label and its field, 8px inside chip rows, 10px cell padding inside ruled lists, 12px between fields, 14px between blocks inside a sheet, 16px sheet padding and gap between sheets, 24px for the desktop column gap and footer offset. Paired inputs sit in a two-column grid (12px gap, 10px under 520px).

Responsive steps: under 520px the tabs stack icon over label (58px tall, 0.8125rem); under 420px the bar's Reset button collapses to a 44px icon button with a visually hidden label.

### Named Rules
**The Number in Reach Rule.** The result is never more than a glance away. On desktop the label column is sticky; on phones a peek strip slides up from the bottom whenever the active tab has a valid result and its label is less than 35% visible. Tapping the strip scrolls the label into view.

## Elevation & Depth

Flat by default, with depth carried by stock against tray and by 1px rules. Sheets have a border and no shadow. Two elements lift: the result label, because it is the printed object, and the phone peek strip, because it overlays content.

### Shadow Vocabulary
- **Label lift** (`box-shadow: 0 1px 2px rgba(20,23,28,.06), 0 2px 8px rgba(20,23,28,.06)`; dark: `0 1px 2px rgba(0,0,0,.4)`): the result label only.
- **Peek lift** (`box-shadow: 0 -2px 12px rgba(20,23,28,.12)`): the bottom peek strip, cast upward.
- **Focus halo** (`box-shadow: 0 0 0 3px color-mix(in srgb, focus 28%, transparent)`): inputs on focus, paired with a focus-blue border.

### Named Rules
**The One Lift Rule.** Only the result label lifts off the tray. Input sheets, range boxes and lists stay flat and ruled.

## Shapes

Gently cornered label stock (6px) everywhere a surface or control has an edge: sheets, inputs, chips, the result label, concentration readout, range box. Small marks get tighter corners: status tags, the hypotensive name backing and the peek band at 3px, the class dot at 4px, the tab underline at 2px top corners. Borders are 1px hairlines; the dose-range box and the Non-FORNAS tag use a 1.5px ink stroke to read as printed outlines. Class swatches (18px dot, 28 by 14px chip swatch, 10px peek band) always carry a `rule-2` border so white and violet both hold their edge on white stock. The only gradient is the hard-stop hypotensive stripe; there are no smooth gradients.

## Components

### App Bar
- **Character:** an ink strip printed across the top, black in both themes.
- **Content:** brand mark (a miniature white label with a violet band), InfuCalc wordmark with version in 0.75rem bar-ink-2, the subtitle, then a 44px theme toggle (sun / moon) and a Reset text button.
- **States:** hover is white at 10%, active white at 16%. Focus outlines inside the bar always use the light focus blue (`focus-dark`) because the bar is always dark.

### Tabs
- **Style:** three equal segments on label stock, sticky to the top, 52px tall, 20px stroke icon plus label, `rule` bottom border.
- **States:** inactive ink-3, hover and active ink. The active tab gets a 3px ink underline that scales in from the centre (0.25s, ease-out). Tabs never take a class colour.

### Sheets
- **Corner / Background / Border:** 6px, label stock, 1px `rule`. No shadow.
- **Internal padding:** 16px with a 14px stack gap; opens with an uppercase condensed sheet heading.

### Inputs / Fields
- **Style:** 48px tall, field background, 1px `field-border`, 6px corners, 10px 12px padding, tabular numerals. Units (mg, mL, kg, jam) sit inside the right edge as 0.875rem 600 ink-3 suffixes. Selects use a 20px stroked chevron.
- **Hover / Focus:** hover darkens the border to ink-2; focus turns it focus-blue with a 3px halo.
- **Preset select:** carries an 18px class dot on the left (40px left padding, 600 weight). The manual state shows a dashed, empty dot.

### Chips (quick picks)
- **Style:** 44px tall, field background, 1px `field-border`, 6px corners, 0 14px padding, tabular UI text.
- **State:** hover border ink; pressed fills solid ink with label-stock text.

### Status Tags and Range Box
- **FORNAS:** solid ink tag, label-stock text. **Non-FORNAS:** ink text with a 1.5px inset ink outline. **Info:** ink-2 text with a 1px `rule-2` inset outline.
- **Dose range box:** 1.5px ink outline, 6px corners, 12px padding, condensed caps heading, bold tabular range, note in ink-2. No fill.

### Result Label (signature)
- **Structure:** label stock, 1px `rule-2` border, 6px corners, label lift. A 52px band in the class fill holds the drug name (Headline) left and the concentration right; the body (16px padding, 14px gap) holds the caption, the display figure with unit, an optional ruled rate line, a two-cell makro / mikro drip grid with 1px rules, then a ruled summary (`dl`) of the inputs that produced the number.
- **States:** waiting and error grey the figures to ink-3 at 600 weight and hide the summary; error shows a tinted error box with an alert icon and says what is missing.
- **Reprint:** when values change, the figures wipe in left to right (clip-path from 100% inset, 6px slide, 0.32s ease-out), as if the label were feeding out of a printer. Disabled under reduced motion.

### Peek Strip (phones)
- **Style:** fixed to the bottom under 880px, label stock, `rule-2` top border, peek lift, 10px 16px padding plus safe area. A 10px class-fill band on the left, the drug name in condensed caps, then the figure (1.625rem, wdth 112) and unit.
- **Behaviour:** slides up from below (0.28s ease-out) only when the active result is valid and off-screen; tapping scrolls to the full label. Hidden at 880px and up.

## Do's and Don'ts

### Do:
- **Do** print every class band with `label-print` text and keep `vaso-violet` and the stripe identical in light and dark.
- **Do** draw non-class information (dose range, FORNAS status, warnings) in ink only, so the class colour is the only fill near a drug.
- **Do** give white and violet swatches a 1px `rule-2` border, and inset a double print rule on white bands.
- **Do** set every comparable number in tabular lining numerals, and the result figure expanded at weight 800.
- **Do** keep touch targets at 44px minimum and input text at 17px or larger.
- **Do** keep the result reachable: sticky label column on desktop, peek strip on phones.
- **Do** honour `prefers-reduced-motion` by dropping the reprint wipe, tab underline motion and peek slide.

### Don't:
- **Don't** use dark glass cards, neon per-tab accents or glowing metric heroes.
- **Don't** add smooth gradients or glows; the hypotensive stripe is the only gradient and the focus halo the only ring.
- **Don't** introduce a fill colour that is not an ISO 26825 class colour, or use a class colour for UI state.
- **Don't** shadow input sheets; only the result label and the peek strip lift.
- **Don't** set words in expanded width or numbers in condensed width.
