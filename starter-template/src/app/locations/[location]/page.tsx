import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import FeaturedResults from "@/sections/FeaturedResults";
import OldCTA from "@/sections/OldCTA";
import Footer from "@/sections/Footer";

interface LocationPageProps {
    params: {
        location: string;
    };
}

// 1. Generate Static HTML during build for all 50 locations
export async function generateStaticParams() {
    return locations.map((loc) => ({
        location: loc.slug,
    }));
}

// 2. Generate Localized Metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
    const data = locations.find((loc) => loc.slug === params.location);
    if (!data) return {};

    return {
        title: `Medical Digital Marketing Agency in ${data.name} | ONE Hand Labs`,
        description: `Looking for top hospital website development in ${data.name}? ONE Hand Labs engineers bespoke digital solutions and branding for clinics in ${data.region}.`,
        alternates: {
            // Absolute canonical ensures no duplication penalties
            canonical: `https://onehandlabs.in/locations/${data.slug}`,
        },
    };
}

// 3. Render the localized version of the Landing Page
export default function LocationLandingPage({ params }: LocationPageProps) {
    const data = locations.find((loc) => loc.slug === params.location);

    if (!data) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {/* Dynamically pass localized SEO to the Hero component */}
                <Hero 
                    titlePrefix={data.h1Prefix}
                    titleHighlight={data.h1Highlight}
                    titleSuffix={data.h1Suffix}
                    subtitle={data.subtitle}
                />
                
                {/* Re-use core authority components */}
                <LogoTicker />
                <FeaturedResults />
                <OldCTA />
            </main>
            <Footer />
        </div>
    );
}
