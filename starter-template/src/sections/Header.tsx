"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Header() {
    return (
        <header id="home" className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center">
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(52,211,153,0.10), transparent 70%)" }}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border rounded-full"
                    style={{ background: "rgba(19,19,19,0.7)", borderColor: "rgba(52,211,153,0.25)" }}
                >
                    <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "#34d399" }} />
                    <span className="text-[10px] uppercase font-headline whitespace-nowrap" style={{ letterSpacing: "0.22em", color: "#34d399" }}>
                        Healthcare Software &amp; SEO Agency
                    </span>
                </motion.div>

                <motion.h1
                    custom={0.1}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="font-headline font-bold tracking-tighter text-white mb-7"
                    style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.0, textWrap: "balance" }}
                >
                    Software &amp; SEO for<br />
                    <span
                        className="text-transparent bg-clip-text inline-block"
                        style={{ backgroundImage: "linear-gradient(90deg, #34d399 0%, #63baff 100%)" }}
                    >
                        Hospitals &amp; Clinics.
                    </span>
                </motion.h1>

                <motion.p
                    custom={0.2}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-body"
                >
                    Websites, healthcare SEO, and custom software development for hospitals, clinics, and physicians in Delhi NCR and Gurgaon — the same playbook behind iMedi.health, ABCD.health, and Cure Stone.
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
                            background: "linear-gradient(135deg, #34d399 0%, #63baff 100%)",
                            color: "#022c1e",
                            padding: "14px 34px",
                            borderRadius: "999px",
                            letterSpacing: "0.04em",
                        }}
                    >
                        Start a Project
                    </Link>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-1.5 font-headline font-bold text-sm text-white transition-colors duration-300 hover:text-primary"
                    >
                        See our case studies
                        <span aria-hidden>›</span>
                    </Link>
                </motion.div>
            </div>
        </header>
    );
}
