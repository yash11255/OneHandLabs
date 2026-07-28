import MapEmbed from "@/components/MapEmbed";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 w-full py-20 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full">
                <div>
                    <div className="text-lg font-black text-white mb-6 uppercase">ONE Hand Labs</div>
                    <p className="font-body text-xs tracking-widest uppercase text-neutral-500 max-w-xs leading-relaxed">
                        Software development agency & CRM, HRMS, Payroll product studio.
                    </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-primary/40 text-[10px] uppercase font-headline tracking-[0.5em]">
                        Based In
                    </span>
                    <span className="text-white font-headline text-2xl font-bold italic tracking-tighter uppercase">
                        DELHI — GURUGRAM
                    </span>
                    <a href="tel:+918950143430" className="text-primary font-body text-sm font-bold tracking-widest mt-1 hover:text-white transition-colors">
                        +91 8950 143 430
                    </a>

                    <div className="w-full h-40 md:w-72 md:h-28 mt-4 rounded-lg overflow-hidden border border-outline-variant/15 opacity-70 hover:opacity-100 transition-opacity">
                        <MapEmbed title="ONE Hand Labs Location Map" />
                    </div>
                    <p className="font-body text-xs tracking-widest uppercase text-neutral-500 mt-2">
                        © {year} ONE Hand Labs. Precision in Development. Fluidity in Marketing.
                    </p>
                </div>
            </div>
        </footer>
    );
}
