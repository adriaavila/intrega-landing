import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

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
    default: "Consultoría y Servicios para Hospitalidad & Retail",
    template: "%s | Integra",
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
    title: "Consultoría y Servicios para Hospitalidad & Retail",
    description:
      "Diseño y optimización de modelos de negocio con integridad operativa, enfoque en rentabilidad y control.",
    url: "https://intrega-landing.vercel.app/",
    siteName: "Integra",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og/integra-hospitality-retail.png",
        width: 1200,
        height: 630,
        alt: "Integra - Consultoría y Servicios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría y Servicios para Hospitalidad & Retail",
    description:
      "Diseño y optimización de modelos de negocio con integridad operativa, enfoque en rentabilidad y control.",
    images: ["/og/integra-hospitality-retail.png"],
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
      </body>
    </html>
  );
}
