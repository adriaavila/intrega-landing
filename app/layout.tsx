import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { Analytics } from "@vercel/analytics/next";

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

export const viewport: Viewport = {
  themeColor: "#4A4063",
};

export const metadata: Metadata = {
  title: {
    default: "INTEGRA | Consultoría y Servicios para Hospitalidad & Retail",
    template: "%s | INTEGRA",
  },
  description:
    "Diseño y optimización de modelos de negocio con integridad operativa, enfoque en rentabilidad y control.",
  keywords: [
    "hospitalidad",
    "retail",
    "consultoría operativa",
    "gestión de restaurantes",
    "optimización de procesos",
    "auditoría de servicios",
    "rentabilidad hotelera",
    "control de costos",
  ],
  authors: [{ name: "Integra" }],
  creator: "Integra",
  publisher: "Integra",
  metadataBase: new URL("https://intrega-landing.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INTEGRA | Consultoría y Servicios para Hospitalidad & Retail",
    description:
      "Diseño y optimización de modelos de negocio con integridad operativa, enfoque en rentabilidad y control.",
    url: "https://intrega-landing.vercel.app/",
    siteName: "INTEGRA",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INTEGRA | Consultoría y Servicios para Hospitalidad & Retail",
    description:
      "Diseño y optimización de modelos de negocio con integridad operativa, enfoque en rentabilidad y control.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
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
        <ServiceWorkerRegistration />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
