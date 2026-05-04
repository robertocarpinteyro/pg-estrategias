import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PG Estrategias — Tu equipo interno de crecimiento digital",
  description:
    "Convertimos tu inversión publicitaria en clientes reales, no en likes. Integramos pauta, creatividad, conversación y ecosistema digital bajo un mismo motor.",
  keywords:
    "growth partner, puebla, crecimiento digital, sistema de ventas, meta ads, google ads, landing pages, pymes puebla, marketing puebla, negocios locales",
  openGraph: {
    title: "PG Estrategias — Tu equipo interno de crecimiento digital",
    description:
      "Convertimos tu inversión publicitaria en clientes reales, no en likes. Integramos pauta, creatividad, conversación y ecosistema digital bajo un mismo motor.",
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
      className={`${syne.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
