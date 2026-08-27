"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "./Icon";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Lucide icon name shown before the label. */
  iconLeft?: string;
  /** Lucide icon name shown after the label. */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders a Next.js <Link> instead of a <button>. */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
}

const buttonSizes: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: "var(--control-h-sm)", padding: "0 var(--space-4)", fontSize: "var(--fs-body-sm)", gap: "var(--space-2)" },
  md: { height: "var(--control-h-md)", padding: "0 var(--space-5)", fontSize: "var(--fs-body-sm)", gap: "var(--space-2)" },
  lg: { height: "var(--control-h-lg)", padding: "0 var(--space-6)", fontSize: "var(--fs-body)", gap: "var(--space-3)" },
};

const buttonVariants: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: "var(--action-primary)", color: "var(--text-inverse)", border: "1px solid var(--action-primary)" },
  secondary: { background: "var(--action-secondary-bg)", color: "var(--purple-700)", border: "1px solid transparent" },
  outline: { background: "transparent", color: "var(--purple-700)", border: "1px solid var(--purple-200)" },
  ghost: { background: "transparent", color: "var(--purple-700)", border: "1px solid transparent" },
  inverse: { background: "var(--purple-25)", color: "var(--purple-700)", border: "1px solid var(--purple-25)" },
};

const buttonHovers: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: "var(--action-primary-hover)", borderColor: "var(--action-primary-hover)" },
  secondary: { background: "var(--purple-200)" },
  outline: { background: "var(--action-ghost-hover)", borderColor: "var(--purple-300)" },
  ghost: { background: "var(--action-ghost-hover)" },
  inverse: { background: "var(--white)" },
};

/** The primary AMU action. Pill-shaped, Manrope semibold, thin-stroke icons. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  type = "button",
  style,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const base: React.CSSProperties = {
    fontFamily: "var(--font-text)",
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--ls-wide)",
    borderRadius: "var(--radius-pill)",
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.42 : 1,
    transition: "var(--transition-control)",
    transform: press && !disabled ? "scale(.975)" : "scale(1)",
    boxShadow: hover && !disabled && variant === "primary" ? "var(--shadow-md)" : "none",
    whiteSpace: "nowrap",
    ...buttonSizes[size],
    ...buttonVariants[variant],
    ...(hover && !disabled ? buttonHovers[variant] : null),
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
  };

  const content = (
    <>
      {iconLeft ? <Icon name={iconLeft} size={size === "lg" ? 20 : 16} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={size === "lg" ? 20 : 16} /> : null}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} style={base} className={className} {...handlers} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={base}
      className={className}
      {...handlers}
    >
      {content}
    </button>
  );
}
