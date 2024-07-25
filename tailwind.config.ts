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
        'primary-green': {
          '50': '#f5faeb',
          '100': '#e6f4d3',
          '200': '#d0ebab',
          '300': '#b7df86',
          '400': '#92ca51',
          '500': '#74b032',
          '600': '#588c24',
          '700': '#456b20',
          '800': '#38561e',
          '900': '#31491e',
          '950': '#18280b',
        },
        'primary-blue': {
          '50': '#ecfdff',
          '100': '#cefaff',
          '200': '#a3f1fe',
          '300': '#64e6fc',
          '400': '#1ed0f2',
          '500': '#02acd0',
          '600': '#058eb5',
          '700': '#0c7192',
          '800': '#135c77',
          '900': '#154d64',
          '950': '#073145',
        },
      }
    },
  },
  plugins: [],
};
export default config;
