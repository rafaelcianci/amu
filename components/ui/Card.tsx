"use client";

import * as React from "react";

export type CardVariant = "default" | "subtle" | "inverse" | "outline";

export interface CardProps {
  children?: React.ReactNode;
  variant?: CardVariant;
  interactive?: boolean;
  padding?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: unknown;
}

/** Surface container: white, 20px radius, hairline border, shadow only on hover. */
export function Card({
  children,
  variant = "default",
  interactive = false,
  padding = "var(--space-6)",
  as = "div",
  style,
  ...rest
}: CardProps) {
  const [hover, setHover] = React.useState(false);
  const Tag = as as React.ElementType;
  const tone: React.CSSProperties = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" },
    subtle: { background: "var(--surface-subtle)", border: "1px solid transparent", color: "var(--text-body)" },
    inverse: { background: "var(--surface-inverse)", border: "1px solid transparent", color: "var(--purple-25)" },
    outline: { background: "transparent", border: "1px solid var(--border-strong)", color: "var(--text-body)" },
  }[variant];
  return (
    <Tag
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-lg)",
        padding,
        transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
        boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: interactive && hover ? "translateY(-3px)" : "none",
        cursor: interactive ? "pointer" : undefined,
        ...tone,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
