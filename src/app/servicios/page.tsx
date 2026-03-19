import Link from "next/link";
import type { ReactNode } from "react";
import {
  Bot,
  ShoppingCart,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Comercio Digital, Agentes de IA y Automatización B2B",
  description:
    "Servicios de consultoría en generación de demanda B2B con agentes de IA, estrategia de comercio digital y automatización de procesos con integraciones MCP. Resultados medibles para empresas B2B.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios`,
  },
};

const SERVICES_DATA = [
  {
    icon: Bot,
    title: "Generación de Demanda B2B con IA",
    slug: "generacion-de-demanda-b2b",
    description:
      "Diseño sistemas de agentes de IA que califican prospectos, automatizan el nurturing y acortan tu ciclo de ventas B2B. Más pipeline, menos esfuerzo manual.",
    highlights: [
      "Agentes de IA que califican prospectos 24/7",
      "Automatización inteligente del nurturing",
      "Reducción medible del ciclo de ventas",
    ],
    cta: "Conocer este servicio",
  },
  {
    icon: ShoppingCart,
    title: "Consultor en Comercio Electrónico B2B y B2C",
    slug: "estrategia-comercio-digital-b2b",
    description:
      "Consultoría en eCommerce, marketplaces e integración de canales digitales para que tu empresa B2B y B2C venda más y mejor en el entorno digital.",
    highlights: [
      "Implementación y optimización VTEX",
      "Estrategia omnicanal B2B",
      "Optimización de conversiones y UX",
    ],
    cta: "Conocer este servicio",
  },
  {
    icon: Workflow,
    title: "Automatización con Agentes de IA y MCP",
    slug: "automatizacion-agentes-ia-mcp",
    description: (<>Conecto agentes de IA a tus sistemas empresariales vía <Link href="/glosario/mcp-servers-model-context-protocol" className="text-primary hover:underline font-medium">Model Context Protocol (MCP)</Link> para automatizar procesos, eliminar tareas manuales y escalar operaciones.</>) as ReactNode,
    highlights: [
      "Agentes de IA conectados a CRM, ERP y APIs",
      "Integraciones MCP seguras y auditables",
      "Automatización inteligente de flujos de trabajo",
    ],
    cta: "Conocer este servicio",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            name: "Servicios de Comercio Digital e IA para B2B",
            description:
              "Consultoría en generación de demanda B2B con agentes de IA, estrategia de comercio digital y expansión internacional.",
            url: `${SITE_CONFIG.url}/servicios`,
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Consultoría",
              itemListElement: SERVICES_DATA.map((s, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.description,
                  url: `${SITE_CONFIG.url}/servicios/${s.slug}`,
                },
                position: i + 1,
              })),
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden section-purple">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label text-white/80 mb-4">Servicios</p>
            <h1 className="text-white mb-6">
              Comercio Digital e IA al Servicio de tu Crecimiento B2B
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Combino más de 15 años en eCommerce con agentes de inteligencia
              artificial para que tu empresa genere más demanda, cierre más
              ventas y se expanda a nuevos mercados.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-white section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES_DATA.map((service) => (
              <article
                key={service.slug}
                className="card p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div className="space-y-5">
                  <div className="icon-circle-lg bg-primary/10">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-base">
                        <CheckCircle2
                          size={18}
                          className="mt-1 flex-shrink-0 text-primary"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="btn-primary w-full justify-center"
                  >
                    {service.cta}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gray py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Agenda una consulta gratuita de 30 minutos. Analizamos tu
              situación actual y te recomiendo el camino con mayor impacto para
              tu negocio.
            </p>
            <div className="pt-4">
              <Link href="/#contacto" className="btn-primary text-lg">
                Agendar Consultoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
