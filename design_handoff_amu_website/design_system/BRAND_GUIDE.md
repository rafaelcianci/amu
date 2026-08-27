# AMU Design System

Design system for **AMU — Studio Criativo** (`AMUdesign`, `@amudesign.3d`, 48 92003-3146 — Santa Catarina, Brazil). AMU is a small, clean, professional **digital marketing** studio for Brazilian clients: brand identity, social content and paid media, run by the same small team.

## Sources given
| Source | What it gave us |
| --- | --- |
| `uploads/amudesign-high-resolution-logo (2).png` / `(3).png` | Stacked lockup on lilac paper — circular "AMU" mark with two dots, wordmark, handle and phone |
| `uploads/amudesign-high-resolution-logo-transparent (1).svg` / `.png` (+ duplicates) | Horizontal lockup, transparent — the primary asset |
| `uploads/amudesign-high-resolution-logo-grayscale*.png` | One-colour variants |
| `uploads/Comfortaa-VariableFont_wght.ttf` | The brand typeface (variable, 300–700) |
| Brief | "Use purple and Comfortaa for the logo. A clean and professional marketing company." |

No codebase, Figma file, website or deck was provided. Colour values are **sampled from the supplied logo files**, not invented: `#340065` (mark and wordmark) on `#F8F7FF` (artboard). Everything else in this system is derived from those two values plus the brief.

### Substitutions to confirm
- **Body typeface — Manrope (Google Fonts).** Comfortaa is a rounded display face and reads poorly at paragraph sizes, so all running text and UI uses Manrope. Send a preferred text face and we'll swap it in one file (`tokens/typography.css`).
- **Icons — Lucide** (`lucide-static@0.544.0`, loaded from unpkg as CSS masks so glyphs inherit `currentColor`). No icon set was supplied; Lucide's thin, round-capped geometry is the closest match to Comfortaa. Send an icon set if one exists.
- **Photography** — none supplied. Every image in the UI kit and in the landing-page template is a **drag-and-drop `<image-slot>`**: drop a real photo onto it in the preview and it stays there. No imagery was generated on your behalf.

---

## Content fundamentals
AMU writes in **Brazilian Portuguese**, in the first person plural — "nós" implied, "você" for the reader. Confident and plain, never salesy.

- **Voice:** the studio speaks as a team of people who do the work themselves. "Atendimento direto com quem faz." "Marketing digital do começo ao fim."
- **Sentence length:** short. One idea per sentence. Paragraphs of two or three lines maximum.
- **Casing:** sentence case everywhere — headings, buttons, labels, nav. Uppercase is reserved for the tiny overline eyebrow (`Serviços`, `Cases selecionados`) and Badges.
- **Headlines:** a claim plus a limit, not a superlative. "Marketing digital com marca e método." "Três frentes, uma estratégia só." Never "a melhor agência", never exclamation marks.
- **Buttons:** verb first, 2–3 words. "Começar um projeto", "Enviar briefing", "Pedir proposta", "Ver cases". Never "Clique aqui", "Saiba mais!!" or single-word "Enviar".
- **Numbers and prices:** always concrete and hedged honestly — "a partir de R$ 6.500", "4 a 6 semanas", "resposta em até 1 dia útil". Performance numbers are stated plainly and never rounded up ("ROAS de 4,2", "queda de 38% no custo por lead"). Currency as `R$ 6.500`, phone as `48 92003-3146`.
- **Form copy:** labels are one or two words ("Nome", "E-mail", "Sobre o projeto"); hints tell the reader what happens next ("Respondemos em até 1 dia útil."). Errors say what to do, not what went wrong: "Informe um e-mail para retornarmos."
- **Confirmations:** past tense, no exclamation — "Briefing enviado".
- **Agency register (added from the reference site):** the copy names the reader's pain before naming the service — "Pare de investir em marketing que não vira venda", "Você já trocou de agência e o resultado continuou o mesmo". Contrast is the workhorse device: "post bonito" vs "pedido rastreado", "métrica de vaidade" vs "venda no CRM". The lead CTA is always a **free diagnosis**, never a quote: "Quero um diagnóstico gratuito", followed by the reassurance line "Sem compromisso · Resposta em até 24h". Claims stay checkable ("5,0 no Google", "95% de renovação") — never "a melhor", never "premium", never trademark-style method names.
- **Emoji: never.** Not in UI, not in headings, not as icons. Status is carried by a Lucide glyph or a Badge dot.
- **Vibe:** calm, uncluttered, generous whitespace, quiet confidence. The opposite of an agency shouting about "disruption".

---

## Visual foundations

