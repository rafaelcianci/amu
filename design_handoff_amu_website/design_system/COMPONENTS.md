# AMU components — source reference

The 16 React primitives from the AMU design system, inlined here as a **reference document** rather than as loose `.jsx` files (loose component files inside this bundle would be picked up as duplicate components by the design-system tooling).

Each component is self-contained: it imports React only, styles itself through the CSS custom properties in `tokens/`, and needs no npm package. To use them, copy each block into its own file in your codebase (e.g. `components/ui/Button.tsx`) and keep the relative sibling imports (`./Icon`, `./IconButton`) intact. The `.d.ts` block below each implementation is the props contract — port it to your own types.


---

## Button

```jsx
import React from 'react';
import { Icon } from './Icon.jsx';

const buttonSizes = {
  sm: { height: 'var(--control-h-sm)', padding: '0 var(--space-4)', fontSize: 'var(--fs-body-sm)', gap: 'var(--space-2)' },
  md: { height: 'var(--control-h-md)', padding: '0 var(--space-5)', fontSize: 'var(--fs-body-sm)', gap: 'var(--space-2)' },
  lg: { height: 'var(--control-h-lg)', padding: '0 var(--space-6)', fontSize: 'var(--fs-body)', gap: 'var(--space-3)' },
};

const buttonVariants = {
  primary: { background: 'var(--action-primary)', color: 'var(--text-inverse)', border: '1px solid var(--action-primary)' },
  secondary: { background: 'var(--action-secondary-bg)', color: 'var(--purple-700)', border: '1px solid transparent' },
  outline: { background: 'transparent', color: 'var(--purple-700)', border: '1px solid var(--purple-200)' },
  ghost: { background: 'transparent', color: 'var(--purple-700)', border: '1px solid transparent' },
  inverse: { background: 'var(--purple-25)', color: 'var(--purple-700)', border: '1px solid var(--purple-25)' },
};

const buttonHovers = {
  primary: { background: 'var(--action-primary-hover)', borderColor: 'var(--action-primary-hover)' },
  secondary: { background: 'var(--purple-200)' },
  outline: { background: 'var(--action-ghost-hover)', borderColor: 'var(--purple-300)' },
  ghost: { background: 'var(--action-ghost-hover)' },
  inverse: { background: 'var(--white)' },
};

/** The primary AMU action. Pill-shaped, Manrope semibold, thin-stroke icons. */
export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  fullWidth = false, disabled = false, href, type = 'button', style, onClick, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const base = {
    fontFamily: 'var(--font-text)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-wide)',
    borderRadius: 'var(--radius-pill)',
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'var(--transition-control)',
    transform: press && !disabled ? 'scale(.975)' : 'scale(1)',
    boxShadow: hover && !disabled && variant === 'primary' ? 'var(--shadow-md)' : 'none',
    whiteSpace: 'nowrap',
    ...buttonSizes[size],
    ...buttonVariants[variant],
    ...(hover && !disabled ? buttonHovers[variant] : null),
    ...style,
  };
  return (
    <Tag
      {...rest}
      href={href}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={base}
    >
      {iconLeft ? <Icon name={iconLeft} size={size === 'lg' ? 20 : 16} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={size === 'lg' ? 20 : 16} /> : null}
    </Tag>
  );
}
```

**Props (`Button.d.ts`)**

```ts
import * as React from 'react';
/**
 * Pill action button in the AMU purple.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, badges and tags" viewport="700x260"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown before the label. */
  iconLeft?: string;
  /** Lucide icon name shown after the label. */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
```

---

## IconButton

