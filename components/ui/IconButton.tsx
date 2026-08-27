"use client";

import * as React from "react";
import { Icon } from "./Icon";

export type IconButtonVariant = "ghost" | "outline" | "solid" | "inverse";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps {
  icon?: string;
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

const iconButtonSizes: Record<IconButtonSize, number> = { sm: 34, md: 44, lg: 54 };

/** Circular icon-only control — toolbars, close buttons, nav menu trigger. */
export function IconButton({
  icon = "x",
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}: IconButtonProps) {
  const [hover, setHover] = React.useState(false);
  const d = iconButtonSizes[size];
  const tone: React.CSSProperties = {
    ghost: { background: hover ? "var(--action-ghost-hover)" : "transparent", color: "var(--purple-700)", border: "1px solid transparent" },
    outline: { background: hover ? "var(--action-ghost-hover)" : "transparent", color: "var(--purple-700)", border: "1px solid var(--purple-200)" },
    solid: { background: hover ? "var(--action-primary-hover)" : "var(--action-primary)", color: "var(--text-inverse)", border: "1px solid transparent" },
    inverse: { background: hover ? "rgba(248,247,255,.18)" : "rgba(248,247,255,.08)", color: "var(--purple-25)", border: "1px solid var(--border-inverse)" },
  }[variant];
  return (
    <button
      {...rest}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: d,
        height: d,
        borderRadius: "var(--radius-circle)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.42 : 1,
        transition: "var(--transition-control)",
        ...tone,
        ...style,
      }}
    >
      <Icon name={icon} size={size === "sm" ? 16 : 20} />
    </button>
  );
}
