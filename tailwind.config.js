/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["quicksand", "sans-serif"],
      },
      colors: {
        primary: "#ea580c",
        secondary: "#ea930c",
        tertiary: "#a40a08",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
