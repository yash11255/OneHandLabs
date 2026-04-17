"use client";

import { useState } from "react";

// 👇 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyizy-qI9lmsAui9wPY1VU1VxLYqh-O0H7BJKT6jx4FQK9BgBdqVfsLunNNvOMfDHsN/exec";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [objective, setObjective] = useState<"product" | "brand">("product");
    const [formState, setFormState] = useState<FormState>("idle");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("loading");

        try {
            const payload = new FormData();
            payload.append("name", name);
            payload.append("phone", phone);
            payload.append("email", email);
            payload.append("message", message);
            payload.append("objective", objective === "product" ? "Build a Product" : "Grow a Brand");
            payload.append("timestamp", new Date().toISOString());

            await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                body: payload,
                mode: "no-cors",
            });

            setFormState("success");
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
        } catch {
            setFormState("error");
        }
    };

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
                    <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                        Get a Quote for <br />
                        Healthcare Marketing<br /> 
                        <span className="text-primary text-3xl md:text-5xl">in Delhi & Gurgaon</span>
                    </h1>
                    <h2 className="font-body text-on-surface-variant text-lg max-w-lg leading-relaxed">
                        Offices in Delhi NCR & Consulting in Gurgaon. Let&apos;s engineer your clinical growth.
                    </h2>
                </div>

                {/* Form Container */}
                <div className="glass-panel p-6 md:p-12 rounded-xl border border-outline-variant/15 shadow-[0_0_40px_rgba(0,255,255,0.02)]">
                    {formState === "success" ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                            <span
                                className="material-symbols-outlined text-primary text-6xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                check_circle
                            </span>
                            <h3 className="text-2xl font-headline font-bold text-white">Inquiry Initialized.</h3>
                            <p className="text-on-surface-variant text-sm max-w-xs">
                                We&apos;ve received your brief. Expect a response within 24 hours.
                            </p>
                            <button
                                onClick={() => setFormState("idle")}
                                className="mt-4 px-8 py-3 border border-outline-variant/20 text-white font-headline text-xs uppercase tracking-widest rounded-lg hover:bg-white/5 transition-all"
                            >
                                Submit Another
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            {/* Objective Toggle */}
                            <div className="space-y-4">
                                <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                                    Objective
                                </label>
                                <div className="grid grid-cols-2 p-1.5 bg-surface-container-lowest rounded-lg">
                                    <button
                                        className={`py-3 px-4 rounded-md font-headline text-xs font-bold tracking-wider uppercase transition-all ${objective === "product"
                                                ? "bg-surface-container-high text-primary"
                                                : "text-on-surface-variant hover:text-white"
                                            }`}
                                        type="button"
                                        onClick={() => setObjective("product")}
                                    >
                                        Build a Product
                                    </button>
                                    <button
                                        className={`py-3 px-4 rounded-md font-headline text-xs font-bold tracking-wider uppercase transition-all ${objective === "brand"
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

                            {/* Fields */}
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
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="group">
                                    <label
                                        className="font-body text-xs tracking-widest uppercase text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                                        htmlFor="phone"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary text-white font-body transition-all placeholder:text-neutral-700"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="group">
                                    <label
                                        className="font-body text-xs tracking-widest uppercase text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                                        htmlFor="email"
                                    >
                                        Email Address{" "}
                                        <span className="normal-case text-neutral-600">(optional)</span>
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:border-primary text-white font-body transition-all placeholder:text-neutral-700"
                                        id="email"
                                        name="email"
                                        placeholder="stark@labs.io"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Error */}
                            {formState === "error" && (
                                <p className="text-red-400 text-xs text-center tracking-widest uppercase">
                                    Transmission failed. Please try again.
                                </p>
                            )}

                            {/* Submit */}
                            <div className="pt-4">
                                <button
                                    className="group relative w-full overflow-hidden bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-sm tracking-[0.2em] uppercase py-5 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={formState === "loading"}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {formState === "loading" ? (
                                            <>
                                                <span className="material-symbols-outlined text-base animate-spin">
                                                    progress_activity
                                                </span>
                                                Transmitting...
                                            </>
                                        ) : (
                                            "Initialize Inquiry"
                                        )}
                                    </span>
                                </button>
                                <p className="text-center text-neutral-600 font-body text-[10px] mt-6 tracking-widest uppercase">
                                    Estimated Response: &lt; 24 Hours
                                </p>
                            </div>
                        </form>
                    )}
                </div>

                {/* Contact Info Bento */}
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

                {/* Map Section */}
                <div className="mt-8 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/15 h-80 relative shadow-[0_0_40px_rgba(0,255,255,0.02)]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.2031128!2d77.0274!3d28.6102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0559139d3c7f%3A0x8b4af178588d14d4!2sOne%20Hand%20Labs!5e0!3m2!1sen!2sin!4v1713348123456!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ONE Hand Labs Contact Map"
                        className="absolute inset-0 grayscale-[0.8] contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