```jsx
import React from 'react';
import { Icon } from './Icon.jsx';

const iconButtonSizes = { sm: 34, md: 44, lg: 54 };

/** Circular icon-only control — toolbars, close buttons, carousel arrows. */
export function IconButton({ icon = 'x', label, variant = 'ghost', size = 'md', disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = iconButtonSizes[size];
  const tone = {
    ghost: { background: hover ? 'var(--action-ghost-hover)' : 'transparent', color: 'var(--purple-700)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--action-ghost-hover)' : 'transparent', color: 'var(--purple-700)', border: '1px solid var(--purple-200)' },
    solid: { background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)', color: 'var(--text-inverse)', border: '1px solid transparent' },
    inverse: { background: hover ? 'rgba(248,247,255,.18)' : 'rgba(248,247,255,.08)', color: 'var(--purple-25)', border: '1px solid var(--border-inverse)' },
  }[variant];
  return (
    <button
      {...rest}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, borderRadius: 'var(--radius-circle)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.42 : 1,
        transition: 'var(--transition-control)', ...tone, ...style,
      }}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : 20} />
    </button>
  );
}
```

**Props (`IconButton.d.ts`)**

```ts
import * as React from 'react';
export interface IconButtonProps {
  /** Lucide icon name. */
  icon?: string;
  /** Accessible label — always required in practice. */
  label: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
```

---

## Icon

```jsx
import React from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/** Lucide icon rendered as a CSS mask so it inherits currentColor. */
export function Icon({ name = 'circle', size = 20, strokeWidth, style, ...rest }) {
  const url = 'url("' + CDN + name + '.svg")';
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      {...rest}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        backgroundColor: 'currentColor',
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        ...style,
      }}
    />
  );
}
```

**Props (`Icon.d.ts`)**

```ts
import * as React from 'react';
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name in kebab-case, e.g. "arrow-right". */
  name?: string;
  /** Square size in px. 16 / 20 / 24 are the sanctioned steps. */
  size?: number;
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): JSX.Element;
```

---

## Badge

```jsx
import React from 'react';

const badgeTones = {
  purple: { background: 'var(--purple-100)', color: 'var(--purple-700)' },
  neutral: { background: 'var(--neutral-100)', color: 'var(--neutral-700)' },
  success: { background: 'var(--success-100)', color: 'var(--success-600)' },
  warning: { background: 'var(--warning-100)', color: 'var(--warning-600)' },
  danger: { background: 'var(--danger-100)', color: 'var(--danger-600)' },
  info: { background: 'var(--info-100)', color: 'var(--info-600)' },
  inverse: { background: 'rgba(248,247,255,.14)', color: 'var(--purple-25)' },
};

/** Small status label. Uppercase, wide tracking. */
export function Badge({ children, tone = 'purple', dot = false, style, ...rest }) {
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      fontFamily: 'var(--font-text)', fontSize: 'var(--fs-overline)', fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-overline)', textTransform: 'uppercase',
      padding: '5px 10px', borderRadius: 'var(--radius-xs)',
      ...badgeTones[tone], ...style,
    }}>
      {dot ? <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} /> : null}
      {children}
    </span>
  );
}
```

**Props (`Badge.d.ts`)**

```ts
import * as React from 'react';
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'purple' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'inverse';
  /** Leading status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
```

---

## Tag

```jsx
import React from 'react';
import { Icon } from './Icon.jsx';

/** Filter / category chip. Pill, selectable, optionally removable. */
export function Tag({ children, selected = false, onSelect, onRemove, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      {...rest}
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)',
        height: 32, padding: '0 var(--space-4)', borderRadius: 'var(--radius-pill)',
        cursor: onSelect ? 'pointer' : 'default', transition: 'var(--transition-control)',
        background: selected ? 'var(--purple-700)' : hover && onSelect ? 'var(--purple-50)' : 'transparent',
        color: selected ? 'var(--text-inverse)' : 'var(--neutral-700)',
        border: '1px solid ' + (selected ? 'var(--purple-700)' : 'var(--border-default)'),
        ...style,
      }}
    >
      {children}
      {onRemove ? (
        <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.6 }}>
          <Icon name="x" size={14} />
        </span>
      ) : null}
    </span>
  );
}
```

