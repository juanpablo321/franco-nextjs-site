import Link from "next/link";
import {
  Globe,
  Map,
  Languages,
  Truck,
  BarChart3,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Expansión Digital Internacional | Consultoría eCommerce Cross-Border",
  description:
    "Estrategia de entrada a nuevos mercados digitales, localización y operaciones cross-border para llevar tu eCommerce B2B más allá de fronteras. Experiencia en 3 continentes.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/expansion-digital-internacional`,
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    icon: BarChart3,
    title: "Análisis de Mercado y Oportunidad",
    description:
      "Evalúo el potencial de los mercados objetivo: demanda digital, competencia, regulaciones, logística y barreras de entrada. Identifico dónde tu negocio B2B tiene mayor probabilidad de éxito.",
  },
  {
    step: "02",
    icon: Languages,
    title: "Estrategia de Localización",
    description:
      "Diseño la estrategia de adaptación: idioma, moneda, medios de pago locales, contenido culturalmente relevante y experiencia de usuario adaptada a las expectativas de cada mercado.",
  },
  {
    step: "03",
    icon: Globe,
    title: "Arquitectura Multi-Sitio y Lanzamiento",
    description:
      "Implemento la arquitectura técnica para operar en múltiples mercados: multi-sitio, multi-idioma, multi-moneda. Configuro integraciones locales y lanzo con un plan de go-to-market digital.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Operaciones y Escalamiento",
    description:
      "Optimizo las operaciones cross-border: logística internacional, fulfillment, servicio al cliente multilingüe y estrategias de crecimiento por mercado basadas en datos reales.",
  },
];

const PAIN_POINTS = [
  "Quieres vender en otros países pero no sabes cómo adaptar tu canal digital",
  "Tu plataforma actual no soporta múltiples idiomas, monedas o medios de pago",
  "No tienes claridad sobre regulaciones, impuestos o logística internacional",
  "Intentaste expandirte pero la experiencia de compra no resonó con el mercado local",
  "Necesitas un ecosistema multi-sitio pero la complejidad técnica te frena",
];

const OUTCOMES = [
  {
    icon: Globe,
    value: "Presencia digital global",
    description: "Un ecosistema de sitios adaptados a cada mercado: idioma, moneda, medios de pago y experiencia de compra localizados.",
  },
  {
    icon: Map,
    value: "Entrada a mercado validada",
    description: "Decisiones basadas en datos reales de demanda, competencia y viabilidad operativa — no en suposiciones.",
  },
  {
    icon: Truck,
    value: "Operaciones cross-border fluidas",
    description: "Logística internacional, fulfillment y servicio al cliente resueltos para que puedas enfocarte en vender.",
  },
];

const FAQS = [
  {
    question: "¿En qué mercados tienes experiencia directa?",
    answer:
      "He liderado proyectos de expansión digital en Francia (Groupe Casino), Alemania (OBI), México (La Comer), Panamá (La Casa del Teléfono), Estados Unidos (BeautyCounter) y múltiples países de Latinoamérica. Actualmente gestiono un ecosistema global de 16 sitios en 9 idiomas para VTEX.",
  },
  {
    question: "¿Necesito una plataforma específica para vender internacionalmente?",
    answer:
      "No necesariamente, pero la plataforma debe soportar multi-sitio, multi-idioma y multi-moneda de forma nativa. VTEX es ideal para esto, pero también he trabajado con Magento y soluciones custom. Lo importante es que la arquitectura técnica soporte tu plan de expansión sin limitar el crecimiento.",
  },
  {
    question: "¿Cuánto tiempo toma lanzar en un nuevo mercado?",
    answer:
      "El análisis de mercado y la estrategia de localización toman entre 4 y 6 semanas. La implementación técnica depende de si ya tienes una plataforma multi-sitio o necesitas crearla desde cero: puede ir de 2 a 6 meses. Siempre defino fases con entregables claros.",
  },
  {
    question: "¿Puedes ayudarme solo con la estrategia o también con la implementación?",
    answer:
      "Ambos. Puedo entregarte un plan estratégico completo para que tu equipo lo ejecute, o puedo liderar la implementación técnica de principio a fin. El modelo depende de tus recursos internos y la complejidad del proyecto.",
  },
  {
    question: "¿Cuánto cuesta un proyecto de expansión internacional?",
    answer:
      "Varía significativamente según el número de mercados, la complejidad de las integraciones y si necesitas implementación técnica. Agenda una consulta gratuita para entender tu caso y darte un estimado realista.",
  },
];

export default function ExpansionInternacionalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Expansión Digital Internacional",
            description:
              "Estrategia de entrada a nuevos mercados digitales, localización y operaciones cross-border para eCommerce B2B.",
            provider: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            url: `${SITE_CONFIG.url}/servicios/expansion-digital-internacional`,
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
              Expansión Digital Internacional
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Lleva tu eCommerce B2B a nuevos mercados con una estrategia
              probada: localización, arquitectura multi-sitio y operaciones
              cross-border diseñadas para convertir desde el día uno.
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
                Expandirse internacionalmente es complejo. Estos son los
                desafíos más comunes que enfrentan las empresas B2B.
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
                Lo que obtienes con una expansión bien planificada
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-primary mb-4">Proceso</p>
              <h2 className="text-3xl font-bold">Cómo funciona</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Un proceso probado en proyectos de expansión en 3 continentes,
                desde el análisis de mercado hasta la operación cross-border.
              </p>
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
              ¿Listo para llevar tu negocio a nuevos mercados?
            </h2>
            <p className="text-lg text-white/90">
              En 30 minutos evaluamos el potencial de expansión de tu negocio
              B2B y te muestro los primeros pasos concretos.
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
              He liderado proyectos de expansión digital en Francia, Alemania,
              México, Panamá y Estados Unidos. Actualmente gestiono un
              ecosistema global de 16 sitios en 9 idiomas para VTEX, una de las
              plataformas de comercio digital más grandes del mundo. Conozco los
              desafíos reales de operar en múltiples mercados — desde la
              localización cultural hasta la logística cross-border.
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
              description="Estrategias de expansión internacional, comercio digital B2B e inteligencia artificial aplicada a negocios. Sin spam, solo valor."
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
              30 minutos. Sin compromiso. Evaluamos el potencial de expansión
              internacional de tu negocio B2B y definimos los primeros pasos.
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
