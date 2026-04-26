"use client";
import { useEffect, useRef, useState } from "react";

export default function ProductsHero() {
    const [mounted, setMounted] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);
        videoRef.current?.play().catch(() => {});
    }, []);

    const products = [
        { key: "CRM", label: "CRM Nexus", color: "#a78bfa" },
        { key: "HR", label: "HRMS Pro", color: "#c1fffe" },
        { key: "PAY", label: "PaySync", color: "#63baff" },
    ];

    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 pt-32 pb-20 overflow-hidden">
            <style>{`
                @keyframes products-gradient { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
                .products-gradient-x { background-size:200% 100%; animation: products-gradient 5s ease infinite; }
            `}</style>

            {/* Video BG */}
            <video ref={videoRef} aria-hidden autoPlay muted loop playsInline preload="auto"
                onCanPlay={() => setVideoLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                style={{ opacity: videoLoaded ? 0.55 : 0, transition: "opacity 1.4s ease", filter: "saturate(0.3) brightness(0.5) contrast(1.3)" }}>
                <source src="https://assets.mixkit.co/videos/4119/4119-720.mp4" type="video/mp4" />
                <source src="https://assets.mixkit.co/videos/1273/1273-720.mp4" type="video/mp4" />
            </video>
            <div aria-hidden className="absolute inset-0 pointer-events-none z-[1]"
                style={{ background: "linear-gradient(to right, rgba(14,14,14,0.95) 0%, rgba(14,14,14,0.75) 60%, rgba(14,14,14,0.5) 100%)" }} />
            <div aria-hidden className="absolute inset-0 pointer-events-none z-0"
                style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.4 }} />

            <div className="relative z-10 w-full max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border rounded-full"
                    style={{ background: "rgba(19,19,19,0.8)", borderColor: "rgba(167,139,250,0.25)",
                        opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease" }}>
                    <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
                    <span className="text-[10px] uppercase font-headline tracking-[0.22em]" style={{ color: "#a78bfa" }}>
                        Product Suite · 3 Modules
                    </span>
                </div>

                <h1 className="font-headline font-bold tracking-tighter text-white mb-6"
                    style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.05,
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}>
                    Software That<br />
                    <span className="products-gradient-x text-transparent bg-clip-text inline-block"
                        style={{ backgroundImage: "linear-gradient(90deg, #a78bfa 0%, #c1fffe 45%, #63baff 75%, #a78bfa 100%)" }}>
                        Runs Your Business.
                    </span>
                </h1>

                <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-12 leading-relaxed font-body"
                    style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
                    Three tightly integrated modules — CRM, HR management, and payroll — built to work seamlessly together in one unified platform.
                </p>

                <div className="flex flex-wrap gap-3"
                    style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s" }}>
                    {products.map((p) => (
                        <div key={p.key} className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-headline font-bold text-sm"
                            style={{ background: "rgba(19,19,19,0.9)", border: `1px solid ${p.color}33`, color: p.color }}>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">{p.key}</span>
                            {p.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
