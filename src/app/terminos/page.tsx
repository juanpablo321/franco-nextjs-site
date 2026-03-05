import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de Juan Pablo Franco.",
  alternates: { canonical: `${SITE_CONFIG.url}/terminos` },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <>
      <section className="pt-32 pb-16 section-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white">Términos y Condiciones</h1>
          </div>
        </div>
      </section>
      <section className="section-white py-16">
        <div className="container">
          <div className="prose mx-auto max-w-4xl">
            <p>Última actualización: Marzo 2026</p>
            <h2>Uso del Sitio</h2>
            <p>
              Este sitio web es propiedad de Juan Pablo Franco. Al acceder y
              utilizar este sitio, usted acepta cumplir con estos términos y
              condiciones.
            </p>
            <h2>Propiedad Intelectual</h2>
            <p>
              Todo el contenido publicado en este sitio web, incluyendo textos,
              imágenes, gráficos y diseño, es propiedad de Juan Pablo Franco y
              está protegido por las leyes de propiedad intelectual de Colombia.
            </p>
            <h2>Limitación de Responsabilidad</h2>
            <p>
              La información proporcionada en este sitio web tiene fines
              informativos y educativos. No constituye asesoría profesional
              específica para su caso particular.
            </p>
            <h2>Enlaces Externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. No
              somos responsables del contenido ni de las políticas de privacidad
              de dichos sitios.
            </p>
            <h2>Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos, puede contactarnos a
              través de WhatsApp al {SITE_CONFIG.whatsappNumber}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
