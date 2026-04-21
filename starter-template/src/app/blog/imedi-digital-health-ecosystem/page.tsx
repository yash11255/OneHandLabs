import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How iMedi.health Is Redefining Regenerative Care Through Digital Innovation",
    description:
        "iMedi.health is pioneering a new category in healthcare — blending regenerative medicine with a world-class digital experience. ONE Hand Labs breaks down the full case study.",
    keywords: [
        "iMedi health",
        "iMedi.health case study",
        "regenerative medicine digital platform",
        "Dr Ashish Kalla healthcare",
        "healthcare app development India",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/imedi-digital-health-ecosystem",
        title: "How iMedi.health Is Redefining Regenerative Care",
        description:
            "A deep dive into the iMedi.health digital ecosystem and the role ONE Hand Labs played in its development.",
    },
    alternates: {
        canonical: "https://onehandlabs.in/blog/imedi-digital-health-ecosystem",
    },
};

export default function ImediArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <article className="pt-40 pb-32 px-6 md:px-16 max-w-[860px] mx-auto">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 mb-12 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors font-space-grotesk"
                        style={{ fontFamily: "var(--font-space-grotesk), monospace" }}
                    >
                        ← Back to Blog
                    </Link>

                    {/* Category + Date */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span
                            className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                borderColor: "rgba(193,255,254,0.2)",
                                background: "rgba(193,255,254,0.05)",
                                color: "rgba(193,255,254,0.7)",
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
                            April 18, 2026 · 5 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8"
                        style={{ fontSize: "clamp(2rem,5vw,3.6rem)" }}
                    >
                        How{" "}
                        <a
                            href="https://imedi.health"
                            target="_blank"
                            rel="noopener"
                            className="text-transparent bg-clip-text hover:opacity-80 transition-opacity"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #c1fffe 0%, #63baff 100%)",
                            }}
                        >
                            iMedi.health
                        </a>{" "}
                        Is Redefining Regenerative Care Through Digital Innovation
                    </h1>

                    {/* Callout backlink box */}
                    <div
                        className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4"
                        style={{
                            background: "rgba(193,255,254,0.04)",
                            border: "1px solid rgba(193,255,254,0.14)",
                        }}
                    >
                        <p
                            className="text-sm"
                            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}
                        >
                            This article references our client platform{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary underline underline-offset-3 hover:opacity-80 transition-opacity"
                            >
                                imedi.health
                            </a>
                            . Visit the live site to experience the ecosystem first-hand.
                        </p>
                        <a
                            href="https://imedi.health"
                            target="_blank"
                            rel="noopener"
                            className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                background: "linear-gradient(to right, #c1fffe, #63baff)",
                                color: "#050508",
                            }}
                        >
                            Visit Site →
                        </a>
                    </div>

                    {/* Body copy */}
                    <div
                        className="prose-article font-body leading-relaxed text-base space-y-6"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                        <p>
                            The healthcare industry in India is at an inflection point. Patients are no
                            longer passive recipients of care — they are informed, digital-first consumers
                            who research their conditions, compare providers, and make decisions based on
                            the quality of a website before they ever speak to a doctor. Platforms like{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>{" "}
                            understand this shift deeply.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            The Challenge
                        </h2>
                        <p>
                            When the{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>{" "}
                            team approached ONE Hand Labs, they had a compelling vision: build a digital
                            ecosystem where regenerative medicine could be communicated clearly, trusted
                            unconditionally, and accessed seamlessly. The challenge was translating
                            cutting-edge clinical science into a consumer-grade digital experience without
                            losing medical authority.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            Our Approach
                        </h2>
                        <p>
                            ONE Hand Labs executed a full-stack digital buildout: a high-performance
                            Next.js frontend, a structured content architecture designed for medical SEO,
                            and an integrated personal branding layer for the clinical team. Every design
                            decision was made with one goal — make{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>{" "}
                            the most trusted regenerative medicine destination in India.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            The Outcome
                        </h2>
                        <p>
                            The platform launched with sub-2-second load times, a full suite of schema
                            markup for medical professionals, and a content strategy targeting 200+
                            hyper-local healthcare keywords. Within weeks of launch, organic traffic began
                            compounding. Visit{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                imedi.health
                            </a>{" "}
                            to see the finished product.
                        </p>
                    </div>

                    {/* CTA strip */}
                    <div
                        className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
                        style={{
                            background: "rgba(193,255,254,0.04)",
                            border: "1px solid rgba(193,255,254,0.14)",
                        }}
                    >
                        <div>
                            <p
                                className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1"
                            >
                                Want results like iMedi.health?
                            </p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                                ONE Hand Labs engineers digital growth for healthcare brands.
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                href="/contact"
                                className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    background: "linear-gradient(to right, #c1fffe, #63baff)",
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
                                    border: "1px solid rgba(193,255,254,0.2)",
                                    color: "rgba(193,255,254,0.7)",
                                }}
                            >
                                Visit iMedi.health
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
