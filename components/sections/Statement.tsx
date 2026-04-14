"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Statement() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <FadeIn>
        <p
          className="font-bold uppercase"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(1.6rem, 4vw, 3.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "940px",
            color: "var(--text)",
          }}
        >
          Sin un sistema de ventas claro,{" "}
          <span style={{ color: "var(--accent)" }}>ningún peso</span>{" "}
          en publicidad tiene sentido. El sistema es el motor.
          Las ventas, el resultado.
        </p>
      </FadeIn>

      <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-20">
        <FadeIn delay={0.1}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85 }}
          >
            Un dueño de restaurante en Angelópolis no quiere "engagement",
            quiere mesas llenas. Una constructora en Cholula no quiere CTR,
            quiere contratos firmados. Por eso diseñamos cada pieza del sistema
            con una sola meta:{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              prospectos reales para tu negocio en Puebla.
            </strong>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85 }}
          >
            Somos transparentes desde el día uno: te decimos qué sí podemos
            lograr y qué no. Trabajamos con pocos clientes porque nos metemos
            de fondo en cada negocio. Y tus activos digitales —sitio, Google
            Business, redes— siempre son tuyos. Sin letras chiquitas, sin
            sorpresas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
