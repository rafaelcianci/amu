import type { CSSProperties, ReactNode } from "react";

export function Overline({ children, tone = "purple", style, reveal }: { children: ReactNode; tone?: "purple" | "inverse"; style?: CSSProperties; reveal?: boolean | number }) {
  return (
    <div
      {...(reveal !== undefined ? { "data-reveal": reveal === true ? "" : String(reveal) } : {})}
      style={{
        fontSize: "var(--fs-overline)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: tone === "inverse" ? "var(--purple-300)" : "var(--purple-500)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
