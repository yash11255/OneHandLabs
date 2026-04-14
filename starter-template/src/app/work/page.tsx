import Navbar from "@/sections/Navbar";
import Work from "@/sections/Work";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function WorkPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Work />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
