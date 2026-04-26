"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { sistemaPGPhases } from "@/lib/data";
import { Search, Zap, Shield, Target, TrendingUp } from "lucide-react";

const iconMap: Record<string, typeof Search> = {
  search: Search,
  zap: Zap,
  shield: Shield,
  target: Target,
  "trending-up": TrendingUp,
};

export default function SistemaPG() {
  return (
    <section
      id="sistema"
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Header */}
      <FadeIn>
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
          Nuestro Método
        </span>
        <h2
          className="font-bold uppercase mt-3 mb-4"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "var(--text)",
            maxWidth: "700px",
          }}
        >
          Sistema PG:{" "}
          <span style={{ color: "var(--accent)" }}>el motor</span>
          <br />
          de crecimiento de
          <br />
          tu negocio.
        </h2>
      </FadeIn>

      {/* 5 Phases */}
      <div className="mt-14 md:mt-20">
        {/* Connection line (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
          {sistemaPGPhases.map((phase, i) => {
            const Icon = iconMap[phase.icon];
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  padding: "1.75rem 1.5rem",
                  position: "relative",
                  backgroundColor: "transparent",
                  transition: "background-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {/* Phase number */}
                <div className="flex items-center gap-3 mb-4">
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
                    {Icon && (
                      <Icon
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
                    Fase {phase.id}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {phase.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {phase.description}
                </p>

                {/* Arrow connector (desktop) */}
                {i < sistemaPGPhases.length - 1 && (
                  <div
                    className="hidden md:block absolute"
                    style={{
                      right: "-12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--accent)",
                      fontSize: "0.8rem",
                      zIndex: 2,
                    }}
                  >
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom statement */}
      <FadeIn delay={0.3}>
        <p
          className="mt-14 text-center"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "1rem",
            color: "var(--muted)",
            letterSpacing: "-0.01em",
            maxWidth: "560px",
            margin: "3.5rem auto 0",
            lineHeight: 1.6,
          }}
        >
          Cinco fases que se ejecutan en paralelo, no en cascada.{" "}
          <span style={{ color: "var(--text)", fontWeight: 600 }}>
            Cada una alimenta a la siguiente.
          </span>
        </p>
      </FadeIn>
    </section>
  );
}
