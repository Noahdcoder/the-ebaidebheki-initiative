/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flamingo: "#EA6630",
        cinnabar: "#E2472E",
        bianca: "#FAF5EA",
        supernova: "#FAC50C",
        tonyspink: "#E49F7C",
        emperor: "#4F44F4F",
        white: "#FFFFFF",
        mantis: "#7CC453",
        mallard: "#2E4B20",
        frost: "#EEF8E6",
        pixieGreen: "#B2D7B2",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
