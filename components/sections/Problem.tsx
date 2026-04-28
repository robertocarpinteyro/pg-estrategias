"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Problem() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: eyebrow + heading */}
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
              Cómo entendemos el crecimiento
            </span>
            <h2
              className="font-bold uppercase"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "var(--text)",
              }}
            >
              Crecer no es{" "}
              <span style={{ color: "var(--accent)" }}>publicar más.</span>
            </h2>
          </FadeIn>

          {/* Right: description */}
          <div className="md:pt-2 space-y-5">
            <FadeIn delay={0.1}>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  fontSize: "1.15rem",
                  maxWidth: "480px",
                }}
              >
                Es conectar estrategia, contenido, pauta y datos en un sistema
                que funcione. La mayoría de equipos optimizan métricas aisladas
                — alcance, seguidores, likes — sin conectarlas con la operación
                del negocio.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  fontSize: "0.95rem",
                  maxWidth: "480px",
                }}
              >
                Nosotros diseñamos el motor completo: desde el primer contacto
                hasta el cierre, desde la pieza creativa hasta la conversión
                medible.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
