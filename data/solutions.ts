/**
 * Content for /servicos/[slug] — one dynamic route templated on
 * SocialMedia.dc.html (design_references/pages/SocialMedia.dc.html) serving
 * all six solution lines, per the handoff brief.
 *
 * Only "social-media" was pixel-designed; the other five follow its section
 * structure with original copy in the same voice (see BRAND_GUIDE.md).
 * Prices, package tiers and metrics are placeholders written to demonstrate
 * voice, not facts to ship — see "Content still to be supplied" in the
 * handoff README.
 */

export interface SolutionMetric {
  label: string;
  value: string;
  note: string;
}

export interface SolutionIncluded {
  title: string;
  body: string;
}

export interface SolutionPackage {
  name: string;
  detail: string;
  price: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface Solution {
  slug: string;
  index: string;
  name: string;
  heroOverline: string;
  heroTitle: string;
  heroLede: string;
  heroImagePlaceholder: string;
  priceNote: string;
  ctaLabel: string;
  metrics: SolutionMetric[];
  bandQuote: string;
  bandPlaceholder: string;
  includedTitle: string;
  included: SolutionIncluded[];
  packages: SolutionPackage[];
  packagesNote: string;
  chipsTitle: string;
  chips: string[];
  chipsNote: string;
  faqTitle: string;
  faq: SolutionFaq[];
  closingTitle: string;
  closingBody: string;
  homeBlurb: string;
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "social-media",
    index: "01",
    name: "Social media",
    heroOverline: "Soluções · 01 de 06",
    heroTitle: "Social media com estratégia, não volume.",
    heroLede:
      "Seu Instagram como a melhor vitrine da marca. Gestão de Instagram, LinkedIn e Google Meu Negócio em pacotes de 8 a 16 posts por mês, com calendário editorial ligado ao funil de vendas.",
    heroImagePlaceholder: "Mockup de feed ou foto de produção (4:5)",
    priceNote: "a partir de R$ 2.200/mês",
    ctaLabel: "Pedir proposta",
    metrics: [
      { label: "Alcance", value: "Rastreado", note: "Em tempo real, por post e por formato." },
      { label: "Salvamentos", value: "No painel", note: "A métrica que mostra conteúdo útil de verdade." },
      { label: "Cliques", value: "Com UTM", note: "Do perfil até a venda no CRM." },
    ],
    bandQuote: "Mais que fazer post: construir presença que transforma audiência em cliente.",
    bandPlaceholder: "Imagem full-bleed — produção de conteúdo (paisagem)",
    includedTitle: "Tudo o que entra no mês",
    included: [
      { title: "Conteúdo autoral com briefing estratégico", body: "Cada peça nasce de um objetivo, com roteiro opcional para vídeo." },
      { title: "Calendário editorial alinhado ao funil", body: "Topo, meio e fundo de funil distribuídos no mês, não improvisados." },
      { title: "Design profissional e conteúdo autêntico", body: "Direção de arte dentro da identidade da marca, sem template genérico." },
      { title: "Relatório mensal com insight acionável", body: "O que repetir, o que cortar e o que testar no mês seguinte." },
    ],
    packages: [
      { name: "Essencial", detail: "8 posts/mês · 1 canal", price: "R$ 2.200/mês" },
      { name: "Consistente", detail: "12 posts/mês · 2 canais", price: "R$ 3.400/mês" },
      { name: "Autoridade", detail: "16 posts/mês · 3 canais + vídeo", price: "R$ 4.900/mês" },
    ],
    packagesNote: "Contrato mínimo de 3 meses. Produção começa depois do calendário aprovado.",
    chipsTitle: "Canais",
    chips: ["Instagram", "LinkedIn", "Google Meu Negócio", "YouTube Shorts", "TikTok"],
    chipsNote: "Escolhemos os canais no diagnóstico — estar em todos raramente é a melhor decisão.",
    faqTitle: "Sobre social media, especificamente",
    faq: [
      { question: "Quem grava os vídeos?", answer: "Você ou seu time, com roteiro e direção nossos. Gravação presencial em SC entra como adicional." },
      { question: "Eu aprovo os posts antes?", answer: "Sim. O calendário do mês inteiro vai para aprovação antes de qualquer publicação." },
      { question: "Preciso de tráfego pago junto?", answer: "Não é obrigatório, mas conteúdo sem verba cresce devagar. Sugerimos começar com o mínimo e escalar o que funciona." },
      { question: "O que acontece se eu pausar?", answer: "Você fica com todos os arquivos, o calendário e o painel. Nada é retido." },
    ],
    closingTitle: "Seu feed pode trabalhar melhor.",
    closingBody: "No diagnóstico gratuito analisamos seu perfil atual e mostramos os três ajustes de maior impacto.",
    homeBlurb: "Instagram, LinkedIn e Google Meu Negócio. Pacotes de 8 a 16 posts por mês com calendário editorial ligado ao funil.",
  },
  {
    slug: "trafego-pago",
    index: "02",
    name: "Tráfego pago",
    heroOverline: "Soluções · 02 de 06",
    heroTitle: "Tráfego pago com verba rastreada até a venda.",
    heroLede:
      "Google, Meta, TikTok e LinkedIn Ads com criativos próprios, UTM ponta a ponta e um relatório mensal que aponta o que repetir e o que cortar — não só alcance e impressão.",
    heroImagePlaceholder: "Mockup de painel de campanha ou anúncio (4:5)",
    priceNote: "a partir de R$ 1.800/mês + verba",
    ctaLabel: "Pedir proposta",
    metrics: [
      { label: "Custo por lead", value: "No painel", note: "Atualizado em tempo real, por campanha e por canal." },
      { label: "Origem da venda", value: "Com UTM", note: "Do clique até o CRM, sem lacuna no meio do caminho." },
      { label: "Criativos", value: "Em teste", note: "Variações rodando em paralelo, não achismo isolado." },
    ],
    bandQuote: "Verba de anúncio não é aposta: é um experimento com hipótese, teste e leitura.",
    bandPlaceholder: "Imagem full-bleed — mesa de trabalho com relatórios (paisagem)",
    includedTitle: "Tudo o que entra no mês",
    included: [
      { title: "Estrutura de campanha por objetivo", body: "Topo, meio e fundo de funil com públicos e ofertas diferentes." },
      { title: "Criativos e variações prontos para teste", body: "Peças estáticas e em vídeo, sempre dentro da identidade da marca." },
      { title: "UTM e eventos de conversão configurados", body: "Cada clique rastreado até o formulário, o carrinho ou a venda." },
      { title: "Relatório mensal com plano de otimização", body: "O que performou vira padrão, o que não performou sai do ar." },
    ],
    packages: [
      { name: "Início", detail: "1 canal · até R$ 3.000/mês em verba", price: "R$ 1.800/mês" },
      { name: "Escala", detail: "2 canais · até R$ 8.000/mês em verba", price: "R$ 2.900/mês" },
      { name: "Performance", detail: "3 canais · verba acima de R$ 8.000/mês", price: "R$ 4.200/mês" },
    ],
    packagesNote: "Verba de mídia é paga direto à plataforma, no seu cartão ou conta de anúncios — nunca em conta nossa.",
    chipsTitle: "Plataformas",
    chips: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "YouTube"],
    chipsNote: "A escolha de canal sai do diagnóstico, não de preferência pessoal.",
    faqTitle: "Sobre tráfego pago, especificamente",
    faq: [
      { question: "Qual é o piso de verba para começar?", answer: "Em torno de R$ 1.500/mês por canal — abaixo disso o algoritmo não aprende rápido o suficiente." },
      { question: "Vocês criam os anúncios ou só gerenciam?", answer: "Criamos: roteiro, arte e cópia. Gestão sem criativo bom entrega alcance, não venda." },
      { question: "Preciso de site para anunciar?", answer: "Precisa de um destino que converta. Se não tiver, montamos uma landing page dentro do escopo." },
      { question: "Como sei que a verba está sendo bem usada?", answer: "Painel aberto com custo por lead e por venda, além de reunião mensal de leitura." },
    ],
    closingTitle: "Sua verba pode render mais.",
    closingBody: "No diagnóstico gratuito revisamos sua conta de anúncios e mostramos onde o dinheiro está vazando.",
    homeBlurb: "Google, Meta, TikTok e LinkedIn Ads com criativos, UTM ponta a ponta e relatório mensal acionável.",
  },
  {
    slug: "sites-e-landing-pages",
    index: "03",
    name: "Sites e landing pages",
    heroOverline: "Soluções · 03 de 06",
    heroTitle: "Um site feito para converter, não só para existir.",
    heroLede:
      "Páginas rápidas, com SEO técnico, mobile impecável e testes de conversão — o destino que aproveita o clique que o conteúdo e a mídia paga já geraram.",
    heroImagePlaceholder: "Mockup de site ou landing page (4:5)",
    priceNote: "a partir de R$ 4.900",
    ctaLabel: "Pedir proposta",
    metrics: [
      { label: "Velocidade", value: "Otimizada", note: "Carregamento pensado para não perder visita por demora." },
      { label: "Formulário", value: "Rastreado", note: "Cada envio identificado por canal e por campanha." },
      { label: "Testes", value: "Contínuos", note: "Variações de título e oferta em ciclos curtos." },
    ],
    bandQuote: "O site certo transforma tráfego pago em pedido — não em taxa de rejeição.",
    bandPlaceholder: "Imagem full-bleed — tela de site em produção (paisagem)",
    includedTitle: "Tudo o que entra no projeto",
    included: [
      { title: "Estrutura e copy orientadas a conversão", body: "Cada seção existe para responder uma objeção do visitante." },
      { title: "SEO técnico desde a fundação", body: "Performance, dados estruturados e hierarquia de conteúdo corretos." },
      { title: "Formulário e eventos integrados ao CRM", body: "Lead entra rastreado, sem planilha manual no meio do caminho." },
      { title: "Suporte de 30 dias pós-lançamento", body: "Ajustes de conteúdo e pequenos bugs, sem custo adicional." },
    ],
    packages: [
      { name: "Landing page", detail: "1 página · foco em uma oferta", price: "R$ 4.900" },
      { name: "Site institucional", detail: "até 6 páginas", price: "R$ 8.900" },
      { name: "Site + blog", detail: "até 10 páginas · SEO de conteúdo", price: "R$ 13.500" },
    ],
    packagesNote: "Prazo médio de 3 a 5 semanas após o conteúdo aprovado. Hospedagem cotada à parte.",
    chipsTitle: "Stack",
    chips: ["Next.js", "SEO técnico", "Analytics", "CRM", "A/B testing"],
    chipsNote: "Escolhemos a stack pelo que o projeto precisa, não pela moda do momento.",
    faqTitle: "Sobre sites e landing pages, especificamente",
    faq: [
      { question: "Vocês fazem só o design ou entregam no ar?", answer: "Entregamos publicado, com domínio e integrações configuradas." },
      { question: "Eu escrevo o conteúdo ou vocês escrevem?", answer: "Escrevemos com base num briefing seu — você revisa e aprova antes de publicar." },
      { question: "O site funciona bem no celular?", answer: "Todo projeto nasce mobile, porque é de onde vem a maior parte do tráfego." },
      { question: "Dá para integrar com WhatsApp e CRM?", answer: "Sim, é parte padrão do escopo quando aplicável ao seu funil." },
    ],
    closingTitle: "Seu site pode vender enquanto você dorme.",
    closingBody: "No diagnóstico gratuito avaliamos seu site atual e apontamos o que está custando conversão.",
    homeBlurb: "Páginas feitas para converter: velocidade, SEO técnico, mobile impecável e testes de conversão.",
  },
  {
    slug: "branding-e-identidade",
    index: "04",
    name: "Branding e identidade",
    heroOverline: "Soluções · 04 de 06",
    heroTitle: "A base que faz o resto da marca funcionar.",
    heroLede:
      "Posicionamento, identidade visual, tom de voz e manual de aplicação — o alicerce que dá ao conteúdo e à mídia paga algo consistente para repetir mês após mês.",
    heroImagePlaceholder: "Mockup de manual de marca ou aplicações (4:5)",
    priceNote: "a partir de R$ 6.500 · 4 a 6 semanas",
    ctaLabel: "Pedir proposta",
    metrics: [
      { label: "Posicionamento", value: "Documentado", note: "Uma promessa central que a equipe inteira sabe repetir." },
      { label: "Identidade", value: "Em manual", note: "Regras de aplicação claras, sem depender de memória." },
      { label: "Tom de voz", value: "Por canal", note: "O que dizer — e o que a marca nunca vai dizer." },
    ],
    bandQuote: "Rebranding não é trocar o logo: é dar à marca algo consistente para repetir.",
    bandPlaceholder: "Imagem full-bleed — mesa com paleta e tipografia (paisagem)",
    includedTitle: "Tudo o que entra no projeto",
    included: [
      { title: "Diagnóstico de marca e mercado", body: "Entendemos antes de desenhar qualquer coisa." },
      { title: "Posicionamento e promessa central", body: "A frase que orienta toda comunicação futura." },
      { title: "Identidade visual completa", body: "Marca, paleta, tipografia e composições de exemplo." },
      { title: "Manual de aplicação em PDF", body: "Pronto para qualquer fornecedor usar sem retrabalho." },
    ],
    packages: [
      { name: "Reposicionamento", detail: "sem redesenho de marca", price: "R$ 6.500" },
      { name: "Identidade completa", detail: "marca nova + manual", price: "R$ 9.800" },
      { name: "Identidade + aplicações", detail: "manual + peças-chave prontas", price: "R$ 13.900" },
    ],
    packagesNote: "Prazo de 4 a 6 semanas, com duas rodadas de revisão incluídas em cada etapa.",
    chipsTitle: "Entregáveis",
    chips: ["Logotipo", "Paleta de cores", "Tipografia", "Manual de marca", "Tom de voz"],
    chipsNote: "Cada entregável é definido no diagnóstico — nem todo projeto precisa de tudo.",
    faqTitle: "Sobre branding e identidade, especificamente",
    faq: [
      { question: "Minha marca já tem logo. Preciso recomeçar do zero?", answer: "Não sempre. Muitas vezes o problema é posicionamento e tom de voz, não o símbolo." },
      { question: "Quantas opções de logo vocês apresentam?", answer: "Uma direção bem fundamentada, refinada com você — não uma vitrine de dez rascunhos." },
      { question: "O manual serve para qualquer fornecedor aplicar?", answer: "Sim, é feito para isso: regras claras de cor, tipografia e uso do símbolo." },
      { question: "Depois do manual, quem cuida das peças do dia a dia?", answer: "Pode ser nossa equipe de social media e tráfego, ou seu time interno — o manual funciona para os dois." },
    ],
    closingTitle: "Sua marca pode ter uma base mais sólida.",
    closingBody: "No diagnóstico gratuito avaliamos onde a identidade atual está deixando dinheiro na mesa.",
    homeBlurb: "Posicionamento, marca, tom de voz e manual de aplicação — a base que faz o resto funcionar.",
  },
  {
    slug: "consultoria-estrategica",
    index: "05",
    name: "Consultoria estratégica",
    heroOverline: "Soluções · 05 de 06",
    heroTitle: "Estratégia para quem já tem time — sem terceirizar a execução.",
    heroLede:
      "Diagnóstico, plano de canais e acompanhamento mensal de metas para negócios que já têm equipe interna e precisam de direção, não de mais um executor.",
    heroImagePlaceholder: "Mockup de painel de metas ou reunião (4:5)",
    priceNote: "a partir de R$ 3.500/mês",
    ctaLabel: "Pedir proposta",
    metrics: [
      { label: "Metas", value: "Acompanhadas", note: "Reunião mensal com número na tela, não em slide." },
      { label: "Canais", value: "Priorizados", note: "Plano com o que fazer primeiro e o que esperar." },
      { label: "Time interno", value: "Orientado", note: "Direção sênior sem contratar mais uma agência de execução." },
    ],
    bandQuote: "Direção sênior para o time que já existe — sem duplicar o que sua equipe já faz.",
    bandPlaceholder: "Imagem full-bleed — sessão de planejamento (paisagem)",
    includedTitle: "Tudo o que entra no mês",
    included: [
      { title: "Diagnóstico inicial de canais e time", body: "Mapeamos o que já funciona antes de sugerir mudança." },
      { title: "Plano de canais priorizado", body: "O que testar primeiro e com qual verba mínima." },
      { title: "Reunião mensal de leitura de dados", body: "Com seu time, sobre os números do mês." },
      { title: "Suporte assíncrono entre reuniões", body: "Dúvidas pontuais respondidas sem esperar o próximo encontro." },
    ],
    packages: [
      { name: "Direção mensal", detail: "1 reunião/mês + suporte assíncrono", price: "R$ 3.500/mês" },
      { name: "Direção + auditoria trimestral", detail: "inclui revisão profunda a cada 3 meses", price: "R$ 4.800/mês" },
      { name: "Direção estendida", detail: "2 reuniões/mês + acompanhamento de campanhas", price: "R$ 6.200/mês" },
    ],
    packagesNote: "Contrato mínimo de 3 meses. Ideal para times com pelo menos uma pessoa dedicada a marketing.",
    chipsTitle: "Frentes cobertas",
    chips: ["Social media", "Tráfego pago", "Branding", "SEO", "Dados e CRM"],
    chipsNote: "A consultoria opina sobre qualquer frente — a execução pode ficar com seu time ou com o nosso.",
    faqTitle: "Sobre consultoria estratégica, especificamente",
    faq: [
      { question: "Vocês executam campanhas ou só orientam?", answer: "Nesta frente, orientamos. Execução entra como frente separada, se fizer sentido." },
      { question: "Funciona para times de uma pessoa só?", answer: "Sim — é onde a direção sênior mais ajuda a evitar erro caro." },
      { question: "As reuniões são presenciais?", answer: "Por chamada, em qualquer lugar do Brasil. Presencial só em Santa Catarina." },
      { question: "Dá para migrar depois para execução completa?", answer: "Sim, é uma conversa simples quando o time achar que faz sentido." },
    ],
    closingTitle: "Seu time pode ter direção sênior.",
    closingBody: "No diagnóstico gratuito mapeamos o que seu time já faz bem e o que está faltando.",
    homeBlurb: "Para quem já tem time interno: diagnóstico, plano de canais e acompanhamento mensal das metas.",
  },
  {
    slug: "pacote-completo",
    index: "06",
    name: "Pacote completo",
    heroOverline: "Soluções · 06 de 06",
    heroTitle: "Marca, conteúdo, mídia e conversão em um só contrato.",
    heroLede:
      "As cinco frentes operando juntas, com um único ponto de contato, um calendário só e um painel que mostra o resultado de ponta a ponta — do posicionamento até a venda.",
    heroImagePlaceholder: "Mockup de painel integrado ou equipe (4:5)",
    priceNote: "sob consulta, conforme escopo",
    ctaLabel: "Falar sobre o pacote",
    metrics: [
      { label: "Frentes", value: "Integradas", note: "Marca, conteúdo, mídia e página trabalhando juntas." },
      { label: "Contato", value: "Único", note: "Uma pessoa responde por todo o projeto." },
      { label: "Painel", value: "Unificado", note: "Lead, venda e custo por canal num só lugar." },
    ],
    bandQuote: "O resultado composto de marca, conteúdo e mídia andando juntos — não em contratos separados.",
    bandPlaceholder: "Imagem full-bleed — time trabalhando integrado (paisagem)",
    includedTitle: "Tudo o que entra no pacote",
    included: [
      { title: "Diagnóstico e posicionamento", body: "A base de marca que orienta todo o resto." },
      { title: "Conteúdo e mídia paga integrados", body: "Mesmo calendário, mesma mensagem, canais diferentes." },
      { title: "Página de conversão dedicada", body: "Destino pronto para aproveitar o tráfego gerado." },
      { title: "Painel único com todos os números", body: "Lead, venda e custo por canal, sem planilha paralela." },
    ],
    packages: [
      { name: "Essencial", detail: "branding + social media", price: "sob consulta" },
      { name: "Crescimento", detail: "branding + social media + tráfego pago", price: "sob consulta" },
      { name: "Completo", detail: "todas as cinco frentes + site", price: "sob consulta" },
    ],
    packagesNote: "O escopo exato sai do diagnóstico gratuito — cada combinação de frentes tem um contrato próprio.",
    chipsTitle: "Frentes incluídas",
    chips: ["Branding", "Social media", "Tráfego pago", "Sites e landing pages", "Consultoria"],
    chipsNote: "Você escolhe quais frentes entram; o pacote é montado sob medida no diagnóstico.",
    faqTitle: "Sobre o pacote completo, especificamente",
    faq: [
      { question: "É mais barato que contratar as frentes separadas?", answer: "Normalmente sim, e ganha em coordenação: uma equipe só, um calendário só." },
      { question: "Preciso contratar todas as cinco frentes?", answer: "Não. O pacote é montado com as frentes que fazem sentido para o seu momento." },
      { question: "Como funciona o atendimento?", answer: "Um único ponto de contato coordena todas as frentes — você não fala com times separados." },
      { question: "Dá para remover uma frente depois?", answer: "Sim, com aviso prévio, ao final de cada ciclo mensal." },
    ],
    closingTitle: "Sua marca pode operar como um sistema só.",
    closingBody: "No diagnóstico gratuito montamos a combinação de frentes que faz sentido para o seu momento.",
    homeBlurb: "Marca, conteúdo, mídia e página de conversão em um só contrato, com um único ponto de contato.",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}

export function getRelatedSolutions(slug: string, count = 3): Solution[] {
  const others = SOLUTIONS.filter((s) => s.slug !== slug);
  return others.slice(0, count);
}
