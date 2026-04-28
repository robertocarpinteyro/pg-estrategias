"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/data";

type ServiceType = "contenido" | "pauta" | "sistema";
type Compromiso = "mensual" | "trimestral" | "semestral";

const serviceOptions: { value: ServiceType; label: string; description: string }[] = [
  {
    value: "contenido",
    label: "Contenido y Redes",
    description: "Estrategia, producción audiovisual y gestión de redes sociales",
  },
  {
    value: "pauta",
    label: "Pauta y Conversión",
    description: "Ads en Meta y Google + landing pages y automatización",
  },
  {
    value: "sistema",
    label: "Sistema Completo",
    description: "Estrategia, contenido, pauta y tecnología integrados en un motor",
  },
];

const compromisoOptions: { value: Compromiso; label: string; suffix: string }[] = [
  { value: "trimestral", label: "3 meses (mínimo estándar)", suffix: "precio normal" },
  { value: "semestral", label: "6 meses", suffix: "8% descuento" },
  { value: "mensual", label: "Mes a mes", suffix: "sin permanencia" },
];

const intensityLabels = ["Básico", "Inicial", "Estándar", "Avanzado", "Premium"];

const ACCENT = "var(--accent)";

// ── Pricing logic ──────────────────────────────────────────────────────────────

function calculatePrice(
  service: ServiceType,
  intensity: number,
  needVideo: boolean,
  needAuto: boolean,
  compromiso: Compromiso
) {
  const bases: Record<ServiceType, number> = { contenido: 7500, pauta: 8500, sistema: 11000 };
  const perLevel: Record<ServiceType, number> = { contenido: 1200, pauta: 1500, sistema: 2500 };
  let total = bases[service] + (intensity - 1) * perLevel[service];
  if (needVideo) total += 2000;
  if (needAuto) total += 1500;
  if (compromiso === "semestral") total = Math.round(total * 0.92);
  return total;
}

function calculateAgency(service: ServiceType, intensity: number) {
  const bases: Record<ServiceType, number> = { contenido: 18000, pauta: 22000, sistema: 28000 };
  const perLevel: Record<ServiceType, number> = { contenido: 3000, pauta: 4000, sistema: 6000 };
  return bases[service] + (intensity - 1) * perLevel[service];
}

function calculateFreelancer(service: ServiceType, intensity: number) {
  const bases: Record<ServiceType, number> = { contenido: 9000, pauta: 11000, sistema: 14000 };
  const perLevel: Record<ServiceType, number> = { contenido: 1500, pauta: 2000, sistema: 3000 };
  return bases[service] + (intensity - 1) * perLevel[service];
}

const fmt = (n: number) => "$" + n.toLocaleString("es-MX");

// ── Subcomponents ─────────────────────────────────────────────────────────────

