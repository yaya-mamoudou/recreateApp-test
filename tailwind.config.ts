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
      fontFamily: {
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          lg: '800px',   // Custom width for 'lg' breakpoint
          xl: '1000px',  // Custom width for 'xl' breakpoint
          '2xl': '1200px', // Custom width for '2xl' breakpoint
        },
      },
      fontSize: {
        '3xl': '4.188rem',
        '2xl': ['3.188rem', { lineHeight: '3.5rem' }],
        'xl': '2.375rem',
        'lg': '1.75rem',
        'md': '1.175rem',
        'sm': '0.91rem',
        'xs': '0.75rem'
      },
      borderRadius: {
        20: '20px',
        full: '100%'
      }
    }


  },
  plugins: [],
};
export default config;
