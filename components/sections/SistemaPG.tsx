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
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14 items-end">
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
              Nuestro Método
            </span>
            <h2
              className="font-bold uppercase mb-8"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.97,
                color: "#F5F5F5",
              }}
            >
              Sistema PG:{" "}
              <span style={{ color: "#A6E22E" }}>el motor</span>
              <br />
              de crecimiento.
            </h2>

            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                color: "#0D0D0D",
                backgroundColor: "#A6E22E",
                paddingLeft: "1.5rem",
                paddingRight: "0.375rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8FC220")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A6E22E")}
            >
              Conoce el método
              <span
                style={{
                  backgroundColor: "#0D0D0D",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={14} style={{ color: "#A6E22E" }} />
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "460px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Cinco fases integradas que diseñamos, activamos y optimizamos en
              paralelo para convertir tu inversión en clientes reales y
              crecimiento sostenido.
            </p>
          </FadeIn>
        </div>

        {/* Phase cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Phase 1 — featured full width with video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 relative overflow-hidden"
            style={{ minHeight: "280px" }}
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
              style={{ backgroundColor: "rgba(13,13,13,0.82)" }}
            />
            {/* Green grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(166,226,46,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(166,226,46,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-auto">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1.5px solid #A6E22E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {FirstIcon && (
                    <FirstIcon size={16} strokeWidth={1.8} style={{ color: "#A6E22E" }} />
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#A6E22E",
                    textTransform: "uppercase",
                  }}
                >
                  Fase {first.id}
                </span>
              </div>
              <div className="mt-8">
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#F5F5F5",
                    marginBottom: "0.65rem",
                    lineHeight: 1.05,
                  }}
                >
                  {first.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(245,245,245,0.6)",
                    lineHeight: 1.7,
                    maxWidth: "520px",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {first.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phases 2–5 */}
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
                style={{
                  padding: "2rem",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: isDark ? "#F5F5F5" : "var(--card-bg)",
                  border: isDark ? "none" : "1px solid var(--border)",
                  transition: "border-color 0.25s ease, background-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isDark) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,226,46,0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isDark) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: `1.5px solid ${isDark ? "rgba(13,13,13,0.25)" : "rgba(166,226,46,0.4)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        strokeWidth={1.8}
                        style={{ color: isDark ? "#0D0D0D" : "#A6E22E" }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: isDark ? "rgba(13,13,13,0.5)" : "#A6E22E",
                      textTransform: "uppercase",
                    }}
                  >
                    Fase {phase.id}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: isDark ? "#0D0D0D" : "#F5F5F5",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: isDark ? "rgba(13,13,13,0.55)" : "var(--muted)",
                      lineHeight: 1.7,
                      fontFamily: "var(--font-inter)",
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
              fontFamily: "var(--font-syne)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              letterSpacing: "-0.01em",
              maxWidth: "560px",
              margin: "3.5rem auto 0",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Cinco fases que se ejecutan en paralelo, no en cascada.{" "}
            <span style={{ color: "#F5F5F5", fontWeight: 600 }}>
              Cada una alimenta a la siguiente.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
