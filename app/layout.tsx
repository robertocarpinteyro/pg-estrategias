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
  title: "PG Estrategias — Sistema de Ventas Digitales · Puebla",
  description:
    "Hacemos que tu teléfono no deje de sonar. Sistema de ventas digitales para restaurantes, constructoras y servicios profesionales en Angelópolis, Zavaleta y Cholula.",
  keywords:
    "sistema de ventas digitales, puebla, angelópolis, zavaleta, cholula, meta ads, google ads, landing pages, pymes puebla, marketing puebla",
  openGraph: {
    title: "PG Estrategias — Sistema de Ventas Digitales · Puebla",
    description:
      "No marketing. Un sistema que pone prospectos reales en tu WhatsApp, mes a mes. Para PYMES en Puebla.",
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
