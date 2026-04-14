"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const BAR_TRANSITION = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const };

function EgoVsRoiChart() {
  const bars = [
    {
      label: "Posición #1",
      sublabel: "Costo alto\nClics impulsivos",
      height: "80%",
      color: "#C0392B",
      textColor: "#C0392B",
    },
    {
      label: "Posición #2",
      sublabel: "Menor costo\nProspectos calificados",
      height: "52%",
      color: "var(--accent)",
      textColor: "var(--accent)",
    },
    {
      label: "Posición #3",
      sublabel: "Menor costo\nAlta intención de compra",
      height: "44%",
      color: "var(--accent)",
      textColor: "var(--accent)",
    },
  ];

  return (
    <FadeIn>
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "2px",
          padding: "2rem 2rem 1.5rem",
          backgroundColor: "var(--card-bg)",
          height: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          Gráfica 01
        </span>
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginTop: "0.5rem",
            marginBottom: "0.4rem",
          }}
        >
          La trampa del Ego vs. el ROI
        </h3>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          Estar en #1 infla el costo sin garantizar conversión. Las posiciones 2
          y 3 capturan a quien ya está listo para comprar.
        </p>

        {/* Chart */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "1rem",
            height: "160px",
          }}
        >
          {bars.map((bar, i) => (
            <div
              key={i}
              style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}
            >
              <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: bar.height }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ ...BAR_TRANSITION, delay: i * 0.15 }}
                  style={{
                    width: "100%",
                    backgroundColor: i === 0 ? "#C0392B22" : "transparent",
                    border: `1.5px solid ${i === 0 ? "#C0392B" : "var(--accent)"}`,
                    borderRadius: "2px 2px 0 0",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ ...BAR_TRANSITION, delay: i * 0.15 + 0.1 }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: i === 0 ? "#C0392B18" : `color-mix(in srgb, var(--accent) 15%, transparent)`,
                    }}
                  />
                </motion.div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: i === 0 ? "#C0392B" : "var(--accent)",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                {bar.label}
              </p>
              <p
                style={{
                  fontSize: "0.58rem",
                  color: "var(--muted)",
                  textAlign: "center",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                  marginTop: "2px",
                }}
              >
                {bar.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function WebVsLandingCard() {
  const sides = [
    {
      label: "Sitio Web Tradicional",
      icon: "✗",
      iconColor: "#C0392B",
      items: ["Múltiples menús y páginas", "Botones dispersos", "Sin foco en conversión", "El usuario se pierde"],
      result: "Tasa de conversión baja",
      resultColor: "#C0392B",
      bg: "#C0392B08",
      border: "#C0392B33",
    },
    {
      label: "Landing Page",
      icon: "✓",
      iconColor: "var(--accent)",
      items: ["Un solo objetivo", "Sin puntos de fuga", "CTA directo a WhatsApp", "Ultra-rápida y enfocada"],
      result: "36× más conversiones",
      resultColor: "var(--accent)",
      bg: "color-mix(in srgb, var(--accent) 6%, transparent)",
      border: "color-mix(in srgb, var(--accent) 35%, transparent)",
    },
  ];

  return (
    <FadeIn delay={0.1}>
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "2px",
          padding: "2rem 2rem 1.5rem",
          backgroundColor: "var(--card-bg)",
          height: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          Gráfica 02
        </span>
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginTop: "0.5rem",
            marginBottom: "0.4rem",
          }}
        >
          Sitio Web vs. Landing Page
        </h3>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          Una web tradicional distrae. Una landing bien construida convierte el
          tráfico generado por tus anuncios en clientes reales.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {sides.map((side, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                border: `1.5px solid ${side.border}`,
                borderRadius: "2px",
                padding: "1.25rem",
                backgroundColor: side.bg,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.85rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: side.iconColor,
                  }}
                >
                  {side.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text)",
                  }}
                >
                  {side.label}
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
                {side.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      paddingLeft: "0.75rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: side.iconColor,
                        fontSize: "0.5rem",
                        top: "0.28rem",
                      }}
                    >
                      ●
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  paddingTop: "0.75rem",
                  borderTop: `1px solid ${side.border}`,
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: side.resultColor,
                  textTransform: "uppercase",
                }}
              >
                {side.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Difference() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Header */}
      <FadeIn>
        <div className="mb-14">
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            Por qué el sistema funciona
          </span>
          <h2
            className="font-bold uppercase mt-3"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "var(--text)",
              maxWidth: "700px",
            }}
          >
            Datos que demuestran
            <br />
            por qué{" "}
            <span style={{ color: "var(--accent)" }}>vendemos.</span>
          </h2>
        </div>
      </FadeIn>

      {/* Two charts */}
      <div className="grid md:grid-cols-2 gap-5">
        <EgoVsRoiChart />
        <WebVsLandingCard />
      </div>

      {/* Bottom CTA */}
      <FadeIn delay={0.2}>
        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              maxWidth: "480px",
            }}
          >
            Cada elemento del sistema —desde el primer video hasta el botón
            en tu landing— está diseñado para generar prospectos reales. No
            adivinamos: medimos, optimizamos y entregamos resultados a tu
            negocio en Puebla.
          </p>
          <a
            href="#contacto"
            className="shrink-0 inline-block px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white rounded-sm transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: "var(--accent)",
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Agendar cita gratuita
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
