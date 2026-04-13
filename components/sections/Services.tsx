"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/data";

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="servicios"
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
          <div>
            <span className="num-label">SERVICIOS</span>
            <h2
              className="font-bold mt-3 uppercase"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "var(--text)",
              }}
            >
              Nuestros servicios
              <br />
              incluyen
            </h2>
          </div>
          <p
            className="md:ml-auto text-sm"
            style={{
              color: "var(--muted)",
              maxWidth: "280px",
              lineHeight: 1.8,
            }}
          >
            Nuestra metodología combina análisis, ejecución creativa y
            seguimiento. Trabajamos contigo, no solo para ti.
          </p>
        </div>
      </FadeIn>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          border: "1px solid var(--border)",
        }}
      >
        {services.map((service, i) => (
          <FadeIn
            key={service.id}
            delay={0.05 * (i % 3)}
          >
            <motion.div
              className="p-8 cursor-default relative overflow-hidden"
              style={{
                borderRight: i % 3 !== 2 ? "1px solid var(--border)" : "none",
                borderBottom:
                  Math.floor(i / 3) < Math.floor((services.length - 1) / 3)
                    ? "1px solid var(--border)"
                    : "none",
                backgroundColor:
                  hovered === service.id ? "var(--card-bg)" : "transparent",
                transition: "background-color 0.25s ease",
              }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Accent line on hover */}
              <motion.div
                className="absolute left-0 top-0 bottom-0"
                style={{ width: "2px", backgroundColor: "var(--accent)", transformOrigin: "top" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hovered === service.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <span className="num-label">{service.id}</span>
              <h3
                className="font-bold mt-4 mb-3"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)", lineHeight: 1.8 }}
              >
                {service.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--border)",
                      color: "var(--muted)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.04em",
                      fontFamily: "var(--font-space-grotesk)",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block px-8 py-3.5 text-sm font-semibold uppercase tracking-wide rounded-sm transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Solicitar cotización gratuita →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
