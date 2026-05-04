"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, WA_MESSAGES } from "@/lib/data";

const navLinks = [
  { href: "#sistema", label: "Sistema PG" },
  { href: "#casos", label: "Casos" },
  { href: "#planes", label: "Planes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(245,245,245,0.07)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 no-underline"
            aria-label="PG Estrategias"
          >
            {/* Bar chart icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="1" y="12" width="4" height="7" fill="#A6E22E" rx="0.5"/>
              <rect x="8" y="7" width="4" height="12" fill="#A6E22E" rx="0.5" opacity="0.75"/>
              <rect x="15" y="2" width="4" height="17" fill="#A6E22E" rx="0.5" opacity="0.5"/>
            </svg>
            <span
              className="font-bold leading-none"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
              }}
            >
              <span style={{ color: "#A6E22E" }}>PG</span>
              <span style={{ color: "#F5F5F5" }}> ESTRATEGIAS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                style={{
                  color: "rgba(245,245,245,0.5)",
                  fontFamily: "var(--font-syne)",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,245,0.5)")}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "#A6E22E",
                color: "#0D0D0D",
                fontFamily: "var(--font-syne)",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8FC220")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A6E22E")}
            >
              Contacto
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 cursor-pointer p-2 -mr-2"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} style={{ color: "#F5F5F5" }} />
            ) : (
              <>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-syne)", color: "rgba(245,245,245,0.7)", letterSpacing: "0.1em" }}
                >
                  MENU
                </span>
                <Menu size={18} strokeWidth={1.5} style={{ color: "rgba(245,245,245,0.7)" }} />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-10"
            style={{ backgroundColor: "#0D0D0D" }}
          >
            <nav className="flex flex-col gap-1" aria-label="Menú móvil">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 border-b text-3xl font-bold uppercase transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: "#F5F5F5",
                      borderColor: "rgba(245,245,245,0.08)",
                      letterSpacing: "-0.02em",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#A6E22E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                className="mt-8"
              >
                <a
                  href={waLink(WA_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-7 py-4 text-sm font-bold uppercase tracking-widest cursor-pointer"
                  style={{
                    backgroundColor: "#A6E22E",
                    color: "#0D0D0D",
                    fontFamily: "var(--font-syne)",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                  }}
                >
                  Agenda tu diagnóstico →
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
