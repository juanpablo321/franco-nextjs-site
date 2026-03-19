import Link from "next/link";
import Image from "next/image";
import {
  Workflow,
  Plug,
  Cpu,
  BarChart3,
  RefreshCw,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title:
    "Automatización de Procesos con Agentes de IA e Integraciones MCP | Juan Pablo Franco",
  description:
    "Diseño e implemento agentes de IA conectados a tus sistemas empresariales mediante Model Context Protocol (MCP). Automatiza procesos, elimina tareas manuales y escala operaciones B2B.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios/automatizacion-agentes-ia-mcp`,
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Mapeo de Procesos y Oportunidades",
    description:
      "Analizo tus flujos de trabajo actuales: qué herramientas usas, dónde hay tareas manuales repetitivas, qué datos se mueven entre sistemas y dónde se pierde tiempo. Identifico los procesos con mayor potencial de automatización.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Diseño de Agentes e Integraciones MCP",
    description:
      "Diseño la arquitectura de agentes de IA y los servidores MCP necesarios para conectarlos con tus sistemas: CRM, ERP, bases de datos, herramientas de marketing, plataformas de eCommerce y APIs internas. Cada agente tiene un rol claro y permisos definidos.",
  },
  {
    step: "03",
    icon: Plug,
    title: "Implementación y Conexión",
    description:
      "Implemento los agentes y servidores MCP, los conecto a tus sistemas reales y configuro los flujos de automatización. Pruebo cada integración con datos reales para garantizar que funcione de forma segura y confiable.",
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Optimización y Escalamiento",
    description:
      "Monitoreo el rendimiento de los agentes en producción, ajusto los flujos según los resultados y escalo la automatización a nuevos procesos. El valor de la IA se acumula con cada iteración.",
  },
];

const PAIN_POINTS = [
  "Tu equipo pasa horas copiando datos entre sistemas que no se hablan entre sí",
  "Usas herramientas de IA como ChatGPT pero de forma aislada, sin conexión a tus datos reales",
  "Tienes procesos manuales repetitivos que consumen tiempo de personas con alto valor",
  "Quieres automatizar pero no sabes cómo conectar la IA con tu CRM, ERP o plataforma de eCommerce",
  "Has probado automatizaciones básicas (Zapier, Make) pero necesitas algo más inteligente y flexible",
];

const OUTCOMES = [
  {
    icon: Workflow,
    value: "Procesos automatizados de extremo a extremo",
    description:
      "Agentes de IA que ejecutan flujos completos: leen datos, toman decisiones, actualizan sistemas y escalan excepciones — sin intervención manual.",
  },
  {
    icon: Plug,
    value: "Sistemas conectados vía MCP",
    description:
      "Tus herramientas empresariales (CRM, ERP, eCommerce, bases de datos) conectadas de forma segura a agentes de IA mediante el estándar Model Context Protocol.",
  },
  {
    icon: BarChart3,
    value: "ROI que se acumula con el tiempo",
    description:
      "Cada proceso automatizado libera capacidad, reduce errores y genera datos que alimentan nuevas automatizaciones. El valor se multiplica.",
  },
];

const USE_CASES = [
  {
    title: "Operaciones Comerciales",
    examples: [
      "Agentes que actualizan tu CRM automáticamente después de cada interacción",
      "Calificación y enrutamiento inteligente de leads entrantes",
      "Generación automática de propuestas basadas en datos del prospecto",
    ],
  },
  {
    title: "eCommerce y Marketing",
    examples: [
      "Sincronización automática de catálogo, precios e inventario entre sistemas",
      "Agentes que analizan el rendimiento de campañas y sugieren optimizaciones",
      "Automatización de reportes de performance con datos de múltiples fuentes",
    ],
  },
  {
    title: "Operaciones Internas",
    examples: [
      "Agentes que procesan y clasifican documentos entrantes",
      "Automatización de onboarding de clientes o proveedores",
      "Flujos de aprobación inteligentes que escalan solo las excepciones",
    ],
  },
];

const FAQS = [
  {
    question: "¿Qué es MCP (Model Context Protocol)?",
    answer:
      "MCP es un estándar abierto creado por Anthropic que permite a los sistemas de IA conectarse de forma segura con herramientas empresariales, bases de datos y APIs. Si las APIs fueron el tejido conectivo de la era cloud, MCP es el tejido conectivo de la era de los agentes de IA. Permite que la IA no solo responda preguntas, sino que ejecute acciones reales dentro de tus sistemas de negocio.",
  },
  {
    question: "¿En qué se diferencia esto de usar Zapier o Make?",
    answer:
      "Zapier y Make son excelentes para automatizaciones simples basadas en reglas: 'si pasa X, haz Y'. Los agentes de IA con MCP van más allá: pueden interpretar contexto, tomar decisiones complejas, manejar excepciones y ejecutar flujos que requieren razonamiento. Es la diferencia entre un semáforo y un conductor: ambos gestionan tráfico, pero uno se adapta a la situación.",
  },
  {
    question: "¿Necesito cambiar mis herramientas actuales?",
    answer:
      "No. Los servidores MCP se diseñan como una capa de integración sobre tus sistemas existentes. Si usas HubSpot, Salesforce, VTEX, SAP, Google Sheets o cualquier herramienta con API, los agentes se conectan a ellas sin reemplazarlas. Tu equipo sigue usando las mismas herramientas — los agentes trabajan en segundo plano.",
  },
  {
    question: "¿Es seguro conectar IA a mis sistemas empresariales?",
    answer:
      "Sí. MCP fue diseñado con seguridad empresarial como prioridad. Cada agente opera con permisos específicos y controlados: tú defines exactamente qué datos puede leer, qué acciones puede ejecutar y qué sistemas puede acceder. Todo queda registrado y es auditable.",
  },
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer:
      "Un flujo de automatización simple (por ejemplo, calificación automática de leads) puede estar operativo en 2 a 3 semanas. Proyectos más complejos con múltiples integraciones MCP toman entre 4 y 8 semanas. Siempre empezamos con el proceso de mayor impacto para que veas resultados rápido.",
  },
  {
    question: "¿Cuánto cuesta este servicio?",
    answer:
      "El precio depende del número de procesos a automatizar, la complejidad de las integraciones y los sistemas involucrados. Agenda una consulta gratuita de 30 minutos: analizamos tus procesos actuales y te doy un estimado basado en tu situación específica.",
  },
];

