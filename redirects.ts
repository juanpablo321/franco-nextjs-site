// ─────────────────────────────────────────────────────────────────────────────
// REDIRECTS — franco.com.co
//
// Este archivo es la única fuente de verdad para todas las redirecciones del
// sitio. Es importado por next.config.ts y procesado por Vercel en el CDN.
//
// INSTRUCCIONES:
//   1. Agrega una nueva entrada al array REDIRECTS.
//   2. Haz commit y push — Vercel lo aplica en el siguiente deploy.
//   3. No toques next.config.ts para gestionar redirecciones.
//
// TIPOS DE REDIRECCIÓN:
//   permanent: true  → HTTP 308 — Usa esto para cambios definitivos de URL.
//                      Google transfiere el link juice (PageRank) al destino.
//   permanent: false → HTTP 307 — Usa esto para redirecciones temporales.
//                      No transfiere link juice. Ideal para pruebas o campañas.
//
// WILDCARDS:
//   /blog/:slug*     → captura /blog/cualquier/ruta/anidada
//   /old/:path*      → captura /old/ y cualquier subruta
// ─────────────────────────────────────────────────────────────────────────────

type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

const REDIRECTS: Redirect[] = [

  // ── Blog ──────────────────────────────────────────────────────────────────
  {
    source: "/que-es-una-estrategia-gtm-go-to-market",
    destination: "/blog/estrategia-go-to-market-b2b",
    permanent: true,
  },

  // ── Glosario ──────────────────────────────────────────────────────────────
  {
    source: "/que-es-una-api",
    destination: "/glosario/api-application-programming-interface",
    permanent: true,
  },

  // ── Agrega nuevas redirecciones debajo de esta línea ──────────────────────

];

export default REDIRECTS;
