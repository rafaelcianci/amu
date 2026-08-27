"use client";

import * as React from "react";
import { Icon } from "./Icon";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Array<string | SelectOption>;
  placeholder?: string;
  hint?: string;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

/** Native select with AMU chrome and a chevron affordance. */
export function Select({
  id,
  label,
  value,
  onChange,
  options = [],
  placeholder,
  hint,
  invalid = false,
  disabled = false,
  required = false,
  style,
  ...rest
}: SelectProps) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ width: "100%", ...style }}>
      {label ? (
        <label
          htmlFor={id}
          style={{
            fontFamily: "var(--font-text)",
            fontSize: "var(--fs-body-sm)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--purple-700)",
            display: "block",
            marginBottom: "var(--space-2)",
          }}
        >
          {label}
          {required ? <span style={{ color: "var(--danger-600)" }}> *</span> : null}
        </label>
      ) : null}
      <div style={{ position: "relative" }}>
        <select
          {...rest}
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            appearance: "none",
            fontFamily: "var(--font-text)",
            fontSize: "var(--fs-body-sm)",
            color: value ? "var(--ink)" : "var(--text-muted)",
            background: disabled ? "var(--neutral-100)" : "var(--white)",
            border: "1px solid " + (invalid ? "var(--danger-600)" : focus ? "var(--purple-400)" : "var(--border-default)"),
            borderRadius: "var(--radius-md)",
            height: "var(--control-h-md)",
            padding: "0 var(--space-7) 0 var(--space-4)",
            outline: "none",
            boxShadow: focus ? "var(--shadow-focus)" : "none",
            transition: "var(--transition-control)",
          }}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => {
            const v = typeof o === "string" ? o : o.value;
            const l = typeof o === "string" ? o : o.label;
            return (
              <option key={v} value={v}>
                {l}
              </option>
            );
          })}
        </select>
        <span
          style={{
            position: "absolute",
            right: "var(--space-4)",
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--purple-500)",
            pointerEvents: "none",
            display: "flex",
          }}
        >
          <Icon name="chevron-down" size={18} />
        </span>
      </div>
      {hint ? (
        <p
          style={{
            fontFamily: "var(--font-text)",
            fontSize: "var(--fs-caption)",
            margin: "var(--space-2) 0 0",
            color: invalid ? "var(--danger-600)" : "var(--text-muted)",
          }}
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}
