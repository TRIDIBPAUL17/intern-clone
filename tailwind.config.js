/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        'accent': '#8a2be2',
    'text-primary': '#ffffff',
    'text-secondary': '#b3b3b3',
    'primary-bg': '#2e074b',
        'primary-bg-dark': '#000000', // Black for dark mode background
      },
      backgroundImage: theme => ({
        'primary-bg': 'linear-gradient(135deg, #1e0533, #110a1f)',
      }),
    },
  },
  plugins: [],
};
