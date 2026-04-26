"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.04)] border-b border-white/5">
            <div className="flex justify-between items-center w-full px-6 md:px-12 py-4 md:py-6 max-w-[1440px] mx-auto">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tighter text-white uppercase font-headline">
                    ONE Hand Labs
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-12 items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`font-headline tracking-tight text-sm uppercase transition-colors duration-300 ${isActive
                                    ? "text-white border-b border-primary pb-1"
                                    : "text-neutral-400 hover:text-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Action Area & Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/services"
                        className="hidden md:block bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-xs px-6 py-2.5 rounded-lg font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 cyan-glow"
                    >
                        Dual-Core
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="md:hidden relative z-[60] cursor-pointer pointer-events-auto text-white p-2 hover:text-primary transition-colors flex items-center justify-center"
                        aria-label="Toggle mobile menu"
                    >
                        <span className="material-symbols-outlined text-[28px] pointer-events-none">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 flex flex-col items-center py-8 gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`font-headline tracking-widest text-lg uppercase transition-colors duration-300 ${isActive
                                    ? "text-primary font-bold"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-sm px-10 py-3 rounded-lg font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 cyan-glow"
                    >
                        Dual-Core Target
                    </Link>
                </div>
            )}
        </nav>
    );
}