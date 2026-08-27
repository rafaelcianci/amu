# Handoff: AMUdesign marketing website

## Overview
Build the public marketing website for **AMU — Studio Criativo / AMUdesign**, a digital marketing studio in Santa Catarina, Brazil (Instagram `@amudesign.3d`, phone `48 92003-3146`). The site sells three-to-six service lines, and its single conversion goal is a **free strategy diagnosis** ("diagnóstico gratuito", promise: reply within 24h). Language is **Brazilian Portuguese only**. Five pages are designed: Home/Manifesto, Método, Sobre, a solution-detail page (Social media), and Blog index.

## About the design files
The files in `design_references/pages/` are **design references authored in HTML**, not production code. They are `.dc.html` documents from a design tool: everything inside them is plain HTML with **inline styles** referencing CSS custom properties, so they read fine in any editor and open in a browser, but two constructs are tool-specific and must be replaced:

- `<x-import component-from-global-scope="AMUDesignSystem_1cce44.Button" size="lg" iconRight="arrow-right">Label</x-import>` → the design system's `<Button size="lg" iconRight="arrow-right">Label</Button>`. Same for any other component name after the dot.
- `<image-slot id="…" shape="rounded" radius="32" placeholder="Foto — … (4:5)">` → a real `<img>` / `next/image`. The `placeholder` text states **what the photo is and its aspect ratio**; honour that ratio. The `radius` attribute is the corner radius in px.
- `<helmet>…</helmet>` → whatever the framework's document `<head>` mechanism is. The `ds-base.js` script inside it only exists to load the design system in the design tool — drop it.

Your task is to **recreate these pages in the target environment** using its own conventions. If no codebase exists yet, **Next.js (App Router) + TypeScript** is the recommended choice: the site is content-driven, needs good SEO in pt-BR, and the design system is already React with plain CSS custom properties (no Tailwind assumed, no CSS-in-JS library, no npm UI kit). Port the components from `design_system/COMPONENTS.md` as-is (each is self-contained, React-only, with its props type alongside), or re-implement them against the codebase's existing primitives if one already has a button/input layer.

## Fidelity
**High-fidelity.** Colours, type sizes, spacing, radii, shadows, durations and easings are final and are all expressed as CSS custom properties in `design_system/tokens/`. Copy them verbatim — do not round values to a 4/8px grid or swap in framework defaults. Reproduce the layouts pixel-accurately at the 1440px design width. The only intentionally unfinished parts are **photography** (every `image-slot`) and the **placeholder numbers/names** flagunder "Content still to be supplied".

---

## Global chrome (all five pages)

