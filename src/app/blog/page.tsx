import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre eCommerce, marketing digital B2B, inteligencia artificial, transformación digital y estrategias de expansión para empresas.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog de Juan Pablo Franco",
            description:
              "Artículos sobre eCommerce, marketing digital B2B y transformación digital.",
            url: `${SITE_CONFIG.url}/blog`,
            author: {
              "@type": "Person",
              name: SITE_CONFIG.author,
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 section-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label text-white/80 mb-4">Blog</p>
            <h1 className="text-white mb-6">
              Insights de Comercio Digital
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estrategias, tendencias y mejores prácticas en eCommerce,
              marketing B2B y transformación digital.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-white section">
        <div className="container">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Próximamente se publicarán artículos. ¡Vuelve pronto!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="card p-0 overflow-hidden">
                  {article.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-base line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {article.date}
                      </span>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Leer más
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
