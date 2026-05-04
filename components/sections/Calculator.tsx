"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { paquetes, waLink } from "@/lib/data";

// ── Types ─────────────────────────────────────────────────────────────────────

type PautaType = "sin-pauta" | "pauta-basica" | "pauta-avanzada";
type Reunion = "mensual" | "quincenal";

// ── Plan recommendation ───────────────────────────────────────────────────────
// Maps form selections to one of the 5 existing paquetes (index 0–4):
// 0: Cimiento  1: Cimiento Plus  2: Tracción  3: Aceleración  4: Dominio

function getRecommendedIndex(
  pauta: PautaType,
  piezas: number,
  branding: boolean,
  mensajeria: boolean,
  reunion: Reunion
): number {
  if (pauta === "pauta-avanzada" || piezas >= 18 || (mensajeria && reunion === "quincenal")) return 2; // Dominio
  if (pauta === "pauta-basica" || piezas >= 14 || mensajeria || reunion === "quincenal") return 1; // Tracción
  return 0; // Ignición
}

// Comparison reference prices (approximate market rates)
const agencyEstimates = [22000, 32000, 65000];
const freelancerEstimates = [14000, 20000, 40000];

const fmt = (n: number) => "$" + n.toLocaleString("es-MX");

// ── Sub-components ────────────────────────────────────────────────────────────

const ACCENT = "var(--accent)";

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
        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: ACCENT }} />
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
  const [pauta, setPauta] = useState<PautaType>("pauta-basica");
  const [piezas, setPiezas] = useState(12);
  const [branding, setBranding] = useState(false);
  const [mensajeria, setMensajeria] = useState(false);
  const [reunion, setReunion] = useState<Reunion>("quincenal");

  const idx = getRecommendedIndex(pauta, piezas, branding, mensajeria, reunion);
  const plan = paquetes[idx];
  const pgTotal = plan.precio + (plan.pauta ?? 0);
  const agencyPrice = agencyEstimates[idx];
  const freelancerPrice = freelancerEstimates[idx];
  const savings = Math.round((1 - pgTotal / agencyPrice) * 100);

  // Slider track fill
  const sliderPct = ((piezas - 10) / 10) * 100;
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
              fontFamily: "var(--font-syne)",
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
              fontFamily: "var(--font-syne)",
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
            Ajusta las opciones y el sistema te recomienda el paquete exacto que
            ya tenemos diseñado para tu etapa.
          </p>
        </div>

        {/* ── Calculator grid ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #1E1E1E" }}
        >

          {/* ════ LEFT — form ════ */}
          <div style={{ backgroundColor: "#0D0D0D", padding: "3rem" }}>

            {/* 1. Pauta publicitaria */}
            <div style={{ paddingBottom: "2rem", borderBottom: "1px solid #1E1E1E" }}>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                ¿Necesitas pauta publicitaria?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    value: "sin-pauta" as PautaType,
                    label: "No por ahora",
                    description: "Me enfoco en construir presencia y contenido orgánico",
                  },
                  {
                    value: "pauta-basica" as PautaType,
                    label: "Sí, Meta y Google Ads",
                    description: "Anuncios gestionados para generar clientes de forma activa",
                  },
                  {
                    value: "pauta-avanzada" as PautaType,
                    label: "Sí, con alta inversión",
                    description: "Estrategia publicitaria avanzada para dominar mi mercado",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPauta(opt.value)}
                    className="flex items-start gap-3 text-left cursor-pointer w-full"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <RadioCircle active={pauta === opt.value} />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: pauta === opt.value ? "#ffffff" : "#777777",
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

            {/* 2. Piezas de contenido */}
            <div
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #1E1E1E",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.4rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Piezas de contenido al mes:{" "}
                <span style={{ color: ACCENT }}>{piezas}</span>
              </h3>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#484848",
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                }}
              >
                Artes, reels, carruseles y video que publicamos mensualmente
              </p>
              <input
                type="range"
                min={10}
                max={20}
                step={1}
                value={piezas}
                onChange={(e) => setPiezas(Number(e.target.value))}
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
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.62rem", color: "#444444" }}>
                  10 piezas
                </span>
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.62rem", color: "#444444" }}>
                  20 piezas
                </span>
              </div>
            </div>

            {/* 3. Extras */}
            <div
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #1E1E1E",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                ¿Necesitas algo más?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    key: "branding",
                    label: "Branding: logo y paleta de marca",
                    checked: branding,
                    toggle: () => setBranding((v) => !v),
                  },
                  {
                    key: "mensajeria",
                    label: "Mensajería masiva y automatización",
                    checked: mensajeria,
                    toggle: () => setMensajeria((v) => !v),
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
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.85rem",
                        color: item.checked ? "#ffffff" : "#777777",
                        flex: 1,
                        textAlign: "left",
                        transition: "color 0.2s",
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Frecuencia de reuniones */}
            <div style={{ paddingTop: "2rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                ¿Con qué frecuencia quieres reuniones?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { value: "mensual" as Reunion, label: "Mensual", description: "Una reunión de seguimiento al mes" },
                  { value: "quincenal" as Reunion, label: "Quincenal", description: "Seguimiento más cercano cada dos semanas" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setReunion(opt.value)}
                    className="flex items-start gap-3 text-left cursor-pointer w-full"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <RadioCircle active={reunion === opt.value} />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: reunion === opt.value ? "#ffffff" : "#777777",
                          transition: "color 0.2s",
                          lineHeight: 1.2,
                        }}
                      >
                        {opt.label}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "#484848", marginTop: "0.2rem" }}>
                        {opt.description}
                      </p>
                    </div>
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
            {/* Plan recomendado */}
            <div style={{ marginBottom: "1.75rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: "0.4rem",
                }}
              >
                Plan recomendado para ti
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.1,
                }}
              >
                {plan.nombre}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: "360px",
                }}
              >
                {plan.descripcion}
              </p>

              {/* Top 3 features */}
              <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {plan.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: ACCENT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Check size={9} style={{ color: "#fff" }} strokeWidth={3} />
                    </div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1 }}>

              {/* Agencia */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Agencia tradicional cobra desde
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {fmt(agencyPrice)}
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--muted)", letterSpacing: 0 }}>
                    /mes
                  </span>
                </p>
                <p style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "0.4rem", lineHeight: 1.5 }}>
                  + Contratos largos, procesos lentos y poco control
                </p>
              </div>

              {/* Freelancer */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Freelancer promedio cobra desde
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {fmt(freelancerPrice)}
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--muted)", letterSpacing: 0 }}>
                    /mes
                  </span>
                </p>
                <p style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "0.4rem", lineHeight: 1.5 }}>
                  + Sin sistema, sin datos y sin escalabilidad
                </p>
              </div>

              {/* PG — featured */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                  background: "linear-gradient(135deg, var(--accent) 0%, #3D8BBF 100%)",
                  color: "#ffffff",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Con PG Estrategias — {plan.nombre}
                </p>

                {/* Price breakdown */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      color: "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {fmt(plan.precio)}
                    <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "rgba(255,255,255,0.72)", letterSpacing: 0 }}>
                      /mes
                    </span>
                  </p>
                  {plan.pauta && (
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.8)",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                      }}
                    >
                      + {fmt(plan.pauta)} pauta
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "0.5rem",
                    lineHeight: 1.5,
                    marginBottom: "1.1rem",
                  }}
                >
                  {savings}% menos que una agencia · Sistema con datos y método
                </p>

                <a
                  href={waLink(plan.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold"
                  style={{
                    fontFamily: "var(--font-syne)",
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
                  Me interesa el {plan.nombre}
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
