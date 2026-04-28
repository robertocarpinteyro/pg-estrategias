"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { waLink, WA_MESSAGES, clients } from "@/lib/data";

const HERO_VIDEO =
  "https://res.cloudinary.com/dbqisatil/video/upload/v1776124935/06b5b5888a35b51a45b6de36e891b2eb_rkw5pk.mp4";

export default function Hero() {
  const doubled = [...clients, ...clients];

  return (
    <section
      id="home"
      className="flex flex-col"
      style={{ height: "100vh", padding: "68px 12px 12px" }}
    >
      {/* Rounded hero card */}
      <div className="relative flex-1 rounded-2xl overflow-hidden">
        {/* Video */}
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
          style={{ backgroundColor: "rgba(0,0,0,0.54)", zIndex: 1 }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(244,239,232,0.18) 0%, rgba(244,239,232,0.04) 28%, transparent 55%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="relative flex flex-col h-full px-7 pb-8 pt-10 md:px-12 md:pb-10 md:pt-12"
          style={{ zIndex: 2 }}
        >
          {/* Eyebrow */}
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
            className="mt-5 mb-7 font-bold uppercase"
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
            <span style={{ color: "var(--accent)" }}>
              sistemas de
              <br />
              crecimiento
            </span>{" "}
            para
            <br />
            negocios locales.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              color: "rgba(255,255,255,0.72)",
              maxWidth: "520px",
              lineHeight: 1.7,
              fontSize: "1rem",
              marginBottom: "2rem",
              fontFamily: "var(--font-inter)",
            }}
          >
            Tu Growth Partner: conectamos estrategia, producción, pauta y
            tecnología en un solo motor. Construimos crecimiento con método,
            datos y visión.
          </motion.p>

          {/* CTAs — pill style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            {/* Primary pill with arrow circle */}
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold text-white transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.88rem",
                backgroundColor: "rgba(255,255,255,0.13)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.22)",
                paddingLeft: "1.75rem",
                paddingRight: "0.375rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              Agenda tu diagnóstico gratuito
              <span
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "9999px",
                  width: "2.25rem",
                  height: "2.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={15} style={{ color: "#1A1A1A" }} />
              </span>
            </a>

            {/* Secondary outline pill */}
            <a
              href="#casos"
              className="font-semibold uppercase transition-all duration-200 cursor-pointer"
              style={{
                border: "1px solid rgba(255,255,255,0.28)",
                color: "rgba(255,255,255,0.82)",
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.04em",
                fontSize: "0.72rem",
                textDecoration: "none",
                padding: "0.78rem 1.75rem",
                borderRadius: "9999px",
              }}
            >
              Ver casos
            </a>
          </motion.div>

          {/* Bottom client marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="overflow-hidden"
            style={{ marginTop: "auto", paddingTop: "1.75rem", maxWidth: "540px" }}
            aria-hidden="true"
          >
            <div className="pg-marquee-track">
              {doubled.map((client, i) => (
                <span
                  key={i}
                  className="shrink-0 whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                  }}
                >
                  {client.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
