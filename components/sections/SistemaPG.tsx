"use client";

import { ArrowRight, Search, Zap, Shield, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { sistemaPGPhases, waLink, WA_MESSAGES } from "@/lib/data";

const iconMap: Record<string, typeof Search> = {
  search: Search,
  zap: Zap,
  shield: Shield,
  target: Target,
  "trending-up": TrendingUp,
};

const FEATURED_VIDEO =
  "https://res.cloudinary.com/dbqisatil/video/upload/v1776101065/Tesla2_vab5kh.mp4";

export default function SistemaPG() {
  const [first, ...rest] = sistemaPGPhases;
  const FirstIcon = iconMap[first.icon];

  return (
    <section
      id="sistema"
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Row 1 — 2-col header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14 items-end">
          <FadeIn>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--muted)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Nuestro Método
            </span>
            <h2
              className="font-bold uppercase mb-8"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "var(--text)",
              }}
            >
              Sistema PG:{" "}
              <span style={{ color: "var(--accent)" }}>el motor</span>
              <br />
              de crecimiento.
            </h2>
            {/* Pill CTA */}
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.85rem",
                color: "var(--text)",
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border)",
                paddingLeft: "1.5rem",
                paddingRight: "0.375rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              Conoce el método
              <span
                style={{
                  backgroundColor: "var(--text)",
                  borderRadius: "9999px",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={14} style={{ color: "var(--background)" }} />
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1.25rem",
                lineHeight: 1.65,
                maxWidth: "460px",
              }}
            >
              Cinco fases integradas que diseñamos, activamos y optimizamos en
              paralelo para convertir tu inversión en clientes reales y
              crecimiento sostenido.
            </p>
          </FadeIn>
        </div>

        {/* Row 2 — phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Phase 1 — featured (full width), video bg */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 relative rounded-2xl overflow-hidden"
            style={{ minHeight: "300px" }}
          >
            <video
              src={FEATURED_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(26,26,26,0.80)" }}
            />
            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-auto">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1.5px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {FirstIcon && (
                    <FirstIcon
                      size={16}
                      strokeWidth={2}
                      style={{ color: "var(--accent)" }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                  }}
                >
                  Fase {first.id}
                </span>
              </div>
              <div className="mt-8">
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                    marginBottom: "0.65rem",
                    lineHeight: 1.05,
                  }}
                >
                  {first.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(255,255,255,0.62)",
                    lineHeight: 1.7,
                    maxWidth: "520px",
                  }}
                >
                  {first.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phases 2–5 — alternating dark / light */}
          {rest.map((phase, i) => {
            const Icon = iconMap[phase.icon];
            const isDark = i % 2 === 0;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i + 1) * 0.08 }}
                className="rounded-2xl"
                style={{
                  padding: "1.75rem",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: isDark ? "var(--text)" : "transparent",
                  border: isDark ? "none" : "1px solid var(--border)",
                  transition: "background-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isDark)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--card-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isDark)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: `1.5px solid ${isDark ? "rgba(91,164,207,0.55)" : "var(--accent)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        strokeWidth={2}
                        style={{ color: "var(--accent)" }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.58rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      color: isDark ? "rgba(91,164,207,0.8)" : "var(--accent)",
                      textTransform: "uppercase",
                    }}
                  >
                    Fase {phase.id}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: isDark ? "#ffffff" : "var(--text)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: isDark ? "rgba(255,255,255,0.52)" : "var(--muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "1rem",
              color: "var(--muted)",
              letterSpacing: "-0.01em",
              maxWidth: "560px",
              margin: "3.5rem auto 0",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Cinco fases que se ejecutan en paralelo, no en cascada.{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Cada una alimenta a la siguiente.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
