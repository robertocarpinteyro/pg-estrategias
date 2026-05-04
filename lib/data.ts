export const WA_NUMBER = "5212221215051";

export function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const WA_MESSAGES = {
  hero: "Hola PG, vi su sitio y quiero agendar mi sesión de descubrimiento.",
  ignicion: "Hola PG, me interesa el Plan Ignición. ¿Podemos hablar?",
  traccion: "Hola PG, me interesa el Plan Tracción. ¿Podemos hablar?",
  dominio: "Hola PG, me interesa el Plan Dominio. ¿Podemos hablar?",
  faq: "Hola PG, tengo dudas sobre los planes.",
  ctaFinal: "Hola PG, vi su sitio y quiero agendar mi sesión de descubrimiento.",
};

export const sistemaPGPhases = [
  {
    id: "01",
    title: "Diagnóstico",
    description: "Entendemos el negocio, la oferta, el mercado y los números base.",
    icon: "search",
  },
  {
    id: "02",
    title: "Tracción",
    description: "Anuncios pagados y landing pages para generar demanda medible.",
    icon: "zap",
  },
  {
    id: "03",
    title: "Confianza",
    description: "Contenido de alta producción y redes que sostienen la decisión de compra.",
    icon: "shield",
  },
  {
    id: "04",
    title: "Conversión",
    description: "Automatización, IA y embudos que convierten interés en cliente.",
    icon: "target",
  },
  {
    id: "05",
    title: "Optimización",
    description: "Análisis de datos, reseñas y ajuste continuo del sistema.",
    icon: "trending-up",
  },
];

export const pilares = [
  {
    id: "01",
    title: "Paid Media",
    subtitle: "Tráfico Calificado",
    description: "Compramos tráfico de calidad en Meta y Google Ads, optimizado en tiempo real para bajar tu costo por cliente adquirido.",
    icon: "target",
  },
  {
    id: "02",
    title: "Producción Audiovisual",
    subtitle: "Mensaje que Convierte",
    description: "Creatividad persuasiva, no decorativa. Reels, anuncios y videos con copywriting diseñado para mover la aguja de ventas.",
    icon: "film",
  },
  {
    id: "03",
    title: "Mensajería Masiva",
    subtitle: "Captación Directa",
    description: "WhatsApp y email masivos para captar prospectos en caliente y retener a los clientes que aún no terminan de decidir.",
    icon: "message-square",
  },
  {
    id: "04",
    title: "Ecosistema Digital",
    subtitle: "Base Sólida",
    description: "Google Business Profile, WhatsApp Business y landing pages optimizadas. Sin una base funcional, la pauta no convierte.",
    icon: "globe",
  },
];

export const projects = [
  {
    id: "01",
    year: "2025",
    title: "La Marea",
    vertical: "Restaurante",
    services: ["Anuncios", "Creación de Contenido"],
    color: "#D4A574",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776124935/06b5b5888a35b51a45b6de36e891b2eb_rkw5pk.mp4",
  },
  {
    id: "02",
    year: "2025",
    title: "Zenith Motors",
    vertical: "Automotriz",
    services: ["Creación de Contenido", "Ads"],
    color: "#2C3E50",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776101065/Tesla2_vab5kh.mp4",
  },
  {
    id: "03",
    year: "2025",
    title: "Turbos Amador",
    vertical: "Servicios",
    services: ["Diseño Web", "Creación de Contenido"],
    color: "#C0392B",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776125164/7ae5d68a2a2f885d3cf7e4a1cd601d7c_720w_kmzzoi.mp4",
  },
];

export const clients = [
  { name: "Zenith Motors Puebla", status: "Activo" },
  { name: "Genius Vending Puebla", status: "Activo" },
  { name: "Turbos Amador Puebla", status: "Activo" },
  { name: "Terraza Macarena Querétaro", status: "Activo" },
  { name: "La Marea", status: "Activo" },
  { name: "Doroteo Querétaro", status: "Activo" },
];

export const heroImages = [
  {
    id: "001",
    label: "Restaurantes",
    alt: "Nicho restaurantes y CANIRAC",
    color: "#2E5C6A",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776102156/WhatsApp_Video_2026-03-19_at_12.43.20_PM_cbxwhl_r8x6vz.mp4",
  },
  {
    id: "002",
    label: "Automotriz",
    alt: "Nicho automotriz",
    color: "#1A1A1A",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776101065/Tesla2_vab5kh.mp4",
  },
  {
    id: "003",
    label: "Constructoras",
    alt: "Nicho constructoras",
    color: "#3A3A2E",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776101506/AQOOS8OB9cdG9kaqBJD4Gs3Q8rZq1-GKsZfuniEPiPESVZX7OajBffPjTXpxh2rc30fe375ZzfGXVoNT5k5unrVh5Ob-KmS5bydXwKA_dmffop.mp4",
  },
  {
    id: "004",
    label: "Bienes y Raíces",
    alt: "Nicho bienes y raíces",
    color: "#4A3A2E",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776101404/AQME_ZL8JHLV3ZEPxhls8z9L5hACmoU4uZazRTimqGjqvz0TZcr0j5U7UhvrzRatjjIdfDb0fmfT_-u-AHBn736ez7-xz-0BJOAdlE8_dj0apl.mp4",
  },
  {
    id: "005",
    label: "Eventos",
    alt: "Nicho de eventos",
    color: "#2E2A4A",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776101714/Reel_m2ftet.mp4",
  },
  {
    id: "006",
    label: "Servicios",
    alt: "Nicho servicios profesionales",
    color: "#1E2E1E",
    video: "https://res.cloudinary.com/dbqisatil/video/upload/v1776101274/AQPQOFP2CknFh7iZjtFDWRGeqLuiu-wE6o3L4EaKSH4XoEaxIAgPuWhJrRtB7CHuNDnCAdvL-XfWcEP_h32SaGdC627KoUHNg29_hbI_sjrjzm.mp4",
  },
];

