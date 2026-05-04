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
      <div className="relative flex-1 overflow-hidden" style={{ borderRadius: "4px" }}>
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

        {/* Dark overlay with green-tinted gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.60) 50%, rgba(13,13,13,0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Bottom fade to black */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 45%)",
            zIndex: 1,
          }}
        />

        {/* Subtle green grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(166,226,46,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(166,226,46,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#A6E22E",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                color: "rgba(245,245,245,0.55)",
                textTransform: "uppercase",
              }}
            >
              Growth Partner · Puebla, México
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-5 mb-6 font-bold uppercase"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.4rem, 6.5vw, 6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.93,
              color: "#F5F5F5",
              maxWidth: "920px",
            }}
          >
            Tu equipo interno
            <br />
            de{" "}
            <span style={{ color: "#A6E22E" }}>crecimiento</span>
            <br />
            digital.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              color: "rgba(245,245,245,0.62)",
              maxWidth: "500px",
              lineHeight: 1.75,
              fontSize: "1rem",
              marginBottom: "2.25rem",
              fontFamily: "var(--font-inter)",
            }}
          >
            Convertimos tu inversión publicitaria en clientes reales, no en likes.
            Integramos pauta, creatividad, conversación y ecosistema digital bajo un mismo motor.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            {/* Primary CTA */}
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                backgroundColor: "#A6E22E",
                color: "#0D0D0D",
                paddingLeft: "1.75rem",
                paddingRight: "0.375rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8FC220")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A6E22E")}
            >
              Agenda tu sesión de descubrimiento
              <span
                style={{
                  backgroundColor: "#0D0D0D",
                  width: "2.25rem",
                  height: "2.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={15} style={{ color: "#A6E22E" }} />
              </span>
            </a>

            {/* Secondary */}
            <a
              href="#casos"
              className="font-semibold uppercase transition-all duration-200 cursor-pointer"
              style={{
                border: "1px solid rgba(245,245,245,0.22)",
                color: "rgba(245,245,245,0.75)",
                fontFamily: "var(--font-syne)",
                letterSpacing: "0.08em",
                fontSize: "0.72rem",
                textDecoration: "none",
                padding: "0.78rem 1.75rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#A6E22E";
                e.currentTarget.style.color = "#A6E22E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,245,245,0.22)";
                e.currentTarget.style.color = "rgba(245,245,245,0.75)";
              }}
            >
              Ver casos
            </a>
          </motion.div>

          {/* Authority note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-syne)",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              color: "rgba(245,245,245,0.35)",
            }}
          >
            Diseñado para negocios que ya saben cómo vender y buscan escalar.
          </motion.p>

          {/* Bottom client marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="overflow-hidden"
            style={{ marginTop: "auto", paddingTop: "1.75rem" }}
            aria-hidden="true"
          >
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(245,245,245,0.1)",
                marginBottom: "1rem",
                maxWidth: "480px",
              }}
            />
            <div className="pg-marquee-track">
              {doubled.map((client, i) => (
                <span
                  key={i}
                  className="shrink-0 whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "rgba(245,245,245,0.3)",
                    textTransform: "uppercase",
                    marginLeft: "2rem",
                    marginRight: "2rem",
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
