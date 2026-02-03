"use client";

import { useState } from "react";
import Link from "next/link";

const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+52", country: "MX" },
    { code: "+34", country: "ES" },
    { code: "+57", country: "CO" },
    { code: "+54", country: "AR" },
    { code: "+56", country: "CL" },
    { code: "+51", country: "PE" },
    { code: "+58", country: "VE" },
    { code: "+593", country: "EC" },
    { code: "+507", country: "PA" },
];

export default function DiagnosticoPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        negocio: "",
        email: "",
        countryCode: "+58",
        telefono: "",
        medioContacto: "email",
        bottleneck: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const whatsappNumber = "34672553578"; // +34 672 55 35 78
    const whatsappMessage = encodeURIComponent(
        "Hola, vi su web y me interesa hablar sobre mi operación. ¿Podemos agendar una llamada?"
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-2xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-8"
                    >
                        <svg
                            className="w-4 h-4"
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
                        Volver al inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Solicitar Diagnóstico
                    </h1>
                    <p className="text-white/60 text-lg max-w-md mx-auto">
                        Cuéntanos sobre tu negocio y te ayudaremos a identificar oportunidades de mejora operativa.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Nombre */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre" className="text-white/60 text-sm">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30
                                focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                        />
                    </div>

                    {/* Negocio */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="negocio" className="text-white/60 text-sm">
                            Negocio
                        </label>
                        <input
                            type="text"
                            id="negocio"
                            name="negocio"
                            value={formData.negocio}
                            onChange={handleChange}
                            placeholder="Nombre de tu negocio"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30
                                focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white/60 text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30
                                focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                        />
                    </div>

                    {/* Teléfono con código de país */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="telefono" className="text-white/60 text-sm">
                            Teléfono
                        </label>
                        <div className="flex gap-2">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-3.5 text-white
                                    focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all
                                    appearance-none cursor-pointer min-w-[100px]"
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code} className="bg-[#1a1a1a]">
                                        {country.code} {country.country}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="55 1234 5678"
                                required
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30
                                    focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Medio de contacto preferido */}
                    <div className="flex flex-col gap-3">
                        <label className="text-white/60 text-sm">
                            Medio de contacto preferido
                        </label>
                        <div className="flex flex-wrap gap-4">
                            <label className="relative flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="medioContacto"
                                    value="email"
                                    checked={formData.medioContacto === "email"}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center
                                    peer-checked:border-[#4A4063] peer-checked:bg-[#4A4063]/20 transition-all">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#4A4063] opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-white/70 group-hover:text-white transition-colors">Email</span>
                            </label>
                            <label className="relative flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="medioContacto"
                                    value="whatsapp"
                                    checked={formData.medioContacto === "whatsapp"}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />
                                <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center
                                    peer-checked:border-[#25D366] peer-checked:bg-[#25D366]/20 transition-all">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-white/70 group-hover:text-white transition-colors">WhatsApp</span>
                            </label>
                        </div>
                    </div>

                    {/* Bottleneck */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="bottleneck" className="text-white/60 text-sm">
                            Principal bottleneck
                        </label>
                        <textarea
                            id="bottleneck"
                            name="bottleneck"
                            value={formData.bottleneck}
                            onChange={handleChange}
                            placeholder="Describe brevemente el principal cuello de botella en tu operación..."
                            rows={4}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30
                                focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-semibold text-lg
                            transition-all duration-300 ease-out
                            hover:bg-white/90 hover:scale-[1.02]
                            active:bg-white/80 active:scale-[0.98]
                            mt-2"
                    >
                        Solicitar Diagnóstico
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-10">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/40 text-sm">o</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* WhatsApp Direct */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-8 py-4 rounded-lg font-semibold text-lg
                        bg-[#25D366] text-white
                        transition-all duration-300 ease-out
                        hover:bg-[#22c55e] hover:scale-[1.02]
                        active:scale-[0.98]"
                >
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Escribir por WhatsApp
                </a>

                <p className="text-center text-white/40 text-sm mt-4">
                    Respuesta en menos de 24 horas hábiles
                </p>
            </div>
        </main>
    );
}
