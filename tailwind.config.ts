import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			footer: '#144279',
  			primary: '#165DB0',
  			secondary: '#FCC9BE',
  			salmon: '#FDEEE8',
  			led: '#E1E0F5',
  			secondaryDark: '#FBAB99',
  			btn: '#1873DE'
  		},
  		fontFamily: {
  			nunitoSans: ["var(--font-nunito-sans)"],
  			libreBodoni: ["var(--font-libre-bodoni)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
