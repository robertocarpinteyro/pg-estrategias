import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PG Estrategias — Tu Growth Partner para escalar tu negocio local",
  description:
    "Estudio de Crecimiento para negocios locales que ya facturan y quieren escalar. Diseñamos y operamos el sistema que convierte tu inversión en marketing en clientes reales.",
  keywords:
    "growth partner, puebla, estudio de crecimiento, sistema de ventas, meta ads, google ads, landing pages, pymes puebla, marketing puebla, negocios locales",
  openGraph: {
    title: "PG Estrategias — Tu Growth Partner para escalar tu negocio local",
    description:
      "Diseñamos y operamos el sistema que convierte tu inversión en marketing en clientes reales — no en likes. Agenda tu Diagnóstico de Crecimiento gratuito.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
