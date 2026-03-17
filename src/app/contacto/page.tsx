'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { MessageSquare, Linkedin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ isLoading: true, isSuccess: false, isError: false, errorMessage: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setFormState({ isLoading: false, isSuccess: true, isError: false, errorMessage: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false }));
      }, 5000);
    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Error al enviar el formulario',
      });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden section-purple">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label text-white/80 mb-4">Contacto</p>
            <h1 className="text-white mb-6">Trabajemos Juntos</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              ¿Listo para llevar tu negocio digital al siguiente nivel? Contáctame y
              hablemos de cómo puedo ayudarte a alcanzar tus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes escribirme directamente por el formulario o contactarme
                  a través de cualquiera de estos canales.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      +57 323 5812748
                    </p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      /in/juanpablo321
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-semibold text-foreground">Bogotá D.C., Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="¿Cuál es el tema de tu mensaje?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Cuéntame más sobre tu proyecto o pregunta..."
                  />
                </div>

                {formState.isSuccess && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                    <p className="font-semibold">Mensaje enviado correctamente</p>
                    <p className="text-sm mt-1">
                      Gracias por tu mensaje. Pronto me pondré en contacto contigo.
                    </p>
                  </div>
                )}

                {formState.isError && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                    <p className="font-semibold">Error al enviar el mensaje</p>
                    <p className="text-sm mt-1">{formState.errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState.isLoading}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState.isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
