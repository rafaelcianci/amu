import { Button } from "@/components/ui/Button";
import { CTA_HREF } from "@/lib/nav";

export function ClosingCta({
  variant = "purple",
  title,
  body,
  buttonLabel = "Agendar diagnóstico",
  reassurance = "Resposta em até 24h.",
}: {
  variant?: "purple" | "lilac";
  title: string;
  body: string;
  buttonLabel?: string;
  reassurance?: string | null;
}) {
  const inverse = variant === "purple";
  return (
    <section className="amu-section-rail" style={{ paddingTop: 0, paddingBottom: "var(--section-y)" }}>
      <div
        data-reveal=""
        className="amu-cta-row"
        style={{
          background: inverse ? "var(--surface-inverse)" : "var(--surface-subtle)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-8)",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-light)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "var(--ls-display)",
              color: inverse ? "var(--purple-25)" : "var(--purple-700)",
              margin: 0,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: inverse ? "var(--purple-200)" : "var(--text-muted)",
              lineHeight: "var(--lh-relaxed)",
              margin: "var(--space-4) 0 0",
              maxWidth: 480,
            }}
          >
            {body}
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <Button variant={inverse ? "inverse" : "primary"} size="lg" iconRight="arrow-right" href={CTA_HREF}>
            {buttonLabel}
          </Button>
          {reassurance ? (
            <p style={{ fontSize: "var(--fs-caption)", color: inverse ? "var(--purple-300)" : "var(--text-muted)", margin: "var(--space-3) 0 0" }}>
              {reassurance}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
