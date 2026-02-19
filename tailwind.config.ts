import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "deep-navy": "#0a192f",
                "gold-accent": "#d4af37",
                "soft-black": "#1a1a1a",
            },
            fontFamily: {
                sans: ["Pretendard", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
