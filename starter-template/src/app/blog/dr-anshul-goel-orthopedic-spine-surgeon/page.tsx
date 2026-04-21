import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dr. Anshul Goel: Orthopedic & Spine Surgeon Gurgaon | ONE Hand Labs",
    description:
        "Dr. Anshul Goel is an Orthopedic, Spine & Joint Replacement Surgeon with 19 years of experience. Discover his digital brand story crafted by ONE Hand Labs.",
    keywords: [
        "Dr Anshul Goel orthopedic surgeon",
        "Dr Anshul Goel spine surgeon Gurgaon",
        "joint replacement surgeon Delhi NCR",
        "orthopedic doctor website India",
        "spine surgeon branding India",
        "best orthopedic Gurgaon",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/dr-anshul-goel-orthopedic-spine-surgeon",
        title: "Dr. Anshul Goel: Orthopedic Spine Surgeon | ONE Hand Labs",
        description: "How ONE Hand Labs built Dr. Anshul Goel's digital presence — 19 years of surgical excellence, now online.",
    },
    alternates: { canonical: "https://onehandlabs.in/blog/dr-anshul-goel-orthopedic-spine-surgeon" },
};

export default function DrAnshulGoelArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <article className="pt-40 pb-32 px-6 md:px-16 max-w-[860px] mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 mb-12 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk), monospace" }}>
                        ← Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border" style={{ fontFamily: "var(--font-space-grotesk), monospace", borderColor: "rgba(52,211,153,0.25)", background: "rgba(52,211,153,0.06)", color: "rgba(52,211,153,0.8)" }}>Expert Spotlight</span>
                        <span className="text-[10px]" style={{ fontFamily: "var(--font-space-grotesk), monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>February 8, 2026 · 5 min read</span>
                    </div>

                    <h1 className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
                        Dr. Anshul Goel: 19 Years of Orthopedic &amp; Spine Excellence — Brought Online by ONE Hand Labs
                    </h1>

                    <div className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4 flex-wrap" style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.14)" }}>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}>
                            Dr. Anshul Goel is an Orthopedic, Spine, and Joint Replacement Surgeon with nearly two decades of clinical excellence. ONE Hand Labs powers his digital identity.
                        </p>
                        <Link href="/contact" className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #34d399, #c1fffe)", color: "#050508" }}>
                            Work With Us →
                        </Link>
                    </div>

                    <div className="font-body leading-relaxed text-base space-y-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <p>
                            With nearly two decades of surgical experience, Dr. Anshul Goel is one of the most trusted names in Orthopedic, Spine, and Joint Replacement surgery in Gurgaon and Delhi. His skill set spans complex spinal deformity corrections, minimally invasive joint replacements, and revision surgeries. ONE Hand Labs was brought in to build a digital presence worthy of that legacy.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>The Clinical Legacy</h2>
                        <p>
                            Dr. Anshul Goel&apos;s 19-year career spans some of India&apos;s most respected medical institutions. He has performed thousands of joint replacement and spine surgeries, with outcomes consistently above national averages. Translating that depth of experience into a compelling, searchable digital profile required a platform that matched the precision of his surgical work.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Our Digital Strategy</h2>
                        <p>
                            ONE Hand Labs built Dr. Goel&apos;s digital presence around three pillars: clinical authority content (conditions, procedures, patient FAQs), local SEO targeting Gurgaon and South Delhi, and a physician schema implementation that signals expertise directly to Google. This same proven playbook is deployed across all our healthcare clients — from{" "}
                            <a href="https://imedi.health" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">iMedi.health</a>{" "}
                            to{" "}
                            <a href="https://www.drashishkalla.com/" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">DrAshishKalla.com</a>
                            .
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>What Sets Orthopedic SEO Apart</h2>
                        <ul className="space-y-3 pl-4" style={{ listStyle: "disc" }}>
                            <li>Procedure-specific pages (e.g., &ldquo;knee replacement Gurgaon&rdquo;) capture high-intent searches at the decision stage.</li>
                            <li>Video testimonials and surgical walkthroughs dramatically improve dwell time and trust.</li>
                            <li>Schema markup for MedicalProcedure and Physician entities directly influences Google&apos;s Knowledge Panel.</li>
                            <li>Mobile-first design is non-negotiable — 75%+ of medical searches in India happen on mobile.</li>
                        </ul>
                    </div>

                    <div className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between" style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.14)" }}>
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">Build a surgeon-grade digital presence</p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>ONE Hand Labs engineers digital authority for surgeons &amp; specialists.</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/contact" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #34d399, #c1fffe)", color: "#050508" }}>Get Started</Link>
                            <Link href="/work" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:bg-white/10" style={{ fontFamily: "var(--font-space-grotesk), monospace", border: "1px solid rgba(52,211,153,0.2)", color: "rgba(52,211,153,0.7)" }}>See Our Portfolio</Link>
                        </div>
                    </div>
                </article>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
