"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import type { Components } from "react-markdown";

// ─── Custom component: Platform Card ─────────────────────────────────────────
// Triggered by H4 headings that start with a platform prefix like:
// #### [AWS] Amazon Lightsail: El Jardín Amurallado
// #### [DO] DigitalOcean: El Favorito de los Desarrolladores
// #### [VERCEL] Vercel: El Rey del Frontend
// #### [RAILWAY] Railway: Pago por Uso
// #### [RENDER] Render: El Equilibrio

const PLATFORM_CONFIG: Record<
  string,
  { color: string; bg: string; border: string; badge: string; type: string }
> = {
  AWS: {
    color: "#FF9900",
    bg: "bg-orange-50 dark:bg-orange-950/20",
    border: "border-orange-200 dark:border-orange-800",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    type: "VPS",
  },
  DO: {
    color: "#0080FF",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    type: "VPS",
  },
  VERCEL: {
    color: "#000000",
    bg: "bg-gray-50 dark:bg-gray-900/40",
    border: "border-gray-200 dark:border-gray-700",
    badge: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    type: "PaaS",
  },
  RAILWAY: {
    color: "#7C3AED",
    bg: "bg-purple-50 dark:bg-purple-950/20",
    border: "border-purple-200 dark:border-purple-800",
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    type: "PaaS",
  },
  RENDER: {
    color: "#46E3B7",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    type: "PaaS",
  },
};

function parsePlatformHeading(text: string) {
  const match = text.match(/^\[([A-Z]+)\]\s+(.+)/);
  if (!match) return null;
  const key = match[1];
  const title = match[2];
  const config = PLATFORM_CONFIG[key];
  if (!config) return null;
  return { key, title, config };
}

// ─── Custom component: Callout ────────────────────────────────────────────────
// Triggered by blockquotes that start with ⚠️ WARNING: or ✅ TIP: or ℹ️ INFO:

function parseCallout(text: string) {
  if (text.startsWith("⚠️")) return { type: "warning", icon: "⚠️", color: "amber" };
  if (text.startsWith("✅")) return { type: "tip", icon: "✅", color: "emerald" };
  if (text.startsWith("ℹ️")) return { type: "info", icon: "ℹ️", color: "blue" };
  return null;
}

