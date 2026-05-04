"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  { day: "01-02", label: "Diagnóstico y onboarding", desc: "Reunión de arranque, accesos, auditoría de activos digitales y definición de objetivos." },
  { day: "03-05", label: "Configuración de activos", desc: "Setup de cuentas publicitarias, CRM y optimización del ecosistema digital base." },
  { day: "06-10", label: "Producción creativa", desc: "Sesión audiovisual, edición de creatividades y aprobación de materiales." },
  { day: "11-14", label: "Primera campaña activa", desc: "Lanzamiento de anuncios, primer reporte y ajuste inicial con datos reales." },
];

export default function Garantia() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
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
                marginBottom: "0.75rem",
              }}
            >
              Proceso y Garantía
            </span>
            <h2
              className="font-bold uppercase"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.97,
                color: "#F5F5F5",
              }}
            >
              De la firma a tu
              <br />
              primera campaña en{" "}
              <span style={{ color: "#A6E22E" }}>14 días.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "420px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Onboarding veloz, sin burocracia. Nuestro proceso está diseñado para que empieces a ver movimiento en tu negocio desde la primera semana.
            </p>
          </FadeIn>
        </div>

        {/* Timeline + Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Timeline */}
          <div>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
                style={{ marginBottom: i < steps.length - 1 ? "0" : "0" }}
              >
                {/* Left timeline rail */}
                <div className="flex flex-col items-center" style={{ minWidth: "48px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1.5px solid rgba(166,226,46,0.4)",
                      backgroundColor: "rgba(166,226,46,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.55rem",
                        fontWeight: 800,
                        color: "#A6E22E",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {step.day}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        minHeight: "2.5rem",
                        backgroundColor: "rgba(166,226,46,0.15)",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i < steps.length - 1 ? "2rem" : "0" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#F5F5F5",
                      marginBottom: "0.35rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.label}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee card */}
          <FadeIn delay={0.2}>
            <div
              style={{
                border: "1px solid var(--accent-border)",
                backgroundColor: "var(--accent-dim)",
                padding: "2.5rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top bar */}
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

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  border: "1.5px solid rgba(166,226,46,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A6E22E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#A6E22E",
                    display: "block",
                    marginBottom: "0.6rem",
                  }}
                >
                  Cláusula de transparencia
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#F5F5F5",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  Piel en el juego.
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(245,245,245,0.75)",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Si al cierre del trimestre las métricas no se movieron por causas atribuibles a nuestra ejecución, ofrecemos{" "}
                  <strong style={{ color: "#F5F5F5" }}>un mes adicional sin costo de honorarios</strong>{" "}
                  para ajustar y demostrar avance.
                </p>
              </div>

              <div
                style={{
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(166,226,46,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  "Medimos todo desde el día uno",
                  "Reportes reales, sin maquillaje",
                  "Ajuste continuo basado en datos",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#A6E22E",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(245,245,245,0.65)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
