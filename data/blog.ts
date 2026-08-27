export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tráfego pago" | "Social media" | "Branding" | "Dados";
  readTime: string;
  date: string;
}

export const BLOG_CATEGORIES = ["Todos", "Tráfego pago", "Social media", "Branding", "Dados"] as const;

export const FEATURED_POST = {
  slug: "por-que-seu-anuncio-gera-clique-e-nao-gera-pedido",
  category: "Tráfego pago",
  readTime: "8 min de leitura",
  title: "Por que seu anúncio gera clique e não gera pedido",
  excerpt:
    "Na maioria dos casos o problema não está na campanha: está na página de destino, na oferta e na ausência de rastreio. Um roteiro em quatro checagens para descobrir onde o dinheiro vaza.",
  date: "12 de agosto de 2026",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quantos-posts-por-mes-sua-empresa-realmente-precisa",
    title: "Quantos posts por mês sua empresa realmente precisa",
    excerpt: "A resposta depende do ciclo de compra, não do concorrente que posta todo dia.",
    category: "Social media",
    readTime: "5 min",
    date: "4 de agosto de 2026",
  },
  {
    slug: "utm-na-pratica",
    title: "UTM na prática: como saber de onde vem cada venda",
    excerpt: "Um padrão de nomenclatura simples que resolve 90% da confusão de relatório.",
    category: "Dados",
    readTime: "6 min",
    date: "28 de julho de 2026",
  },
  {
    slug: "rebranding-nao-e-trocar-o-logo",
    title: "Rebranding não é trocar o logo",
    excerpt: "Quando vale mexer na marca e quando o problema é só a comunicação.",
    category: "Branding",
    readTime: "7 min",
    date: "21 de julho de 2026",
  },
  {
    slug: "com-quanta-verba-da-para-comecar-em-anuncio",
    title: "Com quanta verba dá para começar em anúncio",
    excerpt: "O piso realista para gerar aprendizado em vez de gastar sem ler nada.",
    category: "Tráfego pago",
    readTime: "4 min",
    date: "14 de julho de 2026",
  },
  {
    slug: "salvamento-vale-mais-que-curtida",
    title: "Salvamento vale mais que curtida",
    excerpt: "Como escolher as três métricas que realmente indicam conteúdo útil.",
    category: "Social media",
    readTime: "5 min",
    date: "7 de julho de 2026",
  },
  {
    slug: "o-relatorio-que-a-sua-agencia-deveria-mandar",
    title: "O relatório que a sua agência deveria mandar",
    excerpt: "Cinco linhas que respondem se o investimento do mês valeu a pena.",
    category: "Dados",
    readTime: "9 min",
    date: "30 de junho de 2026",
  },
];
