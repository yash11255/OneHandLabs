import Link from "next/link";

export default function OldCTA() {
    return (
        <section className="py-40 px-6 relative overflow-hidden text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[150px] rounded-full"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tighter">
                    Ready to enter the Lab?
                </h2>
                <p className="text-on-surface-variant text-lg mb-12">
                    Limited availability for Q3 partnerships. Apply for a diagnostic session today.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-black uppercase tracking-widest text-sm rounded-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all active:scale-95"
                    >
                        Initiate Project
                    </Link>
                    <Link
                        href="/services"
                        className="inline-block px-12 py-5 border border-outline-variant/20 text-white font-headline font-black uppercase tracking-widest text-sm rounded-lg hover:bg-white/5 transition-all active:scale-95"
                    >
                        Our Process
                    </Link>
                </div>
            </div>
        </section>
    );
}
