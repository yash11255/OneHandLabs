"use client";

import { useState } from "react";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
type Client = {
    id: string;
    src?: string;
    title: string;
    label: string;
    desc: string;
    href: string;
    size: "md" | "lg";
};

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const clients: Client[] = [
    {
        id: "imedi",
        src: "/Screenshot 2026-04-14 at 12.13.00 PM.png",
        title: "iMedi.health",
        label: "Regenerative Health",
        desc: "A digital healthcare ecosystem developed in collaboration with Dr. Ashish Kalla, focusing on integrated medical services and personal branding.",
        href: "https://imedi.health",
        size: "lg",
    },
    {
        id: "abcd",
        src: "https://www.abcd.health/PHOTO-2026-03-01-10-33-42.jpg",
        title: "ABCD.health",
        label: "Obesity Management",
        desc: "A specialized medical knowledge platform focused on the clinical management and reversal of Adiposity-Based Chronic Disease.",
        href: "https://www.abcd.health",
        size: "md",
    },
    {
        id: "medikold",
        src: "https://medikold.com/medikold-2.png",
        title: "Medikold",
        label: "Pharma",
        desc: "Specialized healthcare vertical focused on pharmaceutical services and medical supply chains.",
        href: "https://medikold.com",
        size: "lg",
    },
    {
        id: "curestone",
        src: "/Screenshot 2026-04-14 at 12.13.50 PM.png",
        title: "Cure Stone",
        label: "Urology",
        desc: "Specialized provider in Gurgaon for advanced urology and kidney stone treatments.",
        href: "https://thecurestone.com",
        size: "md",
    },
    {
        id: "kalla",
        src: "https://cdn.hexahealth.com/Image/webp/480x480/a0ec1270-4143-4027-91a5-a15250019495.webp",
        title: "Dr. Ashish Kalla",
        label: "General Medicine",
        desc: "Specialist in General Medicine with over 13 years of rich clinical and digital health experience.",
        href: "#",
        size: "lg",
    },
    {
        id: "gupta",
        src: "/1650339213806-pvt6nrrseu7txrxqci6ph9v3zc7awzsjdx0be5vrno.jpg.webp",
        title: "Dr. Deepanshu Gupta",
        label: "Urology & Andrology",
        desc: "Top Urologist, Andrologist & Renal Transplant Surgeon in Gurgaon/Delhi NCR.",
        href: "#",
        size: "md",
    },
    {
        id: "goel",
        src: "/Dr%20anshul.jpeg",
        title: "Dr. Anshul Goel",
        label: "Orthopedic Surgery",
        desc: "Orthopedic, Spine, and Joint Replacement Surgeon with 19 years of experience.",
        href: "#",
        size: "lg",
    },
];

const STATS = [
    { value: "7+", label: "Clients" },
    { value: "4", label: "Platforms" },
    { value: "3", label: "Doctors" },
];

