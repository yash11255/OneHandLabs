"use client";

import { useState } from "react";

export default function Contact() {
    const [objective, setObjective] = useState<"product" | "brand">("product");

    return (
        <section id="contact" className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
            {/* Background Grid & Blurs */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, #484847 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                ></div>
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary-container/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <span className="font-headline text-primary tracking-[0.3em] text-[10px] uppercase block mb-4">
                        Precision Intake
                    </span>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-6">
                        Let&apos;s scale <br />
                        your vision.
                    </h1>
                    <p className="font-body text-on-surface-variant text-lg max-w-lg leading-relaxed">
                        A digital laboratory where code meets creativity. Tell us about your project and we&apos;ll
                        engineer the solution.
                    </p>
                </div>

                {/* Form Container (Glassmorphism) */}
                <div className="glass-panel p-6 md:p-12 rounded-xl border border-outline-variant/15 shadow-[0_0_40px_rgba(0,255,255,0.02)]">
                    <form className="space-y-10">
                        {/* Toggle Switch (Laboratory Toggles) */}
                        <div className="space-y-4">
                            <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                                Objective
                            </label>
                            <div className="grid grid-cols-2 p-1.5 bg-surface-container-lowest rounded-lg">
                                <button
                                    className={`py-3 px-4 rounded-md font-headline text-xs font-bold tracking-wider uppercase transition-all ${
                                        objective === "product"
                                            ? "bg-surface-container-high text-primary"
                                            : "text-on-surface-variant hover:text-white"
                                    }`}
                                    type="button"
                                    onClick={() => setObjective("product")}
                                >
                                    Build a Product
                                </button>
                                <button
                                    className={`py-3 px-4 rounded-md font-headline text-xs font-bold tracking-wider uppercase transition-all ${
                                        objective === "brand"
                                            ? "bg-surface-container-high text-primary"
                                            : "text-on-surface-variant hover:text-white"
                                    }`}
                                    type="button"
                                    onClick={() => setObjective("brand")}
                                >
                                    Grow a Brand
                                </button>
                            </div>
                        </div>

                        {/* Single Column Fields */}
                        <div className="space-y-8">
                            <div className="group">
                                <label
                                    className="font-body text-xs tracking-widest uppercase text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                                    htmlFor="name"
                                >
                                    Your Name
                                </label>
                                <input
                                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary text-white font-body transition-all placeholder:text-neutral-700"
                                    id="name"
                                    name="name"
                                    placeholder="e.g. Julian Stark"
                                    type="text"
                                />
                            </div>
                            <div className="group">
                                <label
                                    className="font-body text-xs tracking-widest uppercase text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary text-white font-body transition-all placeholder:text-neutral-700"
                                    id="email"
                                    name="email"
                                    placeholder="stark@labs.io"
                                    type="email"
                                />
                            </div>
                            <div className="group">
                                <label
                                    className="font-body text-xs tracking-widest uppercase text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                                    htmlFor="message"
                                >
                                    Project Brief
                                </label>
                                <textarea
                                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary text-white font-body transition-all resize-none placeholder:text-neutral-700"
                                    id="message"
                                    name="message"
                                    placeholder="Describe the problem you want us to solve..."
                                    rows={4}
                                ></textarea>
                            </div>
                        </div>

                        {/* Primary Action */}
                        <div className="pt-4">
                            <button
                                className="group relative w-full overflow-hidden bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-sm tracking-[0.2em] uppercase py-5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                                type="submit"
                            >
                                <span className="relative z-10">Initialize Inquiry</span>
                            </button>
                            <p className="text-center text-neutral-600 font-body text-[10px] mt-6 tracking-widest uppercase">
                                Estimated Response: &lt; 24 Hours
                            </p>
                        </div>
                    </form>
                </div>

                {/* Secondary Info (Minimal Bento) */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-surface-container-low p-6 rounded-lg transition-colors hover:bg-surface-container">
                        <span className="material-symbols-outlined text-primary mb-3">terminal</span>
                        <h3 className="font-headline font-bold text-white text-sm uppercase mb-1">Direct Relay</h3>
                        <p className="font-body text-on-surface-variant text-xs">systems@onehandlabs.com</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-lg transition-colors hover:bg-surface-container">
                        <span className="material-symbols-outlined text-primary mb-3">call</span>
                        <h3 className="font-headline font-bold text-white text-sm uppercase mb-1">Comm Line</h3>
                        <p className="font-body text-on-surface-variant text-xs">+91 8950 143 430</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-lg transition-colors hover:bg-surface-container">
                        <span className="material-symbols-outlined text-primary mb-3">location_on</span>
                        <h3 className="font-headline font-bold text-white text-sm uppercase mb-1">Digital Node</h3>
                        <p className="font-body text-on-surface-variant text-xs">Delhi NCR / Gurugram</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
