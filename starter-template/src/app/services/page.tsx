import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Header from "@/sections/Header";
import SplitGrid from "@/sections/SplitGrid";
import StatsSection from "@/sections/StatsSection";
import Footer from "@/sections/Footer";

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
            </main>
            <Footer />
        </div>
    );
}