export const paquetes = [
  {
    id: "ignicion",
    nombre: "IGNICIÓN",
    descripcion: "Encender el motor digital con disciplina y datos.",
    precio: 11000,
    pauta: 2500,
    destacado: false,
    etiqueta: "Punto de partida",
    idealPara: "Negocios con facturación de $40k a $80k MXN",
    features: [
      { label: "1 Video largo (1 min) + 4 Reels para Meta Ads y orgánico", incluido: true },
      { label: "1 Landing Page enfocada en conversión", incluido: true },
      { label: "500 mensajes masivos mensuales (WhatsApp/email)", incluido: true },
      { label: "Optimización SEO Local y Google Business Profile", incluido: true },
      { label: "Gestión de Meta Ads y Google Ads", incluido: true },
      { label: "Reporte mensual de métricas", incluido: true },
    ],
    whatsappMsg: "Hola PG, me interesa el Plan Ignición. ¿Podemos hablar?",
    notas: [],
  },
  {
    id: "traccion",
    nombre: "TRACCIÓN",
    descripcion: "Ganar velocidad y optimizar el embudo completo.",
    precio: 16000,
    pauta: 4000,
    destacado: true,
    etiqueta: "Más elegido",
    idealPara: "Negocios rentables con facturación de $80k a $300k MXN",
    features: [
      { label: "1 Video largo (1 min) + 7 Reels totales", incluido: true },
      { label: "1 Landing Page + CRM + Hosting 6 meses", incluido: true },
      { label: "1,000 mensajes masivos mensuales", incluido: true },
      { label: "Gestión avanzada de Meta Ads y Google Ads", incluido: true },
      { label: "Sesiones quincenales de estrategia", incluido: true },
      { label: "Dashboard de métricas en tiempo real", incluido: true },
    ],
    whatsappMsg: "Hola PG, me interesa el Plan Tracción. ¿Podemos hablar?",
    notas: [],
  },
  {
    id: "dominio",
    nombre: "DOMINIO",
    descripcion: "Tomar el control del mercado con presencia 360.",
    precio: 27000,
    pauta: 7000,
    destacado: false,
    etiqueta: "Cobertura total",
    idealPara: "Empresas con facturación de $300k+ MXN",
    features: [
      { label: "1 Video largo (1 min) + 10 Reels totales", incluido: true },
      { label: "2 Landing Pages + CRM + Hosting de por vida", incluido: true },
      { label: "2,000 mensajes masivos mensuales", incluido: true },
      { label: "Estrategia 360 en Google y Meta Ads", incluido: true },
      { label: "Email marketing integrado", incluido: true },
      { label: "Reporte semanal con dashboard en vivo", incluido: true },
    ],
    whatsappMsg: "Hola PG, me interesa el Plan Dominio. ¿Podemos hablar?",
    notas: [],
  },
];

export const faqItems = [
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer: "Los primeros indicadores de tracción (leads, conversaciones, tráfico calificado) suelen aparecer en las primeras 4-6 semanas. Resultados sostenidos y optimizados se consolidan a partir del tercer mes.",
  },
  {
    question: "¿Qué incluye exactamente cada plan?",
    answer: "Cada plan tiene un desglose detallado en la sección de precios. En resumen: Ignición enciende el motor digital con pauta básica. Tracción escala el embudo completo con más contenido y seguimiento quincenal. Dominio toma el control total con presencia 360 y reportes semanales.",
  },
  {
    question: "¿Manejan ustedes la pauta o yo pongo mi tarjeta?",
    answer: "Nosotros gestionamos toda la pauta. El costo de pauta ya está incluido en tu inversión mensual. Si quieres invertir más para acelerar resultados, simplemente lo sumamos sobre la base incluida.",
  },
  {
    question: "¿Hay permanencia mínima?",
    answer: "Sí, todos los planes operan con un compromiso mínimo de 3 meses. Esto nos permite implementar el sistema completo, medir resultados reales y optimizar con datos suficientes.",
  },
  {
    question: "¿Qué pasa si no veo resultados?",
    answer: "Si al cierre del trimestre las métricas no se movieron por causas atribuibles a nuestra ejecución, ofrecemos un mes adicional sin costo de honorarios para ajustar y demostrar avance. Medimos todo desde el día uno.",
  },
  {
    question: "¿Trabajan con cualquier giro?",
    answer: "Nos especializamos en negocios locales que ya facturan y quieren escalar: restaurantes, constructoras, servicios profesionales, bienes raíces, automotriz, entre otros. Si tu negocio depende de clientes locales, probablemente somos un buen fit.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí, puedes escalar a un plan superior en cualquier momento. La transición es inmediata y ajustamos tu estrategia al nuevo alcance.",
  },
  {
    question: "¿En cuánto tiempo lanzan la primera campaña?",
    answer: "De la firma a tu primera campaña activa en solo 14 días. Ese es nuestro compromiso de onboarding. Rápido, sin burocracia.",
  },
];
