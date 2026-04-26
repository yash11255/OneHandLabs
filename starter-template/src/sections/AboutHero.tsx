"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
    const [mounted, setMounted] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);
        videoRef.current?.play().catch(() => { });
    }, []);

    const techStack = ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript", "Kubernetes", "Kafka", "Elasticsearch", "Terraform"];

    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-20 overflow-hidden">
            <style>{`
                @keyframes about-drift { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
                .about-drift { animation: about-drift 10s ease-in-out infinite; }
            `}</style>

            <video ref={videoRef} aria-hidden autoPlay muted loop playsInline preload="auto"
                onCanPlay={() => setVideoLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 about-drift"
                style={{ opacity: videoLoaded ? 0.5 : 0, transition: "opacity 1.4s ease", filter: "saturate(0.3) brightness(0.45) contrast(1.3)" }}>
                <source src="https://assets.mixkit.co/videos/44818/44818-720.mp4" type="video/mp4" />
                <source src="https://assets.mixkit.co/videos/1273/1273-720.mp4" type="video/mp4" />
            </video>
            <div aria-hidden className="absolute inset-0 z-[1]"
                style={{ background: "linear-gradient(135deg, rgba(14,14,14,0.97) 0%, rgba(14,14,14,0.75) 100%)" }} />
            <div aria-hidden className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full z-0 pointer-events-none"
                style={{ background: "#63baff", filter: "blur(150px)", opacity: 0.04 }} />

            <div className="relative z-10 max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Left text */}
                <div>
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-6 block"
                        style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease" }}>
                        Our Story
                    </span>
                    <h1 className="font-headline font-bold tracking-tighter text-white mb-8"
                        style={{
                            fontSize: "clamp(2rem, 5.5vw, 3.8rem)", lineHeight: 1.05,
                            opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)",
                            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s"
                        }}>
                        Built by Builders.<br />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #c1fffe, #63baff)" }}>
                            For Growing Teams.
                        </span>
                    </h1>
                    <p className="text-on-surface-variant leading-relaxed text-base max-w-lg mb-8"
                        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
                        ONE Hand Labs was founded on a single observation: Indian SMEs were spending more time managing disconnected tools than actually running their business.
                        We set out to build the unified internal operating system they never had — CRM, HRMS, and Payroll, woven together perfectly.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-base max-w-lg"
                        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s" }}>
                        Based out of Delhi NCR, our engineers and domain experts have collectively implemented HR and payroll systems for companies from 20 to 2000+ employees — across manufacturing, retail, logistics, real estate, and professional services.
                    </p>
                </div>

                {/* Right stats + stack */}
                <div className="flex flex-col gap-6"
                    style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s" }}>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "2019", label: "Founded" },
                            { value: "10+", label: "Enterprise Clients" },
                            { value: "10k+", label: "Employees Managed" },
                            { value: "Delhi NCR", label: "Headquarters" },
                        ].map((s) => (
                            <div key={s.label} className="p-5 rounded-2xl" style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.25)" }}>
                                <div className="text-2xl font-headline font-bold text-primary mb-1">{s.value}</div>
                                <div className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl" style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.25)" }}>
                        <div className="text-xs uppercase tracking-[0.3em] text-on-surface-variant font-headline mb-4">Heavy Technologies</div>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((t) => (
                                <span key={t} className="text-xs font-headline font-bold px-3 py-1.5 rounded-lg"
                                    style={{ background: "rgba(193,255,254,0.07)", border: "1px solid rgba(193,255,254,0.15)", color: "#c1fffe" }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
