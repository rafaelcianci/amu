"use client";

import * as React from "react";
import { Icon } from "./Icon";

export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?: (e: React.MouseEvent) => void;
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Filter / category chip. Pill, selectable, optionally removable. */
export function Tag({ children, selected = false, onSelect, onRemove, style, ...rest }: TagProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      {...rest}
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        fontFamily: "var(--font-text)",
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-medium)",
        height: 32,
        padding: "0 var(--space-4)",
        borderRadius: "var(--radius-pill)",
        cursor: onSelect ? "pointer" : "default",
        transition: "var(--transition-control)",
        background: selected ? "var(--purple-700)" : hover && onSelect ? "var(--purple-50)" : "transparent",
        color: selected ? "var(--text-inverse)" : "var(--neutral-700)",
        border: "1px solid " + (selected ? "var(--purple-700)" : "var(--border-default)"),
        ...style,
      }}
    >
      {children}
      {onRemove ? (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
          style={{ display: "inline-flex", cursor: "pointer", opacity: 0.6 }}
        >
          <Icon name="x" size={14} />
        </span>
      ) : null}
    </span>
  );
}
