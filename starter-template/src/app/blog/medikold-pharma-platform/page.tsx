import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Medikold: Powering Pharmaceutical Digital Infrastructure | ONE Hand Labs",
    description:
        "Medikold is a specialized healthcare vertical focused on pharmaceutical services and medical supply chains. Discover how ONE Hand Labs engineered Medikold's digital presence.",
    keywords: [
        "Medikold",
        "medikold.com",
        "pharmaceutical digital marketing India",
        "pharma website development",
        "medical supply chain digital",
        "healthcare pharma platform",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/medikold-pharma-platform",
        title: "Medikold: Pharmaceutical Digital Infrastructure | ONE Hand Labs",
        description: "How ONE Hand Labs built Medikold's digital pharma platform from the ground up.",
    },
    alternates: { canonical: "https://onehandlabs.in/blog/medikold-pharma-platform" },
};

export default function MedikoldArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <article className="pt-40 pb-32 px-6 md:px-16 max-w-[860px] mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 mb-12 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk), monospace" }}>
                        ← Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border" style={{ fontFamily: "var(--font-space-grotesk), monospace", borderColor: "rgba(251,191,36,0.25)", background: "rgba(251,191,36,0.06)", color: "rgba(251,191,36,0.8)" }}>Pharma Case Study</span>
                        <span className="text-[10px]" style={{ fontFamily: "var(--font-space-grotesk), monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>March 14, 2026 · 4 min read</span>
                    </div>

                    <h1 className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
                        <a href="https://medikold.com" target="_blank" rel="noopener" className="text-transparent bg-clip-text hover:opacity-80 transition-opacity" style={{ backgroundImage: "linear-gradient(90deg, #fbbf24 0%, #c1fffe 100%)" }}>Medikold</a>: Powering Pharmaceutical Digital Infrastructure in India
                    </h1>

                    <div className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4 flex-wrap" style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.14)" }}>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}>
                            Explore Medikold&apos;s pharmaceutical services and supply chain solutions at{" "}
                            <a href="https://medikold.com" target="_blank" rel="noopener" className="text-primary underline underline-offset-3 hover:opacity-80">medikold.com</a>.
                        </p>
                        <a href="https://medikold.com" target="_blank" rel="noopener" className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #fbbf24, #c1fffe)", color: "#050508" }}>
                            Medikold.com →
                        </a>
                    </div>

                    <div className="font-body leading-relaxed text-base space-y-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <p>
                            The pharmaceutical sector in India is worth over $50 billion — yet its digital infrastructure lags far behind. Most pharma companies still operate on outdated portals, with no real-time inventory visibility, no SEO strategy, and no patient-facing digital presence.{" "}
                            <a href="https://medikold.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">Medikold</a>{" "}
                            is changing that.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>What Medikold Does</h2>
                        <p>
                            <a href="https://medikold.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">Medikold.com</a>{" "}
                            is a specialized vertical focused on pharmaceutical services and medical supply chains in India. It connects healthcare providers with reliable pharmaceutical infrastructure — ensuring the right medications reach the right facilities at the right time. ONE Hand Labs built and maintains the platform&apos;s digital layer, ensuring it is fast, crawlable, and authoritative.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Our Contribution</h2>
                        <p>
                            ONE Hand Labs engineered{" "}
                            <a href="https://medikold.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">Medikold</a>&apos;s
                            web presence with a focus on pharmaceutical keyword targeting, schema markup for medical organisations, and a performance-first architecture. The result is a platform that ranks, converts, and scales.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Why Pharma Needs Premium Digital</h2>
                        <ul className="space-y-3 pl-4" style={{ listStyle: "disc" }}>
                            <li>B2B buyers research suppliers online before making procurement decisions.</li>
                            <li>A credible domain like <a href="https://medikold.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">medikold.com</a> builds institutional trust instantly.</li>
                            <li>SEO-optimised pharma pages reduce reliance on paid acquisition channels.</li>
                            <li>Performance metrics (speed, Core Web Vitals) directly impact conversion rates in B2B contexts.</li>
                        </ul>
                    </div>

                    <div className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between" style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.14)" }}>
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">Build your pharma digital platform</p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>ONE Hand Labs engineers precision digital for healthcare & pharma.</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/contact" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #fbbf24, #c1fffe)", color: "#050508" }}>Get Started</Link>
                            <a href="https://medikold.com" target="_blank" rel="noopener" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:bg-white/10" style={{ fontFamily: "var(--font-space-grotesk), monospace", border: "1px solid rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.7)" }}>Visit Medikold.com</a>
                        </div>
                    </div>
                </article>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
