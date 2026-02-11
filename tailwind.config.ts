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
        background: '#0a192f',
        'background-alt': '#112240',
        foreground: '#ccd6f6',
        'foreground-muted': '#8892b0',
        accent: '#64ffda',
        'accent-muted': 'rgba(100, 255, 218, 0.1)',
        card: '#112240',
        'card-foreground': '#ccd6f6',
        border: 'rgba(136, 146, 176, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-clash)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
