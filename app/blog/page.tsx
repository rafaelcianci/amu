import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/layout/ImageSlot";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { BLOG_CATEGORIES, FEATURED_POST, BLOG_POSTS, postCover, postCoverFeatured } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Marketing sem achismo, explicado por quem executa. O que aprendemos rodando campanha e conteúdo para negócios reais em Santa Catarina.",
};

export default function BlogPage() {
  return (
    <>
      <section className="amu-section-rail" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--space-7)" }}>
        <Overline reveal>Blog</Overline>
        <h1
          data-reveal="80"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-light)",
            fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
            lineHeight: 1.1,
            letterSpacing: "var(--ls-display)",
            color: "var(--purple-700)",
            margin: "var(--space-4) 0 0",
            maxWidth: 760,
          }}
        >
          Marketing sem achismo, explicado por quem executa.
        </h1>
        <p data-reveal="160" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: 560, margin: "var(--space-5) 0 0" }}>
          O que aprendemos rodando campanha e conteúdo para negócios reais em Santa Catarina. Sem receita mágica e sem guru.
        </p>
        <div data-reveal="220" style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
          {BLOG_CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              style={{
                fontSize: "var(--fs-body-sm)",
                fontWeight: "var(--fw-medium)",
                color: i === 0 ? "var(--purple-25)" : "var(--neutral-700)",
                background: i === 0 ? "var(--purple-700)" : "transparent",
                border: "1px solid " + (i === 0 ? "var(--purple-700)" : "var(--border-default)"),
                borderRadius: "var(--radius-pill)",
                padding: "6px 16px",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
        <Link
          data-reveal=""
          href={`/blog/${FEATURED_POST.slug}`}
          className="amu-content-split"
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: 16,
            boxShadow: "var(--shadow-xs)",
            alignItems: "center",
            color: "inherit",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative", aspectRatio: "16 / 11" }}>
            <ImageSlot shape="rounded" radius={20} placeholder="Imagem do artigo em destaque (16:11)" src={postCoverFeatured(FEATURED_POST.slug)} />
          </div>
          <div style={{ padding: "var(--space-6) var(--space-6) var(--space-6) 0" }}>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "var(--fs-overline)",
                  fontWeight: "var(--fw-semibold)",
                  letterSpacing: "var(--ls-overline)",
                  textTransform: "uppercase",
                  color: "var(--purple-25)",
                  background: "var(--purple-700)",
                  borderRadius: "var(--radius-xs)",
                  padding: "5px 10px",
                }}
              >
                Destaque
              </span>
              <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
                {FEATURED_POST.category} · {FEATURED_POST.readTime}
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "2rem", lineHeight: "var(--lh-snug)", color: "var(--purple-700)", margin: "var(--space-5) 0 0" }}>
              {FEATURED_POST.title}
            </h2>
            <p style={{ fontSize: "var(--fs-body)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-3) 0 0" }}>{FEATURED_POST.excerpt}</p>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginTop: "var(--space-5)", fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
              <span>{FEATURED_POST.date}</span>
            </div>
          </div>
        </Link>
      </section>

      <ParallaxBand quote="Publicamos o que testamos — inclusive o que não funcionou." placeholder="Imagem full-bleed — mesa de trabalho, painel, cidade (paisagem)" speed={0.28} height={360} inset={-80} />

      <section className="amu-section-rail amu-section-y">
        <div className="amu-grid-3">
          {BLOG_POSTS.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} data-reveal={(i % 3) * 100} style={{ color: "inherit", display: "block" }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
                <ImageSlot shape="rounded" radius={20} placeholder="Capa do artigo (4:3)" src={postCover(post.slug)} />
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: "var(--space-4)", fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
                <span
                  style={{
                    fontSize: "var(--fs-overline)",
                    fontWeight: "var(--fw-semibold)",
                    letterSpacing: "var(--ls-overline)",
                    textTransform: "uppercase",
                    color: "var(--purple-700)",
                    background: "var(--purple-100)",
                    borderRadius: "var(--radius-xs)",
                    padding: "5px 10px",
                  }}
                >
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", lineHeight: 1.3, color: "var(--purple-700)", margin: "var(--space-3) 0 0" }}>
                {post.title}
              </h3>
              <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 0" }}>{post.excerpt}</p>
              <div style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)", marginTop: "var(--space-4)" }}>{post.date}</div>
            </Link>
          ))}
        </div>
      </section>

      <Footer variant="compact" />
    </>
  );
}
