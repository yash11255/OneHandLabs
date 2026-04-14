export default function StatsSection() {
    return (
        <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="space-y-6">
                    <span className="text-primary-container font-mono text-xs tracking-widest uppercase">
                        Research Phase
                    </span>
                    <h5 className="text-4xl font-headline font-bold text-white leading-tight">Data-Driven Creative.</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                        Every decision we make is backed by the Digital Laboratory&apos;s analytical framework. We minimize
                        friction and maximize impact through iterative testing.
                    </p>
                </div>
                <div className="lg:col-span-2 relative h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img
                        alt="Research phase"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwcg0E63HfUQylRSUfSRM-jm2pzEum-bzK8b4XIryOyCzEdX2OVpEGill-CwBE6bKnqeNmnBmDpMcxDhRZ5pHVg5vjZ13jtyIYvDQGc9cuvo3WGdswv4Fco3JhgG43stGKhcTLdhIxAMZWiD9sUZVY5jluQfRF3E-Y4uGaGmFZaIIhDEwIxb4biwZ1C8g9vkylWeur9MKMJ38m-tNlVh2gdCrDyUsjJHmaYvckbQJxhV-J0Lz3maS-osq7WMXVSHtNcYnD-gG3BTo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-8">
                        <p className="text-white font-headline text-2xl font-bold">140+ Projects Synchronized</p>
                        <p className="text-primary-container font-mono text-xs uppercase">Deployment: Successful</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
