import { ImageSlot } from "@/components/layout/ImageSlot";

export function TestimonialCard({ quote, name, org }: { quote: string; name: string; org: string }) {
  return (
    <div
      data-reveal=""
      className="amu-testimonial"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-8)",
        boxShadow: "var(--shadow-xs)",
      }}
    >
      <div style={{ width: 120, height: 120, position: "relative" }}>
        <ImageSlot shape="circle" placeholder="Foto do cliente" />
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "1.5rem", lineHeight: 1.45, color: "var(--purple-700)", margin: 0 }}>
          &ldquo;{quote}&rdquo;
        </p>
        <div style={{ marginTop: "var(--space-5)", fontSize: "var(--fs-body-sm)" }}>
          <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--purple-700)" }}>{name}</span>
          <span style={{ color: "var(--text-muted)" }}> · {org}</span>
        </div>
      </div>
    </div>
  );
}
