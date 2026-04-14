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
          No marketing.
          <br />
          Un sistema que genera{" "}
          <span style={{ color: "var(--accent)" }}>ventas</span>
          <br />
          de verdad.
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p
          className="mt-8 text-sm leading-relaxed"
          style={{ color: "var(--muted)", maxWidth: "520px", lineHeight: 1.9 }}
        >
          Los dueños de negocio en Puebla nos contratan porque están hartos de
          pagar y recibir sólo reportes de likes que no pagan la nómina.
          Nuestro sistema conecta cada pieza —desde el primer anuncio hasta el
          prospecto calificado en tu WhatsApp— para que si inviertes $10,
          regresen $30 constantes.
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
          Agenda tu cita gratis
        </a>
      </FadeIn>
    </section>
  );
}
