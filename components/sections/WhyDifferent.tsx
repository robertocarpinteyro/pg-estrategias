"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { capacidades } from "@/lib/data";
import { BarChart3, Film, Cpu } from "lucide-react";

const icons = [BarChart3, Film, Cpu];

export default function WhyDifferent() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 2-col header */}
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
              Capacidades
            </span>
            <h2
              className="font-bold uppercase"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "var(--text)",
              }}
            >
              Lo que{" "}
              <span style={{ color: "var(--accent)" }}>activamos.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "440px",
              }}
            >
              Estrategia, producción y tecnología integradas en un solo motor
              operado completamente por nuestro equipo.
            </p>
          </FadeIn>
        </div>

        {/* 3 cards — middle is dark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {capacidades.map((cap, i) => {
            const Icon = icons[i];
            const isDark = i === 1;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl"
                style={{
                  padding: "2.25rem 2rem",
                  backgroundColor: isDark ? "var(--text)" : "transparent",
                  border: isDark ? "none" : "1px solid var(--border)",
                  transition: "background-color 0.25s ease",
                  minHeight: "290px",
                  display: "flex",
                  flexDirection: "column",
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
                {/* Icon circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: `1.5px solid ${isDark ? "rgba(91,164,207,0.5)" : "var(--accent)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    style={{ color: "var(--accent)" }}
                  />
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    color: isDark ? "rgba(91,164,207,0.8)" : "var(--accent)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cap.id}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: isDark ? "#ffffff" : "var(--text)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.82rem",
                    color: isDark ? "rgba(255,255,255,0.52)" : "var(--muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
