import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
    title: "Cure Stone: Gurgaon's Premier Urology & Kidney Stone Treatment Platform | ONE Hand Labs",
    description:
        "Cure Stone is Gurgaon's specialized urology clinic for advanced kidney stone treatment. See how ONE Hand Labs engineered their digital presence and SEO strategy.",
    keywords: [
        "Cure Stone urology",
        "thecurestone.com",
        "kidney stone treatment Gurgaon",
        "urology clinic Gurgaon digital marketing",
        "best urologist Gurgaon website",
        "kidney stone doctor Delhi NCR",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/cure-stone-urology-gurgaon",
        title: "Cure Stone: Urology Digital Platform | ONE Hand Labs",
        description: "How ONE Hand Labs built Cure Stone's award-quality digital platform for urology in Gurgaon.",
    },
    alternates: { canonical: "https://onehandlabs.in/blog/cure-stone-urology-gurgaon" },
};

export default function CureStoneArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <ArticleSchema
                headline="Cure Stone: Gurgaon's Premier Urology & Kidney Stone Treatment Platform"
                description="Cure Stone is Gurgaon's specialized urology clinic for advanced kidney stone treatment. See how ONE Hand Labs engineered their digital presence and SEO strategy."
                url="https://onehandlabs.in/blog/cure-stone-urology-gurgaon"
                datePublished="March 5, 2026"
                breadcrumbLabel="Cure Stone Case Study"
            />
            <Navbar />
            <main className="flex-1">
                <article className="pt-40 pb-32 px-6 md:px-16 max-w-[860px] mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 mb-12 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk), monospace" }}>
                        ← Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border" style={{ fontFamily: "var(--font-space-grotesk), monospace", borderColor: "rgba(249,115,22,0.25)", background: "rgba(249,115,22,0.06)", color: "rgba(249,115,22,0.8)" }}>Urology Case Study</span>
                        <span className="text-[10px]" style={{ fontFamily: "var(--font-space-grotesk), monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>March 5, 2026 · 5 min read</span>
                    </div>

                    <h1 className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
                        <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-transparent bg-clip-text hover:opacity-80 transition-opacity" style={{ backgroundImage: "linear-gradient(90deg, #f97316 0%, #c1fffe 100%)" }}>Cure Stone</a>: Gurgaon&apos;s Premier Urology & Kidney Stone Treatment Platform
                    </h1>

                    <div className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4 flex-wrap" style={{ background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.14)" }}>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}>
                            Book an appointment and explore advanced kidney stone treatments at{" "}
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-primary underline underline-offset-3 hover:opacity-80">thecurestone.com</a>.
                        </p>
                        <a href="https://thecurestone.com" target="_blank" rel="noopener" className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #f97316, #c1fffe)", color: "#050508" }}>
                            TheCureStone.com →
                        </a>
                    </div>

                    <div className="font-body leading-relaxed text-base space-y-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <p>
                            Kidney stones affect over 12% of the Indian population at some point in their lives. Yet most patients struggle to find a reliable, clearly communicated urology resource online.{" "}
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">Cure Stone</a>{" "}
                            was built to solve that — providing Gurgaon and Delhi NCR patients with direct access to world-class urological care.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>The Challenge</h2>
                        <p>
                            Urology is a hyper-competitive specialty online. Patients searching for &ldquo;kidney stone doctor Gurgaon&rdquo; are bombarded with generic hospital listings and paid ads. ONE Hand Labs designed{" "}
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">thecurestone.com</a>{" "}
                            to cut through the noise: a fast, authoritative, patient-first platform that earns top organic rankings through genuine clinical content and technical excellence.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>SEO Strategy</h2>
                        <p>
                            The{" "}
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-primary hover:underline hover:underline-offset-3">Cure Stone</a>{" "}
                            digital strategy included hyper-local landing pages for 30+ Gurgaon neighbourhoods, procedure-specific content pages (ESWL, PCNL, URS), and a Physician schema implementation. The result: top-3 rankings for several high-intent urology search terms in the Delhi NCR market.
                        </p>

                        <h2 className="font-headline font-black text-white uppercase tracking-tighter mt-10" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}>Results at a Glance</h2>
                        <ul className="space-y-3 pl-4" style={{ listStyle: "disc" }}>
                            <li>Sub-1.8s LCP on mobile — significantly faster than competing clinic websites.</li>
                            <li>30+ hyper-local service area pages indexed and ranking.</li>
                            <li>Full structured data: MedicalClinic, Physician, MedicalProcedure schemas.</li>
                            <li>Patient enquiry rate increased substantially within the first 60 days of launch.</li>
                        </ul>
                    </div>

                    <div className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between" style={{ background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.14)" }}>
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">Launch your clinic&apos;s digital presence</p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>ONE Hand Labs builds patient-winning websites for specialists across India.</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/contact" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90" style={{ fontFamily: "var(--font-space-grotesk), monospace", background: "linear-gradient(to right, #f97316, #c1fffe)", color: "#050508" }}>Get Started</Link>
                            <a href="https://thecurestone.com" target="_blank" rel="noopener" className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:bg-white/10" style={{ fontFamily: "var(--font-space-grotesk), monospace", border: "1px solid rgba(249,115,22,0.2)", color: "rgba(249,115,22,0.7)" }}>Visit CureStone</a>
                        </div>
                    </div>
                </article>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
