import type { Metadata } from "next";
import { ImageSlot } from "@/components/layout/ImageSlot";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { StatRow } from "@/components/sections/StatRow";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { PRINCIPIOS, TEAM, TESTIMONIALS } from "@/data/content";
import sobre from "@/public/assets/images/sobre.jpg";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Um estúdio pequeno, por escolha. Time enxuto e sênior, poucos clientes por vez — a mesma pessoa que planeja é a que executa e a que senta com você na reunião mensal.",
};

export default function SobrePage() {
  return (
    <>
      <section className="amu-section-rail amu-hero-grid" style={{ paddingTop: "var(--space-10)", paddingBottom: "var(--section-y)" }}>
        <div>
          <Overline reveal>Sobre a AMU</Overline>
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
            Um estúdio pequeno, por escolha.
          </h1>
          <p data-reveal="160" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: 500, margin: "var(--space-5) 0 0" }}>
            Nascemos em Santa Catarina para resolver um incômodo simples: marca bonita que não vende e campanha barata que não constrói nada. Atendemos poucos clientes por vez porque
            estratégia não escala em série.
          </p>
          <StatRow
            reveal={240}
            stats={[
              { value: "2018", label: "primeiro cliente" },
              { value: "+60", label: "projetos entregues" },
              { value: "95%", label: "renovação de clientes" },
            ]}
          />
        </div>
        <div data-parallax="0.12" style={{ position: "relative", aspectRatio: "4 / 5" }}>
          <ImageSlot
            src={sobre}
            alt="Sobre a AMU - Foto do estúdio"
            sizes="(max-width: 900px) 100vw, 560px"
            eager
            style={{ borderRadius: "var(--radius-lg)" }}
          />
        </div>
      </section>

      <ParallaxBand
        quote="Aqui você fala com quem executa. Não existe camada entre você e o trabalho."
        placeholder="Imagem full-bleed — bastidor, mesa de trabalho, cidade (paisagem)"
        speed={0.32}
        height={460}
        inset={-100}
      />

      <section className="amu-section-rail amu-section-y">
        <Overline reveal>No que acreditamos</Overline>
        <h2
          data-reveal="60"
          style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-6)", maxWidth: 640 }}
        >
          Quatro princípios que valem mais que qualquer proposta
        </h2>
        <div className="amu-grid-2">
          {PRINCIPIOS.map((p, i) => (
            <div
              key={p.title}
              data-reveal={i * 80}
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-overline)", color: "var(--purple-400)" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: "6px 0 0" }}>{p.title}</h3>
              <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 0" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section style={{ background: "var(--surface-inverse)", padding: "var(--section-y) 0" }}>
        <div className="amu-section-rail">
          <Overline tone="inverse" reveal>
            Time
          </Overline>
          <h2 data-reveal="60" style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-25)", margin: "var(--space-3) 0 var(--space-3)" }}>
            Quem vai atender você
          </h2>
          <p data-reveal="100" style={{ color: "var(--purple-200)", lineHeight: "var(--lh-relaxed)", maxWidth: 560, margin: "0 0 var(--space-6)" }}>
            Time enxuto e sênior. A mesma pessoa que planeja é a que executa e a que senta com você na reunião mensal.
          </p>
          <div className="amu-grid-3">
            {TEAM.map((member, i) => (
              <div key={member.role} data-reveal={i * 100}>
                <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
                  <ImageSlot shape="rounded" radius={20} placeholder="Foto do time (1:1)" />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", color: "var(--purple-25)", marginTop: "var(--space-4)" }}>{member.name}</div>
                <div style={{ fontSize: "var(--fs-caption)", color: "var(--purple-300)" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section style={{ background: "var(--surface-inverse)", padding: "var(--section-y) 0", marginBottom: "var(--section-y)" }}>
        <div className="amu-section-rail">
          <TestimonialCard {...TESTIMONIALS.sobre} />
        </div>
      </section>

      <ClosingCta
        variant="purple"
        title="Vamos conversar 15 minutos?"
        body="Diagnóstico gratuito, sem compromisso. Você sai da chamada sabendo o que está travando o crescimento."
        buttonLabel="Agendar diagnóstico"
      />

      <Footer variant="compact" />
    </>
  );
}
