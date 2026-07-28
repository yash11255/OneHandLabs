import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import FeaturedResults from "@/sections/FeaturedResults";
import FeaturesGrid from "@/sections/FeaturesGrid";
import Testimonials from "@/sections/Testimonials";
import MidCTA from "@/sections/MidCTA";
import Faqs from "@/sections/Faqs";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
    title: "ONE Hand Labs | CRM, HRMS & Payroll Systems",
    description: "Enterprise-grade CRM, HRMS, and Payroll software built for Indian businesses. Automate HR, payroll compliance, and customer management with ONE Hand Labs.",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <LogoTicker />
                <FeaturesGrid />
                <FeaturedResults />
                <Testimonials />
                <MidCTA />
                <Faqs />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
