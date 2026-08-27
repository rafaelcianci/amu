"use client";

import * as React from "react";

export interface SwitchProps {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** On/off toggle for instant settings (no save button). */
export function Switch({ id, label, checked = false, onChange, disabled = false, style, ...rest }: SwitchProps) {
  return (
    <label
      htmlFor={id}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <input
        {...rest}
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />
      <span
        style={{
          width: 44,
          height: 26,
          borderRadius: "var(--radius-pill)",
          padding: 3,
          boxSizing: "border-box",
          background: checked ? "var(--purple-700)" : "var(--neutral-300)",
          transition: "background-color var(--dur-base) var(--ease-standard)",
          display: "inline-flex",
        }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "var(--white)",
            boxShadow: "var(--shadow-xs)",
            transform: checked ? "translateX(18px)" : "translateX(0)",
            transition: "transform var(--dur-base) var(--ease-out)",
          }}
        />
      </span>
      {label ? <span style={{ fontFamily: "var(--font-text)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{label}</span> : null}
    </label>
  );
}
