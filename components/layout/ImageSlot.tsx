import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";

export interface ImageSlotProps {
  /** Shape of the placeholder frame. "rect" = no rounding, "rounded" = `radius`px, "circle" = 50%. */
  shape?: "rect" | "rounded" | "circle";
  /** Corner radius in px, used when shape="rounded". */
  radius?: number;
  /** States what the photo is and its aspect ratio — shown as the placeholder label. */
  placeholder?: string;
  /** Image to show in the slot. When set, it fills the frame (object-fit: cover) and the placeholder label is hidden. */
  src?: string | StaticImageData;
  /** Alt text for `src`. Use "" when the image is decorative (e.g. a card cover next to its own title). */
  alt?: string;
  /** Rendered width of the slot, as an `<img sizes>` value. */
  sizes?: string;
  /** CSS object-position for `src`. */
  position?: string;
  /** Set on the page's main (LCP) image: loads it eagerly with high fetch priority. */
  eager?: boolean;
  style?: CSSProperties;
}

/**
 * Stand-in for real photography. Per the handoff brief, no stock or
 * generated imagery is substituted here — every position ships as a flat
 * lilac block labelled with the shot the studio still needs to supply.
 * Meant to be dropped inside a parent with `position: relative` and a set
 * size (commonly `aspect-ratio`), which it fills via `position: absolute; inset: 0`.
 */
export function ImageSlot({ shape = "rect", radius = 0, placeholder, src, alt = "", sizes = "100vw", position, eager, style }: ImageSlotProps) {
  const borderRadius = shape === "circle" ? "50%" : shape === "rounded" ? `${radius}px` : 0;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius,
        overflow: "hidden",
        background: "var(--purple-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-4)",
        textAlign: "center",
        ...style,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          style={{ objectFit: "cover", objectPosition: position }}
        />
      ) : (
      <span
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "var(--fs-caption)",
          lineHeight: "var(--lh-normal)",
          fontWeight: "var(--fw-medium)",
          color: "var(--purple-500)",
          maxWidth: "80%",
        }}
      >
        {placeholder}
      </span>
      )}
    </div>
  );
}
