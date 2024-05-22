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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        "desappear": {
          from: {
            opacity: "0",
            transform: "translateY(4rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0%)",
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide": "slide 750ms ease-in-out",
        "appear": "appear 750ms ease-in-out",
        "desappear": "reverse 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
