"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        quote: "PaySync saved us 3 days every month on salary processing. TDS calculations are flawless — our CA hasn't flagged a single error since we went live.",
        name: "Rakesh Mehta",
        role: "CFO, NovaBuild Infrastructure",
        stars: 5,
        tag: "Payroll",
    },
    {
        quote: "HRMS Pro completely transformed our onboarding. New hires are productive within their first week now. The offer letter automation alone saved us countless hours.",
        name: "Priya Sharma",
        role: "Head of HR, Horizon Logistics",
        stars: 5,
        tag: "HRMS",
    },
    {
        quote: "CRM Nexus gave our sales team full pipeline visibility. We went from closing 20% of leads to 38% in four months — the follow-up automation is a game changer.",
        name: "Arjun Tiwari",
        role: "VP Sales, UrbanEdge Realty",
        stars: 5,
        tag: "CRM",
    },
    {
        quote: "The implementation team was exceptional. We had 200 employees configured, data migrated and live in under 10 days. Absolutely unmatched support.",
        name: "Sunita Rawat",
        role: "Operations Director, MedPlus Clinics",
        stars: 5,
        tag: "HRMS",
    },
];

const tagColors: Record<string, { color: string; bg: string; border: string }> = {
    Payroll: { color: "#63baff", bg: "rgba(99,186,255,0.08)", border: "rgba(99,186,255,0.25)" },
    HRMS: { color: "#c1fffe", bg: "rgba(193,255,254,0.08)", border: "rgba(193,255,254,0.25)" },
    CRM: { color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)" },
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
                            Client Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
                            What Teams<br />Say About Us.
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {["R", "P", "A", "S"].map((l, i) => (
                                <div key={i} className="w-9 h-9 rounded-full border-2 border-black font-headline font-bold text-xs flex items-center justify-center text-white"
                                    style={{ background: ["#c1fffe22","#63baff22","#a78bfa22","#c1fffe22"][i], color: ["#c1fffe","#63baff","#a78bfa","#c1fffe"][i], zIndex: 4 - i }}>
                                    {l}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="text-white font-headline font-bold text-sm">4.9 / 5.0</div>
                            <div className="text-on-surface-variant text-[10px] uppercase tracking-wider">avg. rating</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => {
                        const tc = tagColors[t.tag];
                        return (
                            <div
                                key={i}
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(28px)",
                                    transition: `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s`,
                                    background: "rgba(19,19,19,0.9)",
                                    border: "1px solid rgba(72,72,71,0.2)",
                                    borderRadius: "16px",
                                    padding: "2rem",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Quote mark */}
                                <div style={{ position: "absolute", top: 16, right: 20, fontSize: "5rem", lineHeight: 1, color: tc.color, opacity: 0.08, fontFamily: "serif", pointerEvents: "none" }}>&ldquo;</div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.stars }).map((_, si) => (
                                        <span key={si} className="material-symbols-outlined" style={{ color: "#fbbf24", fontSize: 16, fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>

                                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base font-body">
                                    &ldquo;{t.quote}&rdquo;
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
