"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { paquetes, waLink, WA_MESSAGES } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";

type Paquete = (typeof paquetes)[0];

function PriceCard({ pkg, index }: { pkg: Paquete; index: number }) {
  const isFeatured = pkg.destacado;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        border: isFeatured ? "1px solid var(--accent-border)" : "1px solid var(--border)",
        backgroundColor: isFeatured ? "var(--accent-dim)" : "var(--card-bg)",
        transition: "border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        if (!isFeatured)
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,226,46,0.2)";
      }}
      onMouseLeave={(e) => {
        if (!isFeatured)
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Top accent bar */}
      {isFeatured && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "#A6E22E",
          }}
        />
      )}

      {/* Header */}
      <div
        style={{
          padding: "2rem 2rem 1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Plan tier badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.55rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: isFeatured ? "#A6E22E" : "var(--muted)",
              border: `1px solid ${isFeatured ? "var(--accent-border)" : "var(--border)"}`,
              padding: "0.2rem 0.6rem",
            }}
          >
            {pkg.etiqueta}
          </span>
          {isFeatured && (
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.55rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0D0D0D",
                backgroundColor: "#A6E22E",
                padding: "0.2rem 0.6rem",
              }}
            >
              Recomendado
            </span>
          )}
        </div>

        {/* Plan name */}
        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1.6rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#F5F5F5",
            marginBottom: "0.4rem",
            lineHeight: 1.1,
          }}
        >
          {pkg.nombre}
        </h3>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
            fontFamily: "var(--font-inter)",
          }}
        >
          {pkg.descripcion}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-1">
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--muted)",
            }}
          >
            $
          </span>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "2.75rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#F5F5F5",
              lineHeight: 1,
            }}
          >
            {pkg.precio.toLocaleString("es-MX")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.72rem",
              color: "var(--muted)",
            }}
          >
            MXN/mes
          </span>
        </div>

        {/* Pauta badge */}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.65rem 0.85rem",
            backgroundColor: "rgba(166,226,46,0.07)",
            border: "1px solid rgba(166,226,46,0.18)",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#A6E22E",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#A6E22E",
              letterSpacing: "0.02em",
            }}
          >
            Incluye ${pkg.pauta?.toLocaleString("es-MX")} MXN de pauta
          </p>
        </div>

        {/* Ideal para */}
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.68rem",
            color: "var(--muted)",
            lineHeight: 1.6,
            fontFamily: "var(--font-inter)",
          }}
        >
          Ideal para: {pkg.idealPara}
        </p>
      </div>

      {/* Features */}
      <div style={{ padding: "1.5rem 2rem", flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {pkg.features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(166,226,46,0.12)",
                  border: "1px solid rgba(166,226,46,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                <Check size={10} strokeWidth={2.5} style={{ color: "#A6E22E" }} />
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div style={{ padding: "1.25rem 2rem 2rem" }}>
        <a
          href={waLink(pkg.whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full"
          style={{
            padding: "0.85rem 1.25rem 0.85rem 1.5rem",
            fontFamily: "var(--font-syne)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            backgroundColor: isFeatured ? "#A6E22E" : "transparent",
            color: isFeatured ? "#0D0D0D" : "#F5F5F5",
            border: isFeatured ? "1px solid #A6E22E" : "1px solid var(--border)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (isFeatured) {
              e.currentTarget.style.backgroundColor = "#8FC220";
            } else {
              e.currentTarget.style.backgroundColor = "var(--accent-dim)";
              e.currentTarget.style.borderColor = "var(--accent-border)";
              e.currentTarget.style.color = "#A6E22E";
            }
          }}
          onMouseLeave={(e) => {
            if (isFeatured) {
              e.currentTarget.style.backgroundColor = "#A6E22E";
            } else {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "#F5F5F5";
            }
          }}
        >
          <span>Me interesa este plan</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section
      id="planes"
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
            <div>
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
                Paquetes · Iguala Mensual
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
                Inversión que
                <br />
                <span style={{ color: "#A6E22E" }}>genera retorno.</span>
              </h2>
            </div>
            <div className="md:ml-auto">
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  maxWidth: "280px",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Precios en MXN. Compromiso mínimo de 3 meses.
                Cada plan ya incluye honorarios y pauta base.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3-column pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paquetes.map((pkg, i) => (
            <PriceCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.2}>
          <div
            className="mt-8 flex flex-col md:flex-row md:items-center gap-5"
            style={{
              padding: "1.5rem 2rem",
              border: "1px solid var(--border)",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter)",
                }}
              >
                Los planes incluyen un piso de pauta gestionado por nosotros. Si quieres invertir más para acelerar, lo sumamos sobre la base.{" "}
                <strong style={{ color: "#F5F5F5", fontWeight: 600 }}>
                  ¿No sabes cuál te corresponde?
                </strong>{" "}
                Agenda tu diagnóstico gratuito.
              </p>
            </div>
            <a
              href={waLink(WA_MESSAGES.faq)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 shrink-0"
              style={{
                padding: "0.8rem 1.5rem",
                fontFamily: "var(--font-syne)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                backgroundColor: "#A6E22E",
                color: "#0D0D0D",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8FC220")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A6E22E")}
            >
              Agendar diagnóstico
              <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
