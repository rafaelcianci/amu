import type { CSSProperties, HTMLAttributes } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Palette,
  TrendingUp,
  Monitor,
  Compass,
  Layers,
  Download,
  Play,
  Menu,
  Mail,
  CheckCircle2,
  Info,
  AlertTriangle,
  AlertCircle,
  Circle,
  type LucideIcon,
} from "lucide-react";

/**
 * Lucide glyph set used across the AMU design system. Keep names identical
 * to the kebab-case names used in the design references (design_system/BRAND_GUIDE.md).
 */
const ICONS: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  check: Check,
  "chevron-down": ChevronDown,
  x: X,
  phone: Phone,
  "message-circle": MessageCircle,
  "map-pin": MapPin,
  clock: Clock,
  sparkles: Sparkles,
  palette: Palette,
  "trending-up": TrendingUp,
  monitor: Monitor,
  compass: Compass,
  layers: Layers,
  download: Download,
  play: Play,
  menu: Menu,
  mail: Mail,
  "check-circle-2": CheckCircle2,
  info: Info,
  "alert-triangle": AlertTriangle,
  "alert-circle": AlertCircle,
};

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name in kebab-case, e.g. "arrow-right". */
  name?: string;
  /** Square size in px. 16 / 20 / 24 are the sanctioned steps. */
  size?: number;
  strokeWidth?: number;
  style?: CSSProperties;
}

/** Lucide icon, thin stroke, inherits currentColor. */
export function Icon({ name = "circle", size = 20, strokeWidth = 2, style, ...rest }: IconProps) {
  const Glyph = ICONS[name] || Circle;
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      {...rest}
      style={{ display: "inline-flex", flex: "0 0 auto", color: "inherit", ...style }}
    >
      <Glyph size={size} strokeWidth={strokeWidth} />
    </span>
  );
}
