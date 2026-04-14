"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const navLinks = [
  { href: "#home", label: "Home", num: "01" },
  { href: "#servicios", label: "Servicios", num: "02" },
  { href: "#nosotros", label: "Sobre Nosotros", num: "03" },
  { href: "#trabajo", label: "Nuestro Trabajo", num: "04" },
  { href: "#contacto", label: "Contáctanos", num: "05" },
];

const socialLinks = [
  {
    href: "https://instagram.com/pgestrategias",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/pgestrategias",
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/@pgestrategias",
    label: "YouTube",
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* CTA block */}
      <div className="py-20 px-5 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="num-label block mb-4">SIGAMOS CONECTADOS</span>
            <a
              href="mailto:contacto@pgestrategias.com"
              className="block font-bold transition-colors duration-200"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                letterSpacing: "-0.02em",
                color: "var(--text)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
            >
              contacto@pgestrategias.com
            </a>
            <p
              className="text-xs mt-2"
              style={{ color: "var(--muted)" }}
            >
              Hacemos que tu teléfono no deje de sonar.
            </p>
            <Link
              href="#contacto"
              className="inline-block mt-6 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white rounded-sm transition-colors duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--accent)",
                fontFamily: "var(--font-space-grotesk)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Contactar Ahora
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:text-right"
          >
            <span className="num-label block mb-4">NAVEGACIÓN</span>
            <nav aria-label="Footer navigation">
              <ul className="list-none p-0 m-0 flex flex-col md:items-end gap-2">
                {navLinks.map((link) => (
                  <li key={link.href} className="flex items-center md:justify-end gap-2">
                    <span className="num-label">{link.num} /</span>
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
          PG ESTRATEGIAS® ©{new Date().getFullYear()} — Angelópolis · Zavaleta · Cholula · Puebla
        </span>
        <div className="flex items-center gap-5">
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
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
