"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (pathname === "/") {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 100);
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));

              if (link.href.startsWith("/#")) {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      isScrolled
                        ? "text-foreground/70 hover:text-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? isScrolled
                        ? "text-primary"
                        : "text-white"
                      : isScrolled
                        ? "text-foreground/70 hover:text-primary"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="container py-8 flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              if (link.href.startsWith("/#")) {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
