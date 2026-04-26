"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { capacidades } from "@/lib/data";
import { BarChart3, Film, Cpu } from "lucide-react";

const icons = [BarChart3, Film, Cpu];

export default function WhyDifferent() {
  return (
    <section
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
          Capacidades
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
            maxWidth: "600px",
          }}
        >
          Lo que{" "}
          <span style={{ color: "var(--accent)" }}>activamos.</span>
        </h2>
      </FadeIn>

      {/* 3 Capabilities */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {capacidades.map((cap, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "2.25rem 2rem",
                backgroundColor: "transparent",
                transition: "background-color 0.25s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--accent)",
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

              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                {cap.id}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {cap.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
