import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20182f",
        paper: "#f6f0e5",
        coral: "#eb684f",
        sage: "#a9bf68",
        lilac: "#a9a6e8"
      },
      boxShadow: {
        lift: "0 24px 70px -36px rgba(32, 24, 47, 0.36)"
      }
    }
  },
  plugins: []
};

export default config;
