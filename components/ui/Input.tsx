"use client";

import * as React from "react";

function FieldLabel({ children, htmlFor, required }: { children: React.ReactNode; htmlFor?: string; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        fontFamily: "var(--font-text)",
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--purple-700)",
        display: "block",
        marginBottom: "var(--space-2)",
      }}
    >
      {children}
      {required ? <span style={{ color: "var(--danger-600)" }}> *</span> : null}
    </label>
  );
}

function FieldHint({ text, invalid }: { text: string; invalid?: boolean }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-text)",
        fontSize: "var(--fs-caption)",
        margin: "var(--space-2) 0 0",
        color: invalid ? "var(--danger-600)" : "var(--text-muted)",
      }}
    >
      {text}
    </p>
  );
}

export interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "email" | "tel" | "url" | "password" | "number";
  hint?: string;
  invalid?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  style?: React.CSSProperties;
}

/** Text field. Rounded-rect, hairline border, purple focus ring. */
export function Input({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  hint,
  invalid = false,
  disabled = false,
  multiline = false,
  rows = 4,
  required = false,
  style,
  ...rest
}: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const control: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-text)",
    fontSize: "var(--fs-body-sm)",
    color: "var(--ink)",
    background: disabled ? "var(--neutral-100)" : "var(--white)",
    border: "1px solid " + (invalid ? "var(--danger-600)" : focus ? "var(--purple-400)" : "var(--border-default)"),
    borderRadius: "var(--radius-md)",
    height: multiline ? undefined : "var(--control-h-md)",
    padding: multiline ? "var(--space-3) var(--space-4)" : "0 var(--space-4)",
    outline: "none",
    resize: multiline ? "vertical" : undefined,
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    transition: "var(--transition-control)",
  };
  return (
    <div style={{ width: "100%", ...style }}>
      {label ? (
        <FieldLabel htmlFor={id} required={required}>
          {label}
        </FieldLabel>
      ) : null}
      {multiline ? (
        <textarea
          {...rest}
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={control}
        />
      ) : (
        <input
          {...rest}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={control}
        />
      )}
      {hint ? <FieldHint text={hint} invalid={invalid} /> : null}
    </div>
  );
}
