import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Layers,
  TrendingUp,
  Settings,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Consultor en Comercio Electrónico B2B y B2C | Juan Pablo Franco",
  description:
    "Consultoría en eCommerce B2B y B2C, implementación VTEX, marketplaces y estrategia omnicanal. Más de 15 años optimizando canales digitales para empresas en Colombia y el mundo.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/estrategia-comercio-digital-b2b`,
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Auditoría de tu Canal Digital",
    description:
      "Analizo tu operación digital actual: plataforma, integraciones, UX, tasas de conversión, procesos operativos y oportunidades de mejora. Identifico los quick wins y las brechas estratégicas.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Diseño de la Estrategia Digital",
    description:
      "Creo un roadmap personalizado: arquitectura de plataforma, integraciones con ERP/CRM, estrategia de catálogo, pricing y experiencia de compra B2B adaptada a tu modelo de negocio.",
  },
  {
    step: "03",
    icon: Settings,
    title: "Implementación y Lanzamiento",
    description:
      "Lidero la implementación técnica junto a tu equipo o partners: configuración de plataforma, integraciones, migración de datos, pruebas y lanzamiento controlado.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Optimización y Crecimiento",
    description:
      "Post-lanzamiento, optimizo conversiones, experiencia de usuario y operaciones basándome en datos reales. Itero para maximizar el retorno de tu inversión digital.",
  },
];

const PAIN_POINTS = [
  "Tu canal digital B2B no genera las ventas que esperabas",
  "La experiencia de compra es compleja y los clientes prefieren el teléfono o email",
  "Tu plataforma actual no se integra bien con el ERP, inventario o CRM",
  "No tienes visibilidad de métricas clave: conversión, ticket promedio, abandono",
  "Quieres migrar a VTEX o modernizar tu eCommerce pero no sabes por dónde empezar",
];

const OUTCOMES = [
  {
    icon: ShoppingCart,
    value: "Canal digital que vende",
    description: "Una plataforma de comercio B2B optimizada para tu modelo de negocio, con experiencia de compra fluida que convierte visitantes en clientes.",
  },
  {
    icon: Layers,
    value: "Operación integrada",
    description: "Tu eCommerce conectado con ERP, CRM, inventario y logística. Sin procesos manuales duplicados, sin errores de sincronización.",
  },
  {
    icon: TrendingUp,
    value: "Crecimiento basado en datos",
    description: "Dashboards claros con las métricas que importan. Decisiones informadas para escalar tu canal digital con confianza.",
  },
];

const FAQS = [
  {
    question: "¿Solo trabajas con VTEX?",
    answer:
      "VTEX es mi especialidad principal con más de 8 años de experiencia en la plataforma, pero la metodología de estrategia digital aplica a cualquier plataforma de eCommerce. He trabajado también con Magento, Shopify Plus y soluciones custom. Lo importante es elegir la plataforma correcta para tu modelo de negocio B2B.",
  },
  {
    question: "¿Cuánto tiempo toma una implementación de eCommerce B2B?",
    answer:
      "Depende de la complejidad. Una auditoría y estrategia se completan en 3 a 4 semanas. Una implementación completa en VTEX puede tomar entre 3 y 6 meses dependiendo de las integraciones requeridas. Siempre defino fases con entregables claros para que veas progreso desde el primer mes.",
  },
  {
    question: "¿Puedes optimizar mi eCommerce actual sin cambiar de plataforma?",
    answer:
      "Sí. Muchos proyectos empiezan con una auditoría y optimización del canal existente: mejoras de UX, optimización de conversiones, integración de sistemas y automatización de procesos. No siempre es necesario migrar — a veces el mayor impacto está en optimizar lo que ya tienes.",
  },
  {
    question: "¿Trabajas con el equipo interno o necesito contratar un partner?",
    answer:
      "Ambos modelos funcionan. Puedo liderar la estrategia y trabajar directamente con tu equipo técnico interno, o coordinar con partners de implementación. Mi rol es asegurar que la visión estratégica se ejecute correctamente, independientemente de quién haga el desarrollo.",
  },
  {
    question: "¿Cuánto cuesta la consultoría de comercio digital?",
    answer:
      "El precio varía según el alcance: una auditoría estratégica tiene un costo diferente a una implementación completa. Agenda una consulta gratuita de 30 minutos para entender tu situación y darte un estimado realista.",
  },
];

