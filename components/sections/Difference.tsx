"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Difference() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <FadeIn>
          <span className="num-label">NUESTRA ESPECIALIDAD — DIFERENCIA</span>
          <h2
            className="font-bold uppercase mt-4"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "var(--text)",
            }}
          >
            Trabajos
            <br />
            <span style={{ color: "var(--accent)" }}>únicos.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--muted)", lineHeight: 1.9 }}
          >
            En PG-Estrategias, convertimos cada reto en una oportunidad. No
            hacemos plantillas, hacemos{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              estrategias personalizadas.
            </strong>{" "}
            Nos sentamos contigo, entendemos tu negocio, tu audiencia y tus
            metas. Y a partir de eso, trazamos un plan que{" "}
            <em>sí funciona.</em>
          </p>
          <a
            href="#contacto"
            className="inline-block px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white rounded-sm transition-all duration-200 cursor-pointer"
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
            Agendar cita gratuita
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
