"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { paquetes, waLink, WA_MESSAGES } from "@/lib/data";
import { Check } from "lucide-react";

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
              fontSize: "1.05rem",
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
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "2px",
                  background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent), color-mix(in srgb, var(--accent) 6%, transparent))",
                  border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Pauta publicitaria incluida
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    ${pkg.pauta.toLocaleString("es-MX")}
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, marginLeft: "0.25rem" }}>MXN</span>
                  </p>
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
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
            Quiero este plan →
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Pricing() {
  const tier1 = paquetes.filter((p) => p.categoria === "Construir bases");
  const tier2 = paquetes.filter((p) => p.categoria === "Activar crecimiento");

  return (
    <section
      id="planes"
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
              Nuestros Planes
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
            Precios en MXN. Escala a tu ritmo.
          </p>
        </div>
      </FadeIn>

      {/* ── TIER 1: Construir bases ── */}
      <div className="mb-4">
        <FadeIn>
          <div
            style={{
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "0.3rem",
              }}
            >
              Tier 1 · Construir bases
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              Para negocios que están armando su presencia digital antes de invertir en pauta.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tier1.map((pkg, i) => (
            <PriceCard key={pkg.id} pkg={pkg} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* ── TIER 2: Activar crecimiento ── */}
      <div className="mt-10 mb-4">
        <FadeIn>
          <div
            style={{
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "0.3rem",
              }}
            >
              Tier 2 · Activar crecimiento
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              Para negocios listos para invertir en pauta y construir un motor de adquisición predecible.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tier2.map((pkg, i) => (
            <PriceCard key={pkg.id} pkg={pkg} delay={i * 0.08} />
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
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              Los planes avanzados incluyen un piso de pauta gestionado por nosotros.
              Si quieres invertir más para acelerar resultados, lo agregamos sobre la base.
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginTop: "0.5rem",
              }}
            >
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                ¿No estás seguro cuál te corresponde?
              </strong>{" "}
              Agenda tu diagnóstico gratuito.
            </p>
          </div>
          <a
            href={waLink(WA_MESSAGES.faq)}
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
            Agendar diagnóstico →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
