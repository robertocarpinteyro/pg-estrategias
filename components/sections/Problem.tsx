"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Problem() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
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
          Cómo entendemos el crecimiento
        </span>
        <h2
          className="font-bold uppercase mt-3"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(1.8rem, 4.5vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            maxWidth: "760px",
            color: "var(--text)",
          }}
        >
          Crecer no es{" "}
          <span style={{ color: "var(--accent)" }}>publicar más.</span>
        </h2>
      </FadeIn>

      <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-10 md:gap-20">
        <FadeIn delay={0.1}>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85, maxWidth: "480px" }}
          >
            Es conectar estrategia, contenido, pauta y datos en un sistema que
            funcione. La mayoría de equipos optimizan métricas aisladas —
            alcance, seguidores, likes — sin conectarlas con la operación del
            negocio.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85, maxWidth: "480px" }}
          >
            Nosotros diseñamos el motor completo: desde el primer contacto
            hasta el cierre, desde la pieza creativa hasta la conversión
            medible.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
