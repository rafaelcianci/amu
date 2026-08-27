export interface Stat {
  value: string;
  label: string;
}

export function StatRow({ stats, reveal }: { stats: Stat[]; reveal?: number }) {
  return (
    <div
      data-reveal={reveal ?? ""}
      style={{
        display: "flex",
        gap: "var(--space-8)",
        flexWrap: "wrap",
        marginTop: "var(--space-7)",
        paddingTop: "var(--space-6)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {stats.map((s) => (
        <div key={s.label}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "2rem", color: "var(--purple-700)" }}>{s.value}</div>
          <div style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
