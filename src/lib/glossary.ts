import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { GlossaryTerm } from "@/types";

const glossaryDirectory = path.join(process.cwd(), "src/content/glossary");

export function getAllGlossaryTerms(): GlossaryTerm[] {
  if (!fs.existsSync(glossaryDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(glossaryDirectory)
    .filter((f) => f.endsWith(".md"));

  const terms = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(glossaryDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        term: data.term || slug,
        definition: data.definition || "",
        category: data.category || "",
        relatedTerms: data.relatedTerms || [],
        extendedDefinition: content || undefined,
        keyPoints: data.keyPoints || undefined,
        example: data.example || undefined,
        references: data.references || undefined,
        proTip: data.proTip || undefined,
      } as GlossaryTerm;
    })
    .sort((a, b) => a.term.localeCompare(b.term, "es"));

  return terms;
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | null {
  const filePath = path.join(glossaryDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    term: data.term || slug,
    definition: data.definition || "",
    category: data.category || "",
    relatedTerms: data.relatedTerms || [],
    extendedDefinition: content || undefined,
    keyPoints: data.keyPoints || undefined,
    example: data.example || undefined,
    references: data.references || undefined,
    proTip: data.proTip || undefined,
  };
}

export function getGlossaryTermSlugs(): string[] {
  if (!fs.existsSync(glossaryDirectory)) {
    return [];
  }
  return fs
    .readdirSync(glossaryDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getGlossaryLetters(terms: GlossaryTerm[]): string[] {
  const letters = new Set(
    terms.map((t) => t.term.charAt(0).toUpperCase())
  );
  return Array.from(letters).sort((a, b) => a.localeCompare(b, "es"));
}

export function groupTermsByLetter(
  terms: GlossaryTerm[]
): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};
  terms.forEach((term) => {
    const letter = term.term.charAt(0).toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(term);
  });
  return grouped;
}
