import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimized copies of /public paths can't be invalidated; statically imported images are cached as immutable regardless.
    minimumCacheTTL: 2678400,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  { name: "preset-default", params: { overrides: { removeViewBox: false } } },
                  "removeDimensions",
                ],
              },
              replaceAttrValues: {
                "#330064": "currentColor",
                "#340064": "currentColor",
                "#370467": "currentColor",
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
