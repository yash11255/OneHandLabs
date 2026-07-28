"use client";
import { useRef } from "react";
import Image from "next/image";

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
                {/* Large Card — Payroll Automation */}
                <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container p-8 md:p-12 transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/5">
                    <div className="relative z-10">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                        </span>
                        <div className="text-xl font-headline font-bold text-white mb-6 uppercase tracking-widest">
                            Compliance-First Payroll
                        </div>
                        <p className="text-on-surface-variant max-w-md">
                            PaySync&apos;s automated calculation engine handles TDS, EPF, ESI, and professional tax every cycle — flagging compliance issues before payroll runs, not after.
                        </p>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />
                </div>

                {/* Small Vertical Card — Onboarding */}
                <div className="md:col-span-4 bg-gradient-to-br from-primary to-tertiary p-1 rounded-xl group">
                    <div className="w-full h-full bg-surface-container-lowest rounded-[calc(0.75rem-1px)] p-10 flex flex-col justify-between items-start">
                        <div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                                speed
                            </span>
                            <div className="text-2xl font-headline font-bold text-white mb-2 leading-snug">
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
                    <Image
                        alt="Sales team reviewing customer data on a laptop"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white font-headline text-lg font-bold tracking-tight uppercase">
                            CRM Intelligence
                        </div>
                    </div>
                </div>

                {/* Final Card — Implementation */}
                <div className="md:col-span-8 glass-panel p-8 md:p-12 rounded-xl border border-outline-variant/10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h3 className="text-3xl font-headline font-bold text-white mb-4">Hands-On Implementation</h3>
                        <p className="text-on-surface-variant">
                            Our team handles data migration, role configuration, and live training sessions directly — no self-serve onboarding left to chance.
                        </p>
                    </div>
                    <div className="flex-none grid grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">database</span>
                            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Data Migration</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">tune</span>
                            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Role Setup</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">school</span>
                            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Live Training</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
