"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { waLink, WA_MESSAGES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#sistema", label: "Sistema PG" },
  { href: "#casos", label: "Casos" },
  { href: "#planes", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  { href: "https://instagram.com/pgestrategias", label: "Instagram" },
  { href: "https://tiktok.com/@pgestrategias", label: "TikTok" },
  { href: "https://linkedin.com/company/pgestrategias", label: "LinkedIn" },
  { href: "https://youtube.com/@pgestrategias", label: "YouTube" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Main footer */}
      <div className="py-20 px-5 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Logo + tagline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="1" y="12" width="4" height="7" fill="#A6E22E" rx="0.5"/>
                <rect x="8" y="7" width="4" height="12" fill="#A6E22E" rx="0.5" opacity="0.75"/>
                <rect x="15" y="2" width="4" height="17" fill="#A6E22E" rx="0.5" opacity="0.5"/>
              </svg>
              <span
                className="font-bold leading-none"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                }}
              >
                <span style={{ color: "#A6E22E" }}>PG</span>
                <span style={{ color: "#F5F5F5" }}> ESTRATEGIAS</span>
              </span>
            </div>

            <p
              className="text-xs mb-4"
              style={{
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "260px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Growth Partners para negocios locales que ya facturan y quieren escalar.
            </p>

            <p
              className="text-xs mb-6"
              style={{
                color: "rgba(245,245,245,0.25)",
                fontFamily: "var(--font-inter)",
                fontSize: "0.72rem",
              }}
            >
              Calle Valencia 131-2 Las Palmas, Puebla
            </p>

            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "#A6E22E",
                color: "#0D0D0D",
                fontFamily: "var(--font-syne)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                fontSize: "0.65rem",
                padding: "0.65rem 1rem 0.65rem 1.25rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8FC220")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A6E22E")}
            >
              Agendar diagnóstico
              <ArrowRight size={12} />
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "rgba(245,245,245,0.25)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Navegación
            </span>
            <nav aria-label="Footer navigation">
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "var(--muted)",
                        textDecoration: "none",
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "rgba(245,245,245,0.25)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Contacto
            </span>
            <a
              href="https://wa.me/5212221215051"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm mb-1 transition-colors duration-200"
              style={{ color: "#F5F5F5", textDecoration: "none", fontWeight: 600, fontFamily: "var(--font-syne)", fontSize: "0.88rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#A6E22E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            >
              +52 222 121 5051
            </a>
            <a
              href="mailto:contacto@pgestrategias.com"
              className="block text-sm mb-7 transition-colors duration-200"
              style={{ color: "var(--muted)", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.8rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#A6E22E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              contacto@pgestrategias.com
            </a>

            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "rgba(245,245,245,0.25)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Redes
            </span>
            <div className="flex items-center flex-wrap gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-syne)",
                    textDecoration: "none",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A6E22E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5 px-5 md:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="text-xs"
          style={{
            color: "rgba(245,245,245,0.2)",
            fontFamily: "var(--font-syne)",
            fontSize: "0.65rem",
            letterSpacing: "0.06em",
          }}
        >
          PG ESTRATEGIAS® ©{new Date().getFullYear()} — Puebla, México
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-xs transition-colors duration-200"
            style={{
              color: "rgba(245,245,245,0.2)",
              fontFamily: "var(--font-syne)",
              textDecoration: "none",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,245,0.2)")}
          >
            Aviso de privacidad
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer"
            style={{
              color: "rgba(245,245,245,0.2)",
              fontFamily: "var(--font-syne)",
              background: "none",
              border: "none",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A6E22E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,245,0.2)")}
          >
            VOLVER ARRIBA ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
