"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Search, X, BookOpen, FileText, ArrowRight } from "lucide-react";
import type { SearchIndexItem } from "@/app/api/search/route";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchIndexItem[]>([]);
  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchIndexItem> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Cargar el índice de búsqueda una sola vez
  useEffect(() => {
    if (!isOpen || index.length > 0) return;
    setIsLoading(true);
    fetch("/api/search")
      .then((res) => res.json())
      .then((data: SearchIndexItem[]) => {
        setIndex(data);
        setFuse(
          new Fuse(data, {
            keys: [
              { name: "title", weight: 0.6 },
              { name: "excerpt", weight: 0.3 },
              { name: "category", weight: 0.1 },
            ],
            threshold: 0.35,
            includeScore: true,
            minMatchCharLength: 2,
          })
        );
      })
      .finally(() => setIsLoading(false));
  }, [isOpen, index.length]);

  // Buscar al escribir
  useEffect(() => {
    if (!fuse) return;
    if (query.trim().length < 2) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    const fuseResults = fuse.search(query.trim()).slice(0, 8);
    setResults(fuseResults.map((r) => r.item));
    setActiveIndex(0);
  }, [query, fuse]);

  // Focus al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Navegación con teclado
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        router.push(results[activeIndex].url);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [results, activeIndex, router, onClose]
  );

  if (!isOpen) return null;

  const blogResults = results.filter((r) => r.type === "blog");
  const glossaryResults = results.filter((r) => r.type === "glosario");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar artículos y términos del glosario..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={18} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded border border-gray-200">
            Esc
          </kbd>
        </div>

        {/* Resultados */}
        <div className="max-h-[60vh] overflow-y-auto">
          {isLoading && (
            <div className="py-12 text-center text-sm text-gray-400">
              Cargando índice de búsqueda...
            </div>
          )}

          {!isLoading && query.length >= 2 && results.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-500">
                Sin resultados para <span className="font-medium text-gray-700">&ldquo;{query}&rdquo;</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">Intenta con otras palabras clave</p>
            </div>
          )}

          {!isLoading && query.length < 2 && (
            <div className="py-10 text-center text-sm text-gray-400">
              Escribe al menos 2 caracteres para buscar
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              {/* Blog results */}
              {blogResults.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 px-5 py-2">
                    <FileText size={13} className="text-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Artículos del Blog
                    </span>
                  </div>
                  {blogResults.map((item) => {
                    const globalIdx = results.indexOf(item);
                    return (
                      <button
                        key={item.url}
                        onClick={() => { router.push(item.url); onClose(); }}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className={`w-full flex items-start gap-3 px-5 py-3 text-left transition-colors ${
                          activeIndex === globalIdx ? "bg-primary/5" : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.excerpt}</p>
                        </div>
                        {item.category && (
                          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                            {item.category}
                          </span>
                        )}
                        <ArrowRight size={14} className={`shrink-0 mt-0.5 transition-opacity ${activeIndex === globalIdx ? "opacity-100 text-primary" : "opacity-0"}`} />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Glosario results */}
              {glossaryResults.length > 0 && (
                <div className={blogResults.length > 0 ? "border-t border-gray-100 mt-1 pt-1" : ""}>
                  <div className="flex items-center gap-2 px-5 py-2">
                    <BookOpen size={13} className="text-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Glosario
                    </span>
                  </div>
                  {glossaryResults.map((item) => {
                    const globalIdx = results.indexOf(item);
                    return (
                      <button
                        key={item.url}
                        onClick={() => { router.push(item.url); onClose(); }}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className={`w-full flex items-start gap-3 px-5 py-3 text-left transition-colors ${
                          activeIndex === globalIdx ? "bg-primary/5" : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.excerpt}</p>
                        </div>
                        <ArrowRight size={14} className={`shrink-0 mt-0.5 transition-opacity ${activeIndex === globalIdx ? "opacity-100 text-primary" : "opacity-0"}`} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">↑↓</kbd>
              navegar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">↵</kbd>
              abrir
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-500">Esc</kbd>
              cerrar
            </span>
          </div>
          <span className="text-xs text-gray-400">
            {results.length > 0 ? `${results.length} resultado${results.length !== 1 ? "s" : ""}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
