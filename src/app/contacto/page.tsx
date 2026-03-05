'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: '',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: '',
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSuccess: false,
        }));
      }, 5000);
    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage:
          error instanceof Error
            ? error.message
            : 'Error al enviar el formulario',
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl hover:opacity-80 transition">
            Juan Pablo Franco
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white/80 hover:text-white transition">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="text-white/80 hover:text-white transition">
              Sobre Mí
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition">
              Blog
            </Link>
            <Link href="/glosario" className="text-white/80 hover:text-white transition">
              Glosario
            </Link>
            <Link href="/contacto" className="text-white font-semibold">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trabajemos Juntos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            ¿Listo para llevar tu negocio digital al siguiente nivel? Contáctame para discutir
            cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="tu@email.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="¿Cuál es el tema de tu mensaje?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                placeholder="Cuéntame más sobre tu proyecto o pregunta..."
              />
            </div>

            {/* Success Message */}
            {formState.isSuccess && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-100">
                <p className="font-semibold">✓ Mensaje enviado correctamente</p>
                <p className="text-sm mt-1">
                  Gracias por tu mensaje. Pronto nos pondremos en contacto contigo.
                </p>
              </div>
            )}

            {/* Error Message */}
            {formState.isError && (
              <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-100">
                <p className="font-semibold">✕ Error al enviar el mensaje</p>
                <p className="text-sm mt-1">{formState.errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState.isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {formState.isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⟳</span>
                  Enviando...
                </span>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-white font-semibold text-lg mb-4">Otras formas de contactarme</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-white/60 text-sm mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/573235812748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold transition"
                >
                  +57 323 5812748
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/juanpablo321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold transition"
                >
                  /in/juanpablo321
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/60 hover:text-white transition">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-mi" className="text-white/60 hover:text-white transition">
                    Sobre Mí
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/60 hover:text-white transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/glosario" className="text-white/60 hover:text-white transition">
                    Glosario
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-white/60 hover:text-white transition">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-white/60 hover:text-white transition">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/573235812748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/juanpablo321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ubicación</h4>
              <p className="text-white/60">Bogotá D.C., Colombia</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>&copy; 2026 Juan Pablo Franco. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
