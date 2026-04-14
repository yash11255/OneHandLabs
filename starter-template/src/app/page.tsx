import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import FeaturedResults from "@/sections/FeaturedResults";
import OldCTA from "@/sections/OldCTA";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <LogoTicker />
                <FeaturedResults />
                <OldCTA />
            </main>
            <Footer />
        </div>
    );
}
