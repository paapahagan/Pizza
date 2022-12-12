/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Mask group.svg')",
      },
    },
  },
  plugins: [],
};
