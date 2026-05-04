"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { pilares } from "@/lib/data";
import { Target, Film, MessageSquare, Globe } from "lucide-react";

const icons = [Target, Film, MessageSquare, Globe];

export default function WhyDifferent() {
  return (
    <section
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
              Las 4 Columnas
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
              Cuatro motores.
              <br />
              <span style={{ color: "#A6E22E" }}>Un solo sistema.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "440px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Nuestra ejecución multiplica resultados porque integra cuatro pilares que la mayoría gestiona por separado — o no gestiona.
            </p>
          </FadeIn>
        </div>

        {/* 4 pillar cards — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pilares.map((pilar, i) => {
            const Icon = icons[i];
            const isAccented = i === 1;
            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  padding: "2.25rem 2.25rem 2.5rem",
                  backgroundColor: isAccented ? "var(--accent-dim)" : "var(--card-bg)",
                  border: isAccented ? "1px solid var(--accent-border)" : "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  transition: "border-color 0.25s ease, background-color 0.25s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (!isAccented) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(166,226,46,0.2)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAccented) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
                  }
                }}
              >
                {isAccented && (
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
                )}

                {/* Icon + number row */}
                <div className="flex items-start justify-between">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      border: `1.5px solid ${isAccented ? "rgba(166,226,46,0.5)" : "var(--border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: "#A6E22E" }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: isAccented ? "#A6E22E" : "rgba(245,245,245,0.2)",
                      textTransform: "uppercase",
                    }}
                  >
                    {pilar.id}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#A6E22E",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pilar.subtitle}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#F5F5F5",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {pilar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.75,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {pilar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
