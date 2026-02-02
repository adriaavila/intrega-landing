"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const navItems = [
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Servicios", href: "#servicios" },
    { label: "Manifiesto", href: "#manifiesto" },
    { label: "Contacto", href: "#contacto" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { scrollY } = useScroll();

    // Track scroll position
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 80);
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Transform values for smooth morphing
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.92)"]
    );

    const headerBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(20px)"]
    );

    const headerPadding = useTransform(
        scrollY,
        [0, 100],
        ["16px 32px", "12px 24px"]
    );

    const headerBorderRadius = useTransform(
        scrollY,
        [0, 100],
        ["0px", "100px"]
    );

    const headerWidth = useTransform(
        scrollY,
        [0, 100],
        ["100%", "auto"]
    );

    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ["0 0 0 0 rgba(0,0,0,0)", "0 8px 32px -8px rgba(0,0,0,0.15)"]
    );

    // Prevent hydration mismatch
    if (!isMounted) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-2 md:pt-0">
            <motion.nav
                className="flex items-center justify-between w-full mx-4 md:mx-0 md:w-auto gap-4 md:gap-8 pointer-events-auto mt-2 md:mt-6"
                style={{
                    backgroundColor: headerBg,
                    backdropFilter: headerBlur,
                    WebkitBackdropFilter: headerBlur,
                    padding: headerPadding,
                    borderRadius: headerBorderRadius,
                    width: headerWidth,
                    boxShadow: headerShadow,
                    border: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
                    transition: "border 0.3s ease",
                }}
            >
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 transition-all duration-300"
                >
                    <svg
                        className="w-7 h-7"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="16" cy="16" r="15" fill={isScrolled ? "#4A4063" : "#F5F5F5"} />
                        <rect x="13" y="7" width="6" height="18" rx="1" fill={isScrolled ? "#F5F5F5" : "#4A4063"} />
                        <rect x="13" y="7" width="10" height="5" rx="1" fill={isScrolled ? "#F5F5F5" : "#4A4063"} />
                        <rect x="9" y="20" width="10" height="5" rx="1" fill={isScrolled ? "#F5F5F5" : "#4A4063"} />
                        <circle cx="25" cy="9.5" r="2" fill={isScrolled ? "#C8C6D7" : "#C8C6D7"} />
                        <circle cx="7" cy="22.5" r="2" fill={isScrolled ? "#C8C6D7" : "#C8C6D7"} />
                    </svg>
                    <span
                        className={`font-mono text-sm tracking-[0.2em] font-semibold transition-colors duration-300 ${isScrolled ? "text-[#0a0a0a]" : "text-white"
                            }`}
                    >
                        INTEGRA
                    </span>
                </a>

                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-all duration-300 hover:opacity-70 ${isScrolled ? "text-[#0a0a0a]/80" : "text-white/80"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.a
                    href="#diagnostico"
                    className={`ml-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${isScrolled
                        ? "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"
                        : "bg-white/95 text-[#0a0a0a] hover:bg-white"
                        }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Diagnóstico
                </motion.a>
            </motion.nav>
        </header>
    );
}
