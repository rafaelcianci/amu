import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageSlot } from "@/components/layout/ImageSlot";
import { Footer } from "@/components/layout/Footer";
import { Overline } from "@/components/sections/Overline";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ALL_POSTS, getPostBySlug, getRelatedPosts, postCover, postCoverWide } from "@/data/blog";

export function generateStaticParams() {
  return ALL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <section className="amu-section-rail" style={{ paddingTop: "var(--space-9)", paddingBottom: "var(--space-7)" }}>
        <div style={{ maxWidth: "var(--container-narrow)" }}>
          <Link
            href="/blog"
            data-reveal=""
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "var(--fs-caption)",
              fontWeight: "var(--fw-medium)",
              color: "var(--text-muted)",
            }}
          >
            ← Blog
          </Link>
          <div data-reveal="60" style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", flexWrap: "wrap", marginTop: "var(--space-5)" }}>
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
            <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
              {post.readTime} · {post.date}
            </span>
          </div>
          <h1
            data-reveal="120"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-light)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              lineHeight: "var(--lh-snug)",
              letterSpacing: "var(--ls-display)",
              color: "var(--purple-700)",
              margin: "var(--space-4) 0 0",
            }}
          >
            {post.title}
          </h1>
          <p data-reveal="180" style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-4) 0 0" }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="amu-section-rail" style={{ paddingBottom: "var(--space-8)" }}>
        <div style={{ position: "relative", aspectRatio: "16 / 9", maxWidth: "var(--container-narrow)" }}>
          <ImageSlot shape="rounded" radius={20} placeholder="Imagem de capa do artigo (16:9)" src={postCoverWide(post.slug)} />
        </div>
      </section>

      <section className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container-narrow)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {post.body.map((paragraph, i) => (
            <p key={i} data-reveal={i === 0 ? "" : Math.min(i, 3) * 60} style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-body)", margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {related.length ? (
        <section className="amu-section-rail" style={{ paddingBottom: "var(--section-y)" }}>
          <Overline reveal>Continue lendo</Overline>
          <h2
            data-reveal="60"
            style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h1)", color: "var(--purple-700)", margin: "var(--space-3) 0 var(--space-5)" }}
          >
            Outros artigos
          </h2>
          <div className="amu-grid-3">
            {related.map((r, i) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} data-reveal={i * 100} style={{ color: "inherit", display: "block" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
                  <ImageSlot shape="rounded" radius={20} placeholder="Capa do artigo (4:3)" src={postCover(r.slug)} />
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
                    {r.category}
                  </span>
                  <span>{r.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-medium)", fontSize: "var(--fs-h3)", lineHeight: 1.3, color: "var(--purple-700)", margin: "var(--space-3) 0 0" }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: "var(--space-2) 0 0" }}>{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <ClosingCta
        variant="lilac"
        title="Quer aplicar isso na sua marca?"
        body="No diagnóstico gratuito olhamos seu cenário atual e mostramos por onde começar."
        buttonLabel="Agendar diagnóstico"
        reassurance={null}
      />

      <Footer variant="compact" />
    </>
  );
}
