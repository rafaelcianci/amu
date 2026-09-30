import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { RouteScrollFX } from "@/components/motion/RouteScrollFX";

export const metadata: Metadata = {
  title: {
    default: "Agência AMU — Marketing digital com estratégia",
    template: "%s · Agência AMU",
  },
  description:
    "Agência AMU: marca, conteúdo e mídia paga operando como um sistema só, com cada real rastreado do clique até a venda. Santa Catarina, atendimento em todo o Brasil.",
  metadataBase: new URL("https://amudesign.com.br"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-PSMVWGX9" />
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSMVWGX9" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <Header />
        {children}
        <RouteScrollFX />
      </body>
      <GoogleAnalytics gaId="G-NYY0ZMZKV6" />
    </html>
  );
}
