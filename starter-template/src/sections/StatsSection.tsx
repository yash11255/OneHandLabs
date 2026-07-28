const STATS = [
    { value: "8+", label: "Clients" },
    { value: "5", label: "Live Platforms" },
    { value: "3", label: "Physician Brands" },
];

export default function StatsSection() {
    return (
        <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="space-y-6">
                    <span className="text-primary-container font-mono text-xs tracking-widest uppercase">
                        Real Work, Not Templates
                    </span>
                    <h5 className="text-4xl font-headline font-bold text-white leading-tight">Built On Real Client Work.</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                        Every engagement is shaped by what we&apos;ve learned building for iMedi.health, ABCD.health,
                        Cure Stone, Medikold, A1 Agro Industries, and the physician brands in our portfolio — see the
                        full case studies on{" "}
                        <a href="/work" className="text-primary-container hover:underline">our work page</a>.
                    </p>
                </div>
                <div className="lg:col-span-2 rounded-2xl border border-outline-variant/15 bg-surface-container-low p-10 flex items-center">
                    <div className="grid grid-cols-3 gap-8 w-full">
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <div className="font-headline text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-xs uppercase tracking-widest text-on-surface-variant">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
