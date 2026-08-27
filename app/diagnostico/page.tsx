import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { DiagnosisForm } from "./DiagnosisForm";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito",
  description: "Conte um pouco sobre o seu negócio. Um estrategista responde em até 24h com os três pontos mais urgentes do seu marketing.",
};

export default function DiagnosticoPage() {
  return (
    <>
      <section className="amu-section-rail amu-hero-grid" style={{ paddingTop: "var(--space-9)", paddingBottom: "var(--section-y)", alignItems: "start" }}>
        <div>
          <Overline reveal>Diagnóstico gratuito</Overline>
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
            Conte um pouco sobre o seu negócio.
          </h1>
          <p data-reveal="160" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: 460, margin: "var(--space-5) 0 0" }}>
            Sem apresentação de vendas, sem enrolação. Um estrategista lê o que você contar aqui e responde em até 24h com as três prioridades mais urgentes do seu marketing.
          </p>
          <div
            data-reveal="240"
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-7)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-subtle)" }}
          >
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "var(--fs-h2)", color: "var(--purple-700)" }}>24h</span>
              <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>é o prazo máximo de resposta</span>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "var(--fs-h2)", color: "var(--purple-700)" }}>0</span>
              <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>compromisso para conversar</span>
            </div>
          </div>
        </div>

        <div data-reveal="120">
          <DiagnosisForm />
        </div>
      </section>

      <Footer variant="compact" />
    </>
  );
}
