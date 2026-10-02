"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { NAV_ITEMS, CTA_HREF } from "@/lib/nav";
import LogoSvg from "@/public/assets/logo.svg";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/") || (href.startsWith("/servicos") && pathname.startsWith("/servicos"));
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "rgba(248,247,255,.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-6)",
        }}
      >
        <Link href="/" aria-label="Agência AMU — início" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--purple-700)" }}>
          <LogoSvg aria-hidden style={{ height: 50, width: "auto", display: "block" }} />
          <h1 style={{ fontFamily: "var(--font-Comfortaa)", fontSize: "26px", fontWeight: "400", letterSpacing: "0.3px", color: "var(--purple-700)" }}>Agência<strong style={{ fontWeight: "700" }}>AMU</strong></h1>
        </Link>

        <nav
          className="amu-nav-desktop"
          style={{
            gap: "var(--space-6)",
            alignItems: "center",
            fontSize: "var(--fs-body-sm)",
            fontWeight: "var(--fw-medium)",
            color: "var(--neutral-600)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: active ? "var(--purple-700)" : "inherit", fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <div className="amu-cta-desktop">
            <Button size="sm" iconRight="arrow-right" href={CTA_HREF}>
              Diagnóstico gratuito
            </Button>
          </div>
          <div className="amu-nav-trigger">
            <IconButton icon={open ? "x" : "menu"} label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((v) => !v)} />
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="amu-nav-sheet"
          style={{
            borderTop: "1px solid var(--border-subtle)",
            background: "var(--surface-page)",
            padding: "var(--space-5) var(--gutter) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-text)",
                  fontSize: "var(--fs-body-lg)",
                  color: active ? "var(--purple-700)" : "var(--text-body)",
                  fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Button size="lg" iconRight="arrow-right" href={CTA_HREF} fullWidth onClick={() => setOpen(false)}>
            Diagnóstico gratuito
          </Button>
        </div>
      ) : null}
    </header>
  );
}
