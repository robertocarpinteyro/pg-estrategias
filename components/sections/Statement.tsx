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
          Sin contenido visual de alto impacto,{" "}
          <span style={{ color: "var(--accent)" }}>ninguna estrategia</span>{" "}
          de marketing convierte. El contenido es el motor.
          La estrategia es el combustible.
        </p>
      </FadeIn>

      <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-20">
        <FadeIn delay={0.1}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85 }}
          >
            En PG Estrategias entendemos que no se trata de estar en redes o
            pagar por clics vacíos. Se trata de construir un ecosistema donde
            cada pieza —desde la iluminación de un video hasta el botón de una
            landing— está diseñada para{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              convertir prospectos en clientes reales.
            </strong>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85 }}
          >
            Somos una agencia con enfoque de performance: medimos cada peso
            invertido, optimizamos cada campaña y entregamos reportes
            transparentes. Nuestro proceso va desde la producción audiovisual
            hasta que el prospecto llega a tu WhatsApp, listo para cerrar.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
