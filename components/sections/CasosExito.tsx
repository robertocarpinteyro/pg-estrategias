"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

export default function CasosExito() {
  return (
    <section
      id="casos"
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
          Casos de éxito
        </span>
        <h2
          className="font-bold uppercase mt-3 mb-4"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "var(--text)",
          }}
        >
          Resultados que{" "}
          <span style={{ color: "var(--accent)" }}>hablan.</span>
        </h2>
        <p
          className="text-sm mb-14"
          style={{
            color: "var(--muted)",
            maxWidth: "420px",
            lineHeight: 1.8,
          }}
        >
          Negocios locales que ya están creciendo con el Sistema PG.
        </p>
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group cursor-pointer"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            {/* Video / Visual */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "16/10", backgroundColor: project.color }}
            >
              {project.video && (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                }}
              />
              {/* Hover accent tint */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-10"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {/* Vertical badge */}
              <span
                className="absolute top-3 left-3 px-2 py-1"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                  backgroundColor: "rgba(0,0,0,0.35)",
                  borderRadius: "2px",
                }}
              >
                {project.vertical}
              </span>
              {/* Bottom label */}
              <div className="absolute bottom-3 left-3 right-3">
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Card body */}
            <div
              className="p-4 transition-colors duration-200 group-hover:bg-[var(--card-bg)]"
            >
              <p
                className="text-xs uppercase mb-2"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}
              >
                {project.services.join(" · ")}
              </p>
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                }}
              >
                Ver caso →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
