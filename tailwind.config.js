/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#ebf8ff',
          '100': '#d2eeff',
          '200': '#afe3ff',
          '300': '#79d4ff',
          '400': '#3ab9ff',
          '500': '#0d94ff',
          '600': '#0070ff',
          '700': '#0057ff',
          '800': '#0046d3',
          '900': '#0341a5',
          '950': '#072357',
      },
      
      }
    },
  },
  plugins: [],
}

