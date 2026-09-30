export type BlogCategory = "Tráfego pago" | "Social media" | "Branding" | "Dados";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  date: string;
  /** Article body — plain paragraphs, in the brand voice (BRAND_GUIDE.md). */
  body: string[];
  featured?: boolean;
}

/** Cover images live in /public/assets/images/blog, named after the post slug. */
export const postCover = (slug: string) => `/assets/images/blog/${slug}.webp`; // 4:3 — cards
export const postCoverWide = (slug: string) => `/assets/images/blog/${slug}-16x9.webp`; // 16:9 — article header
export const postCoverFeatured = (slug: string) => `/assets/images/blog/${slug}-16x11.webp`; // 16:11 — featured card

export const BLOG_CATEGORIES = ["Todos", "Tráfego pago", "Social media", "Branding", "Dados"] as const;

export const FEATURED_POST: BlogPost = {
  slug: "por-que-seu-anuncio-gera-clique-e-nao-gera-pedido",
  category: "Tráfego pago",
  readTime: "8 min de leitura",
  title: "Por que seu anúncio gera clique e não gera pedido",
  excerpt:
    "Na maioria dos casos o problema não está na campanha: está na página de destino, na oferta e na ausência de rastreio. Um roteiro em quatro checagens para descobrir onde o dinheiro vaza.",
  date: "12 de agosto de 2026",
  featured: true,
  body: [
    "É o padrão que mais vemos em diagnóstico: a campanha entrega clique barato, o painel do anúncio mostra alcance bonito, e mesmo assim o telefone não toca. A reação comum é trocar de agência ou pausar o investimento. As duas decisões erram o alvo, porque o problema quase nunca está no anúncio.",
    "Fizemos esse roteiro em quatro checagens depois de revisar contas de clientes que já chegavam com essa queixa pronta. Em três de cada quatro casos, o anúncio não era o vilão — era só o primeiro elo de uma corrente com outros três elos quebrados.",
    "Checagem 1 — a oferta. Um anúncio que promete \"conheça nossos produtos\" compete com a rolagem infinita do feed. Um anúncio que promete uma condição específica, com prazo e critério claros, para quem já demonstrou intenção de compra, compete com muito menos coisa. Se a oferta é genérica, o clique também vai ser.",
    "Checagem 2 — a página de destino. Clique que cai na home do site se perde em três cliques a mais até o formulário. A página certa repete a promessa do anúncio na primeira dobra, tem um único caminho de conversão e carrega em menos de três segundos no celular — é de lá que vem a maior parte do tráfego pago.",
    "Checagem 3 — o rastreio. Sem UTM padronizado e sem evento de conversão configurado, o painel mostra clique, mas o CRM não sabe de onde veio o pedido. Sem esse elo, qualquer decisão sobre orçamento é palpite, mesmo com uma campanha tecnicamente boa.",
    "Checagem 4 — o tempo de leitura. Uma campanha nova precisa de volume mínimo de dados antes que qualquer otimização faça sentido. Pausar no terceiro dia porque \"não converteu ainda\" é a forma mais comum de nunca descobrir o que funcionaria no décimo dia.",
    "Quando essas quatro peças estão no lugar, o anúncio deixa de ser suspeito isolado e volta a ser só mais uma variável dentro de um sistema que já está sendo medido de ponta a ponta.",
  ],
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quantos-posts-por-mes-sua-empresa-realmente-precisa",
    title: "Quantos posts por mês sua empresa realmente precisa",
    excerpt: "A resposta depende do ciclo de compra, não do concorrente que posta todo dia.",
    category: "Social media",
    readTime: "5 min",
    date: "4 de agosto de 2026",
    body: [
      "É a primeira pergunta de quase todo diagnóstico: \"quantos posts por mês eu preciso?\". A resposta mais honesta é que a pergunta certa é outra: quanto tempo leva entre alguém conhecer sua marca e decidir comprar dela.",
      "Um restaurante de bairro tem ciclo de compra curto — a pessoa vê o post no domingo e decide o jantar de terça. Um serviço de consultoria tem ciclo longo — o contato de hoje talvez feche em quatro meses, depois de acompanhar o perfil por semanas. O primeiro precisa de frequência para ficar top of mind; o segundo precisa de profundidade para construir confiança.",
      "Postar todo dia sem esse cálculo custa caro de duas formas. Ou a qualidade cai porque a produção vira linha de montagem, ou a mensagem se dilui porque não há assunto de sobra que valha a pena repetir. Nenhuma das duas ajuda a vender.",
      "Na prática, os pacotes que funcionam melhor variam entre 8 e 16 posts por mês, e a diferença entre eles não é só quantidade: é quantos canais, quanto vídeo e quanto do calendário está ligado a uma etapa específica do funil — atração, consideração ou decisão.",
      "Antes de perguntar \"quantos posts\", vale perguntar \"quantas etapas do funil minha marca precisa alimentar este mês\". A resposta certa quase sempre é um número menor do que o concorrente que posta todo dia — e um resultado maior.",
    ],
  },
  {
    slug: "utm-na-pratica",
    title: "UTM na prática: como saber de onde vem cada venda",
    excerpt: "Um padrão de nomenclatura simples que resolve 90% da confusão de relatório.",
    category: "Dados",
    readTime: "6 min",
    date: "28 de julho de 2026",
    body: [
      "A maior parte da confusão de relatório que vemos em diagnóstico não vem de ferramenta ruim — vem de UTM sem padrão. Cada campanha nomeada de um jeito diferente, por pessoas diferentes, em momentos diferentes, até que ninguém mais sabe o que \"promo_julho2\" quer dizer.",
      "UTM é só uma etiqueta que vai colada no link: de onde veio o clique, por qual campanha e por qual peça específica. O problema nunca é a ferramenta — é a falta de um padrão fixo antes de o primeiro link sair.",
      "O padrão que usamos com clientes tem três campos obrigatórios, sempre na mesma ordem e sempre em minúsculo, sem acento: canal (instagram, google, email), campanha (o nome do objetivo, não da data) e conteúdo (qual peça ou anúncio específico, quando há mais de um rodando ao mesmo tempo).",
      "Uma regra resolve a maior parte da bagunça: a campanha nunca leva a data no nome. \"lancamento-curso\" sobrevive ao relatório de três meses depois; \"julho2026\" não diz nada sobre o que estava sendo testado.",
      "Com esse padrão simples, uma pergunta que hoje demora uma tarde de planilha — \"quanto do faturamento deste mês veio do Instagram?\" — vira um filtro de trinta segundos no painel. É esse tipo de resposta rápida que separa decisão de orçamento de achismo de orçamento.",
    ],
  },
  {
    slug: "rebranding-nao-e-trocar-o-logo",
    title: "Rebranding não é trocar o logo",
    excerpt: "Quando vale mexer na marca e quando o problema é só a comunicação.",
    category: "Branding",
    readTime: "7 min",
    date: "21 de julho de 2026",
    body: [
      "Quase todo pedido de rebranding chega assim: \"nossa marca está datada, precisamos de um logo novo\". Na maioria das vezes, o logo não é o problema — é só o sintoma mais visível de um posicionamento que nunca foi escrito.",
      "Um jeito rápido de separar as duas situações: se a equipe interna descreve o que a marca faz de formas diferentes dependendo de quem responde, o problema é posicionamento. Se todo mundo concorda no que a marca é, mas o visual não comunica isso, o problema é execução visual — bem mais barato de resolver.",
      "Trocar o símbolo sem resolver o posicionamento custa duas vezes: o dinheiro do redesenho e o tempo de reconstruir reconhecimento visual do zero, sem nem sequer corrigir a causa raiz. Meses depois, a mesma queixa volta, só que com um logo diferente.",
      "Quando o rebranding completo faz sentido: mudança real de público-alvo, fusão de marcas, ou um posicionamento tão diluído que nenhuma peça nova consegue mais carregar sozinha. Fora desses casos, o caminho mais barato e mais rápido costuma ser reescrever a promessa central e o tom de voz, mantendo o símbolo.",
      "A pergunta que toda proposta de rebranding deveria responder antes de qualquer arte: o que exatamente vai ser diferente para o cliente depois disso — não para a equipe interna, para quem paga a conta.",
    ],
  },
  {
    slug: "com-quanta-verba-da-para-comecar-em-anuncio",
    title: "Com quanta verba dá para começar em anúncio",
    excerpt: "O piso realista para gerar aprendizado em vez de gastar sem ler nada.",
    category: "Tráfego pago",
    readTime: "4 min",
    date: "14 de julho de 2026",
    body: [
      "A pergunta certa não é \"quanto preciso para vender\" — é \"quanto preciso para o algoritmo aprender rápido o bastante para eu conseguir ler o resultado antes do fim do mês\".",
      "Na prática, o piso fica em torno de R$ 1.500 por mês, por canal. Abaixo disso, o volume de dados chega devagar demais: qualquer conclusão sobre o que funcionou ou não vira ruído estatístico, não aprendizado.",
      "Verba baixa não é motivo para não anunciar — é motivo para escolher um canal só e uma única campanha por vez, em vez de espalhar o mesmo valor pequeno em quatro plataformas ao mesmo tempo. Concentração gera leitura; diluição só gera relatório confuso.",
      "O primeiro mês de verba deveria ser tratado como o preço de uma pesquisa, não como o preço de um resultado. É nele que se descobre qual oferta, qual público e qual criativo têm chance de escalar — a venda em volume vem depois, com dado real embaixo da decisão.",
    ],
  },
  {
    slug: "salvamento-vale-mais-que-curtida",
    title: "Salvamento vale mais que curtida",
    excerpt: "Como escolher as três métricas que realmente indicam conteúdo útil.",
    category: "Social media",
    readTime: "5 min",
    date: "7 de julho de 2026",
    body: [
      "Curtida custa um toque e não compromete quem deu. Salvamento é diferente: a pessoa decidiu voltar naquele conteúdo depois — sinal de que ele resolveu um problema real, não só de que a imagem ficou bonita.",
      "As três métricas que valem mais atenção que curtida, nesta ordem: salvamento (utilidade), compartilhamento em mensagem direta (confiança suficiente para recomendar) e cliques no link da bio (intenção real de ir além do feed).",
      "Alcance e impressão continuam tendo valor, mas como termômetro de distribuição, não de qualidade. Um post pode alcançar cem mil contas e não gerar um salvamento sequer — sinal de que entreteve, mas não ensinou nem convenceu nada.",
      "Na prática, isso muda o que vale a pena produzir: menos post de efeito bonito e mais conteúdo que responda a uma dúvida específica do público, do tipo que a pessoa quer guardar para reler depois — ou mandar para um colega que tem o mesmo problema.",
    ],
  },
  {
    slug: "o-relatorio-que-a-sua-agencia-deveria-mandar",
    title: "O relatório que a sua agência deveria mandar",
    excerpt: "Cinco linhas que respondem se o investimento do mês valeu a pena.",
    category: "Dados",
    readTime: "9 min",
    date: "30 de junho de 2026",
    body: [
      "A maioria dos relatórios de agência é feita para parecer completa, não para responder à única pergunta que importa: o investimento deste mês valeu a pena ou não. Trinta slides de alcance e impressão não respondem isso — cinco linhas certas respondem.",
      "Linha 1 — quanto entrou. Lead ou venda gerados no mês, por canal, sem misturar tráfego orgânico com pago no mesmo número.",
      "Linha 2 — quanto custou cada um. Custo por lead e custo por venda, lado a lado com o mês anterior, para que a tendência apareça, não só a foto do momento.",
      "Linha 3 — de onde veio. Canal e campanha específicos, usando o mesmo padrão de UTM todo mês, para que a comparação não exija tradução manual.",
      "Linha 4 — o que mudou desde o mês passado. Um teste novo, uma oferta nova, um público novo — o que foi tentado de diferente, e não só o resultado repetido do mês anterior.",
      "Linha 5 — o que vem a seguir. A decisão concreta que os números acima sustentam: manter, cortar ou escalar, com o valor e o motivo.",
      "Se um relatório não responde essas cinco linhas em menos de um parágrafo cada, ele foi feito para justificar a fatura — não para ajudar a decidir o próximo mês.",
    ],
  },
];

/** Combined lookup used by /blog/[slug] — the featured post is a real article too. */
export const ALL_POSTS: BlogPost[] = [FEATURED_POST, ...BLOG_POSTS];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  const others = ALL_POSTS.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}
