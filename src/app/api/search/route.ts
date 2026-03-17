import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/blog";
import { getAllGlossaryTerms } from "@/lib/glossary";

export type SearchIndexItem = {
  type: "blog" | "glosario";
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  url: string;
};

export async function GET() {
  const articles = getAllArticles();
  const terms = getAllGlossaryTerms();

  const index: SearchIndexItem[] = [
    ...articles.map((a) => ({
      type: "blog" as const,
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      category: a.category,
      url: `/blog/${a.slug}`,
    })),
    ...terms.map((t) => ({
      type: "glosario" as const,
      slug: t.slug,
      title: t.term,
      excerpt: t.definition,
      category: t.category,
      url: `/glosario/${t.slug}`,
    })),
  ];

  return NextResponse.json(index, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