export default function AutomatizacionAgentesIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatización de Procesos con Agentes de IA e Integraciones MCP",
            description:
              "Diseño e implementación de agentes de IA conectados a sistemas empresariales mediante Model Context Protocol (MCP) para automatizar procesos B2B.",
            provider: {
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
            },
            url: `${SITE_CONFIG.url}/servicios/automatizacion-agentes-ia-mcp`,
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
              Automatización de Procesos con Agentes de IA e Integraciones MCP
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Conecto agentes de inteligencia artificial a tus sistemas
              empresariales mediante Model Context Protocol (MCP) para que la IA
              no solo responda preguntas — sino que ejecute procesos reales
              dentro de tu negocio.
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
                La mayoría de empresas B2B usan IA de forma aislada. El
                verdadero valor está en conectarla a tus operaciones.
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
                Lo que cambia cuando tus sistemas hablan con agentes de IA
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

      {/* Use Cases */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-primary mb-4">Casos de Uso</p>
              <h2 className="text-3xl font-bold">
                Ejemplos reales de automatización con agentes de IA
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {USE_CASES.map((useCase) => (
                <div key={useCase.title} className="card">
                  <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                  <ul className="space-y-3">
                    {useCase.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-2 text-base"
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">
                          →
                        </span>
                        <span className="text-muted-foreground">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-gray section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-primary mb-4">Proceso</p>
              <h2 className="text-3xl font-bold">Cómo funciona</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Desde el mapeo de procesos hasta agentes de IA operando en
                producción, conectados a tus sistemas vía MCP.
              </p>
            </div>

            {/* Diagrama del proceso de automatización */}
            <div className="flex justify-center mb-16">
              <Image
                src="/images/proceso-automatizacion-ia-mcp.svg"
                alt="Proceso de Automatización con IA: Mapeo de Procesos, Diseño de Agentes e Integraciones MCP, Implementación y Conexión, Optimización y Escalamiento"
                width={1050}
                height={460}
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
              ¿Listo para que la IA trabaje dentro de tus sistemas?
            </h2>
            <p className="text-lg text-white/90">
              En 30 minutos mapeamos tus procesos actuales y te muestro qué
              automatizaciones con agentes de IA y MCP tendrían mayor impacto en
              tu operación.
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

      {/* What is MCP — Educational Section */}
      <section className="section-white section">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <p className="section-label text-primary mb-4">Tecnología</p>
              <h2 className="text-3xl font-bold">
                ¿Qué es Model Context Protocol (MCP)?
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                MCP es un estándar abierto creado por Anthropic que permite a
                los sistemas de IA conectarse de forma segura con herramientas
                empresariales, bases de datos y APIs. Es el equivalente a lo que
                las APIs fueron para la era cloud: el tejido conectivo que
                permite a los agentes de IA operar dentro de tu infraestructura
                de negocio.
              </p>
              <p>
                En la práctica, MCP permite que un agente de IA acceda a tu CRM
                para leer datos de un prospecto, consulte tu ERP para verificar
                inventario, actualice una hoja de cálculo con resultados y envíe
                una notificación a tu equipo — todo en un flujo automatizado,
                seguro y auditable.
              </p>
              <p>
                La diferencia con herramientas como Zapier o Make es que los
                agentes con MCP no siguen reglas fijas: interpretan contexto,
                toman decisiones y manejan excepciones. Es la diferencia entre
                un semáforo y un conductor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-gray section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="section-label text-primary mb-4">
              ¿Quién está detrás?
            </p>
            <h2 className="text-3xl font-bold">Juan Pablo Franco</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Más de 15 años integrando sistemas empresariales en proyectos de
              comercio digital para marcas globales. Actualmente combino esa
              experiencia con agentes de IA y el estándar MCP para automatizar
              procesos B2B — desde la generación de demanda hasta las
              operaciones internas. He liderado integraciones complejas entre
              plataformas de eCommerce, ERPs, CRMs y sistemas de logística en 3
              continentes.
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
      <section className="section-white section">
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
      <section className="section-gray section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm
              title="¿Aún no estás listo? Recibe insights B2B cada semana"
              description="Automatización con agentes de IA, integraciones MCP y estrategias de comercio digital B2B. Sin spam, solo valor."
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
              30 minutos. Sin compromiso. Mapeamos tus procesos, identificamos
              oportunidades de automatización y te muestro cómo los agentes de
              IA con MCP pueden transformar tu operación B2B.
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
