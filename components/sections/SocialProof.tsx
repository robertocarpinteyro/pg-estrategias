"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";

const testimonials = [
  {
    quote:
      "PG Estrategias nos diseñó un sistema que realmente genera clientes. No métricas vacías — contratos firmados.",
    name: "Cliente Verificado",
    business: "Sector Automotriz",
  },
  {
    quote:
      "Antes pagábamos agencia y no veíamos retorno. Con PG, nuestro WhatsApp no deja de sonar con prospectos reales.",
    name: "Cliente Verificado",
    business: "Restaurante en Puebla",
  },
];

export default function SocialProof() {
  const doubled = [...clients, ...clients];

  return (
    <section
      className="py-16 md:py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Backed-by row: label + scrolling strip */}
      <div className="px-5 md:px-8 max-w-7xl mx-auto mb-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Left label */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "var(--muted)",
              }}
            >
              Confían en nosotros
              <br />y líderes que ya escalan.
            </p>
          </div>

          {/* Right marquee strip */}
          <div
            className="md:col-span-3 overflow-hidden"
            style={{
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              paddingTop: "1.25rem",
              paddingBottom: "1.25rem",
            }}
            aria-hidden="true"
          >
            <div className="pg-backers-track">
              {doubled.map((client, i) => (
                <span
                  key={i}
                  className="shrink-0 whitespace-nowrap transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "var(--border)",
                    textTransform: "uppercase",
                    marginLeft: "2.5rem",
                    marginRight: "2.5rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--border)")
                  }
                >
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-5 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "2rem",
                backgroundColor: "var(--card-bg)",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                    marginTop: "0.2rem",
                  }}
                >
                  {t.business}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
