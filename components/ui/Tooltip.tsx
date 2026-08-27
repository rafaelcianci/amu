"use client";

import * as React from "react";

export interface TooltipProps {
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Hover/focus label on a wrapped trigger. Dark purple, small caption type. */
export function Tooltip({ label, placement = "top", children, style, ...rest }: TooltipProps) {
  const [show, setShow] = React.useState(false);
  const pos: React.CSSProperties = {
    top: { bottom: "100%", left: "50%", transform: "translate(-50%,-8px)" },
    bottom: { top: "100%", left: "50%", transform: "translate(-50%,8px)" },
    left: { right: "100%", top: "50%", transform: "translate(-8px,-50%)" },
    right: { left: "100%", top: "50%", transform: "translate(8px,-50%)" },
  }[placement];
  return (
    <span
      {...rest}
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute",
          ...pos,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          background: "var(--purple-900)",
          color: "var(--purple-25)",
          fontFamily: "var(--font-text)",
          fontSize: "var(--fs-caption)",
          fontWeight: "var(--fw-medium)",
          padding: "6px 10px",
          borderRadius: "var(--radius-sm)",
          boxShadow: "var(--shadow-sm)",
          opacity: show ? 1 : 0,
          transition: "opacity var(--dur-fast) var(--ease-standard)",
          zIndex: 40,
        }}
      >
        {label}
      </span>
    </span>
  );
}
