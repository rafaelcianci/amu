"use client";

import * as React from "react";
import { Icon } from "./Icon";

export interface CheckboxProps {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

/** Square 20px checkbox with purple fill when checked. */
export function Checkbox({ id, label, description, checked = false, onChange, disabled = false, style, ...rest }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      style={{
        display: "flex",
        alignItems: "flex-start",
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
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />
      <span
        style={{
          width: 20,
          height: 20,
          flex: "0 0 auto",
          marginTop: 1,
          borderRadius: "var(--radius-xs)",
          border: "1px solid " + (checked ? "var(--purple-700)" : "var(--border-default)"),
          background: checked ? "var(--purple-700)" : "var(--white)",
          color: "var(--purple-25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "var(--transition-control)",
        }}
      >
        {checked ? <Icon name="check" size={14} /> : null}
      </span>
      <span>
        <span style={{ fontFamily: "var(--font-text)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{label}</span>
        {description ? (
          <span style={{ display: "block", fontFamily: "var(--font-text)", fontSize: "var(--fs-caption)", color: "var(--text-muted)", marginTop: 2 }}>
            {description}
          </span>
        ) : null}
      </span>
    </label>
  );
}
