import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dr. Deepanshu Gupta: Top Urologist & Andrologist in Gurgaon | ONE Hand Labs",
    description:
        "Dr. Deepanshu Gupta is a leading Urologist, Andrologist & Renal Transplant Surgeon in Gurgaon/Delhi NCR. Discover how ONE Hand Labs crafted his digital brand presence.",
    keywords: [
        "Dr Deepanshu Gupta urologist Gurgaon",
        "Dr Deepanshu Gupta andrologist Delhi NCR",
        "renal transplant surgeon Gurgaon",
        "best urologist Delhi NCR",
        "doctor branding Gurgaon",
        "urology specialist website India",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/dr-deepanshu-gupta-urologist-gurgaon",
        title: "Dr. Deepanshu Gupta: Top Urologist Gurgaon | ONE Hand Labs",
        description: "A spotlight on Dr. Deepanshu Gupta — Gurgaon's leading urologist — and his digital brand story.",
    },
    alternates: { canonical: "https://onehandlabs.in/blog/dr-deepanshu-gupta-urologist-gurgaon" },
};

export default function DrDeepanshuGuptaArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <article className="pt-40 pb-32 px-6 md:px-16 max-w-[860px] mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 mb-12 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk), monospace" }}>
                        ← Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border" style={{ fontFamily: "var(--font-space-grotesk), monospace", borderColor: "rgba(56,189,248,0.25)", background: "rgba(56,189,248,0.06)", color: "rgba(56,189,248,0.8)" }}>Expert Spotlight</span>
                        <span className="text-[10px]" style={{ fontFamily: "var(--font-space-grotesk), monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>February 20, 2026 · 5 min read</span>
                    </div>

                    <h1 className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
                        Dr. Deepanshu Gupta: Gurgaon&apos;s Leading Urologist &amp; Andrologist — and His Digital Brand Story
                    </h1>

                    <div className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4 flex-wrap" style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.14)" }}>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}>
                            Dr. Deepanshu Gupta specializes in Urology, Andrology &amp; Renal Transplantation at leading hospitals in Gurgaon and Delhi NCR. ONE Hand Labs manages his digital brand.
                        </p>
                        <Link href="/contact" className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #38bdf8, #c1fffe)", color: "#050508" }}>
                            Work With Us →
                        </Link>
                    </div>

                    <div className="font-body leading-relaxed text-base space-y-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <p>
                            Dr. Deepanshu Gupta is among the most sought-after urology specialists in the Delhi NCR region. With expertise spanning Urology, Andrology, and Renal Transplantation, he brings a rare combination of surgical precision and patient-centred communication. ONE Hand Labs was engaged to translate this clinical authority into an equally authoritative digital brand.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Specialty Focus</h2>
                        <p>
                            Dr. Gupta&apos;s practice covers the full spectrum of urological care: kidney stone surgery (PCNL, ESWL, URS), prostate conditions, male infertility, and complex renal transplantation. His patients include referred cases from leading hospitals across Gurgaon and South Delhi, and ONE Hand Labs built a digital presence capable of handling that referral volume online. This work connects directly with the urology-focused platform at{" "}
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">Cure Stone</a>
                            .
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Digital Branding Approach</h2>
                        <p>
                            The strategy for Dr. Deepanshu Gupta&apos;s digital presence mirrors the approach ONE Hand Labs uses across all physician clients — clinical credential-first architecture, Google&apos;s E-E-A-T signals, and a structured content layer that answers the specific search queries patients use when looking for urology specialists in Gurgaon.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Why Urologists Need Dedicated Digital Profiles</h2>
                        <ul className="space-y-3 pl-4" style={{ listStyle: "disc" }}>
                            <li>Patients search by specialty + location before calling a clinic.</li>
                            <li>Third-party listing platforms like Practo and Hexahealth dominate if you don&apos;t own your own web presence.</li>
                            <li>A high-ranking personal page ensures patients find you directly — not a competitor.</li>
                            <li>Video content combined with an authoritative biography builds trust before the first appointment.</li>
                        </ul>
                    </div>

                    <div className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between" style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.14)" }}>
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">Build your specialist digital brand</p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>ONE Hand Labs helps specialists own their digital niche.</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/contact" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #38bdf8, #c1fffe)", color: "#050508" }}>Get Started</Link>
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:bg-white/10" style={{ fontFamily: "var(--font-space-grotesk), monospace", border: "1px solid rgba(56,189,248,0.2)", color: "rgba(56,189,248,0.7)" }}>See Cure Stone</a>
                        </div>
                    </div>
                </article>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
