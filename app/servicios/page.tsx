"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        number: "01",
        title: "Consultoría",
        subtitle: "Te escuchamos y proponemos soluciones reales",
        desc: "Entendemos tus retos operativos y diseñamos un plan concreto. Sin teoría, sin humo.",
        items: [
            "Diagnóstico de procesos y puntos de fricción",
            "Análisis de costos y márgenes reales",
            "Plan de acción con prioridades claras",
            "Acompañamiento en la toma de decisiones"
        ],
        result: "No necesitas más opiniones. Necesitas un plan que funcione."
    },
    {
        number: "02",
        title: "Transformación Digital",
        subtitle: "Herramientas que multiplican la productividad",
        desc: "Llevamos tus procesos a plataformas que mejoran la eficiencia del equipo y la experiencia de tu cliente.",
        items: [
            "Migración de procesos manuales a digitales",
            "Dashboards de negocio en tiempo real",
            "Automatización de tareas repetitivas",
            "Capacitación al equipo en nuevas herramientas"
        ],
        result: "La mejor tecnología es la que tu equipo realmente usa."
    },
    {
        number: "03",
        title: "Integración de Sistemas",
        subtitle: "Que tus sistemas hablen entre sí",
        desc: "Conectamos tus herramientas para que la información fluya. Menos datos perdidos, menos pasos manuales, menos errores.",
        items: [
            "Conexión entre POS, inventario y contabilidad",
            "Flujos automáticos entre plataformas",
            "Eliminación de doble captura de datos",
            "Visibilidad unificada de la operación"
        ],
        result: "Un negocio conectado es un negocio que no pierde información."
    },
    {
        number: "04",
        title: "Soporte Continuo",
        subtitle: "No te dejamos solo después de implementar",
        desc: "Te acompañamos para asegurarnos de que todo funcione como debe. Ajustes, mejoras y soporte cuando lo necesites.",
        items: [
            "Monitoreo continuo post-implementación",
            "Ajustes y optimización en tiempo real",
            "Canal directo de soporte prioritario",
            "Reportes de rendimiento y mejora"
        ],
        result: "Implementar es solo el inicio. El valor está en que funcione todos los días."
    },
];


const processSteps = [
    { num: "01", label: "Escuchamos", desc: "Entendemos tu negocio y tus retos" },
    { num: "02", label: "Diagnosticamos", desc: "Análisis profundo de tu operación" },
    { num: "03", label: "Diseñamos", desc: "Plan a medida con prioridades claras" },
    { num: "04", label: "Ejecutamos", desc: "Implementación y acompañamiento continuo" },
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
                            Tecnología y estrategia para<br />
                            <span className="text-[#C8C6D7]">negocios que no pueden parar.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-10">
                            Consultoría, transformación digital e integración de sistemas para hospitalidad y retail.
                        </p>

                        {/* Primary CTA in hero */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#6D28D9] text-[#F5F5F5] font-semibold text-lg rounded-full
                                transition-all duration-300 ease-out
                                hover:bg-[#8B5CF6] hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-[#6D28D9]/30
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
                            Cómo te apoyamos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Todo lo que necesitas para operar sin fricción
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Soluciones prácticas para los problemas que no te dejan dormir.
                        </p>
                    </motion.div>

                    {/* Cards Grid - 2x2 for 4 services */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                className="group relative bg-[#0e0e0e] border border-[#C8C6D7]/10 rounded-2xl p-6 md:p-8 
                                           hover:border-[#6D28D9]/50 hover:bg-[#0f0f12] transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                {/* Number */}
                                <span className="font-mono text-sm text-[#6D28D9] font-bold mb-4 block">
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
                                            <span className="text-[#6D28D9] mt-0.5">•</span>
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
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[#6D28D9] via-[#C8C6D7]/30 to-[#6D28D9]" />

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
                                                    bg-[#6D28D9] text-white font-mono font-bold text-lg mb-0 md:mb-4 mr-4 md:mr-0
                                                    shadow-lg shadow-[#6D28D9]/20">
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
                            Para quién trabajamos
                        </h2>
                        <p className="text-white/50 text-lg">
                            Negocios que quieren crecer sin fricción.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Trabajamos con */}
                        <motion.div
                            className="bg-[#0e0e0e] border border-[#6D28D9]/30 rounded-2xl p-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#6D28D9] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Trabajamos con</h3>
                            </div>
                            <ul className="space-y-3 text-white/70">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#6D28D9] mt-1">•</span>
                                    Hoteles y alojamientos
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#6D28D9] mt-1">•</span>
                                    Restaurantes y hostelería
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#6D28D9] mt-1">•</span>
                                    Tiendas físicas y e-commerce
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#6D28D9] mt-1">•</span>
                                    Cadenas con operaciones complejas
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
                                    Ideas sin operación real todavía
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
            <section className="relative bg-[#6D28D9] py-24 md:py-32 px-4 md:px-8">
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
                            ¿Listo para empezar?
                        </h2>

                        <p className="text-xl text-[#F5F5F5]/70 mb-10 max-w-2xl mx-auto">
                            Hablemos de tu negocio y tus retos concretos para diseñar un plan que funcione.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-[#F5F5F5] text-[#6D28D9] font-bold text-lg rounded-full
                                transition-all duration-300 ease-out
                                hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/30
                                active:translate-y-0"
                            >
                                Hablemos
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
