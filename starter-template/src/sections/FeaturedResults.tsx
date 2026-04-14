export default function FeaturedResults() {
    return (
        <section className="py-32 px-6 md:px-24 bg-surface max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                        Experimental Results
                    </span>
                    <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight leading-none">
                        High-Impact Evidence.
                    </h2>
                </div>
                <div className="text-on-surface-variant text-right md:max-w-xs font-light italic">
                    &quot;Precision in execution leads to exponential growth outcomes.&quot;
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Large Stat Card */}
                <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container p-12 transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/5">
                    <div className="relative z-10">
                        <div className="text-[5rem] md:text-[8rem] font-headline font-bold leading-none tracking-tighter text-white mb-4">
                            340<span className="text-primary">%</span>
                        </div>
                        <div className="text-xl font-headline font-bold text-white mb-6 uppercase tracking-widest">
                            Revenue Increase
                        </div>
                        <p className="text-on-surface-variant max-w-md">
                            Scale-up engineering for a Tier-1 FinTech partner resulted in unprecedented user acquisition
                            metrics through architectural optimization.
                        </p>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700"></div>
                </div>

                {/* Small Vertical Card */}
                <div className="md:col-span-4 bg-gradient-to-br from-primary to-tertiary p-1 rounded-xl group">
                    <div className="w-full h-full bg-surface-container-lowest rounded-[calc(0.75rem-1px)] p-10 flex flex-col justify-between items-start">
                        <div>
                            <span
                                className="material-symbols-outlined text-primary text-4xl mb-6"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                bolt
                            </span>
                            <div className="text-5xl font-headline font-bold text-white mb-2">
                                12<span className="text-primary">ms</span>
                            </div>
                            <div className="text-sm font-headline text-on-surface-variant uppercase tracking-widest">
                                LCP Optimization
                            </div>
                        </div>
                        <p className="text-xs text-on-surface-variant font-light mt-8">
                            Hyper-fast frontend delivery for enterprise e-commerce.
                        </p>
                    </div>
                </div>

                {/* Image/Aesthetic Card */}
                <div className="md:col-span-4 aspect-square md:aspect-auto rounded-xl overflow-hidden relative group">
                    <img
                        alt="technology"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVt9jC5RDOmtXkrOrecigQyWdgK8BIWE2gE_b9YM9to3ejhLh-3nSpDNlBygNRBmgdIvJBibJQlOLjBSudHzOdBN2OGTIUt7zDXDkNI739WEp73Yaoj1qz1aZ1JJ-jvu3og0LvR2TgdAED6XdaeA92Hs--RGNPZIJq42oUDX4g53b_a2nmESc5RTaP8CuK57A4P_FLbgDZvlfwUMyP0o8aG7RSxZPCcxfWFCfpF5TiaAm-aESrhSmVkT3oO9ZvmxBtxNwmOEE5Ao0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white font-headline text-lg font-bold tracking-tight uppercase">
                            Proprietary Stacks
                        </div>
                    </div>
                </div>

                {/* Final Stat Card */}
                <div className="md:col-span-8 glass-panel p-12 rounded-xl border border-outline-variant/10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h3 className="text-3xl font-headline font-bold text-white mb-4">Market Velocity</h3>
                        <p className="text-on-surface-variant">
                            We bypass the traditional agencies&apos; slow cycles by utilizing a direct laboratory
                            approach—testing, iterating, and scaling in real-time.
                        </p>
                    </div>
                    <div className="flex-none grid grid-cols-2 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-headline font-bold text-primary">82k</div>
                            <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                                Daily Leads
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-headline font-bold text-tertiary">14.2M</div>
                            <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                                Ad Spend Managed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
