"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { faqItems, waLink, WA_MESSAGES } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

function FAQItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 cursor-pointer text-left"
        style={{ background: "none", border: "none" }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "0.92rem",
            fontWeight: 600,
            color: open ? "#F5F5F5" : "rgba(245,245,245,0.75)",
            letterSpacing: "-0.01em",
            paddingRight: "1rem",
            transition: "color 0.2s",
          }}
        >
          {item.question}
        </span>
        <div
          style={{
            width: "28px",
            height: "28px",
            border: `1.5px solid ${open ? "rgba(166,226,46,0.4)" : "var(--border)"}`,
            backgroundColor: open ? "rgba(166,226,46,0.1)" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          {open ? (
            <Minus size={13} strokeWidth={2} style={{ color: "#A6E22E" }} />
          ) : (
            <Plus size={13} strokeWidth={2} style={{ color: "var(--muted)" }} />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.85,
                paddingBottom: "1.5rem",
                maxWidth: "560px",
                fontFamily: "var(--font-inter)",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <FadeIn>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "#A6E22E",
              textTransform: "uppercase",
            }}
          >
            Preguntas Frecuentes
          </span>
          <h2
            className="font-bold uppercase mt-3 mb-6"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#F5F5F5",
            }}
          >
            ¿Tienes{" "}
            <span style={{ color: "#A6E22E" }}>dudas?</span>
          </h2>
          <p
            className="text-sm mb-8"
            style={{
              color: "var(--muted)",
              lineHeight: 1.85,
              maxWidth: "320px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Si no encuentras tu respuesta aquí, escríbenos directo por WhatsApp. Respondemos rápido.
          </p>
          <a
            href={waLink(WA_MESSAGES.faq)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid var(--border)",
              color: "#F5F5F5",
              fontFamily: "var(--font-syne)",
              letterSpacing: "0.08em",
              textDecoration: "none",
              fontSize: "0.7rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-border)";
              e.currentTarget.style.color = "#A6E22E";
              e.currentTarget.style.backgroundColor = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "#F5F5F5";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Preguntar por WhatsApp →
          </a>
        </FadeIn>

        {/* Right — accordion */}
        <div>
          {faqItems.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
