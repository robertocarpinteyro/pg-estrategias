"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

export default function CasosExito() {
  const [featured, ...others] = projects;

  return (
    <section
      id="casos"
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left — header + secondary cases */}
        <div className="md:pr-8 md:pt-2">
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
              Casos de éxito
            </span>
            <h2
              className="font-bold uppercase mb-5"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--text)",
              }}
            >
              Resultados que{" "}
              <span style={{ color: "var(--accent)" }}>hablan.</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                maxWidth: "400px",
                marginBottom: "2.5rem",
              }}
            >
              Negocios locales que ya están creciendo con el Sistema PG en
              múltiples verticales y puntos de contacto.
            </p>
          </FadeIn>

          {/* Secondary project mini-cards */}
          <div className="space-y-4">
            {others.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer flex items-center gap-4"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1rem 1.25rem",
                  backgroundColor: "transparent",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--card-bg)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent")
                }
              >
                {/* Thumbnail */}
                <div
                  className="relative shrink-0 overflow-hidden"
                  style={{
                    width: "72px",
                    height: "56px",
                    borderRadius: "0.6rem",
                    backgroundColor: project.color,
                  }}
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
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.55rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {project.vertical}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <ArrowRight
                  size={15}
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — featured large video card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
          style={{ borderRadius: "1.5rem", minHeight: "680px" }}
        >
          {/* Video */}
          {featured.video && (
            <video
              src={featured.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.12) 55%, transparent 78%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full p-10 md:p-12">
            {/* Top badge */}
            <span
              className="self-start"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.55rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                backgroundColor: "rgba(0,0,0,0.28)",
                backdropFilter: "blur(6px)",
                padding: "0.35rem 0.8rem",
                borderRadius: "9999px",
              }}
            >
              {featured.vertical}
            </span>

            {/* Bottom content */}
            <div style={{ marginTop: "auto" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: "0.6rem",
                }}
              >
                {featured.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                {featured.services.join(" · ")}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 font-semibold text-white transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={16} style={{ color: "#1A1A1A" }} />
                </span>
                Ver caso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