/* ─────────────────────────────────────────
   Work Section
───────────────────────────────────────── */
export default function Work() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <>
            <style>{`
                /* Pure CSS-Columns masonry — no conflict with global .masonry-grid */
                .work-masonry {
                    column-count: 2;
                    column-gap: 1.25rem;
                }
                @media (max-width: 640px) {
                    .work-masonry { column-count: 1; }
                }
                .work-card-wrap {
                    break-inside: avoid;
                    margin-bottom: 1.25rem;
                    display: block;
                }

                /* Card hover — managed via JS state for z-index safety */
                .work-card {
                    position: relative;
                    overflow: hidden;
                    background: #0d0d0f;
                    border: 1px solid rgba(255,255,255,0.06);
                    transition:
                        border-color 0.4s ease,
                        box-shadow 0.4s ease,
                        transform 0.35s ease,
                        opacity 0.35s ease;
                    border-radius: 16px;
                }
                .work-card.is-hovered {
                    border-color: rgba(193,255,254,0.3);
                    box-shadow: 0 0 40px rgba(193,255,254,0.07);
                    transform: translateY(-4px);
                }
                .work-card.is-dimmed {
                    opacity: 0.45;
                    transform: scale(0.99);
                }

                /* Image zoom */
                .work-card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    transition: transform 0.7s ease;
                }
                .work-card.is-hovered .work-card-img {
                    transform: scale(1.05);
                }

                /* Label pill */
                .work-label-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-family: var(--font-space-grotesk), monospace;
                    font-size: 9px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    padding: 5px 10px;
                    border-radius: 999px;
                    border: 1px solid rgba(193,255,254,0.18);
                    background: rgba(193,255,254,0.05);
                    color: rgba(193,255,254,0.6);
                    transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
                }
                .work-card.is-hovered .work-label-pill {
                    background: rgba(193,255,254,0.12);
                    border-color: rgba(193,255,254,0.35);
                    color: #c1fffe;
                }

                /* Desc reveal */
                .work-desc-wrap {
                    overflow: hidden;
                    max-height: 0;
                    opacity: 0;
                    margin-top: 0;
                    transition: max-height 0.5s ease, opacity 0.4s ease, margin-top 0.4s ease;
                }
                .work-card.is-hovered .work-desc-wrap {
                    max-height: 120px;
                    opacity: 1;
                    margin-top: 10px;
                }

                /* CTA reveal */
                .work-cta {
                    opacity: 0;
                    transform: translateY(5px);
                    transition: opacity 0.35s ease, transform 0.35s ease;
                    margin-top: 10px;
                }
                .work-card.is-hovered .work-cta {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Top shimmer line */
                .work-top-line {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #c1fffe, transparent);
                    opacity: 0.1;
                    transition: opacity 0.4s ease;
                }
                .work-card.is-hovered .work-top-line { opacity: 0.6; }

                /* Shimmer overlay */
                .work-shimmer {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 20;
                    border-radius: 16px;
                    background: linear-gradient(105deg, transparent 40%, rgba(193,255,254,0.04) 50%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .work-card.is-hovered .work-shimmer { opacity: 1; }
            `}</style>

            <section
                id="work"
                className="pt-40 pb-32 px-6 md:px-16 max-w-[1440px] mx-auto min-h-screen"
            >
                {/* ── Header ── */}
                <header className="mb-20 grid md:grid-cols-[1fr_auto] items-end gap-12">
                    <div>
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block h-px w-10" style={{ background: "rgba(193,255,254,0.5)" }} />
                            <span
                                className="text-xs uppercase"
                                style={{
                                    fontFamily: "var(--font-space-grotesk), monospace",
                                    letterSpacing: "0.25em",
                                    color: "rgba(193,255,254,0.6)",
                                }}
                            >
                                Selected Work
                            </span>
                        </div>

                        {/* Headline — clamp + safe line-height */}
                        <h1
                            className="font-headline font-black tracking-tighter text-white uppercase mb-6"
                            style={{ fontSize: "clamp(3rem,8vw,6.5rem)", lineHeight: 0.92 }}
                        >
                            Our<br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #c1fffe 0%, #63baff 100%)",
                                }}
                            >
                                Portfolio.
                            </span>
                        </h1>

                        <p className="font-body text-on-surface-variant text-base md:text-lg max-w-lg leading-relaxed">
                            A curated archive of technological breakthroughs and market-shifting experiences.
                            We don&apos;t just build — we engineer growth through high-precision development.
                        </p>
                    </div>

                    {/* Stats bar */}
                    <div className="flex md:flex-col gap-8 md:gap-6 items-start md:items-end pb-1">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="text-right">
                                <div className="font-headline text-3xl font-black text-white tracking-tight leading-none">
                                    {stat.value}
                                </div>
                                <div
                                    className="mt-1 text-[10px] uppercase"
                                    style={{
                                        fontFamily: "var(--font-space-grotesk), monospace",
                                        letterSpacing: "0.15em",
                                        color: "rgba(255,255,255,0.25)",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* ── Divider ── */}
                <div className="flex items-center gap-4 mb-16">
                    <div
                        className="h-px flex-1"
                        style={{ background: "linear-gradient(to right, rgba(193,255,254,0.25), transparent)" }}
                    />
                    <span
                        className="text-[10px] uppercase"
                        style={{
                            fontFamily: "var(--font-space-grotesk), monospace",
                            letterSpacing: "0.3em",
                            color: "rgba(255,255,255,0.18)",
                        }}
                    >
                        {clients.length} Projects
                    </span>
                </div>

                {/* ── CSS-Columns Masonry ── */}
                <div className="work-masonry">
                    {clients.map((project, index) => {
                        const isHovered = hoveredId === project.id;
                        const isDimmed = hoveredId !== null && !isHovered;
                        const cardClass = [
                            "work-card",
                            isHovered ? "is-hovered" : "",
                            isDimmed ? "is-dimmed" : "",
                        ].join(" ");

                        const cardHeight = project.size === "lg" ? 420 : 280;

                        return (
                            <a
                                key={project.id}
                                href={project.href}
                                target={project.href !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="work-card-wrap"
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={(e) => project.href === "#" && e.preventDefault()}
                            >
                                <div
                                    className={cardClass}
                                    style={{ height: cardHeight }}
                                >
                                    {/* Top shimmer line */}
                                    <div className="work-top-line" />

                                    {/* Image */}
                                    {project.src && (
                                        <div className="absolute inset-0">
                                            <img
                                                src={project.src}
                                                alt={project.title}
                                                className="work-card-img"
                                                loading="lazy"
                                                onError={(e) => {
                                                    (e.currentTarget as HTMLImageElement).style.display = "none";
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Gradient scrim — stronger at bottom */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to top, #0d0d0f 0%, rgba(13,13,15,0.82) 38%, rgba(13,13,15,0.4) 62%, transparent 100%)",
                                        }}
                                    />

                                    {/* Index badge — top right */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span
                                            style={{
                                                fontFamily: "var(--font-space-grotesk), monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.15em",
                                                color: "rgba(255,255,255,0.18)",
                                                fontVariantNumeric: "tabular-nums",
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Label pill — top left */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="work-label-pill">
                                            <span
                                                className="flex-shrink-0 rounded-full"
                                                style={{
                                                    width: 5,
                                                    height: 5,
                                                    background: isHovered ? "#c1fffe" : "rgba(193,255,254,0.5)",
                                                    transition: "background 0.3s ease",
                                                }}
                                            />
                                            {project.label}
                                        </span>
                                    </div>

                                    {/* Bottom content */}
                                    <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                                        <h3
                                            className="font-headline text-white font-black uppercase leading-tight"
                                            style={{
                                                fontSize: project.size === "lg" ? "clamp(1.4rem,2.8vw,1.9rem)" : "1.2rem",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {project.title}
                                        </h3>

                                        {/* Description — CSS drives reveal, no inline style flickering */}
                                        <div className="work-desc-wrap">
                                            <p
                                                className="font-body text-sm leading-relaxed"
                                                style={{ color: "rgba(255,255,255,0.45)" }}
                                            >
                                                {project.desc}
                                            </p>
                                        </div>

                                        {/* CTA link */}
                                        {project.href !== "#" && (
                                            <div className="work-cta flex items-center gap-2">
                                                <span
                                                    className="text-[11px] uppercase"
                                                    style={{
                                                        fontFamily: "var(--font-space-grotesk), monospace",
                                                        letterSpacing: "0.15em",
                                                        color: "rgba(193,255,254,0.7)",
                                                    }}
                                                >
                                                    Visit Site
                                                </span>
                                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                                    <path
                                                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                                                        stroke="rgba(193,255,254,0.7)"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Scan-line shimmer */}
                                    <div className="work-shimmer" />
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* ── Footer rule ── */}
                <div className="mt-16 flex items-center gap-4">
                    <div
                        className="h-px flex-1"
                        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }}
                    />
                    <span
                        className="text-[10px] uppercase"
                        style={{
                            fontFamily: "var(--font-space-grotesk), monospace",
                            letterSpacing: "0.3em",
                            color: "rgba(255,255,255,0.12)",
                        }}
                    >
                        End of Portfolio
                    </span>
                    <div
                        className="h-px flex-1"
                        style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)" }}
                    />
                </div>
            </section>
        </>
    );
}