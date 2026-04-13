"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { paquetes, addOns } from "@/lib/data";
import { Check } from "lucide-react";

const WA_NUMBER = "5212221215051";

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

type Paquete = typeof paquetes[0];

function PriceCard({ pkg, delay = 0 }: { pkg: Paquete; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          border: pkg.destacado
            ? "1.5px solid var(--accent)"
            : "1px solid var(--border)",
          borderRadius: "2px",
          backgroundColor: pkg.destacado
            ? "var(--card-bg)"
            : hovered
            ? "var(--card-bg)"
            : "transparent",
          transition: "background-color 0.25s ease",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Top accent line for destacado */}
        {pkg.destacado && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "var(--accent)",
            }}
          />
        )}

        {/* Header */}
        <div
          style={{
            padding: "1.75rem 1.75rem 1.25rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Labels row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
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
              {pkg.categoria}
            </span>
            {pkg.destacado && (
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "2px",
                }}
              >
                Recomendado
              </span>
            )}
            {pkg.etiqueta && (
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  backgroundColor: "var(--border)",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "2px",
                }}
              >
                {pkg.etiqueta}
              </span>
            )}
          </div>

          {/* Name */}
          <h3
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            {pkg.nombre}
          </h3>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            {pkg.descripcion}
          </p>

          {/* Price */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--muted)",
                }}
              >
                $
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                {pkg.precio.toLocaleString("es-MX")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                }}
              >
                MXN/mes
              </span>
            </div>
            {pkg.pauta && (
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--accent)",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 600,
                  marginTop: "0.35rem",
                  letterSpacing: "0.02em",
                }}
              >
                + ${pkg.pauta.toLocaleString("es-MX")} MXN de pauta incluida
              </p>
            )}
          </div>
        </div>

        {/* Features */}
        <div style={{ padding: "1.25rem 1.75rem", flex: 1 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {pkg.features.map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  paddingBottom: "0.6rem",
                  marginBottom: "0.1rem",
                  borderBottom:
                    i < pkg.features.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <Check
                  size={11}
                  strokeWidth={2.5}
                  style={{
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginTop: "0.2rem",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
          {/* Notes */}
          {pkg.notas.length > 0 && (
            <div style={{ marginBottom: "1rem" }}>
              {pkg.notas.map((nota, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.62rem",
                    color: "var(--muted)",
                    letterSpacing: "0.02em",
                    lineHeight: 1.6,
                    opacity: 0.7,
                  }}
                >
                  * {nota}
                </p>
              ))}
            </div>
          )}

          {/* CTA */}
          <a
            href={waLink(pkg.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              padding: "0.8rem 1rem",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s ease",
              backgroundColor: pkg.destacado ? "var(--accent)" : "transparent",
              color: pkg.destacado ? "#fff" : "var(--text)",
              border: pkg.destacado
                ? "1px solid var(--accent)"
                : "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              if (pkg.destacado) {
                e.currentTarget.style.backgroundColor = "var(--accent-hover)";
              } else {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }
            }}
            onMouseLeave={(e) => {
              if (pkg.destacado) {
                e.currentTarget.style.backgroundColor = "var(--accent)";
              } else {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }
            }}
          >
            Solicitar este paquete →
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Pricing() {
  const iniciales = paquetes.filter((p) => p.categoria === "Paquete Inicial");
  const avanzados = paquetes.filter((p) => p.categoria === "Paquete Avanzado");

  return (
    <section
      id="precios"
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
          <div>
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
              Precios & Paquetes
            </span>
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
              Inversión que
              <br />
              <span style={{ color: "var(--accent)" }}>genera retorno.</span>
            </h2>
          </div>
          <p
            className="md:ml-auto text-sm"
            style={{
              color: "var(--muted)",
              maxWidth: "300px",
              lineHeight: 1.8,
            }}
          >
            Precios en MXN. Sin contratos anuales forzosos. Escala a tu ritmo
            — empieza chico y crece con nosotros.
          </p>
        </div>
      </FadeIn>

      {/* ── Paquetes Iniciales ── */}
      <div className="mb-4">
        <FadeIn>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "var(--muted)",
              textTransform: "uppercase",
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Paquetes Iniciales
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {iniciales.map((pkg, i) => (
            <PriceCard key={pkg.id} pkg={pkg} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* ── Paquetes Avanzados ── */}
      <div className="mt-10 mb-4">
        <FadeIn>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "var(--muted)",
              textTransform: "uppercase",
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Paquetes Avanzados
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {avanzados.map((pkg, i) => (
            <PriceCard key={pkg.id} pkg={pkg} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* ── Add-ons ── */}
      <div className="mt-10">
        <FadeIn>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "var(--muted)",
              textTransform: "uppercase",
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Complementos
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {addOns.map((addon, i) => (
            <FadeIn key={addon.id} delay={i * 0.08}>
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
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
                  Add-on
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                  }}
                >
                  {addon.nombre}
                </h4>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {addon.descripcion}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.25rem",
                    marginTop: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "var(--text)",
                    }}
                  >
                    ${addon.precio.toLocaleString("es-MX")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--muted)",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    MXN
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.62rem",
                    color: "var(--muted)",
                    opacity: 0.7,
                  }}
                >
                  * {addon.nota}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <FadeIn delay={0.15}>
        <div
          className="mt-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-10"
          style={{
            padding: "1.5rem",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            backgroundColor: "var(--card-bg)",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              flex: 1,
            }}
          >
            ¿No encuentras el paquete ideal para tu negocio?{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              Armamos propuestas a la medida.
            </strong>{" "}
            Contáctanos y en menos de 24 horas te enviamos una cotización
            personalizada sin compromiso.
          </p>
          <a
            href={waLink("Hola, me gustaría solicitar una cotización personalizada para mi negocio. ¿Podrían ayudarme?")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flexShrink: 0,
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              backgroundColor: "var(--accent)",
              color: "#fff",
              borderRadius: "2px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
            }}
          >
            Pedir cotización gratis →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
