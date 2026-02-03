"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Recursos", href: "/recursos" },
    { label: "Blog", href: "/blog" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Track scroll position
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 80);
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Close mobile menu on route change or resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

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
        <>
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
                        href="/"
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
                            <circle cx="25" cy="9.5" r="2" fill="#C8C6D7" />
                            <circle cx="7" cy="22.5" r="2" fill="#C8C6D7" />
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-colors ${isScrolled ? "text-[#0a0a0a]" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className={`block w-6 h-0.5 ${isScrolled ? "bg-[#0a0a0a]" : "bg-white"} transition-colors`}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={`block w-6 h-0.5 ${isScrolled ? "bg-[#0a0a0a]" : "bg-white"} transition-colors`}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className={`block w-6 h-0.5 ${isScrolled ? "bg-[#0a0a0a]" : "bg-white"} transition-colors`}
                        />
                    </button>

                    {/* CTA Button - Hidden on mobile */}
                    <motion.a
                        href="/diagnostico"
                        className={`hidden md:inline-flex ml-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${isScrolled
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full pt-24 px-6">
                                {/* Nav Links */}
                                <nav className="flex flex-col gap-2">
                                    {navItems.map((item, i) => (
                                        <motion.a
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-white/80 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 hover:text-white transition-all"
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10 my-6" />

                                {/* CTA */}
                                <motion.a
                                    href="/diagnostico"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-full py-4 bg-[#4A4063] text-white text-center font-semibold rounded-full hover:bg-[#5a5073] transition-colors"
                                >
                                    Solicitar Diagnóstico
                                </motion.a>

                                {/* Footer info */}
                                <div className="mt-auto pb-8">
                                    <p className="text-white/30 text-xs font-mono">
                                        INTEGRA © 2026
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

