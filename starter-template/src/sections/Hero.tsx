"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface CoreCardProps {
    href: string;
    icon: string;
    iconColor: string;
    title: string;
    description: string;
    glowColor: "primary" | "tertiary";
    badge: string;
}

interface StatPillProps {
    value: string;
    label: string;
    index: number;
}

/* ─────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────── */
function useCountUp(target: string, duration = 1400, delay = 0) {
    const [display, setDisplay] = useState("0");
    const startedRef = useRef(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (startedRef.current) return;
            startedRef.current = true;

            const numMatch = target.match(/[\d.]+/);
            if (!numMatch) {
                setDisplay(target);
                return;
            }

            const end = parseFloat(numMatch[0]);
            const suffix = target.slice(numMatch[0].length);
            const prefix = target.slice(0, target.indexOf(numMatch[0]));
            const steps = 40;
            const stepMs = duration / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += 1;
                const val = end * (current / steps);
                setDisplay(
                    `${prefix}${Number.isInteger(end) ? Math.round(val) : val.toFixed(1)}${suffix}`
                );
                if (current >= steps) {
                    setDisplay(target);
                    clearInterval(timer);
                }
            }, stepMs);
        }, delay);

        return () => clearTimeout(timeout);
    }, [target, duration, delay]);

    return display;
}

