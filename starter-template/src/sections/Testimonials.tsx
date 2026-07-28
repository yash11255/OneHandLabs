"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const highlights = [
    {
        name: "iMedi.health",
        role: "Regenerative Health Ecosystem",
        result: "A digital healthcare ecosystem built in collaboration with Dr. Ashish Kalla — integrated medical services, personal branding, and organic growth from launch.",
        tag: "Healthcare",
        slug: "imedi-digital-health-ecosystem",
    },
    {
        name: "ABCD.health",
        role: "Obesity Management Platform",
        result: "A specialized clinical knowledge platform for Adiposity-Based Chronic Disease, engineered to drive consistent monthly organic sessions from patients and clinicians alike.",
        tag: "Healthcare",
        slug: "abcd-health-obesity-management",
    },
    {
        name: "Cure Stone",
        role: "Urology & Kidney Stone Treatment",
        result: "Gurgaon's premier urology platform, built to solve a real gap — patient enquiries rose substantially within 60 days of launch.",
        tag: "Healthcare",
        slug: "cure-stone-urology-gurgaon",
    },
    {
        name: "Medikold",
        role: "Pharmaceutical Digital Infrastructure",
        result: "Digital infrastructure for a pharmaceutical services and medical supply chain platform, built to scale with real operational demand.",
        tag: "Healthcare",
        slug: "medikold-pharma-platform",
    },
];

const tagColors: Record<string, { color: string; bg: string; border: string }> = {
    Healthcare: { color: "#34d399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)" },
};

export default function Testimonials() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-32 px-6 md:px-24 overflow-hidden"
            style={{ background: "rgba(10,10,12,1)" }}
        >
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                            Case Studies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
                            Real Work.<br />Real Clients.
                        </h2>
                    </div>
                    <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
                        7+ healthcare brands trust ONE Hand Labs to build and grow their digital presence — see the full portfolio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {highlights.map((t, i) => {
                        const tc = tagColors[t.tag];
                        return (
                            <Link
                                href={`/blog/${t.slug}`}
                                key={t.slug}
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(28px)",
                                    transition: `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s, border-color 0.3s ease`,
                                    background: "rgba(19,19,19,0.9)",
                                    border: "1px solid rgba(72,72,71,0.2)",
                                    borderRadius: "16px",
                                    padding: "2rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    display: "block",
                                }}
                                className="group hover:!border-[rgba(52,211,153,0.35)]"
                            >
                                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base font-body">
                                    {t.result}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-headline font-bold text-white text-sm">{t.name}</div>
                                        <div className="text-on-surface-variant text-xs mt-0.5">{t.role}</div>
                                    </div>
                                    <span style={{
                                        fontSize: "0.65rem", fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                                        letterSpacing: "0.18em", textTransform: "uppercase",
                                        color: tc.color, background: tc.bg, border: `1px solid ${tc.border}`,
                                        borderRadius: 6, padding: "3px 9px",
                                    }}>
                                        {t.tag}
                                    </span>
                                </div>

                                <div className="mt-5 flex items-center gap-2 font-headline font-bold text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: tc.color, letterSpacing: "0.08em" }}>
                                    Read the case study
                                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
