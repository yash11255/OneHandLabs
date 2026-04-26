import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import FeaturedBlog from "@/sections/FeaturedBlog";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
    title: "Blog | CRM, HRMS & Payroll Insights",
    description:
        "Practical guides and expert insights on CRM strategy, HR automation, and payroll compliance for Indian businesses — by ONE Hand Labs.",
    keywords: [
        "CRM software India",
        "HRMS for Indian companies",
        "payroll compliance guide",
        "TDS EPF ESI automation",
        "HR software small business",
        "ONE Hand Labs blog",
    ],
    openGraph: {
        type: "website",
        url: "https://onehandlabs.in/blog",
        title: "Blog | ONE Hand Labs",
        description: "Expert insights on CRM, HRMS, and payroll for Indian enterprises.",
    },
    alternates: { canonical: "https://onehandlabs.in/blog" },
};

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <FeaturedBlog />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