**Props (`Tag.d.ts`)**

```ts
import * as React from 'react';
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?: (e: React.MouseEvent) => void;
  /** Renders a small x; omit for non-removable chips. */
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
```

---

## Card

```jsx
import React from 'react';

/** Surface container: white, 20px radius, hairline border, shadow only on hover. */
export function Card({ children, variant = 'default', interactive = false, padding = 'var(--space-6)', as = 'div', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const tone = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    subtle: { background: 'var(--surface-subtle)', border: '1px solid transparent', color: 'var(--text-body)' },
    inverse: { background: 'var(--surface-inverse)', border: '1px solid transparent', color: 'var(--purple-25)' },
    outline: { background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text-body)' },
  }[variant];
  return (
    <Tag
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-lg)', padding, transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        cursor: interactive ? 'pointer' : undefined,
        ...tone, ...style,
      }}
    >
      {children}
    </Tag>
  );
}
```

**Props (`Card.d.ts`)**

```ts
import * as React from 'react';
/**
 * Base surface for content blocks.
 * @startingPoint section="Core" subtitle="Cards, surfaces and elevation" viewport="700x300"
 */
export interface CardProps {
  children?: React.ReactNode;
  variant?: 'default' | 'subtle' | 'inverse' | 'outline';
  /** Adds lift + shadow on hover; use for clickable cards only. */
  interactive?: boolean;
  padding?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
```

---

## Logo

```jsx
import React from 'react';

const LOGO_SRC = {
  horizontal: 'assets/logo.svg',
  stacked: 'assets/logo-stacked-lilac.png',
  grayscale: 'assets/logo-grayscale.png',
  white: 'assets/logo-horizontal-white.png',
};

/** The AMUdesign lockup. Never re-typeset or recolour it — swap the file. */
export function Logo({ variant = 'horizontal', height = 34, base = '', alt = 'AMUdesign', style, ...rest }) {
  const prefix = base ? base.replace(/\/$/, '') + '/' : '';
  return <img {...rest} src={prefix + LOGO_SRC[variant]} alt={alt} style={{ height, width: 'auto', display: 'block', ...style }} />;
}
```

**Props (`Logo.d.ts`)**

```ts
import * as React from 'react';
export interface LogoProps {
  /** horizontal = primary lockup; stacked = social/avatar; grayscale = one-colour contexts. */
  variant?: 'horizontal' | 'stacked' | 'grayscale' | 'white';
  /** Rendered height in px. Minimum 24px for the horizontal lockup. */
  height?: number;
  /** Path prefix to the design-system root, e.g. "../.." */
  base?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
```

---

## Input

```jsx
import React from 'react';

function fieldLabel(children, htmlFor, required) {
  return (
    <label htmlFor={htmlFor} style={{
      fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-semibold)',
      color: 'var(--purple-700)', display: 'block', marginBottom: 'var(--space-2)',
    }}>
      {children}{required ? <span style={{ color: 'var(--danger-600)' }}> *</span> : null}
    </label>
  );
}
function fieldHint(text, invalid) {
  return (
    <p style={{
      fontFamily: 'var(--font-text)', fontSize: 'var(--fs-caption)', margin: 'var(--space-2) 0 0',
      color: invalid ? 'var(--danger-600)' : 'var(--text-muted)',
    }}>{text}</p>
  );
}

/** Text field. Rounded-rect, hairline border, purple focus ring. */
export function Input({
  id, label, placeholder, value, onChange, type = 'text', hint, invalid = false,
  disabled = false, multiline = false, rows = 4, required = false, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  const control = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', color: 'var(--ink)',
    background: disabled ? 'var(--neutral-100)' : 'var(--white)',
    border: '1px solid ' + (invalid ? 'var(--danger-600)' : focus ? 'var(--purple-400)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-md)',
    height: multiline ? undefined : 'var(--control-h-md)',
    padding: multiline ? 'var(--space-3) var(--space-4)' : '0 var(--space-4)',
    outline: 'none', resize: multiline ? 'vertical' : undefined,
    boxShadow: focus ? 'var(--shadow-focus)' : 'none',
    transition: 'var(--transition-control)',
  };
  return (
    <div style={{ width: '100%', ...style }}>
      {label ? fieldLabel(label, id, required) : null}
      <Tag
        {...rest}
        id={id} type={multiline ? undefined : type} rows={multiline ? rows : undefined}
        placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={control}
      />
      {hint ? fieldHint(hint, invalid) : null}
    </div>
  );
}
```

