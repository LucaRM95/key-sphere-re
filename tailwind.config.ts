import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/properties/**/*.{js,ts,jsx,tsx,mdx}",
    // "/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1430px",
      "2xl": "1536px",
    },
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
      },
    },
  },
}) satisfies Config;
