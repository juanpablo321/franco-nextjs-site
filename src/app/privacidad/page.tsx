import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos personales de Juan Pablo Franco.",
  alternates: { canonical: `${SITE_CONFIG.url}/privacidad` },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="pt-32 pb-16 section-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white">Política de Privacidad</h1>
          </div>
        </div>
      </section>
      <section className="section-white py-16">
        <div className="container">
          <div className="prose mx-auto max-w-4xl">
            <p>Última actualización: Marzo 2026</p>
            <h2>Responsable del Tratamiento</h2>
            <p>
              Juan Pablo Franco, con domicilio en Bogotá D.C., Colombia, es el
              responsable del tratamiento de los datos personales recopilados a
              través de este sitio web.
            </p>
            <h2>Datos Recopilados</h2>
            <p>
              Recopilamos únicamente la información que usted nos proporciona
              voluntariamente a través de formularios de contacto, incluyendo
              nombre, correo electrónico y mensaje.
            </p>
            <h2>Finalidad</h2>
            <p>
              Los datos recopilados se utilizan exclusivamente para responder a
              sus consultas y ofrecer información sobre nuestros servicios de
              consultoría digital.
            </p>
            <h2>Derechos del Titular</h2>
            <p>
              De acuerdo con la Ley 1581 de 2012 de Colombia, usted tiene
              derecho a conocer, actualizar, rectificar y suprimir sus datos
              personales. Para ejercer estos derechos, puede contactarnos a
              través de WhatsApp al {SITE_CONFIG.whatsappNumber}.
            </p>
            <h2>Cookies</h2>
            <p>
              Este sitio web utiliza cookies técnicas necesarias para su
              funcionamiento. No utilizamos cookies de seguimiento de terceros
              con fines publicitarios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
