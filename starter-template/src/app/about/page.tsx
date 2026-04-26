import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import AboutHero from "@/sections/AboutHero";

export const metadata: Metadata = {
    title: "About | ONE Hand Labs",
    description: "Learn about ONE Hand Labs — the team behind India's most reliable CRM, HRMS, and Payroll platforms. Based in Delhi NCR, serving enterprises nationwide.",
    alternates: { canonical: "https://onehandlabs.in/about" },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <AboutHero />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
