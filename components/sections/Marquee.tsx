"use client";

import { motion } from "framer-motion";

const items = [
  "PRODUCCIÓN AUDIOVISUAL",
  "META ADS",
  "GOOGLE ADS",
  "LANDING PAGES",
  "FOTOGRAFÍA CON DRON",
  "ESTRATEGIA 360°",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="py-5 overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 shrink-0"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            {item}
            <span style={{ color: "var(--accent)", fontSize: "0.5rem" }}>●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
