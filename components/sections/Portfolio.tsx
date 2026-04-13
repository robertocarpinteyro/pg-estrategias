"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tooltipX = useTransform(mouseX, (v) => v - 70);
  const tooltipY = useTransform(mouseY, (v) => v - 30);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <FadeIn delay={0.05 * (index % 2)}>
      <div
        ref={cardRef}
        className="relative overflow-hidden cursor-pointer group"
        style={{
          border: "1px solid var(--border)",
          borderRadius: "2px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Image / Color background */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/9", backgroundColor: project.color }}
        >
          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
            }}
          />
          {/* Texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)",
            }}
          />
          {/* Hover tint */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--accent)", opacity: 0 }}
            animate={{ opacity: hovered ? 0.15 : 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Project number */}
          <span
            className="absolute top-4 right-4 text-white"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              opacity: 0.7,
            }}
          >
            {project.id}
          </span>
          {/* View tooltip */}
          <motion.div
            className="absolute pointer-events-none"
            style={{ x: tooltipX, y: tooltipY }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="block px-4 py-2 text-xs font-semibold uppercase text-white rounded-sm whitespace-nowrap"
              style={{
                backgroundColor: "var(--text)",
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.06em",
              }}
            >
              {project.title}
            </span>
          </motion.div>
        </div>

        {/* Card body */}
        <div
          className="p-5 transition-colors duration-200"
          style={{
            backgroundColor: hovered ? "var(--card-bg)" : "transparent",
          }}
        >
          {/* Services */}
          <p
            className="text-xs uppercase mb-2"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--muted)",
              letterSpacing: "0.08em",
            }}
          >
            {project.services.join(" · ")}
          </p>
          <div className="flex items-center justify-between">
            <h3
              className="font-bold"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "1.15rem",
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              {project.title}
            </h3>
            <span
              className="text-xs"
              style={{ color: "var(--muted)", fontFamily: "var(--font-space-grotesk)" }}
            >
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Portfolio() {
  return (
    <section
      id="trabajo"
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
          <div>
            <span className="num-label">NUESTRO TRABAJO</span>
            <h2
              className="font-bold mt-3 uppercase"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "var(--text)",
              }}
            >
              Tu crecimiento empieza
              <br />
              con{" "}
              <span style={{ color: "var(--accent)" }}>números reales.</span>
            </h2>
          </div>
          <div className="md:ml-auto flex flex-col md:items-end gap-2">
            <p
              className="text-sm"
              style={{
                color: "var(--muted)",
                maxWidth: "300px",
                lineHeight: 1.8,
              }}
            >
              Cada elemento —desde la iluminación del video hasta el botón de
              la web— se mide y se optimiza. Nuestros resultados superan los
              estándares de la industria.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Metrics */}
      <FadeIn delay={0.1}>
        <div
          className="grid grid-cols-1 md:grid-cols-3 mb-14"
          style={{ border: "1px solid var(--border)" }}
        >
          {[
            {
              value: "+950",
              label: "Conversaciones de ventas generadas",
              sub: "Prospectos calificados llegando directamente",
            },
            {
              value: "10.44%",
              label: "CTR promedio de campaña",
              sub: "Impulsado por contenido audiovisual de alta retención",
            },
            {
              value: "↓ CPL",
              label: "Costo por lead optimizado",
              sub: "Eficiencia máxima en cada peso invertido",
            },
          ].map((metric, i) => (
            <div
              key={i}
              style={{
                padding: "1.75rem 2rem",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {metric.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  marginBottom: "0.3rem",
                }}
              >
                {metric.label}
              </p>
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
