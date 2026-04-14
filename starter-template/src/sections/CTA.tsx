import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-20 bg-surface-container-lowest overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="bg-surface-container p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-12 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-3xl"></div>
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6">READY TO SCALE?</h2>
                        <p className="text-on-surface-variant text-[16px] md:text-lg">
                            Select your primary objective to begin the onboarding sequence with our lead engineers and
                            creative directors.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-primary-container text-on-primary-container px-12 py-5 rounded-lg font-headline font-bold uppercase tracking-widest hover:scale-95 transition-all duration-300"
                        >
                            Build My Platform
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border border-outline-variant/20 text-white px-12 py-5 rounded-lg font-headline font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
                        >
                            Launch My Brand
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
