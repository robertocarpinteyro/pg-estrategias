"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#precios", label: "Paquetes" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(244,239,232,0.96)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(213,206,188,0.6)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-1 no-underline"
            aria-label="PG Estrategias"
          >
            <span
              className="font-bold text-base tracking-tight leading-none"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ color: "var(--accent)" }}>PG</span>
              <span style={{ color: "var(--text)" }}> ESTRATEGIAS</span>
            </span>
            <span
              className="text-xs align-super"
              style={{ color: "var(--accent)", fontSize: "0.55rem" }}
            >
              ®
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
                  color: "var(--muted)",
                  fontFamily: "var(--font-space-grotesk)",
                  letterSpacing: "0.08em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-sm text-white transition-colors duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--accent)",
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center gap-1 cursor-pointer p-2 -mr-2"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest mr-1"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                color: "var(--text)",
                letterSpacing: "0.08em",
              }}
            >
              {menuOpen ? "" : "MENU"}
            </span>
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} style={{ color: "var(--text)" }} />
            ) : (
              <Menu
                size={18}
                strokeWidth={1.5}
                style={{ color: "var(--text)" }}
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-10"
            style={{ backgroundColor: "var(--background)" }}
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
                    onClick={closeMenu}
                    className="block py-4 border-b text-2xl font-bold transition-colors duration-200 cursor-pointer"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: "var(--text)",
                      borderColor: "var(--border)",
                      letterSpacing: "-0.02em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                className="mt-6"
              >
                <Link
                  href="#contacto"
                  onClick={closeMenu}
                  className="inline-block px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white rounded-sm cursor-pointer"
                  style={{
                    backgroundColor: "var(--accent)",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  Agenda tu cita gratis →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
