"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Promise() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <FadeIn>
        <span className="num-label">NUESTRA PROMESA</span>
        <h2
          className="font-bold uppercase mt-4"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 5vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            maxWidth: "860px",
            color: "var(--text)",
          }}
        >
          No vendemos humo.
          <br />
          Construimos marcas{" "}
          <span style={{ color: "var(--accent)" }}>reales</span>
          <br />
          con resultados{" "}
          <span style={{ color: "var(--accent)" }}>reales.</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p
          className="mt-8 text-sm leading-relaxed"
          style={{ color: "var(--muted)", maxWidth: "500px", lineHeight: 1.9 }}
        >
          En PG-Estrategias nos tomamos en serio el valor de tu marca.
          Te acompañamos en todo el proceso — desde la planeación estratégica
          hasta la ejecución y el seguimiento. Nuestro equipo combina
          creatividad con análisis, diseño con tecnología, y pasión con enfoque.
        </p>
        <a
          href="#contacto"
          className="inline-block mt-10 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white rounded-sm transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: "var(--accent)",
            fontFamily: "var(--font-space-grotesk)",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-hover)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Ponerse en contacto
        </a>
      </FadeIn>
    </section>
  );
}
