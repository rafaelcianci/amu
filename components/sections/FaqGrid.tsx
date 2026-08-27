export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqGrid({ items, tone = "card" }: { items: FaqItem[]; tone?: "card" | "subtle" }) {
  return (
    <div className="amu-grid-2">
      {items.map((item, i) => (
        <div
          key={item.question}
          data-reveal={i % 3 === 0 ? "" : (i % 3) * 80}
          style={{
            background: tone === "card" ? "var(--surface-card)" : "var(--surface-subtle)",
            border: tone === "card" ? "1px solid var(--border-subtle)" : "none",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-6)",
            boxShadow: tone === "card" ? "var(--shadow-xs)" : "none",
          }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: 0 }}>
            {item.question}
          </h3>
          <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 0" }}>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
