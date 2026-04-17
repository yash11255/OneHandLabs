import Navbar from "@/sections/Navbar";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | ONE Hand Labs",
    description: "Get in touch with ONE Hand Labs, a hybrid laboratory for high-performance software development and data-driven marketing growth in Delhi NCR.",
    alternates: {
        canonical: "https://onehandlabs.com/contact",
    },
};

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
