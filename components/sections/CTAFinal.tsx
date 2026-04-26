"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { waLink, WA_MESSAGES } from "@/lib/data";

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2
            className="font-bold uppercase mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "var(--text)",
            }}
          >
            ¿Listo para diseñar el{" "}
            <span style={{ color: "var(--accent)" }}>motor de crecimiento</span>
            {" "}de tu negocio?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-base mb-4"
            style={{
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Agenda tu Diagnóstico de Crecimiento gratuito.
            En 30 minutos sales con claridad sobre qué te falta y cómo escalar.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.a
            href={waLink(WA_MESSAGES.ctaFinal)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-10 py-4 text-base font-semibold uppercase tracking-wide text-white rounded-sm cursor-pointer"
            style={{
              backgroundColor: "var(--accent)",
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)";
            }}
          >
            Agendar por WhatsApp
          </motion.a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="mt-6"
            style={{
              fontSize: "0.75rem",
              color: "var(--muted)",
              letterSpacing: "0.02em",
            }}
          >
            WhatsApp directo · Sin formularios · Respuesta inmediata
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
