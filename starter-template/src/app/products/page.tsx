import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import CTA from "@/sections/CTA";
import ProductsHero from "@/sections/ProductsHero";
import ProductFeatureShowcase from "@/sections/ProductFeatureShowcase";
import CrossSellStrip from "@/sections/CrossSellStrip";
import MidCTA from "@/sections/MidCTA";

export const metadata: Metadata = {
    title: "Products | CRM Nexus, HRMS Pro & PaySync",
    description: "Explore ONE Hand Labs' enterprise product suite — CRM Nexus for sales teams, HRMS Pro for HR automation, and PaySync for compliant payroll processing in India.",
    alternates: { canonical: "https://onehandlabs.in/products" },
};

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <ProductsHero />
                <ProductFeatureShowcase />
                <CrossSellStrip />
                <MidCTA />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
