import Image, { type StaticImageData } from "next/image";
import { ImageSlot } from "@/components/layout/ImageSlot";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  org: string;
  image?: { src: string | StaticImageData; alt: string };
  url?: string;
}

export function TestimonialCard({ quote, name, org, image, url }: TestimonialCardProps) {
  const photo = image ? (
    <div
      style={{
        width: 280,
        maxWidth: "100%",
        aspectRatio: "5 / 4",
        position: "relative",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
      }}
    >
      <Image src={image.src} alt={image.alt} fill sizes="280px" style={{ objectFit: "cover" }} />
    </div>
  ) : null;

  return (
    <div
      data-reveal=""
      className="amu-testimonial"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-8)",
        boxShadow: "var(--shadow-xs)",
      }}
    >
      {photo && url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden style={{ display: "block" }}>
          {photo}
        </a>
      ) : photo ? (
        photo
      ) : (
        <div style={{ width: 120, height: 120, position: "relative" }}>
          <ImageSlot shape="circle" placeholder="Foto do cliente" />
        </div>
      )}
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "1.5rem", lineHeight: 1.45, color: "var(--purple-700)", margin: 0 }}>
          &ldquo;{quote}&rdquo;
        </p>
        <div style={{ marginTop: "var(--space-5)", fontSize: "var(--fs-body-sm)" }}>
          <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--purple-700)" }}>{name}</span>
          <span style={{ color: "var(--text-muted)" }}>
            {" · "}
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}>
                {org}
              </a>
            ) : (
              org
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
