"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-[#0a0a0a] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="16" cy="16" r="15" fill="#4A4063" />
                                <rect x="13" y="7" width="6" height="18" rx="1" fill="#F5F5F5" />
                                <rect x="13" y="7" width="10" height="5" rx="1" fill="#F5F5F5" />
                                <rect x="9" y="20" width="10" height="5" rx="1" fill="#F5F5F5" />
                                <circle cx="25" cy="9.5" r="2" fill="#C8C6D7" />
                                <circle cx="7" cy="22.5" r="2" fill="#C8C6D7" />
                            </svg>
                            <h3 className="font-mono text-sm tracking-[0.3em] text-white/60 uppercase">
                                INTEGRA
                            </h3>
                        </Link>
                        <p className="text-white/40 text-sm max-w-xs">
                            Sistemas para la continuidad operativa.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div>
                            <h4 className="text-white/80 text-sm font-semibold mb-4">Navegación</h4>
                            <nav className="flex flex-col gap-2">
                                <Link href="/nosotros" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                                    Nosotros
                                </Link>
                                <Link href="/servicios" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                                    Servicios
                                </Link>
                                <Link href="/recursos" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                                    Recursos
                                </Link>
                                <Link href="/blog" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                                    Blog
                                </Link>
                            </nav>
                        </div>
                    </div>


                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs font-mono">
                        © 2026 INTEGRA. Sistemas para la continuidad operativa.
                    </p>
                </div>
            </div>
        </footer>
    );
}
