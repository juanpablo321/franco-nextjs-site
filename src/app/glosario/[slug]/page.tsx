import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, BookOpen, Lightbulb, ExternalLink } from "lucide-react";
import {
  getGlossaryTermBySlug,
  getGlossaryTermSlugs,
  getAllGlossaryTerms,
  getGlossaryLetters,
} from "@/lib/glossary";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getGlossaryTermSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    return { title: "Término no encontrado" };
  }

  return {
    title: `${term.term} - Glosario de Marketing Digital`,
    description: term.definition,
    alternates: {
      canonical: `${SITE_CONFIG.url}/glosario/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${term.term} - Glosario de Marketing Digital`,
      description: term.definition,
      url: `${SITE_CONFIG.url}/glosario/${slug}`,
    },
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const allTerms = getAllGlossaryTerms();
  const letters = getGlossaryLetters(allTerms);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      {/* JSON-LD DefinedTerm */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: term.term,
            description: term.definition,
            url: `${SITE_CONFIG.url}/glosario/${slug}`,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Glosario de Marketing Digital",
              url: `${SITE_CONFIG.url}/glosario`,
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 section-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/glosario"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              Volver al Glosario
            </Link>
            <div className="space-y-4">
              {term.category && (
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                  {term.category}
                </span>
              )}
              <h1 className="text-white">{term.term}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* A-Z Navigation */}
      <section className="sticky top-20 z-30 bg-white border-b border-border py-4 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {alphabet.map((letter) => {
              const hasTerms = letters.includes(letter);
              return hasTerms ? (
                <Link
                  key={letter}
                  href={`/glosario#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm"
                >
                  {letter}
                </Link>
              ) : (
                <span
                  key={letter}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-muted-foreground/40 font-semibold text-sm cursor-default"
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Term Content */}
      <section className="section-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Definition */}
            <div className="card mb-8">
              <div className="flex items-start gap-4">
                <div className="icon-circle-lg bg-primary/10 flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Definición</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {term.definition}
                  </p>
                </div>
              </div>
            </div>

            {/* Extended Content */}
            {term.extendedDefinition && (
              <div className="prose mx-auto mb-8">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {term.extendedDefinition}
                </ReactMarkdown>
              </div>
            )}

            {/* Key Points */}
            {term.keyPoints && term.keyPoints.length > 0 && (
              <div className="card mb-8 bg-primary/5 border-primary/10">
                <h3 className="text-xl font-semibold mb-4">Puntos Clave</h3>
                <ul className="space-y-3">
                  {term.keyPoints.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Example */}
            {term.example && (
              <div className="card mb-8 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3">
                  Ejemplo: {term.example.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {term.example.description}
                </p>
              </div>
            )}

            {/* Pro Tip */}
            {term.proTip && (
              <div className="card mb-8 bg-yellow-50 border-yellow-200">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-800">
                      Pro Tip
                    </h3>
                    <p className="text-yellow-700 text-base leading-relaxed">
                      {term.proTip}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* References */}
            {term.references && term.references.length > 0 && (
              <div className="card mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Referencias y Recursos
                </h3>
                <div className="space-y-4">
                  {term.references.map((ref, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                      <ExternalLink size={18} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">{ref.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {ref.author} &middot; {ref.type}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {ref.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">
                  Términos Relacionados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((related) => {
                    const relatedTerm = allTerms.find(
                      (t) =>
                        t.term.toLowerCase() === related.toLowerCase() ||
                        t.slug === related.toLowerCase().replace(/\s+/g, "-")
                    );
                    return relatedTerm ? (
                      <Link
                        key={related}
                        href={`/glosario/${relatedTerm.slug}`}
                        className="px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {related}
                      </Link>
                    ) : (
                      <span
                        key={related}
                        className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm"
                      >
                        {related}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/10 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Necesitas ayuda con tu estrategia digital?
              </h3>
              <p className="text-muted-foreground mb-6">
                Agenda una consulta gratuita de 30 minutos.
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
