export const SITE_CONFIG = {
  name: "Juan Pablo Franco",
  title: "Juan Pablo Franco | Estratega de Comercio Digital y IA para B2B",
  description:
    "Diseño estrategias de expansión digital que combinan eCommerce, marketplaces e inteligencia artificial para empresas B2B en Colombia y el mundo. +15 años de experiencia en VTEX y comercio digital.",
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
    period: "Enero 2022 - Actualidad",
    title: "Product Manager · Solution Architect · Chief of Staff · Partner Success Manager",
    company: "VTEX",
    achievements: [
      "Lidero el principal canal digital de generación de leads B2B de VTEX: vtex.com — ecosistema global de 16 sitios en 9 idiomas.",
      "Brindé soporte técnico en proyectos globales para clientes como Groupe Casino (Francia), OBI (Alemania) y BeautyCounter (EE. UU.).",
      "Lideré la integración entre VTEX y el ERP legado de La Comer (México) en dominios críticos como catálogo, inventario, precios y medios de pago sobre AWS.",
      "Diseñé y ejecuté la estrategia de consolidación del ecosistema de partners implementadores en Colombia, Ecuador y Panamá.",
    ],
  },
  {
    period: "Noviembre 2019 - Septiembre 2021",
    title: "Jefe de Comercio Electrónico",
    company: "Panamericana Librería y Papelería S.A.",
    achievements: [
      "Lideré la estrategia de marketing digital multicanal, aumentando tráfico orgánico, ticket promedio y tasa de conversión con campañas en Google Ads, Facebook, Instagram y SEO.",
      "Optimicé el embudo de conversión en la tienda VTEX junto al equipo de UX, implementando cross selling y reduciendo fricciones de navegación.",
      "Gestioné el equipo de servicio al cliente durante la alta demanda de la pandemia, mejorando eficiencia operativa y satisfacción.",
    ],
  },
  {
    period: "Mayo 2018 - Octubre 2019",
    title: "Project Manager | Solution Architect",
    company: "TITA Media",
    achievements: [
      "Lideré implementaciones en VTEX para epk.com y mundounico.com, integrando plataformas con ERP y OMS.",
      "Dirigí la migración a VTEX de flamingo.com.co, adaptando el canal digital al modelo de microcréditos.",
      "Rediseñé los sitios de Whirlpool y KitchenAid Colombia, alineando la experiencia digital con los estándares de marca global.",
    ],
  },
  {
    period: "Noviembre 2016 - Mayo 2018",
    title: "Project Manager | Director de Operaciones",
    company: "Rise Agency",
    achievements: [
      "Consolidé y lideré el equipo de backoffice y desarrollo para soporte de grandes tiendas eCommerce en Colombia.",
      "Gestioné implementaciones B2B y B2C, incluyendo integraciones entre VTEX y MercadoLibre.",
      "Coordiné proyectos para Oster Colombia, Patprimo, ElectroJaponesa y Vélez.",
    ],
  },
  {
    period: "Febrero 2012 - Noviembre 2016",
    title: "eCommerce Manager",
    company: "La Casa del Teléfono (Ciudad de Panamá)",
    achievements: [
      "Lideré la creación del canal eCommerce sobre Magento, alcanzando el objetivo de ventas anual en solo seis meses.",
      "Implementé procesos operativos para escalar el canal digital e integrarlo con operaciones físicas.",
    ],
  },
  {
    period: "Enero 2004 - Noviembre 2011",
    title: "Director de Operaciones",
    company: "Imagen Web Colombia Ltda.",
    achievements: [
      "Cofundador y responsable de operaciones de agencia digital enfocada en soluciones de marketing digital para empresas en Colombia y EE. UU.",
      "Dirigí la entrega de proyectos web y campañas digitales para clientes de distintos sectores.",
    ],
  },
] as const;

export const CLIENTS = [
  "VTEX",
  "Panamericana",
  "Groupe Casino",
  "La Comer",
  "EPK",
  "Flamingo",
  "Whirlpool",
  "Patprimo",
] as const;

export const STATS = [
  { value: "+15", label: "Años Experiencia" },
  { value: "+100", label: "Proyectos" },
  { value: "Global", label: "Alcance" },
] as const;
