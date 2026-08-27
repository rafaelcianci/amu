import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/layout/ImageSlot";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqGrid } from "@/components/sections/FaqGrid";
import { SOLUTIONS, getSolutionBySlug, getRelatedSolutions } from "@/data/solutions";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.heroLede,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const related = getRelatedSolutions(solution.slug, 3);

  return (
    <>
      <section style={{ position: "relative", padding: "var(--section-y) 0", overflow: "hidden" }}>
        <div data-parallax="0.35" style={{ position: "absolute", top: -160, left: -160, width: 520, height: 520, borderRadius: "50%", background: "var(--purple-100)", opacity: 0.75 }} />
        <div className="amu-section-rail amu-hero-grid" style={{ position: "relative" }}>
          <div>
            <Overline reveal>{solution.heroOverline}</Overline>
            <h1
              data-reveal="80"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--fw-light)",
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "var(--ls-display)",
                color: "var(--purple-700)",
                margin: "var(--space-4) 0 0",
              }}
            >
              {solution.heroTitle}
            </h1>
            <p data-reveal="160" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: 500, margin: "var(--space-5) 0 0" }}>
              {solution.heroLede}
            </p>
            <div data-reveal="240" style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)", alignItems: "center", flexWrap: "wrap" }}>
              <Button size="lg" iconRight="arrow-right" href="/diagnostico">
                {solution.ctaLabel}
              </Button>
              <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{solution.priceNote}</span>
            </div>
          </div>
          <div data-parallax="0.1" style={{ position: "relative", aspectRatio: "4 / 5" }}>
            <ImageSlot shape="rounded" radius={32} placeholder={solution.heroImagePlaceholder} />
          </div>
        </div>
      </section>

      <section className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="amu-grid-3">
          {solution.metrics.map((m, i) => (
            <div
              key={m.label}
              data-reveal={i * 100}
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}
            >
              <Overline>{m.label}</Overline>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "2rem", color: "var(--purple-700)", marginTop: 8 }}>{m.value}</div>
              <p style={{ fontSize: "var(--fs-caption)", lineHeight: 1.6, color: "var(--text-muted)", margin: "6px 0 0" }}>{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      <ParallaxBand quote={solution.bandQuote} placeholder={solution.bandPlaceholder} speed={0.3} />

      <section className="amu-section-rail amu-section-y amu-content-split">
        <div>
          <Overline reveal>O que está incluso</Overline>
          <h2 data-reveal="60" style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-5)" }}>
            {solution.includedTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {solution.included.map((item, i) => (
              <div
                key={item.title}
                data-reveal={i * 60}
                style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "var(--space-5)" }}
              >
                <div style={{ fontSize: "0.9375rem", fontWeight: "var(--fw-semibold)", color: "var(--purple-700)" }}>{item.title}</div>
                <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "6px 0 0" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="80" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
            <Overline>Pacotes</Overline>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-5)" }}>
              {solution.packages.map((pkg, i) => (
                <div
                  key={pkg.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    paddingBottom: i < solution.packages.length - 1 ? "var(--space-4)" : 0,
                    borderBottom: i < solution.packages.length - 1 ? "1px solid var(--border-subtle)" : "none",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", color: "var(--purple-700)" }}>{pkg.name}</div>
                    <div style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{pkg.detail}</div>
                  </div>
                  <div style={{ fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: "var(--purple-700)", whiteSpace: "nowrap" }}>{pkg.price}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "var(--fs-caption)", lineHeight: 1.6, color: "var(--text-muted)", margin: "var(--space-5) 0 0" }}>{solution.packagesNote}</p>
          </div>

          <div style={{ background: "var(--surface-inverse)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
            <Overline tone="inverse">{solution.chipsTitle}</Overline>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
              {solution.chips.map((c) => (
                <span key={c} style={{ fontSize: "var(--fs-caption)", color: "var(--purple-25)", border: "1px solid var(--border-inverse)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>
                  {c}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "var(--fs-caption)", lineHeight: 1.6, color: "var(--purple-200)", margin: "var(--space-5) 0 0" }}>{solution.chipsNote}</p>
          </div>
        </div>
      </section>

      <section className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
        <Overline reveal>Outras soluções</Overline>
        <h2 data-reveal="60" style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-5)" }}>
          Funciona ainda melhor com
        </h2>
        <div className="amu-grid-3">
          {related.map((r, i) => (
            <a
              key={r.slug}
              href={`/servicos/${r.slug}`}
              data-reveal={i * 100}
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)", display: "block", color: "inherit" }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-overline)", color: "var(--purple-400)" }}>{r.index}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: "6px 0 0" }}>{r.name}</h3>
              <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 0" }}>{r.homeBlurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
        <Overline reveal>Perguntas frequentes</Overline>
        <h2 data-reveal="60" style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-5)" }}>
          {solution.faqTitle}
        </h2>
        <FaqGrid items={solution.faq} tone="subtle" />
      </section>

      <ClosingCta variant="purple" title={solution.closingTitle} body={solution.closingBody} buttonLabel="Agendar diagnóstico" />

      <Footer variant="compact" />
    </>
  );
}
