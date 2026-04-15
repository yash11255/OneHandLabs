"use client";

import { useRef } from "react";
/* eslint-disable @next/next/no-img-element */

type Client = {
    id: string;
    type: "img" | "text";
    src?: string;
    text?: string;
    label: string;
    desc: string;
    href: string;
};

const clients: Client[] = [
    {
        id: "imedi", type: "img", src: "/Screenshot 2026-04-14 at 12.13.00 PM.png",
        label: "Regenrative Health", desc: "iMedi.health is a digital healthcare ecosystem developed in collaboration with Dr. Ashish Kalla, focusing on integrated medical services and personal branding.", href: "https://imedi.health"
    },
    {
        id: "abcd", type: "img", src: "https://www.abcd.health/PHOTO-2026-03-01-10-33-42.jpg",
        label: "Obesity Management", desc: "ABCD.health (standing for Adiposity-Based Chronic Disease) is a specialized medical knowledge platform developed by Dr. Ashish Kalla that focuses on the clinical management and reversal of obesity.", href: "https://www.abcd.health"
    },
    {
        id: "medikold", type: "img", src: "https://medikold.com/medikold-2.png",
        label: "Pharma", desc: "Medikold is one of the specialized healthcare verticals you’ve been developing for Dr. Ashish Kalla, specifically focused on pharmaceutical services and medical supply chains.", href: "https://medikold.com"
    },
    {
        id: "curestone", type: "img", src: "/Screenshot 2026-04-14 at 12.13.50 PM.png",
        label: "Urology", desc: "Cure Stone (specifically the Cure Stone Urology & Kidney Stone Clinic) is a specialized healthcare provider in Gurgaon focused on advanced treatments for urology and kidney stones", href: "https://thecurestone.com"
    },
    {
        id: "kalla", type: "img", src: "https://cdn.hexahealth.com/Image/webp/480x480/a0ec1270-4143-4027-91a5-a15250019495.webp",
        label: "Professional", desc: "A specialist in General Medicine with a rich experience of over 13 years", href: "#"
    },
    {
        id: "gupta", type: "img", src: "/1650339213806-pvt6nrrseu7txrxqci6ph9v3zc7awzsjdx0be5vrno.jpg.webp",
        label: "Urologist", desc: "Dr Deepanshu Gupta is one of the top Urologist in Gurgaon/Delhi NCR. He is a dedicated and reputed  Urologist, Andrologist & Renal Transplant surgeon proficient in kidney stone treatment, Prostate Enlargement Surgery.", href: "#"
    },
    {
        id: "goel", type: "img", src: "/Dr%20anshul.jpeg",
        label: "Orthopedic surgeon", desc: "Orthopedic surgeon, Spine Surgeon (Ortho), Joint Replacement Surgeon, Orthopedist 19 Years Experience Overall  (13 years as specialist)", href: "#"
    },
];

export default function ClientCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -340 : 340;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-surface-container-lowest overflow-hidden border-y border-outline-variant/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-primary uppercase text-xs font-bold tracking-[0.3em] font-headline mb-2">
                        Our Network
                    </h2>
                    <p className="text-4xl font-headline font-bold text-white uppercase tracking-tighter">
                        Trusted client
                    </p>
                </div>
                {/* Navigation Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center text-white hover:bg-surface-container transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center text-white hover:bg-surface-container transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-10 no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
                {clients.map((client) => (
                    <a
                        key={client.id}
                        href={client.href}
                        target={client.href !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group relative h-[260px] p-8 bg-surface-container-low border border-outline-variant/10 rounded-2xl flex flex-col justify-between items-start transition-all duration-500 hover:bg-surface-container hover:border-primary/40 hover:-translate-y-2 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {/* Logo/Content Area */}
                        <div>
                            <div className="h-10 w-full flex items-center justify-start mb-6">
                                {client.type === "img" ? (
                                    <img
                                        src={client.src!}
                                        alt={client.id}
                                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <span className="text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                                        {client.text}
                                    </span>
                                )}
                            </div>

                            {/* Brand Description */}
                            <p className="text-sm font-body text-on-surface-variant leading-relaxed line-clamp-3">
                                {client.desc}
                            </p>
                        </div>

                        {/* Label/Tag Area */}
                        <div className="flex items-center gap-2 mt-auto">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-headline font-bold">
                                {client.label}
                            </span>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/0 blur-[50px] rounded-full group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
                    </a>
                ))}
            </div>
        </section>
    );
}