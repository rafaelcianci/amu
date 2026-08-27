import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { RouteScrollFX } from "@/components/motion/RouteScrollFX";

export const metadata: Metadata = {
  title: {
    default: "AMUdesign — Marketing digital com estratégia",
    template: "%s · AMUdesign",
  },
  description:
    "AMU — Studio Criativo (AMUdesign): marca, conteúdo e mídia paga operando como um sistema só, com cada real rastreado do clique até a venda. Santa Catarina, atendimento em todo o Brasil.",
  metadataBase: new URL("https://amudesign.com.br"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <RouteScrollFX />
      </body>
    </html>
  );
}
