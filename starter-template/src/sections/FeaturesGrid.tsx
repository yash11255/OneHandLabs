"use client";
import { useState, useRef, useEffect } from "react";

const features = [
    {
        icon: "people",
        title: "HRMS Pro",
        color: "#c1fffe",
        colorRgb: "193,255,254",
        description: "End-to-end employee lifecycle management — from hiring to exit — with automated leave, attendance, appraisal, and compliance workflows.",
        bullets: ["Smart attendance tracking", "Leave & shift management", "Performance appraisals", "Statutory compliance"],
    },
    {
        icon: "payments",
        title: "PaySync Payroll",
        color: "#63baff",
        colorRgb: "99,186,255",
        description: "Auto-calculate salaries, TDS, EPF, ESI, and professional tax every cycle. Generate payslips, Form 16, and audit-ready reports in one click.",
        bullets: ["TDS & EPF auto-calc", "Payslip generation", "Form 16 & 24Q filing", "Multi-state compliance"],
    },
    {
        icon: "hub",
        title: "CRM Nexus",
        color: "#a78bfa",
        colorRgb: "167,139,250",
        description: "Unified customer relationship platform with pipeline tracking, auto-follow-ups, lead scoring, and deep analytics to close more deals faster.",
        bullets: ["Visual deal pipeline", "Lead scoring & routing", "Automated follow-ups", "Revenue forecasting"],
    },
];

function FeatureCard({ icon, title, color, colorRgb, description, bullets, index }: typeof features[0] & { index: number }) {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                border: `1px solid ${hovered ? `rgba(${colorRgb},0.35)` : "rgba(72,72,71,0.2)"}`,
                background: hovered ? "rgba(26,26,26,0.95)" : "rgba(19,19,19,0.9)",
                borderRadius: "16px",
                boxShadow: hovered ? `0 0 40px rgba(${colorRgb},0.12), 0 8px 32px rgba(0,0,0,0.4)` : "0 2px 12px rgba(0,0,0,0.2)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease`,
            }}
        >
            {/* Top shimmer */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
                opacity: hovered ? 0.8 : 0.1, transition: "opacity 0.4s ease",
            }} />
            {/* Glow orb */}
            <div style={{
                position: "absolute", bottom: -40, right: -40, width: 160, height: 160,
                background: color, borderRadius: "50%", filter: "blur(80px)",
                opacity: hovered ? 0.15 : 0.04, transition: "opacity 0.5s ease",
                pointerEvents: "none",
            }} />

            {/* Icon */}
            <div style={{
                width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                background: `rgba(${colorRgb},0.08)`, border: `1px solid rgba(${colorRgb},0.2)`,
                marginBottom: "1.25rem",
            }}>
                <span className="material-symbols-outlined" style={{ color, fontSize: 24, transform: hovered ? "scale(1.15)" : "scale(1)", transition: "transform 0.3s ease" }}>
                    {icon}
                </span>
            </div>

            <h3 className="font-headline font-bold text-white mb-3" style={{ fontSize: "1.25rem" }}>{title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-5">{description}</p>

            <ul className="space-y-2">
                {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                        <span className="material-symbols-outlined" style={{ color, fontSize: 16, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function FeaturesGrid() {
    return (
        <section className="py-32 px-6 md:px-24" style={{ background: "rgba(14,14,14,1)" }}>
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                        Product Suite
                    </span>
                    <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                        One Platform.<br />Three Core Systems.
                    </h2>
                    <p className="text-on-surface-variant mt-6 max-w-xl mx-auto text-base leading-relaxed">
                        CRM, HRMS, and Payroll — deeply integrated, enterprise-ready, and built for the way Indian businesses actually work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <FeatureCard key={f.title} {...f} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
