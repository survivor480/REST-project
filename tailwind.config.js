/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "300px",
      },
      colors: {
        'tooltip-color': 'rgba(241, 235, 235, 1)'
      }
    },
  },
  plugins: [],
};
