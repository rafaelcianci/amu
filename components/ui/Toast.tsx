"use client";

import * as React from "react";
import { Icon } from "./Icon";

export type ToastTone = "success" | "info" | "warning" | "danger";

export interface ToastProps {
  tone?: ToastTone;
  title?: string;
  message?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}

const toastTones: Record<ToastTone, { icon: string; color: string }> = {
  success: { icon: "check-circle-2", color: "var(--success-600)" },
  info: { icon: "info", color: "var(--info-600)" },
  warning: { icon: "alert-triangle", color: "var(--warning-600)" },
  danger: { icon: "alert-circle", color: "var(--danger-600)" },
};

/** Transient confirmation strip. Bottom-right, auto-dismissed by the caller. */
export function Toast({ tone = "success", title, message, onClose, style, ...rest }: ToastProps) {
  const t = toastTones[tone];
  return (
    <div
      {...rest}
      role="status"
      style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
        padding: "var(--space-4)",
        minWidth: 300,
        maxWidth: 420,
        ...style,
      }}
    >
      <span style={{ color: t.color, display: "flex", marginTop: 1 }}>
        <Icon name={t.icon} size={20} />
      </span>
      <div style={{ flex: 1 }}>
        {title ? <p style={{ fontFamily: "var(--font-text)", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-body-sm)", color: "var(--purple-700)", margin: 0 }}>{title}</p> : null}
        {message ? <p style={{ fontFamily: "var(--font-text)", fontSize: "var(--fs-caption)", color: "var(--text-muted)", margin: "2px 0 0", lineHeight: "var(--lh-normal)" }}>{message}</p> : null}
      </div>
      {onClose ? (
        <button onClick={onClose} aria-label="Fechar" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--neutral-400)", display: "flex", padding: 0 }}>
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </div>
  );
}
