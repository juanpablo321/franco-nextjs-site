"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Atajo de teclado Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Buscar en el blog y glosario"
        className="flex items-center gap-3 w-full max-w-md mx-auto px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white/80 hover:bg-white/20 hover:border-white/50 hover:text-white transition-all text-sm"
      >
        <Search size={16} className="shrink-0" />
        <span className="flex-1 text-left">Buscar artículos y términos...</span>
        <kbd className="hidden sm:inline-flex items-center text-xs px-1.5 py-0.5 rounded border border-white/20 text-white/50 bg-white/10">
          ⌘K
        </kbd>
      </button>
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
