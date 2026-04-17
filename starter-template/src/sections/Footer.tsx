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
                    <a href="tel:+918950143430" className="text-primary font-body text-sm font-bold tracking-widest mt-1 hover:text-white transition-colors">
                        +91 8950 143 430
                    </a>
                    
                    <div className="w-full h-40 md:w-72 md:h-28 mt-4 rounded-lg overflow-hidden border border-outline-variant/15 opacity-70 hover:opacity-100 transition-opacity">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.2031128!2d77.0274!3d28.6102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0559139d3c7f%3A0x8b4af178588d14d4!2sOne%20Hand%20Labs!5e0!3m2!1sen!2sin!4v1713348123456!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ONE Hand Labs Location Map"
                        ></iframe>
                    </div>
                    <p className="font-body text-xs tracking-widest uppercase text-neutral-500 mt-2">
                        © 2024 ONE Hand Labs. Precision in Development. Fluidity in Marketing.
                    </p>
                </div>
            </div>
        </footer>
    );
}
