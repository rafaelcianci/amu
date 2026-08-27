import Link from "next/link";

const SOLUTION_LINKS = [
  { label: "Social media", href: "/servicos/social-media" },
  { label: "Tráfego pago", href: "/servicos/trafego-pago" },
  { label: "Sites e landing pages", href: "/servicos/sites-e-landing-pages" },
  { label: "Branding e identidade", href: "/servicos/branding-e-identidade" },
  { label: "Consultoria estratégica", href: "/servicos/consultoria-estrategica" },
];

export interface FooterProps {
  variant?: "full" | "compact";
}

export function Footer({ variant = "compact" }: FooterProps) {
  if (variant === "compact") {
    return (
      <footer style={{ background: "var(--surface-inverse-deep)", color: "var(--purple-300)", padding: "var(--space-7) 0" }}>
        <div className="amu-section-rail amu-footer-compact-row" style={{ fontSize: "var(--fs-caption)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-horizontal-white.png" alt="AMUdesign" style={{ height: 26, width: "auto" }} />
          <span>@amudesign.3d · 48 92003-3146 · Santa Catarina</span>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: "var(--surface-inverse-deep)", color: "var(--purple-300)", padding: "var(--space-8) 0 var(--space-6)" }}>
      <div className="amu-section-rail">
        <div
          className="amu-footer-full-grid"
          style={{ paddingBottom: "var(--space-6)", borderBottom: "1px solid var(--border-inverse)" }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-horizontal-white.png" alt="AMUdesign" style={{ height: 30, width: "auto" }} />
            <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", margin: "var(--space-4) 0 0", maxWidth: 340 }}>
              Marketing digital para marcas que querem crescer com estratégia, estética e resultado.
            </p>
          </div>
          <div>
            <div style={{ fontSize: "var(--fs-overline)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-overline)", textTransform: "uppercase", color: "var(--purple-300)" }}>
              Soluções
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginTop: "var(--space-4)", fontSize: "var(--fs-body-sm)" }}>
              {SOLUTION_LINKS.map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "var(--purple-200)" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "var(--fs-overline)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-overline)", textTransform: "uppercase", color: "var(--purple-300)" }}>
              Contato
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginTop: "var(--space-4)", fontSize: "var(--fs-body-sm)", color: "var(--purple-25)" }}>
              <span>@amudesign.3d</span>
              <span>48 92003-3146</span>
              <span>Santa Catarina, Brasil</span>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "var(--space-5)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            fontSize: "var(--fs-caption)",
            color: "var(--purple-300)",
          }}
        >
          <span>© 2026 AMUdesign. Todos os direitos reservados.</span>
          <span>Atendemos todo o Brasil.</span>
        </div>
      </div>
    </footer>
  );
}
