import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "INTEGRA — Sistemas para la continuidad operativa",
  description:
    "Auditamos y ejecutamos sistemas operativos para empresas que han perdido el control del margen. Recupera visibilidad, eficiencia y rentabilidad con arquitectura de procesos y automatización digital.",
  keywords: [
    "auditoría operativa",
    "sistemas operativos empresariales",
    "automatización de procesos",
    "control de margen",
    "eficiencia operativa",
    "consultoría de operaciones",
    "arquitectura de sistemas",
  ],
  authors: [{ name: "INTEGRA" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "INTEGRA — Sistemas para la continuidad operativa",
    description:
      "Auditamos y ejecutamos sistemas operativos para empresas que han perdido el control del margen. Integridad operativa = Rentabilidad.",
    type: "website",
    siteName: "INTEGRA",
  },
  twitter: {
    card: "summary_large_image",
    title: "INTEGRA — Sistemas para la continuidad operativa",
    description:
      "Auditamos y ejecutamos sistemas operativos para empresas que han perdido el control del margen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
