"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { resources } from "../../lib/data";

export default function Recursos() {
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
                            Recursos
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            Herramientas y Guías
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
                            Recursos técnicos, plantillas y frameworks para optimizar tu
                            operación.
                        </p>
                    </motion.div>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <Link href={`/recursos/${resource.slug}`} className="block h-full">
                                    <div className="h-full p-8 border border-[#4A4063]/20 rounded-2xl bg-[#4A4063]/5 hover:bg-[#4A4063]/10 transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="inline-flex items-center px-3 py-1 bg-[#4A4063]/20 border border-[#4A4063]/40 rounded-full text-xs font-mono text-[#C8C6D7]">
                                                {resource.type}
                                            </span>
                                            <svg
                                                className="w-5 h-5 text-[#C8C6D7] opacity-0 group-hover:opacity-100 transition-opacity"
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
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8C6D7] transition-colors">
                                            {resource.title}
                                        </h3>

                                        <p className="text-white/60 text-sm mb-6">
                                            {resource.description}
                                        </p>

                                        <div className="flex items-center text-[#C8C6D7] text-sm font-semibold mt-auto">
                                            Ver detalle
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
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
                            ¿Necesitas ayuda ahora? Solicita un diagnóstico operativo.
                        </p>

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
                                Solicitar diagnóstico
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
