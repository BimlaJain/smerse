import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-black": "#0A0A2B",
        "purple": "#952FFE",
        "dark-pink": "#C641C6",
        "dark-orange": "#FF676B",
        "blue": "#0a0a2b"
      },
      fontFamily: {
        lato: ["Lato", "serif"],
      },
      fontSize: {
        "customSm": "40px",
      }
    },
  },
  plugins: [],
} satisfies Config;
