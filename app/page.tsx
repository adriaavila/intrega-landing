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

        {/* EL DIAGNÓSTICO Section */}
        <section id="diagnostico" className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section label */}
              <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                El punto de partida
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12">
                Un destino pierde identidad cuando su operación no la sostiene.
              </h2>

              {/* Diagnostic grid with hover states */}
              <div className="grid gap-0 border border-[#C8C6D7]/20 divide-y divide-[#C8C6D7]/20">
                {[
                  { num: "01", label: "RENTABILIDAD", text: "Mermas, costes y procesos débiles reducen la capacidad de ofrecer una experiencia sostenible." },
                  { num: "02", label: "IDENTIDAD", text: "La tradición del territorio no siempre se refleja en productos, servicio y experiencia." },
                  { num: "03", label: "EXPERIENCIA", text: "La calidad varía entre establecimientos y dificulta construir una ruta confiable." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-6 p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.02] group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <span className="font-mono text-sm text-[#6D28D9] font-semibold">
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
                Transformación operativa
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16">
                Cómo convertimos identidad en experiencia.
              </h2>
              <div className="space-y-0 divide-y divide-[#C8C6D7]/10">
                {[
                  { number: "01", title: "Dirección e intervención operativa", desc: "Mejoramos producción, servicio, costes, personas y gestión para que cada negocio exprese su identidad." },
                  { number: "02", title: "Coherencia territorial", desc: "Articulamos estándares comunes sin volver idénticos a los establecimientos del destino." },
                  { number: "03", title: "Preparación Sello Valor", desc: "Documentamos mejoras y verificamos evidencias frente a criterios privados en desarrollo; el reconocimiento no es automático." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex items-baseline gap-6 md:gap-8 py-8 group cursor-default"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <span className="font-mono text-lg md:text-xl text-[#6D28D9] font-bold tabular-nums">
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

        {/* NUESTRO COMPROMISO Section - Full Authority Background */}
        <section id="manifiesto" className="relative bg-[#6D28D9] py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section label */}
              <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#F5F5F5]/60 uppercase mb-8">
                Nuestro compromiso
              </span>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] font-semibold leading-relaxed mb-12">
                "La identidad no se proclama: debe sostenerse en la forma de operar y servir."
              </blockquote>

              {/* Key points */}
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-12">
                {[
                  "Operaciones empresariales preparadas para mejorar productividad y coherencia.",
                  "Establecimientos diversos articulados por estándares compartidos.",
                  "Evaluación Sello Valor pendiente de criterios y verificaciones formales."
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
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5F5F5] text-[#6D28D9] font-semibold text-lg rounded-full
                           transition-all duration-300 ease-out
                           hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/20
                           active:translate-y-0"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conversemos sobre la transformación
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

        <section id="ecosistema" className="relative border-t border-white/10 bg-[#121118] px-4 py-20 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#C8C6D7]">Una capacidad dentro del ecosistema</p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">Mejoramos los negocios que dan vida al destino.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              Convertimos la identidad gastronómica de un destino en experiencias turísticas de valor. INTEGRA mejora cómo funcionan
              los negocios, Sello Valor prepara la evaluación de sus estándares y VIAJA muestra las rutas al visitante.
              Todo bajo Rei Sánchez | Dirección Ejecutiva.
            </p>
            <div className="mt-9 grid gap-5 text-white/70 md:grid-cols-3">
              <div className="border-t border-white/20 pt-4"><strong className="block text-white">INTEGRA</strong> Transformación de producción, servicio, equipos, margen y experiencia.</div>
              <div className="border-t border-white/20 pt-4"><strong className="block text-white">Sello Valor</strong> Estándares privados propuestos, con evaluación pendiente. No es aval ni certificación oficial.</div>
              <div className="border-t border-white/20 pt-4"><strong className="block text-white">VIAJA</strong> Rutas y experiencias de un destino preparado. Colonia Tovar es el demostrador actual.</div>
            </div>
            <div className="mt-9 flex flex-wrap gap-5 text-sm font-semibold">
              <a href="https://reisanchez-direccion-ejecutiva.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[#C8C6D7] underline underline-offset-4">Quién dirige el sistema</a>
              <a href="https://viaja-ven.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#C8C6D7] underline underline-offset-4">Explorar VIAJA (demo)</a>
            </div>
          </div>
        </section>
      </OperationsScanner>
    </main>
  );
}
