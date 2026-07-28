"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-[0_0_40px_rgba(0,255,255,0.04)]"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div
                className={`flex justify-between items-center w-full px-6 md:px-12 max-w-[1440px] mx-auto transition-all duration-500 ${scrolled ? "py-4" : "py-6 md:py-8"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-white uppercase font-headline">
                    ONE Hand Labs
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 lg:gap-10 items-center list-none">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`font-headline tracking-tight text-sm uppercase transition-colors duration-300 ${isActive
                                        ? "text-white border-b border-primary pb-1"
                                        : "text-neutral-400 hover:text-primary"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA Action Area & Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:block bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-xs px-6 py-2.5 rounded-lg font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 cyan-glow"
                    >
                        Book a Call
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden relative z-[60] cursor-pointer pointer-events-auto text-white p-2 hover:text-primary transition-colors flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-[28px] pointer-events-none">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <ul
                    id="mobile-menu"
                    className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 flex flex-col items-center py-8 gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 list-none"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`font-headline tracking-widest text-lg uppercase transition-colors duration-300 ${isActive
                                        ? "text-primary font-bold"
                                        : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-sm px-10 py-3 rounded-lg font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 cyan-glow inline-block"
                        >
                            Book a Call
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
