import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogArticle } from "@/types";

const contentDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllArticles(): BlogArticle[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith(".md"));

  const articles = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(contentDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        category: data.category || "General",
        date: data.date || "",
        readTime: `${Math.ceil(stats.minutes)} min`,
        image: data.image || "",
        keywords: data.keywords || [],
        content,
      } as BlogArticle;
    })
    .sort((a, b) => {
      // Sort by date descending
      const dateA = parseSpanishDate(a.date);
      const dateB = parseSpanishDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return articles;
}

export function getArticleBySlug(slug: string): BlogArticle | null {
  const filePath = path.join(contentDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    category: data.category || "General",
    date: data.date || "",
    readTime: `${Math.ceil(stats.minutes)} min`,
    image: data.image || "",
    keywords: data.keywords || [],
    content,
  };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs
    .readdirSync(contentDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function parseSpanishDate(dateStr: string): Date {
  const months: Record<string, number> = {
    enero: 0, febrero: 1, marzo: 2, abril: 3,
    mayo: 4, junio: 5, julio: 6, agosto: 7,
    septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
  };

  const match = dateStr.match(/(\d+)\s+de\s+(\w+),?\s+(\d{4})/i);
  if (match) {
    const day = parseInt(match[1]);
    const month = months[match[2].toLowerCase()] ?? 0;
    const year = parseInt(match[3]);
    return new Date(year, month, day);
  }

  return new Date(dateStr);
}
