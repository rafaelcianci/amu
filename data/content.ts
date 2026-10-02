/** Testimonials, home/sobre FAQ sets, and the manifesto pillars — all
 *  content flagged in the handoff README as placeholder voice, not fact. */

import expertContabilidade from "@/public/assets/clientes/expert-contabilidade.jpg";
import auralis from "@/public/assets/clientes/auralis.png";

export const TESTIMONIALS = {
  home: {
    quote:
      "A AMU refez nossa marca, otimizou o site para o Google e ampliou o alcance dos nossos anúncios. Hoje o escritório aparece para quem procura contabilidade na região, com uma imagem à altura do nosso trabalho.",
    name: "Paulo",
    org: "Expert Contabilidade",
    image: {
      src: expertContabilidade,
      alt: "Sala de reunião da Expert Assessoria Contábil, com o logo na parede",
    },
    url: "https://www.expertcontabil.com.br/",
  },
  sobre: {
    quote:
      "A AMU criou a identidade da Auralis, fez o nosso site e cuida do conteúdo das redes sociais. Chegamos ao mercado com cara de empresa estabelecida, e a marca fala a mesma língua em todo lugar.",
    name: "Pedro",
    org: "Auralis BPO Financeiro",
    image: { src: auralis, alt: "Logo da Auralis" },
    url: "https://www.auralisbpo.com/",
  },
};

export const MANIFESTO_PILLARS = [
  {
    title: "Diagnóstico primeiro",
    body: "Antes da primeira peça, mapeamos marca, mercado e concorrência. Sem isso, todo investimento é tiro no escuro.",
  },
  {
    title: "Rastreabilidade total",
    body: "Campanha com UTM, lead no CRM e painel em tempo real. Você sabe o que funciona e onde otimizar.",
  },
  {
    title: "Estratégia sob medida",
    body: "Nada de fórmula genérica. Seu mercado e seu público pedem um plano construído só para eles.",
  },
];

export const HOME_FAQ = [
  {
    question: "Em quanto tempo aparecem resultados?",
    answer:
      "Os primeiros dados chegam na primeira semana de campanha. Leitura confiável, no segundo mês. Marca consolidada é trabalho de trimestre, não de semana.",
  },
  {
    question: "A verba de anúncio está inclusa?",
    answer: "Não. A gestão é cobrada por mês e a verba é paga direto às plataformas, no seu cartão e na sua conta de anúncios.",
  },
  {
    question: "Qual é o prazo mínimo de contrato?",
    answer: "Três meses nas frentes mensais. É o tempo mínimo para testar, ler os dados e ajustar com honestidade.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer: "Painel aberto com lead, venda e custo por canal, mais uma reunião mensal de leitura. Você fala direto com quem executa.",
  },
  {
    question: "Atendem fora de Santa Catarina?",
    answer: "Sim, em todo o Brasil. O processo roda por chamada e as entregas são digitais; presencial só em SC.",
  },
  {
    question: "Preciso contratar tudo junto?",
    answer: "Não. Cada frente funciona sozinha. Mas quando marca, conteúdo e mídia andam juntos, o resultado é composto.",
  },
];

export const DIFERENCIAIS = {
  com: {
    heading: "Resultado rastreável, mês após mês",
    items: [
      { label: "Marca que vende", body: "Conteúdo com estratégia por trás de cada post." },
      { label: "Lead qualificado", body: "Campanha que entrega contato do perfil certo, registrado no CRM." },
      { label: "Transparência total", body: "Painel com lead, venda e custo por canal em tempo real." },
      { label: "Continuidade", body: "Parceria longa: o aprendizado de um mês vira vantagem no próximo." },
    ],
  },
  sem: {
    heading: "Investimento perdido, resultado invisível",
    items: [
      { label: "Post genérico", body: "Ninguém salva, ninguém compartilha, ninguém lembra." },
      { label: "Clique vazio", body: "Tráfego que gera visita e não gera pedido." },
      { label: "Métrica de vaidade", body: "Relatório de curtida, alcance e impressão — sem venda." },
      { label: "Recomeço a cada troca", body: "Nova agência, novo teste, mesmo ponto de partida." },
    ],
  },
};

export const PRINCIPIOS = [
  {
    title: "Dado antes de opinião",
    body: "Gosto pessoal não decide campanha. Se não dá para medir, não entra no plano.",
  },
  {
    title: "Poucos clientes por vez",
    body: "Preferimos recusar um projeto a entregar atenção dividida.",
  },
  {
    title: "Conta aberta",
    body: "Verba, painel e resultado ficam na sua mão. Nada roda em conta nossa.",
  },
  {
    title: "Sem letra miúda",
    body: "Escopo, prazo e valor combinados por escrito antes de começar.",
  },
];

export const TEAM = [
  { name: "Nome Sobrenome", role: "Estratégia e atendimento" },
  { name: "Nome Sobrenome", role: "Direção de arte e conteúdo" },
  { name: "Nome Sobrenome", role: "Mídia paga e dados" },
];
