import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agência AMU",
    short_name: "AMU",
    description: "Marketing digital com estratégia: marca, conteúdo e mídia paga operando como um sistema só.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#F8F7FF",
    icons: [
      { src: "/assets/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
