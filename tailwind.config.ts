import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "#144279",
        primary: "#165DB0",
        secondary: "#FCC9BE",
        salmon: "#FDEEE8"
      },
    },
  },
  plugins: [],
} satisfies Config;
