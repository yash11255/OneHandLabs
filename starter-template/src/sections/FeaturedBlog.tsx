"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
type BlogPost = {
    id: string;
    category: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    href: string;
    backlink: string;
    backlinkLabel: string;
    featured?: boolean;
    accentColor: string;
};

/* ─────────────────────────────────────────
   Data — all 8 posts, each with a backlink
───────────────────────────────────────── */
const posts: BlogPost[] = [
    {
        id: "imedi-digital-health-ecosystem",
        category: "Case Study",
        date: "April 18, 2026",
        readTime: "5 min read",
        title: "How iMedi.health Is Redefining Regenerative Care Through Digital Innovation",
        excerpt: "iMedi.health is pioneering a new category in healthcare — blending regenerative medicine with a world-class digital experience. ONE Hand Labs engineered a seamless health ecosystem that bridges clinical expertise with patient-first design.",
        href: "/blog/imedi-digital-health-ecosystem",
        backlink: "https://imedi.health",
        backlinkLabel: "Visit iMedi.health →",
        featured: true,
        accentColor: "#c1fffe",
    },
    {
        id: "abcd-health-obesity-management",
        category: "Case Study",
        date: "April 10, 2026",
        readTime: "4 min read",
        title: "ABCD.health: Turning the Science of Obesity Into a Scalable Digital Platform",
        excerpt: "Adiposity-Based Chronic Disease management requires precision and authoritative content. Discover how ABCD.health became the go-to obesity reversal platform in South Asia — and the role ONE Hand Labs played.",
        href: "/blog/abcd-health-obesity-management",
        backlink: "https://www.abcd.health",
        backlinkLabel: "Explore ABCD.health →",
        featured: false,
        accentColor: "#63baff",
    },
    {
        id: "dr-ashish-kalla-regenerative-medicine",
        category: "Expert Spotlight",
        date: "April 3, 2026",
        readTime: "6 min read",
        title: "Dr. Ashish Kalla on Regenerative Medicine: Building a Doctor Brand That Patients Trust",
        excerpt: "Dr. Ashish Kalla is at the forefront of integrative and regenerative medicine. We explore how strategic digital branding at DrAshishKalla.com amplifies clinical authority and drives patient trust.",
        href: "/blog/dr-ashish-kalla-regenerative-medicine",
        backlink: "https://www.drashishkalla.com/",
        backlinkLabel: "Visit DrAshishKalla.com →",
        featured: false,
        accentColor: "#a78bfa",
    },
    {
        id: "medikold-pharma-platform",
        category: "Pharma Case Study",
        date: "March 14, 2026",
        readTime: "4 min read",
        title: "Medikold: Powering Pharmaceutical Digital Infrastructure in India",
        excerpt: "The pharmaceutical sector in India lags far behind in digital. Medikold is changing that — with a platform engineered by ONE Hand Labs to connect healthcare providers with reliable pharma supply chains.",
        href: "/blog/medikold-pharma-platform",
        backlink: "https://medikold.com",
        backlinkLabel: "Visit Medikold.com →",
        featured: false,
        accentColor: "#fbbf24",
    },
    {
        id: "cure-stone-urology-gurgaon",
        category: "Urology Case Study",
        date: "March 5, 2026",
        readTime: "5 min read",
        title: "Cure Stone: Gurgaon's Premier Kidney Stone & Urology Treatment Platform",
        excerpt: "Kidney stones affect over 12% of Indians. Cure Stone gives Gurgaon patients direct access to world-class urological care — powered by a high-performance digital platform built by ONE Hand Labs.",
        href: "/blog/cure-stone-urology-gurgaon",
        backlink: "https://thecurestone.com",
        backlinkLabel: "Visit TheCureStone.com →",
        featured: false,
        accentColor: "#f97316",
    },
    {
        id: "dr-deepanshu-gupta-urologist-gurgaon",
        category: "Expert Spotlight",
        date: "February 20, 2026",
        readTime: "5 min read",
        title: "Dr. Deepanshu Gupta: Gurgaon's Leading Urologist & Andrologist",
        excerpt: "Dr. Deepanshu Gupta is one of Delhi NCR's most sought-after Urologists and Renal Transplant Surgeons. Discover how ONE Hand Labs crafted his digital brand to match the precision of his surgical expertise.",
        href: "/blog/dr-deepanshu-gupta-urologist-gurgaon",
        backlink: "https://thecurestone.com",
        backlinkLabel: "See Cure Stone →",
        featured: false,
        accentColor: "#38bdf8",
    },
    {
        id: "dr-anshul-goel-orthopedic-spine-surgeon",
        category: "Expert Spotlight",
        date: "February 8, 2026",
        readTime: "5 min read",
        title: "Dr. Anshul Goel: 19 Years of Orthopedic & Spine Excellence — Now Online",
        excerpt: "Dr. Anshul Goel is an Orthopedic, Spine, and Joint Replacement Surgeon with 19 years of experience. ONE Hand Labs translated two decades of surgical legacy into organic patient discovery.",
        href: "/blog/dr-anshul-goel-orthopedic-spine-surgeon",
        backlink: "https://imedi.health",
        backlinkLabel: "See our healthcare portfolio →",
        featured: false,
        accentColor: "#34d399",
    },
    {
        id: "healthcare-seo-india",
        category: "Industry Insight",
        date: "March 22, 2026",
        readTime: "7 min read",
        title: "Why Healthcare SEO in India Is Broken — And How We're Fixing It",
        excerpt: "Most healthcare websites in India rank for zero keywords, load in 8+ seconds, and offer zero trust signals. ONE Hand Labs shares the exact playbook used for iMedi.health, ABCD.health, and DrAshishKalla.com.",
        href: "/blog/healthcare-seo-india",
        backlink: "https://www.drashishkalla.com/",
        backlinkLabel: "See Dr. Ashish Kalla's site →",
        featured: false,
        accentColor: "#a78bfa",
    },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function FeaturedBlog() {
    const [, setHoveredId] = useState<string | null>(null);
    const featured = posts.find((p) => p.featured);
    const rest = posts.filter((p) => !p.featured);

    return (
        <>
            <style>{`
                .blog-card {
                    position: relative;
                    background: #0d0d0f;
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.35s ease;
                }
                .blog-card:hover {
                    border-color: rgba(193,255,254,0.22);
                    box-shadow: 0 0 48px rgba(193,255,254,0.06);
                    transform: translateY(-3px);
                }
                .blog-card-featured { border-color: rgba(193,255,254,0.12); }
                .blog-card-featured:hover {
                    border-color: rgba(193,255,254,0.35);
                    box-shadow: 0 0 80px rgba(193,255,254,0.09);
                }
                .blog-top-line {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--accent-color, #c1fffe), transparent);
                    opacity: 0.12;
                    transition: opacity 0.4s ease;
                }
                .blog-card:hover .blog-top-line { opacity: 0.7; }
                .blog-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 9px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    padding: 4px 10px;
                    border-radius: 999px;
                    border: 1px solid rgba(193,255,254,0.18);
                    background: rgba(193,255,254,0.05);
                    color: rgba(193,255,254,0.65);
                    font-family: var(--font-space-grotesk), monospace;
                }
                .blog-backlink {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 11px;
                    letter-spacing: 0.08em;
                    color: rgba(193,255,254,0.55);
                    text-decoration: none;
                    font-family: var(--font-space-grotesk), monospace;
                    transition: color 0.25s ease;
                }
                .blog-backlink:hover { color: #c1fffe; text-decoration: underline; text-underline-offset: 3px; }
                .blog-read-more {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.35);
                    transition: color 0.25s ease;
                    font-family: var(--font-space-grotesk), monospace;
                    text-decoration: none;
                }
                .blog-card:hover .blog-read-more { color: rgba(193,255,254,0.75); }
                .blog-shimmer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 5;
                    border-radius: 16px;
                    background: linear-gradient(105deg, transparent 40%, rgba(193,255,254,0.03) 50%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .blog-card:hover .blog-shimmer { opacity: 1; }
            `}</style>

            <section
                id="blog"
                className="pt-40 pb-32 px-6 md:px-16 max-w-[1440px] mx-auto min-h-screen"
                aria-label="Featured Blog"
            >
                {/* ── Header ── */}
                <header className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="block h-px w-10" style={{ background: "rgba(193,255,254,0.5)" }} />
                        <span className="text-xs uppercase" style={{ fontFamily: "var(--font-space-grotesk), monospace", letterSpacing: "0.25em", color: "rgba(193,255,254,0.6)" }}>
                            Insights &amp; Case Studies
                        </span>
                    </div>

                    <div className="grid md:grid-cols-[1fr_auto] items-end gap-10">
                        <div>
                            <h1 className="font-headline font-black tracking-tighter text-white uppercase mb-5" style={{ fontSize: "clamp(3rem,8vw,6.5rem)", lineHeight: 0.92 }}>
                                Featured<br />
                                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #c1fffe 0%, #63baff 100%)" }}>
                                    Blog.
                                </span>
                            </h1>
                            <p className="font-body text-on-surface-variant text-base md:text-lg max-w-xl leading-relaxed mt-4">
                                Deep-dives into the projects, people, and platforms we build — with direct links
                                to the brands shaping the future of healthcare digital infrastructure.
                            </p>
                        </div>
                        <div className="text-right pb-1">
                            <div className="font-headline text-3xl font-black text-white tracking-tight leading-none">{posts.length}</div>
                            <div className="mt-1 text-[10px] uppercase" style={{ fontFamily: "var(--font-space-grotesk), monospace", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)" }}>Articles</div>
                        </div>
                    </div>
                </header>

                {/* ── Divider ── */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(193,255,254,0.25), transparent)" }} />
                    <span className="text-[10px] uppercase" style={{ fontFamily: "var(--font-space-grotesk), monospace", letterSpacing: "0.3em", color: "rgba(255,255,255,0.18)" }}>Latest Posts</span>
                </div>

                {/* ── Featured Post ── */}
                {featured && (
                    <div className="mb-8">
                        <article
                            className="blog-card blog-card-featured p-8 md:p-12"
                            style={{ "--accent-color": featured.accentColor } as React.CSSProperties}
                        >
                            <div className="blog-top-line" />
                            <div className="blog-shimmer" />
                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="blog-pill">{featured.category}</span>
                                    <span style={{ fontFamily: "var(--font-space-grotesk), monospace", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)" }}>{featured.date}</span>
                                    <span style={{ fontFamily: "var(--font-space-grotesk), monospace", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.2)" }}>· {featured.readTime}</span>
                                    <span className="ml-auto text-[10px] uppercase px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-space-grotesk), monospace", letterSpacing: "0.2em", background: "rgba(193,255,254,0.08)", color: "#c1fffe", border: "1px solid rgba(193,255,254,0.2)" }}>
                                        ★ Featured
                                    </span>
                                </div>
                                <h2 className="font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight" style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)" }}>
                                    {featured.title}
                                </h2>
                                <p className="font-body text-base leading-relaxed mb-8 max-w-3xl" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    {featured.excerpt}
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <Link href={featured.href} className="blog-read-more">
                                        Read Article
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </Link>
                                    <a href={featured.backlink} target="_blank" rel="noopener" className="blog-backlink">
                                        {featured.backlinkLabel}
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                )}

                {/* ── Post Grid ── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((post) => (
                        <article
                            key={post.id}
                            className="blog-card p-7 flex flex-col"
                            style={{ "--accent-color": post.accentColor } as React.CSSProperties}
                            onMouseEnter={() => setHoveredId(post.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="blog-top-line" />
                            <div className="blog-shimmer" />
                            <div className="relative z-10 flex flex-col flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-5">
                                    <span className="blog-pill">{post.category}</span>
                                    <span style={{ fontFamily: "var(--font-space-grotesk), monospace", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.22)" }}>{post.date}</span>
                                </div>
                                <h2 className="font-headline font-black text-white uppercase tracking-tighter mb-3 leading-[1.05]" style={{ fontSize: "clamp(1.05rem,1.8vw,1.3rem)" }}>
                                    {post.title}
                                </h2>
                                <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                                    {post.excerpt}
                                </p>
                                <div className="flex flex-col gap-3 mt-auto">
                                    <div className="flex items-center justify-between">
                                        <span style={{ fontFamily: "var(--font-space-grotesk), monospace", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.2)" }}>{post.readTime}</span>
                                        <Link href={post.href} className="blog-read-more">
                                            Read
                                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </Link>
                                    </div>
                                    <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                                        <a href={post.backlink} target="_blank" rel="noopener" className="blog-backlink">
                                            {post.backlinkLabel}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ── Footer rule ── */}
                <div className="mt-20 flex items-center gap-4">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />
                    <span className="text-[10px] uppercase" style={{ fontFamily: "var(--font-space-grotesk), monospace", letterSpacing: "0.3em", color: "rgba(255,255,255,0.12)" }}>End of Blog</span>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)" }} />
                </div>
            </section>
        </>
    );
}
