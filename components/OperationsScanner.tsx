"use client";

import {
    useRef,
    useState,
    useEffect,
    useCallback,
    type ReactNode,
} from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

// Frame configuration
const TOTAL_FRAMES = 192;
const FRAME_PATH = "/hero-frames";

// Generate frame filenames based on the actual naming pattern
function getFrameFilename(index: number): string {
    const paddedIndex = index.toString().padStart(3, "0");
    const delayPart = index % 3 === 1 ? "0.041s" : "0.042s";
    return `frame_${paddedIndex}_delay-${delayPart}.jpg`;
}

interface OperationsScannerProps {
    children?: ReactNode;
}

export function OperationsScanner({ children }: OperationsScannerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [textVisible, setTextVisible] = useState(false);

    const [imgRatio, setImgRatio] = useState<number | null>(null);

    // Scroll-driven animation: track scroll progress within the hero section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"], // Animation plays from start to when section exits viewport
    });

    // Apply spring physics for ultra-smooth frame interpolation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.0001,
    });

    // Transform scroll progress to frame index
    const frameProgress = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Track when animation has started (user has scrolled)
    const [hasScrolled, setHasScrolled] = useState(false);

    // Preload all frames
    useEffect(() => {
        const loadImages = async () => {
            const loaded: HTMLImageElement[] = [];
            let loadedCount = 0;

            const imagePromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        loadedCount++;
                        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
                        resolve(img);
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load frame ${i}`);
                        reject(new Error(`Failed to load frame ${i}`));
                        resolve(img);
                    };
                    img.src = `${FRAME_PATH}/${getFrameFilename(i)}`;
                });
            });

            try {
                const results = await Promise.allSettled(imagePromises);
                results.forEach((result) => {
                    if (result.status === "fulfilled" && result.value.naturalWidth > 0) {
                        loaded.push(result.value);
                    }
                });

                if (loaded.length > 0) {
                    setImages(loaded);
                    setImgRatio(loaded[0].naturalWidth / loaded[0].naturalHeight);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error loading frames:", error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, []);

    // Show text immediately after loading
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            setTimeout(() => {
                setTextVisible(true);
            }, 300);
        }
    }, [isLoading, images.length]);

    // Draw frame to canvas
    const drawFrame = useCallback(
        (frameIndex: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            const img = images[frameIndex];

            if (!canvas || !ctx || !img) return;

            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);
            }

            ctx.clearRect(0, 0, rect.width, rect.height);

            const imgRatio = img.width / img.height;
            const canvasRatio = rect.width / rect.height;

            let drawWidth, drawHeight, drawX, drawY;

            // Mobile: use "contain" to show full video width
            // Desktop: use "cover" to fill the viewport
            const isMobile = rect.width < 768;

            if (isMobile) {
                // Contain: fit full width, center vertically
                drawWidth = rect.width;
                drawHeight = drawWidth / imgRatio;
                drawX = 0;
                drawY = (rect.height - drawHeight) / 2;
            } else {
                // Cover: fill viewport, crop as needed
                if (imgRatio > canvasRatio) {
                    drawHeight = rect.height;
                    drawWidth = drawHeight * imgRatio;
                    drawX = (rect.width - drawWidth) / 2;
                    drawY = 0;
                } else {
                    drawWidth = rect.width;
                    drawHeight = drawWidth / imgRatio;
                    drawX = 0;
                    drawY = (rect.height - drawHeight) / 2;
                }
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        },
        [images]
    );

    // Update frame based on scroll progress with smooth interpolation
    useMotionValueEvent(frameProgress, "change", (latest) => {
        const frameIndex = Math.min(
            Math.max(Math.round(latest), 0),
            TOTAL_FRAMES - 1
        );
        if (frameIndex !== currentFrame) {
            setCurrentFrame(frameIndex);
            if (!hasScrolled && frameIndex > 0) {
                setHasScrolled(true);
            }
        }
    });

    // Draw current frame
    useEffect(() => {
        if (images.length > 0 && !isLoading) {
            drawFrame(currentFrame);
        }
    }, [currentFrame, images, isLoading, drawFrame]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (images.length > 0 && !isLoading) {
                drawFrame(currentFrame);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentFrame, images, isLoading, drawFrame]);

    return (
        <>
            {/* Loading State */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h1 className="font-mono text-sm tracking-[0.3em] text-white/60 uppercase">
                            INTEGRA
                        </h1>
                        <div className="w-64 h-[2px] bg-white/10 overflow-hidden">
                            <div
                                className="h-full bg-white/80 transition-all duration-300 ease-out"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs tracking-widest text-white/40 animate-pulse-glow">
                                SYSTEM LOADING
                            </span>
                            <span className="font-mono text-xs text-white/60">
                                {loadProgress}%
                            </span>
                        </div>
                    </div>

                    <div
                        className="absolute inset-0 pointer-events-none opacity-5"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>
            )}

            {/* Scroll-driven animation container - Extended height for scroll space */}
            <div ref={containerRef} className="relative h-[200vh] bg-[#0a0a0a]">
                {/* Sticky hero that stays fixed while scrolling through the container */}
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:block justify-center">

                    {/* MOBILE: Title at top - with padding to separate from header */}
                    <motion.div
                        className="md:hidden relative z-10 pt-32 px-4 text-center flex-shrink-0 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: textVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-[clamp(1.5rem,7vw,2.5rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: textVisible ? 0 : 20, opacity: textVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            style={{
                                background: "linear-gradient(135deg, #ffffff 0%, #C8C6D7 50%, #ffffff 100%)",
                                backgroundSize: "200% 200%",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                filter: "drop-shadow(0 0 20px rgba(200, 198, 215, 0.3)) drop-shadow(0 4px 30px rgba(0,0,0,0.5))",
                                animation: "gradientShift 4s ease infinite",
                            }}
                        >
                            OPERACIONES
                        </motion.h1>
                        <motion.h1
                            className="text-[clamp(1.5rem,7vw,2.5rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: textVisible ? 0 : 20, opacity: textVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                            style={{
                                background: "linear-gradient(135deg, #C8C6D7 0%, #4A4063 50%, #C8C6D7 100%)",
                                backgroundSize: "200% 200%",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                filter: "drop-shadow(0 0 25px rgba(74, 64, 99, 0.4)) drop-shadow(0 4px 30px rgba(0,0,0,0.5))",
                                animation: "gradientShift 5s ease infinite 0.5s",
                            }}
                        >
                            QUE SOSTIENEN
                        </motion.h1>
                        <motion.h1
                            className="text-[clamp(1.5rem,7vw,2.5rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: textVisible ? 0 : 20, opacity: textVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            style={{
                                background: "linear-gradient(135deg, #C8C6D7 0%, #4A4063 50%, #C8C6D7 100%)",
                                backgroundSize: "200% 200%",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                filter: "drop-shadow(0 0 45px rgba(74, 64, 99, 0.5)) drop-shadow(0 0 70px rgba(200, 198, 215, 0.3)) drop-shadow(0 4px 30px rgba(0,0,0,0.5))",
                                animation: "gradientShift 7s ease infinite 1.2s",
                            }}
                        >
                            EL CRECIMIENTO.
                        </motion.h1>
                    </motion.div>

                    {/* Canvas wrapper - fits animation dimensions on mobile, full screen on desktop */}
                    <div
                        className="relative w-full my-8 md:my-0 md:absolute md:inset-0 md:h-full md:aspect-auto"
                        style={{ aspectRatio: imgRatio ? `${imgRatio}` : '16/9' }}
                    >
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 w-full h-full"
                            style={{
                                opacity: isLoading ? 0 : 1,
                                transition: "opacity 0.5s ease-out",
                            }}
                        />

                        {/* Vignette overlay for text contrast - desktop only */}
                        <div
                            className="hidden md:block absolute inset-0 pointer-events-none"
                            style={{
                                background: `
                                    radial-gradient(ellipse at center, transparent 20%, rgba(10,10,10,0.4) 70%, rgba(10,10,10,0.7) 100%)
                                `,
                                opacity: isLoading ? 0 : 1,
                            }}
                        />

                        {/* DESKTOP: Hero Text - Positioned higher */}
                        <motion.div
                            className="hidden md:flex absolute inset-0 items-start pt-32 justify-center pointer-events-none px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: textVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="text-center">
                                <motion.h1
                                    className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase relative"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: textVisible ? 0 : 30, opacity: textVisible ? 1 : 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    style={{
                                        background: "linear-gradient(135deg, #ffffff 0%, #C8C6D7 40%, #ffffff 80%, #F5F5F5 100%)",
                                        backgroundSize: "300% 300%",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: "drop-shadow(0 0 40px rgba(200, 198, 215, 0.5)) drop-shadow(0 8px 40px rgba(0,0,0,0.6))",
                                        animation: "gradientShift 6s ease infinite",
                                    }}
                                >
                                    OPERACIONES
                                </motion.h1>
                                <motion.h1
                                    className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase relative"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: textVisible ? 0 : 30, opacity: textVisible ? 1 : 0 }}
                                    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                                    style={{
                                        background: "linear-gradient(135deg, #C8C6D7 0%, #4A4063 30%, #6A5A7D 60%, #C8C6D7 100%)",
                                        backgroundSize: "300% 300%",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: "drop-shadow(0 0 50px rgba(74, 64, 99, 0.6)) drop-shadow(0 0 80px rgba(200, 198, 215, 0.3)) drop-shadow(0 8px 40px rgba(0,0,0,0.6))",
                                        animation: "gradientShift 7s ease infinite 0.8s",
                                    }}
                                >
                                    QUE SOSTIENEN
                                </motion.h1>
                                <motion.h1
                                    className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase relative"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: textVisible ? 0 : 30, opacity: textVisible ? 1 : 0 }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                    style={{
                                        background: "linear-gradient(135deg, #C8C6D7 0%, #4A4063 30%, #6A5A7D 60%, #C8C6D7 100%)",
                                        backgroundSize: "300% 300%",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: "drop-shadow(0 0 55px rgba(74, 64, 99, 0.6)) drop-shadow(0 0 90px rgba(200, 198, 215, 0.4)) drop-shadow(0 8px 40px rgba(0,0,0,0.6))",
                                        animation: "gradientShift 7.5s ease infinite 1.5s",
                                    }}
                                >
                                    EL CRECIMIENTO.
                                </motion.h1>
                            </div>
                        </motion.div>
                    </div>

                    {/* Subtitle at bottom - ALL SCREEN SIZES */}
                    <motion.div
                        className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10 pb-24 md:pb-32 px-4 flex justify-center items-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: textVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 lg:gap-12">
                            {["Control", "Eficiencia", "Margen"].map((word, i) => (
                                <motion.div
                                    key={i}
                                    className="relative group cursor-default pointer-events-auto"
                                    initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                                    animate={{
                                        y: textVisible ? 0 : 40,
                                        opacity: textVisible ? 1 : 0,
                                        filter: textVisible ? "blur(0px)" : "blur(10px)"
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.7 + (i * 0.15),
                                        ease: [0.215, 0.61, 0.355, 1.0] // smooth cubic-bezier
                                    }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                >
                                    <span
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                                        style={{
                                            background: "linear-gradient(180deg, #FFFFFF 0%, #C8C6D7 100%)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))"
                                        }}
                                    >
                                        {word}
                                    </span>
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4063]">
                                        .
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Scroll indicator - appears immediately when loaded */}
                    {textVisible && (
                        <motion.div
                            className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                                Scroll
                            </span>
                            <motion.div
                                className="w-[1px] h-8 bg-white/30"
                                animate={{ scaleY: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Remaining content flows after hero */}
            {children}
        </>
    );
}
