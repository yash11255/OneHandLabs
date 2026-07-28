import Link from "next/link";

const caseStudies = [
    { slug: "imedi-digital-health-ecosystem", title: "iMedi.health", desc: "A digital healthcare ecosystem for regenerative medicine and personal branding." },
    { slug: "abcd-health-obesity-management", title: "ABCD.health", desc: "A clinical knowledge platform for obesity management, built for organic reach." },
    { slug: "cure-stone-urology-gurgaon", title: "Cure Stone", desc: "Gurgaon's premier urology & kidney stone treatment platform." },
    { slug: "medikold-pharma-platform", title: "Medikold", desc: "Digital infrastructure for pharmaceutical services and supply chains." },
    { slug: "dr-ashish-kalla-regenerative-medicine", title: "Dr. Ashish Kalla", desc: "Doctor branding for a regenerative medicine specialist." },
    { slug: "dr-deepanshu-gupta-urologist-gurgaon", title: "Dr. Deepanshu Gupta", desc: "Digital presence for a leading urologist in Gurgaon/Delhi NCR." },
    { slug: "dr-anshul-goel-orthopedic-spine-surgeon", title: "Dr. Anshul Goel", desc: "Personal brand for an orthopedic & spine surgeon with 19 years of experience." },
    { slug: "healthcare-seo-india", title: "Healthcare SEO in India", desc: "The systemic failures in medical SEO — and the exact playbook we use to fix them." },
];

export default function CaseStudiesGrid() {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)", borderTop: "1px solid rgba(72,72,71,0.1)" }}>
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.4em] font-headline text-primary font-bold mb-4 block">
                        Client Case Studies
                    </span>
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight leading-tight">
                        Real Healthcare Portfolio.
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {caseStudies.map((cs) => (
                        <Link
                            href={`/blog/${cs.slug}`}
                            key={cs.slug}
                            className="group p-6 rounded-xl flex flex-col gap-2 transition-all hover:border-primary/30"
                            style={{ background: "rgba(19,19,19,0.9)", border: "1px solid rgba(72,72,71,0.15)" }}
                        >
                            <h3 className="font-headline font-bold text-white text-base group-hover:text-primary transition-colors">
                                {cs.title}
                            </h3>
                            <p className="text-xs text-on-surface-variant leading-relaxed flex-1">
                                {cs.desc}
                            </p>
                            <span className="mt-2 text-[10px] uppercase tracking-widest text-primary font-headline font-bold">
                                Read Case Study →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
