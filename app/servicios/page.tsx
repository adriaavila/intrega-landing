"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        number: "01",
        title: "Auditoría Operativa",
        subtitle: "Visibilidad real de P&L y flujos de caja",
        desc: "Analizamos la operación desde dentro para entender qué está funcionando, qué no y por qué.",
        items: [
            "Lectura real del Prime Cost y márgenes",
            "Análisis de flujos operativos y financieros",
            "Identificación de fugas invisibles de rentabilidad",
            "Diagnóstico de fricción operativa y humana"
        ],
        result: "Sin visibilidad, no hay control. Sin control, el crecimiento es riesgo."
    },
    {
        number: "02",
        title: "Arquitectura de Sistemas",
        subtitle: "Procesos lean y automatización digital",
        desc: "Diseñamos la estructura que sostiene la operación sin desgaste constante.",
        items: [
            "Rediseño de procesos críticos",
            "Estandarización operativa",
            "Dashboards de negocio a medida",
            "Automatización de tareas repetitivas"
        ],
        result: "La complejidad no escala. La estructura sí."
    },
    {
        number: "03",
        title: "Ejecución Directa",
        subtitle: "Implementación junto al equipo hasta lograr continuidad",
        desc: "No entregamos recomendaciones y desaparecemos. Ejecutamos hasta que el sistema funciona sin nosotros.",
        items: [
            "Implementación en campo",
            "Acompañamiento al liderazgo operativo",
            "Ajustes en tiempo real",
            "Transferencia de control al equipo"
        ],
        result: "El error humano casi siempre es un error de diseño."
    },
    {
        number: "04",
        title: "Digital e IA",
        subtitle: "Tecnología que agrega valor, no complejidad",
        desc: "La tecnología no corrige una mala operación. Por eso la aplicamos solo cuando agrega valor.",
        items: [
            "Landing pages y ecommerce alineados a la capacidad operativa",
            "Flujos de pedido simples y claros",
            "IA para atención al cliente como primer nivel"
        ],
        result: "Sin estructura, la IA amplifica el caos. Con estructura, multiplica el rendimiento."
    },
];


const processSteps = [
    { num: "01", label: "Diagnóstico", desc: "Evaluación inicial de la operación" },
    { num: "02", label: "Auditoría", desc: "Análisis profundo (2-4 semanas)" },
    { num: "03", label: "Rediseño", desc: "Arquitectura del sistema operativo" },
    { num: "04", label: "Ejecución", desc: "Implementación y seguimiento continuo" },
];

