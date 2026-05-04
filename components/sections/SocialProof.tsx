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
      className="py-14 md:py-18"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Clients strip */}
      <div className="px-5 md:px-8 max-w-7xl mx-auto mb-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                color: "var(--muted)",
              }}
            >
              Negocios que ya
              <br />
              están escalando con PG.
            </p>
          </div>
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
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "rgba(245,245,245,0.15)",
                    textTransform: "uppercase",
                    marginLeft: "2.5rem",
                    marginRight: "2.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A6E22E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,245,0.15)")}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                border: "1px solid var(--border)",
                padding: "2rem",
                backgroundColor: "var(--card-bg)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "3rem",
                  lineHeight: 0.8,
                  color: "#A6E22E",
                  marginBottom: "1rem",
                  fontWeight: 800,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#F5F5F5",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#A6E22E",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#F5F5F5",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--muted)",
                      marginTop: "0.15rem",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
