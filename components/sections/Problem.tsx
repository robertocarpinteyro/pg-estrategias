"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const contrasts = [
  {
    left: { label: "Agencias tradicionales venden", items: ["Horas y entregables", "Posts y likes", "Presencia sin datos"] },
    right: { label: "Nosotros vendemos", items: ["Movimiento de métricas", "Clientes reales", "Resultado por peso invertido"] },
  },
];

export default function Problem() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <FadeIn>
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                color: "#A6E22E",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Nuestra postura
            </span>
            <h2
              className="font-bold uppercase"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: "#F5F5F5",
                maxWidth: "760px",
              }}
            >
              No somos una agencia
              <br />
              de marketing{" "}
              <span style={{ color: "#A6E22E" }}>tradicional.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Contrast table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {/* Left — what agencies do */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            style={{
              border: "1px solid var(--border)",
              padding: "2.5rem",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "1.5rem",
              }}
            >
              Agencias tradicionales venden
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Horas facturadas y entregables", "Posts y métricas de vanidad", "Proveedores separados sin coordinación", "Contratos largos con poco control"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <line x1="2" y1="2" x2="12" y2="12" stroke="rgba(245,245,245,0.2)" strokeWidth="1.5"/>
                      <line x1="12" y1="2" x2="2" y2="12" stroke="rgba(245,245,245,0.2)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(245,245,245,0.35)",
                      fontFamily: "var(--font-inter)",
                      lineHeight: 1.5,
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(245,245,245,0.15)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — what PG does */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              border: "1px solid var(--accent-border)",
              padding: "2.5rem",
              backgroundColor: "var(--accent-dim)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent top bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: "#A6E22E",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#A6E22E",
                marginBottom: "1.5rem",
              }}
            >
              PG Estrategias entrega
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Movimiento de métricas reales", "Clientes y cierres medibles", "Stack digital integrado bajo un solo equipo", "Resultados por peso invertido"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#A6E22E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <polyline points="1,3.5 3.5,6 8,1" stroke="#0D0D0D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "#F5F5F5",
                      fontFamily: "var(--font-inter)",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* In-House power statement */}
        <FadeIn delay={0.2}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
            className="md:grid-cols-2"
          >
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 1.4,
                letterSpacing: "-0.02em",
              }}
            >
              Somos el único partner que integra todo tu stack digital bajo un mismo equipo.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                fontFamily: "var(--font-inter)",
                maxWidth: "480px",
              }}
            >
              Dejas de coordinar proveedores distintos. Nosotros somos responsables del embudo completo — desde el primer clic hasta el cliente convertido.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
