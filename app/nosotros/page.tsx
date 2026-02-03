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
                            De la recuperación al{" "}
                            <span className="text-[#C8C6D7]">alto rendimiento</span> operativo.
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
                            La mayoría de las organizaciones no están rotas. Están desordenadas.
                            Operan bajo presión constante, normalizan la urgencia y confunden
                            sacrificio con compromiso.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-[#C8C6D7]/20" />

            {/* Core Belief Section */}
            <section className="relative bg-[#4A4063] py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#F5F5F5]/60 uppercase mb-8">
                            Nuestra Premisa
                        </span>

                        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] font-semibold leading-relaxed mb-8">
                            "No puede existir alto rendimiento sin salud operativa."
                        </blockquote>

                        <p className="text-[#F5F5F5]/70 text-lg max-w-2xl mx-auto">
                            En ese estado de desorden, las decisiones dejan de ser técnicas y
                            se vuelven reactivas. El margen se erosiona. El equipo se desgasta.
                            La operación sobrevive, pero no se sostiene.
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
                            Recuperar antes de escalar.
                        </h2>

                        <p className="text-lg text-white/60 max-w-3xl mb-12">
                            La recuperación no es un retroceso. Es una fase técnica. Así como un
                            sistema colapsado necesita estabilización antes de optimización, una
                            organización necesita recuperar control antes de aspirar a crecer.
                        </p>

                        {/* Principles Grid */}
                        <div className="grid md:grid-cols-2 gap-0 border border-[#C8C6D7]/20 divide-y md:divide-y-0 md:divide-x divide-[#C8C6D7]/20">
                            {[
                                {
                                    title: "Ver los números sin autoengaño",
                                    description: "Claridad brutal sobre la realidad financiera y operativa del negocio."
                                },
                                {
                                    title: "Reconocer los puntos de fuga",
                                    description: "Identificar dónde se pierde margen, tiempo y capacidad de ejecución."
                                },
                                {
                                    title: "Detener la improvisación crónica",
                                    description: "Reemplazar el heroísmo diario por procesos predecibles."
                                },
                                {
                                    title: "Volver a operar con criterio",
                                    description: "Decisiones basadas en datos, no en urgencias."
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
                            <span className="inline-block font-mono text-sm text-[#4A4063] font-bold mb-4">
                                01
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Rigor antes que motivación.
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-4">
                                Integra no trabaja desde la inspiración. Trabaja desde el rigor.
                            </p>
                            <p className="text-white/50 leading-relaxed">
                                No prometemos cambios rápidos ni resultados milagrosos. Diseñamos
                                estructuras que obligan a la operación a comportarse de forma sana
                                y predecible.
                            </p>
                            <div className="mt-6 space-y-2 font-mono text-sm text-[#C8C6D7]">
                                <p>→ Medimos antes de opinar.</p>
                                <p>→ Estructuramos antes de optimizar.</p>
                                <p>→ Ejecutamos antes de escalar.</p>
                            </div>
                        </motion.div>

                        {/* Humanizar para rentabilizar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            <span className="inline-block font-mono text-sm text-[#4A4063] font-bold mb-4">
                                02
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Humanizar para rentabilizar.
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-4">
                                La salud del equipo no es un beneficio colateral. Es una variable económica.
                            </p>
                            <p className="text-white/50 leading-relaxed">
                                Un equipo con claridad comete menos errores, cuida el costo, reduce
                                rotación y protege el margen. El alto rendimiento no se impone con
                                discurso. Se diseña.
                            </p>
                            <div className="mt-6 space-y-2 font-mono text-sm text-[#C8C6D7]">
                                <p>→ Reducir carga cognitiva.</p>
                                <p>→ Eliminar fricción innecesaria.</p>
                                <p>→ Actuar con claridad bajo presión.</p>
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
                            Transformar operaciones no es solo ajustar números. Es rediseñar la
                            forma en que las personas piensan, deciden y ejecutan dentro del sistema.
                        </h2>

                        <p className="text-xl text-[#C8C6D7] font-semibold mb-12">
                            "La integridad operativa es rentable."
                        </p>

                        {/* CTA */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/diagnostico"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A4063] text-[#F5F5F5] font-semibold text-lg rounded-full
                           transition-all duration-300 ease-out
                           hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/20
                           active:translate-y-0"
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
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
