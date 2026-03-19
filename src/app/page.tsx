import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Workflow,
  Bot,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  BookOpen,
  MapPin,
  Linkedin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, SERVICES, STATS } from "@/lib/constants";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";
import HeroAnimation from "@/components/HeroAnimation";

export const metadata: Metadata = {
  title: "Juan Pablo Franco | Estratega de Comercio Digital y IA para B2B | Colombia",
  description:
    "Diseño estrategias de expansión digital que combinan eCommerce, marketplaces e inteligencia artificial para empresas B2B en Colombia y el mundo. +15 años de experiencia en VTEX y comercio digital.",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const iconMap: Record<string, React.ElementType> = {
  Bot,
  ShoppingCart,
  Workflow,
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data - Person + ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              telephone: SITE_CONFIG.whatsappNumber,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressRegion: "DC",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 4.711,
                longitude: -74.0721,
              },
              sameAs: [SITE_CONFIG.linkedinUrl],
              knowsAbout: [
                "eCommerce",
                "VTEX",
                "Marketplaces B2B",
                "Transformación Digital",
                "Marketing Digital B2B",
                "Generación de Leads",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juan Pablo Franco",
              jobTitle: "Estratega de Comercio Digital e IA para B2B",
              url: SITE_CONFIG.url,
              sameAs: [SITE_CONFIG.linkedinUrl],
              worksFor: {
                "@type": "Organization",
                name: "Juan Pablo Franco Consultoría",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen relative overflow-hidden text-white section-purple"
      >
        {/* Background animation */}
        <HeroAnimation />

        <div className="container relative z-10 flex items-center min-h-screen pt-20">
          <div className="max-w-3xl mx-auto lg:mx-0 space-y-6 lg:space-y-8 py-24 text-center lg:text-left">
            <h1 className="text-white">
              Estratega de Comercio Digital y IA para B2B
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed">
              Diseño estrategias de expansión digital que combinan eCommerce,
              marketplaces e inteligencia artificial para que tu empresa venda
              más y mejor.
            </p>
            <div className="pt-4 pb-4 flex justify-center lg:justify-start">
              <Link href="/#contacto" className="btn-outline text-lg px-8 py-4">
                Agendar Consultoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="section-white py-16" aria-label="Estadísticas">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-gray section" aria-label="Sobre Mí">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="section-label text-primary mb-4">Sobre Mí</p>
              <h2>Generación de Demanda B2B con Inteligencia Artificial</h2>
            </div>
            <div className="space-y-6 text-center">
              <p className="text-xl leading-relaxed">
                Con más de 15 años en eCommerce y transformación digital, hoy
                me especializo en diseñar sistemas de generación de demanda que
                combinan agentes de IA con estrategias de comercio digital para
                calificar prospectos B2B con mayor velocidad y precisión.
              </p>
              <p className="text-xl leading-relaxed">
                He liderado proyectos para Groupe Casino (Francia), OBI
                (Alemania), La Comer (México) y Panamericana (Colombia),
                generando resultados medibles en crecimiento de ventas,
                expansión de mercado y optimización del pipeline comercial.
              </p>
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

      {/* Services Section */}
      <section id="servicios" className="section-white section" aria-label="Servicios">
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label text-primary mb-4">Servicios</p>
            <h2>Comercio Digital e IA al Servicio de tu Crecimiento B2B</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <article key={service.title} className="card flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="icon-circle bg-primary/10">
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.slug === "automatizacion-agentes-ia-mcp" ? (
                        <>Conecto agentes de IA a tus sistemas empresariales vía <Link href="/glosario/mcp-servers-model-context-protocol" className="text-primary hover:underline font-medium">Model Context Protocol (MCP)</Link> para automatizar procesos y eliminar tareas manuales.</>
                      ) : (
                        service.description
                      )}
                    </p>
                    <ul className="space-y-2 text-base">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Conocer más
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="text-center pt-12">
            <Link href="/servicios" className="btn-primary text-lg">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Glosario Teaser */}
      <section className="section-white section" aria-label="Glosario">
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-label text-primary mb-4">Glosario</p>
            <h2 className="mb-6">Diccionario de Marketing Digital</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora nuestro glosario completo con más de 70 términos esenciales de
              marketing digital, eCommerce y transformación digital.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {["A/B Testing", "eCommerce", "SEO", "Lead Generation", "Omnichannel", "ROI", "CRO", "VTEX"].map((term) => (
              <div key={term} className="px-4 py-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                <span className="text-sm font-medium text-primary">{term}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/glosario" className="btn-primary text-lg">
              <BookOpen className="w-5 h-5" />
              Explorar Glosario Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-gray section" aria-label="Newsletter">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm
              title="Insights B2B directamente en tu inbox"
              description="Cada semana comparto estrategias de expansión digital, tendencias de eCommerce B2B e inteligencia artificial aplicada a negocios. Únete a más de 500 profesionales que ya reciben el newsletter."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section section-purple" aria-label="Contacto">
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label text-white/80 mb-4">Contacto</p>
            <h2 className="text-white">Trabajemos Juntos</h2>
            <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto">
              ¿Listo para llevar tu negocio al siguiente nivel? Agenda una consulta gratuita de 30 minutos.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg overflow-hidden" style={{ minHeight: "660px" }}>
              <iframe
                src={`${SITE_CONFIG.hubspotMeetingUrl}?embed=true`}
                width="100%"
                height="660"
                frameBorder="0"
                style={{ border: "none", minHeight: "660px" }}
                title="Agendar Reunión con Juan Pablo Franco"
                allow="camera; microphone"
                loading="lazy"
              />
            </div>
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">Whatsapp</p>
                      <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">
                        {SITE_CONFIG.whatsappNumber}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">Ubicación</p>
                      <p className="text-xl">{SITE_CONFIG.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Linkedin size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">LinkedIn</p>
                      <a href={SITE_CONFIG.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">
                        /in/juanpablo321
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
