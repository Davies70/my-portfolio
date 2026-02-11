// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0C10', // Deep Charcoal
        foreground: '#E0E0E0', // Off-White
        accent: '#C5F82A', // Electric Lime
        secondary: '#1C1C1E', // Card Backgrounds
      },
      fontFamily: {
        // Assumes you loaded these via next/font in layout.tsx
        sans: ['var(--font-inter)'],
        display: ['var(--font-clash)'],
      },
    },
  },
  plugins: [],
};
export default config;
