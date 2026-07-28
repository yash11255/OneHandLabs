"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MidCTA() {
    return (
        <section className="py-16 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)", borderTop: "1px solid rgba(72,72,71,0.12)", borderBottom: "1px solid rgba(72,72,71,0.12)" }}>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
            >
                <p className="font-headline font-bold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                    Not sure which fits — a product demo or a custom build? <span className="text-primary">We&apos;ll tell you honestly.</span>
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                        href="https://wa.me/918950143430"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-headline font-bold text-xs uppercase px-6 py-3.5 rounded-xl border border-white/15 text-white transition-all duration-300 hover:bg-white/5"
                        style={{ letterSpacing: "0.06em" }}
                    >
                        WhatsApp Us
                    </a>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-headline font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all duration-300 hover:opacity-90"
                        style={{
                            background: "linear-gradient(135deg, #c1fffe 0%, #63baff 100%)",
                            color: "#006767",
                            letterSpacing: "0.06em",
                        }}
                    >
                        Ask a Question
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
