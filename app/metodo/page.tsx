import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { METHOD_PHASES } from "@/data/method";
import { CTA_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Método",
  description:
    "Quatro fases que transformam marca invisível em referência: diagnóstico, posicionamento, execução e escala — nada é aleatório e nada começa antes do diagnóstico.",
};

export default function MetodoPage() {
  return (
    <>
      <section style={{ position: "relative", padding: "var(--space-10) 0 var(--section-y)", overflow: "hidden" }}>
        <div
          data-parallax="0.4"
          style={{ position: "absolute", top: -120, right: -140, width: 560, height: 560, borderRadius: "50%", background: "var(--purple-100)", filter: "blur(4px)", opacity: 0.7 }}
        />
        <div
          data-parallax="-0.25"
          style={{ position: "absolute", bottom: -180, left: -120, width: 380, height: 380, borderRadius: "50%", background: "var(--purple-50)", opacity: 0.9 }}
        />
        <div className="amu-section-rail" style={{ position: "relative" }}>
          <Overline reveal>Metodologia</Overline>
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
              maxWidth: 820,
            }}
          >
            Quatro fases que transformam marca invisível em referência.
          </h1>
          <p data-reveal="160" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: 620, margin: "var(--space-5) 0 0" }}>
            Cada fase alimenta a próxima. Nada é aleatório e nada começa antes do diagnóstico — é isso que separa uma operação de marketing de uma fábrica de posts.
          </p>
          <div data-reveal="240" style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)", alignItems: "center", flexWrap: "wrap" }}>
            <Button size="lg" iconRight="arrow-right" href={CTA_HREF}>
              Quero um diagnóstico gratuito
            </Button>
            <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>Sem compromisso · Resposta em até 24h</span>
          </div>
        </div>
      </section>

      <ParallaxBand quote="Semanas mergulhando na sua marca antes da primeira peça sair." placeholder="Imagem full-bleed — equipe em reunião de estratégia (paisagem)" speed={0.3} />

      <section className="amu-section-rail amu-section-y" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {METHOD_PHASES.map((phase) => (
          <div
            key={phase.index}
            data-reveal=""
            className="amu-panel-split"
            style={{
              background: phase.inverse ? "var(--surface-inverse)" : "var(--surface-card)",
              border: phase.inverse ? "none" : "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-8)",
              boxShadow: phase.inverse ? "none" : "var(--shadow-xs)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--fw-light)",
                    fontSize: "3rem",
                    lineHeight: 1,
                    color: phase.inverse ? "var(--purple-400)" : "var(--purple-200)",
                  }}
                >
                  {phase.index}
                </span>
                <Overline tone={phase.inverse ? "inverse" : "purple"}>{phase.overline}</Overline>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--fw-medium)",
                  fontSize: "var(--fs-h2)",
                  color: phase.inverse ? "var(--purple-25)" : "var(--purple-700)",
                  margin: "var(--space-4) 0 0",
                }}
              >
                {phase.title}
              </h2>
              <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: phase.inverse ? "var(--purple-200)" : "var(--text-muted)", margin: "var(--space-2) 0 0" }}>
                {phase.metodoIntro}
              </p>
              <div style={{ marginTop: "var(--space-6)", fontSize: "var(--fs-caption)", color: phase.inverse ? "var(--purple-300)" : "var(--purple-600)", fontWeight: "var(--fw-semibold)" }}>
                {phase.duration}
              </div>
            </div>
            <div className="amu-grid-2" style={{ gap: "var(--space-4)" }}>
              {phase.deliverables.map((d) => (
                <div
                  key={d.title}
                  style={{
                    background: phase.inverse ? "rgba(248,247,255,.08)" : "var(--surface-subtle)",
                    border: phase.inverse ? "1px solid var(--border-inverse)" : "none",
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-5)",
                  }}
                >
                  <div style={{ fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: phase.inverse ? "var(--purple-25)" : "var(--purple-700)" }}>{d.title}</div>
                  <div style={{ fontSize: "var(--fs-caption)", lineHeight: 1.6, color: phase.inverse ? "var(--purple-200)" : "var(--text-muted)", marginTop: 4 }}>{d.body}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ClosingCta
        variant="lilac"
        title="Quer ver a fase 01 aplicada na sua marca?"
        body="O diagnóstico inicial é gratuito e já sai com as três prioridades mais urgentes do seu marketing."
        buttonLabel="Agendar diagnóstico"
        reassurance={null}
      />

      <Footer variant="compact" />
    </>
  );
}
