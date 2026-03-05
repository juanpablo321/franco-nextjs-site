import Link from "next/link";
import { BookOpen } from "lucide-react";
import {
  getAllGlossaryTerms,
  getGlossaryLetters,
  groupTermsByLetter,
} from "@/lib/glossary";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glosario de Marketing Digital y eCommerce",
  description:
    "Diccionario completo con más de 70 términos esenciales de marketing digital, eCommerce, transformación digital y comercio B2B. Definiciones claras y prácticas.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/glosario`,
  },
};

export default function GlosarioPage() {
  const terms = getAllGlossaryTerms();
  const letters = getGlossaryLetters(terms);
  const grouped = groupTermsByLetter(terms);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Glosario de Marketing Digital y eCommerce",
            description:
              "Diccionario completo con más de 70 términos esenciales de marketing digital y eCommerce.",
            url: `${SITE_CONFIG.url}/glosario`,
            hasDefinedTerm: terms.slice(0, 20).map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              description: t.definition,
              url: `${SITE_CONFIG.url}/glosario/${t.slug}`,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 section-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label text-white/80 mb-4">Glosario</p>
            <h1 className="text-white mb-6">
              Diccionario de Marketing Digital
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Más de {terms.length} términos esenciales de marketing digital,
              eCommerce y transformación digital explicados de forma clara y
              práctica.
            </p>
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
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm"
                >
                  {letter}
                </a>
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

      {/* Terms List */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-40">
                <h2 className="text-4xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary/20">
                  {letter}
                </h2>
                <div className="space-y-4">
                  {grouped[letter]?.map((term) => (
                    <article key={term.slug} className="card">
                      <div className="flex items-start gap-4">
                        <div className="icon-circle bg-primary/10 mt-1">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">
                            <Link
                              href={`/glosario/${term.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {term.term}
                            </Link>
                          </h3>
                          <p className="text-muted-foreground text-base leading-relaxed">
                            {term.definition}
                          </p>
                          {term.category && (
                            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary">
                              {term.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
