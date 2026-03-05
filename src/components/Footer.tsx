import Link from "next/link";
import { Phone, MapPin, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Estratega de Expansión Digital especializado en eCommerce, VTEX y
              desarrollo de marketplaces B2B.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-base">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.whatsappNumber}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.whatsappNumber}
                </a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Linkedin size={18} className="text-primary flex-shrink-0" />
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/glosario"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Glosario de Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-6 text-base">
            <Link
              href="/privacidad"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
