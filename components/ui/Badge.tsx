import type { CSSProperties, ReactNode } from "react";

export type BadgeTone = "purple" | "neutral" | "success" | "warning" | "danger" | "info" | "inverse";

export interface BadgeProps {
  children?: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  style?: CSSProperties;
}

const badgeTones: Record<BadgeTone, CSSProperties> = {
  purple: { background: "var(--purple-100)", color: "var(--purple-700)" },
  neutral: { background: "var(--neutral-100)", color: "var(--neutral-700)" },
  success: { background: "var(--success-100)", color: "var(--success-600)" },
  warning: { background: "var(--warning-100)", color: "var(--warning-600)" },
  danger: { background: "var(--danger-100)", color: "var(--danger-600)" },
  info: { background: "var(--info-100)", color: "var(--info-600)" },
  inverse: { background: "rgba(248,247,255,.14)", color: "var(--purple-25)" },
};

/** Small status label. Uppercase, wide tracking. */
export function Badge({ children, tone = "purple", dot = false, style, ...rest }: BadgeProps) {
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        fontFamily: "var(--font-text)",
        fontSize: "var(--fs-overline)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        padding: "5px 10px",
        borderRadius: "var(--radius-xs)",
        ...badgeTones[tone],
        ...style,
      }}
    >
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} /> : null}
      {children}
    </span>
  );
}
