import Link from "next/link";

interface CrossSellStripProps {
    eyebrow?: string;
    heading?: string;
    ctaLabel?: string;
    href?: string;
}

export default function CrossSellStrip({
    eyebrow = "Also Need a Website?",
    heading = "We design, build, and revamp websites — with technical SEO and AI-search optimization for Google AI Overviews, ChatGPT, and Perplexity built in from day one.",
    ctaLabel = "See Agency Services",
    href = "/services",
}: CrossSellStripProps = {}) {
    return (
        <section className="py-16 px-6 md:px-16 lg:px-24" style={{ background: "rgba(14,14,14,1)" }}>
            <div
                className="max-w-[1440px] mx-auto rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
                style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.2)" }}
            >
                <div className="max-w-2xl text-center md:text-left">
                    <span className="text-xs uppercase tracking-[0.3em] font-headline text-primary font-bold mb-3 block">
                        {eyebrow}
                    </span>
                    <p className="text-white text-lg md:text-xl font-headline font-bold tracking-tight leading-snug">
                        {heading}
                    </p>
                </div>
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 font-headline font-bold text-xs uppercase px-7 py-3.5 rounded-xl border border-white/15 text-white transition-all duration-300 hover:bg-white/5 flex-shrink-0"
                    style={{ letterSpacing: "0.06em" }}
                >
                    {ctaLabel}
                    <span aria-hidden>→</span>
                </Link>
            </div>
        </section>
    );
}
