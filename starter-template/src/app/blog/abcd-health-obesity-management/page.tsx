import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ABCD.health: Turning the Science of Obesity Into a Scalable Digital Platform",
    description:
        "How ABCD.health became the leading obesity & ABCD management knowledge platform in South Asia — and the role ONE Hand Labs played in engineering its digital presence.",
    keywords: [
        "ABCD health",
        "abcd.health",
        "adiposity based chronic disease",
        "obesity management platform India",
        "healthcare content marketing",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/abcd-health-obesity-management",
        title: "ABCD.health: Obesity Management Digital Platform",
        description:
            "A deep dive into the ABCD.health platform and how ONE Hand Labs helped scale its clinical authority online.",
    },
    alternates: {
        canonical: "https://onehandlabs.in/blog/abcd-health-obesity-management",
    },
};

export default function AbcdArticle() {
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
                                borderColor: "rgba(99,186,255,0.25)",
                                background: "rgba(99,186,255,0.06)",
                                color: "rgba(99,186,255,0.8)",
                            }}
                        >
                            Case Study
                        </span>
                        <span
                            className="text-[10px]"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                color: "rgba(255,255,255,0.25)",
                                letterSpacing: "0.1em",
                            }}
                        >
                            April 10, 2026 · 4 min read
                        </span>
                    </div>

                    <h1
                        className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8"
                        style={{ fontSize: "clamp(2rem,5vw,3.6rem)" }}
                    >
                        <a
                            href="https://www.abcd.health"
                            target="_blank"
                            rel="noopener"
                            className="text-transparent bg-clip-text hover:opacity-80 transition-opacity"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #63baff 0%, #c1fffe 100%)",
                            }}
                        >
                            ABCD.health
                        </a>
                        : Turning the Science of Obesity Into a Scalable Digital Platform
                    </h1>

                    {/* Callout backlink */}
                    <div
                        className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4"
                        style={{
                            background: "rgba(99,186,255,0.04)",
                            border: "1px solid rgba(99,186,255,0.14)",
                        }}
                    >
                        <p
                            className="text-sm"
                            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}
                        >
                            This article features{" "}
                            <a
                                href="https://www.abcd.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary underline underline-offset-3 hover:opacity-80"
                            >
                                ABCD.health
                            </a>
                            , a specialized platform for Adiposity-Based Chronic Disease management.
                        </p>
                        <a
                            href="https://www.abcd.health"
                            target="_blank"
                            rel="noopener"
                            className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                background: "linear-gradient(to right, #63baff, #c1fffe)",
                                color: "#050508",
                            }}
                        >
                            Visit Site →
                        </a>
                    </div>

                    <div
                        className="font-body leading-relaxed text-base space-y-6"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                        <p>
                            Obesity is one of the most misunderstood and undertreated conditions in
                            modern medicine. The rebranding of obesity as Adiposity-Based Chronic Disease
                            (ABCD) reflects a seismic shift in clinical thinking — one that{" "}
                            <a
                                href="https://www.abcd.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                ABCD.health
                            </a>{" "}
                            is leading in South Asia.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            Clinical Content at Scale
                        </h2>
                        <p>
                            Building a medically authoritative platform requires more than good design.
                            The team at{" "}
                            <a
                                href="https://www.abcd.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                ABCD.health
                            </a>{" "}
                            needed a system capable of hosting structured clinical protocols, patient
                            education modules, and physician resources — all under one roof. ONE Hand Labs
                            delivered exactly that: a high-performance content platform optimised for
                            E-E-A-T signals and semantic SEO.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            Results
                        </h2>
                        <p>
                            Since launch, the platform has become a reference destination for obesity
                            clinicians and patients alike, driving thousands of monthly organic sessions
                            for highly targeted medical keywords. Explore the full platform at{" "}
                            <a
                                href="https://www.abcd.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                www.abcd.health
                            </a>
                            .
                        </p>
                    </div>

                    <div
                        className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
                        style={{
                            background: "rgba(99,186,255,0.04)",
                            border: "1px solid rgba(99,186,255,0.14)",
                        }}
                    >
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">
                                Build your medical platform with us
                            </p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                                ONE Hand Labs specialises in clinical authority & healthcare SEO.
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                href="/contact"
                                className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    background: "linear-gradient(to right, #63baff, #c1fffe)",
                                    color: "#050508",
                                }}
                            >
                                Get Started
                            </Link>
                            <a
                                href="https://www.abcd.health"
                                target="_blank"
                                rel="noopener"
                                className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:bg-white/10"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    border: "1px solid rgba(99,186,255,0.2)",
                                    color: "rgba(99,186,255,0.7)",
                                }}
                            >
                                Visit ABCD.health
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
