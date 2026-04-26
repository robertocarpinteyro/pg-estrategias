"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";

export default function SocialProof() {
  const doubled = [...clients, ...clients];

  return (
    <section
      className="py-16 md:py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Client logos strip */}
      <div className="px-5 md:px-8 max-w-7xl mx-auto mb-10">
        <p
          className="text-center mb-8"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          Confían en nosotros
        </p>
      </div>

      {/* Marquee-style client names */}
      <div
        className="overflow-hidden"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        aria-hidden="true"
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap py-5"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((client, i) => (
            <span
              key={i}
              className="flex items-center gap-12 shrink-0 transition-colors duration-300"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--border)",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--border)")}
            >
              {client.name}
              <span style={{ color: "var(--accent)", fontSize: "0.4rem" }}>●</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Video testimonials placeholder */}
      <div className="px-5 md:px-8 max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              quote: "PG Estrategias nos diseñó un sistema que realmente genera clientes. No métricas vacías — contratos firmados.",
              name: "Cliente Verificado",
              business: "Sector Automotriz",
            },
            {
              quote: "Antes pagábamos agencia y no veíamos retorno. Con PG, nuestro WhatsApp no deja de sonar con prospectos reales.",
              name: "Cliente Verificado",
              business: "Restaurante en Puebla",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "2px",
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
                &ldquo;{testimonial.quote}&rdquo;
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
                  {testimonial.name}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                    marginTop: "0.2rem",
                  }}
                >
                  {testimonial.business}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