**Colour.** One brand colour, used a lot: `--purple-700` `#340065`. Backgrounds are the lilac paper `--purple-25` `#F8F7FF`, cards are pure white, and emphasis sections go **full-bleed purple** (`--surface-inverse`) with `--purple-25` text. The footer is the darkest step, `--purple-900`. Neutrals are all violet-tinted (`--neutral-*`) — never pure grey next to the purple. Status colours exist (`success`/`warning`/`danger`/`info`) but appear only for real system state. **No gradients** on brand surfaces: flat purple, flat lilac, flat white. The only gradient token is `--scrim-bottom`, for text over photography.

**Type.** Comfortaa for the brand and every heading; Manrope for everything else. Hero lines are Comfortaa **Light 300** at `--fs-display-lg` with `--lh-tight` (1.08) and `-0.02em` tracking — the lightness is the brand's signature. Headings are Comfortaa **Medium 500**. Body is Manrope 400 at 1.65 leading, max ~560px measure. The overline eyebrow is Manrope 600, 11px, `0.18em` tracking, uppercase, `--purple-500`. Never bold Comfortaa below 20px; never set body copy in Comfortaa.

**Spacing & layout.** 4px base scale (`--space-1` … `--space-10`). Sections breathe: `--section-y` is `clamp(64px, 9vw, 128px)`. Content max width 1200px (`--container-max`), prose 720px, page gutter `clamp(20px, 5vw, 64px)`. Card padding is 32px (24px on compact cards). Sibling groups are always flex/grid with `gap` — never margin-spaced inline runs. The site header is the only fixed/sticky element.

**Corners.** 4px on badges, 8px on small chrome, **14px on inputs and controls**, **20px on cards**, 32px on large panels and hero imagery, full pill on buttons and chips. Icon buttons and avatars are circles.

**Cards.** White fill, 1px `--border-subtle` hairline, 20px radius, and a shadow so soft it reads as a hairline at rest (`--shadow-xs`). Interactive cards lift `-3px` and go to `--shadow-md` on hover. Never two shadows, never a coloured left border, never a card inside a card.

**Shadows.** All shadows are purple-tinted (`rgba(52,0,101,…)`), large-radius and low-opacity. `xs` resting → `sm` sticky bars → `md` hover and toasts → `lg` modals. `--shadow-focus` is a 3px `rgba(131,72,201,.32)` ring; focus is never removed.

**Borders.** 1px hairlines carry most of the structure: `--border-subtle` between surfaces, `--border-default` on inputs, `--border-strong` (lilac) for outline treatments, `--border-inverse` (`rgba(248,247,255,.24)`) on purple.

**Transparency & blur.** Used in exactly two places: the sticky header (`rgba(248,247,255,.86)` + `--blur-panel`) and the dialog scrim (`--overlay` + blur). Never on cards or text blocks.

**Scroll motion (parallax).** Used sparingly and only in three sanctioned forms: (1) soft lilac circles drifting behind a hero at `0.2–0.4` speed; (2) a full-bleed image band whose photo moves at `~0.3` inside an `overflow:hidden` frame, always under the `--scrim-bottom` gradient with a display-type line on top; (3) a hero image at a very low `0.1–0.12` so it lags the copy almost imperceptibly. Never parallax body text, cards, controls or the logo. Section content enters with `data-reveal` — a 24px rise plus fade at `--dur-reveal` on `--ease-out`, staggered 80–100ms across siblings, played once. All of it collapses to a static page under `prefers-reduced-motion`.

**Motion.** Purposeful and short. `--dur-fast` 120ms for hover/press, `--dur-base` 200ms for controls and tabs, `--dur-slow` 360ms for panels, `--dur-reveal` 640ms for section entrances. Easing is `--ease-standard` `cubic-bezier(.2,.6,.2,1)`; `--ease-out` for things entering. Fades and small translates (≤8px) only — no bounce, no spring, no parallax, no auto-playing carousels. `prefers-reduced-motion` collapses every duration to 1ms.

**Hover / press.** Primary buttons darken one step (`--purple-800`) and gain `--shadow-md`; secondary fills darken from `--purple-100` to `--purple-200`; ghost and outline gain a `--purple-50` wash. Press is a `scale(.975)` — never an opacity change. Links darken rather than underline on hover. Disabled is `opacity: .42` with the fill kept.

**Imagery.** Real photography, cool and clean: soft daylight, low saturation, a lot of white and lilac in frame, no heavy grain, no warm filters, no stock-photo handshakes. Product shots and screen mockups sit on flat lilac or white. Every image placeholder in this system is an `<image-slot>` the user fills by dropping a file; never generate or substitute stock imagery for AMU. Images use 20–32px radius except full-bleed sections. Text over photography always sits on `--scrim-bottom` or a solid lilac capsule — never directly on the image.

**Backgrounds.** Flat colour only: lilac paper, white, or full-bleed purple. No patterns, no textures, no hand-drawn illustration, no mesh gradients. The purple band is the brand's one strong rhythmic move — roughly one per page.

---

