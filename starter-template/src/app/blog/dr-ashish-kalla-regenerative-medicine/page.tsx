import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
    title: "Dr. Ashish Kalla on Regenerative Medicine & Doctor Branding | ONE Hand Labs",
    description:
        "Dr. Ashish Kalla is at the forefront of integrative and regenerative medicine. Learn how strategic digital branding amplifies clinical impact — a spotlight by ONE Hand Labs.",
    keywords: [
        "Dr Ashish Kalla",
        "Dr Ashish Kalla regenerative medicine",
        "iMedi health doctor profile",
        "doctor branding India",
        "regenerative medicine India",
        "medical personal branding",
    ],
    openGraph: {
        url: "https://onehandlabs.in/blog/dr-ashish-kalla-regenerative-medicine",
        title: "Dr. Ashish Kalla on Regenerative Medicine | ONE Hand Labs",
        description:
            "An expert spotlight on Dr. Ashish Kalla — his approach to regenerative medicine and how digital branding amplifies clinical impact.",
    },
    alternates: {
        canonical: "https://onehandlabs.in/blog/dr-ashish-kalla-regenerative-medicine",
    },
};

export default function DrAshishKallaArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <ArticleSchema
                headline="Dr. Ashish Kalla on Regenerative Medicine & Doctor Branding"
                description="Dr. Ashish Kalla is at the forefront of integrative and regenerative medicine. Learn how strategic digital branding amplifies clinical impact — a spotlight by ONE Hand Labs."
                url="https://onehandlabs.in/blog/dr-ashish-kalla-regenerative-medicine"
                datePublished="April 3, 2026"
                breadcrumbLabel="Dr. Ashish Kalla Case Study"
            />
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
                                borderColor: "rgba(167,139,250,0.25)",
                                background: "rgba(167,139,250,0.06)",
                                color: "rgba(167,139,250,0.8)",
                            }}
                        >
                            Expert Spotlight
                        </span>
                        <span
                            className="text-[10px]"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                color: "rgba(255,255,255,0.25)",
                                letterSpacing: "0.1em",
                            }}
                        >
                            April 3, 2026 · 6 min read
                        </span>
                    </div>

                    <h1
                        className="font-headline font-black text-white uppercase tracking-tighter leading-[1.0] mb-8"
                        style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}
                    >
                        Dr. Ashish Kalla on Regenerative Medicine: Building a Doctor Brand That Patients Trust
                    </h1>

                    {/* Reference box linking to iMedi */}
                    <div
                        className="rounded-xl p-5 mb-10 flex items-center justify-between gap-4"
                        style={{
                            background: "rgba(167,139,250,0.04)",
                            border: "1px solid rgba(167,139,250,0.14)",
                        }}
                    >
                        <p
                            className="text-sm"
                            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope), sans-serif" }}
                        >
                            Dr. Ashish Kalla is featured on the{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary underline underline-offset-3 hover:opacity-80"
                            >
                                iMedi.health
                            </a>{" "}
                            platform. Visit to explore his clinical work and philosophy.
                        </p>
                        <a
                            href="https://imedi.health"
                            target="_blank"
                            rel="noopener"
                            className="flex-shrink-0 text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg font-bold transition-all hover:opacity-90"
                            style={{
                                fontFamily: "var(--font-space-grotesk), monospace",
                                background: "linear-gradient(to right, #a78bfa, #c1fffe)",
                                color: "#050508",
                            }}
                        >
                            Visit iMedi.health →
                        </a>
                    </div>

                    <div
                        className="font-body leading-relaxed text-base space-y-6"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                        <p>
                            In a landscape crowded with medical professionals competing for visibility
                            online, few physicians have built the kind of quiet, authoritative digital
                            presence that Dr. Ashish Kalla has. A specialist in integrative and
                            regenerative medicine, Dr. Kalla&apos;s approach to patient care is mirrored in
                            how he communicates: with precision, empathy, and depth.
                        </p>

                        <p>
                            Dr. Kalla is part of the clinical network at{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>
                            , a cutting-edge digital health ecosystem that ONE Hand Labs helped build from
                            the ground up. We spoke with him about the intersection of clinical expertise
                            and digital presence.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            The Philosophy of Regenerative Medicine
                        </h2>
                        <p>
                            &ldquo;Regenerative medicine is about working with the body&apos;s own intelligence,&rdquo;
                            Dr. Kalla explains. &ldquo;Our role as physicians is not to fight the body, but to
                            give it the information and resources it needs to heal.&rdquo; This philosophy
                            translates seamlessly into the digital content strategy at{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>
                            , where every article and protocol page is structured to educate, not just
                            inform.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            Why Doctor Branding Matters in 2026
                        </h2>
                        <p>
                            Patients in India increasingly research their doctors before booking
                            appointments. A well-designed digital profile — backed by genuine clinical
                            content — is no longer optional; it&apos;s a prerequisite for earning patient
                            trust. ONE Hand Labs worked with Dr. Ashish Kalla and the{" "}
                            <a
                                href="https://imedi.health"
                                target="_blank"
                                rel="noopener"
                                className="text-primary hover:underline hover:underline-offset-3"
                            >
                                iMedi.health
                            </a>{" "}
                            team to create a physician profile that is both authoritative and humanising —
                            the perfect combination to build lasting patient relationships.
                        </p>

                        <h2
                            className="font-headline font-black text-white uppercase tracking-tighter mt-10"
                            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)" }}
                        >
                            Key Takeaways for Healthcare Brands
                        </h2>
                        <ul className="space-y-3 pl-4" style={{ listStyle: "disc" }}>
                            <li>Lead with expertise — clinical credentials must be immediately visible.</li>
                            <li>
                                Use structured content to address the specific questions patients are
                                searching for.
                            </li>
                            <li>
                                Platform association matters — being featured on{" "}
                                <a
                                    href="https://imedi.health"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-primary hover:underline hover:underline-offset-3"
                                >
                                    iMedi.health
                                </a>{" "}
                                transfers domain authority to your profile.
                            </li>
                            <li>
                                Video and visual content dramatically increase session duration and trust
                                signals.
                            </li>
                        </ul>
                    </div>

                    <div
                        className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
                        style={{
                            background: "rgba(167,139,250,0.04)",
                            border: "1px solid rgba(167,139,250,0.14)",
                        }}
                    >
                        <div>
                            <p className="font-headline font-black text-white uppercase tracking-tighter text-lg mb-1">
                                Build your doctor brand with ONE Hand Labs
                            </p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                                We help physicians build trusted digital presences that convert.
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                href="/contact"
                                className="text-[11px] uppercase tracking-widest px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    background: "linear-gradient(to right, #a78bfa, #c1fffe)",
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
                                    border: "1px solid rgba(167,139,250,0.2)",
                                    color: "rgba(167,139,250,0.7)",
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
