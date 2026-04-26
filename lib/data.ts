export const WA_NUMBER = "5212221215051";

export function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const WA_MESSAGES = {
  hero: "Hola PG, vi su sitio y quiero agendar mi Diagnóstico de Crecimiento gratuito.",
  cimiento: "Hola PG, me interesa el Plan Cimiento. ¿Podemos hablar?",
  cimientoPlus: "Hola PG, me interesa el Plan Cimiento Plus. ¿Podemos hablar?",
  traccion: "Hola PG, me interesa el Plan Tracción. ¿Podemos hablar?",
  aceleracion: "Hola PG, me interesa el Plan Aceleración. ¿Podemos hablar?",
  dominio: "Hola PG, me interesa el Plan Dominio. ¿Podemos hablar?",
  faq: "Hola PG, tengo dudas sobre los planes.",
  ctaFinal: "Hola PG, vi su sitio y quiero agendar mi Diagnóstico de Crecimiento gratuito.",
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

export const capacidades = [
  {
    id: "01",
    title: "Estrategia y datos.",
    description: "Diagnóstico, buyer persona, benchmarks, parrilla de contenido y medición continua. Cada decisión sustentada.",
  },
  {
    id: "02",
    title: "Producción audiovisual con criterio.",
    description: "Video, fotografía y diseño con estándar de estudio. Cada pieza pensada para un punto del embudo, no para llenar un calendario.",
  },
  {
    id: "03",
    title: "Pauta y tecnología.",
    description: "Meta Ads, Google Ads, mensajería masiva, IA y embudos automatizados. Stack moderno, integrado y medible.",
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
    id: "cimiento",
    categoria: "Construir bases",
    nombre: "Plan Cimiento",
    precio: 7500,
    pauta: null,
    destacado: false,
    etiqueta: null,
    descripcion: "Bases digitales con criterio: estrategia, activos y contenido para construir presencia.",
    whatsappMsg: WA_MESSAGES.cimiento,
    features: [
      { label: "Estrategia. Buyer persona, cliente ideal, benchmarks. Estrategia digital personalizada.", incluido: true },
      { label: "Activos digitales. Setup u optimización de redes sociales, cuentas publicitarias y Google Business Profile. Landing page con SEO.", incluido: true },
      { label: "Producción audiovisual. 4 horas mensuales. Incluye video de bienvenida y 1 video para Meta Ads.", incluido: true },
      { label: "Operación de contenido. 10 piezas mensuales en redes (artes, carruseles, video).", incluido: true },
      { label: "Medición. Reporte mensual y reunión mensual de seguimiento.", incluido: true },
    ],
    notas: ["No incluye hosting ni dominio"],
  },
  {
    id: "cimiento-plus",
    categoria: "Construir bases",
    nombre: "Plan Cimiento Plus",
    precio: 11000,
    pauta: null,
    destacado: true,
    etiqueta: "Recomendado para iniciar",
    descripcion: "Bases sólidas con identidad de marca y mayor ritmo de contenido para acelerar el inicio.",
    whatsappMsg: WA_MESSAGES.cimientoPlus,
    features: [
      { label: "Todo lo de Plan Cimiento, más:", incluido: true },
      { label: "Branding. Diseño básico de logo y paleta. Diseño de folletos y tarjetas.", incluido: true },
      { label: "Producción audiovisual ampliada. 6 horas mensuales. Incluye 2 videos para Meta Ads.", incluido: true },
      { label: "Operación de contenido ampliada. 15 piezas mensuales (5 reels, 5 carruseles, 5 artes).", incluido: true },
      { label: "Seguimiento más cercano. Reuniones quincenales.", incluido: true },
    ],
    notas: ["No incluye hosting ni dominio"],
  },
  {
    id: "traccion",
    categoria: "Activar crecimiento",
    nombre: "Plan Tracción",
    precio: 11000,
    pauta: 2500,
    destacado: false,
    etiqueta: "Promoción",
    descripcion: "El primer motor de adquisición: pauta, contenido y conversión integrados.",
    whatsappMsg: WA_MESSAGES.traccion,
    features: [
      { label: "Estrategia. Buyer persona, benchmarks, estrategia digital y publicitaria sustentada en estudios. Estrategia orgánica y parrilla de contenido.", incluido: true },
      { label: "Activos digitales. Setup u optimización de redes, cuentas publicitarias y Google Business Profile.", incluido: true },
      { label: "Producción audiovisual. 1 sesión de hasta 6 horas mensuales.", incluido: true },
      { label: "Operación de contenido. 12 piezas mensuales (4 artes, 3 carruseles, 3 reels).", incluido: true },
      { label: "Pauta y conversión. Gestión y creación de Meta Ads y Google Ads. Mensajería masiva hasta 850 mensajes/mes. Programas de lealtad y posicionamiento orgánico.", incluido: true },
      { label: "Medición. Reuniones quincenales.", incluido: true },
    ],
    notas: [],
  },
  {
    id: "aceleracion",
    categoria: "Activar crecimiento",
    nombre: "Plan Aceleración",
    precio: 14000,
    pauta: 3000,
    destacado: true,
    etiqueta: "Recomendado",
    descripcion: "Motor escalado para multiplicar resultados con más inversión publicitaria y conversión ampliada.",
    whatsappMsg: WA_MESSAGES.aceleracion,
    features: [
      { label: "Todo lo de Plan Tracción, más:", incluido: true },
      { label: "Operación de contenido reforzada. 12 piezas mensuales (4 artes, 4 carruseles, 4 reels).", incluido: true },
      { label: "Mensajería masiva ampliada. Hasta 1,400 mensajes/mes.", incluido: true },
    ],
    notas: [],
  },
  {
    id: "dominio",
    categoria: "Activar crecimiento",
    nombre: "Plan Dominio",
    precio: 27000,
    pauta: 7000,
    destacado: false,
    etiqueta: "Más completo",
    descripcion: "Sistema integral de crecimiento para liderar tu mercado digital local.",
    whatsappMsg: WA_MESSAGES.dominio,
    features: [
      { label: "Todo lo de Plan Aceleración, más:", incluido: true },
      { label: "Producción audiovisual premium. 2 sesiones de hasta 6 horas mensuales.", incluido: true },
      { label: "Operación de contenido premium. 20 piezas mensuales (7 artes, 5 carruseles, 8 reels).", incluido: true },
      { label: "Conversión avanzada. Email marketing y mensajería masiva hasta 2,500 mensajes/mes.", incluido: true },
      { label: "Pauta avanzada. Estrategia publicitaria avanzada en Google y Meta Ads.", incluido: true },
    ],
    notas: [],
  },
];

export const faqItems = [
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer: "Dependiendo del plan y tu situación actual, los primeros indicadores de tracción (leads, conversaciones, tráfico calificado) suelen aparecer en las primeras 4-6 semanas. Resultados sostenidos y optimizados se consolidan a partir del tercer mes.",
  },
  {
    question: "¿Qué incluye exactamente cada plan?",
    answer: "Cada plan tiene un desglose detallado en la sección de precios. En resumen: los planes de Tier 1 (Cimiento) se enfocan en construir presencia digital sólida, mientras que los de Tier 2 (Tracción en adelante) incluyen pauta publicitaria gestionada y estrategias de adquisición activa de clientes.",
  },
  {
    question: "¿Manejan ustedes la pauta o yo pongo mi tarjeta?",
    answer: "Nosotros gestionamos toda la pauta. En los planes avanzados, el costo de pauta ya está incluido en tu inversión mensual. Si quieres invertir más para acelerar resultados, simplemente lo sumamos sobre la base incluida.",
  },
  {
    question: "¿Hay permanencia mínima?",
    answer: "Sí, todos los planes operan con un compromiso mínimo de 3 meses para ejecutar el Sistema PG correctamente. Esto nos permite implementar el sistema completo, medir resultados reales y optimizar.",
  },
  {
    question: "¿Qué pasa si no veo resultados?",
    answer: "Nos sentamos contigo, revisamos los datos y ajustamos la estrategia. No desaparecemos ni damos excusas. Si el sistema no está generando lo esperado, lo arreglamos. Por eso medimos todo desde el día uno.",
  },
  {
    question: "¿Trabajan con cualquier giro?",
    answer: "Nos especializamos en negocios locales que ya facturan y quieren escalar: restaurantes, constructoras, servicios profesionales, bienes raíces, automotriz, entre otros. Si tu negocio depende de clientes locales, probablemente somos un buen fit.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí, puedes escalar a un plan superior en cualquier momento. La transición es inmediata y ajustamos tu estrategia al nuevo alcance. Bajar de plan es posible después de cumplir tu periodo de compromiso.",
  },
  {
    question: "¿Por qué no muestran el costo de hosting y dominio?",
    answer: "Porque varía según las necesidades de cada proyecto. Un dominio .com.mx cuesta diferente a un .com, y el hosting depende del tráfico esperado. Te damos la cotización exacta en tu Diagnóstico de Crecimiento gratuito.",
  },
];
