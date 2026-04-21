import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import FeaturedBlog from "@/sections/FeaturedBlog";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Blog | Healthcare Digital Insights & Case Studies",
    description:
        "Expert insights and case studies on healthcare digital transformation — featuring iMedi.health, ABCD.health, Dr. Ashish Kalla, Medikold, Cure Stone, Dr. Deepanshu Gupta, and Dr. Anshul Goel. By ONE Hand Labs.",
    keywords: [
        "iMedi health digital platform",
        "ABCD health obesity management",
        "Dr Ashish Kalla drashishkalla.com",
        "Medikold pharma platform",
        "Cure Stone urology Gurgaon",
        "Dr Deepanshu Gupta urologist",
        "Dr Anshul Goel orthopedic",
        "healthcare SEO India",
        "medical website development",
        "ONE Hand Labs blog",
    ],
    openGraph: {
        type: "website",
        url: "https://onehandlabs.in/blog",
        title: "Blog | ONE Hand Labs",
        description:
            "Case studies and expert spotlights on healthcare digital platforms — iMedi.health, ABCD.health, DrAshishKalla.com, Medikold, Cure Stone, and more.",
    },
    alternates: {
        canonical: "https://onehandlabs.in/blog",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ONE Hand Labs Blog",
    "url": "https://onehandlabs.in/blog",
    "description": "Healthcare digital marketing insights and case studies by ONE Hand Labs.",
    "publisher": {
        "@type": "Organization",
        "name": "ONE Hand Labs",
        "url": "https://onehandlabs.in",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "addressCountry": "IN",
        },
    },
    "blogPost": [
        {
            "@type": "BlogPosting",
            "headline": "How iMedi.health Is Redefining Regenerative Care Through Digital Innovation",
            "url": "https://onehandlabs.in/blog/imedi-digital-health-ecosystem",
            "datePublished": "2026-04-18",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "WebSite", "name": "iMedi.health", "url": "https://imedi.health" },
        },
        {
            "@type": "BlogPosting",
            "headline": "ABCD.health: Turning the Science of Obesity Into a Scalable Digital Platform",
            "url": "https://onehandlabs.in/blog/abcd-health-obesity-management",
            "datePublished": "2026-04-10",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "WebSite", "name": "ABCD.health", "url": "https://www.abcd.health" },
        },
        {
            "@type": "BlogPosting",
            "headline": "Dr. Ashish Kalla on Regenerative Medicine: Building a Doctor Brand That Patients Trust",
            "url": "https://onehandlabs.in/blog/dr-ashish-kalla-regenerative-medicine",
            "datePublished": "2026-04-03",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "Person", "name": "Dr. Ashish Kalla", "url": "https://www.drashishkalla.com/" },
        },
        {
            "@type": "BlogPosting",
            "headline": "Medikold: Powering Pharmaceutical Digital Infrastructure in India",
            "url": "https://onehandlabs.in/blog/medikold-pharma-platform",
            "datePublished": "2026-03-14",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "WebSite", "name": "Medikold", "url": "https://medikold.com" },
        },
        {
            "@type": "BlogPosting",
            "headline": "Cure Stone: Gurgaon's Premier Kidney Stone & Urology Treatment Platform",
            "url": "https://onehandlabs.in/blog/cure-stone-urology-gurgaon",
            "datePublished": "2026-03-05",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "WebSite", "name": "Cure Stone", "url": "https://thecurestone.com" },
        },
        {
            "@type": "BlogPosting",
            "headline": "Dr. Deepanshu Gupta: Gurgaon's Leading Urologist & Andrologist",
            "url": "https://onehandlabs.in/blog/dr-deepanshu-gupta-urologist-gurgaon",
            "datePublished": "2026-02-20",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "Person", "name": "Dr. Deepanshu Gupta" },
        },
        {
            "@type": "BlogPosting",
            "headline": "Dr. Anshul Goel: 19 Years of Orthopedic & Spine Excellence — Now Online",
            "url": "https://onehandlabs.in/blog/dr-anshul-goel-orthopedic-spine-surgeon",
            "datePublished": "2026-02-08",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
            "about": { "@type": "Person", "name": "Dr. Anshul Goel" },
        },
        {
            "@type": "BlogPosting",
            "headline": "Why Healthcare SEO in India Is Broken — And How We're Fixing It",
            "url": "https://onehandlabs.in/blog/healthcare-seo-india",
            "datePublished": "2026-03-22",
            "author": { "@type": "Organization", "name": "ONE Hand Labs" },
        },
    ],
};

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Script
                id="blog-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="flex-1">
                <FeaturedBlog />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
