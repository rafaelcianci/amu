import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/layout/ImageSlot";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { StatRow } from "@/components/sections/StatRow";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FaqGrid } from "@/components/sections/FaqGrid";
import { SOLUTIONS } from "@/data/solutions";
import { METHOD_PHASES } from "@/data/method";
import { TESTIMONIALS, MANIFESTO_PILLARS, HOME_FAQ, DIFERENCIAIS } from "@/data/content";
import { CTA_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Agência AMU — Marca, conteúdo e mídia paga como um sistema só",
  description:
    "Pare de investir em marketing que não vira venda. A AMU constrói marca, conteúdo e mídia paga como um sistema só, com cada real rastreado do clique até a venda.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          data-parallax="0.4"
          style={{ position: "absolute", top: -140, right: -160, width: 560, height: 560, borderRadius: "50%", background: "var(--purple-100)", opacity: 0.7 }}
        />
        <div
          data-parallax="-0.22"
          style={{ position: "absolute", bottom: -160, left: -120, width: 360, height: 360, borderRadius: "50%", background: "var(--purple-50)" }}
        />
        <div className="amu-section-rail amu-hero-grid" style={{ position: "relative", paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
          <div>
            <Overline reveal>Santa Catarina · Marketing digital · Estratégia</Overline>
            <h1
              data-reveal="80"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--fw-light)",
                fontSize: "var(--fs-display-lg)",
                lineHeight: "var(--lh-tight)",
                letterSpacing: "var(--ls-display)",
                color: "var(--purple-700)",
                margin: "var(--space-5) 0 0",
              }}
            >
              Pare de investir em marketing que não vira venda.
            </h1>
            <p data-reveal="160" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: 500, margin: "var(--space-5) 0 0" }}>
              Sua agência entrega post bonito e relatório de curtida. Nós construímos marca, conteúdo e mídia paga como um sistema só, com cada real rastreado do clique até a venda.
            </p>
            <div data-reveal="240" style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)", alignItems: "center", flexWrap: "wrap" }}>
              <Button size="lg" iconRight="arrow-right" href={CTA_HREF}>
                Quero um diagnóstico gratuito
              </Button>
              <Button size="lg" variant="ghost" href="/metodo">
                Ver o método
              </Button>
            </div>
            <p style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)", margin: "var(--space-4) 0 0" }}>Sem compromisso · Resposta em até 24h</p>
            <StatRow
              reveal={300}
              stats={[
                { value: "5,0", label: "avaliação no Google" },
                { value: "95%", label: "renovação de clientes" },
                { value: "+60", label: "projetos entregues" },
              ]}
            />
          </div>
          <div data-parallax="0.12" style={{ position: "relative", aspectRatio: "4 / 5" }}>
            {/* <ImageSlot shape="rounded" radius={32} placeholder="Foto principal — equipe, estúdio ou dashboard (4:5)" /> */}
            <img style={{ inset: 0, borderRadius: "32px", objectFit: "cover" }} src="/assets/images/estudio.png" alt="Foto principal — equipe, estúdio ou dashboard (4:5)" />
          </div>
        </div>
      </section>

      <ParallaxBand quote="Marca, conteúdo e mídia paga operando como um sistema só." placeholder="Imagem full-bleed — equipe, estúdio ou cidade (paisagem)" speed={0.3} />

      {/* Manifesto */}
      <section id="manifesto" style={{ background: "var(--surface-inverse)", padding: "var(--section-y) 0" }}>
        <div className="amu-section-rail">
          <Overline tone="inverse" reveal>
            Manifesto
          </Overline>
          <h2
            data-reveal="80"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-light)",
              fontSize: "2.5rem",
              lineHeight: "var(--lh-snug)",
              letterSpacing: "var(--ls-display)",
              color: "var(--purple-25)",
              margin: "var(--space-4) 0 0",
              maxWidth: 820,
            }}
          >
            Você já trocou de agência e o resultado continuou o mesmo. O problema nunca foi a execução — era a falta de estratégia.
          </h2>
          <p style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--purple-200)", maxWidth: 660, margin: "var(--space-5) 0 0" }}>
            Já pagou por tráfego que gerou clique e não gerou pedido. Já recebeu relatório bonito que não mudou nada. É exatamente isso que a AMU resolve: diagnóstico antes de peça,
            estratégia antes de campanha e número real antes de opinião.
          </p>
          <div className="amu-grid-3" style={{ marginTop: "var(--space-7)" }}>
            {MANIFESTO_PILLARS.map((p) => (
              <div key={p.title} style={{ background: "rgba(248,247,255,.06)", border: "1px solid var(--border-inverse)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-25)", margin: 0 }}>{p.title}</h3>
                <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--purple-200)", margin: "var(--space-2) 0 0" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="amu-section-rail amu-section-y">
        <Overline reveal>Soluções</Overline>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-3)", maxWidth: 680 }}>
          Marca, conteúdo e mídia paga — integrados, não avulsos
        </h2>
        <p style={{ maxWidth: 600, lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "0 0 var(--space-6)" }}>
          Cada frente alimenta a próxima. O resultado é composto, não isolado. Você pode contratar uma só ou o pacote completo.
        </p>
        <div className="amu-grid-3">
          {SOLUTIONS.slice(0, 3).map((s) => (
            <a
              key={s.slug}
              href={`/servicos/${s.slug}`}
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "0 0 var(--space-6)",
                boxShadow: "var(--shadow-xs)",
                overflow: "hidden",
                display: "block",
                color: "inherit",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "14 / 10" }}>
                <ImageSlot shape="rect" style={{ backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div style={{ padding: "var(--space-5) var(--space-6) 0" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-overline)", color: "var(--purple-400)" }}>{s.index}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: "6px 0 0" }}>{s.name}</h3>
                <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 var(--space-3)" }}>{s.homeBlurb}</p>
                <div style={{ fontSize: "var(--fs-caption)", color: "var(--purple-500)", fontWeight: "var(--fw-semibold)" }}>{s.priceNote}</div>
              </div>
            </a>
          ))}
          {SOLUTIONS.slice(3, 5).map((s) => (
            <a
              key={s.slug}
              href={`/servicos/${s.slug}`}
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)", display: "block", color: "inherit" }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-overline)", color: "var(--purple-400)" }}>{s.index}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: "6px 0 0" }}>{s.name}</h3>
              <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 var(--space-3)" }}>{s.homeBlurb}</p>
              <div style={{ fontSize: "var(--fs-caption)", color: "var(--purple-500)", fontWeight: "var(--fw-semibold)" }}>{s.priceNote}</div>
            </a>
          ))}
          {(() => {
            const s = SOLUTIONS[5];
            return (
              <div style={{ background: "var(--surface-inverse)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-overline)", color: "var(--purple-300)" }}>{s.index}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-25)", margin: "6px 0 0" }}>{s.name}</h3>
                  <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--purple-200)", margin: "var(--space-2) 0 0" }}>{s.homeBlurb}</p>
                </div>
                <div style={{ marginTop: "var(--space-5)" }}>
                  <Button variant="inverse" size="sm" iconRight="arrow-right" href={`/servicos/${s.slug}`}>
                    Falar sobre o pacote
                  </Button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
        <Overline reveal>Método</Overline>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-3)" }}>
          Quatro fases, tudo à vista
        </h2>
        <p style={{ maxWidth: 600, lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "0 0 var(--space-6)" }}>
          Cada fase alimenta a próxima. Você sabe onde o projeto está e o que vem depois — nada é aleatório.
        </p>
        <div className="amu-grid-2">
          {METHOD_PHASES.map((phase) => (
            <div key={phase.index} style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)", color: "var(--purple-400)" }}>{phase.index}</span>
                <Overline>{phase.overline}</Overline>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: "10px 0 0" }}>{phase.title}</h3>
              <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 var(--space-4)" }}>{phase.homeBody}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--fs-caption)", color: "var(--text-body)" }}>
                {phase.homeBullets.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section id="resultados" style={{ background: "var(--surface-subtle)", padding: "var(--section-y) 0" }}>
        <div className="amu-section-rail">
          <Overline reveal>Diferenciais</Overline>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-6)", maxWidth: 640 }}>
            O que muda quando a estratégia vem antes da peça
          </h2>
          <div className="amu-grid-2">
            <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
              <Overline>Com a AMU</Overline>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h2)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-5)" }}>
                {DIFERENCIAIS.com.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {DIFERENCIAIS.com.items.map((it) => (
                  <div key={it.label}>
                    <div style={{ fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: "var(--purple-700)" }}>{it.label}</div>
                    <div style={{ fontSize: "var(--fs-caption)", lineHeight: 1.6, color: "var(--text-muted)" }}>{it.body}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "transparent", border: "1px solid var(--border-default)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
              <Overline style={{ color: "var(--neutral-500)" }}>Sem estratégia</Overline>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h2)", color: "var(--neutral-600)", margin: "var(--space-3) 0 var(--space-5)" }}>
                {DIFERENCIAIS.sem.heading}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {DIFERENCIAIS.sem.items.map((it) => (
                  <div key={it.label}>
                    <div style={{ fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: "var(--neutral-600)" }}>{it.label}</div>
                    <div style={{ fontSize: "var(--fs-caption)", lineHeight: 1.6, color: "var(--text-muted)" }}>{it.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "var(--space-6)" }}>
            <TestimonialCard {...TESTIMONIALS.home} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="amu-section-rail amu-section-y">
        <Overline reveal>Perguntas frequentes</Overline>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-3)", maxWidth: 640 }}>
          O que todo cliente pergunta antes de contratar
        </h2>
        <p style={{ maxWidth: 560, lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "0 0 var(--space-6)" }}>
          Se a sua dúvida não está aqui, ela é a primeira coisa que resolvemos na conversa inicial.
        </p>
        <FaqGrid items={HOME_FAQ} tone="card" />
      </section>

      <ClosingCta
        variant="purple"
        title="Sua marca pode mais."
        body="Quinze minutos de conversa mostram o que está travando o crescimento. Diagnóstico gratuito, sem compromisso."
        buttonLabel="Agendar diagnóstico"
      />

      <Footer variant="full" />
    </>
  );
}
