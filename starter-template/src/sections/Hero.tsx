"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface HeroProps {
    titlePrefix?: string;
    titleHighlight?: string;
    titleSuffix?: string;
    subtitle?: string;
}

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    }),
};

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
export default function Hero({
    titlePrefix = "One platform.",
    titleHighlight = "Every operation.",
    titleSuffix = "",
    subtitle = "Website development, SEO that gets you ranking, and enterprise software — CRM, HRMS, and Payroll — built for how Indian businesses actually grow."
}: HeroProps = {}) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden text-center">
            {/* ── Quiet gradient environment — no video, no noise ── */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,186,255,0.10), transparent 70%)" }}
            />
            <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full pointer-events-none"
                style={{ background: "#c1fffe", filter: "blur(200px)", opacity: 0.045 }}
            />

            {/* ── Headline block ── */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border rounded-full"
                    style={{ background: "rgba(19,19,19,0.7)", borderColor: "rgba(193,255,254,0.18)" }}
                >
                    <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "#c1fffe" }} />
                    <span
                        className="text-[10px] uppercase font-headline whitespace-nowrap"
                        style={{ letterSpacing: "0.22em", color: "#c1fffe" }}
                    >
                        Website Development · SEO · Enterprise Software
                    </span>
                </motion.div>

                <motion.h1
                    custom={0}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="font-headline font-bold tracking-tighter text-white mb-7"
                    style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)", lineHeight: 0.98, textWrap: "balance" }}
                >
                    {titlePrefix}
                    <br />
                    <span
                        className="text-transparent bg-clip-text inline-block"
                        style={{ backgroundImage: "linear-gradient(90deg, #c1fffe 0%, #63baff 100%)" }}
                    >
                        {titleHighlight}
                    </span>
                    {titleSuffix && (
                        <>
                            <br />
                            {titleSuffix}
                        </>
                    )}
                </motion.h1>

                <motion.p
                    custom={0.15}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed font-body"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    custom={0.3}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="flex flex-wrap items-center justify-center gap-8"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-headline font-bold text-sm uppercase transition-all duration-300 hover:opacity-90"
                        style={{
                            background: "linear-gradient(135deg, #c1fffe 0%, #63baff 100%)",
                            color: "#006767",
                            padding: "14px 34px",
                            borderRadius: "999px",
                            letterSpacing: "0.04em",
                        }}
                    >
                        Book a Demo
                    </Link>

                    <Link
                        href="/products"
                        className="inline-flex items-center gap-1.5 font-headline font-bold text-sm text-white transition-colors duration-300 hover:text-primary"
                        style={{ letterSpacing: "0.02em" }}
                    >
                        See the products
                        <span aria-hidden>›</span>
                    </Link>
                </motion.div>
            </div>

            {/* ── Abstract product visualization ── */}
            <motion.div
                custom={0.5}
                initial="hidden"
                animate="show"
                variants={rise}
                className="relative z-10 mt-20 w-full max-w-3xl mx-auto"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl overflow-hidden text-left"
                    style={{
                        background: "rgba(19,19,19,0.85)",
                        border: "1px solid rgba(72,72,71,0.3)",
                        boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 60px rgba(193,255,254,0.05)",
                    }}
                >
                    {/* Window chrome */}
                    <div className="flex items-center gap-1.5 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(72,72,71,0.25)" }}>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                    </div>

                    {/* Dashboard skeleton */}
                    <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(72,72,71,0.2)" }}>
                        {[
                            { label: "Pipeline Value", value: "₹42.6L", color: "#a78bfa" },
                            { label: "Payroll Run", value: "On Track", color: "#63baff" },
                            { label: "Open Positions", value: "6", color: "#c1fffe" },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6" style={{ background: "rgba(19,19,19,1)" }}>
                                <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                                    {stat.label}
                                </div>
                                <div className="font-headline font-bold text-xl" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-6 flex items-end gap-1.5" style={{ height: 110, background: "rgba(19,19,19,1)" }}>
                        {[38, 52, 44, 61, 58, 72, 66, 80, 74, 90, 84, 96].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 rounded-t-sm"
                                style={{
                                    height: `${h}%`,
                                    background: i === 11 ? "#c1fffe" : "rgba(193,255,254,0.18)",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
