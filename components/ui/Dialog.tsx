"use client";

import * as React from "react";
import { IconButton } from "./IconButton";

export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  style?: React.CSSProperties;
}

/** Centered modal over a violet scrim. */
export function Dialog({ open = false, title, description, children, footer, onClose, width = 480, style, ...rest }: DialogProps) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--overlay)",
        backdropFilter: "var(--blur-panel)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-5)",
        zIndex: 60,
      }}
    >
      <div
        {...rest}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: width,
          background: "var(--surface-card)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          padding: "var(--space-6)",
          position: "relative",
          ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }}>
          <div>
            {title ? (
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", color: "var(--purple-700)", margin: 0 }}>
                {title}
              </h2>
            ) : null}
            {description ? (
              <p style={{ fontFamily: "var(--font-text)", fontSize: "var(--fs-body-sm)", color: "var(--text-muted)", margin: "var(--space-2) 0 0", lineHeight: "var(--lh-normal)" }}>
                {description}
              </p>
            ) : null}
          </div>
          {onClose ? <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} /> : null}
        </div>
        {children ? <div style={{ marginTop: "var(--space-5)" }}>{children}</div> : null}
        {footer ? <div style={{ marginTop: "var(--space-6)", display: "flex", justifyContent: "flex-end", gap: "var(--space-3)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
