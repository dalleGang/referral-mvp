import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#dfeeff',
          500: '#1e5eff',
          600: '#194fe5',
          700: '#133eb3'
        },
        ink: '#0f172a',
        slate: '#e2e8f0'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