**Props (`Input.d.ts`)**

```ts
import * as React from 'react';
/**
 * Single- or multi-line text field.
 * @startingPoint section="Forms" subtitle="Inputs, selects, checkboxes, radios, switches" viewport="700x340"
 */
export interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number';
  /** Helper text below the field; turns red when invalid. */
  hint?: string;
  invalid?: boolean;
  disabled?: boolean;
  /** Renders a textarea. */
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
```

---

## Select

```jsx
import React from 'react';

function fieldLabel(children, htmlFor, required) {
  return (
    <label htmlFor={htmlFor} style={{
      fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-semibold)',
      color: 'var(--purple-700)', display: 'block', marginBottom: 'var(--space-2)',
    }}>
      {children}{required ? <span style={{ color: 'var(--danger-600)' }}> *</span> : null}
    </label>
  );
}
function fieldHint(text, invalid) {
  return (
    <p style={{
      fontFamily: 'var(--font-text)', fontSize: 'var(--fs-caption)', margin: 'var(--space-2) 0 0',
      color: invalid ? 'var(--danger-600)' : 'var(--text-muted)',
    }}>{text}</p>
  );
}
import { Icon } from '../core/Icon.jsx';

/** Native select with AMU chrome and a chevron affordance. */
export function Select({ id, label, value, onChange, options = [], placeholder, hint, invalid = false, disabled = false, required = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ width: '100%', ...style }}>
      {label ? fieldLabel(label, id, required) : null}
      <div style={{ position: 'relative' }}>
        <select
          {...rest}
          id={id} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', boxSizing: 'border-box', appearance: 'none',
            fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)',
            color: value ? 'var(--ink)' : 'var(--text-muted)',
            background: disabled ? 'var(--neutral-100)' : 'var(--white)',
            border: '1px solid ' + (invalid ? 'var(--danger-600)' : focus ? 'var(--purple-400)' : 'var(--border-default)'),
            borderRadius: 'var(--radius-md)', height: 'var(--control-h-md)',
            padding: '0 var(--space-7) 0 var(--space-4)', outline: 'none',
            boxShadow: focus ? 'var(--shadow-focus)' : 'none', transition: 'var(--transition-control)',
          }}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => {
            const v = typeof o === 'string' ? o : o.value;
            const l = typeof o === 'string' ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', color: 'var(--purple-500)', pointerEvents: 'none', display: 'flex' }}>
          <Icon name="chevron-down" size={18} />
        </span>
      </div>
      {hint ? fieldHint(hint, invalid) : null}
    </div>
  );
}
```

**Props (`Select.d.ts`)**

```ts
import * as React from 'react';
export interface SelectOption { value: string; label: string }
export interface SelectProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  placeholder?: string;
  hint?: string;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
```

---

## Checkbox

```jsx
import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Square 20px checkbox with purple fill when checked. */
export function Checkbox({ id, label, description, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label htmlFor={id} style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <input {...rest} id={id} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 20, height: 20, flex: '0 0 auto', marginTop: 1,
        borderRadius: 'var(--radius-xs)',
        border: '1px solid ' + (checked ? 'var(--purple-700)' : 'var(--border-default)'),
        background: checked ? 'var(--purple-700)' : 'var(--white)',
        color: 'var(--purple-25)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'var(--transition-control)',
      }}>
        {checked ? <Icon name="check" size={14} /> : null}
      </span>
      <span>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-body)' }}>{label}</span>
        {description ? <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
```