// ─── Main MarkdownRenderer ────────────────────────────────────────────────────

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // State to track current platform context for the following paragraphs
  let currentPlatform: (typeof PLATFORM_CONFIG)[string] | null = null;
  let platformTitle = "";
  let platformBuffer: React.ReactNode[] = [];
  let inPlatformCard = false;

  const components: Components = {
    // ── Headings ──────────────────────────────────────────────────────────────
    h4({ children }) {
      const text = String(children);
      const platform = parsePlatformHeading(text);

      if (platform) {
        currentPlatform = platform.config;
        platformTitle = platform.title;
        inPlatformCard = true;
        platformBuffer = [];

        return (
          <div
            className={`platform-card rounded-xl border-2 p-6 my-8 ${platform.config.bg} ${platform.config.border}`}
            data-platform={platform.key}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="w-3 h-3 rounded-full inline-block flex-shrink-0"
                    style={{ backgroundColor: platform.config.color }}
                  />
                  <h4 className="font-bold text-xl m-0 leading-tight">{platform.title}</h4>
                </div>
              </div>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${platform.config.badge}`}
              >
                {platform.config.type}
              </span>
            </div>
            {/* Content will be rendered by following paragraphs — see p renderer */}
          </div>
        );
      }

      return <h4 className="font-semibold text-lg mt-6 mb-2">{children}</h4>;
    },

    // ── Paragraphs ────────────────────────────────────────────────────────────
    p({ children }) {
      const text = String(children);

      // Detect "Ventaja clave:" and "La letra pequeña:" inside platform context
      if (text.startsWith("**Ventaja clave:**") || text.startsWith("**La letra pequeña:**")) {
        const isVentaja = text.startsWith("**Ventaja clave:**");
        const content = text.replace(/^\*\*(Ventaja clave|La letra pequeña):\*\*\s*/, "");
        const label = isVentaja ? "Ventaja clave" : "La letra pequeña";
        const colorClass = isVentaja
          ? "bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-700 dark:text-emerald-200"
          : "bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/30 dark:border-amber-700 dark:text-amber-200";
        const labelClass = isVentaja
          ? "text-emerald-700 dark:text-emerald-400"
          : "text-amber-700 dark:text-amber-400";
        const icon = isVentaja ? "✓" : "!";
        const iconClass = isVentaja
          ? "bg-emerald-500 text-white"
          : "bg-amber-500 text-white";

        return (
          <div className={`flex gap-3 rounded-lg border p-4 my-3 ${colorClass}`}>
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${iconClass}`}
            >
              {icon}
            </span>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wide block mb-1 ${labelClass}`}>
                {label}
              </span>
              <span className="text-sm leading-relaxed">{content}</span>
            </div>
          </div>
        );
      }

      return <p className="mb-5 leading-relaxed">{children}</p>;
    },

    // ── Blockquotes ───────────────────────────────────────────────────────────
    blockquote({ children }) {
      const text = String(children);
      const callout = parseCallout(text.trim());

      if (callout) {
        const colorMap: Record<string, string> = {
          amber: "bg-amber-50 border-amber-400 dark:bg-amber-950/30 dark:border-amber-600",
          emerald: "bg-emerald-50 border-emerald-400 dark:bg-emerald-950/30 dark:border-emerald-600",
          blue: "bg-blue-50 border-blue-400 dark:bg-blue-950/30 dark:border-blue-600",
        };
        return (
          <div className={`rounded-lg border-l-4 px-5 py-4 my-6 ${colorMap[callout.color]}`}>
            {children}
          </div>
        );
      }

      // Default blockquote (quotes, GEO prompts)
      return (
        <blockquote className="border-l-4 border-primary pl-5 my-6 italic text-muted-foreground">
          {children}
        </blockquote>
      );
    },

    // ── Links ─────────────────────────────────────────────────────────────────
    a({ href, children }) {
      const isInternal = href?.startsWith("/");
      if (isInternal) {
        return (
          <Link href={href!} className="text-primary underline underline-offset-2 hover:opacity-80">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          {children}
        </a>
      );
    },

    // ── Tables ────────────────────────────────────────────────────────────────
    table({ children }) {
      return (
        <div className="overflow-x-auto my-8 rounded-xl border border-border shadow-sm">
          <table className="w-full border-collapse text-sm">{children}</table>
        </div>
      );
    },
    thead({ children }) {
      return <thead className="bg-secondary/60">{children}</thead>;
    },
    th({ children }) {
      return (
        <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">
          {children}
        </th>
      );
    },
    td({ children }) {
      return (
        <td className="px-4 py-3 border-b border-border/50 text-muted-foreground">
          {children}
        </td>
      );
    },
    tr({ children }) {
      return (
        <tr className="hover:bg-secondary/30 transition-colors">{children}</tr>
      );
    },

    // ── Code ──────────────────────────────────────────────────────────────────
    code({ children, className }) {
      const isBlock = className?.includes("language-");
      if (isBlock) {
        return (
          <pre className="bg-secondary rounded-lg p-4 overflow-x-auto my-6 text-sm">
            <code>{children}</code>
          </pre>
        );
      }
      return (
        <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    },

    // ── Horizontal Rule ───────────────────────────────────────────────────────
    hr() {
      return <hr className="my-10 border-border" />;
    },

    // ── Headings (h2, h3) ─────────────────────────────────────────────────────
    h2({ children }) {
      return (
        <h2 className="text-2xl font-bold mt-12 mb-4 pb-2 border-b border-border">
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return (
        <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>
      );
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
