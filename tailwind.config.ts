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
        black: "#2b2b2b",
        'black-secondary': "#3b3b3b",
        'gray-caption': "#858584",
        'gray-400': "#cccccc",
        'purple': "#a259ff",
        'white': "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
