import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide": {
          from: {
            opacity: "0",
            transform: "translateY(4rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0%)",
          }
        },
        "appear": {
          from: {
            opacity: "0",
            transform: "translateY(-4rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0%)",
          }
        },
      },
      animation: {
        "slide": "slide 750ms ease-in-out",
        "appear": "appear 750ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
