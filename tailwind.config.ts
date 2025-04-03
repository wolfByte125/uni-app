import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["var(--font-monty-regular)"],
      // headings: ['var(--font-barlow-condensed)']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "harvard-crimson": "#C90016",
        "gray-bg": "#D3D3D3",
        "lighter-gray-bg": "#F0F0F0",
        "white-bg": "#F9F9F9",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
