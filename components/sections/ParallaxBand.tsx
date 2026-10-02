import { ImageSlot } from "@/components/layout/ImageSlot";
import equipeTrabalhando from "@/public/assets/images/equipe_trabalhando.webp";

export function ParallaxBand({
  quote,
  placeholder,
  height = 420,
  speed = 0.3,
  inset = -90,
}: {
  quote: string;
  placeholder: string;
  height?: number;
  speed?: number;
  inset?: number;
}) {
  return (
    <section style={{ position: "relative", height, overflow: "hidden" }}>
      <div data-parallax={speed} style={{ position: "absolute", inset: `${inset}px 0` }}>
        <ImageSlot shape="rect" src={equipeTrabalhando} position="top center" />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,0,53,.78), rgba(28,0,53,.18))" }} />
      <div className="amu-section-rail" style={{ position: "absolute", inset: "auto 0 0", paddingTop: 0, paddingBottom: "var(--space-6)" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-light)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            lineHeight: "var(--lh-snug)",
            color: "var(--purple-25)",
            margin: 0,
            maxWidth: 700,
          }}
        >
          {quote}
        </p>
      </div>
    </section>
  );
}
