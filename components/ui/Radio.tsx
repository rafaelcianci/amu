"use client";

import * as React from "react";

export interface RadioProps {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Single-choice control; render 2-4 in a flex column sharing one `name`. */
export function Radio({ id, name, label, description, checked = false, onChange, value, disabled = false, style, ...rest }: RadioProps) {
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
        name={name}
        value={value}
        type="radio"
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
          borderRadius: "50%",
          border: "1px solid " + (checked ? "var(--purple-700)" : "var(--border-default)"),
          background: "var(--white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "var(--transition-control)",
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: checked ? "var(--purple-700)" : "transparent",
            transition: "var(--transition-control)",
          }}
        />
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
