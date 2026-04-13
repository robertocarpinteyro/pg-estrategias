"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const services = [
  { value: "branding", label: "Branding Estratégico" },
  { value: "redes", label: "Gestión de Redes Sociales" },
  { value: "contenido", label: "Creación de Contenido" },
  { value: "web", label: "Desarrollo de Páginas Web" },
  { value: "ads", label: "Meta Ads & Google Ads" },
  { value: "promo", label: "Productos Promocionales" },
  { value: "todo", label: "Todo lo anterior" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(json.message ?? "Error al enviar. Intenta de nuevo.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Intenta más tarde.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "14px 16px",
    borderRadius: "2px",
    fontFamily: "var(--font-inter, Inter, sans-serif)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.7rem",
    fontWeight: 600,
    marginBottom: "8px",
    color: "var(--muted)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: "var(--font-space-grotesk)",
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-36 px-5 md:px-8 max-w-7xl mx-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Left — contact info */}
        <FadeIn>
          <span className="num-label">TRABAJEMOS JUNTOS — CONTÁCTANOS</span>
          <h2
            className="font-bold uppercase mt-4 mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(3rem, 7.5vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              color: "var(--text)",
            }}
          >
            Somos todo
            <br />
            <span style={{ color: "var(--accent)" }}>oídos.</span>
          </h2>
          <p
            className="text-sm mb-8"
            style={{ color: "var(--muted)", lineHeight: 1.9, maxWidth: "360px" }}
          >
            Contáctanos para empezar a trabajar en el crecimiento de tu
            negocio. Estamos listos para escucharte.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Clock, text: "Servicio 24/7" },
              { icon: MapPin, text: "Toda la República" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2.5 rounded-sm"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--card-bg)" }}
              >
                <Icon size={13} strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--text)", fontFamily: "var(--font-space-grotesk)" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <a
            href="mailto:contacto@pgestrategias.com"
            className="block text-sm transition-colors duration-200"
            style={{ color: "var(--muted)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            contacto@pgestrategias.com
          </a>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.15}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 gap-5 text-center rounded-sm"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--card-bg)",
                  minHeight: "420px",
                }}
              >
                <CheckCircle
                  size={40}
                  strokeWidth={1.5}
                  style={{ color: "var(--accent)" }}
                />
                <div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: "var(--text)",
                    }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    Te contactaremos muy pronto.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer mt-4"
                  style={{
                    color: "var(--accent)",
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                noValidate
              >
                {/* Hidden honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" style={labelStyle}>Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        required
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" style={labelStyle}>Empresa</label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        placeholder="Nombre de tu negocio"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" style={labelStyle}>¿Qué necesitas?</label>
                    <select
                      id="servicio"
                      name="servicio"
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos sobre tu proyecto…"
                      style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 text-sm font-semibold uppercase tracking-wide text-white rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--accent)",
                      fontFamily: "var(--font-space-grotesk)",
                      letterSpacing: "0.04em",
                      fontSize: "0.9rem",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading")
                        e.currentTarget.style.backgroundColor = "var(--accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--accent)";
                    }}
                  >
                    {status === "loading"
                      ? "Enviando…"
                      : "Pedir cotización gratuita"}
                  </button>

                  {status === "error" && (
                    <div className="flex items-center gap-2">
                      <AlertCircle size={14} style={{ color: "#e53e3e", flexShrink: 0 }} />
                      <p className="text-xs" style={{ color: "#e53e3e" }}>
                        {errorMsg}
                      </p>
                    </div>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
