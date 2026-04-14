import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-24 pt-20 overflow-hidden">
            {/* Background Abstract Renders */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full md:w-2/3 h-full opacity-40 pointer-events-none">
                <img
                    alt="abstract"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZveQbDI7N2MXy_eNLowgU9HxF44cvaBYVCxD2mj3TTfztF1aT8q8dcXIekr5mauCpxAPEDaxV7w56r9fCH0KLzqcgEtFPEjKbQ-rwKMLR93Xq8niKqAGsUyaxNIWB2fNv33BbKeF1Jxx0pO_IQniI6rfO3B7FGSfGWcP67WD2rdbQr_T96OiYtkeseRTMn08wp3iiMsJ2GCsJT0xQQs4wPCv99c2cxuXo4KiNri1Z_p_yjUIvEkXsRTqJM9fnY5slGMnIZdoQAMY"
                />
            </div>
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-surface-container-low border border-outline-variant/15">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-headline text-primary">
                        System Online: v2.04
                    </span>
                </div>

                <h1 className="text-6xl md:text-[5.5rem] font-bold font-headline leading-[0.9] tracking-tighter text-white mb-8">
                    Engineering Logic.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                        Marketing Magic.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                    A hybrid laboratory for high-performance software development and data-driven marketing growth. We
                    don&apos;t just build products; we engineer market dominance.
                </p>

                {/* Dual-Core Navigation */}
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
                    <Link
                        className="group flex-1 p-8 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 border border-outline-variant/10"
                        href="/services"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                            <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                north_east
                            </span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold text-white mb-2">Dev Core</h3>
                        <p className="text-sm text-on-surface-variant">Scalable architecture & precision code.</p>
                    </Link>
                    <Link
                        className="group flex-1 p-8 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 border border-outline-variant/10"
                        href="/services"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="material-symbols-outlined text-tertiary text-3xl">insights</span>
                            <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                north_east
                            </span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold text-white mb-2">Growth Core</h3>
                        <p className="text-sm text-on-surface-variant">Performance marketing & conversion ops.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