## Iconography
- **System:** [Lucide](https://lucide.dev) via `lucide-static@0.544.0`. The `Icon` component renders each glyph as a CSS mask, so it inherits `currentColor` and can never drift off-palette.
- **Sizes:** 16px inline/caption, **20px default** (controls, list rows), 24px feature bullets. Stroke stays at Lucide's default 2 with round caps — matching Comfortaa's rounded terminals.
- **Colour:** `--purple-700` on light, `--purple-25` on purple, `--purple-500` for supporting affordances. Semantic tones only in Toasts and status rows.
- **Common glyphs:** `arrow-right`, `arrow-up-right`, `check`, `chevron-down`, `x`, `instagram`, `phone`, `message-circle`, `map-pin`, `clock`, `sparkles`, `palette`, `box`, `download`, `play`.
- **No icon font**, no PNG icons, no sprite sheet, **no emoji**, no unicode glyphs (•, →) used as icons — use `Icon`. Never hand-draw an SVG for AMU.
- **The logo is not an icon.** For avatars and favicons use the stacked lockup (`assets/logo-stacked-lilac.png`), never the isolated circle mark redrawn.

---

## Reference used
The client supplied **https://profitpromarketing.com.br/** (Profit Pró Marketing, Florianópolis) as a *content and structure* reference — not a visual one. What was adopted: the page skeleton (manifesto → soluções → método em fases → comparativo com/sem estratégia → prova social → FAQ longo → CTA de diagnóstico), the depth of the service descriptions (channels, package sizes, what's included, price band), the pain-first headline register, and the free-diagnosis CTA with a 24h response promise. What was deliberately **not** taken: their visual identity, their dark-theme treatment, their proprietary product and method names, and any of their copy verbatim. All AMU copy here is original.

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this guide. `SKILL.md` — Agent Skills wrapper.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (Comfortaa `@font-face` + Manrope import), `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`.

**`assets/`** — `logo.svg` (primary horizontal lockup), `logo-horizontal.png`, `logo-horizontal-white.png` (recoloured from the supplied transparent PNG, for purple backgrounds), `logo-stacked-lilac.png`, `logo-grayscale.png`, `fonts/Comfortaa-Variable.ttf`.

**`components/`** — 16 components, all with `.d.ts` + `.prompt.md`:
- `core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **Logo**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- `navigation/` — **Tabs**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**

*Intentional additions:* no source defined a component inventory, so this is the standard brand-guidelines set. `Icon` wraps the Lucide glyph set so colour and size stay on-token; `Logo` exists so the real asset files are used instead of retyped text.

**`guidelines/`** — 19 specimen cards feeding the Design System tab, grouped **Colors** (brand scale, neutrals, status, semantic aliases), **Type** (display, headings, body, overline, pairing), **Spacing** (scale, in-use, radii, elevation, motion), **Brand** (primary lockup, inverse lockup, variants, clear space, iconography).

**`ui_kits/website/`** — the AMUdesign marketing site: `index.html` (click-through), `Chrome.jsx`, `HomeScreen.jsx`, `ServicesScreen.jsx`, `CasesScreen.jsx`, `ContactScreen.jsx`, `README.md`.

**`templates/`** — five page templates consuming projects can copy. Each folder holds its own `ds-base.js` (loads `styles.css` + the component bundle) and every image position is an `<image-slot>`. All five share one sticky header and cross-link to each other, so the set works as a full site:
- `landing-page/LandingPage.dc.html` — home: hero with trust stats, full-bleed parallax band, manifesto with three pillars, six-solution grid, 4-phase method, com/sem-estratégia comparison, testimonial, 6-question FAQ, diagnosis CTA, full footer.
- `metodo/Metodo.dc.html` — the method in depth: parallax hero with floating lilac shapes, quoted image band, one expanded card per phase (deliverables + duration), CTA.
- `sobre/Sobre.dc.html` — institutional: studio story, four principles, purple team band, testimonial, CTA.
- `social-media/SocialMedia.dc.html` — solution-detail page (reusable for the other five solutions): hero, three metric cards, image band, what's included, three price packages, channel list, related solutions, service-specific FAQ.
- `blog/Blog.dc.html` — editorial index: theme filters, featured article, parallax band, six-article grid, newsletter capture.

**`parallax.js`** — the motion helper all page templates load. `data-parallax="0.3"` translates an element on scroll (negative reverses), `data-parallax-bg` shifts a background position, `data-reveal` (optionally `data-reveal="120"` for a stagger) fades and rises an element once as it enters the viewport. Fully disabled under `prefers-reduced-motion`; re-scans the DOM as templates stream in.

**`image-slot.js`** — the drag-and-drop image placeholder used by the kit and the template.

### Service lines
The three service lines described throughout this system are **Identidade visual**, **Social media** and **Tráfego pago**. The focus is digital marketing end to end; 3D visualisation and print/packaging are deliberately not part of the offer here (both removed at the client's request), even though the studio's Instagram handle is `@amudesign.3d`.
