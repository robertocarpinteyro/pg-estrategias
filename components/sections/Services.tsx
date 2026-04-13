"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { services } from "@/lib/data";

const PANEL_TRANSITION = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const };

const slideVariants = {
  enter: { y: "100%" },
  center: { y: "0%" },
  exit: { y: "-100%" },
};

const fadeSlideVariants = {
  enter: { y: "60px", opacity: 0 },
  center: { y: "0px", opacity: 1 },
  exit: { y: "-60px", opacity: 0 },
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.min(
        Math.floor(v * services.length),
        services.length - 1
      );
      if (newIndex !== prevIndexRef.current) {
        prevIndexRef.current = newIndex;
        setActiveIndex(newIndex);
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const service = services[activeIndex];

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative"
      style={{
        height: `${services.length * 100}vh`,
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-8"
          style={{
            height: "52px",
            borderBottom: "1px solid var(--border)",
            backgroundColor: "var(--background)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            Servicios
          </span>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? "20px" : "5px",
                  height: "2px",
                  backgroundColor:
                    i === activeIndex ? "var(--accent)" : "var(--border)",
                  transition: "all 0.35s ease",
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--muted)",
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(services.length).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Two panels */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            height: "100%",
            paddingTop: "52px",
          }}
        >
          {/* ── LEFT: Video panel ── */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={PANEL_TRANSITION}
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: service.color }}
              >
                {/*
                 * VIDEO PLACEHOLDER
                 * Cuando tengas el archivo, reemplaza el <div> de abajo con:
                 *   <video
                 *     src={service.video}
                 *     autoPlay muted loop playsInline
                 *     className="absolute inset-0 w-full h-full object-cover"
                 *   />
                 */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
                  }}
                />

                {/* Big number watermark */}
                <span
                  className="relative z-10 select-none"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(6rem, 14vw, 12rem)",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.1)",
                    letterSpacing: "-0.06em",
                    lineHeight: 1,
                  }}
                >
                  {service.id}
                </span>

                {/* Bottom label */}
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        color: "rgba(255,255,255,0.5)",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Video · {service.tags[0]}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.title}
                    </p>
                  </div>
                  {/* Scroll indicator */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ opacity: activeIndex < services.length - 1 ? 0.5 : 0 }}
                  >
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                      <rect x="6.5" y="0" width="3" height="3" rx="1.5" fill="white" />
                      <line x1="8" y1="6" x2="8" y2="24" stroke="white" strokeWidth="1" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div
            className="relative overflow-hidden"
            style={{ borderLeft: "1px solid var(--border)" }}
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={activeIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ...PANEL_TRANSITION, delay: 0.05 }}
                className="absolute inset-0 flex flex-col justify-center"
                style={{
                  padding: "clamp(2rem, 5vw, 4rem)",
                  backgroundColor: "var(--background)",
                }}
              >
                {/* Service number */}
                <motion.span
                  variants={fadeSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                    display: "block",
                  }}
                >
                  {service.id} — Servicio
                </motion.span>

                {/* Title */}
                <motion.h2
                  variants={fadeSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.27 }}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    color: "var(--text)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.title}
                </motion.h2>

                {/* Divider */}
                <motion.div
                  variants={fadeSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.32 }}
                  style={{
                    width: "36px",
                    height: "2px",
                    backgroundColor: "var(--accent)",
                    marginBottom: "1.5rem",
                  }}
                />

                {/* Description */}
                <motion.p
                  variants={fadeSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.37 }}
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    fontSize: "0.95rem",
                    maxWidth: "400px",
                    marginBottom: "2rem",
                  }}
                >
                  {service.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  variants={fadeSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.42 }}
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.8rem",
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.a
                  href="#contacto"
                  variants={fadeSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.47 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  Solicitar este servicio
                  <span style={{ letterSpacing: 0 }}>→</span>
                </motion.a>

                {/* Bottom-right: scroll hint text */}
                <div
                  className="absolute bottom-7 right-7 flex flex-col items-center gap-2"
                  style={{
                    opacity: activeIndex < services.length - 1 ? 1 : 0,
                    transition: "opacity 0.4s",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.55rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      writingMode: "vertical-rl",
                    }}
                  >
                    Scroll
                  </span>
                  <div
                    style={{
                      width: "1px",
                      height: "32px",
                      backgroundColor: "var(--border)",
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
