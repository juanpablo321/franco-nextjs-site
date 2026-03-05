import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    // --- Reglas explícitas para Bots de IA ---
    { userAgent: "GPTBot", allow: "/" },
    { userAgent: "ChatGPT-User", allow: "/" },
    { userAgent: "OAI-SearchBot", allow: "/" },
    { userAgent: "ClaudeBot", allow: "/" },
    { userAgent: "anthropic-ai", allow: "/" },
    { userAgent: "PerplexityBot", allow: "/" },
    { userAgent: "Google-Extended", allow: "/" },
    { userAgent: "Applebot-Extended", allow: "/" },
    { userAgent: "YouBot", allow: "/" },
    { userAgent: "CCBot", allow: "/" },
  ];

  return {
    rules,
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
