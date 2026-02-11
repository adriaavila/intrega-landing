"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Nosotros() {
    return (
        <main className="relative bg-[#0a0a0a] min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                            Nosotros
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            Socios estratégicos que{" "}
                            <span className="text-[#C8C6D7]">salvan tu operación.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
                            INTEGRA ayuda a empresas de hotelería, restaurantes, tiendas y cadenas
                            de retail a modernizar sus procesos y sistemas. Nos enfocamos en que tus
                            operaciones sean más ágiles, seguras y fáciles de gestionar.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-[#C8C6D7]/20" />

            {/* Core Belief Section */}
            <section className="relative bg-[#6D28D9] py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#F5F5F5]/60 uppercase mb-8">
                            Nuestra Filosofía
                        </span>

                        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] font-semibold leading-relaxed mb-8">
                            "Tu negocio merece funcionar sin tropiezos todos los días."
                        </blockquote>

                        <p className="text-[#F5F5F5]/70 text-lg max-w-2xl mx-auto">
                            No somos otra agencia de software. Somos operadores que entienden
                            tu industria, tus dolores y tus urgencias. Diseñamos soluciones
                            que funcionan en el mundo real, no en presentaciones.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                            Nuestro Enfoque
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12">
                            Lo que nos hace diferentes.
                        </h2>

                        <p className="text-lg text-white/60 max-w-3xl mb-12">
                            Conocemos tu industria. Sabemos lo que es lidiar con rotación de personal,
                            inventarios que no cuadran y sistemas que no se hablan. Por eso nuestras
                            soluciones están diseñadas para resolver problemas reales.
                        </p>

                        {/* Principles Grid */}
                        <div className="grid md:grid-cols-2 gap-0 border border-[#C8C6D7]/20 divide-y md:divide-y-0 md:divide-x divide-[#C8C6D7]/20">
                            {[
                                {
                                    title: "Entendemos tu operación",
                                    description: "Nos metemos en la cocina, en el almacén, en el día a día. No diagnosticamos desde afuera."
                                },
                                {
                                    title: "Soluciones prácticas, no teoría",
                                    description: "Cada recomendación viene con un plan de ejecución claro y medible."
                                },
                                {
                                    title: "Tecnología que sirve",
                                    description: "No implementamos herramientas de moda. Implementamos lo que tu equipo va a usar."
                                },
                                {
                                    title: "Resultados medibles",
                                    description: "Reducción de costos, tiempos y errores que puedes ver en los números."
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.02] group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#C8C6D7] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-[#C8C6D7]/20" />

            {/* Differentiators */}
            <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Rigor antes que motivación */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-block font-mono text-sm text-[#6D28D9] font-bold mb-4">
                                01
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Experiencia en tu industria.
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-4">
                                Años trabajando con hoteles, restaurantes y retail nos dieron algo que no se aprende en libros.
                            </p>
                            <p className="text-white/50 leading-relaxed">
                                Conocemos los ciclos de temporada, la presión del servicio en vivo
                                y lo que significa que un sistema falle en hora pico. Por eso nuestras
                                soluciones están diseñadas para resistir la realidad.
                            </p>
                            <div className="mt-6 space-y-2 font-mono text-sm text-[#C8C6D7]">
                                <p>→ Hablamos tu idioma, no jerga técnica.</p>
                                <p>→ Soluciones que funcionan desde el día uno.</p>
                                <p>→ Acompañamiento real, no solo entrega de documentos.</p>
                            </div>
                        </motion.div>

                        {/* Humanizar para rentabilizar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            <span className="inline-block font-mono text-sm text-[#6D28D9] font-bold mb-4">
                                02
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Tu equipo es parte de la solución.
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-4">
                                Las mejores herramientas fracasan si el equipo no las adopta.
                            </p>
                            <p className="text-white/50 leading-relaxed">
                                Diseñamos la transición pensando en las personas que van a usar
                                los sistemas cada día. Menos estrés, menos errores, más autonomía.
                                Un equipo empoderado es un equipo rentable.
                            </p>
                            <div className="mt-6 space-y-2 font-mono text-sm text-[#C8C6D7]">
                                <p>→ Capacitación práctica, no manuales eternos.</p>
                                <p>→ Herramientas que simplifican, no complican.</p>
                                <p>→ Soporte continuo post-implementación.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Conviction Section */}
            <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8 border-t border-[#C8C6D7]/20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-8">
                            Nuestra Convicción
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-relaxed">
                            No buscamos clientes. Buscamos socios que quieran transformar
                            su operación de verdad.
                        </h2>

                        <p className="text-xl text-[#C8C6D7] font-semibold mb-12">
                            "Tu paz mental operativa es nuestro KPI."
                        </p>

                        {/* CTA */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#6D28D9] text-[#F5F5F5] font-semibold text-lg rounded-full
                           transition-all duration-300 ease-out
                           hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/20
                           active:translate-y-0"
                            >
                                Hablemos de tu negocio
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
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
