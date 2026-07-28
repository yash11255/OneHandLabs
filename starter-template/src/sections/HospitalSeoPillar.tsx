"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    }),
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

interface HospitalSeoPillarProps {
    city: string;
    areas: string[];
    caseStudy: { name: string; slug: string; desc: string };
    faqs: { question: string; answer: string }[];
}

export default function HospitalSeoPillar({ city, areas, caseStudy, faqs }: HospitalSeoPillarProps) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Hospital and Clinic SEO",
        provider: { "@type": "Organization", name: "ONE Hand Labs", url: "https://onehandlabs.in" },
        areaServed: { "@type": "City", name: city },
        description: `Hospital SEO, clinic medical SEO, and website development for healthcare providers in ${city}.`,
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center">
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(52,211,153,0.10), transparent 70%)" }}
                />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div custom={0} initial="hidden" animate="show" variants={rise}
                        className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border rounded-full"
                        style={{ background: "rgba(19,19,19,0.7)", borderColor: "rgba(52,211,153,0.25)" }}>
                        <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "#34d399" }} />
                        <span className="text-[10px] uppercase font-headline whitespace-nowrap" style={{ letterSpacing: "0.22em", color: "#34d399" }}>
                            Hospital &amp; Clinic SEO · {city}
                        </span>
                    </motion.div>

                    <motion.h1 custom={0.1} initial="hidden" animate="show" variants={rise}
                        className="font-headline font-bold tracking-tighter text-white mb-7"
                        style={{ fontSize: "clamp(2.25rem, 6.5vw, 4.75rem)", lineHeight: 1.02, textWrap: "balance" }}>
                        Hospital &amp; Clinic SEO<br />
                        <span className="text-transparent bg-clip-text inline-block" style={{ backgroundImage: "linear-gradient(90deg, #34d399 0%, #63baff 100%)" }}>
                            in {city}.
                        </span>
                    </motion.h1>

                    <motion.p custom={0.2} initial="hidden" animate="show" variants={rise}
                        className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-body">
                        Website development, technical SEO, and AI-search visibility for hospitals, clinics, and physicians across {city} — built on the same playbook behind {caseStudy.name}.
                    </motion.p>

                    <motion.div custom={0.3} initial="hidden" animate="show" variants={rise} className="flex flex-wrap items-center justify-center gap-8">
                        <Link href="/contact" className="inline-flex items-center gap-2 font-headline font-bold text-sm uppercase transition-all duration-300 hover:opacity-90"
                            style={{ background: "linear-gradient(135deg, #34d399 0%, #63baff 100%)", color: "#022c1e", padding: "14px 34px", borderRadius: "999px", letterSpacing: "0.04em" }}>
                            Get a Free SEO Review
                        </Link>
                        <a href="https://wa.me/918950143430" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-headline font-bold text-sm text-white transition-colors duration-300 hover:text-primary">
                            WhatsApp Us <span aria-hidden>›</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* What's included */}
            <section className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "rgba(14,14,14,1)" }}>
                <div className="max-w-[1100px] mx-auto">
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-16 text-center">
                        <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">What&apos;s Included</span>
                        <h2 className="font-headline font-bold text-white tracking-tighter" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                            Medical SEO that Google and AI search actually trust.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "E-E-A-T &amp; Author Trust", desc: "Physician credentials, structured author bios, and clinical review signals that satisfy Google's medical content guidelines.", icon: "verified_user" },
                            { title: "Medical Schema Markup", desc: "MedicalOrganization, Physician, MedicalCondition, and FAQPage structured data so search engines understand exactly what you treat.", icon: "data_object" },
                            { title: "AI Search Visibility", desc: "Content structured for citation in Google AI Overviews, ChatGPT, and Perplexity — not just classic blue-link rankings.", icon: "auto_awesome" },
                            { title: "Core Web Vitals", desc: "Sub-2-second load times and clean, mobile-first UX — the technical baseline hospital sites routinely fail.", icon: "speed" },
                            { title: "Local Pack &amp; Maps SEO", desc: "Google Business Profile optimization and NAP consistency so you show up in the local 3-pack, not just organic results.", icon: "location_on" },
                            { title: "Website Development", desc: "Full website builds and revamps on Next.js — fast, secure, and built to convert visits into patient enquiries.", icon: "code" },
                        ].map((item, i) => (
                            <motion.div key={item.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                                custom={i * 0.08} variants={fadeUp}
                                className="p-7 rounded-2xl" style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.2)" }}>
                                <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: 28 }}>{item.icon}</span>
                                <h3 className="font-headline font-bold text-white text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas served */}
            <section className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
                <div className="max-w-[1100px] mx-auto">
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-10 text-center">
                        <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">Coverage</span>
                        <h2 className="font-headline font-bold text-white tracking-tighter" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
                            Serving hospitals and clinics across {city}
                        </h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
                        className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
                        {areas.map((area) => (
                            <span key={area} className="text-xs uppercase tracking-widest px-4 py-2 rounded-full text-on-surface-variant"
                                style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.2)" }}>
                                {area}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Case study tie-in */}
            <section className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "rgba(14,14,14,1)" }}>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
                    className="max-w-[900px] mx-auto rounded-2xl p-8 md:p-12 text-center"
                    style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(52,211,153,0.15)" }}>
                    <span className="text-xs uppercase tracking-[0.3em] font-headline text-primary font-bold mb-4 block">Real Results</span>
                    <h3 className="font-headline font-bold text-white text-2xl md:text-3xl tracking-tight mb-4">{caseStudy.name}</h3>
                    <p className="text-on-surface-variant text-base leading-relaxed max-w-xl mx-auto mb-8">{caseStudy.desc}</p>
                    <Link href={`/blog/${caseStudy.slug}`} className="inline-flex items-center gap-2 font-headline font-bold text-xs uppercase px-7 py-3.5 rounded-xl border border-white/15 text-white transition-all duration-300 hover:bg-white/5">
                        Read the Case Study <span aria-hidden>→</span>
                    </Link>
                </motion.div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
                <div className="max-w-[800px] mx-auto">
                    <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
                        className="font-headline font-bold text-white tracking-tighter text-center mb-12" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
                        Frequently Asked
                    </motion.h2>
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="p-6 rounded-xl" style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.2)" }}>
                                <h3 className="font-headline font-bold text-white text-sm mb-2">{faq.question}</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
