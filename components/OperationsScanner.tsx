"use client";

import {
    useRef,
    useState,
    useEffect,
    useCallback,
    type ReactNode,
} from "react";
import { motion } from "framer-motion";

// Frame configuration
const TOTAL_FRAMES = 192;
const FRAME_PATH = "/hero-frames-webp";
const ANIMATION_DURATION_MS = 4200; // Duration to play through all frames (4.2 seconds)
const CRITICAL_FRAMES = 30; // Load first 30 frames immediately for fast initial render

// Generate frame filenames based on the actual naming pattern
function getFrameFilename(index: number): string {
    const paddedIndex = index.toString().padStart(3, "0");
    const delayPart = index % 3 === 1 ? "0.041s" : "0.042s";
    return `frame_${paddedIndex}_delay-${delayPart}.webp`;
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

    // Animation lock state - prevents scrolling until intro animation completes
    const [isAnimationLocked, setIsAnimationLocked] = useState(true);
    const [introComplete, setIntroComplete] = useState(false);
    const animationStartTimeRef = useRef<number | null>(null);

    // No scroll-driven animation - animation only plays on page load

    // Lock scroll during intro animation
    useEffect(() => {
        if (!isAnimationLocked) return;

        const preventScroll = (e: Event) => {
            e.preventDefault();
        };

        // Lock all scroll methods
        document.body.style.overflow = "hidden";
        document.addEventListener("wheel", preventScroll, { passive: false });
        document.addEventListener("touchmove", preventScroll, { passive: false });

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        };
    }, [isAnimationLocked]);

    // Play intro animation automatically once images are loaded
    useEffect(() => {
        if (isLoading || images.length === 0 || introComplete) return;

        let animationFrameId: number;

        const playIntroAnimation = (timestamp: number) => {
            if (!animationStartTimeRef.current) {
                animationStartTimeRef.current = timestamp;
            }

            const elapsed = timestamp - animationStartTimeRef.current;
            const progress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);

            // Use easeOutCubic for smooth deceleration
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const targetFrame = Math.floor(easedProgress * (TOTAL_FRAMES - 1));

            setCurrentFrame(targetFrame);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(playIntroAnimation);
            } else {
                // Animation complete - unlock scroll
                setIntroComplete(true);
                setIsAnimationLocked(false);
            }
        };

        // Small delay to ensure smooth start
        const startDelay = setTimeout(() => {
            animationFrameId = requestAnimationFrame(playIntroAnimation);
        }, 500);

        return () => {
            clearTimeout(startDelay);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isLoading, images.length, introComplete]);

    // Load a single image and return a promise
    const loadImage = (index: number): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load frame ${index}`));
            img.src = `${FRAME_PATH}/${getFrameFilename(index)}`;
        });
    };

    // Progressive loading: critical frames first, then background load the rest
    useEffect(() => {
        const loadFrames = async () => {
            const allImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
            let loadedCount = 0;

            // Phase 1: Load critical frames (first 30) for fast initial render
            const criticalPromises = Array.from({ length: CRITICAL_FRAMES }, (_, i) =>
                loadImage(i).then(img => {
                    allImages[i] = img;
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / CRITICAL_FRAMES) * 100));
                    return img;
                }).catch(() => null)
            );

            await Promise.all(criticalPromises);

            // Set initial images and show content
            if (allImages[0]) {
                setImgRatio(allImages[0].naturalWidth / allImages[0].naturalHeight);
            }
            setImages([...allImages]);
            setIsLoading(false);

            // Phase 2: Load remaining frames in background using requestIdleCallback
            const loadRemainingFrames = async () => {
                for (let i = CRITICAL_FRAMES; i < TOTAL_FRAMES; i++) {
                    try {
                        const img = await loadImage(i);
                        allImages[i] = img;
                        // Batch update every 20 frames to reduce re-renders
                        if ((i + 1) % 20 === 0 || i === TOTAL_FRAMES - 1) {
                            setImages([...allImages]);
                        }
                    } catch {
                        // Skip failed frames
                    }
                }
            };

            // Use requestIdleCallback for non-blocking background loading
            if ('requestIdleCallback' in window) {
                (window as Window).requestIdleCallback(() => loadRemainingFrames());
            } else {
                setTimeout(loadRemainingFrames, 100);
            }
        };

        loadFrames();
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

    // Animation is controlled by intro playback only, not scroll

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

            {/* Hero container - fixed height, normal scroll after intro */}
            <div ref={containerRef} className="relative h-screen bg-[#0a0a0a]">
                {/* Hero content */}
                <div className="relative h-full overflow-hidden flex flex-col md:block justify-center">

                    {/* MOBILE: Title at top - with padding to separate from header */}
                    <motion.div
                        className="md:hidden relative z-10 pt-32 px-4 text-center flex-shrink-0 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: textVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-[clamp(2rem,9vw,3rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase"
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
                            className="text-[clamp(2rem,9vw,3rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase"
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
                            className="text-[clamp(2rem,9vw,3rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase"
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
