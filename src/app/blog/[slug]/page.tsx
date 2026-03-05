import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getArticleBySlug, getArticleSlugs } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      images: article.image
        ? [{ url: article.image, width: 1200, height: 675, alt: article.title }]
        : undefined,
      publishedTime: article.date,
      authors: [SITE_CONFIG.author],
      tags: article.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: article.image,
            datePublished: article.date,
            author: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            publisher: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_CONFIG.url}/blog/${slug}`,
            },
            keywords: article.keywords.join(", "),
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 section-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              Volver al Blog
            </Link>
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                {article.category}
              </span>
              <h1 className="text-white">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {article.readTime} de lectura
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      {article.image && (
        <div className="container -mt-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <section className="section-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose mx-auto">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </article>

            {/* Keywords */}
            {article.keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={18} className="text-primary" />
                  <span className="font-semibold">Temas relacionados:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Necesitas ayuda con tu estrategia digital?
              </h3>
              <p className="text-muted-foreground mb-6">
                Agenda una consulta gratuita de 30 minutos y exploremos cómo
                puedo ayudarte.
              </p>
              <Link href="/#contacto" className="btn-primary">
                Agendar Consultoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
