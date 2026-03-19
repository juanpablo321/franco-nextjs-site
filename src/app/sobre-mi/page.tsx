import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Target,
  TrendingUp,
  Briefcase,
  Linkedin,
} from "lucide-react";
import { SITE_CONFIG, EXPERIENCES, CLIENTS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí | Juan Pablo Franco",
  description:
    "Estratega de Comercio Digital e IA para B2B. Especialista en generación de demanda, calificación de prospectos con agentes de IA y expansión digital para empresas en Colombia y el mundo.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/sobre-mi`,
  },
};

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Person",
              name: "Juan Pablo Franco",
              jobTitle: "Estratega de Comercio Digital e IA para B2B",
              description:
                "Especialista en generación de demanda B2B con agentes de IA, eCommerce y expansión digital. Más de 15 años de experiencia en Colombia y el mundo.",
              url: `${SITE_CONFIG.url}/sobre-mi`,
              sameAs: [SITE_CONFIG.linkedinUrl],
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden section-purple">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label text-white/80 mb-4">Sobre Mí</p>
            <h1 className="text-white mb-6">Juan Pablo Franco</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Estratega de Comercio Digital e IA para B2B — especializado en
              generación de demanda y calificación de prospectos con agentes de
              inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Decorative accent behind the photo */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-sm" />
                  <div className="relative">
                    <Image
                      src="/images/juan-pablo-franco.png"
                      alt="Juan Pablo Franco — Estratega de Comercio Digital e IA para B2B"
                      width={400}
                      height={400}
                      className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl ring-4 ring-white/80"
                      priority
                    />
                    {/* Subtle gradient overlay at the bottom */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Generación de Demanda B2B con Inteligencia Artificial
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Con más de 15 años en eCommerce y transformación digital,
                  hoy me especializo en diseñar sistemas de generación de
                  demanda que combinan agentes de IA con estrategias de
                  comercio digital para calificar prospectos B2B con mayor
                  velocidad y precisión.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  He liderado proyectos para Groupe Casino (Francia), OBI
                  (Alemania), La Comer (México) y Panamericana (Colombia),
                  generando resultados medibles en crecimiento de ventas,
                  expansión de mercado y optimización del pipeline comercial.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { value: "+15", label: "Años Experiencia" },
                    { value: "+100", label: "Proyectos" },
                    { value: "3", label: "Continentes" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <p className="text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Target, title: "Agentes de IA para B2B", desc: "Automatizo la calificación de prospectos con agentes de IA que trabajan 24/7 en el pipeline comercial" },
                { icon: TrendingUp, title: "Demanda que Convierte", desc: "Estrategias de generación de demanda con KPIs claros, ROI medible y ciclos de venta más cortos" },
                { icon: Award, title: "Experiencia Global", desc: "Proyectos exitosos en 3 continentes con marcas líderes en eCommerce y comercio B2B" },
              ].map((item) => (
                <div key={item.title} className="text-center space-y-4">
                  <div className="icon-circle-lg bg-primary/10 mx-auto">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-gray section">
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label text-primary mb-4">Trayectoria</p>
            <h2>Experiencia Profesional</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCES.map((exp) => (
              <article key={exp.period} className="card">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="section-label text-primary mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4 text-lg">{exp.company}</p>
                    <ul className="space-y-3 text-base">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-white section">
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label text-primary mb-4">Portfolio</p>
            <h2>Clientes Destacados</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {CLIENTS.map((client) => (
              <div key={client} className="card text-center flex items-center justify-center h-24">
                <p className="font-semibold text-foreground text-lg">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gray py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">¿Listo para acelerar tu generación de demanda B2B?</h2>
            <p className="text-lg text-muted-foreground">
              Agenda una consulta gratuita de 30 minutos para explorar cómo los
              agentes de IA pueden calificar tus prospectos y optimizar tu
              pipeline comercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contacto" className="btn-primary">
                Agendar Consultoría
              </Link>
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-primary"
              >
                <Linkedin size={18} />
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
