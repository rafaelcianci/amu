/** The four method phases — shared between the home page's compact 2x2 grid
 *  (LandingPage.dc.html §5) and the expanded /metodo page (Metodo.dc.html §3). */

export interface MethodDeliverable {
  title: string;
  body: string;
}

export interface MethodPhase {
  index: string;
  overline: string;
  title: string;
  /** Body copy + bullet list used on the home page's compact card. */
  homeBody: string;
  homeBullets: string[];
  /** Longer intro + duration + deliverable tiles used on /metodo. */
  metodoIntro: string;
  duration: string;
  deliverables: MethodDeliverable[];
  /** The final phase renders as the purple/inverse variant on both pages. */
  inverse?: boolean;
}

export const METHOD_PHASES: MethodPhase[] = [
  {
    index: "01",
    overline: "Diagnóstico",
    title: "Imersão profunda",
    homeBody:
      "Antes de criar qualquer peça, passamos semanas na sua marca, no seu mercado e nos seus concorrentes. Mapeamos cada lacuna que está custando dinheiro.",
    homeBullets: [
      "Auditoria de marca e presença digital",
      "Mapeamento competitivo do mercado",
      "Análise do público real, não do imaginado",
      "Relatório executivo com plano de crescimento",
    ],
    metodoIntro:
      "Entendemos antes de agir. Enquanto outras agências criam post no primeiro dia, nós mapeamos cada lacuna que está custando dinheiro.",
    duration: "2 a 3 semanas",
    deliverables: [
      { title: "Auditoria 360°", body: "Marca, presença digital e histórico de campanha." },
      { title: "Mapa competitivo", body: "Quem disputa a mesma atenção e com qual discurso." },
      { title: "Público real", body: "Comportamento e objeção de quem já compra." },
      { title: "Relatório executivo", body: "Plano de crescimento com prioridades e prazos." },
    ],
  },
  {
    index: "02",
    overline: "Posicionamento",
    title: "Arquitetura de marca",
    homeBody: "Clareza que protege: o que a marca diz, para quem, com qual tom e o que ela nunca vai dizer.",
    homeBullets: [
      "Posicionamento e promessa central",
      "Identidade visual e tom de voz",
      "Manual de aplicação em PDF",
      "Mensagens por canal e por etapa do funil",
    ],
    metodoIntro: "Clareza que blinda. Definimos o que a marca diz, para quem, com qual tom — e o que ela nunca vai dizer.",
    duration: "3 a 4 semanas",
    deliverables: [
      { title: "Promessa central", body: "Uma frase que a equipe inteira sabe repetir." },
      { title: "Identidade visual", body: "Marca, paleta, tipografia e regras de aplicação." },
      { title: "Tom de voz", body: "Como a marca fala em anúncio, post e atendimento." },
      { title: "Mensagem por canal", body: "O que dizer em cada etapa do funil." },
    ],
  },
  {
    index: "03",
    overline: "Execução",
    title: "Operação integrada",
    homeBody: "Conteúdo, campanha e página de conversão saindo juntos, no mesmo calendário e com a mesma mensagem.",
    homeBullets: [
      "Calendário editorial mensal aprovado",
      "Campanhas com criativos e variações",
      "Landing page e formulário rastreados",
      "UTM do clique até o CRM",
    ],
    metodoIntro:
      "Cada frente sincronizada. Conteúdo, campanha e página de conversão saem juntos, com a mesma mensagem e o mesmo calendário.",
    duration: "rotina mensal",
    deliverables: [
      { title: "Calendário aprovado", body: "Conteúdo do mês fechado com você antes de produzir." },
      { title: "Campanhas ativas", body: "Criativos, variações e públicos em teste controlado." },
      { title: "Landing rastreada", body: "Formulário e eventos ligados ao CRM." },
      { title: "UTM ponta a ponta", body: "Do clique até a venda, sem lacuna no caminho." },
    ],
  },
  {
    index: "04",
    overline: "Escala",
    title: "Crescimento composto",
    homeBody: "Cada mês melhor que o anterior: o que performou vira padrão, o que não performou sai da mesa.",
    homeBullets: [
      "Reunião mensal de leitura de dados",
      "Testes de criativo e de oferta",
      "Realocação de verba entre canais",
      "Painel com lead, venda e custo por canal",
    ],
    metodoIntro:
      "Cada mês melhor que o anterior. O que performou vira padrão, o que não performou sai da mesa sem drama.",
    duration: "contínuo",
    deliverables: [
      { title: "Leitura mensal", body: "Reunião com os números na tela, não no PDF." },
      { title: "Teste de oferta", body: "Criativo, público e proposta em ciclos curtos." },
      { title: "Verba realocada", body: "O canal que entrega recebe mais no mês seguinte." },
      { title: "Painel aberto", body: "Lead, venda e custo por canal em tempo real." },
    ],
    inverse: true,
  },
];
