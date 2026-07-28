import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        default: "ONE Hand Labs | Software Development Agency & CRM, HRMS, Payroll Products",
        template: "%s | ONE Hand Labs",
    },
    description: "ONE Hand Labs builds custom software and digital growth for healthcare brands, and makes CRM Nexus, HRMS Pro & PaySync — enterprise CRM, HRMS, and payroll software for Indian businesses. Based in Delhi NCR.",
    keywords: [
        "software development agency India",
        "healthcare digital marketing agency",
        "CRM software India",
        "HRMS software India",
        "payroll software India",
        "HR management system Delhi",
        "payroll automation India",
        "TDS EPF ESI payroll",
        "CRM for Indian SMEs",
        "enterprise software Delhi NCR",
        "ONE Hand Labs",
    ],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://onehandlabs.in",
        title: "ONE Hand Labs | Software Development Agency & CRM, HRMS, Payroll Products",
        description: "Custom software and digital growth for healthcare brands, plus CRM Nexus, HRMS Pro & PaySync — enterprise CRM, HRMS, and payroll software for Indian businesses.",
        siteName: "ONE Hand Labs",
    },
    twitter: {
        card: "summary_large_image",
        title: "ONE Hand Labs | Software Development Agency & CRM, HRMS, Payroll Products",
        description: "Custom software and digital growth for healthcare brands, plus CRM Nexus, HRMS Pro & PaySync for Indian businesses.",
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
        canonical: "https://onehandlabs.in",
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

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ONE Hand Labs",
    url: "https://onehandlabs.in",
    logo: "https://onehandlabs.in/android-chrome-512x512.png",
    description: "Software development agency and enterprise product studio based in Delhi NCR — building custom digital growth for healthcare brands and CRM/HRMS/Payroll software for Indian businesses.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Delhi NCR",
        addressCountry: "IN",
    },
    telephone: "+91-8950143430",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8950143430",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ONE Hand Labs",
    url: "https://onehandlabs.in",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://onehandlabs.in/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
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
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
            </head>
            <body
                className={`${spaceGrotesk.variable} ${manrope.variable} font-body antialiased bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container`}
            >
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
