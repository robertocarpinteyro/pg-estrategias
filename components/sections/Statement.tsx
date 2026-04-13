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
          En un mundo donde millones de marcas compiten por la atención,
          solo las que logran diferenciarse con{" "}
          <span style={{ color: "var(--accent)" }}>claridad,</span>{" "}
          <span style={{ color: "var(--accent)" }}>creatividad</span>{" "}
          y <span style={{ color: "var(--accent)" }}>propósito</span>{" "}
          logran destacar.
        </p>
      </FadeIn>

      <div
        className="mt-14 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-20"
      >
        <FadeIn delay={0.1}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85 }}
          >
            En PG Estrategias, entendemos que no se trata solo de estar
            presentes en redes o de tener una página bonita… se trata de tener
            una estrategia sólida que te haga{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              visible, deseado y recordado.
            </strong>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)", lineHeight: 1.85 }}
          >
            Somos una agencia de marketing joven pero con visión clara, fundada
            por profesionales apasionados por la creatividad, la tecnología y
            los resultados. Llevamos más de un año ayudando a negocios de
            diversos sectores a crecer.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
