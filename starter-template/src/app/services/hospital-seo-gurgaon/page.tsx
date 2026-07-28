import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import MidCTA from "@/sections/MidCTA";
import HospitalSeoPillar from "@/sections/HospitalSeoPillar";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
    title: "Hospital & Clinic SEO in Gurgaon | Medical Website Development",
    description:
        "Hospital SEO, clinic medical SEO, and website development in Gurgaon — E-E-A-T, medical schema, Core Web Vitals, and AI search visibility for Google AI Overviews, ChatGPT, and Perplexity.",
    keywords: [
        "hospital SEO Gurgaon",
        "clinic SEO Gurgaon",
        "medical SEO Gurgaon",
        "hospital website development Gurgaon",
        "healthcare digital marketing Gurgaon",
        "doctor SEO Gurgaon",
        "AI search optimization healthcare",
    ],
    openGraph: {
        type: "website",
        url: "https://onehandlabs.in/services/hospital-seo-gurgaon",
        title: "Hospital & Clinic SEO in Gurgaon | ONE Hand Labs",
        description: "Medical SEO and website development for hospitals and clinics across Gurgaon.",
    },
    alternates: { canonical: "https://onehandlabs.in/services/hospital-seo-gurgaon" },
};

const gurgaonAreas = locations.filter((l) => l.region === "Gurgaon").map((l) => l.name);

const faqs = [
    {
        question: "How long does hospital SEO take to show results in Gurgaon?",
        answer: "Technical fixes (schema, Core Web Vitals, indexing) show up in Search Console within weeks. Competitive rankings for terms like “urologist Gurgaon” or “best clinic DLF Phase 2” typically build over 3–6 months of consistent content and authority work.",
    },
    {
        question: "Do you work with individual doctors, not just hospitals?",
        answer: "Yes — our portfolio includes both clinic platforms like Cure Stone and individual physician brands. The approach differs: personal doctor SEO leans harder on E-E-A-T and personal credibility signals.",
    },
    {
        question: "What makes medical SEO different from regular SEO?",
        answer: "Google treats health content as YMYL (Your Money or Your Life) and applies stricter E-E-A-T scrutiny. That means author credentials, medical schema markup, and citation-worthy, accurate content matter more than they do for a typical business site.",
    },
    {
        question: "Can you also just build us a new website?",
        answer: "Yes. Website development and SEO are usually the same engagement for us — we build the site and the SEO foundation together on Next.js, rather than bolting SEO onto an existing slow site afterward.",
    },
];

export default function HospitalSeoGurgaonPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <HospitalSeoPillar
                    city="Gurgaon"
                    areas={gurgaonAreas}
                    caseStudy={{
                        name: "Cure Stone — Urology & Kidney Stone Clinic",
                        slug: "cure-stone-urology-gurgaon",
                        desc: "Gurgaon's specialized urology platform, built to solve a real visibility gap — patient enquiries rose substantially within 60 days of launch.",
                    }}
                    faqs={faqs}
                />
                <MidCTA />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
