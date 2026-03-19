import Link from "next/link";
import {
  Bot,
  Zap,
  Target,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Generación de Demanda B2B con Agentes de IA | Juan Pablo Franco",
  description:
    "Diseño sistemas de agentes de inteligencia artificial que califican prospectos B2B, automatizan el nurturing y acortan el ciclo de ventas. Consultoría especializada para empresas en Colombia y el mundo.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/generacion-de-demanda-b2b`,
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Diagnóstico de tu Pipeline",
    description:
      "Analizamos tu proceso comercial actual: fuentes de leads, criterios de calificación, tiempos de respuesta y tasas de conversión en cada etapa del funnel.",
  },
  {
    step: "02",
    icon: Bot,
    title: "Diseño del Sistema de Agentes de IA",
    description:
      "Diseño agentes de IA personalizados para tu negocio: calificación automática de prospectos, scoring predictivo, nurturing inteligente y alertas de oportunidades calientes.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Implementación e Integración",
    description:
      "Implemento los agentes en tu stack actual (CRM, email, LinkedIn, formularios web) con flujos de trabajo automatizados que conectan marketing y ventas.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Optimización Continua",
    description:
      "Monitoreo el rendimiento de los agentes, ajusto los criterios de calificación con datos reales y escalo lo que funciona para maximizar tu pipeline calificado.",
  },
];

const PAIN_POINTS = [
  "Tu equipo de ventas pierde tiempo con prospectos que nunca van a comprar",
  "Los leads llegan pero nadie los contacta en las primeras horas críticas",
  "No tienes visibilidad clara de qué prospectos están listos para comprar",
  "El ciclo de ventas B2B se alarga porque el nurturing es manual e inconsistente",
  "Marketing genera leads pero ventas dice que no son calificados",
];

const OUTCOMES = [
  {
    icon: Target,
    value: "Más pipeline calificado",
    description: "Los agentes de IA filtran y priorizan prospectos con mayor probabilidad de cierre, para que tu equipo se enfoque en lo que importa.",
  },
  {
    icon: Clock,
    value: "Ciclos de venta más cortos",
    description: "Respuesta inmediata, nurturing automatizado y seguimiento inteligente reducen el tiempo entre el primer contacto y el cierre.",
  },
  {
    icon: Zap,
    value: "Operación 24/7 sin fricción",
    description: "Los agentes trabajan mientras tu equipo descansa: califican, responden y escalan oportunidades sin intervención manual.",
  },
];

const FAQS = [
  {
    question: "¿Qué tipo de agentes de IA se implementan?",
    answer:
      "Diseño agentes conversacionales y de análisis que se integran con tu CRM, email y canales digitales. Pueden calificar leads entrantes, hacer seguimiento automatizado, analizar señales de compra y priorizar oportunidades. No son chatbots genéricos: son agentes entrenados con los criterios específicos de tu negocio B2B.",
  },
  {
    question: "¿Necesito un equipo técnico para mantener los agentes?",
    answer:
      "No. Los agentes se diseñan para operar de forma autónoma con supervisión mínima. Yo me encargo del diseño, implementación y ajuste inicial. Después, tu equipo de marketing o ventas puede monitorear resultados desde dashboards simples sin necesidad de conocimientos técnicos.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer:
      "El diagnóstico y diseño toman entre 2 y 3 semanas. La implementación, entre 2 y 4 semanas adicionales dependiendo de la complejidad de tu stack. Los primeros resultados medibles (leads calificados, tiempos de respuesta, pipeline) se ven en el primer mes de operación.",
  },
  {
    question: "¿Funciona para cualquier industria B2B?",
    answer:
      "Sí, siempre que tu negocio tenga un proceso de venta consultiva con ciclos de más de 2 semanas. He trabajado con empresas de tecnología, manufactura, servicios profesionales y distribución. El sistema se adapta a los criterios de calificación específicos de cada industria.",
  },
  {
    question: "¿Cuánto cuesta este servicio?",
    answer:
      "Cada proyecto es diferente. El precio depende de la complejidad de tu proceso comercial, el número de canales a integrar y el nivel de personalización de los agentes. Agenda una consulta gratuita de 30 minutos y te doy un estimado basado en tu situación específica.",
  },
];

export default function GeneracionDemandaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Generación de Demanda B2B con Agentes de IA",
            description:
              "Sistema de agentes de inteligencia artificial para calificar prospectos B2B, automatizar nurturing y acortar el ciclo de ventas.",
            provider: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            url: `${SITE_CONFIG.url}/servicios/generacion-de-demanda-b2b`,
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
              Generación de Demanda B2B con Agentes de IA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Diseño sistemas de inteligencia artificial que califican tus
              prospectos, automatizan el nurturing y acortan tu ciclo de ventas
              — para que tu equipo se enfoque en cerrar, no en perseguir.
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

      {/* Pain Points — "¿Te identificas?" */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Te suena familiar?</h2>
              <p className="text-lg text-muted-foreground">
                Si tu empresa B2B enfrenta alguno de estos desafíos, este
                servicio fue diseñado para ti.
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
                Lo que cambia cuando los agentes de IA trabajan para ti
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
                Un proceso claro en 4 etapas, desde el diagnóstico hasta la
                optimización continua de tu pipeline.
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
              ¿Listo para que la IA trabaje en tu pipeline?
            </h2>
            <p className="text-lg text-white/90">
              En 30 minutos analizamos tu proceso comercial y te muestro cómo
              los agentes de IA pueden transformar tu generación de demanda.
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

      {/* About — Credibility */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="section-label text-primary mb-4">
              ¿Quién está detrás?
            </p>
            <h2 className="text-3xl font-bold">Juan Pablo Franco</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Más de 15 años diseñando estrategias de comercio digital para
              empresas B2B en 3 continentes. Actualmente lidero la generación de
              demanda digital en VTEX — un ecosistema global de 16 sitios en 9
              idiomas — donde combino agentes de IA con estrategias de contenido
              para calificar prospectos a escala.
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

      {/* Newsletter — Secondary CTA */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm
              title="¿Aún no estás listo? Recibe insights B2B cada semana"
              description="Estrategias de generación de demanda, inteligencia artificial aplicada a ventas B2B y tendencias de comercio digital. Sin spam, solo valor."
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
              30 minutos. Sin compromiso. Analizamos tu pipeline actual y te
              muestro oportunidades concretas para implementar agentes de IA en
              tu proceso comercial B2B.
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
