import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Why Healthcare SEO in India Is Broken — And How We're Fixing It",
    description:
        "Most healthcare websites in India generate zero organic traffic. ONE Hand Labs breaks down the systemic failures in medical SEO and shares the exact playbook used for iMedi.health and ABCD.health.",
    keywords: [
        "healthcare SEO India",
        "medical website SEO",
        "iMedi health SEO",
        "ABCD health digital marketing",
        "hospital SEO strategy India",
        "ONE Hand Labs SEO",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/healthcare-seo-india",
        title: "Why Healthcare SEO in India Is Broken",
        description:
            "ONE Hand Labs breaks down the systemic failures in medical SEO — and how iMedi.health and ABCD.health are doing it right.",
    },
    alternates: {
        canonical: "https://onehandlabs.in/blog/healthcare-seo-india",
    },
};

export default function HealthcareSeoArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <article className="pt-40 pb-32 px-6 md:px-16 max-w-[860px] mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 mb-12 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-space-grotesk), monospace" }}
                    >
                        ← Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span
                            className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                borderColor: "rgba(52,211,153,0.25)",
                                background: "rgba(52,211,153,0.06)",
                                color: "rgba(52,211,153,0.8)",
                            }}
                        >
                            Industry Insight
                        </span>
                        <span
                            className="text-[10px]"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                color: "rgba(255,255,255,0.25)",
                                letterSpacing: "0.1em",
                            }}
                        >
                            March 22, 2026 · 7 min read
                        </span>
                    </div>

                    <h1
                        className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8"
                        style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}
                    >
                        Why Healthcare SEO in India Is Broken — And How We&apos;re Fixing It
                    </h1>

                    <div
                        className="font-body leading-relaxed text-base space-y-6"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                        <p>
                            The average hospital website in India loads in 8+ seconds, has zero
                            structured data, and ranks for exactly zero keywords. This is not a content
                            problem — it&apos;s a systemic failure of strategy, execution, and
                            understanding of how modern search engines evaluate medical content.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            The Core Problems
                        </h2>
                        <ul className="space-y-3 pl-4" style={{ listStyle: "disc" }}>
                            <li>No E-E-A-T signals — Google cannot verify author expertise.</li>
                            <li>No schema markup — medical entities are invisible to search crawlers.</li>
                            <li>Generic content that does not match patient search intent.</li>
                            <li>
                                Slow, bloated CMS platforms with no Core Web Vitals optimisation.
                            </li>
                        </ul>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            What We Do Differently
                        </h2>
                        <p>
                            Our clients —{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://www.abcd.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                ABCD.health
                            </a>{" "}
                            — are built on Next.js with full schema implementation, hyper-local landing
                            pages, and a content architecture designed by ONE Hand Labs around real
                            patient search behaviour. The results speak for themselves.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            The Playbook
                        </h2>
                        <ol className="space-y-3 pl-4" style={{ listStyle: "decimal" }}>
                            <li>
                                <strong className="text-white">Technical Foundation</strong> — Next.js,
                                sub-2s LCP, full Core Web Vitals compliance.
                            </li>
                            <li>
                                <strong className="text-white">Schema Architecture</strong> — MedicalOrganisation,
                                Physician, MedicalCondition, FAQPage.
                            </li>
                            <li>
                                <strong className="text-white">Content Strategy</strong> — 200+ location and
                                condition-specific pages, each targeting distinct intent.
                            </li>
                            <li>
                                <strong className="text-white">Backlink Building</strong> — Cross-linking
                                between{" "}
                                <a
                                    href="https://imedi.health"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-primary hover:underline hover:underline-offset-3"
                                >
                                    imedi.health
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.abcd.health"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-primary hover:underline hover:underline-offset-3"
                                >
                                    abcd.health
                                </a>{" "}
                                creates topical authority clusters.
                            </li>
                        </ol>
                    </div>

                    <div
                        className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
                        style={{
                            background: "rgba(52,211,153,0.04)",
                            border: "1px solid rgba(52,211,153,0.14)",
                        }}
                    >
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">
                                Ready to dominate medical SEO?
                            </p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                                ONE Hand Labs engineers organic growth for healthcare brands.
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                href="/contact"
                                className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    background: "linear-gradient(to right, #34d399, #c1fffe)",
                                    color: "#050508",
                                }}
                            >
                                Get Started
                            </Link>
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:bg-white/10"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    border: "1px solid rgba(52,211,153,0.2)",
                                    color: "rgba(52,211,153,0.7)",
                                }}
                            >
                                See iMedi.health Live
                            </a>
                        </div>
                    </div>
                </article>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
