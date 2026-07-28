import Link from "next/link";

export default function SplitGrid() {
    return (
        <section id="services" className="grid grid-cols-1 lg:grid-cols-2 min-h-[900px] border-t border-outline-variant/10">
            {/* Left Side: Labs/Software */}
            <div className="relative flex flex-col p-8 lg:p-12 overflow-hidden bg-surface-container-lowest labs-section group">
                <div className="grid-line-motif absolute inset-0 z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-12">
                        <span className="material-symbols-outlined text-primary-container text-4xl">terminal</span>
                        <h2 className="text-3xl font-headline font-bold uppercase tracking-widest text-white">
                            DEVELOPMENT
                        </h2>
                    </div>

                    <div className="mt-auto space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-5xl font-headline font-extrabold text-white tracking-tighter">
                                SOFTWARE DEVELOPMENT
                            </h3>
                            <p className="text-on-surface-variant font-mono text-sm uppercase tracking-tighter max-w-md">
                                [01] Custom healthcare websites &amp; portals
                                <br />
                                [02] Next.js architecture, built for speed
                                <br />
                                [03] Schema &amp; technical SEO from day one
                                <br />
                                [04] Secure patient-data handling
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-surface-container-low p-8 rounded-xl border-l-2 border-primary-container group-hover:bg-surface-container transition-colors duration-500">
                                <span className="text-primary-container font-mono text-xs mb-2 block">MODULE_01</span>
                                <h4 className="text-white text-xl font-headline font-bold mb-2">Technical Consulting</h4>
                                <p className="text-on-surface-variant text-sm font-light">
                                    Deep architectural reviews for high-scale applications. We find the bottlenecks before
                                    they find you.
                                </p>
                            </div>
                            <div className="bg-surface-container-low p-8 rounded-xl group-hover:bg-surface-container transition-colors duration-500">
                                <span className="text-primary-container font-mono text-xs mb-2 block">MODULE_02</span>
                                <h4 className="text-white text-xl font-headline font-bold mb-2">SaaS Orchestration</h4>
                                <p className="text-on-surface-variant text-sm font-light">
                                    Building robust, scalable platforms using React, Node, and Python engines with
                                    precision deployment.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 text-primary-container group/btn transition-all duration-300"
                        >
                            <span className="font-headline font-bold uppercase tracking-widest text-sm">
                                INITIATE_PROTOCOL
                            </span>
                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
                {/* Decorative Background Element */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side: Agency/Marketing */}
            <div className="relative flex flex-col p-8 lg:p-12 overflow-hidden bg-surface-container agency-section">
                <div className="fluid-organic absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-12">
                        <span className="material-symbols-outlined text-tertiary text-4xl">auto_awesome</span>
                        <h2 className="text-3xl font-headline font-bold uppercase tracking-widest text-white">
                            GROWTH
                        </h2>
                    </div>

                    <div className="mt-auto space-y-12">
                        <div className="space-y-4 text-right">
                            <h3 className="text-5xl font-headline font-extrabold text-white tracking-tighter">
                                DIGITAL GROWTH
                            </h3>
                            <p className="text-on-surface-variant font-body text-sm italic tracking-wide ml-auto max-w-md">
                                Fluid creative strategies. Magnetic brand identity. High-conversion marketing engines
                                designed for velocity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-surface-bright/20 backdrop-blur-md p-8 rounded-xl border-r-2 border-tertiary-container shadow-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-white text-xl font-headline font-bold">Brand Evolution</h4>
                                    <span className="material-symbols-outlined text-tertiary">brightness_high</span>
                                </div>
                                <p className="text-on-surface-variant text-sm font-light">
                                    Crafting visual identities that pulse with life. We don&apos;t just build logos; we
                                    build legacies.
                                </p>
                            </div>
                            <div className="bg-surface-bright/20 backdrop-blur-md p-8 rounded-xl shadow-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-white text-xl font-headline font-bold">Fluid Marketing</h4>
                                    <span className="material-symbols-outlined text-tertiary">waves</span>
                                </div>
                                <p className="text-on-surface-variant text-sm font-light">
                                    Adaptive campaigns that evolve with market shifts. Dynamic ad creative and
                                    performance strategy.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-block ml-auto bg-white text-black px-10 py-4 rounded-full font-headline font-black text-sm uppercase tracking-tighter hover:bg-tertiary-container hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
                        >
                            Experience the Fluidity
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
