"use client";

import { motion } from "framer-motion";
import { waLink, WA_MESSAGES } from "@/lib/data";

const HERO_VIDEO = "https://res.cloudinary.com/dbqisatil/video/upload/v1776124935/06b5b5888a35b51a45b6de36e891b2eb_rkw5pk.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.58)",
          zIndex: 1,
        }}
      />

      {/* Bottom gradient to background color */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, var(--background) 0%, rgba(244,239,232,0.2) 30%, transparent 60%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="relative px-5 md:px-8 max-w-7xl mx-auto w-full pt-28 pb-20"
        style={{ zIndex: 2 }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
            }}
          >
            Growth Partner · Puebla
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 mb-8 font-bold uppercase"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#ffffff",
            maxWidth: "900px",
          }}
        >
          Diseñamos, activamos
          <br />
          y escalamos{" "}
          <span style={{ color: "var(--accent)" }}>sistemas de
          <br />
          crecimiento</span> para
          <br />
          negocios locales.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-base leading-relaxed mb-10"
          style={{
            color: "rgba(255,255,255,0.75)",
            maxWidth: "540px",
            lineHeight: 1.7,
          }}
        >
          Tu Growth Partner: conectamos estrategia, producción, pauta y
          tecnología en un solo motor. Construimos crecimiento con método,
          datos y visión.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href={waLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white rounded-sm transition-all duration-200 cursor-pointer"
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
            Agenda tu diagnóstico gratuito
          </a>
          <a
            href="#casos"
            className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wide rounded-sm transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
            }}
          >
            Ver casos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
