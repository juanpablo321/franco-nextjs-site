export const SITE_CONFIG = {
  name: "Juan Pablo Franco",
  title: "Juan Pablo Franco | Estratega de Expansión Digital",
  description:
    "Estratega de Expansión Digital con más de 15 años de experiencia en eCommerce, VTEX, marketplaces B2B y transformación digital en Colombia y el mundo.",
  url: "https://franco.com.co",
  locale: "es_CO",
  language: "es",
  author: "Juan Pablo Franco",
  twitterHandle: "",
  linkedinUrl: "https://www.linkedin.com/in/juanpablo321/",
  whatsappNumber: "+573235812748",
  whatsappUrl: "https://wa.me/573235812748",
  location: "Bogotá D.C., Colombia",
  hubspotMeetingUrl: "https://meetings.hubspot.com/juanpablo321",
  heroImage: "/uploads/hero-illustration.webp",
  heroImageFallback: "/uploads/hero-illustration.png",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Glosario", href: "/glosario" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = [
  {
    icon: "ShoppingCart",
    title: "Consultoría eCommerce",
    description:
      "Implementación y optimización de plataformas de comercio electrónico para maximizar conversiones y mejorar la experiencia del usuario.",
    features: [
      "Auditoría y estrategia eCommerce",
      "Implementación VTEX end-to-end",
      "Optimización de conversiones",
    ],
  },
  {
    icon: "Globe",
    title: "Expansión Internacional de eCommerce",
    description:
      "Estrategias de entrada a nuevos mercados, localización y adaptación cultural para llevar tu eCommerce B2B más allá de fronteras.",
    features: [
      "Análisis de mercados internacionales",
      "Localización y adaptación cultural",
      "Logística y operaciones cross-border",
    ],
  },
  {
    icon: "Target",
    title: "Generación de Leads B2B",
    description:
      "Estrategias de marketing digital y automatización para generar leads calificados y aumentar conversiones B2B.",
    features: [
      "Estrategia de contenido B2B",
      "Marketing automation",
      "Optimización de funnel de ventas",
    ],
  },
  {
    icon: "BarChart3",
    title: "Análisis de Datos y BI",
    description:
      "Implementación de dashboards y análisis de datos para toma de decisiones basadas en métricas clave.",
    features: [
      "Dashboards personalizados",
      "Análisis de comportamiento",
      "Reportes de performance",
    ],
  },
  {
    icon: "TrendingUp",
    title: "Estrategia Omnicanal",
    description:
      "Integración de canales online y offline para experiencia de cliente unificada y sin fricciones.",
    features: [
      "Integración de sistemas",
      "Unified commerce",
      "Customer journey mapping",
    ],
  },
  {
    icon: "Award",
    title: "Transformación Digital",
    description:
      "Acompañamiento en procesos de digitalización empresarial y adopción de nuevas tecnologías.",
    features: [
      "Roadmap de digitalización",
      "Change management",
      "Capacitación de equipos",
    ],
  },
] as const;

export const EXPERIENCES = [
  {
    period: "2020 - Presente",
    title: "Consultor Independiente",
    company: "Estrategia Digital & eCommerce",
    achievements: [
      "Liderazgo de +50 proyectos de implementación VTEX para empresas Fortune 500",
      "Desarrollo de marketplaces B2B con GMV superior a $10M USD",
      "Generación de +5,000 leads calificados para clientes B2B",
    ],
  },
  {
    period: "2015 - 2020",
    title: "Director de eCommerce",
    company: "Empresa Multinacional FMCG",
    achievements: [
      "Gestión de equipo de 15 personas en 3 países de LATAM",
      "Crecimiento de ventas online del 300% en 3 años",
      "Implementación de estrategia omnicanal en 50+ tiendas",
    ],
  },
  {
    period: "2010 - 2015",
    title: "Gerente de Marketing Digital",
    company: "Agencia de Marketing Digital",
    achievements: [
      "Gestión de portafolio de 30+ clientes en retail y eCommerce",
      "Desarrollo de estrategias SEO/SEM con ROI promedio del 400%",
      "Capacitación de equipos en herramientas de analytics y CRO",
    ],
  },
] as const;

export const CLIENTS = [
  "Coca-Cola",
  "Nestlé",
  "Unilever",
  "Amazon",
  "Mercado Libre",
  "Rappi",
  "Falabella",
  "Grupo Éxito",
] as const;

export const STATS = [
  { value: "+15", label: "Años Experiencia" },
  { value: "+100", label: "Proyectos" },
  { value: "Global", label: "Alcance" },
] as const;