export default function EstrategiaComercioDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consultor en Comercio Electrónico B2B y B2C",
            description:
              "Consultoría en eCommerce B2B, implementación VTEX, marketplaces y estrategia omnicanal para empresas.",
            provider: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            url: `${SITE_CONFIG.url}/servicios/estrategia-comercio-digital-b2b`,
            areaServed: "Worldwide",
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden section-purple">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              ← Todos los servicios
            </Link>
            <h1 className="text-white mb-6">
              Consultor en Comercio Electrónico B2B y B2C
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Tu empresa B2B necesita un canal digital que realmente venda — no
              un catálogo online que nadie usa. Diseño e implemento estrategias
              de eCommerce que convierten.
            </p>
            <div className="pt-8">
              <Link
                href="/#contacto"
                className="btn-outline text-lg px-8 py-4"
              >
                Agendar Consultoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Te suena familiar?</h2>
              <p className="text-lg text-muted-foreground">
                Estos son los desafíos más comunes de empresas B2B que quieren
                vender en digital.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PAIN_POINTS.map((pain) => (
                <div
                  key={pain}
                  className="flex items-start gap-3 p-5 rounded-lg bg-red-50 border border-red-100"
                >
                  <span className="text-red-500 text-xl mt-0.5">✗</span>
                  <p className="text-base leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-gray section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-primary mb-4">Resultados</p>
              <h2 className="text-3xl font-bold">
                Lo que obtienes con una estrategia digital bien ejecutada
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {OUTCOMES.map((outcome) => (
                <div key={outcome.value} className="text-center space-y-4">
                  <div className="icon-circle-lg bg-primary/10 mx-auto">
                    <outcome.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{outcome.value}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-primary mb-4">Proceso</p>
              <h2 className="text-3xl font-bold">Cómo funciona</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Desde la auditoría hasta la optimización continua, un proceso
                probado en más de 100 proyectos de eCommerce.
              </p>
            </div>

            {/* Diagrama de transformación digital */}
            <div className="flex justify-center mb-16">
              <Image
                src="/images/transformacion-comercio-digital.svg"
                alt="Transformación Digital del Comercio Electrónico: Operación Digital Actual, Auditoría Digital, Diseño Estratégico, Implementación, Crecimiento Digital"
                width={866}
                height={522}
                className="w-full max-w-3xl h-auto"
                priority
              />
            </div>

            <div className="space-y-6">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="card flex items-start gap-6">
                  <div className="hidden sm:flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section-purple py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              ¿Tu eCommerce B2B necesita una estrategia clara?
            </h2>
            <p className="text-lg text-white/90">
              En 30 minutos analizamos tu canal digital actual y te muestro las
              oportunidades de mayor impacto para tu negocio.
            </p>
            <div className="pt-4">
              <Link
                href="/#contacto"
                className="btn-outline text-lg px-8 py-4"
              >
                Agendar Consultoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="section-label text-primary mb-4">
              ¿Quién está detrás?
            </p>
            <h2 className="text-3xl font-bold">Juan Pablo Franco</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Más de 15 años implementando y optimizando plataformas de
              comercio digital para empresas B2B. He liderado proyectos en VTEX
              para marcas como Groupe Casino, OBI, La Comer, Panamericana, EPK y
              Flamingo — desde la arquitectura de solución hasta la optimización
              de conversiones post-lanzamiento.
            </p>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Conocer mi trayectoria completa
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gray section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="card group cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-lg list-none">
                    {faq.question}
                    <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm
              title="¿Aún no estás listo? Recibe insights B2B cada semana"
              description="Estrategias de eCommerce B2B, optimización de conversiones y tendencias de comercio digital. Sin spam, solo valor."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-purple py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Agenda tu consultoría gratuita
            </h2>
            <p className="text-lg text-white/90">
              30 minutos. Sin compromiso. Analizamos tu canal digital B2B y te
              muestro oportunidades concretas de crecimiento.
            </p>
            <div className="pt-4">
              <Link
                href="/#contacto"
                className="btn-outline text-lg px-8 py-4"
              >
                Agendar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
