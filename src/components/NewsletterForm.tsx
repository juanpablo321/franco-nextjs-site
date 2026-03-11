"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  variant?: "default" | "compact" | "hero";
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterForm({
  variant = "default",
  title,
  description,
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "¡Suscripción exitosa!");
        setEmail("");
        setFirstName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  // Variante compacta: solo email + botón en una línea
  if (variant === "compact") {
    return (
      <div className={`${className}`}>
        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <CheckCircle size={20} />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap sm:flex-nowrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>Suscribirme <ArrowRight size={16} /></>
              )}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600">{message}</p>
        )}
      </div>
    );
  }

  // Variante por defecto: card completa con nombre + email
  const defaultTitle = title || "Recibe insights B2B cada semana";
  const defaultDescription =
    description ||
    "Estrategias de expansión digital, eCommerce B2B y tendencias de IA directamente en tu bandeja de entrada. Sin spam, solo valor.";

  return (
    <div
      className={`rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-primary/10 p-8 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Mail size={20} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold">{defaultTitle}</h3>
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">{defaultDescription}</p>

      {status === "success" ? (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
          <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-800">¡Estás dentro!</p>
            <p className="text-sm text-green-700 mt-1">{message}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Tu nombre (opcional)"
              className="px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@empresa.com"
              required
              className="px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Suscribiendo...
              </>
            ) : (
              <>
                Suscribirme al Newsletter
                <ArrowRight size={18} />
              </>
            )}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600 text-center">{message}</p>
          )}
          <p className="text-xs text-muted-foreground text-center">
            Sin spam. Cancela cuando quieras. Leer{" "}
            <a href="/privacidad" className="underline hover:text-primary">
              política de privacidad
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
}
