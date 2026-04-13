"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroImages } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-end pb-12 pt-28 overflow-hidden relative"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(https://res.cloudinary.com/dbqisatil/image/upload/v1776120738/Gemini_Generated_Image_sx19kjsx19kjsx19_reafsa.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay para mantener legibilidad del texto */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "var(--background)", opacity: 0.82 }}
      />
      <div className="px-5 md:px-8 max-w-7xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="num-label">© 2025 — AGENCIA DE MARKETING DIGITAL</span>
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 mb-8 font-bold uppercase"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(3rem, 8.5vw, 9rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.92,
            color: "var(--text)",
            maxWidth: "1000px",
          }}
        >
          Haz que tu<br />
          marca sea{" "}
          <span style={{ color: "var(--accent)" }}>imposible</span>
          <br />
          de ignorar
        </motion.h1>

        {/* Sub-row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-16"
        >
          <p
            className="text-base leading-relaxed"
            style={{
              color: "var(--muted)",
              maxWidth: "460px",
              lineHeight: 1.7,
            }}
          >
            Combinamos producción audiovisual de alto impacto con estrategias
            360° de performance. Dejamos atrás los clics sin conversión;
            construimos un ecosistema diseñado para generar prospectos
            calificados y resultados medibles.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contacto"
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white rounded-sm transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--accent)",
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.04em",
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
            <a
              href="#servicios"
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-sm transition-all duration-200 cursor-pointer"
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
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* Divider labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex items-center gap-3"
        >
          <div
            style={{
              width: "36px",
              height: "1px",
              backgroundColor: "var(--accent)",
            }}
          />
          <span
            className="text-xs font-medium uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.12em" }}
          >
            Diseñado para conectar
          </span>
        </motion.div>
      </div>

      {/* Photo strip */}
      <motion.div
        style={{ y }}
        className="mt-14 px-5 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {heroImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative overflow-hidden rounded-sm group cursor-pointer"
              style={{
                aspectRatio: "3/4",
                backgroundColor: img.color,
              }}
            >
              {/* Video (cuando hay URL) o color de fondo */}
              {img.video ? (
                <video
                  src={img.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : null}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                  opacity: img.video ? 1 : 0.7,
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-10 opacity-0"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {/* Number label */}
              <span
                className="absolute top-3 right-3 text-white"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  opacity: 0.6,
                }}
              >
                {img.id}
              </span>
              {/* Bottom label */}
              <div className="absolute bottom-3 left-3 right-3">
                <p
                  className="text-white uppercase leading-tight"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
