import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import MidCTA from "@/sections/MidCTA";
import HospitalSeoPillar from "@/sections/HospitalSeoPillar";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
    title: "Hospital & Clinic SEO in Delhi | Medical Website Development",
    description:
        "Hospital SEO, clinic medical SEO, and website development in Delhi — E-E-A-T, medical schema, Core Web Vitals, and AI search visibility for Google AI Overviews, ChatGPT, and Perplexity.",
    keywords: [
        "hospital SEO Delhi",
        "clinic SEO Delhi",
        "medical SEO Delhi",
        "hospital website development Delhi",
        "healthcare digital marketing Delhi NCR",
        "doctor SEO Delhi",
        "AI search optimization healthcare",
    ],
    openGraph: {
        type: "website",
        url: "https://onehandlabs.in/services/hospital-seo-delhi",
        title: "Hospital & Clinic SEO in Delhi | ONE Hand Labs",
        description: "Medical SEO and website development for hospitals and clinics across Delhi.",
    },
    alternates: { canonical: "https://onehandlabs.in/services/hospital-seo-delhi" },
};

const delhiAreas = locations.filter((l) => l.region === "Delhi").map((l) => l.name);

const faqs = [
    {
        question: "How long does hospital SEO take to show results in Delhi?",
        answer: "Technical fixes (schema, Core Web Vitals, indexing) show up in Search Console within weeks. Competitive rankings for terms like “urologist South Delhi” or “best clinic Dwarka” typically build over 3–6 months of consistent content and authority work.",
    },
    {
        question: "Do you work with individual doctors, not just hospitals?",
        answer: "Yes — our portfolio includes both clinic platforms and individual physician brands, including Dr. Deepanshu Gupta, a leading urologist serving Gurgaon and Delhi NCR. Personal doctor SEO leans harder on E-E-A-T and personal credibility signals.",
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

export default function HospitalSeoDelhiPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <HospitalSeoPillar
                    city="Delhi"
                    areas={delhiAreas}
                    caseStudy={{
                        name: "Dr. Deepanshu Gupta — Urology & Andrology",
                        slug: "dr-deepanshu-gupta-urologist-gurgaon",
                        desc: "A digital presence built to handle real referral volume for a leading urologist serving Gurgaon and Delhi NCR — clinical credential-first architecture with E-E-A-T at the core.",
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
