import Navbar from "@/sections/Navbar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
