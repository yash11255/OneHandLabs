export default function Footer() {
    return (
        <footer className="bg-neutral-950 w-full py-20 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full">
                <div>
                    <div className="text-lg font-black text-white mb-6 uppercase">ONE Hand Labs</div>
                    <div className="flex gap-6 mb-8 font-body text-xs tracking-widest uppercase">
                        {["LinkedIn", "Twitter", "Instagram", "Github"].map((social) => (
                            <a
                                key={social}
                                className="text-neutral-500 hover:text-cyan-400 transition-all duration-300 opacity-80 hover:opacity-100"
                                href="#"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-primary/40 text-[10px] uppercase font-headline tracking-[0.5em]">
                        Based In
                    </span>
                    <span className="text-white font-headline text-2xl font-bold italic tracking-tighter uppercase">
                        DELHI — GURUGRAM
                    </span>
                    <p className="font-body text-xs tracking-widest uppercase text-neutral-500 mt-2">
                        © 2024 ONE Hand Labs. Precision in Development. Fluidity in Marketing.
                    </p>
                </div>
            </div>
        </footer>
    );
}
