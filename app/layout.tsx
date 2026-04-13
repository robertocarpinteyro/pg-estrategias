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
  title: "PG Estrategias — Agencia de Marketing Digital",
  description:
    "Creamos estrategias de marketing digital que te posicionan, conectan con tu audiencia y generan resultados medibles. Puebla · Querétaro · CDMX.",
  keywords:
    "marketing digital, agencia, branding, redes sociales, contenido, meta ads, google ads, puebla, queretaro",
  openGraph: {
    title: "PG Estrategias — Agencia de Marketing Digital",
    description:
      "Haz que tu marca sea imposible de ignorar. Estrategias personalizadas, creatividad y resultados reales.",
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
