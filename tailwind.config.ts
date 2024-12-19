import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/properties/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "ks-blue": "#00487c",
        "ks-beige": "#dca85e",
        "ks-grey": "#515151",
        "ks-dark": "#2b2c39",
        "ks-silver": "#eeeeee",
        "ks-white": "#fcf8f1",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
