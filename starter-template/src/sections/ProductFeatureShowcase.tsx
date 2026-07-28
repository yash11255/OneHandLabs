"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
    {
        id: "crm",
        badge: "CRM Nexus",
        accentColor: "#a78bfa",
        accentRgb: "167,139,250",
        icon: "hub",
        headline: "Close More Deals. Lose No Lead.",
        description: "CRM Nexus gives your sales team a complete view of every customer relationship — from first touch to repeat purchase. Automate follow-ups, score leads by behaviour, and forecast revenue with AI-assisted pipeline analytics.",
        video: "https://assets.mixkit.co/videos/4119/4119-720.mp4",
        features: [
            { icon: "timeline", text: "Visual deal pipeline with drag-and-drop stages" },
            { icon: "psychology", text: "Behavioural lead scoring & auto-routing" },
            { icon: "campaign", text: "Automated email & WhatsApp follow-up sequences" },
            { icon: "analytics", text: "Revenue forecasting & sales velocity reports" },
            { icon: "integration_instructions", text: "Connect with Tally, Zoho, Razorpay & more" },
            { icon: "phone_in_talk", text: "Built-in call logging & activity timeline" },
        ],
    },
    {
        id: "hrms",
        badge: "HRMS Pro",
        accentColor: "#c1fffe",
        accentRgb: "193,255,254",
        icon: "people",
        headline: "HR That Runs Itself.",
        description: "HRMS Pro handles the complete employee lifecycle — from digital offer letters and e-onboarding to exit interviews and full and final settlement. Configure custom workflows for any company structure.",
        video: "https://assets.mixkit.co/videos/3524/3524-720.mp4",
        features: [
            { icon: "how_to_reg", text: "Digital onboarding with document e-signing" },
            { icon: "schedule", text: "Smart attendance, shifts & biometric sync" },
            { icon: "event_available", text: "Leave management with approval workflows" },
            { icon: "military_tech", text: "360° performance appraisal system" },
            { icon: "gavel", text: "PF, ESI, PT statutory compliance built-in" },
            { icon: "exit_to_app", text: "Automated full & final settlement" },
        ],
    },
    {
        id: "payroll",
        badge: "PaySync",
        accentColor: "#63baff",
        accentRgb: "99,186,255",
        icon: "payments",
        headline: "Payroll. Done. Zero Errors.",
        description: "PaySync auto-calculates salaries, deductions, TDS, EPF, ESI, and professional tax for every employee — across all states, every month. Generate payslips, Form 16, and 24Q filings without a single spreadsheet.",
        video: "https://assets.mixkit.co/videos/40306/40306-720.mp4",
        features: [
            { icon: "calculate", text: "Auto-calc of CTC, gross, net & deductions" },
            { icon: "receipt_long", text: "Payslip generation & bulk email dispatch" },
            { icon: "account_balance", text: "TDS, EPF, ESI & professional tax filing" },
            { icon: "description", text: "Form 16 & 24Q report generation" },
            { icon: "fact_check", text: "Multi-state payroll compliance engine" },
            { icon: "savings", text: "Direct bank transfer via NEFT/IMPS integration" },
        ],
    },
];

export default function ProductFeatureShowcase() {
    const [videoLoaded, setVideoLoaded] = useState<Record<string, boolean>>({});

    return (
        <section id="modules" className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
            <div className="max-w-[1280px] mx-auto space-y-40">
                {products.map((p, idx) => {
                    const isReverse = idx % 2 === 1;
                    return (
                        <div key={p.id}
                            className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
                            {/* Video / visual side */}
                            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10", border: `1px solid rgba(${p.accentRgb},0.15)` }}>
                                <video
                                    autoPlay muted loop playsInline preload="auto"
                                    onCanPlay={() => setVideoLoaded(prev => ({ ...prev, [p.id]: true }))}
                                    className="w-full h-full object-cover"
                                    style={{ opacity: videoLoaded[p.id] ? 1 : 0, transition: "opacity 1s ease", filter: "saturate(0.45) brightness(0.7) contrast(1.2)" }}>
                                    <source src={p.video} type="video/mp4" />
                                </video>
                                {/* overlay */}
                                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(14,14,14,0.3) 0%, transparent 60%, rgba(${p.accentRgb},0.06) 100%)` }} />
                                {/* product badge floating */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
                                    style={{ background: "rgba(10,10,12,0.85)", border: `1px solid rgba(${p.accentRgb},0.3)`, backdropFilter: "blur(8px)" }}>
                                    <span className="material-symbols-outlined" style={{ color: p.accentColor, fontSize: 16 }}>{p.icon}</span>
                                    <span className="font-headline font-bold text-xs uppercase tracking-widest" style={{ color: p.accentColor }}>{p.badge}</span>
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="w-full md:w-1/2">
                                <span className="text-[10px] uppercase tracking-[0.35em] font-headline font-bold mb-4 block" style={{ color: p.accentColor }}>
                                    {p.badge}
                                </span>
                                <h2 className="font-headline font-bold text-white tracking-tight mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1 }}>
                                    {p.headline}
                                </h2>
                                <p className="text-on-surface-variant leading-relaxed mb-8 text-base">
                                    {p.description}
                                </p>

                                <ul className="space-y-3 mb-10">
                                    {p.features.map((f) => (
                                        <li key={f.text} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                                            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                                                style={{ background: `rgba(${p.accentRgb},0.08)`, border: `1px solid rgba(${p.accentRgb},0.2)` }}>
                                                <span className="material-symbols-outlined" style={{ color: p.accentColor, fontSize: 16 }}>{f.icon}</span>
                                            </div>
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact"
                                    className="inline-flex items-center gap-2 font-headline font-bold text-sm uppercase px-7 py-3 rounded-xl"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(${p.accentRgb},0.15) 0%, rgba(${p.accentRgb},0.05) 100%)`,
                                        border: `1px solid rgba(${p.accentRgb},0.35)`,
                                        color: p.accentColor,
                                        letterSpacing: "0.06em",
                                        transition: "all 0.25s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.background = `rgba(${p.accentRgb},0.2)`;
                                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 24px rgba(${p.accentRgb},0.2)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.background = `linear-gradient(135deg, rgba(${p.accentRgb},0.15) 0%, rgba(${p.accentRgb},0.05) 100%)`;
                                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                                    }}>
                                    Request a Demo
                                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
