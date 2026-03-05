import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        path: 'src/content/blog',
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return (values?.title || '')
                .toLowerCase()
                .replace(/[áàäâ]/g, 'a')
                .replace(/[éèëê]/g, 'e')
                .replace(/[íìïî]/g, 'i')
                .replace(/[óòöô]/g, 'o')
                .replace(/[úùüû]/g, 'u')
                .replace(/ñ/g, 'n')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            },
          },
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Extracto (SEO)',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'category',
            label: 'Categoría',
            required: true,
            options: [
              'Marketing Digital B2B',
              'eCommerce',
              'Inteligencia Artificial',
              'Transformación Digital',
              'Estrategia Digital',
              'Generación de Leads',
              'SEO',
              'Content Marketing',
            ],
          },
          {
            type: 'string',
            name: 'date',
            label: 'Fecha de Publicación',
            required: true,
            description: 'Formato: DD de Mes, YYYY (ej: 15 de Marzo, 2026)',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Imagen Destacada',
            description: 'URL de la imagen destacada del artículo',
          },
          {
            type: 'string',
            name: 'keywords',
            label: 'Palabras Clave (SEO)',
            list: true,
            description: 'Palabras clave para posicionamiento SEO',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Contenido',
            isBody: true,
          },
        ],
      },
      {
        name: 'glossary',
        label: 'Glosario',
        path: 'src/content/glossary',
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return (values?.term || '')
                .toLowerCase()
                .replace(/[áàäâ]/g, 'a')
                .replace(/[éèëê]/g, 'e')
                .replace(/[íìïî]/g, 'i')
                .replace(/[óòöô]/g, 'o')
                .replace(/[úùüû]/g, 'u')
                .replace(/ñ/g, 'n')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            },
          },
          router: ({ document }) => `/glosario/${document._sys.filename}`,
        },
        fields: [
          {
            type: 'string',
            name: 'term',
            label: 'Término',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'definition',
            label: 'Definición',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'category',
            label: 'Categoría',
            required: true,
            options: [
              'Optimización',
              'UX/UI',
              'Marketing',
              'Ventas',
              'Analítica',
              'eCommerce',
              'Tecnología',
              'Estrategia',
              'Publicidad',
              'CRM',
              'Logística',
              'Redes Sociales',
              'Gestión',
              'Desarrollo',
              'SaaS',
            ],
          },
          {
            type: 'string',
            name: 'relatedTerms',
            label: 'Términos Relacionados',
            list: true,
            description: 'Slugs de términos relacionados (ej: conversion-rate-optimization-cro)',
          },
          {
            type: 'string',
            name: 'keyPoints',
            label: 'Puntos Clave',
            list: true,
          },
          {
            type: 'object',
            name: 'example',
            label: 'Ejemplo',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Título del Ejemplo',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Descripción del Ejemplo',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'string',
            name: 'proTip',
            label: 'Pro Tip',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'references',
            label: 'Referencias',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Título',
                required: true,
              },
              {
                type: 'string',
                name: 'author',
                label: 'Autor',
                required: true,
              },
              {
                type: 'string',
                name: 'type',
                label: 'Tipo',
                options: ['libro', 'artículo', 'herramienta', 'estudio', 'curso', 'guía', 'podcast', 'video'],
              },
              {
                type: 'string',
                name: 'description',
                label: 'Descripción',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Contenido Extendido',
            isBody: true,
          },
        ],
      },
    ],
  },
});
