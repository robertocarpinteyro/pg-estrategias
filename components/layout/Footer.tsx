"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { waLink, WA_MESSAGES } from "@/lib/data";

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
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-1 mb-3">
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
            </div>
            <p
              className="text-xs mb-6"
              style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: "280px" }}
            >
              Estudio de Crecimiento para negocios locales que ya facturan y quieren escalar.
            </p>
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white rounded-sm transition-colors duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--accent)",
                fontFamily: "var(--font-space-grotesk)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Agendar diagnóstico
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
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--muted)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Navegación
            </span>
            <nav aria-label="Footer navigation">
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--muted)", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--muted)")
                      }
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
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--muted)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Contacto
            </span>
            <a
              href="https://wa.me/5212221215051"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm mb-1 transition-colors duration-200"
              style={{ color: "var(--text)", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
            >
              +52 222 121 5051
            </a>
            <a
              href="mailto:contacto@pgestrategias.com"
              className="block text-sm mb-6 transition-colors duration-200"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              contacto@pgestrategias.com
            </a>

            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--muted)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Redes
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-space-grotesk)",
                    textDecoration: "none",
                    fontSize: "0.65rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
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
            color: "var(--muted)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          PG ESTRATEGIAS® ©{new Date().getFullYear()} — Puebla, México
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-xs transition-colors duration-200"
            style={{
              color: "var(--muted)",
              fontFamily: "var(--font-space-grotesk)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Aviso de privacidad
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer"
            style={{
              color: "var(--muted)",
              fontFamily: "var(--font-space-grotesk)",
              background: "none",
              border: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            VOLVER ARRIBA ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