/* ─────────────────────────────────────────
   Stat Pill
───────────────────────────────────────── */
function StatPill({ value, label, index }: StatPillProps) {
    const count = useCountUp(value, 1400, 900 + index * 150);

    return (
        <div
            className="flex flex-col items-center gap-0.5 px-5 py-3 border cursor-default group transition-all duration-300"
            style={{
                background: "rgba(19,19,19,0.9)",
                borderColor: "rgba(72,72,71,0.3)",
                borderRadius: "12px",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(193,255,254,0.4)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(26,26,26,0.9)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(72,72,71,0.3)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(19,19,19,0.9)";
            }}
        >
            <span className="text-xl font-bold font-headline text-white transition-colors duration-300" style={{ lineHeight: 1.2 }}>
                {count}
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-on-surface-variant whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
    const [mounted, setMounted] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef  = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);

        // Force-play on mount in case autoplay policy deferred it
        const vid = videoRef.current;
        if (vid) {
            vid.play().catch(() => { /* autoplay blocked — video hidden, blobs show instead */ });
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        const section = sectionRef.current;
        section?.addEventListener("mousemove", handleMouseMove);
        return () => section?.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* ── Scoped keyframes — defined OUTSIDE section so they don't repeat in DOM ── */}
            <style>{`
                @keyframes hero-slow-drift {
                    0%, 100% { transform: translateY(-50%) scale(1.00); }
                    50%       { transform: translateY(-52%) scale(1.04); }
                }
                @keyframes hero-blob-pulse {
                    0%, 100% { opacity: 0.07; }
                    50%       { opacity: 0.13; }
                }
                @keyframes hero-gradient-x {
                    0%, 100% { background-position: 0%   50%; }
                    50%       { background-position: 100% 50%; }
                }
                @keyframes hero-ping {
                    0%        { transform: scale(1); opacity: 0.7; }
                    75%, 100% { transform: scale(2.2); opacity: 0; }
                }
                .hero-slow-drift  { animation: hero-slow-drift  8s ease-in-out infinite; }
                .hero-blob-pulse  { animation: hero-blob-pulse  4s ease-in-out infinite; }
                .hero-gradient-x  {
                    background-size: 200% 100%;
                    animation: hero-gradient-x 4s ease infinite;
                }
                .hero-ping {
                    animation: hero-ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .hero-card-link {
                    transition: box-shadow 0.35s ease, transform 0.3s ease, border-color 0.3s ease;
                }
                .hero-card-link:hover {
                    transform: translateY(-2px);
                }
            `}</style>

            <section
                ref={sectionRef}
                className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 pt-24 pb-16 overflow-hidden"
            >
                {/* ── Mouse-tracking radial glow ── */}
                <div
                    aria-hidden
                    className="absolute pointer-events-none z-0"
                    style={{
                        left: mousePos.x - 350,
                        top: mousePos.y - 350,
                        width: 700,
                        height: 700,
                        background:
                            "radial-gradient(circle, rgba(193,255,254,0.08) 0%, transparent 65%)",
                        borderRadius: "50%",
                        opacity: mounted ? 1 : 0,
                        transition: "opacity 0.6s ease",
                    }}
                />

                {/* ── Dot-grid texture ── */}
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        opacity: 0.4,
                    }}
                />

                {/* ── Background video ── */}
                {/*
                    Sources (Mixkit royalty-free, all dark/abstract):
                    • 45298 – grey smoke on black
                    • 44818 – dark ink flowing in liquid
                    • 3524  – television glitch texture
                */}
                <video
                    ref={videoRef}
                    aria-hidden
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onCanPlay={() => setVideoLoaded(true)}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                    style={{
                        opacity: videoLoaded ? 0.28 : 0,
                        transition: "opacity 1.4s ease",
                        filter: "saturate(0.6) brightness(0.7) contrast(1.1)",
                    }}
                >
                    <source
                        src="https://assets.mixkit.co/videos/45298/45298-720.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://assets.mixkit.co/videos/44818/44818-720.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://assets.mixkit.co/videos/3524/3524-720.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* ── Video dark overlay — keeps content legible ── */}
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none z-[1]"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.75) 50%, rgba(14,14,14,0.55) 100%)",
                    }}
                />
                {/* Bottom vignette to blend into next section */}
                <div
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[1]"
                    style={{
                        background: "linear-gradient(to bottom, transparent, rgba(14,14,14,0.95))",
                    }}
                />

                {/* ── Ambient blobs — z-[2] to sit above the overlay when no video ── */}
                <div
                    aria-hidden
                    className="hero-blob-pulse absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none z-[2]"
                    style={{ background: "#c1fffe", filter: "blur(130px)", opacity: videoLoaded ? 0.05 : 0.07 }}
                />
                <div
                    aria-hidden
                    className="hero-blob-pulse absolute top-20 right-1/4 w-72 h-72 rounded-full pointer-events-none z-[2]"
                    style={{
                        background: "#63baff",
                        filter: "blur(110px)",
                        opacity: videoLoaded ? 0.04 : 0.06,
                        animationDelay: "2s",
                    }}
                />
                <div
                    aria-hidden
                    className="hero-blob-pulse absolute top-1/2 left-1/3 w-48 h-48 rounded-full pointer-events-none z-[2]"
                    style={{
                        background: "#00ffff",
                        filter: "blur(90px)",
                        opacity: videoLoaded ? 0.03 : 0.05,
                        animationDelay: "4s",
                    }}
                />

                {/* ── Scanline overlay ── */}
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none z-[2]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.012) 2px,rgba(255,255,255,0.012) 4px)",
                    }}
                />

                {/* ── Main content ── */}
                <div className="relative z-10 w-full max-w-3xl">

                    {/* Status badge */}
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border"
                        style={{
                            background: "rgba(19,19,19,0.8)",
                            borderColor: "rgba(193,255,254,0.2)",
                            borderRadius: "999px",
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(-8px)",
                            transition: "opacity 0.7s ease, transform 0.7s ease",
                        }}
                    >
                        {/* Ping dot — using scoped class to avoid Tailwind animate-ping conflict */}
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span
                                className="hero-ping absolute inline-flex h-full w-full rounded-full"
                                style={{ background: "#c1fffe", opacity: 0.6 }}
                            />
                            <span
                                className="relative inline-flex rounded-full h-2 w-2"
                                style={{ background: "#c1fffe" }}
                            />
                        </span>
                        <span
                            className="text-[10px] uppercase font-headline whitespace-nowrap"
                            style={{ letterSpacing: "0.22em", color: "#c1fffe" }}
                        >
                            System Online · v2.04
                        </span>
                    </div>

                    {/* Headline — line-height 1.0 (not 0.92 which clips descenders) */}
                    <h1
                        className="font-headline font-bold tracking-tighter text-white mb-6"
                        style={{
                            fontSize: "clamp(2.6rem, 7.5vw, 5.25rem)",
                            lineHeight: 1.0,
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(24px)",
                            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
                        }}
                    >
                        Engineering Logic.
                        <br />
                        <span
                            className="hero-gradient-x text-transparent bg-clip-text inline-block"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #c1fffe 0%, #63baff 45%, #00ffff 75%, #c1fffe 100%)",
                            }}
                        >
                            Marketing Magic.
                        </span>
                    </h1>

                    {/* Sub-headline */}
                    <p
                        className="text-base md:text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed"
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
                        }}
                    >
                        A hybrid laboratory for high-performance software development and
                        data-driven marketing growth. We don&apos;t just build products —
                        we&nbsp;engineer market dominance.
                    </p>

                    {/* Dual-Core cards */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-10"
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(24px)",
                            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
                        }}
                    >
                        <CoreCard
                            href="/services"
                            icon="terminal"
                            iconColor="text-primary"
                            title="Dev Core"
                            description="Scalable architecture & precision code for products that last."
                            glowColor="primary"
                            badge="Software"
                        />
                        <CoreCard
                            href="/services"
                            icon="insights"
                            iconColor="text-tertiary"
                            title="Growth Core"
                            description="Performance marketing & conversion ops that compound."
                            glowColor="tertiary"
                            badge="Marketing"
                        />
                    </div>

                    {/* CTA buttons */}
                    <div
                        className="flex flex-wrap gap-3 mb-12"
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(16px)",
                            transition: "opacity 0.7s ease 0.62s, transform 0.7s ease 0.62s",
                        }}
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 font-headline font-bold text-sm uppercase"
                            style={{
                                background: "linear-gradient(135deg, #c1fffe 0%, #63baff 100%)",
                                color: "#006767",
                                padding: "12px 28px",
                                borderRadius: "12px",
                                letterSpacing: "0.08em",
                                transition: "opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                                boxShadow: "0 0 0 rgba(193,255,254,0)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                                    "0 0 32px rgba(193,255,254,0.3)";
                                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                                    "0 0 0 rgba(193,255,254,0)";
                                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                            }}
                        >
                            Launch Project
                            <span className="material-symbols-outlined" style={{ fontSize: 18, transition: "transform 0.2s ease" }}>
                                arrow_forward
                            </span>
                        </Link>

                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 font-headline font-bold text-sm uppercase text-white"
                            style={{
                                border: "1px solid rgba(72,72,71,0.4)",
                                background: "rgba(19,19,19,0.6)",
                                backdropFilter: "blur(8px)",
                                padding: "12px 28px",
                                borderRadius: "12px",
                                letterSpacing: "0.08em",
                                transition: "border-color 0.3s ease, color 0.3s ease, transform 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(193,255,254,0.45)";
                                (e.currentTarget as HTMLAnchorElement).style.color = "#c1fffe";
                                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(72,72,71,0.4)";
                                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                            }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>play_circle</span>
                            View Work
                        </Link>
                    </div>

                    {/* Stat pills */}
                    <div
                        className="flex flex-wrap gap-3"
                        style={{
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? "translateY(0)" : "translateY(14px)",
                            transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s",
                        }}
                    >
                        {[
                            { value: "98%",  label: "Uptime SLA"  },
                            { value: "3.2×", label: "Avg. ROI"    },
                            { value: "150+", label: "Deployments" },
                            { value: "40+",  label: "Clients"     },
                        ].map((stat, i) => (
                            <StatPill key={stat.label} value={stat.value} label={stat.label} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

/* ─────────────────────────────────────────
   Core Card
───────────────────────────────────────── */
function CoreCard({ href, icon, iconColor, title, description, glowColor, badge }: CoreCardProps) {
    const [hovered, setHovered] = useState(false);

    const isPrimary = glowColor === "primary";
    // 6-digit hex so 8-digit hex alpha suffixes work correctly
    const accentHex  = isPrimary ? "#c1fffe" : "#63baff";
    const accentRgba = isPrimary ? "rgba(193,255,254," : "rgba(99,186,255,";

    return (
        <Link
            href={href}
            className="hero-card-link group relative flex flex-col p-6 overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "rgba(19,19,19,0.9)",
                border: `1px solid ${hovered ? `${accentRgba}0.25)` : "rgba(72,72,71,0.25)"}`,
                borderRadius: "14px",
                boxShadow: hovered
                    ? `0 0 28px ${accentRgba}0.1), 0 8px 32px rgba(0,0,0,0.35)`
                    : "0 2px 12px rgba(0,0,0,0.2)",
            }}
        >
            {/* Hover radial glow */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at 25% 35%, ${accentRgba}0.06) 0%, transparent 70%)`,
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.45s ease",
                    borderRadius: "14px",
                }}
            />

            {/* Top-edge shimmer line */}
            <div
                aria-hidden
                className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{
                    height: "1px",
                    background: `linear-gradient(90deg, transparent 0%, ${accentHex} 50%, transparent 100%)`,
                    opacity: hovered ? 0.75 : 0.12,
                    transition: "opacity 0.45s ease",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header row */}
                <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-2.5">
                        {/* Icon box */}
                        <div
                            className="flex items-center justify-center w-9 h-9"
                            style={{
                                border: `1px solid ${accentRgba}0.2)`,
                                background: `${accentRgba}0.06)`,
                                borderRadius: "8px",
                            }}
                        >
                            <span
                                className={`material-symbols-outlined ${iconColor} text-xl`}
                                style={{
                                    transform: hovered ? "scale(1.12)" : "scale(1)",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                {icon}
                            </span>
                        </div>
                        {/* Badge chip */}
                        <span
                            className="text-[8px] uppercase font-headline"
                            style={{
                                color: accentHex,
                                border: `1px solid ${accentRgba}0.25)`,
                                background: `${accentRgba}0.07)`,
                                borderRadius: "6px",
                                padding: "2px 7px",
                                letterSpacing: "0.18em",
                            }}
                        >
                            {badge}
                        </span>
                    </div>
                    {/* Arrow icon */}
                    <span
                        className="material-symbols-outlined text-lg"
                        style={{
                            color: hovered ? "#ffffff" : "#adaaaa",
                            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
                            transition: "color 0.3s ease, transform 0.3s ease",
                        }}
                    >
                        north_east
                    </span>
                </div>

                {/* Title + description */}
                <h3
                    className="font-headline font-bold text-white mb-1.5 tracking-tight"
                    style={{ fontSize: "1.1rem" }}
                >
                    {title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
            </div>
        </Link>
    );
}