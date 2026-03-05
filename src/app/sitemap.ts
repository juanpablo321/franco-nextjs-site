import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getArticleSlugs } from "@/lib/blog";
import { getGlossaryTermSlugs } from "@/lib/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glosario`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Blog articles
  const articleSlugs = getArticleSlugs();
  const blogPages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Glossary terms
  const glossarySlugs = getGlossaryTermSlugs();
  const glossaryPages: MetadataRoute.Sitemap = glossarySlugs.map((slug) => ({
    url: `${baseUrl}/glosario/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...glossaryPages];
}
