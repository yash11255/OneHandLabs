"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: string, duration = 1800, triggerRef: React.RefObject<HTMLElement | null>) {
    const [display, setDisplay] = useState("0");
    const startedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true;
                    const numMatch = target.match(/[\d.]+/);
                    if (!numMatch) { setDisplay(target); return; }
                    const end = parseFloat(numMatch[0]);
                    const suffix = target.slice(numMatch[0].length);
                    const prefix = target.slice(0, target.indexOf(numMatch[0]));
                    const steps = 50;
                    const stepMs = duration / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += 1;
                        const val = end * (current / steps);
                        setDisplay(`${prefix}${Number.isInteger(end) ? Math.round(val) : val.toFixed(1)}${suffix}`);
                        if (current >= steps) { setDisplay(target); clearInterval(timer); }
                    }, stepMs);
                }
            },
            { threshold: 0.3 }
        );
        if (triggerRef.current) observer.observe(triggerRef.current);
        return () => observer.disconnect();
    }, [target, duration, triggerRef]);

    return display;
}

function AnimatedStat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const count = useCountUp(value, 1800, ref);
    return (
        <div ref={ref} className="flex flex-col">
            <div className={`text-4xl font-headline font-bold ${accent ? "text-primary" : "text-tertiary"}`}>{count}</div>
            <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{label}</div>
        </div>
    );
}

export default function FeaturedResults() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-24 bg-surface max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                        Platform Results
                    </span>
                    <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight leading-none">
                        Proven Enterprise<br />Impact.
                    </h2>
                </div>
                <div className="text-on-surface-variant text-right md:max-w-xs font-light italic">
                    &quot;Automating payroll, HR and customer ops — so your team focuses on what matters.&quot;
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Large Stat Card — Payroll Accuracy */}
                <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container p-8 md:p-12 transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/5">
                    <div className="relative z-10">
                        <div className="text-6xl md:text-[8rem] font-headline font-bold leading-none tracking-tighter text-white mb-4">
                            99<span className="text-primary">%</span>
                        </div>
                        <div className="text-xl font-headline font-bold text-white mb-6 uppercase tracking-widest">
                            Payroll Accuracy
                        </div>
                        <p className="text-on-surface-variant max-w-md">
                            PaySync&apos;s automated calculation engine handles TDS, EPF, ESI and professional tax with near-zero error rates — audited across 60+ enterprise deployments.
                        </p>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />
                </div>

                {/* Small Vertical Card — Onboarding Speed */}
                <div className="md:col-span-4 bg-gradient-to-br from-primary to-tertiary p-1 rounded-xl group">
                    <div className="w-full h-full bg-surface-container-lowest rounded-[calc(0.75rem-1px)] p-10 flex flex-col justify-between items-start">
                        <div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                                speed
                            </span>
                            <div className="text-5xl font-headline font-bold text-white mb-2">
                                3<span className="text-primary">×</span>
                            </div>
                            <div className="text-sm font-headline text-on-surface-variant uppercase tracking-widest">
                                Faster HR Onboarding
                            </div>
                        </div>
                        <p className="text-xs text-on-surface-variant font-light mt-8">
                            HRMS Pro reduces new-hire setup from days to hours with automated document collection and e-signing.
                        </p>
                    </div>
                </div>

                {/* Image Card — CRM theme */}
                <div className="md:col-span-4 aspect-square md:aspect-auto rounded-xl overflow-hidden relative group">
                    <img
                        alt="Enterprise CRM dashboard"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white font-headline text-lg font-bold tracking-tight uppercase">
                            CRM Intelligence
                        </div>
                    </div>
                </div>

                {/* Final Stat Card — Enterprise KPIs */}
                <div className="md:col-span-8 glass-panel p-8 md:p-12 rounded-xl border border-outline-variant/10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h3 className="text-3xl font-headline font-bold text-white mb-4">Enterprise Velocity</h3>
                        <p className="text-on-surface-variant">
                            From day-one deployment to full-team adoption in under two weeks. Our implementation team handles data migration, role configuration, and live training sessions.
                        </p>
                    </div>
                    <div className="flex-none grid grid-cols-2 gap-8 text-center">
                        <AnimatedStat value="60+" label="Deployments" accent />
                        <AnimatedStat value="14d" label="Avg. Go-Live" />
                        <AnimatedStat value="4.9★" label="Client Rating" accent />
                        <AnimatedStat value="98%" label="Retention" />
                    </div>
                </div>
            </div>
        </section>
    );
}
