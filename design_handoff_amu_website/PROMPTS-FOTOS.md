# Prompts de foto — Agência AMU

Para os espaços do site que pedem **foto real** (não mockup). Os prompts estão em inglês porque Midjourney, DALL·E/ChatGPT, Gemini e Firefly respondem melhor assim. Todos seguem o estilo do `estudio.png` da home.

**Bloco de estilo (já incluso em cada prompt):**
`editorial lifestyle photography, bright Scandinavian-Brazilian creative studio, warm natural window light, light wood, white walls, green plants, deep purple (#340065) and soft lilac accents, candid, shallow depth of field, 35mm, realistic skin, no text, no logos`

> Se for usar Midjourney, acrescente `--style raw --ar X:Y` no final (a proporção está indicada em cada item).

---

## Sobre (`/sobre`)

### 1. Foto do estúdio ou da fundadora — 4:5 (1200×1500)
**Recomendado:** uma foto real da fundadora no estúdio. A página diz "Aqui você fala com quem executa", então uma pessoa gerada por IA contradiz a promessa.
Se quiser só o ambiente, sem pessoas:

```
Empty boutique marketing studio interior in Florianópolis, morning light through large windows, round light-wood meeting table with laptop open to an analytics dashboard, notebook and coffee mug, deep purple accent wall with a small neon-free round sign, lilac bean bag, hanging black pendant lamps, trailing plants on shelves, calm and premium, editorial lifestyle photography, warm natural light, 35mm, shallow depth of field, no people, no text, no logos --ar 4:5
```

### 2. Fotos do time — 1:1 (3 fotos, 1000×1000)
**Não use IA aqui.** São as pessoas que o cliente vai encontrar na reunião. Guia rápido para fotografar com o celular:
- Fundo: a parede roxa do estúdio (#340065) ou parede branca com uma planta de lado.
- Luz: de frente para a janela, sem flash, entre 9h e 11h.
- Enquadramento: do peito para cima, olhos no terço superior, um pouco de espaço acima da cabeça.
- Roupa: tons neutros (preto, branco, cinza, bege); evite estampas.
- Mesma distância e mesma altura de câmera para as três pessoas.

---

## Faixas full-bleed dos serviços (`ParallaxBand`) — paisagem 16:9 (1800×1013)
Hoje as seis páginas usam a mesma `equipe_trabalhando.webp`. O rodapé da imagem recebe um gradiente roxo escuro e a citação por cima, então **o assunto principal fica no terço superior** e a parte de baixo deve ser mais simples.

### Social media — "produção de conteúdo"
```
Behind the scenes of a social media content shoot in a bright creative studio, young woman filming a product flat lay with a smartphone on a small tripod, ring light, linen backdrop, lilac and deep purple props, laptop showing an Instagram grid on the side, candid, editorial lifestyle photography, warm natural window light, subject in upper third of frame, calm lower third, 35mm, shallow depth of field, no text, no logos --ar 16:9
```

### Tráfego pago — "mesa de trabalho com relatórios"
```
Overhead-angled close-up of a light-wood desk with a laptop showing ad campaign charts and a cost-per-lead graph, printed report with purple highlighter marks, phone showing a sponsored post, coffee cup, hands of a marketer taking notes, deep purple and lilac accents, editorial photography, warm window light, main elements in upper half, clean lower third, shallow depth of field, no readable text, no logos --ar 16:9
```

### Sites e landing pages — "tela de site em produção"
```
Web designer at a standing desk in a bright studio, large monitor showing a clean landing page layout in purple and white with a big call-to-action button, smartphone beside it previewing the mobile version, sketches of wireframes pinned on the wall, plants, warm natural light, editorial lifestyle photography, focus on the screen in the upper half, soft blurred foreground, 35mm, no readable text, no logos --ar 16:9
```

### Branding e identidade — "mesa com paleta e tipografia"
```
Brand identity workspace from above at a slight angle, printed brand guidelines booklet open to a color palette page in deep purple and lilac, pantone-style color chips, typography specimen cards, business card mockups, pencil and ruler, light-wood table, soft natural light, editorial still life photography, elements concentrated in upper two thirds, calm negative space at the bottom, no readable text, no logos --ar 16:9
```

### Consultoria estratégica — "sessão de planejamento"
```
Strategy session in a small bright meeting room, senior consultant standing next to a wall-mounted screen with a quarterly goals dashboard and progress rings, three client team members seated at a light-wood table with laptops and notebooks, engaged candid conversation, deep purple accent wall, plants, warm window light, editorial lifestyle photography, faces and screen in upper half, 35mm, shallow depth of field, no readable text, no logos --ar 16:9
```

### Pacote completo — "time trabalhando integrado"
```
Small integrated marketing team collaborating around one long table in a bright creative studio, designer, copywriter and media analyst sharing one big screen with a unified funnel dashboard, content calendar printed on the wall with lilac and purple sticky notes, relaxed and focused atmosphere, deep purple accents, plants, warm natural light, editorial lifestyle photography, people in upper half of frame, calm lower third, 35mm, no readable text, no logos --ar 16:9
```

---

## Dicas para todos
- Se a IA criar texto ou logo falso na tela, acrescente `no text, blurred screen content`, ou apague o texto depois.
- Exporte em `.webp` com qualidade 80–85 para manter o site rápido.
- Nomes sugeridos: `banda-social-media.webp`, `banda-trafego-pago.webp` e assim por diante, em `public/assets/images/`.
