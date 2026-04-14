import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#c1fffe",
                "primary-container": "#00ffff",
                "primary-dim": "#00e6e6",
                "on-primary": "#006767",
                "on-primary-container": "#005d5d",
                secondary: "#d4e4f6",
                "secondary-container": "#394857",
                "secondary-dim": "#c6d6e8",
                "on-secondary": "#445362",
                "on-secondary-container": "#c2d2e4",
                tertiary: "#63baff",
                "tertiary-container": "#3badfc",
                "tertiary-dim": "#2ea5f3",
                "on-tertiary": "#003655",
                "on-tertiary-container": "#002a44",
                background: "#0e0e0e",
                "on-background": "#ffffff",
                surface: "#0e0e0e",
                "on-surface": "#ffffff",
                "surface-variant": "#262626",
                "on-surface-variant": "#adaaaa",
                "surface-container": "#1a1a1a",
                "surface-container-low": "#131313",
                "surface-container-high": "#20201f",
                "surface-container-highest": "#262626",
                "surface-container-lowest": "#000000",
                outline: "#767575",
                "outline-variant": "#484847",
            },
            fontFamily: {
                headline: ["var(--font-space-grotesk)", "sans-serif"],
                body: ["var(--font-manrope)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem",
            },
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
    },
    plugins: [],
};
export default config;
