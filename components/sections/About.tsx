"use client";

import FadeIn from "@/components/ui/FadeIn";
import { clients } from "@/lib/data";

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        {/* Left column */}
        <FadeIn>
          <span className="num-label">¿QUIÉNES SOMOS?</span>
          <h2
            className="font-bold mt-4 mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(2rem, 4vw, 3.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            PG-Estrategias:
            <br />
            Creatividad, estrategia
            <br />y{" "}
            <span style={{ color: "var(--accent)" }}>resultados.</span>
          </h2>
          <a
            href="#contacto"
            className="inline-block px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-sm transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Conocer más sobre nosotros →
          </a>
        </FadeIn>

        {/* Right column */}
        <FadeIn delay={0.15}>
          <p
            className="font-semibold text-sm mb-4 leading-relaxed"
            style={{
              color: "var(--text)",
              fontFamily: "var(--font-space-grotesk)",
              lineHeight: 1.7,
            }}
          >
            Somos una agencia de marketing con sede en Puebla, presencia en
            Querétaro y CDMX, y en expansión hacia otras ciudades de México.
          </p>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--muted)", lineHeight: 1.9 }}
          >
            Nacimos con la visión de hacer las cosas diferente. No creemos en
            los servicios enlatados, ni en campañas sin alma. Creemos en el
            marketing inteligente, personalizado, cercano, basado en datos y
            con una fuerte carga creativa.
          </p>

          {/* Clients list */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            <span className="num-label block mb-4">CLIENTES ACTUALES</span>
            <div className="flex flex-col gap-0">
              {clients.map((client, i) => (
                <div
                  key={client.name}
                  className="flex items-center justify-between py-3"
                  style={{
                    borderBottom:
                      i < clients.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {client.name}
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,92,0,0.1)",
                      color: "var(--accent)",
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {client.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