**Props (`Checkbox.d.ts`)**

```ts
import * as React from 'react';
export interface CheckboxProps {
  id?: string;
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
```

---

## Radio

```jsx
import React from 'react';

/** Single-choice control; render 2-4 in a RadioGroup-style flex column. */
export function Radio({ id, name, label, description, checked = false, onChange, value, disabled = false, style, ...rest }) {
  return (
    <label htmlFor={id} style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <input {...rest} id={id} name={name} value={value} type="radio" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 20, height: 20, flex: '0 0 auto', marginTop: 1, borderRadius: '50%',
        border: '1px solid ' + (checked ? 'var(--purple-700)' : 'var(--border-default)'),
        background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'var(--transition-control)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: checked ? 'var(--purple-700)' : 'transparent', transition: 'var(--transition-control)' }} />
      </span>
      <span>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-body)' }}>{label}</span>
        {description ? <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
```

**Props (`Radio.d.ts`)**

```ts
import * as React from 'react';
export interface RadioProps {
  id?: string;
  /** Shared group name. */
  name?: string;
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
```

---

## Switch

```jsx
import React from 'react';

/** On/off toggle for instant settings (no save button). */
export function Switch({ id, label, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label htmlFor={id} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input {...rest} id={id} type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 44, height: 26, borderRadius: 'var(--radius-pill)', padding: 3, boxSizing: 'border-box',
        background: checked ? 'var(--purple-700)' : 'var(--neutral-300)',
        transition: 'background-color var(--dur-base) var(--ease-standard)', display: 'inline-flex',
      }}>
        <span style={{
          width: 20, height: 20, borderRadius: '50%', background: 'var(--white)',
          boxShadow: 'var(--shadow-xs)', transform: checked ? 'translateX(18px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label ? <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-body)' }}>{label}</span> : null}
    </label>
  );
}
```

**Props (`Switch.d.ts`)**

```ts
import * as React from 'react';
export interface SwitchProps {
  id?: string;
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
```

---

## Tabs

```jsx
import React from 'react';

/** Underline tab bar. Controlled via value/onChange. */
export function Tabs({ items = [], value, onChange, variant = 'underline', style, ...rest }) {
  const active = value != null ? value : (items[0] && (items[0].value || items[0]));
  const isPill = variant === 'pill';
  return (
    <div {...rest} role="tablist" style={{
      display: 'inline-flex', gap: isPill ? 'var(--space-1)' : 'var(--space-6)',
      borderBottom: isPill ? 'none' : '1px solid var(--border-subtle)',
      background: isPill ? 'var(--purple-50)' : 'transparent',
      padding: isPill ? 'var(--space-1)' : 0, borderRadius: isPill ? 'var(--radius-pill)' : 0,
      ...style,
    }}>
      {items.map((it) => {
        const v = typeof it === 'string' ? it : it.value;
        const l = typeof it === 'string' ? it : it.label;
        const on = v === active;
        return (
          <button
            key={v} role="tab" aria-selected={on} onClick={() => onChange && onChange(v)}
            style={{
              fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)',
              fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
              color: on ? (isPill ? 'var(--text-inverse)' : 'var(--purple-700)') : 'var(--text-muted)',
              background: isPill && on ? 'var(--purple-700)' : 'transparent',
              border: 'none', cursor: 'pointer',
              padding: isPill ? '8px var(--space-4)' : '0 0 var(--space-3)',
              borderRadius: isPill ? 'var(--radius-pill)' : 0,
              borderBottom: isPill ? 'none' : '2px solid ' + (on ? 'var(--purple-700)' : 'transparent'),
              marginBottom: isPill ? 0 : -1,
              transition: 'var(--transition-control)',
            }}
          >{l}</button>
        );
      })}
    </div>
  );
}
```