### Sticky header
- Full-width, `position: sticky; top: 0; z-index: 30`.
- Background `rgba(248,247,255,.88)` + `backdrop-filter: blur(14px)`; bottom border `1px solid var(--border-subtle)`.
- Inner rail: `max-width: 1200px`, `margin: 0 auto`, `padding: 0 48px`, `height: 80px`, flex, `space-between`, `gap: 32px`.
- Left: `assets/logo.svg` at `height: 30px`, linking home.
- Centre: nav, flex `gap: 28px`, `font-size: .875rem`, `font-weight: 500`, colour `var(--neutral-600)`. Items: **Manifesto** (home), **Soluções**, **Método**, **Sobre**, **Blog**. The current page's item is `var(--purple-700)` at weight 600.
- Right: `<Button size="sm" iconRight="arrow-right">Diagnóstico gratuito</Button>`.
- Mobile (not designed, apply the system's rules): collapse nav into a sheet triggered by an `IconButton icon="menu"`; keep the CTA visible.

### Footer
Two variants:
- **Full** (home only): background `var(--surface-inverse-deep)` `#1C0035`, `padding: 64px 0 32px`. Inner rail 1200/48. Three columns `1.4fr 1fr 1fr`, `gap: 48px`, with a `1px solid var(--border-inverse)` bottom rule and `padding-bottom: 32px`. Col 1: `logo-horizontal-white.png` at 30px + tagline "Marketing digital para marcas que querem crescer com estratégia, estética e resultado." (`.875rem`, `line-height: 1.65`, `max-width: 340px`). Col 2 heading "Soluções" (overline style) + five links. Col 3 heading "Contato" + `@amudesign.3d`, `48 92003-3146`, `Santa Catarina, Brasil`. Bottom row `padding-top: 24px`, `.8125rem`, `var(--purple-300)`: "© 2026 AMUdesign. Todos os direitos reservados." / "Atendemos todo o Brasil."
- **Compact** (other four pages): same background, `padding: 48px 0`, one row, `space-between`: white logo at 26px and `@amudesign.3d · 48 92003-3146 · Santa Catarina` in `.8125rem`.

### Recurring section patterns
- **Section rail**: `max-width: 1200px; margin: 0 auto; padding: 96px 48px`.
- **Overline / eyebrow**: `font-size: .6875rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: var(--purple-500)` (`var(--purple-300)` on purple).
- **Section h2**: Comfortaa 500, `2rem`, colour `var(--purple-700)`, `margin: 12px 0 …`.
- **White card**: `background: var(--surface-card)`, `border: 1px solid var(--border-subtle)`, `border-radius: 20px`, `padding: 32px`, `box-shadow: var(--shadow-xs)`.
- **Full-bleed purple band**: `background: var(--surface-inverse)`, `padding: 96px 0`, headings `var(--purple-25)`, body `var(--purple-200)`, inner cards `rgba(248,247,255,.06)` with `1px solid var(--border-inverse)` and `border-radius: 20px`.
- **Parallax image band** (see Interactions): `position: relative; height: 420px; overflow: hidden`, image absolutely inset `-90px 0` with `data-parallax="0.3"`, a `linear-gradient(to top, rgba(28,0,53,.78), rgba(28,0,53,.18))` scrim over it, and a Comfortaa 300 `2rem` line in `var(--purple-25)` pinned bottom-left inside the 1200/48 rail.
- **Closing CTA**: rounded `32px` panel, `padding: 64px`, flex `space-between`, `gap: 48px`. Purple variant (`var(--surface-inverse)`) with an `inverse` Button, or lilac variant (`var(--surface-subtle)`) with a `primary` Button. Purple version adds "Resposta em até 24h." in `.8125rem` `var(--purple-300)` under the button.

---

## Screens

### 1. Home / Manifesto — `LandingPage.dc.html`
Purpose: convert a cold visitor into a booked free diagnosis.

1. **Hero** — `position: relative; overflow: hidden`. Two decorative circles behind the content: `560×560` `var(--purple-100)` at `top:-140px; right:-160px`, `opacity:.7`, `data-parallax="0.4"`; and `360×360` `var(--purple-50)` at `bottom:-160px; left:-120px`, `data-parallax="-0.22"`. Content grid `1.05fr .95fr`, `gap: 64px`, `padding: 96px 48px`, centred. Left column: overline "Santa Catarina · Marketing digital · Estratégia"; h1 Comfortaa **300**, `3.5rem`, `line-height: 1.08`, `letter-spacing: -.02em`, `var(--purple-700)`: "Pare de investir em marketing que não vira venda."; lede `1.125rem`/`1.65` `var(--text-muted)` `max-width: 500px`: "Sua agência entrega post bonito e relatório de curtida. Nós construímos marca, conteúdo e mídia paga como um sistema só, com cada real rastreado do clique até a venda."; button row (`Button size="lg" iconRight="arrow-right"` → "Quero um diagnóstico gratuito", plus `variant="ghost" size="lg"` → "Ver o método"); reassurance line `.8125rem`: "Sem compromisso · Resposta em até 24h"; stat row `gap: 48px`, `margin-top: 48px`, `padding-top: 32px`, top border `--border-subtle` — each stat is Comfortaa 300 `2rem` `var(--purple-700)` over `.8125rem` `var(--text-muted)`: **5,0** avaliação no Google / **95%** renovação de clientes / **+60** projetos entregues. Right column: hero image, aspect `4/5`, radius 32, `data-parallax="0.12"`.
2. **Parallax band** — line: "Marca, conteúdo e mídia paga operando como um sistema só."
3. **Manifesto** (purple band) — overline "Manifesto"; h2 Comfortaa **300** `2.5rem`/`1.25`, `letter-spacing: -.02em`, `var(--purple-25)`, `max-width: 820px`: "Você já trocou de agência e o resultado continuou o mesmo. O problema nunca foi a execução — era a falta de estratégia."; lede `1.125rem` `var(--purple-200)` `max-width: 660px`: "Já pagou por tráfego que gerou clique e não gerou pedido. Já recebeu relatório bonito que não mudou nada. É exatamente isso que a AMU resolve: diagnóstico antes de peça, estratégia antes de campanha e número real antes de opinião."; then three translucent cards (`gap: 24px`, `margin-top: 48px`): **Diagnóstico primeiro** / **Rastreabilidade total** / **Estratégia sob medida**, each with a `1.25rem` Comfortaa 500 heading and `.875rem` body.
4. **Soluções** — overline; h2 "Marca, conteúdo e mídia paga — integrados, não avulsos" (`max-width: 680px`); lede "Cada frente alimenta a próxima. O resultado é composto, não isolado. Você pode contratar uma só ou o pacote completo."; 3-column grid `gap: 24px`, six cards. Cards 01–03 have a `16/10` image at the top (card padding becomes `0 0 32px`, `overflow: hidden`, inner text block `padding: 24px 32px 0`); cards 04–05 are text-only at `padding: 32px`; card 06 is a purple card (`var(--surface-inverse)`, radius 20, `padding: 32px`, flex column, `space-between`) with an `inverse` `size="sm"` Button "Falar sobre o pacote". Each card: mono `.6875rem` `var(--purple-400)` index (`01`…`06`), Comfortaa 500 `1.25rem` title, `.875rem`/`1.65` `var(--text-muted)` body, then a `.8125rem` weight-600 `var(--purple-500)` price line.
   - 01 **Social media** — "Instagram, LinkedIn e Google Meu Negócio. Pacotes de 8 a 16 posts por mês com calendário editorial ligado ao funil." · a partir de R$ 2.200/mês
   - 02 **Tráfego pago** — "Google, Meta, TikTok e LinkedIn Ads com criativos, UTM ponta a ponta e relatório mensal acionável." · a partir de R$ 1.800/mês + verba
   - 03 **Sites e landing pages** — "Páginas feitas para converter: velocidade, SEO técnico, mobile impecável e testes de conversão." · a partir de R$ 4.900
   - 04 **Branding e identidade** — "Posicionamento, marca, tom de voz e manual de aplicação — a base que faz o resto funcionar." · a partir de R$ 6.500 · 4 a 6 semanas
   - 05 **Consultoria estratégica** — "Para quem já tem time interno: diagnóstico, plano de canais e acompanhamento mensal das metas." · a partir de R$ 3.500/mês
   - 06 **Pacote completo** — "Marca, conteúdo, mídia e página de conversão em um só contrato, com um único ponto de contato."
5. **Método** — overline "Método"; h2 "Quatro fases, tudo à vista"; lede "Cada fase alimenta a próxima. Você sabe onde o projeto está e o que vem depois — nada é aleatório."; 2×2 grid of white cards. Each: a row of mono `.8125rem` `var(--purple-400)` number + overline phase name, Comfortaa 500 `1.25rem` title, `.875rem` body, then a flex-column list of four `.8125rem` items at `gap: 8px`. Phases: **01 Diagnóstico — Imersão profunda**, **02 Posicionamento — Arquitetura de marca**, **03 Execução — Operação integrada**, **04 Escala — Crescimento composto** (exact bullet copy in the HTML).
6. **Diferenciais** (lilac band, `var(--surface-subtle)`, `padding: 96px 0`) — h2 "O que muda quando a estratégia vem antes da peça"; two side-by-side panels. Left "Com a AMU": white, `border: 1px solid var(--border-strong)`, `box-shadow: var(--shadow-sm)`, h3 Comfortaa 500 `1.5rem` `var(--purple-700)` "Resultado rastreável, mês após mês", four items (`.875rem` weight-600 purple label + `.8125rem` muted line). Right "Sem estratégia": transparent, `border: 1px solid var(--border-default)`, all text in `var(--neutral-600)` / `var(--text-muted)`, h3 "Investimento perdido, resultado invisível", four mirrored items. Below, a testimonial card (white, radius 32, `padding: 48px`, grid `auto 1fr`, `gap: 48px`): 120px circular photo + Comfortaa 300 `1.5rem`/`1.45` quote and attribution "**Marina Duarte** · Serra Café".
7. **FAQ** — h2 "O que todo cliente pergunta antes de contratar"; 2-column grid of six white cards, each with a Comfortaa 500 `1.125rem` question and `.875rem` answer. Questions: tempo de resultado / verba inclusa / prazo mínimo / acompanhamento / atendimento fora de SC / contratar tudo junto.
8. **Closing CTA** (purple) — "Sua marca pode mais." + "Quinze minutos de conversa mostram o que está travando o crescimento. Diagnóstico gratuito, sem compromisso." + `inverse` Button "Agendar diagnóstico".
9. **Full footer.**

### 2. Método — `Metodo.dc.html`
Purpose: prove there is a real methodology behind the pitch.
1. **Hero** `padding: 120px 0 96px`, `overflow: hidden`, two parallax circles (`560×560` `--purple-100` at `0.4` with a 4px blur, `380×380` `--purple-50` at `-0.25`). Overline "Metodologia"; h1 Comfortaa 300 `3.5rem` "Quatro fases que transformam marca invisível em referência." (`max-width: 820px`); lede `max-width: 620px`; CTA + "Sem compromisso · Resposta em até 24h".
2. **Parallax band** — "Semanas mergulhando na sua marca antes da primeira peça sair."
3. **Four phase cards**, stacked with `gap: 32px`, each `border-radius: 32px`, `padding: 48px`, grid `.9fr 1.1fr`, `gap: 48px`, `align-items: start`. Left: giant Comfortaa 300 `3rem` `var(--purple-200)` number + overline phase + Comfortaa 500 `1.5rem` title + `.875rem` intro + a `.8125rem` weight-600 `var(--purple-600)` duration ("2 a 3 semanas", "3 a 4 semanas", "rotina mensal", "contínuo"). Right: 2×2 grid of `var(--surface-subtle)` tiles, `border-radius: 14px`, `padding: 20px`, each a `.875rem` weight-600 purple label + `.8125rem` muted line. **Card 04 is the purple variant**: `var(--surface-inverse)`, number in `var(--purple-400)`, overline/duration in `var(--purple-300)`, title `var(--purple-25)`, body `var(--purple-200)`, tiles `rgba(248,247,255,.08)` with `1px solid var(--border-inverse)`.
4. **Closing CTA** (lilac) — "Quer ver a fase 01 aplicada na sua marca?"
5. **Compact footer.**

### 3. Sobre — `Sobre.dc.html`
Purpose: make a small studio feel like the safer choice.
1. **Hero** `padding: 120px 48px 96px`, grid `1.05fr .95fr`. h1 "Um estúdio pequeno, por escolha."; lede about the founding rationale; stat row **2018** primeiro cliente / **+60** projetos entregues / **95%** renovação de clientes. Right: `4/5` image, radius 32, `data-parallax="0.12"`.
2. **Parallax band** (`height: 460px`, image inset `-100px 0`, scrim `.8 → .16`) — "Aqui você fala com quem executa. Não existe camada entre você e o trabalho."
3. **Princípios** — h2 "Quatro princípios que valem mais que qualquer proposta"; 2×2 white cards with mono index: **Dado antes de opinião**, **Poucos clientes por vez**, **Conta aberta**, **Sem letra miúda**.
4. **Time** (purple band) — overline "Time", h2 "Quem vai atender você", lede; three columns, each a `1/1` image at radius 20, then Comfortaa `1.125rem` `var(--purple-25)` name and `.8125rem` `var(--purple-300)` role (Estratégia e atendimento / Direção de arte e conteúdo / Mídia paga e dados). **Names are placeholders.**
5. **Testimonial** — same card pattern as home; quote "Já passei por três agências. É a primeira vez que a pessoa da reunião é a mesma que mexe na campanha." — **Rafael Menezes** · Casa Pinhão.
6. **Closing CTA** (purple) — "Vamos conversar 15 minutos?"
7. **Compact footer.**

### 4. Solution detail (Social media) — `SocialMedia.dc.html`
Purpose: sell one service line in depth. **This layout is the template for the other five solutions** — build it as one dynamic route (`/servicos/[slug]`) driven by content, not five hand-built pages.
1. **Hero** `padding: 96px 0`, `overflow: hidden`, one `520×520` `--purple-100` circle at `top:-160px; left:-160px`, `data-parallax="0.35"`. Overline "Soluções · 01 de 06"; h1 Comfortaa 300 `3.25rem`/`1.1` "Social media com estratégia, não volume."; lede; `Button size="lg"` "Pedir proposta" + `.8125rem` price note "a partir de R$ 2.200/mês". Right: `4/5` image at `data-parallax="0.1"`.
2. **Three metric cards** — white cards: overline label + Comfortaa 300 `2rem` `var(--purple-700)` value + `.8125rem` note. Alcance/**Rastreado**, Salvamentos/**No painel**, Cliques/**Com UTM**.
3. **Parallax band** — "Mais que fazer post: construir presença que transforma audiência em cliente."
4. **What's included + pricing** — grid `1.1fr .9fr`, `gap: 64px`, `align-items: start`. Left: h2 "Tudo o que entra no mês" over four white rows (`border-radius: 14px`, `padding: 24px`, `.9375rem` weight-600 purple title + `.875rem` body). Right column, `gap: 24px`: a **packages** card (white, `border: 1px solid var(--border-strong)`, `box-shadow: var(--shadow-sm)`, radius 20, `padding: 32px`) listing three tiers as `space-between` rows separated by `1px solid var(--border-subtle)` — **Essencial** 8 posts/mês · 1 canal — R$ 2.200/mês; **Consistente** 12 posts/mês · 2 canais — R$ 3.400/mês; **Autoridade** 16 posts/mês · 3 canais + vídeo — R$ 4.900/mês — plus the note "Contrato mínimo de 3 meses. Produção começa depois do calendário aprovado."; and a **channels** purple card with five pill chips (`border: 1px solid var(--border-inverse)`, `border-radius: 999px`, `padding: 6px 14px`, `.8125rem`, `var(--purple-25)`): Instagram, LinkedIn, Google Meu Negócio, YouTube Shorts, TikTok.
5. **Related solutions** — h2 "Funciona ainda melhor com"; three white link-cards (02 Tráfego pago, 03 Sites e landing pages, 04 Branding e identidade).
6. **Service FAQ** — h2 "Sobre social media, especificamente"; 2×2 lilac cards (`var(--surface-subtle)`, radius 20, `padding: 32px`).
7. **Closing CTA** (purple) — "Seu feed pode trabalhar melhor."
8. **Compact footer.**

### 5. Blog index — `Blog.dc.html`
Purpose: SEO surface + proof of expertise.
1. **Header block** `padding: 96px 48px 48px` — overline "Blog"; h1 Comfortaa 300 `3.25rem` "Marketing sem achismo, explicado por quem executa."; lede; filter chips row (`gap: 8px`, `flex-wrap`): active chip is solid `var(--purple-700)` with `var(--purple-25)` text; inactive chips are transparent with `1px solid var(--border-default)` and `var(--neutral-700)` text; `border-radius: 999px`, `padding: 6px 16px`, `.875rem`, weight 500. Themes: Todos, Tráfego pago, Social media, Branding, Dados.
2. **Featured article** — white card, radius 32, `padding: 16px`, grid `1.1fr .9fr`, `gap: 48px`, centred; left a `16/11` image at radius 20; right (`padding: 32px 32px 32px 0`) a solid purple "Destaque" chip (radius 4, `padding: 5px 10px`, overline type) + category/read-time line, Comfortaa 500 `2rem` title "Por que seu anúncio gera clique e não gera pedido", `1rem` excerpt, date.
3. **Parallax band** (`height: 360px`) — "Publicamos o que testamos — inclusive o que não funcionou."
4. **Article grid** — 3 columns, `gap: 32px`, six entries. Each: `4/3` image radius 20; meta row with a lilac category chip (`var(--purple-100)` bg, `var(--purple-700)` text, radius 4) + read time; Comfortaa 500 `1.25rem`/`1.3` title; `.875rem` excerpt; `.8125rem` muted date. Titles/dates are in the HTML.
5. **Newsletter CTA** (purple panel) — "Um e-mail por mês, sem enrolação." + email input (`height: 54px`, `width: 280px`, radius 14, `border: 1px solid var(--border-inverse)`, `background: rgba(248,247,255,.08)`, text `var(--purple-25)`) + `inverse` Button "Assinar".
6. **Compact footer.**

---

## Interactions & behaviour

### Scroll motion — `design_references/parallax.js`
Reference implementation (vanilla, ~90 lines, no dependency). Port it or use the framework's equivalent, keeping the same three sanctioned uses and nothing more:
- `data-parallax="<speed>"` — `translate3d(0, p * speed * -100px, 0)` where `p` is the element's centre position through the viewport, normalised to roughly `-1…1`. Driven by a passive `scroll` listener throttled through `requestAnimationFrame`. Negative speed reverses direction.
- `data-parallax-bg="<speed>"` — same maths applied to `background-position` instead of a transform.
- `data-reveal` / `data-reveal="<ms>"` — initial `opacity: 0; transform: translateY(24px)`, transition `opacity 640ms cubic-bezier(.16,1,.3,1), transform 640ms …` with the attribute value as `transition-delay`; released once by an `IntersectionObserver` (`rootMargin: '0px 0px -12% 0px'`, `threshold: .08`) which then unobserves. Stagger siblings by 80–100ms.
- **Never** parallax body text, cards, controls or the logo.
- Under `prefers-reduced-motion: reduce` the script sets every revealed element to its final state and skips all scroll work. Preserve this exactly.

### Component states
- **Button**: hover — primary darkens to `var(--purple-800)` and gains `var(--shadow-md)`; secondary `--purple-100 → --purple-200`; ghost/outline get a `var(--purple-50)` wash; inverse goes to `#fff`. Press — `transform: scale(.975)` (never an opacity change). Disabled — `opacity: .42`, fill kept, `cursor: not-allowed`. Transition `var(--transition-control)`.
- **Card** with `interactive`: `translateY(-3px)` and `--shadow-xs → --shadow-md`.
- **Inputs**: focus border `var(--purple-400)` + `box-shadow: var(--shadow-focus)` (`0 0 0 3px rgba(131,72,201,.32)`). Invalid border `var(--danger-600)` and the hint text turns `var(--danger-600)`. Never remove focus rings.
- **Tag**: selected fills solid `var(--purple-700)`; unselected hover washes `var(--purple-50)`.
- **Tabs**: underline variant — active item weight 600, `var(--purple-700)`, `2px solid var(--purple-700)` bottom border; pill variant — active pill filled purple inside a `var(--purple-50)` track.
- **Links**: darken `var(--text-link)` → `var(--text-link-hover)`; no underline appearing on hover.
- **Tooltip**: 120ms opacity fade, `var(--purple-900)` background, `var(--purple-25)` text.

### Forms
The diagnosis form (designed in the design system's website UI kit, not in these five pages) has: Nome, E-mail (required — empty submit shows a `danger` Toast "Não foi possível enviar / Informe um e-mail válido para retornarmos."), Serviço select, "Quando começa", a multiline "Sobre o projeto", a budget radio group, an LGPD consent checkbox gating submit, and a newsletter switch. Success opens a Dialog "Briefing enviado / Obrigado! Um estrategista responde em até 24h." Newsletter signup on the blog needs only email + a success state. Wire both to whatever backend the project uses; validation is client-side and inline.

### Responsive
Only the 1440px desktop layout was designed. Apply: single column below ~900px; `--gutter` is already `clamp(20px, 5vw, 64px)` and `--section-y` is `clamp(64px, 9vw, 128px)`; hero h1 should use `var(--fs-display-lg)` (`clamp(2.5rem, 4.5vw, 3.75rem)`) rather than the fixed `3.5rem` once fluid; 3-column grids go to 2 then 1; parallax bands shorten to ~280px; tap targets stay ≥44px.

## State management
Minimal — this is a content site. Local component state only: nav sheet open/closed, blog category filter, solution tab (if a tabbed services page is built), form field values + validation + submitted flag, toast/dialog visibility. No global store needed. Content (solutions, phases, articles, FAQ, packages) should live in typed data files or a CMS, not in JSX — the solution page especially is designed to be one template over six records.

## Design tokens
Ship `design_system/styles.css` (an `@import` list only) plus the six files in `design_system/tokens/`. Do not re-declare these values inline.

- **Brand purple**: `--purple-950 #12001F`, `-900 #1C0035`, `-800 #260049`, **`-700 #340065` (brand anchor, sampled from the logo)**, `-600 #4A0F87`, `-500 #6224A8`, `-400 #8348C9`, `-300 #A97FE0`, `-200 #CFB6F0`, `-100 #E7DCFA`, `-50 #F1EBFC`, `-25 #F8F7FF` (lilac paper).
- **Neutrals** (violet-tinted, never pure grey): `--ink #160F22`, `-800 #2A2336`, `-700 #453E52`, `-600 #615A70`, `-500 #847D92`, `-400 #A9A3B5`, `-300 #CBC7D5`, `-200 #E3E0EA`, `-100 #F1F0F5`, `-50 #F9F8FB`, `--white #FFFFFF`.
- **Status** (real state only): success `#1F7A55`/`#DCF3E9`, warning `#9A6407`/`#FBEED2`, danger `#B3223B`/`#FBE0E5`, info `#2A5FC9`/`#DEE7FB`.
- **Semantic aliases** — use these, not the raw scale: `--text-strong/-body/-muted/-inverse/-link/-link-hover`, `--surface-page/-card/-subtle/-inverse/-inverse-deep`, `--border-subtle/-default/-strong/-inverse`, `--action-primary/-primary-hover/-primary-active/-secondary-bg/-ghost-hover`, `--focus-ring`, `--overlay rgba(22,15,34,.44)`.
- **Type**: `--font-display: "Comfortaa"` (variable TTF shipped in `design_system/assets/fonts/`, weights 300–700) for the logo and all headings; `--font-text: "Manrope"` (Google Fonts, 400–800) for all running text and UI. Scale: display-xl `clamp(3rem,6vw,5rem)`, display-lg `clamp(2.5rem,4.5vw,3.75rem)`, display-md `2.5rem`, h1 `2rem`, h2 `1.5rem`, h3 `1.25rem`, body-lg `1.125rem`, body `1rem`, body-sm `.875rem`, caption `.8125rem`, overline `.6875rem`. Line heights `1.08 / 1.25 / 1.5 / 1.65`. Tracking: display `-.02em`, overline `.18em`, wide `.04em` (buttons).
- **Spacing** (4px base): `4 8 12 16 24 32 48 64 96 128`. Container 1200 / narrow 720. Control heights 34 / 44 / 54.
- **Radii**: `4` badges, `8` small chrome, `14` inputs & tiles, `20` cards, `32` large panels & hero imagery, `999` pills, `50%` circles.
- **Shadows** (all purple-tinted): xs `0 1px 2px rgba(52,0,101,.06)`, sm `0 2px 8px rgba(52,0,101,.07)`, md `0 10px 28px -12px rgba(52,0,101,.18)`, lg `0 24px 60px -24px rgba(52,0,101,.24)`, focus `0 0 0 3px rgba(131,72,201,.32)`. Blur `blur(14px)`. Scrim `linear-gradient(to top, rgba(28,0,53,.72), rgba(28,0,53,0))`.
- **Motion**: durations `120 / 200 / 360 / 640ms`; easings `--ease-standard cubic-bezier(.2,.6,.2,1)`, `--ease-out cubic-bezier(.16,1,.3,1)`; all collapse to `1ms` under `prefers-reduced-motion`.

## Assets
In `design_system/assets/`:
- `logo.svg` — primary horizontal lockup, purple. Use on light backgrounds. Minimum height 24px; clear space ≥ the height of the "A". Never re-typeset, recolour, rotate or shadow it.
- `logo-horizontal-white.png` — light lockup for purple backgrounds (derived from the supplied transparent PNG by recolouring its alpha mask — not a CSS filter). An SVG version would be better; ask the client.
- `logo-stacked-lilac.png` — stacked lockup for avatars, favicons, social.
- `logo-grayscale.png` — one-colour contexts.
- `fonts/Comfortaa-Variable.ttf` — client-supplied variable font. Self-host it; `@font-face` is in `tokens/fonts.css`.
- **Icons — Lucide**, loaded in the design as CSS masks from `https://unpkg.com/lucide-static@0.544.0/icons/<name>.svg` so glyphs inherit `currentColor`. In production install `lucide-react` instead and keep the same names: `arrow-right`, `arrow-up-right`, `check`, `chevron-down`, `x`, `instagram`, `phone`, `message-circle`, `map-pin`, `clock`, `sparkles`, `palette`, `trending-up`, `monitor`, `compass`, `layers`, `download`, `play`, `menu`. Sizes 16 / **20 (default)** / 24, stroke 2, round caps. **No emoji, no icon font, no other icon family, no hand-drawn SVGs.**
- **Photography: none exists.** Every image position is an `image-slot` naming the shot and its aspect ratio. Do not substitute stock or generated imagery — the studio must supply real photos. Ship with a flat `var(--purple-100)` block and the label until they arrive.

## Content still to be supplied by the client
Treat all of these as placeholders written to demonstrate voice, **not** as facts to ship:
- Trust stats: `5,0` Google rating, `95%` renewal, `+60` projects, `2018` first client.
- All prices and package tiers (R$ 2.200 / 3.400 / 4.900 / 1.800 + verba / 4.900 / 6.500 / 3.500).
- Client names and testimonials: Serra Café / Marina Duarte, Casa Pinhão / Rafael Menezes, Norte Cosméticos, Estúdio Lume, Vera Joias.
- Team names and roles on Sobre.
- Blog article titles, dates and excerpts.
- Whether the site is pt-BR only (as designed) or bilingual.

## Voice rules for any new copy
Brazilian Portuguese, first-person plural, "você" for the reader. Sentence case everywhere except the uppercase overline. Name the reader's pain before the service. Contrast is the workhorse device ("post bonito" vs "pedido rastreado"). Buttons are verb-first, 2–3 words. Numbers stay concrete and hedged ("a partir de", "em até 24h"). The lead CTA is always the free diagnosis, never a quote request. **No emoji, no exclamation marks, no superlatives ("a melhor", "premium"), no trademark-style method names.** Full guidance in `design_system/BRAND_GUIDE.md` (Content fundamentals + Visual foundations).

## Files in this bundle
```
design_references/
  pages/LandingPage.dc.html      Home / Manifesto
  pages/Metodo.dc.html           Método
  pages/Sobre.dc.html            Sobre
  pages/SocialMedia.dc.html      Solution detail (template for all six)
  pages/Blog.dc.html             Blog index
  parallax.js                    Scroll parallax + reveal reference implementation
design_system/
  styles.css                     Entry point — @import list only
  tokens/*.css                   colors, typography, spacing, elevation, motion, fonts
  COMPONENTS.md                  16 React primitives (source + props types) to copy into your codebase
  assets/                        Logos + Comfortaa variable font
  BRAND_GUIDE.md                 Full brand guide: content fundamentals, visual foundations, iconography
SKILL.md                         Agent Skills wrapper, for use with Claude Code
```

## Reference site
The client supplied **https://profitpromarketing.com.br/** as a *content and structure* reference only — page skeleton, service-description depth, pain-first headline register and the free-diagnosis CTA. Its visual identity, dark theme, proprietary product/method names and copy were deliberately **not** used. All copy here is original. Do not import anything else from that site.
