import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://onehandlabs.in/blog/${post.slug}` },
    };
}

// Minimal markdown → HTML (no event handlers, pure static)
function parseMarkdown(md: string) {
    return md
        .trim()
        .replace(/### (.+)/g, '<h3 style="font-size:1.2rem;font-weight:700;color:#fff;margin-top:2rem;margin-bottom:0.75rem">$1</h3>')
        .replace(/## (.+)/g, '<h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin-top:2.5rem;margin-bottom:1rem">$1</h2>')
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff;font-weight:700">$1</strong>')
        .replace(/^- (.+)$/gm, '<li style="color:rgba(255,255,255,0.65);font-size:0.9rem;line-height:1.7;margin-bottom:0.4rem;list-style-type:disc;margin-left:1.25rem">$1</li>')
        .replace(/(\n<li)/g, '\n<ul style="margin-bottom:1rem">$1')
        .replace(/<\/li>(\n(?!<li))/g, '</li></ul>$1')
        .replace(/\n\n+/g, '</p><p style="color:rgba(255,255,255,0.65);font-size:1rem;line-height:1.8;margin-bottom:1.25rem">')
        .replace(/^(?!<)(.+)$/gm, '<p style="color:rgba(255,255,255,0.65);font-size:1rem;line-height:1.8;margin-bottom:1.25rem">$1</p>');
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const relatedPosts = blogPosts
        .filter((p) => p.slug !== post.slug && p.category === post.category)
        .slice(0, 2);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">

                {/* Hero */}
                <section
                    className="pt-32 pb-16 px-6 md:px-16 lg:px-24 relative overflow-hidden"
                    style={{ background: "rgba(10,10,12,1)" }}
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                            opacity: 0.3,
                        }}
                    />
                    <div
                        aria-hidden
                        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                        style={{ background: post.color, filter: "blur(160px)", opacity: 0.05 }}
                    />
                    <div className="max-w-[800px] mx-auto relative z-10">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-headline text-on-surface-variant hover:text-primary transition-colors mb-8"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-3 mb-6 flex-wrap">
                            <span
                                className="text-[10px] uppercase tracking-[0.3em] font-headline font-bold px-3 py-1.5 rounded-full"
                                style={{
                                    color: post.color,
                                    background: `rgba(${post.colorRgb},0.1)`,
                                    border: `1px solid rgba(${post.colorRgb},0.3)`,
                                }}
                            >
                                {post.category}
                            </span>
                            <span className="text-xs text-on-surface-variant">{post.date}</span>
                            <span className="text-xs text-on-surface-variant flex items-center gap-1">
                                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span>
                                {post.readTime} read
                            </span>
                        </div>

                        <h1
                            className="font-headline font-bold text-white tracking-tight leading-tight mb-6"
                            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
                        >
                            {post.title}
                        </h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                </section>

                {/* Icon divider */}
                <div
                    className="flex items-center justify-center py-8"
                    style={{
                        background: `rgba(${post.colorRgb},0.03)`,
                        borderTop: `1px solid rgba(${post.colorRgb},0.1)`,
                        borderBottom: `1px solid rgba(${post.colorRgb},0.1)`,
                    }}
                >
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 40, color: post.color, opacity: 0.4, fontVariationSettings: "'FILL' 1" }}
                    >
                        {post.icon}
                    </span>
                </div>

                {/* Article body */}
                <section className="py-16 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
                    <div className="max-w-[800px] mx-auto">
                        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
                    </div>
                </section>

                {/* CTA banner */}
                <section
                    className="py-14 px-6 md:px-16 lg:px-24"
                    style={{ background: "rgba(14,14,14,1)", borderTop: "1px solid rgba(72,72,71,0.15)" }}
                >
                    <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="font-headline font-bold text-white text-xl mb-1">
                                Ready to get started?
                            </h3>
                            <p className="text-on-surface-variant text-sm">
                                Book a free demo of CRM Nexus, HRMS Pro, or PaySync.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 font-headline font-bold text-sm uppercase px-7 py-3 rounded-xl transition-opacity hover:opacity-90 flex-shrink-0"
                            style={{
                                background: "linear-gradient(135deg, #c1fffe 0%, #63baff 100%)",
                                color: "#006767",
                                letterSpacing: "0.06em",
                            }}
                        >
                            Book a Demo
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                        </Link>
                    </div>
                </section>

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                    <section
                        className="py-16 px-6 md:px-16 lg:px-24"
                        style={{ background: "rgba(10,10,12,1)", borderTop: "1px solid rgba(72,72,71,0.1)" }}
                    >
                        <div className="max-w-[800px] mx-auto">
                            <h3 className="font-headline font-bold text-white text-xl mb-6">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {relatedPosts.map((rp) => (
                                    <Link
                                        href={`/blog/${rp.slug}`}
                                        key={rp.slug}
                                        className="group p-5 rounded-xl flex flex-col gap-2 transition-all hover:opacity-80"
                                        style={{
                                            background: "rgba(19,19,19,0.9)",
                                            border: `1px solid rgba(${rp.colorRgb},0.15)`,
                                        }}
                                    >
                                        <span
                                            className="text-[9px] uppercase tracking-[0.3em] font-headline font-bold"
                                            style={{ color: rp.color }}
                                        >
                                            {rp.category}
                                        </span>
                                        <h4 className="font-headline font-bold text-white text-sm group-hover:text-primary transition-colors">
                                            {rp.title}
                                        </h4>
                                        <span className="text-[10px] text-on-surface-variant">{rp.readTime}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
