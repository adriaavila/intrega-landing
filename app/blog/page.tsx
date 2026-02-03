"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
    return (
        <main className="relative bg-[#0a0a0a] min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                            Blog
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            Insights Operativos
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
                            Próximamente: análisis, casos de estudio y reflexiones sobre
                            operaciones, sistemas y alto rendimiento.
                        </p>

                        {/* Coming Soon Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#4A4063]/20 border border-[#4A4063]/40 rounded-full">
                            <span className="w-2 h-2 bg-[#C8C6D7] rounded-full animate-pulse" />
                            <span className="font-mono text-sm text-[#C8C6D7]">
                                En desarrollo
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 px-4 md:px-8 border-t border-[#C8C6D7]/20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-white/60 text-lg mb-8">
                            ¿Quieres saber más sobre cómo trabajamos? Conoce nuestro manifiesto.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/nosotros"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A4063] text-[#F5F5F5] font-semibold text-lg rounded-full
                           transition-all duration-300 ease-out
                           hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/20
                           active:translate-y-0"
                            >
                                Conocer Nosotros
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
