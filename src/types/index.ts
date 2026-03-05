// Blog Article type
export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
  content: string;
}

// Glossary Term type
export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  category?: string;
  relatedTerms?: string[];
  extendedDefinition?: string;
  keyPoints?: string[];
  example?: {
    title: string;
    description: string;
  };
  references?: Reference[];
  proTip?: string;
}

export interface Reference {
  title: string;
  author: string;
  type: "libro" | "estudio" | "herramienta" | "artículo" | "framework";
  description: string;
  url?: string;
}

// Service type
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Experience type
export interface Experience {
  period: string;
  title: string;
  company: string;
  achievements: string[];
}

// SEO Metadata type
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}
