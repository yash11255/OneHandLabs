"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 overflow-hidden" style={{ background: "rgba(14,14,14,1)" }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1440px] mx-auto rounded-3xl relative overflow-hidden"
                style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.2)" }}
            >
                <div
                    aria-hidden
                    className="absolute -top-1/2 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "#c1fffe", filter: "blur(180px)", opacity: 0.06 }}
                />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="font-headline font-bold text-white tracking-tighter mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.05 }}>
                            Ready when you are.
                        </h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            Whether you want a demo of the product suite or a healthcare brand built from scratch — one conversation gets you started.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto flex-shrink-0">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 font-headline font-bold text-sm uppercase px-10 py-4 rounded-xl transition-all duration-300 hover:opacity-90"
                            style={{
                                background: "linear-gradient(135deg, #c1fffe 0%, #63baff 100%)",
                                color: "#006767",
                                letterSpacing: "0.06em",
                            }}
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 font-headline font-bold text-sm uppercase px-10 py-4 rounded-xl border border-white/10 text-white transition-all duration-300 hover:bg-white/5"
                            style={{ letterSpacing: "0.06em" }}
                        >
                            Start a Project
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
