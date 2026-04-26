"use client";
import { useEffect, useRef, useState } from "react";

const team = [
    {
        name: "Aditya Rana",
        role: "Co-founder & CTO",
        bio: "Full-stack architect with 10+ years building enterprise SaaS at scale. Leads backend engineering for HRMS and PaySync.",
        icon: "code",
        color: "#c1fffe",
        colorRgb: "193,255,254",
        tags: ["Systems Design", "Node.js", "AWS"],
    },
    {
        name: "Sneha Kohli",
        role: "Head of Product",
        bio: "Former HR operations lead turned product builder. Obsessed with workflows that reduce manual work to near-zero.",
        icon: "inventory",
        color: "#63baff",
        colorRgb: "99,186,255",
        tags: ["Product Strategy", "UX Research", "HRMS"],
    },
    {
        name: "Varun Malhotra",
        role: "Head of Sales & CRM",
        bio: "Built and led 50-person B2B sales teams. Now channels that experience into making CRM Nexus more effective for every team that uses it.",
        icon: "hub",
        color: "#a78bfa",
        colorRgb: "167,139,250",
        tags: ["B2B Sales", "CRM Strategy", "Revenue Ops"],
    },
    {
        name: "Priya Nair",
        role: "Payroll Compliance Lead",
        bio: "Chartered Accountant with deep expertise in Indian labour law, TDS, EPF & ESI filings. Every PaySync calculation has her fingerprints on it.",
        icon: "payments",
        color: "#63baff",
        colorRgb: "99,186,255",
        tags: ["CA", "Tax Compliance", "Payroll"],
    },
];

export default function TeamSection() {
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
        <section ref={sectionRef} className="py-32 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                        The Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
                        People Building<br />the Platform.
                    </h2>
                    <p className="text-on-surface-variant mt-5 max-w-lg mx-auto">
                        A tight-knit team of engineers, product thinkers, and domain experts who have lived the problems they&apos;re solving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {team.map((member, i) => (
                        <div key={member.name}
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
                            }}>
                            {/* Glow background */}
                            <div style={{ position: "absolute", top: -20, right: -20, width: 180, height: 180, borderRadius: "50%", background: member.color, filter: "blur(80px)", opacity: 0.05, pointerEvents: "none" }} />

                            <div className="flex items-start gap-4 mb-5">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `rgba(${member.colorRgb},0.1)`, border: `1px solid rgba(${member.colorRgb},0.2)` }}>
                                    <span className="material-symbols-outlined" style={{ color: member.color, fontSize: 22 }}>{member.icon}</span>
                                </div>
                                <div>
                                    <div className="font-headline font-bold text-white text-lg">{member.name}</div>
                                    <div className="text-xs uppercase tracking-widest font-headline mt-0.5" style={{ color: member.color }}>{member.role}</div>
                                </div>
                            </div>

                            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{member.bio}</p>

                            <div className="flex flex-wrap gap-2">
                                {member.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-headline font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                                        style={{ background: `rgba(${member.colorRgb},0.07)`, border: `1px solid rgba(${member.colorRgb},0.18)`, color: member.color }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values row */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        { icon: "verified", title: "Compliance First", text: "Every feature is designed with Indian labour law and tax regulations at its core — not bolted on after." },
                        { icon: "speed", title: "Ship Fast, Iterate", text: "We run 2-week deployment sprints. Your feedback shapes the product roadmap directly." },
                        { icon: "support_agent", title: "White Glove Support", text: "Dedicated implementation manager + 8×5 support during onboarding and beyond." },
                    ].map((v) => (
                        <div key={v.title} className="p-6 rounded-2xl" style={{ background: "rgba(19,19,19,0.6)", border: "1px solid rgba(72,72,71,0.15)" }}>
                            <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: 28, fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                            <h3 className="font-headline font-bold text-white mb-2">{v.title}</h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed">{v.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
