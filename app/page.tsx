"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load the heavy OperationsScanner component
const OperationsScanner = dynamic(
  () => import("@/components/OperationsScanner").then(mod => ({ default: mod.OperationsScanner })),
  {
    ssr: false, // Disable SSR for this heavy component
    loading: () => (
      <div className="h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="font-mono text-sm tracking-[0.3em] text-white/60 uppercase">INTEGRA</span>
          <div className="w-48 h-[2px] bg-white/10 overflow-hidden">
            <div className="h-full bg-white/80 animate-pulse" style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a]">
      {/* Scrollytelling Experience - Hero with animation */}
      <OperationsScanner>
        {/* Content Sections - Normal page flow below hero animation */}

        {/* EL PROBLEMA / DIAGNÓSTICO Section */}
        <section id="radiografia" className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section label */}
              <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                Radiografía
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12">
                Sin sistema, el crecimiento solo amplifica el desorden.
              </h2>

              {/* Diagnostic grid with hover states */}
              <div className="grid gap-0 border border-[#C8C6D7]/20 divide-y divide-[#C8C6D7]/20">
                {[
                  { num: "01", label: "MARGEN", text: "El beneficio se diluye sin rastro." },
                  { num: "02", label: "RIESGO", text: "La operación depende de personas, no de procesos." },
                  { num: "03", label: "DATOS", text: "Decisiones tardías basadas en información incompleta." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-6 p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.02] group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <span className="font-mono text-sm text-[#4A4063] font-semibold">
                      {item.num}
                    </span>
                    <div>
                      <span className="font-mono text-sm text-[#C8C6D7] tracking-wider block mb-2">
                        {item.label}
                      </span>
                      <span className="text-lg md:text-xl text-white/70 group-hover:text-white/90 transition-colors">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-[#C8C6D7]/20" />

        {/* SERVICIOS TÉCNICOS Section */}
        <section id="servicios" className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section label */}
              <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                Servicios Técnicos
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16">
                Sistemas Reales.
              </h2>
              <div className="space-y-0 divide-y divide-[#C8C6D7]/10">
                {[
                  { number: "01", title: "Auditoría Operativa", desc: "Visibilidad real de P&L y flujos de caja." },
                  { number: "02", title: "Arquitectura de Sistemas", desc: "Procesos lean y automatización digital." },
                  { number: "03", title: "Ejecución Directa", desc: "Implementación junto al equipo hasta lograr la continuidad." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex items-baseline gap-6 md:gap-8 py-8 group cursor-default"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <span className="font-mono text-lg md:text-xl text-[#4A4063] font-bold tabular-nums">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#C8C6D7] transition-colors duration-300">
                        {step.title}
                      </span>
                      <p className="text-lg md:text-xl text-white/50 mt-2">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MANIFIESTO Section - Full Authority Background */}
        <section id="manifiesto" className="relative bg-[#4A4063] py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section label */}
              <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#F5F5F5]/60 uppercase mb-8">
                El Manifiesto
              </span>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] font-semibold leading-relaxed mb-12">
                "No puede existir alto rendimiento sin salud operativa."
              </blockquote>

              {/* Key points */}
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-12">
                {[
                  "Rigor antes que motivación.",
                  "Recuperar control antes de escalar.",
                  "La integridad operativa es rentabilidad."
                ].map((point, i) => (
                  <motion.p
                    key={i}
                    className="text-[#F5F5F5]/70 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    {point}
                  </motion.p>
                ))}
              </div>

              {/* CTA Button - Inverted colors */}
              <motion.a
                href="/diagnostico"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5F5F5] text-[#4A4063] font-semibold text-lg rounded-full
                           transition-all duration-300 ease-out
                           hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/20
                           active:translate-y-0"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar diagnóstico operativo
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Section Manifiesto ends here - Footer is now in layout.tsx */}
      </OperationsScanner>
    </main>
  );
}
