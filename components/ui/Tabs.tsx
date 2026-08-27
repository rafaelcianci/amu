"use client";

import * as React from "react";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "pill";
  style?: React.CSSProperties;
}

/** Underline or pill tab bar. Controlled via value/onChange. */
export function Tabs({ items = [], value, onChange, variant = "underline", style, ...rest }: TabsProps) {
  const first = items[0];
  const active = value != null ? value : first ? (typeof first === "string" ? first : first.value) : undefined;
  const isPill = variant === "pill";
  return (
    <div
      {...rest}
      role="tablist"
      style={{
        display: "inline-flex",
        gap: isPill ? "var(--space-1)" : "var(--space-6)",
        borderBottom: isPill ? "none" : "1px solid var(--border-subtle)",
        background: isPill ? "var(--purple-50)" : "transparent",
        padding: isPill ? "var(--space-1)" : 0,
        borderRadius: isPill ? "var(--radius-pill)" : 0,
        ...style,
      }}
    >
      {items.map((it) => {
        const v = typeof it === "string" ? it : it.value;
        const l = typeof it === "string" ? it : it.label;
        const on = v === active;
        return (
          <button
            key={v}
            role="tab"
            aria-selected={on}
            onClick={() => onChange && onChange(v)}
            style={{
              fontFamily: "var(--font-text)",
              fontSize: "var(--fs-body-sm)",
              fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
              color: on ? (isPill ? "var(--text-inverse)" : "var(--purple-700)") : "var(--text-muted)",
              background: isPill && on ? "var(--purple-700)" : "transparent",
              border: "none",
              cursor: "pointer",
              padding: isPill ? "8px var(--space-4)" : "0 0 var(--space-3)",
              borderRadius: isPill ? "var(--radius-pill)" : 0,
              borderBottom: isPill ? "none" : "2px solid " + (on ? "var(--purple-700)" : "transparent"),
              marginBottom: isPill ? 0 : -1,
              transition: "var(--transition-control)",
            }}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
