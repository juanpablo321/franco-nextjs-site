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
  { label: "Servicios", href: "/servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Glosario", href: "/glosario" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = [
  {
    icon: "Bot",
    title: "Generación de Demanda B2B con IA",
    slug: "generacion-de-demanda-b2b",
    description:
      "Diseño sistemas de agentes de IA que califican prospectos, automatizan el nurturing y acortan tu ciclo de ventas B2B.",
    features: [
      "Agentes de IA que califican prospectos 24/7",
      "Automatización inteligente del nurturing",
      "Reducción medible del ciclo de ventas",
    ],
  },
  {
    icon: "ShoppingCart",
    title: "Consultor en Comercio Electrónico B2B y B2C",
    slug: "estrategia-comercio-digital-b2b",
    description:
      "Consultoría en eCommerce, marketplaces e integración de canales digitales para que tu empresa B2B venda más y mejor.",
    features: [
      "Implementación y optimización VTEX",
      "Estrategia omnicanal B2B",
      "Optimización de conversiones y UX",
    ],
  },
  {
    icon: "Workflow",
    title: "Automatización con Agentes de IA y MCP",
    slug: "automatizacion-agentes-ia-mcp",
    description:
      "Conecto agentes de IA a tus sistemas empresariales vía Model Context Protocol (MCP) para automatizar procesos y eliminar tareas manuales.",
    features: [
      "Agentes de IA conectados a CRM, ERP y APIs",
      "Integraciones MCP seguras y auditables",
      "Automatización inteligente de flujos de trabajo",
    ],
  },
] as const;

export const EXPERIENCES = [
  {
    period: "Enero 2022 - Actualidad",
    title: "Generación de Demanda e IA · Product Manager · Solution Architect",
    company: "VTEX",
    achievements: [
      "Diseño y opero sistemas de generación de demanda B2B usando agentes de IA para calificar prospectos, automatizar el nurturing y acortar el ciclo de ventas.",
      "Lidero el principal canal digital de generación de leads B2B de VTEX: vtex.com — ecosistema global de 16 sitios en 9 idiomas.",
      "Brindé soporte técnico en proyectos globales para clientes como Groupe Casino (Francia), OBI (Alemania) y BeautyCounter (EE. UU.).",
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
