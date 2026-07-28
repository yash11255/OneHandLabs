"use client";
import { useState } from "react";

const faqs = [
    {
        question: "Is ONE Hand Labs a software agency or a software product company?",
        answer: "Both. ONE Hand Labs builds custom software and digital growth strategy for client brands (our healthcare portfolio includes iMedi.health, ABCD.health, Cure Stone, and Medikold), and separately develops our own CRM, HRMS, and Payroll product suite (CRM Nexus, HRMS Pro, PaySync) for Indian businesses.",
    },
    {
        question: "What industries do you specialize in for agency work?",
        answer: "Most of our agency work is healthcare — hospitals, clinics, and individual physicians who need a website, SEO strategy, and digital presence built around real patient search behaviour and E-E-A-T signals. We've also built for other industries, including A1 Agro Industries, an international rice exporter.",
    },
    {
        question: "Do you build websites and help businesses rank higher on Google?",
        answer: "Yes — website development and SEO are core to our agency work. We design and build the site, then handle the technical SEO, content structure, and schema markup that helps it actually rank: the same approach that took iMedi.health and ABCD.health from zero to consistent organic traffic.",
    },
    {
        question: "Do CRM Nexus, HRMS Pro, and PaySync work together, or can I use just one?",
        answer: "Each product works standalone, and all three share a common data layer so information entered once — an employee record, a customer contact — is available across the suite if you adopt more than one.",
    },
    {
        question: "How does PaySync handle Indian payroll compliance?",
        answer: "PaySync automates TDS projection, EPF and ESI contributions, professional tax by state, and Form 16 generation, recalculating each month as new declarations, bonuses, or appraisals come in.",
    },
    {
        question: "Where is ONE Hand Labs based, and do you work with clients outside Delhi NCR?",
        answer: "We're based in Gurugram, Delhi NCR, and work with clients across India. Most of our healthcare portfolio is concentrated in Delhi NCR and Gurgaon, but our product suite serves businesses nationwide.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faqs"
            className="py-32 px-6 md:px-16 lg:px-24"
            style={{ background: "rgba(10,10,12,1)" }}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-[900px] mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                        Frequently Asked
                    </span>
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
                        Questions, Answered.
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={faq.question}
                                className="rounded-xl overflow-hidden"
                                style={{
                                    background: "rgba(19,19,19,0.9)",
                                    border: "1px solid rgba(72,72,71,0.2)",
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${i}`}
                                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                                >
                                    <span className="font-headline font-bold text-white text-sm md:text-base">
                                        {faq.question}
                                    </span>
                                    <span
                                        className="material-symbols-outlined flex-shrink-0 text-primary transition-transform duration-300"
                                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                                        aria-hidden="true"
                                    >
                                        add
                                    </span>
                                </button>
                                <div
                                    id={`faq-panel-${i}`}
                                    role="region"
                                    style={{
                                        maxHeight: isOpen ? "16rem" : "0",
                                        opacity: isOpen ? 1 : 0,
                                        transition: "max-height 0.35s ease, opacity 0.3s ease",
                                        overflow: "hidden",
                                    }}
                                >
                                    <p className="px-6 pb-5 text-on-surface-variant text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
