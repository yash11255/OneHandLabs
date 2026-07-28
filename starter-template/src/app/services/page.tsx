import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Header from "@/sections/Header";
import SplitGrid from "@/sections/SplitGrid";
import StatsSection from "@/sections/StatsSection";
import CrossSellStrip from "@/sections/CrossSellStrip";
import MidCTA from "@/sections/MidCTA";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services | Healthcare Digital Marketing & Website Development",
    description:
        "ONE Hand Labs offers premium healthcare digital marketing, medical website development, doctor personal branding, and SEO for clinics and hospitals in Delhi NCR and Gurgaon.",
    keywords: [
        "healthcare digital marketing services",
        "medical website development Gurgaon",
        "hospital SEO agency Delhi",
        "doctor personal branding India",
        "clinic website design Delhi NCR",
        "healthcare content strategy",
        "ONE Hand Labs services",
    ],
    openGraph: {
        type: "website",
        url: "https://onehandlabs.in/services",
        title: "Services | ONE Hand Labs",
        description:
            "Premium digital marketing, website development, and SEO services for healthcare brands — hospitals, clinics, and doctors across India.",
    },
    alternates: {
        canonical: "https://onehandlabs.in/services",
    },
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Header />
                <SplitGrid />
                <StatsSection />

                <section className="py-16 px-6 md:px-16 lg:px-24" style={{ background: "rgba(10,10,12,1)" }}>
                    <div className="max-w-[1440px] mx-auto text-center">
                        <span className="text-xs uppercase tracking-[0.3em] font-headline text-primary font-bold mb-6 block">
                            Explore by City
                        </span>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/services/hospital-seo-gurgaon"
                                className="inline-flex items-center gap-2 font-headline font-bold text-sm px-7 py-3.5 rounded-xl border border-white/15 text-white transition-all duration-300 hover:bg-white/5"
                            >
                                Hospital &amp; Clinic SEO in Gurgaon →
                            </Link>
                            <Link
                                href="/services/hospital-seo-delhi"
                                className="inline-flex items-center gap-2 font-headline font-bold text-sm px-7 py-3.5 rounded-xl border border-white/15 text-white transition-all duration-300 hover:bg-white/5"
                            >
                                Hospital &amp; Clinic SEO in Delhi →
                            </Link>
                        </div>
                    </div>
                </section>

                <CrossSellStrip
                    eyebrow="Also Need Software?"
                    heading="We build CRM, HRMS, and Payroll software in-house — CRM Nexus, HRMS Pro, and PaySync — for businesses that want more than a website."
                    ctaLabel="See the Products"
                    href="/products"
                />
                <MidCTA />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
