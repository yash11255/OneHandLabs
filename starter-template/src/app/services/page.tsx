import Navbar from "@/sections/Navbar";
import Header from "@/sections/Header";
import SplitGrid from "@/sections/SplitGrid";
import StatsSection from "@/sections/StatsSection";
import Footer from "@/sections/Footer";

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
