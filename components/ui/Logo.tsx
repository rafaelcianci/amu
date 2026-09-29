import type { CSSProperties } from "react";

export type LogoVariant = "horizontal" | "stacked" | "grayscale" | "white";

export interface LogoProps {
  variant?: LogoVariant;
  height?: number;
  alt?: string;
  style?: CSSProperties;
}

const LOGO_SRC: Record<LogoVariant, string> = {
  stacked: "/assets/logo-stacked-lilac.png",
  horizontal: "/assets/logo-horizontal.png",
  grayscale: "/assets/logo-grayscale.png",
  white: "/assets/logo-horizontal-white.png",
};

/**
 * The Agência AMU lockup. Never re-typeset or recolour it — swap the file.
 * Plain <img>, not next/image: the primary lockup is an SVG and the lockup
 * is decorative chrome, not content that benefits from image optimisation.
 */
export function Logo({ variant = "horizontal", height = 34, alt = "Agência AMU", style }: LogoProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={LOGO_SRC[variant]} alt={alt} style={{ height, width: "auto", display: "block", ...style }} />;
}
