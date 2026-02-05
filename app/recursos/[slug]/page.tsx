"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { resources } from "../../../lib/data";

export default function ResourceDetail() {
    const { slug } = useParams();
    const resource = resources.find((r) => r.slug === slug);

    if (!resource) {
        return notFound();
    }

    return (
        <main className="relative bg-[#0a0a0a] min-h-screen pt-24">
            {/* Resource Header */}
            <section className="relative py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/recursos"
                        className="inline-flex items-center text-[#C8C6D7] hover:text-white mb-12 transition-colors"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Volver a Recursos
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 bg-[#4A4063]/20 border border-[#4A4063]/40 rounded-full text-xs font-mono text-[#C8C6D7] mb-6">
                            {resource.type}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                            {resource.title}
                        </h1>

                        <p className="text-xl text-white/60 leading-relaxed mb-12">
                            {resource.description}
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <a
                                href={resource.downloadUrl}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5F5F5] text-[#0a0a0a] font-bold text-lg rounded-full
                           transition-all duration-300 ease-out
                           hover:shadow-2xl hover:shadow-white/10"
                            >
                                Descargar Recurso
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
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Resource Content/Preview */}
            <section className="relative pb-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 md:p-12 border border-[#4A4063]/20 rounded-2xl bg-[#4A4063]/5"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">
                            ¿Qué incluye este recurso?
                        </h2>
                        <div
                            className="prose prose-invert prose-lg max-w-none text-white/80"
                            dangerouslySetInnerHTML={{ __html: resource.content }}
                        />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
