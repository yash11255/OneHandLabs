type Client = {
    id: string;
    type: "img" | "text";
    src?: string;
    title: string;
    label: string;
    desc: string;
    href: string;
    size: "md" | "lg";
};

export default function Work() {
    const clients: Client[] = [
        {
            id: "imedi", type: "img", src: "/Screenshot 2026-04-14 at 12.13.00 PM.png", title: "iMedi.health",
            label: "Regenerative Health", desc: "iMedi.health is a digital healthcare ecosystem developed in collaboration with Dr. Ashish Kalla, focusing on integrated medical services and personal branding.", href: "https://imedi.health", size: "lg"
        },
        {
            id: "abcd", type: "img", src: "https://www.abcd.health/PHOTO-2026-03-01-10-33-42.jpg", title: "ABCD.health",
            label: "Obesity Management", desc: "ABCD.health (standing for Adiposity-Based Chronic Disease) is a specialized medical knowledge platform developed by Dr. Ashish Kalla that focuses on the clinical management and reversal of obesity.", href: "https://www.abcd.health", size: "md"
        },
        {
            id: "medikold", type: "img", src: "https://medikold.com/medikold-2.png", title: "Medikold",
            label: "Pharma", desc: "Medikold is one of the specialized healthcare verticals you’ve been developing for Dr. Ashish Kalla, specifically focused on pharmaceutical services and medical supply chains.", href: "https://medikold.com", size: "lg"
        },
        {
            id: "curestone", type: "img", src: "/Screenshot 2026-04-14 at 12.13.50 PM.png", title: "Cure Stone",
            label: "Urology", desc: "Cure Stone (specifically the Cure Stone Urology & Kidney Stone Clinic) is a specialized healthcare provider in Gurgaon focused on advanced treatments for urology and kidney stones", href: "https://thecurestone.com", size: "md"
        },
        {
            id: "kalla", type: "img", src: "https://cdn.hexahealth.com/Image/webp/480x480/a0ec1270-4143-4027-91a5-a15250019495.webp", title: "Dr. Ashish Kalla",
            label: "Professional", desc: "A specialist in General Medicine with a rich experience of over 13 years", href: "#", size: "lg"
        },
        {
            id: "gupta", type: "img", src: "/1650339213806-pvt6nrrseu7txrxqci6ph9v3zc7awzsjdx0be5vrno.jpg.webp", title: "Dr. Deepanshu Gupta",
            label: "Urologist", desc: "Dr Deepanshu Gupta is one of the top Urologists in Gurgaon/Delhi NCR. He is a dedicated and reputed Urologist, Andrologist & Renal Transplant surgeon.", href: "#", size: "md"
        },
        {
            id: "goel", type: "img", src: "/Dr%20anshul.jpeg", title: "Dr. Anshul Goel",
            label: "Orthopedic Surgeon", desc: "Orthopedic surgeon, Spine Surgeon (Ortho), Joint Replacement Surgeon, Orthopedist 19 Years Experience Overall (13 years as specialist)", href: "#", size: "lg"
        },
    ];

    return (
        <section id="work" className="pt-40 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto technical-grid min-h-screen">
            <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
                <div className="max-w-3xl">
                    <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.9] mb-8">
                        Our
                        <br />
                        <span className="text-primary">Portfolio.</span>
                    </h1>
                    <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
                        A curated archive of technological breakthroughs and market-shifting experiences. We don&apos;t
                        just build; we engineer growth through high-precision development.
                    </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <div className="h-12 w-0.5 bg-primary/30"></div>
                    <span className="font-headline text-xs tracking-widest uppercase text-primary/60 rotate-180 [writing-mode:vertical-lr]">
                        Scroll to Explore
                    </span>
                </div>
            </header>

            <div className="masonry-grid">
                {clients.map((project) => (
                    <a
                        key={project.id}
                        href={project.href}
                        target={project.href !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`masonry-item masonry-item-${project.size} group relative overflow-hidden rounded-2xl bg-surface-container-low border border-outline-variant/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,255,255,0.1)] block`}
                    >
                        {project.type === "img" ? (
                            <>
                                <div className="absolute inset-x-0 top-0 bottom-1/3 p-8 md:p-12 flex items-center justify-center z-0">
                                    <img
                                        alt={project.title}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        src={project.src}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/90 to-surface-container/20 pointer-events-none z-0"></div>
                            </>
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-lowest opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>
                        )}
                        
                        <div className="relative h-full p-10 flex flex-col justify-end z-10">
                            <span className="font-headline text-primary text-xs tracking-[0.3em] uppercase mb-3 drop-shadow-md">
                                {project.label}
                            </span>
                            <h3 className="font-headline text-3xl font-bold text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
                                {project.title}
                            </h3>
                            <div className="mt-4 transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="font-body text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/50 pl-4 py-1 bg-black/20 backdrop-blur-sm rounded-r-lg">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
