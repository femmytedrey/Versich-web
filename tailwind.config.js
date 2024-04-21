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
        "versich-light-gray": "#9F9F9F",
      },
      spacing: {
        "negate-85": "-85px",
        "hero-height": "80vh",
      },
      boxShadow: {
        top: "0 -8px 12px -4px rgba(0, 0, 0, 0.04)",
        form: "0px 0px 12px 6px rgba(0, 0, 0, 0.03)",
        selection: "0px 0px 12px 6px rgba(0, 0, 0, 0.05)"
      },
      screens: {
        'customxs': '425px',
      }
    },
  },
  plugins: [],
};
