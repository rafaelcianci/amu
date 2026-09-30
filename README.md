# Agência AMU — site institucional

Site de marketing da **Agência AMU**, construído em Next.js (App Router) + TypeScript a partir do handoff de design em `design_handoff_amu_website/` (tokens, componentes e as cinco páginas de referência `.dc.html`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

O formulário de diagnóstico (`/diagnostico`) manda e-mail para a agência pelo [Resend](https://resend.com). Copie `.env.example` para `.env.local` e preencha `RESEND_API_KEY` e `CONTACT_EMAIL_TO`. Sem essas variáveis, o site funciona, mas os envios falham com uma mensagem de erro.

Para testar a build de produção:

```bash
npm run build
npm run start
```

## Estrutura

- `app/` — rotas (App Router). `page.tsx` (Home/Manifesto), `metodo/`, `sobre/`, `blog/`, `servicos/[slug]/` (rota dinâmica que serve as 6 soluções a partir de `data/solutions.ts`), `diagnostico/` (formulário de diagnóstico gratuito).
- `app/styles/tokens/` — os 6 arquivos de design tokens (cores, tipografia, espaçamento, elevação, movimento, fontes), portados 1:1 do handoff.
- `components/ui/` — os 16 componentes React do design system (Button, Input, Dialog, Toast, etc.).
- `components/layout/` — Header (com menu mobile), Footer (variantes full/compact), ImageSlot.
- `components/sections/` — blocos reutilizados entre páginas (Overline, ParallaxBand, ClosingCta, StatRow, TestimonialCard, FaqGrid).
- `components/motion/` — `ScrollFX`, porte do `parallax.js` do handoff (data-parallax, data-parallax-bg, data-reveal), respeitando `prefers-reduced-motion`.
- `data/` — conteúdo tipado (soluções, fases do método, depoimentos, FAQ, posts do blog).

## Pendências conhecidas (ver `design_handoff_amu_website/README.md`)

- **Fotografia**: nenhuma foto real existe ainda. Todo `ImageSlot` é um bloco lilás com legenda — substitua pelos arquivos reais do estúdio quando chegarem (não usar banco de imagens).
- **Preços, estatísticas de confiança, nomes de clientes/depoimentos e nomes do time** são placeholders de voz de marca, não fatos — sinalizados no handoff original. Ajuste antes de publicar.
- **Artigos do blog**: só o índice foi desenhado; os cards ainda não linkam para páginas de artigo individuais.