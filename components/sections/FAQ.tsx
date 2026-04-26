"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { faqItems, waLink, WA_MESSAGES } from "@/lib/data";
import { ChevronDown } from "lucide-react";

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 cursor-pointer text-left"
        style={{ background: "none", border: "none" }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            paddingRight: "1rem",
          }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown
            size={18}
            strokeWidth={2}
            style={{ color: "var(--accent)" }}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                paddingBottom: "1.25rem",
                maxWidth: "600px",
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
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            Preguntas Frecuentes
          </span>
          <h2
            className="font-bold uppercase mt-3 mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            ¿Tienes{" "}
            <span style={{ color: "var(--accent)" }}>dudas?</span>
          </h2>
          <p
            className="text-sm mb-8"
            style={{ color: "var(--muted)", lineHeight: 1.8, maxWidth: "340px" }}
          >
            Si no encuentras tu respuesta aquí, escríbenos directo por WhatsApp.
          </p>
          <a
            href={waLink(WA_MESSAGES.faq)}
            target="_blank"
            rel="noopener noreferrer"
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
            Preguntar por WhatsApp →
          </a>
        </FadeIn>

        {/* Right - Accordion */}
        <div>
          {faqItems.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
