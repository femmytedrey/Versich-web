/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "versich-blue": "#1D88ED",
        "versich-blue-hover": "#0A6ECD",
        "versich-primary-bg": "#FCFCFC",
        "versich-dark-blue": "#00204A",
        "versich-darktext-color": "#252B42",
        "versich-light-blue": "#114B8A",
        "versich-border": "#bdbdbd",
        "versich-label": "#666666",
      },
      spacing: {
        "negate-85": "-85px",
        "hero-height": "80vh",
      },
    },
  },
  plugins: [],
};
