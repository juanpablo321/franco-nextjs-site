# Juan Pablo Franco — Sitio Web Profesional

Sitio web profesional construido con **Next.js 16**, optimizado para SEO/GEO/AEO, con sistema de gestión de contenido basado en archivos Markdown (Git-based CMS).

## Tecnologías

| Tecnología | Versión | Propósito |
|---|---|---|
| Next.js | 16.1.6 | Framework React con SSG/SSR |
| TypeScript | 5.x | Tipado estático |
| TailwindCSS | 4.x | Estilos utilitarios |
| React Markdown | 9.x | Renderizado de contenido Markdown |
| Gray Matter | 4.x | Parsing de frontmatter YAML |
| Lucide React | — | Iconografía |

## Estructura del Proyecto

```
franco-nextjs-site/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── page.tsx            # Home
│   │   ├── sobre-mi/           # Sobre Mí
│   │   ├── blog/               # Blog (listado + [slug])
│   │   ├── glosario/           # Glosario (listado + [slug])
│   │   ├── privacidad/         # Política de Privacidad
│   │   ├── terminos/           # Términos y Condiciones
│   │   ├── layout.tsx          # Layout principal
│   │   ├── globals.css         # Estilos globales
│   │   ├── sitemap.ts          # Sitemap dinámico
│   │   ├── robots.ts           # Robots.txt
│   │   └── not-found.tsx       # Página 404
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx          # Navegación principal
│   │   └── Footer.tsx          # Pie de página
│   ├── content/                # Contenido Markdown (CMS)
│   │   ├── blog/               # 27 artículos del blog
│   │   └── glossary/           # 69 términos del glosario
│   ├── lib/                    # Utilidades y lógica
│   │   ├── blog.ts             # Funciones de lectura del blog
│   │   ├── glossary.ts         # Funciones de lectura del glosario
│   │   ├── constants.ts        # Configuración del sitio
│   │   └── utils.ts            # Utilidades generales
│   └── types/                  # Tipos TypeScript
│       └── index.ts
├── public/                     # Archivos estáticos
├── next.config.ts              # Configuración de Next.js
├── tailwind.config.ts          # Configuración de TailwindCSS
└── package.json
```

## Gestión de Contenido (CMS)

El sitio utiliza un **CMS basado en archivos Markdown** almacenados directamente en el repositorio de Git.

### Crear un nuevo artículo de blog

1. Crear un archivo `.md` en `src/content/blog/` con el nombre del slug deseado.
2. Incluir el frontmatter YAML al inicio:

```yaml
---
title: "Título del Artículo"
excerpt: "Descripción breve para SEO y listados"
category: "Categoría"
date: "DD de Mes, YYYY"
image: "https://url-de-imagen.jpg"
keywords:
  - "palabra clave 1"
  - "palabra clave 2"
---
```

3. Escribir el contenido en Markdown debajo del frontmatter.
4. Hacer commit y push. Vercel reconstruirá automáticamente el sitio.

### Crear un nuevo término del glosario

1. Crear un archivo `.md` en `src/content/glossary/` con el slug del término.
2. Incluir el frontmatter con los campos: term, definition, category, relatedTerms, keyPoints, example, proTip, references.
3. Hacer commit y push.

## SEO Implementado

| Característica | Implementación |
|---|---|
| Meta tags dinámicos | Cada página tiene title, description y Open Graph únicos |
| JSON-LD Schema | WebSite, Person, BlogPosting, DefinedTerm |
| Sitemap XML | Generado dinámicamente con todas las rutas |
| Robots.txt | Configurado para permitir indexación |
| URLs canónicas | Configuradas en cada página |
| SSG | 107 páginas pre-renderizadas |

## Despliegue en Vercel

1. Ir a [vercel.com](https://vercel.com) e iniciar sesión con GitHub.
2. Seleccionar el repositorio `franco-nextjs-site`.
3. Vercel detectará automáticamente Next.js.
4. Hacer clic en **Deploy**.
5. (Opcional) Configurar el dominio `franco.com.co`.

## Desarrollo Local

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
```

## Contenido

- **27 artículos de blog** sobre marketing B2B, eCommerce, IA y transformación digital
- **69 términos de glosario** con definiciones, puntos clave, ejemplos y referencias

## Licencia

Todos los derechos reservados. Juan Pablo Franco.
