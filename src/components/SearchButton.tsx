"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

interface SearchButtonProps {
  isScrolled: boolean;
}

export default function SearchButton({ isScrolled }: SearchButtonProps) {
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
        aria-label="Buscar"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-all ${
          isScrolled
            ? "border-gray-200 text-gray-500 hover:border-primary hover:text-primary bg-white"
            : "border-white/30 text-white/80 hover:border-white hover:text-white bg-white/10"
        }`}
      >
        <Search size={15} />
        <span className="hidden sm:inline">Buscar</span>
        <kbd className={`hidden md:inline-flex items-center text-xs px-1.5 py-0.5 rounded border ${
          isScrolled ? "border-gray-200 text-gray-400 bg-gray-50" : "border-white/20 text-white/50 bg-white/10"
        }`}>
          ⌘K
        </kbd>
      </button>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
