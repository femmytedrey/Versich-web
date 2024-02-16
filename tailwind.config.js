/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'versich-blue': '#1D88ED',
        'versich-primary-bg' : '#FCFCFC',
        'versich-dark-blue' : '#00204A',
      },
      spacing: {
        'negate-85': '-85px',
        'hero-height': '80vh',
      },
    },
  },
  plugins: [],
};