export default function Servicios() {
    return (
        <main className="relative bg-[#0a0a0a] min-h-screen pt-24">
            {/* Hero Section - Above the fold clarity */}
            <section className="relative py-20 md:py-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center md:text-left"
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-6">
                            Servicios Técnicos
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Recupera el control<br />
                            <span className="text-[#C8C6D7]">de tu operación.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-10">
                            Auditoría profunda. Sistemas optimizados. Ejecución real.
                        </p>

                        {/* Primary CTA in hero */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/diagnostico"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A4063] text-[#F5F5F5] font-semibold text-lg rounded-full
                                transition-all duration-300 ease-out
                                hover:bg-[#5a5073] hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-[#4A4063]/30
                                active:translate-y-0"
                            >
                                Solicitar diagnóstico gratuito
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

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C8C6D7]/30 to-transparent" />

            {/* Services Cards Section */}
            <section className="relative py-20 md:py-28 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 md:mb-16 text-center"
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-4">
                            Servicios Técnicos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Sistemas reales para operaciones reales
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Entramos donde normalmente nadie quiere mirar: costos, procesos y decisiones.
                        </p>
                    </motion.div>

                    {/* Cards Grid - 2x2 for 4 services */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                className="group relative bg-[#0e0e0e] border border-[#C8C6D7]/10 rounded-2xl p-6 md:p-8 
                                           hover:border-[#4A4063]/50 hover:bg-[#0f0f12] transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                {/* Number */}
                                <span className="font-mono text-sm text-[#4A4063] font-bold mb-4 block">
                                    {service.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#C8C6D7] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-[#C8C6D7] mb-4">
                                    {service.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* Items list */}
                                <ul className="space-y-2 mb-6">
                                    {service.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                                            <span className="text-[#4A4063] mt-0.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Result quote */}
                                <p className="font-mono text-xs text-[#C8C6D7]/70 border-t border-[#C8C6D7]/10 pt-4 italic">
                                    "{service.result}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline Section */}
            <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#0e0e0e]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 md:mb-16 text-center"
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#C8C6D7] uppercase mb-4">
                            Proceso
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            De la auditoría a la ejecución
                        </h2>
                    </motion.div>

                    {/* Timeline - Horizontal on desktop, vertical on mobile */}
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[#4A4063] via-[#C8C6D7]/30 to-[#4A4063]" />

                        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="relative flex md:flex-col items-start md:items-center text-left md:text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    {/* Step circle */}
                                    <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full 
                                                    bg-[#4A4063] text-white font-mono font-bold text-lg mb-0 md:mb-4 mr-4 md:mr-0
                                                    shadow-lg shadow-[#4A4063]/20">
                                        {step.num}
                                    </div>
                                    <div className="flex-1 md:flex-none">
                                        <h3 className="text-lg font-semibold text-white mb-1">
                                            {step.label}
                                        </h3>
                                        <p className="text-sm text-white/50">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Filter Section - "¿Es para ti?" */}
            <section className="relative py-20 md:py-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            ¿Es para ti?
                        </h2>
                        <p className="text-white/50 text-lg">
                            No trabajamos con todos. Aquí está cómo saber si encajamos.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Trabajamos con */}
                        <motion.div
                            className="bg-[#0e0e0e] border border-[#4A4063]/30 rounded-2xl p-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#4A4063] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Trabajamos con</h3>
                            </div>
                            <ul className="space-y-3 text-white/70">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4A4063] mt-1">•</span>
                                    Empresas con ventas reales buscando orden técnico
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4A4063] mt-1">•</span>
                                    Equipos dispuestos a cambiar procesos
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4A4063] mt-1">•</span>
                                    Líderes que priorizan datos sobre intuición
                                </li>
                            </ul>
                        </motion.div>

                        {/* No trabajamos con */}
                        <motion.div
                            className="bg-[#0e0e0e] border border-[#C8C6D7]/10 rounded-2xl p-8"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#C8C6D7]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#C8C6D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white/70">No trabajamos con</h3>
                            </div>
                            <ul className="space-y-3 text-white/50">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C8C6D7]/50 mt-1">•</span>
                                    Ideas en etapa cero sin tracción
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C8C6D7]/50 mt-1">•</span>
                                    Equipos que buscan soluciones mágicas
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C8C6D7]/50 mt-1">•</span>
                                    Organizaciones sin apertura al cambio
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative bg-[#4A4063] py-24 md:py-32 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block font-mono text-xs tracking-[0.3em] text-[#F5F5F5]/60 uppercase mb-6">
                            Siguiente paso
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6">
                            Empieza con un diagnóstico sin costo
                        </h2>

                        <p className="text-xl text-[#F5F5F5]/70 mb-10 max-w-2xl mx-auto">
                            20 minutos. Sin compromiso. Claridad inmediata sobre el estado de tu operación.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/diagnostico"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-[#F5F5F5] text-[#4A4063] font-bold text-lg rounded-full
                                transition-all duration-300 ease-out
                                hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/30
                                active:translate-y-0"
                            >
                                Solicitar diagnóstico gratuito
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

                        {/* Subtle urgency */}
                        <p className="mt-8 text-sm text-[#F5F5F5]/50 font-mono">
                            Cupos limitados por mes para mantener la calidad del servicio.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
