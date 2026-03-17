import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────────────────────
// SISTEMA DE REDIRECCIONES SEO
//
// permanent: true  → HTTP 308 (transfiere link juice al destino — usar para
//                    cambios definitivos de URL, slugs renombrados, etc.)
// permanent: false → HTTP 307 (temporal, no transfiere link juice — usar para
//                    pruebas A/B, mantenimiento, campañas temporales)
//
// Cómo agregar una redirección:
//   1. Añade un objeto al array REDIRECTS con source, destination y permanent.
//   2. Haz commit y push — Vercel lo aplica en el siguiente deploy.
//   3. No se necesita reiniciar el servidor.
//
// Wildcards disponibles:
//   /blog/:slug*   → captura /blog/cualquier/ruta
//   /old-(.*)?     → expresiones regulares (requiere `regex: true` en el objeto)
// ─────────────────────────────────────────────────────────────────────────────
const REDIRECTS: { source: string; destination: string; permanent: boolean }[] = [
  // Agrega aquí las redirecciones cuando las necesites. Ejemplos:
  // { source: "/articulo-viejo", destination: "/blog/articulo-nuevo", permanent: true },
  // { source: "/blog/viejo-slug", destination: "/blog/nuevo-slug", permanent: true },
  // { source: "/servicios", destination: "/sobre-mi", permanent: false },

  // GTM: redirección desde URL corta hacia el artículo del blog
  { source: "/que-es-una-estrategia-gtm-go-to-market", destination: "/blog/estrategia-go-to-market-b2b", permanent: true },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "files.manuscdn.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
