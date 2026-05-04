"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { waLink, WA_MESSAGES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-36 px-5 md:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Full-width dark card with green accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "4rem 2.5rem",
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "0",
          }}
          className="md:py-20 md:px-16"
        >
          {/* Background bar chart decorative */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              right: "3rem",
              display: "flex",
              alignItems: "flex-end",
              gap: "6px",
              opacity: 0.06,
            }}
          >
            {[80, 120, 160, 200, 240].map((h, i) => (
              <div
                key={i}
                style={{
                  width: "24px",
                  height: `${h}px`,
                  backgroundColor: "#0D0D0D",
                }}
              />
            ))}
          </div>

          <FadeIn>
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "rgba(13,13,13,0.4)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              ¿Listo para escalar?
            </span>
            <h2
              className="font-bold uppercase"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "#0D0D0D",
                maxWidth: "900px",
                marginBottom: "1.5rem",
              }}
            >
              Crecimiento con{" "}
              <span style={{ color: "#0D0D0D", fontStyle: "italic" }}>propósito.</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#A6E22E",
                  padding: "0 0.25em",
                }}
              >
                Resultados que perduran.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                color: "rgba(13,13,13,0.55)",
                lineHeight: 1.8,
                maxWidth: "460px",
                margin: "0 auto 2.5rem",
                fontSize: "1rem",
                fontFamily: "var(--font-inter)",
              }}
            >
              Agenda tu sesión de descubrimiento. En 30 minutos sales con claridad sobre qué te falta y cómo escalar.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                href={waLink(WA_MESSAGES.ctaFinal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold cursor-pointer"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  backgroundColor: "#0D0D0D",
                  color: "#F5F5F5",
                  paddingLeft: "2rem",
                  paddingRight: "0.5rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0D0D0D")}
              >
                Agendar por WhatsApp
                <span
                  style={{
                    backgroundColor: "#A6E22E",
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={16} style={{ color: "#0D0D0D" }} />
                </span>
              </motion.a>
            </div>

            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.72rem",
                color: "rgba(13,13,13,0.4)",
                letterSpacing: "0.04em",
                fontFamily: "var(--font-syne)",
              }}
            >
              WhatsApp directo · Sin formularios · Respuesta inmediata
            </p>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
