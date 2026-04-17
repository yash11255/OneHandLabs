import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "ONE Hand Labs | Engineering Logic. Marketing Magic.",
        template: "%s | ONE Hand Labs",
    },
    description: "A hybrid laboratory for high-performance software development and data-driven marketing growth located in Delhi NCR, Gurugram. Contact us for top-tier digital scaling.",
    keywords: [
        "Medical Digital Marketing Agency in Delhi",
        "Healthcare Marketing Company in Gurgaon",
        "Hospital Website Development Delhi NCR",
        "Digital Solutions for Doctors and Hospitals",
        "Best Healthcare Branding Agency Gurgaon",
        "Software Development for Medical Clinics Delhi",
        "Custom EMR Software Development",
        "Next.js Hospital Websites",
        "Patient Portal Design Delhi",
        "Doctor Profile Video Shoots Gurgaon",
        "IoT Solutions for Smart Hospitals"
    ],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://onehandlabs.com",
        title: "ONE Hand Labs | Engineering Logic. Marketing Magic.",
        description: "A hybrid laboratory for high-performance software development and data-driven marketing growth.",
        siteName: "ONE Hand Labs",
    },
    twitter: {
        card: "summary_large_image",
        title: "ONE Hand Labs | Engineering Logic. Marketing Magic.",
        description: "A hybrid laboratory for high-performance software development and data-driven marketing growth.",
    },
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/site.webmanifest",
    alternates: {
        canonical: "https://onehandlabs.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${spaceGrotesk.variable} ${manrope.variable} font-body antialiased bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container`}
            >
                {children}
            </body>
        </html>
    );
}