function RadioCircle({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: `2px solid ${active ? ACCENT : "#3A3A3A"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 2,
        transition: "border-color 0.2s",
      }}
    >
      {active && (
        <div
          style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: ACCENT }}
        />
      )}
    </div>
  );
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: 4,
        border: `2px solid ${checked ? ACCENT : "#3A3A3A"}`,
        backgroundColor: checked ? ACCENT : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "all 0.2s",
      }}
    >
      {checked && <Check size={11} style={{ color: "#fff" }} strokeWidth={3} />}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Calculator() {
  const [service, setService] = useState<ServiceType>("sistema");
  const [intensity, setIntensity] = useState(3);
  const [needVideo, setNeedVideo] = useState(false);
  const [needAuto, setNeedAuto] = useState(false);
  const [compromiso, setCompromiso] = useState<Compromiso>("trimestral");

  const price = calculatePrice(service, intensity, needVideo, needAuto, compromiso);
  const agency = calculateAgency(service, intensity);
  const freelancer = calculateFreelancer(service, intensity);
  const savings = Math.round((1 - price / agency) * 100);

  // Slider track gradient
  const sliderPct = ((intensity - 1) / 4) * 100;
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${sliderPct}%, #2A2A2A ${sliderPct}%, #2A2A2A 100%)`;

  return (
    <section
      id="planes"
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
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
            Calculadora de inversión
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
            }}
          >
            Encuentra tu plan{" "}
            <span style={{ color: ACCENT }}>ideal.</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{
              color: "var(--muted)",
              fontSize: "0.92rem",
              lineHeight: 1.75,
              maxWidth: "440px",
            }}
          >
            Ajusta las opciones y obtén una estimación personalizada al instante.
          </p>
        </div>

        {/* ── 2-col grid ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #1E1E1E" }}
        >

          {/* ════ LEFT — form ════ */}
          <div style={{ backgroundColor: "#0D0D0D", padding: "3rem" }}>

            {/* 1. Tipo de servicio */}
            <div style={{ paddingBottom: "2rem", borderBottom: "1px solid #1E1E1E" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                ¿Qué servicio necesitas?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setService(opt.value)}
                    className="flex items-start gap-3 text-left cursor-pointer w-full"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <RadioCircle active={service === opt.value} />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: service === opt.value ? "#ffffff" : "#777777",
                          transition: "color 0.2s",
                          lineHeight: 1.2,
                        }}
                      >
                        {opt.label}
                      </p>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "#484848",
                          marginTop: "0.2rem",
                          lineHeight: 1.55,
                        }}
                      >
                        {opt.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Intensidad */}
            <div
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #1E1E1E",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.4rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Nivel de intensidad:{" "}
                <span style={{ color: ACCENT }}>{intensityLabels[intensity - 1]}</span>
              </h3>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#484848",
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                Define el ritmo de contenido y el alcance de la gestión mensual
              </p>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="pg-slider"
                style={{ background: sliderBg }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "0.6rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.62rem",
                    color: "#444444",
                  }}
                >
                  Básico
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.62rem",
                    color: "#444444",
                  }}
                >
                  Premium
                </span>
              </div>
            </div>

            {/* 3. Add-ons */}
            <div
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #1E1E1E",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Servicios adicionales
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    key: "video",
                    label: "Mayor producción de video",
                    price: "+$2,000/mes",
                    checked: needVideo,
                    toggle: () => setNeedVideo((v) => !v),
                  },
                  {
                    key: "auto",
                    label: "Mensajería masiva y automatización",
                    price: "+$1,500/mes",
                    checked: needAuto,
                    toggle: () => setNeedAuto((v) => !v),
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={item.toggle}
                    className="flex items-center gap-3 cursor-pointer w-full"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <Checkbox checked={item.checked} />
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.85rem",
                        color: item.checked ? "#ffffff" : "#777777",
                        flex: 1,
                        textAlign: "left",
                        transition: "color 0.2s",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: ACCENT,
                        flexShrink: 0,
                      }}
                    >
                      {item.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Compromiso */}
            <div style={{ paddingTop: "2rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                ¿Cuál es tu compromiso?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {compromisoOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCompromiso(opt.value)}
                    className="flex items-center gap-3 cursor-pointer w-full"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <RadioCircle active={compromiso === opt.value} />
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.85rem",
                        color: compromiso === opt.value ? "#ffffff" : "#777777",
                        flex: 1,
                        textAlign: "left",
                        transition: "color 0.2s",
                      }}
                    >
                      {opt.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.72rem",
                        color:
                          opt.value === "semestral"
                            ? ACCENT
                            : opt.value === "mensual"
                            ? "#555555"
                            : "#666666",
                      }}
                    >
                      {opt.suffix}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ════ RIGHT — estimación ════ */}
          <div
            style={{
              padding: "3rem",
              backgroundColor: "var(--card-bg)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "0.5rem",
              }}
            >
              Inversión estimada
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "340px",
              }}
            >
              Precios mensuales de referencia. Los detalles exactos se confirman en
              tu Diagnóstico de Crecimiento gratuito.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>

              {/* Agencia */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Agencia tradicional cobra desde
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {fmt(agency)}
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      color: "var(--muted)",
                      letterSpacing: 0,
                    }}
                  >
                    /mes
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    marginTop: "0.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  + Contratos largos, procesos lentos y poco control sobre los resultados
                </p>
              </div>

              {/* Freelancer */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Freelancer promedio cobra desde
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {fmt(freelancer)}
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      color: "var(--muted)",
                      letterSpacing: 0,
                    }}
                  >
                    /mes
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    marginTop: "0.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  + Disponibilidad incierta, sin sistema, sin datos y sin escalabilidad
                </p>
              </div>

              {/* PG Estrategias — featured */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  background: `linear-gradient(135deg, var(--accent) 0%, #3D8BBF 100%)`,
                  color: "#ffffff",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Con PG Estrategias
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "2.75rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  {fmt(price)}
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.72)",
                      letterSpacing: 0,
                    }}
                  >
                    /mes
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.72)",
                    marginTop: "0.5rem",
                    lineHeight: 1.5,
                    marginBottom: "1.25rem",
                  }}
                >
                  {savings}% menos que una agencia · Sistema completo con datos y método
                </p>
                <a
                  href={waLink(WA_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.82rem",
                    color: "#ffffff",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    paddingLeft: "1.25rem",
                    paddingRight: "0.375rem",
                    paddingTop: "0.375rem",
                    paddingBottom: "0.375rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  Agendar diagnóstico gratuito
                  <span
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "9999px",
                      width: "2rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={14} style={{ color: "#1A1A1A" }} />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