**Props (`Tabs.d.ts`)**

```ts
import * as React from 'react';
export interface TabItem { value: string; label: string }
/**
 * Section switcher.
 * @startingPoint section="Navigation" subtitle="Tab bar, underline and pill" viewport="700x160"
 */
export interface TabsProps {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pill';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
```

---

## Dialog

```jsx
import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Centered modal over a violet scrim. */
export function Dialog({ open = false, title, description, children, footer, onClose, width = 480, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'var(--overlay)', backdropFilter: 'var(--blur-panel)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)', zIndex: 60 }}
    >
      <div
        {...rest}
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface-card)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)',
          padding: 'var(--space-6)', position: 'relative',
          animation: 'none', ...style,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <div>
            {title ? <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-medium)', fontSize: 'var(--fs-h3)', color: 'var(--purple-700)', margin: 0 }}>{title}</h2> : null}
            {description ? <p style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', margin: 'var(--space-2) 0 0', lineHeight: 'var(--lh-normal)' }}>{description}</p> : null}
          </div>
          {onClose ? <IconButton icon="x" label="Fechar" size="sm" /> : null}
        </div>
        {children ? <div style={{ marginTop: 'var(--space-5)' }}>{children}</div> : null}
        {footer ? <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
```

**Props (`Dialog.d.ts`)**

```ts
import * as React from 'react';
export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Action row, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
```

---

## Toast

```jsx
import React from 'react';
import { Icon } from '../core/Icon.jsx';

const toastTones = {
  success: { icon: 'check-circle-2', color: 'var(--success-600)' },
  info: { icon: 'info', color: 'var(--info-600)' },
  warning: { icon: 'alert-triangle', color: 'var(--warning-600)' },
  danger: { icon: 'alert-circle', color: 'var(--danger-600)' },
};

/** Transient confirmation strip. Bottom-right, auto-dismissed by the caller. */
export function Toast({ tone = 'success', title, message, onClose, style, ...rest }) {
  const t = toastTones[tone];
  return (
    <div {...rest} role="status" style={{
      display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start',
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-4)', minWidth: 300, maxWidth: 420, ...style,
    }}>
      <span style={{ color: t.color, display: 'flex', marginTop: 1 }}><Icon name={t.icon} size={20} /></span>
      <div style={{ flex: 1 }}>
        {title ? <p style={{ fontFamily: 'var(--font-text)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-body-sm)', color: 'var(--purple-700)', margin: 0 }}>{title}</p> : null}
        {message ? <p style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', margin: '2px 0 0', lineHeight: 'var(--lh-normal)' }}>{message}</p> : null}
      </div>
      {onClose ? (
        <button onClick={onClose} aria-label="Fechar" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--neutral-400)', display: 'flex', padding: 0 }}>
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </div>
  );
}
```

**Props (`Toast.d.ts`)**

```ts
import * as React from 'react';
export interface ToastProps {
  tone?: 'success' | 'info' | 'warning' | 'danger';
  title?: string;
  message?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
```

---

## Tooltip

```jsx
import React from 'react';

/** Hover/focus label on a wrapped trigger. Dark purple, small caption type. */
export function Tooltip({ label, placement = 'top', children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[placement];
  return (
    <span
      {...rest}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}
    >
      {children}
      <span role="tooltip" style={{
        position: 'absolute', ...pos, whiteSpace: 'nowrap', pointerEvents: 'none',
        background: 'var(--purple-900)', color: 'var(--purple-25)',
        fontFamily: 'var(--font-text)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)',
        padding: '6px 10px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)',
        opacity: show ? 1 : 0, transition: 'opacity var(--dur-fast) var(--ease-standard)', zIndex: 40,
      }}>{label}</span>
    </span>
  );
}
```

**Props (`Tooltip.d.ts`)**

```ts
import * as React from 'react';
export interface TooltipProps {
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
```
