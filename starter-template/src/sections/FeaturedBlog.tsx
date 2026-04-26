"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function FeaturedBlog() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const [featured, ...rest] = blogPosts;

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                            Insights & Guides
                        </span>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
                            Enterprise Software.<br />Explained Simply.
                        </h2>
                    </div>
                    <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
                        Practical guides on CRM strategy, HR automation, and payroll compliance for Indian businesses.
                    </p>
                </div>

                {/* Featured post */}
                <Link href={`/blog/${featured.slug}`}
                    className="group block mb-8 rounded-2xl overflow-hidden relative"
                    style={{ background: "rgba(19,19,19,0.9)", border: `1px solid rgba(${featured.colorRgb},0.15)`,
                        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${featured.colorRgb},0.4)`;
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 40px rgba(${featured.colorRgb},0.08)`;
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${featured.colorRgb},0.15)`;
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                    }}>
                    <div className="flex flex-col md:flex-row">
                        {/* Left text */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-headline font-bold px-3 py-1.5 rounded-full"
                                        style={{ color: featured.color, background: `rgba(${featured.colorRgb},0.1)`, border: `1px solid rgba(${featured.colorRgb},0.25)` }}>
                                        {featured.category}
                                    </span>
                                    <span className="text-xs text-on-surface-variant">{featured.date}</span>
                                    <span className="text-xs text-on-surface-variant flex items-center gap-1">
                                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span>
                                        {featured.readTime}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                    {featured.title}
                                </h3>
                                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-lg">
                                    {featured.excerpt}
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 font-headline font-bold text-sm uppercase" style={{ color: featured.color, letterSpacing: "0.08em" }}>
                                Read Article
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-200" style={{ fontSize: 18 }}>arrow_forward</span>
                            </div>
                        </div>
                        {/* Right icon panel */}
                        <div className="md:w-64 flex items-center justify-center p-12" style={{ background: `rgba(${featured.colorRgb},0.04)`, borderLeft: `1px solid rgba(${featured.colorRgb},0.1)` }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 80, color: featured.color, opacity: 0.35, fontVariationSettings: "'FILL' 1" }}>
                                {featured.icon}
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Grid of remaining posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug}
                            className="group rounded-xl overflow-hidden flex flex-col"
                            style={{ background: "rgba(19,19,19,0.9)", border: `1px solid rgba(${post.colorRgb},0.12)`,
                                opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
                                transition: `opacity 0.65s ease ${(i + 1) * 0.08}s, transform 0.65s ease ${(i + 1) * 0.08}s, border-color 0.3s ease, box-shadow 0.3s ease` }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${post.colorRgb},0.35)`;
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 24px rgba(${post.colorRgb},0.07)`;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${post.colorRgb},0.12)`;
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                            }}>
                            {/* Icon header */}
                            <div className="flex items-center justify-center py-10" style={{ background: `rgba(${post.colorRgb},0.04)`, borderBottom: `1px solid rgba(${post.colorRgb},0.1)` }}>
                                <span className="material-symbols-outlined" style={{ fontSize: 48, color: post.color, opacity: 0.5, fontVariationSettings: "'FILL' 1" }}>
                                    {post.icon}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[9px] uppercase tracking-[0.3em] font-headline font-bold px-2.5 py-1 rounded-full"
                                        style={{ color: post.color, background: `rgba(${post.colorRgb},0.1)`, border: `1px solid rgba(${post.colorRgb},0.25)` }}>
                                        {post.category}
                                    </span>
                                    <span className="text-[10px] text-on-surface-variant">{post.readTime}</span>
                                </div>
                                <h3 className="font-headline font-bold text-white text-base leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-on-surface-variant leading-relaxed flex-1 mb-5">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-1 font-headline font-bold text-xs uppercase mt-auto" style={{ color: post.color, letterSpacing: "0.08em" }}>
                                    Read
                                    <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform duration-200" style={{ fontSize: 14 }}>arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
